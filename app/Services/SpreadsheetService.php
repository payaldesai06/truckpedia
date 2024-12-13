<?php

namespace App\Services;

use App\Exports\LoadWeeklyExcelReport;
use App\Mail\Load\LoadWeeklyReport;
use App\Models\AdminCompanyDetail;
use App\Models\Load;
use App\Models\Spreadsheet;
use App\Models\SpreadsheetColumn;
use App\Models\SpreadsheetCustomColumnData;
use App\Models\SpreadsheetSharedUser;
use App\Models\SpreadsheetSheet;
use App\Models\SpreadsheetSheetColumn;
use App\Models\SpreadsheetSheetRowMetaData;
use App\Models\SpreadsheetSheetUserSettings;
use Carbon\Carbon;
use Carbon\CarbonPeriod;
use Exception;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;
use Maatwebsite\Excel\Facades\Excel;
use stdClass;
use Illuminate\Support\Arr;
use App\Models\User;
use App\Models\AccessorialDeduction;
use App\Models\AccessorialFee;

class SpreadsheetService {

  /**
   * Get all spreadsheet data by company id and owner id.
   * @return mixed
   * @throws Exception
   */
  public function getSpreadsheetList() {
    return Spreadsheet::select('id', 'name', 'owner_id')
      ->where('company_id', getAuthAdminCompanyId())
      ->get()
      ->map(function ($spreadsheet) {
        if ($spreadsheet->owner_id == Auth::id()) {
          $accessLevel = config('constant.spreadsheet.accessRole.owner');
        } else {
          $accessLevel = $spreadsheet->sharedUsers()->where('user_id', Auth::id())->pluck('access_level')->first();
          $accessLevel = config('constant.spreadsheet.accessLevel')[$accessLevel] ?? null;
        }

        if (empty($accessLevel)) {
          return [];
        }
        return [
          'id' => $spreadsheet->id,
          'name' => $spreadsheet->name,
          'accessLevel' => $accessLevel
        ];
      })->filter()->values();
  }

  /**
   * Get User access level of spreadsheet using user id.
   * @param $spreadsheetId
   * @param $userId
   * @return mixed
   */
  private function getCurrentUserAccessLevel($spreadsheetId, $userId) {
    return SpreadsheetSharedUser::where('spreadsheet_id', $spreadsheetId)
      ->where('user_id', $userId)
      ->pluck('access_level')
      ->first();
  }

  /**
   * Get Specific spreadsheet by spreadsheet id.
   * @param $request
   * @return mixed
   * @throws Exception
   */
  public function getSpreadsheet($request) {
    $companyId = getAuthAdminCompanyId();
    $authUserId = Auth::id();
    $spreadsheet = Spreadsheet::select('id', 'name', 'key_entity', 'owner_id', 'company_id')
      ->with([
        'columns:id,spreadsheet_id,name,custom_type',
        'sheets:id,spreadsheet_id,name,filter',
        'sheets.sheetColumns:id,sheet_id,order,predefined_column,custom_column_id,width',
        'sheets.sheetColumns.spreadsheetColumn:id,name,custom_type',
        'company:id,timezone',
        'sheets.sheetUserSettings' => function ($query) use ($authUserId) {
          $query->select('row_height', 'sheet_id', 'id', 'color_schema', 'sort_schema', 'filter')
            ->where('user_id', $authUserId);
        }
      ])
      ->where('id', $request->id)
      ->where('company_id', $companyId)
      ->first();

    if (empty($spreadsheet)) {
      throw new Exception(config('response.spreadsheet.no_spreadsheet_found'));
    }

    $accessLevel = config('constant.spreadsheet.accessRole.owner');
    if ($spreadsheet->owner_id != $authUserId) {
      $accessLevel = $this->getCurrentUserAccessLevel($spreadsheet->id, $authUserId);
      if (empty($accessLevel)) {
        throw new Exception(config('response.spreadsheet.access_denied'));
      }
      $accessLevel = config('constant.spreadsheet.accessLevel')[$accessLevel] ?? null;
    }

    $ret = [
      'id' => $spreadsheet->id ?? null,
      'name' => $spreadsheet->name ?? '',
      'keyEntity' => array_search($spreadsheet->key_entity, config('constant.spreadsheet.keyEntity')) ?? '',
      'accessLevel' => $accessLevel
    ];

    $adminCompanyTimezone = $spreadsheet->company->timezone ?? '';
    if (empty($adminCompanyTimezone)) {
      $adminCompanyTimezone = 'America/Los_Angeles';
    }

    $ret['sheets'] = $spreadsheet->sheets->map(function ($sheet) use ($request, $accessLevel, $adminCompanyTimezone) {
      $sheetUserSettings = $sheet->sheetUserSettings->first();
      $filter = !empty($sheetUserSettings->filter) ? json_decode($sheetUserSettings->filter) : null;
      $rowHeight = $sheetUserSettings->row_height ?? null;
      $rowHeight = !empty($rowHeight) ? array_search($rowHeight, config('constant.spreadsheet.rowHeight')) : array_search(0, config('constant.spreadsheet.rowHeight'));

      $sortSchema = $sheetUserSettings->sort_schema ?? null;

      if ($sheet->sheetColumns->isEmpty()) {
        return [
          'id' => $sheet->id,
          'name' => $sheet->name,
          'filter' => $filter ?? new stdClass(),
          'rowHeight' => $rowHeight,
          'sortSchema' => json_decode($sortSchema) ?? [],
          'columns' => [],
          'content' => []
        ];
      }

      $columns = $this->getSheetColumns($sheet->sheetColumns, $accessLevel);
      $predefinedColumns = $sheet->sheetColumns->pluck('predefined_column')->filter() ?? null;

      // We do not need this anymore. Please comment out both FE and BE code for these special handling.
      $requestFilter = collect($request->sheets)->where('id', $sheet->id)->pluck('filter')->first() ?? null;
      if (!empty($requestFilter)) {
        // change both filters' all condition’s date to today.
        $convertedRequestFilter = $this->convertAllFilterDateToToday($requestFilter);
        $convertedSavedFilter = $this->convertAllFilterDateToToday(json_decode(json_encode($filter), true));
        // Compare request filter and saved filter.
        $isRequestAndDbFilterIsSame = $this->isSameFilter($convertedSavedFilter, $convertedRequestFilter);
        if ($isRequestAndDbFilterIsSame) {
          $filter = json_decode(json_encode($requestFilter, true));
        }
      }
      $loads = $this->getLoadsWithSheetFilter($this->getLoadQueryBuilder($predefinedColumns), $filter);
      $customColumns = $sheet->sheetColumns->whereNotNull('custom_column_id');
      $customColumnData = null;

      $entityIds = $loads->pluck('id')->toArray();

      if (!$customColumns->isEmpty() && !empty($entityIds)) {
        $customColumnData = SpreadsheetCustomColumnData::select(
          'id',
          'column_id',
          'entity_id',
          'value',
          'double_value',
          'decimal_value'
        )
          ->where('spreadsheet_id', $request->id)
          ->whereIn('entity_id', $entityIds)
          ->get();
      }

      $sheetRowsMetaData = SpreadsheetSheetRowMetaData::select('id', 'sheet_id', 'format', 'entity_id')
        ->where('sheet_id', $sheet->id)
        ->whereIn('entity_id', $entityIds)->get();

      $content = $loads->map(function ($load) use ($customColumnData, $sheet, $sheetRowsMetaData, $adminCompanyTimezone) {
        $oneRowMetaData = $sheetRowsMetaData->where('entity_id', $load->id)->first() ?? null;
        $sheetRowMetaDataEntityId = $oneRowMetaData->entity_id ?? null;
        $row = [
          'key_id' => $load->id,
          'format' => $load->id == $sheetRowMetaDataEntityId ? json_decode($oneRowMetaData->format ?? null) : null
        ];
        foreach ($sheet->sheetColumns as $column) {
          if (!empty($column->predefined_column)) {
            /* predefined column type*/
            switch ($column->predefined_column) {
              case 1:
                $value = $load->load_unique_id ?? null;
                break;

              case 2:
                $value = $load->refrence_id ?? '';
                break;

              case 3:
                $values = [];
                $loadShippers = $load->loadShippers;
                foreach ($loadShippers as $loadShipper) {
                  $values[] = $this->formatDateAndTimeHelper($loadShipper->shipping_date, $loadShipper->shipping_time, $loadShipper->shipping_end_time);
                }
                // To display new line or tab, use "\n" or "\t" (double quotes).
                $value = !empty($values) ? implode(';  ', $values) : '';
                break;

              case 4:
                $values = [];
                $loadReceivers = $load->loadReceivers;
                foreach ($loadReceivers as $loadReceiver) {
                  $values[] = $this->formatDateAndTimeHelper($loadReceiver->delivery_date, $loadReceiver->delivery_time, $loadReceiver->delivery_end_time);
                }
                $value = !empty($values) ? implode(';  ', $values) : '';
                break;

              case 5:
                $value = $load->customer->company_name ?? '';
                break;

              case 6:
                $values = [];
                $loadShippers = $load->loadShippers;
                foreach ($loadShippers as $loadShipper) {
                  $values[] = !empty($loadShipper) ? $loadShipper->city . ', ' . $loadShipper->state : '';
                }
                $value = !empty($values) ? implode(';  ', $values) : '';
                break;

              case 7:
                $values = [];
                $loadReceivers = $load->loadReceivers;
                foreach ($loadReceivers as $loadReceiver) {
                  $values[] = !empty($loadReceiver) ? $loadReceiver->city . ', ' . $loadReceiver->state : '';
                }
                $value = !empty($values) ? implode(';  ', $values) : '';
                break;

              case 8:
                $driversName = $load->loadDrivers->pluck('driverAsUsers')->flatten()->pluck('driverDetail')->pluck('name')->toArray();
                $value = implode(', ', $driversName) ?? '';
                break;

              case 9:
                $value = $load->dispatcher_notes ?? '';
                break;

              case 10:
                $value = !empty($load->status) ? config('constant.status.loadStatusFrontEnd')[$load->status] : '';
                break;

              case 11:
                $loadPodImages = $load->adminLoadImages;
                if (!$loadPodImages->isEmpty()) {
                  $value = $loadPodImages->map(function ($item) {
                    return [
                      "loadId" => $item->load_id,
                      "loadImageId" => $item->id
                    ];
                  });
                } else {
                  $value = [];
                }
                break;

              case 12:
                $value = $this->calculateDriverPayment($load);
                break;

              case 13:
                $value = !empty($load->total_amount) ? $load->total_amount : 0;
                break;

              case 14:
                $dispatcherDetail = $load->dispatcher->dispacherDetail ?? '';
                $value = !empty($dispatcherDetail) ? $dispatcherDetail->first_name . ' ' . $dispatcherDetail->last_name : '';
                break;

              case 15:
                $value = !empty($load->invoice_generated_at) ? Carbon::parse($load->invoice_generated_at, $adminCompanyTimezone)->format(config('constant.date_format')) : '';
                break;

              case 16:
                $value = !empty($load->total_miles) ? $load->total_miles : 0;
                break;

              case 17:
                $trucksNumber = $load->loadDrivers->pluck('truck')->pluck('number')->filter()->toArray();
                $value = implode(', ', $trucksNumber) ?? '';
                break;

              case 18:
                $trailersNumber = $load->loadDrivers->pluck('trailer')->pluck('number')->filter()->toArray();
                $externalTrailersNumber = $load->loadDrivers->pluck('external_trailer_number')->filter()->toArray();
                $trailersNumber = array_merge($trailersNumber, $externalTrailersNumber);
                $value = implode(', ', $trailersNumber) ?? '';
                break;

              case 19:
                $shippersNumber = $load->loadShippers->pluck('shipper_name')->toArray();
                $value = implode(';  ', $shippersNumber) ?? '';
                break;

              case 20:
                $receiversNumber = $load->loadReceivers->pluck('receiver_name')->toArray();
                $value = implode(';  ', $receiversNumber) ?? '';
                break;

              case 21:
                $totalWeight = $load->loadShippers->sum('freight_weight');
                $additionalFreightDetails = array_map(
                  fn ($item) => json_decode($item, true),
                  $load->loadShippers->pluck('additional_freight_details')->toArray()
                ) ?? [];
                $sumW = array_sum(array_column($additionalFreightDetails, 'W'));
                if ($sumW > 0) {
                  $totalWeight += $sumW;
                }
                $value = ($totalWeight > 0) ? strval($totalWeight) : '';
                break;

              case 22:
                $value = $load->bill_to_code ?? '';
                break;

              case 23:
                $value = $load->tag->business_name ?? '';
                break;

              case 24:
                $value = $load->thirdPartyCarrier->company_name ?? '';
                break;

              case 25:
                $loadDrivers = $load->loadDrivers;
                if ($loadDrivers->isNotEmpty()) {
                  $drivers = collect($loadDrivers->pluck('driverAsUsers')->flatten()->toArray());
                  $value = $drivers->map(function ($item) {
                    return [
                      "fn" => $item['first_name'] ?? null,
                      "ln" => $item['last_name'] ?? null
                    ];
                  });
                } else {
                  $value = [];
                }
                break;

              case 26:
                $value = $load->third_party_carrier_as_customer_id ? false : true;
                break;

              case 27:
                $value = $load->third_party_carrier_total_amount ?? null;
                break;

              case 28:
                if (!empty($load->third_party_carrier_rate_con_storage_file_name)) {
                  $value = [
                    'url' => getImage(
                      $load->third_party_carrier_rate_con_storage_file_name,
                      config('constant.s3.load_file')
                    )
                  ];
                } else {
                  $value = null;
                }
                break;

              case 29:
                if (!empty($load->third_party_carrier_bol_storage_file_name)) {
                  $value = [
                    'url' => getImage(
                      $load->third_party_carrier_bol_storage_file_name,
                      config('constant.s3.load_file')
                    )
                  ];
                } else {
                  $value = null;
                }
                break;

              case 30:
                $freightEquipmentTypes = [];

                $shippers = $load->loadShippers ?? collect();
                foreach ($shippers as $shipper) {
                  // Check if the freight equipment type is set and not null or an empty string
                  if (isset($shipper->freight_equipment_type) && $shipper->freight_equipment_type !== '') {
                    $freightEquipmentTypes[] = $shipper->freight_equipment_type;
                  }

                  // Check if additional_freight_details is not empty and parse the JSON data
                  if (!empty($shipper->additional_freight_details)) {
                    $additionalFreightDetails = json_decode($shipper->additional_freight_details, true);
                    if (!empty($additionalFreightDetails['a'])) {
                      // Extract equipment types from additional_freight_details and add them to the array
                      $equipmentTypes = array_column($additionalFreightDetails['a'], 'u');
                      $freightEquipmentTypes = array_merge($freightEquipmentTypes, array_filter($equipmentTypes));
                    }
                  }
                }
                $value = implode(', ', $freightEquipmentTypes);
                break;

              case 31:
                $freightDescriptions = [];

                $shippers = $load->loadShippers ?? collect();
                foreach ($shippers as $shipper) {
                  // Check if the freight description is set and not null or an empty string
                  if (isset($shipper->freight_description) && $shipper->freight_description !== '') {
                    $freightDescriptions[] = $shipper->freight_description;
                  }

                  // Check if additional_freight_details is not empty and parse the JSON data
                  if (!empty($shipper->additional_freight_details)) {
                    $additionalFreightDetails = json_decode($shipper->additional_freight_details, true);
                    if (!empty($additionalFreightDetails['a'])) {
                      // Extract equipment descriptions from additional_freight_details and add them to the array
                      $equipmentDescriptions = array_column($additionalFreightDetails['a'], 'd');
                      $freightDescriptions = array_merge($freightDescriptions, array_filter($equipmentDescriptions));
                    }
                  }
                }

                $value = implode(', ', $freightDescriptions);
                break;

              case 32:
                $value = null;
                if (
                  !is_null($load->total_amount) &&
                  !is_null($load->third_party_carrier_total_amount)
                ) {
                  $value = $load->total_amount - $load->third_party_carrier_total_amount;
                }
                break;

              case 33:
                $value = null;
                if (
                  !is_null($load->total_amount) && $load->total_amount
                  && !is_null($load->third_party_carrier_total_amount)
                ) {
                  $grossProfit = $load->total_amount - $load->third_party_carrier_total_amount;
                  $value = round($grossProfit * 100 / $load->total_amount, 2);
                }
                break;

              case 34:
                $value = null;
                $loadDriversEmptyDistances = $load->loadDrivers->whereNotNull('empty_distance');
                if ($loadDriversEmptyDistances->isNotEmpty()) {
                  $value = $loadDriversEmptyDistances->sum('empty_distance');
                }
                break;

              case 35:
                $value = !empty($load->container_status) ?
                  config('constant.load.container.status')[$load->container_status] : null;
                break;

              case 36:
                $shipper = $load->loadShippers->where('container_here', 1)->first();
                $receiver = $load->loadReceivers->where('container_here', 1)->first();
                $leg = $load->loadLegs->where('container_here', 1)->first();
                $terminal = $load->loadTerminals->where('container_here', 1)->first();
                if (!empty($shipper)) {
                  $value = $shipper['shipper_name'];
                } else if (!empty($receiver)) {
                  $value = $receiver['receiver_name'];
                } else if (!empty($leg)) {
                  $value = $leg['location_name'];
                } else if (!empty($terminal)) {
                  $value = $terminal['name'];
                } else {
                  $value = null;
                }
                break;

              case 37:
                $value = null;
                if (!empty($load->loadDrivers)) {
                  $loadDriversChassises = $load->loadDrivers->whereNotNull('chassis')
                    ->pluck('chassis')->toArray();
                  if (!empty($loadDriversChassises)) {
                    $value = implode(', ', $loadDriversChassises);
                  }
                }
                break;

              case 38:
                $value = null;
                $containers = $load->loadShippers->whereNotNull('container')
                  ->pluck('container')->toArray();
                if (!empty($containers)) {
                  $value = implode(', ', $containers);
                }
                break;

              case 39:
                $value = round($load->loadCharge->hauling_fees ?? 0, 2);
                break;

              case 40:
                $value = round($load->loadCharge->fuel_surcharge ?? 0, 2);
                break;

              case 41:
                $value = 0;
                if (!empty($load->loadCharge->accessorial_fee)) {
                  $accessorialFees = collect(json_decode($load->loadCharge->accessorial_fee));
                  $value = round($accessorialFees->sum('rate') ?? 0, 2);
                }
                break;

              case 42:
                $value = 0;
                if (!empty($load->loadCharge->accessorial_deduction)) {
                  $accessorialDeductions = collect(json_decode($load->loadCharge->accessorial_deduction));
                  $value = round($accessorialDeductions->sum('rate') ?? 0, 2);
                }
                break;

              case 43:
                $value = null;
                if (!empty($load->thirdPartyCarrierCharge)) {
                  $value = round($load->thirdPartyCarrierCharge->hauling_fee ?? 0, 2);
                }
                break;

              case 44:
                $value = null;
                if (!empty($load->thirdPartyCarrierCharge)) {
                  $value = round($load->thirdPartyCarrierCharge->fuel_surcharge ?? 0, 2);
                }
                break;

              case 45:
                $value = null;
                if (!empty($load->thirdPartyCarrierCharge)) {
                  $value = 0;
                  if (!empty($load->thirdPartyCarrierCharge->accessorial_fee)) {
                    $accessorialFees = collect(json_decode(
                      $load->thirdPartyCarrierCharge->accessorial_fee
                    ));
                    $value = round($accessorialFees->sum('rate') ?? 0, 2);
                  }
                }
                break;

              case 46:
                $value = null;
                if (!empty($load->thirdPartyCarrierCharge)) {
                  $value = 0;
                  if (!empty($load->thirdPartyCarrierCharge->accessorial_deduction)) {
                    $accessorialDeductions = collect(json_decode(
                      $load->thirdPartyCarrierCharge->accessorial_deduction
                    ));
                    $value = round($accessorialDeductions->sum('rate') ?? 0, 2);
                  }
                }
                break;

              case 47:
                $value = null;
                if (!empty($load->loadShippers->first())) {
                  $value = $load->loadShippers->first()->shipping_date;
                }
                break;
              case 48:
                $value = null;
                if (!empty($load->loadReceivers->last())) {
                  $value = $load->loadReceivers->last()->delivery_date;
                }
                break;
              case 49:
                $value = null;
                if (!empty($load->loadShippers->first())) {
                  $value = $load->loadShippers->first()->shipper_name;
                }
                break;
              case 50:
                $value = null;
                if (!empty($load->loadShippers->first())) {
                  $value = $load->loadShippers->first()->address;
                }
                break;
              case 51:
                $value = null;
                if (!empty($load->loadShippers->first())) {
                  $value = $load->loadShippers->first()->city;
                }
                break;
              case 52:
                $value = null;
                if (!empty($load->loadShippers->first())) {
                  $value = $load->loadShippers->first()->state;
                }
                break;
              case 53:
                $value = null;
                if (!empty($load->loadShippers->first())) {
                  $value = $load->loadShippers->first()->zip_code;
                }
                break;
              case 54:
                $value = null;
                if (!empty($load->loadReceivers->last())) {
                  $value = $load->loadReceivers->last()->receiver_name;
                }
                break;
              case 55:
                $value = null;
                if (!empty($load->loadReceivers->last())) {
                  $value = $load->loadReceivers->last()->address;
                }
                break;
              case 56:
                $value = null;
                if (!empty($load->loadReceivers->last())) {
                  $value = $load->loadReceivers->last()->city;
                }
                break;
              case 57:
                $value = null;
                if (!empty($load->loadReceivers->last())) {
                  $value = $load->loadReceivers->last()->state;
                }
                break;
              case 58:
                $value = null;
                if (!empty($load->loadReceivers->last())) {
                  $value = $load->loadReceivers->last()->zip_code;
                }
                break;
              case 59:
                $value = $load->company_internal_reference ?? '';
                break;
              case 60:
                $values = [];
                $pending = config('constant.driver.unloadedStatus.pending');
                $loadReceivers = $load->loadReceivers;
                foreach ($loadReceivers as $loadReceiver) {
                  if (is_null($loadReceiver->unloaded_local_datetime)) {
                    $status = $pending;
                  } else if (!is_null($loadReceiver->delivery_end_date)) {
                    $status = $this->calculateDriverButtonStatus(
                      $loadReceiver->unloaded_local_datetime,
                      $loadReceiver->delivery_end_date,
                      $loadReceiver->delivery_end_time
                    );
                  } else {
                    $timeToCompare = $loadReceiver->delivery_end_time > $loadReceiver->delivery_time ?
                      $loadReceiver->delivery_end_time : $loadReceiver->delivery_time;
                    $status = $this->calculateDriverButtonStatus(
                      $loadReceiver->unloaded_local_datetime,
                      $loadReceiver->delivery_date,
                      $timeToCompare
                    );
                  }
                  $values[] = $status;
                }
                $value = !empty($values) ? implode(';  ', $values) : '';
                break;
              default:
                $value = null;
                break;
            }
            $row[$column->id] = $value;
          } else {
            /* custom column type */
            $data = $customColumnData->where('column_id', $column->custom_column_id)
              ->where('entity_id', $load->id)
              ->first();

            if ($column->spreadsheetColumn->custom_type == 2) {
              $columnDataValue = $data->double_value ?? null;
            } else if ($column->spreadsheetColumn->custom_type == 3) {
              $columnDataValue = $data->decimal_value ?? null;
            } else {
              $columnDataValue = $data->value ?? '';
            }
            $row[$column->id] = $columnDataValue;
          }
        }
        return $row;
      });

      return [
        'id' => $sheet->id,
        'name' => $sheet->name,
        'filter' => $filter ?? new stdClass(),
        'rowHeight' => $rowHeight,
        'sortSchema' => json_decode($sortSchema) ?? [],
        'columns' => $columns,
        'content' => $content
      ];
    });
    return $ret;
  }

  private function calculateDriverButtonStatus($localDateTime, $targetDate, $targetTime) {
    $onTime = config('constant.driver.unloadedStatus.onTime');
    $late = config('constant.driver.unloadedStatus.late');
    $localDate = !empty($localDateTime) ?
      Carbon::parse($localDateTime)->format(config('constant.date_format')) : null;
    $targetTime = $targetTime ? $targetTime->format('H:i:s') : null; // Because datetime has seconds.
    $status = '';
    if (is_null($targetTime)) {
      if ($localDate <= $targetDate) {
        $status = $onTime;
      } else {
        $status = $late;
      }
    } else {
      $targetDateTime = $targetDate . ' ' . $targetTime;
      // 00:00:59 is not considered late when comparing to 00:00:00
      if (substr($localDateTime, 0, -3) <= substr($targetDateTime, 0, -3)) {
        $status = $onTime;
      } else {
        $startTime = Carbon::parse($targetDateTime);
        $endTime = Carbon::parse($localDateTime);
        // startTime shall be on the left, cause delay is the mins from start to end
        $mins = $startTime->diffInMinutes($endTime, false); // false to return negative, if it happens, then our code is wrong.
        $status = $late . ' by ' . $mins . ' min';
      }
    }
    return $status;
  }

  /**
   * Calculate sum of total drivers payment of a trip.
   * @param $load
   * @return mixed
   * @throws Exception
   */
  private function calculateDriverPayment($load) {
    $driverPayAmount = 0;

    $loadDrivers = $load->loadDrivers
      ->pluck('driverAsUsers')
      ->flatten()
      ->pluck('driverDetail') ?? [];

    if (empty($loadDrivers)) {
      return $driverPayAmount;
    }

    $loadDrivers = $loadDrivers->unique('user_id');

    if (!$loadDrivers->isEmpty()) {
      foreach ($loadDrivers as $loadDriver) {
        $driverPayAmount += (new DriverPayHelper())->calculateLoadDriverPaymentFromPercentage($load, $loadDriver);
      }
    }
    return $driverPayAmount;
  }

  private function getSheetColumns($sheetColumns, $accessLevel) {
    return $sheetColumns->map(function ($column) use ($accessLevel) {
      if (!empty($column->custom_column_id)) {
        $name = $column->spreadsheetColumn->name ?? '';
        $customType = !empty($column->spreadsheetColumn->custom_type) ? array_search($column->spreadsheetColumn->custom_type, config('constant.spreadsheet.customType')) : null;
        $customColumnId = $column->spreadsheetColumn->id;
      } else {
        /* predefined column*/
        $name = config('constant.spreadsheet.predefinedColumns.name')[$column->predefined_column] ?? null;
        $predefinedColumn = config('constant.spreadsheet.predefinedColumns.load')[$column->predefined_column] ?? null;
      }
      $isEditable = false;
      if (empty($column->predefined_column)) {
        $isEditable = $accessLevel != config('constant.spreadsheet.accessRole.viewer');
      }
      return [
        'id' => $column->id ?? null,
        'name' => $name ?? '',
        'order' => $column->order ?? null,
        'width' => $column->width ?? null,
        'predefinedColumn' => $predefinedColumn ?? null,
        'customType' => $customType ?? null,
        'customColumnId' => $customColumnId ?? null,
        // False if column is predefined, true otherwise for now.
        'editable' => $isEditable,
      ];
    });
  }

  /**
   * Create Load Query using sheet column based.
   * @param $predefinedColumns
   * @return Builder|mixed
   * @throws Exception
   */
  private function getLoadQueryBuilder($predefinedColumns) {
    $companyId = getAuthAdminCompanyId();

    $loadSelectArrays = ['id'];
    $loadShipperSelectArray = [];
    $loadReceiverSelectArray = [];
    $loadCustomerArray = [];
    $loadDriverPayArray = [];
    $loadDriversArray = [];
    $driverAsUsers = [];
    $driverDetails = [];
    $loadChargeArray = [];
    $loadThirdPartyCarrierChargeArray = [];
    $loadDispatcherArray = [];
    $loadTrucksArray = [];
    $loadTrailersArray = [];
    $loadTagArray = [];
    $loadThirdPartyCarrierArray = [];
    $loadLegSelectArray = [];
    $loadTerminalSelectArray = [];

    $loadNumber = false;
    $loadReference = false;
    $loadShipDate = false;
    $loadDeliveryDate = false;
    $loadCustomer = false;
    $loadPickUpLocation = false;
    $loadDeliveryLocation = false;
    $loadDrivers = false;
    $loadDispatcherNotes = false;
    $loadStatus = false;
    $loadPod = false;
    $loadDriverPay = false;
    $loadTotalAmount = false;
    $loadDispatcher = false;
    $loadInvoiceDate = false;
    $loadDistance = false;
    $loadTrucks = false;
    $loadTrailers = false;
    $loadShipperNames = false;
    $loadReceiverNames = false;
    $loadTotalWeight = false;
    $loadBillToCode = false;
    $loadTag = false;
    $loadThirdPartyCarrier = false;
    $loadDriverHos = false;
    $loadFindCarriers = false;
    $loadThirdPartyCarrierRate = false;
    $loadThirdPartyCarrierRateCon = false;
    $loadThirdPartyCarrierBol = false;
    $loadEquipmentNumber = false;
    $loadFreightDescription = false;
    $loadGrossProfitBrokeredLoad = false;
    $loadGrossProfitPercentageBrokeredLoad = false;
    $loadEmptyDistance = false;
    $loadContainerStatus = false;
    $loadContainerLocation = false;
    $loadChassis = false;
    $loadContainer = false;
    $loadHaulingFee = false;
    $loadFuelSurcharge = false;
    $loadAccessorialFees = false;
    $loadAccessorialDeductions = false;
    $loadThirdPartyCarrierHaulingFee = false;
    $loadThirdPartyCarrierFuelSurcharge = false;
    $loadThirdPartyCarrierAccessorialFees = false;
    $loadThirdPartyCarrierAccessorialDeductions = false;
    $loadFirstShipDate = false;
    $loadLastDeliveryDate = false;
    $loadFirstShipperName = false;
    $loadFirstShipperAddress = false;
    $loadFirstShipperCity = false;
    $loadFirstShipperState = false;
    $loadFirstShipperZipCode = false;
    $loadLastReceiverName = false;
    $loadLastReceiverAddress = false;
    $loadLastReceiverCity = false;
    $loadLastReceiverState = false;
    $loadLastReceiverZipCode = false;
    $loadInternalReference = false;
    $loadDriverUnloadedStatus = false;

    if (!$predefinedColumns->isEmpty()) {
      foreach ($predefinedColumns as $column) {
        switch ($column) {
          case 1:
            $loadNumber = true;
            break;
          case 2:
            $loadReference = true;
            break;
          case 3:
            $loadShipDate = true;
            break;
          case 4:
            $loadDeliveryDate = true;
            break;
          case 5:
            $loadCustomer = true;
            break;
          case 6:
            $loadPickUpLocation = true;
            break;
          case 7:
            $loadDeliveryLocation = true;
            break;
          case 8:
            $loadDrivers = true;
            break;
          case 9:
            $loadDispatcherNotes = true;
            break;
          case 10:
            $loadStatus = true;
            break;
          case 11:
            $loadPod = true;
            break;
          case 12:
            $loadDriverPay = true;
            break;
          case 13:
            $loadTotalAmount = true;
            break;
          case 14:
            $loadDispatcher = true;
            break;
          case 15:
            $loadInvoiceDate = true;
            break;
          case 16:
            $loadDistance = true;
            break;
          case 17:
            $loadTrucks = true;
            break;
          case 18:
            $loadTrailers = true;
            break;
          case 19:
            $loadShipperNames = true;
            break;
          case 20:
            $loadReceiverNames = true;
            break;
          case 21:
            $loadTotalWeight = true;
            break;
          case 22:
            $loadBillToCode = true;
            break;
          case 23:
            $loadTag = true;
            break;
          case 24:
            $loadThirdPartyCarrier = true;
            break;
          case 25:
            $loadDriverHos = true;
            break;
          case 26:
            $loadFindCarriers = true;
            break;
          case 27:
            $loadThirdPartyCarrierRate = true;
            break;
          case 28:
            $loadThirdPartyCarrierRateCon = true;
            break;
          case 29:
            $loadThirdPartyCarrierBol = true;
            break;
          case 30:
            $loadEquipmentNumber = true;
            break;
          case 31:
            $loadFreightDescription = true;
            break;
          case 32:
            $loadGrossProfitBrokeredLoad = true;
            break;
          case 33:
            $loadGrossProfitPercentageBrokeredLoad = true;
            break;
          case 34:
            $loadEmptyDistance = true;
            break;
          case 35:
            $loadContainerStatus = true;
            break;
          case 36:
            $loadContainerLocation = true;
            break;
          case 37:
            $loadChassis = true;
            break;
          case 38:
            $loadContainer = true;
            break;
          case 39:
            $loadHaulingFee = true;
            break;
          case 40:
            $loadFuelSurcharge = true;
            break;
          case 41:
            $loadAccessorialFees = true;
            break;
          case 42:
            $loadAccessorialDeductions = true;
            break;
          case 43:
            $loadThirdPartyCarrierHaulingFee = true;
            break;
          case 44:
            $loadThirdPartyCarrierFuelSurcharge = true;
            break;
          case 45:
            $loadThirdPartyCarrierAccessorialFees = true;
            break;
          case 46:
            $loadThirdPartyCarrierAccessorialDeductions = true;
            break;
          case 47:
            $loadFirstShipDate = true;
            break;
          case 48:
            $loadLastDeliveryDate = true;
            break;
          case 49:
            $loadFirstShipperName = true;
            break;
          case 50:
            $loadFirstShipperAddress = true;
            break;
          case 51:
            $loadFirstShipperCity = true;
            break;
          case 52:
            $loadFirstShipperState = true;
            break;
          case 53:
            $loadFirstShipperZipCode = true;
            break;
          case 54:
            $loadLastReceiverName = true;
            break;
          case 55:
            $loadLastReceiverAddress = true;
            break;
          case 56:
            $loadLastReceiverCity = true;
            break;
          case 57:
            $loadLastReceiverState = true;
            break;
          case 58:
            $loadLastReceiverZipCode = true;
            break;
          case 59:
            $loadInternalReference = true;
          case 60:
            $loadDriverUnloadedStatus = true;
          default:
            break;
        }
      }

      if ($loadNumber) {
        $loadSelectArrays[] = 'load_unique_id';
      }

      if ($loadReference) {
        $loadSelectArrays[] = 'refrence_id';
      }

      if ($loadShipDate) {
        $loadShipperSelectArray = array_merge($loadShipperSelectArray, ['id', 'load_id', 'shipping_date', 'shipping_time', 'shipping_end_time', 'order']);
      }

      if ($loadDeliveryDate) {
        $loadReceiverSelectArray = array_merge($loadReceiverSelectArray, ['id', 'load_id', 'delivery_date', 'delivery_time', 'delivery_end_time', 'order']);
      }

      if ($loadCustomer) {
        $loadSelectArrays[] = 'customer_id';
        $loadCustomerArray = ['id', 'company_name'];
      }

      if ($loadPickUpLocation) {
        $loadShipperSelectArray = array_merge($loadShipperSelectArray, ['id', 'load_id', 'city', 'state', 'order']);
      }

      if ($loadDeliveryLocation) {
        $loadReceiverSelectArray = array_merge($loadReceiverSelectArray, ['id', 'load_id', 'city', 'state', 'order']);
      }

      if ($loadDrivers) {
        $loadDriversArray = array_merge($loadDriversArray, ['id', 'load_id']);
        $driverAsUsers = array_merge($driverAsUsers, ['id']);
        $driverDetails = array_merge($driverDetails, ['id', 'user_id', 'name']);
      }

      if ($loadDispatcherNotes) {
        $loadSelectArrays[] = 'dispatcher_notes';
      }

      if ($loadStatus) {
        $loadSelectArrays[] = 'status';
      }

      if ($loadDriverPay) {
        $loadSelectArrays[] = 'total_amount';
        $loadSelectArrays[] = 'total_miles';
        $loadDriversArray = array_merge($loadDriversArray, ['id', 'load_id']);
        $driverAsUsers = array_merge($driverAsUsers, ['id']);
        $driverDetails = array_merge($driverDetails, ['id', 'user_id', 'name', 'driver_pay_types', 'load_pay_percentage_of', 'load_pay_percentage']);
        $loadChargeArray = ['id', 'load_id', 'hauling_fees', 'fuel_surcharge_type', 'fuel_surcharge'];
      }

      if ($loadTotalAmount) {
        $loadSelectArrays[] = 'total_amount';
      }

      if ($loadDispatcher) {
        $loadSelectArrays[] = 'dispatcher_id';
        $loadDispatcherArray = [
          'dispatcher:id',
          'dispatcher.dispacherDetail:id,user_id,first_name,last_name'
        ];
      }

      if ($loadInvoiceDate) {
        $loadSelectArrays[] = 'invoice_generated_at';
      }

      if ($loadDistance) {
        $loadSelectArrays[] = 'total_miles';
      }

      if ($loadTag) {
        $loadSelectArrays[] = 'tag_id';
        $loadTagArray = [
          'id,business_name'
        ];
      }

      if ($loadThirdPartyCarrier) {
        $loadSelectArrays[] = 'third_party_carrier_as_customer_id';
        $loadThirdPartyCarrierArray = [
          'id,company_name'
        ];
      }

      if ($loadFindCarriers) {
        $loadSelectArrays[] = 'third_party_carrier_as_customer_id';
      }

      if ($loadThirdPartyCarrierRate) {
        $loadSelectArrays[] = 'third_party_carrier_total_amount';
      }
      if ($loadThirdPartyCarrierRateCon) {
        $loadSelectArrays[] = 'third_party_carrier_rate_con_storage_file_name';
      }
      if ($loadThirdPartyCarrierBol) {
        $loadSelectArrays[] = 'third_party_carrier_bol_storage_file_name';
      }

      if ($loadDriverHos) {
        $loadDriversArray = array_merge($loadDriversArray, ['id', 'load_id']);
        $driverAsUsers = array_merge($driverAsUsers, ['id', 'first_name', 'last_name']);
      }

      if ($loadTrucks) {
        $loadDriversArray = array_merge($loadDriversArray, ['id', 'load_id', 'truck_id']);
        $loadTrucksArray = [
          'id,number'
        ];
      }

      if ($loadTrailers) {
        $loadDriversArray = array_merge($loadDriversArray, ['id', 'load_id', 'trailer_id', 'external_trailer_number']);
        $loadTrailersArray = [
          'id,number'
        ];
      }

      if ($loadShipperNames) {
        $loadShipperSelectArray = array_merge($loadShipperSelectArray, ['id', 'load_id', 'shipper_name', 'order']);
      }

      if ($loadReceiverNames) {
        $loadReceiverSelectArray = array_merge($loadReceiverSelectArray, ['id', 'load_id', 'receiver_name', 'order']);
      }

      if ($loadTotalWeight) {
        $loadShipperSelectArray = array_merge(
          $loadShipperSelectArray,
          ['id', 'load_id', 'freight_weight', 'additional_freight_details', 'order']
        );
      }

      if ($loadBillToCode) {
        $loadSelectArrays[] = 'bill_to_code';
      }

      if ($loadGrossProfitBrokeredLoad) {
        $loadSelectArrays[] = 'total_amount';
      }

      if ($loadGrossProfitPercentageBrokeredLoad) {
        $loadSelectArrays[] = 'third_party_carrier_total_amount';
      }

      if ($loadEmptyDistance) {
        $loadDriversArray = array_merge($loadDriversArray, ['id', 'load_id', 'empty_distance']);
      }

      if ($loadContainerStatus) {
        $loadSelectArrays[] = 'container_status';
      }

      if ($loadContainerLocation) {
        $loadShipperSelectArray = array_merge($loadShipperSelectArray, ['id', 'load_id', 'shipper_name', 'container_here']);
        $loadReceiverSelectArray = array_merge($loadReceiverSelectArray, ['id', 'load_id', 'receiver_name', 'container_here']);
        $loadLegSelectArray = array_merge($loadLegSelectArray, ['id', 'load_id', 'location_name', 'container_here']);
        $loadTerminalSelectArray = array_merge($loadTerminalSelectArray, ['id', 'load_id', 'name', 'container_here']);
      }

      if ($loadChassis) {
        $loadDriversArray = array_merge($loadDriversArray, ['id', 'load_id', 'chassis']);
      }

      if ($loadContainer) {
        $loadShipperSelectArray = array_merge($loadShipperSelectArray, ['id', 'load_id', 'container']);
      }

      if ($loadHaulingFee) {
        $loadChargeArray = array_merge($loadChargeArray, ['id', 'load_id', 'hauling_fees']);
      }

      if ($loadFuelSurcharge) {
        $loadChargeArray = array_merge($loadChargeArray, ['id', 'load_id', 'fuel_surcharge']);
      }

      if ($loadAccessorialFees) {
        $loadChargeArray = array_merge($loadChargeArray, ['id', 'load_id', 'accessorial_fee']);
      }

      if ($loadAccessorialDeductions) {
        $loadChargeArray = array_merge($loadChargeArray, ['id', 'load_id', 'accessorial_deduction']);
      }

      if ($loadThirdPartyCarrierHaulingFee) {
        $loadThirdPartyCarrierChargeArray = array_merge(
          $loadThirdPartyCarrierChargeArray,
          ['id', 'load_id', 'hauling_fee']
        );
      }

      if ($loadThirdPartyCarrierFuelSurcharge) {
        $loadThirdPartyCarrierChargeArray = array_merge(
          $loadThirdPartyCarrierChargeArray,
          ['id', 'load_id', 'fuel_surcharge']
        );
      }

      if ($loadThirdPartyCarrierAccessorialFees) {
        $loadThirdPartyCarrierChargeArray = array_merge(
          $loadThirdPartyCarrierChargeArray,
          ['id', 'load_id', 'accessorial_fee']
        );
      }

      if ($loadThirdPartyCarrierAccessorialDeductions) {
        $loadThirdPartyCarrierChargeArray = array_merge(
          $loadThirdPartyCarrierChargeArray,
          ['id', 'load_id', 'accessorial_deduction']
        );
      }

      if ($loadEquipmentNumber) {
        $loadShipperSelectArray = array_merge($loadShipperSelectArray, [
          'id', 'load_id', 'freight_equipment_type', 'additional_freight_details'
        ]);
      }

      if ($loadFreightDescription) {
        $loadShipperSelectArray = array_merge($loadShipperSelectArray, [
          'id', 'load_id', 'freight_description', 'additional_freight_details'
        ]);
      }

      if ($loadFirstShipDate) {
        $loadShipperSelectArray = array_merge($loadShipperSelectArray, ['id', 'load_id', 'order', 'shipping_date']);
      }
      if ($loadLastDeliveryDate) {
        $loadReceiverSelectArray = array_merge($loadReceiverSelectArray, ['id', 'load_id', 'order', 'delivery_date']);
      }
      if ($loadFirstShipperName) {
        $loadShipperSelectArray = array_merge($loadShipperSelectArray, ['id', 'load_id', 'order', 'shipper_name']);
      }
      if ($loadFirstShipperAddress) {
        $loadShipperSelectArray = array_merge($loadShipperSelectArray, ['id', 'load_id', 'order', 'address']);
      }
      if ($loadFirstShipperCity) {
        $loadShipperSelectArray = array_merge($loadShipperSelectArray, ['id', 'load_id', 'order', 'city']);
      }
      if ($loadFirstShipperState) {
        $loadShipperSelectArray = array_merge($loadShipperSelectArray, ['id', 'load_id', 'order', 'state']);
      }
      if ($loadFirstShipperZipCode) {
        $loadShipperSelectArray = array_merge($loadShipperSelectArray, ['id', 'load_id', 'order', 'zip_code']);
      }
      if ($loadLastReceiverName) {
        $loadReceiverSelectArray = array_merge($loadReceiverSelectArray, ['id', 'load_id', 'order', 'receiver_name']);
      }
      if ($loadLastReceiverAddress) {
        $loadReceiverSelectArray = array_merge($loadReceiverSelectArray, ['id', 'load_id', 'order', 'address']);
      }
      if ($loadLastReceiverCity) {
        $loadReceiverSelectArray = array_merge($loadReceiverSelectArray, ['id', 'load_id', 'order', 'city']);
      }
      if ($loadLastReceiverState) {
        $loadReceiverSelectArray = array_merge($loadReceiverSelectArray, ['id', 'load_id', 'order', 'state']);
      }
      if ($loadLastReceiverZipCode) {
        $loadReceiverSelectArray = array_merge($loadReceiverSelectArray, ['id', 'load_id', 'order', 'zip_code']);
      }
      if ($loadInternalReference) {
        $loadSelectArrays[] = 'company_internal_reference';
      }
      if ($loadDriverUnloadedStatus) {
        $loadReceiverSelectArray = array_merge(
          $loadReceiverSelectArray,
          [
            'id', 'load_id', 'delivery_date', 'delivery_end_date', 'delivery_time', 'delivery_end_time', 'unloaded_local_datetime'
          ]
        );
      }

      $loadDriversArray = array_unique($loadDriversArray);
      $driverAsUsers = array_unique($driverAsUsers);
      $driverDetails = array_unique($driverDetails);
      $loadChargeArray = array_unique($loadChargeArray);
      $loadThirdPartyCarrierChargeArray = array_unique($loadThirdPartyCarrierChargeArray);
      $loadSelectArrays = array_unique($loadSelectArrays);
      $loadReceiverSelectArray = array_unique($loadReceiverSelectArray);
      $loadShipperSelectArray = array_unique($loadShipperSelectArray);
      $loadTrucksArray = array_unique($loadTrucksArray);
      $loadTrailersArray = array_unique($loadTrailersArray);
      $loadLegSelectArray = array_unique($loadLegSelectArray);
      $loadTerminalSelectArray = array_unique($loadTerminalSelectArray);
    }

    $startDate = request()->has('startDate') ? request('startDate') : Carbon::now();
    $endDate = request()->has('endDate') ? request('endDate') : Carbon::now()->addDay();

    $currentUser = User::select('id', 'role', 'admin_company_detail_id', 'tag_access')
      ->where('id', Auth::id())
      ->with(['tags:id'])
      ->first();
    $currentUserRole = $currentUser->role;
    $onlyAccessToTagLoads = $currentUser->tag_access == 1 ? true : false;
    $currentUserTags = [];
    if (!empty($currentUser->tags)) {
      $currentUserTags = Arr::pluck($currentUser->tags->toArray(), 'id');
    }
    return Load::query()->select($loadSelectArrays)
      ->where('admin_company_detail_id', '=', $companyId)
      ->when(!empty($loadShipperSelectArray), function ($innerQuery) use ($loadShipperSelectArray) {
        return $innerQuery->with(['loadShippers:' . implode(',', $loadShipperSelectArray)]);
      })
      ->when(!empty($loadReceiverSelectArray), function ($innerQuery) use ($loadReceiverSelectArray) {
        return $innerQuery->with(['loadReceivers:' . implode(',', $loadReceiverSelectArray)]);
      })
      ->when(!empty($loadLegSelectArray), function ($innerQuery) use ($loadLegSelectArray) {
        return $innerQuery->with(['loadLegs:' . implode(',', $loadLegSelectArray)]);
      })
      ->when(!empty($loadTerminalSelectArray), function ($innerQuery) use ($loadTerminalSelectArray) {
        return $innerQuery->with(['loadTerminals:' . implode(',', $loadTerminalSelectArray)]);
      })
      ->when(!empty($loadCustomerArray), function ($innerQuery) use ($loadCustomerArray) {
        return $innerQuery->with(['customer:' . implode(',', $loadCustomerArray)]);
      })
      ->when(!empty($loadDriversArray), function ($innerQuery) use ($loadDriversArray) {
        return $innerQuery->with(['loadDrivers:' . implode(',', $loadDriversArray)]);
      })
      ->when(!empty($driverAsUsers), function ($innerQuery) use ($driverAsUsers) {
        return $innerQuery->with(['loadDrivers.driverAsUsers:' . implode(',', $driverAsUsers)]);
      })
      ->when(!empty($driverDetails), function ($innerQuery) use ($driverDetails) {
        return $innerQuery->with(['loadDrivers.driverAsUsers.driverDetail:' . implode(',', $driverDetails)]);
      })
      ->when(!empty($loadTrucksArray), function ($innerQuery) use ($loadTrucksArray) {
        return $innerQuery->with(['loadDrivers.truck:' . implode(',', $loadTrucksArray)]);
      })
      ->when(!empty($loadTrailersArray), function ($innerQuery) use ($loadTrailersArray) {
        return $innerQuery->with(['loadDrivers.trailer:' . implode(',', $loadTrailersArray)]);
      })
      ->when(!empty($loadChargeArray), function ($innerQuery) use ($loadChargeArray) {
        return $innerQuery->with(['loadCharge:' . implode(',', $loadChargeArray)]);
      })
      ->when(!empty($loadThirdPartyCarrierChargeArray), function ($innerQuery) use ($loadThirdPartyCarrierChargeArray) {
        return $innerQuery->with(['thirdPartyCarrierCharge:' . implode(',', $loadThirdPartyCarrierChargeArray)]);
      })
      ->when(!empty($loadTagArray), function ($innerQuery) use ($loadTagArray) {
        return $innerQuery->with(['tag:' . implode(',', $loadTagArray)]);
      })
      ->when(!empty($loadThirdPartyCarrierArray), function ($innerQuery) use ($loadThirdPartyCarrierArray) {
        return $innerQuery->with(['thirdPartyCarrier:' . implode(',', $loadThirdPartyCarrierArray)]);
      })
      ->when($loadPod, function ($innerQuery) {
        return $innerQuery->with(['adminLoadImages' => function ($query) {
          return $query->select('id', 'load_id')
            ->whereIn('purpose', [config('constant.load.image.purpose.load_pod'), config('constant.load.image.purpose.load_pod_admin')]);
        }]);
      })
      ->when(!empty($loadDriverPayArray), function ($innerQuery) use ($loadDriverPayArray) {
        return $innerQuery->with($loadDriverPayArray);
      })
      ->when(!empty($loadDispatcherArray), function ($innerQuery) use ($loadDispatcherArray) {
        return $innerQuery->with($loadDispatcherArray);
      })
      ->when($startDate && $endDate, function ($query) use ($startDate, $endDate) {
        // If customer asks, we can change to the mode in Planning, endDate + 7, shipper <= endDate to include more loads.
        $query->whereBetween('i_end_date', [$startDate, $endDate]);
        /*
        ->whereHas('loadShippers', function ($innerQuery) use ($startDate, $endDate) {
            $innerQuery->whereBetween(
              'shipping_date',
              [$startDate, $endDate]
            );
          })->orWhereHas
          */
        /*
        $query->where(function ($query2) use ($startDate, $endDate) {
          $query2->whereHas('loadReceivers', function ($innerQuery) use ($startDate, $endDate) {
            $innerQuery->whereBetween(
              'delivery_date',
              [$startDate, $endDate]
            );
          });
        });
        */
      })
      ->when(
        !empty($currentUserTags),
        function ($query) use ($currentUserTags, $currentUserRole, $onlyAccessToTagLoads) {
          $query->where(function ($query2) use ($currentUserTags, $currentUserRole, $onlyAccessToTagLoads) {
            if ($currentUserRole == config('constant.roles.tag_operator')) {
              $query2->whereIn('loads.tag_id', $currentUserTags);
            } else {
              $query2->whereIn('loads.tag_id', $currentUserTags);
              if ($onlyAccessToTagLoads == false) {
                $query2->orWhereNull('loads.tag_id');
              }
            }
          });
        }
      );
  }

  private function getLosAngelesTimeZoneDateForFilter($value) {
    if ($value == 'today') {
      return Carbon::now('America/Los_Angeles')->toDateString();
    }
    return $value;
  }

  /**
   * Apply sheet filters on loads query.
   * @param $loads
   * @param $filter
   * @return mixed
   */
  private function getLoadsWithSheetFilter($loads, $filter) {
    return (clone $loads)->when(!empty($filter), function ($query) use ($filter) {
      $query->where(function ($innerQuery) use ($filter) {
        if ($filter->op == 'and') {
          foreach ($filter->conditions as $condition) {
            if (!empty($condition->columnId)) {
              /* custom column filter */
            } else {
              switch ($condition->column) {
                case config('constant.spreadsheet.sheet.filters.column.loadDirection'):
                  if ($condition->value == 'i') {
                    $innerQuery->where('direction', config('constant.spreadsheet.sheet.filters.direction.i'));
                  } else if ($condition->value == 'o') {
                    $innerQuery->where('direction', config('constant.spreadsheet.sheet.filters.direction.o'));
                  }
                  break;

                case config('constant.spreadsheet.sheet.filters.column.loadShipDate'):
                  $innerQuery->whereHas('loadShippers', function ($subQuery) use ($condition) {
                    $cmp = '=';
                    $subQuery->where('shipping_date', $cmp, $this->getLosAngelesTimeZoneDateForFilter($condition->value));
                  });
                  break;

                case config('constant.spreadsheet.sheet.filters.column.loadDeliveryDate'):
                  $innerQuery->whereHas('loadReceivers', function ($subQuery) use ($condition) {
                    $cmp = '=';
                    $subQuery->where('delivery_date', $cmp, $this->getLosAngelesTimeZoneDateForFilter($condition->value));
                  });
                  break;

                case config('constant.spreadsheet.sheet.filters.column.loadPickupState'):
                  $innerQuery->whereHas('loadShippers', function ($subQuery) use ($condition) {
                    $subQuery->whereIn('state', $condition->value);
                  });
                  break;

                case config('constant.spreadsheet.sheet.filters.column.loadDeliveryState'):
                  $innerQuery->whereHas('loadReceivers', function ($subQuery) use ($condition) {
                    $subQuery->whereIn('state', $condition->value);
                  });
                  break;

                case config('constant.spreadsheet.sheet.filters.column.loadDispatcherNotes'):
                  if ($condition->cmp == 'contains') {
                    $innerQuery->where('dispatcher_notes', 'like', '%' . $condition->value . '%');
                  }

                  if ($condition->cmp == 'notContains') {
                    $innerQuery->where('dispatcher_notes', 'not like', '%' . $condition->value . '%');
                  }
                  break;

                case config('constant.spreadsheet.sheet.filters.column.loadShipper'):
                  $innerQuery->whereHas('loadShippers', function ($subQuery) use ($condition) {
                    $cmp = 'like';
                    $subQuery->where('shipper_name', $cmp, '%' . $condition->value . '%');
                  });
                  break;

                case config('constant.spreadsheet.sheet.filters.column.loadReceiver'):
                  $innerQuery->whereHas('loadReceivers', function ($subQuery) use ($condition) {
                    $cmp = 'like';
                    $subQuery->where('receiver_name', $cmp, '%' . $condition->value . '%');
                  });
                  break;

                case config('constant.spreadsheet.sheet.filters.column.loadLeg'):
                  $innerQuery->whereHas('loadLegs', function ($subQuery) use ($condition) {
                    $cmp = 'like';
                    $subQuery->where('location_name', $cmp, '%' . $condition->value . '%');
                  });
                  break;

                case config('constant.spreadsheet.sheet.filters.column.loadDriver'):
                  $innerQuery->whereHas('loadDrivers', function ($subQuery) use ($condition) {
                    $subQuery->whereHas('driverAsUsers', function ($q) use ($condition) {
                      $q->whereIn('user_id', $condition->value);
                    });
                  });
                  break;

                case config('constant.spreadsheet.sheet.filters.column.loadTag'):
                  $innerQuery->whereIn('tag_id', $condition->value);
                  break;

                case config('constant.spreadsheet.sheet.filters.column.loadThirdPartyCarrier'):
                  if ($condition->cmp == 'isAnyOf') {
                    $innerQuery->whereIn('third_party_carrier_as_customer_id', $condition->value);
                  } else if ($condition->cmp == 'isEmpty') {
                    $innerQuery->whereNull('third_party_carrier_as_customer_id');
                  } else if ($condition->cmp == 'isNotEmpty') {
                    $innerQuery->whereNotNull('third_party_carrier_as_customer_id');
                  }
                  break;

                case config('constant.spreadsheet.sheet.filters.column.loadDispatcher'):
                  $innerQuery->whereIn('dispatcher_id', $condition->value);
                  break;

                case config('constant.spreadsheet.sheet.filters.column.loadCustomer'):
                  $innerQuery->whereIn('customer_id', $condition->value);
                  break;

                case config('constant.spreadsheet.sheet.filters.column.loadStatus'):
                  $innerQuery->whereIn('status', $condition->value);
                  break;

                case config('constant.spreadsheet.sheet.filters.column.loadContainerStatus'):
                  $containerStatus = array_search(
                    $condition->value,
                    config('constant.load.container.filter')
                  );
                  $innerQuery->where('container_status', $containerStatus);
                  break;

                case config('constant.spreadsheet.sheet.filters.column.loadContainerLocation'):
                  $stopTypes = $condition->value ?? [];
                  if (!empty($stopTypes)) {
                    $innerQuery->where(function ($subQuery) use ($stopTypes) {
                      collect($stopTypes)->map(function ($stopType) use ($subQuery) {
                        $stop = config(
                          'constant.spreadsheet.sheet.filters.containerHereStopType'
                        )[$stopType];
                        $subQuery->orWhereHas($stop, function ($subQuery) {
                          $subQuery->where('container_here', 1);
                        });
                      });
                    });
                  }
                  break;

                case config('constant.spreadsheet.sheet.filters.column.loadTrailer'):
                  $innerQuery->whereHas('loadDrivers', function ($subQuery) use ($condition) {
                    $subQuery->whereIn('trailer_id', $condition->value);
                  });
                  break;

                case config('constant.spreadsheet.sheet.filters.column.loadTruck'):
                  $innerQuery->whereHas('loadDrivers', function ($subQuery) use ($condition) {
                    $subQuery->whereIn('truck_id', $condition->value);
                  });
                  break;
              }
            }
          }
        } else {
          /* OR Case*/
          foreach ($filter->conditions as $condition) {
            if (!empty($condition->columnId)) {
              /* custom column filter */
            } else {
              switch ($condition->column) {
                case config('constant.spreadsheet.sheet.filters.column.loadDirection'):
                  if ($condition->value == 'i') {
                    $innerQuery->orWhere('direction', 1);
                  } else if ($condition->value == 'o') {
                    $innerQuery->orWhere('direction', 0);
                  }
                  break;

                case config('constant.spreadsheet.sheet.filters.column.loadShipDate'):
                  $innerQuery->orWhereHas('loadShippers', function ($subQuery) use ($condition) {
                    $cmp = '=';
                    $subQuery->where('shipping_date', $cmp, $this->getLosAngelesTimeZoneDateForFilter($condition->value));
                  });
                  break;

                case config('constant.spreadsheet.sheet.filters.column.loadDeliveryDate'):
                  $innerQuery->orWhereHas('loadReceivers', function ($subQuery) use ($condition) {
                    $cmp = '=';
                    $subQuery->where('delivery_date', $cmp, $this->getLosAngelesTimeZoneDateForFilter($condition->value));
                  });
                  break;

                case config('constant.spreadsheet.sheet.filters.column.loadPickupState'):
                  $innerQuery->orWhereHas('loadShippers', function ($subQuery) use ($condition) {
                    $subQuery->whereIn('state', $condition->value);
                  });
                  break;

                case config('constant.spreadsheet.sheet.filters.column.loadDeliveryState'):
                  $innerQuery->orWhereHas('loadReceivers', function ($subQuery) use ($condition) {
                    $subQuery->whereIn('state', $condition->value);
                  });
                  break;

                case config('constant.spreadsheet.sheet.filters.column.loadDispatcherNotes'):
                  if ($condition->cmp == 'contains') {
                    $innerQuery->orWhere('dispatcher_notes', 'like', '%' . $condition->value . '%');
                  }

                  if ($condition->cmp == 'notContains') {
                    $innerQuery->orWhere('dispatcher_notes', 'not like', '%' . $condition->value . '%');
                  }
                  break;

                case config('constant.spreadsheet.sheet.filters.column.loadShipper'):
                  $innerQuery->orWhereHas('loadShippers', function ($subQuery) use ($condition) {
                    $cmp = 'like';
                    $subQuery->where('shipper_name', $cmp, '%' . $condition->value . '%');
                  });
                  break;

                case config('constant.spreadsheet.sheet.filters.column.loadReceiver'):
                  $innerQuery->orWhereHas('loadReceivers', function ($subQuery) use ($condition) {
                    $cmp = 'like';
                    $subQuery->where('receiver_name', $cmp, '%' . $condition->value . '%');
                  });
                  break;

                case config('constant.spreadsheet.sheet.filters.column.loadLeg'):
                  $innerQuery->orWhereHas('loadLegs', function ($subQuery) use ($condition) {
                    $cmp = 'like';
                    $subQuery->where('location_name', $cmp, '%' . $condition->value . '%');
                  });
                  break;

                case config('constant.spreadsheet.sheet.filters.column.loadDriver'):
                  $innerQuery->orWhereHas('loadDrivers', function ($subQuery) use ($condition) {
                    $subQuery->whereHas('driverAsUsers', function ($q) use ($condition) {
                      $q->whereIn('user_id', $condition->value);
                    });
                  });
                  break;

                case config('constant.spreadsheet.sheet.filters.column.loadTag'):
                  $innerQuery->orWhereIn('tag_id', $condition->value);
                  break;

                case config('constant.spreadsheet.sheet.filters.column.loadThirdPartyCarrier'):
                  if ($condition->cmp == 'isAnyOf') {
                    $innerQuery->orWhereIn('third_party_carrier_as_customer_id', $condition->value);
                  } else if ($condition->cmp == 'isEmpty') {
                    $innerQuery->orWhereNull('third_party_carrier_as_customer_id');
                  } else if ($condition->cmp == 'isNotEmpty') {
                    $innerQuery->orWhereNotNull('third_party_carrier_as_customer_id');
                  }
                  break;

                case config('constant.spreadsheet.sheet.filters.column.loadDispatcher'):
                  $innerQuery->orWhereIn('dispatcher_id', $condition->value);
                  break;

                case config('constant.spreadsheet.sheet.filters.column.loadCustomer'):
                  $innerQuery->orWhereIn('customer_id', $condition->value);
                  break;

                case config('constant.spreadsheet.sheet.filters.column.loadStatus'):
                  $innerQuery->orWhereIn('status', $condition->value);
                  break;

                case config('constant.spreadsheet.sheet.filters.column.loadContainerStatus'):
                  $containerStatus = array_search(
                    $condition->value,
                    config('constant.load.container.filter')
                  );
                  $innerQuery->orWhere('container_status', $containerStatus);
                  break;

                case config('constant.spreadsheet.sheet.filters.column.loadContainerLocation'):
                  $stopTypes = $condition->value ?? [];
                  if (!empty($stopTypes)) {
                    $innerQuery->orWhere(function ($subQuery) use ($stopTypes) {
                      collect($stopTypes)->map(function ($stopType) use ($subQuery) {
                        $stop = config(
                          'constant.spreadsheet.sheet.filters.containerHereStopType'
                        )[$stopType];
                        $subQuery->orWhereHas($stop, function ($subQuery) {
                          $subQuery->where('container_here', 1);
                        });
                      });
                    });
                  }
                  break;

                case config('constant.spreadsheet.sheet.filters.column.loadTrailer'):
                  $innerQuery->orWhereHas('loadDrivers', function ($subQuery) use ($condition) {
                    $subQuery->whereIn('trailer_id', $condition->value);
                  });
                  break;

                case config('constant.spreadsheet.sheet.filters.column.loadTruck'):
                  $innerQuery->orWhereHas('loadDrivers', function ($subQuery) use ($condition) {
                    $subQuery->whereIn('truck_id', $condition->value);
                  });
                  break;
              }
            }
          }
        };
      });
    })->get();
  }

  /**
   * Compare two filters.
   * @param $savedFilter
   * @param $requestFilter
   * @return bool
   */
  private function isSameFilter($savedFilter, $requestFilter): bool {
    if (empty($savedFilter) && empty($requestFilter)) {
      return true;
    }
    if ((empty($savedFilter) && !empty($requestFilter)) || (empty($requestFilter) && !empty($savedFilter))) {
      return false;
    }

    $savedFilter = json_encode($savedFilter);
    $requestFilter = json_encode($requestFilter);
    // strcmp($savedFilter, $requestFilter) === 0
    // The above line reports diff when order is different.
    // Below line resolves the order issue ONLY for 1st level (op and condition), but not for 2nd level (like ship date).
    // We may need to write our own comparison code later.
    if (json_decode($savedFilter) == json_decode($requestFilter)) {
      return true;
    }
    return false;
  }

  /**
   * Create new spreadsheet.
   * @param $request
   * @return mixed
   * @throws Exception
   */
  public function createSpreadsheet($request) {
    return DB::transaction(function () use ($request) {
      $spreadsheetName = !empty($request->name) ? $request->name : config('constant.spreadsheet.defaultName');
      $spreadSheet = Spreadsheet::create([
        'company_id' => getAuthAdminCompanyId(),
        'owner_id' => Auth::id(),
        'name' => $spreadsheetName,
        'key_entity' => config('constant.spreadsheet.keyEntity.load')
      ]);

      $this->createSpreadsheetSheet($spreadSheet->id, config('constant.spreadsheet.sheet.defaultName'));

      return $spreadSheet->id;
    });
  }

  /**
   * Common function to create a sheet in specific spreadsheet.
   * @param $spreadsheetId
   * @param $name
   * @return mixed
   */
  private function createSpreadsheetSheet($spreadsheetId, $name) {
    return SpreadsheetSheet::create([
      'spreadsheet_id' => $spreadsheetId,
      'name' => $name
    ]);
  }

  const ALL = 1;
  const VIEWER = 2;
  const EDITOR = 3;
  const ADMIN = 4;
  const OWNER = 5;

  /**
   * Check user has access or not.
   * @param $spreadsheet
   * @param array $accessLevels
   * @return void
   * @throws Exception
   */
  private function isUserHasAccess($spreadsheet, array $accessLevels) {
    if (in_array(self::OWNER, $accessLevels) && $spreadsheet->owner_id == Auth::id()) {
      return;
    }

    /* Check current user has access level or not */
    $currentUserAccessLevel = $this->getCurrentUserAccessLevel($spreadsheet->id, Auth::id());

    if (empty($currentUserAccessLevel)) {
      throw new Exception(config('response.spreadsheet.access_denied'));
    }

    $accessLevel = [];
    foreach ($accessLevels as $accessType) {
      switch ($accessType) {
        case self::ALL:
          $accessLevel = array_keys(config('constant.spreadsheet.accessLevel'));
          break;
        case self::VIEWER:
          $accessLevel = array_merge($accessLevel, [
            array_search(config('constant.spreadsheet.accessRole.viewer'), config('constant.spreadsheet.accessLevel'))
          ]);
          break;
        case self::EDITOR:
          $accessLevel = array_merge($accessLevel, [
            array_search(config('constant.spreadsheet.accessRole.editor'), config('constant.spreadsheet.accessLevel'))
          ]);
          break;
        case self::ADMIN:
          $accessLevel = array_merge($accessLevel, [
            array_search(config('constant.spreadsheet.accessRole.admin'), config('constant.spreadsheet.accessLevel')),
          ]);
          break;
      }
    }

    if (in_array($currentUserAccessLevel, $accessLevel)) {
      return;
    }

    throw new Exception(config('response.spreadsheet.access_denied'));
  }

  /**
   * Update spreadsheet name using validated data.
   * @throws Exception
   */
  public function modifySpreadsheetName($request) {
    $spreadsheet = Spreadsheet::select('id', 'owner_id')
      ->where('id', $request->id)
      ->where('company_id', getAuthAdminCompanyId())
      ->first();

    if (empty($spreadsheet)) {
      throw new Exception(config('response.spreadsheet.no_spreadsheet_found'));
    }

    $this->isUserHasAccess($spreadsheet, [self::OWNER, self::ADMIN]);

    return $spreadsheet->update(['name' => $request->name]);
  }

  /**
   * Add New column to spreadsheet.
   * @param $request
   * @return mixed
   */
  public function addColumnOnSpreadsheet($request) {
    return DB::transaction(function () use ($request) {
      $predefinedColumn = null;

      $spreadSheet = Spreadsheet::select('id', 'key_entity', 'owner_id')
        ->where('id', $request->id)
        ->where('company_id', getAuthAdminCompanyId())
        ->with([
          'sheets:id,spreadsheet_id',
        ])
        ->first();

      if (empty($spreadSheet)) {
        throw new Exception(config('response.spreadsheet.no_spreadsheet_found'));
      }

      $this->isUserHasAccess($spreadSheet, [self::OWNER, self::ADMIN]);

      $customColumnId = null;
      if ($request->has('customType')) {
        $customType = config('constant.spreadsheet.customType')[$request->customType];
        $newCustomColumn = SpreadsheetColumn::create([
          'spreadsheet_id' => $request->id,
          'name' => $request->name,
          'custom_type' => $customType,
        ]);
        $customColumnId = $newCustomColumn->id;
      }

      $sheet = $spreadSheet->sheets()->where('id', $request->sheetId)->first();
      $newOrderNumber = SpreadsheetSheetColumn::where('sheet_id', $request->sheetId)->count() + 1;

      if ($request->has('predefinedColumn')) {
        if ($spreadSheet->key_entity == config('constant.spreadsheet.keyEntity.load')) {
          $predefinedColumn = array_search($request->predefinedColumn, config('constant.spreadsheet.predefinedColumns.load'));
        }
      }

      return $sheet->sheetColumns()->create([
        'sheet_id' => $request->sheetId,
        'order' => $newOrderNumber,
        'predefined_column' => $predefinedColumn ?? null,
        'custom_column_id' => $request->existingCustomColumnId ?? $customColumnId,
      ]);
    });
  }

  /**
   * Create/Update cell value.
   * @param $request
   * @return mixed
   * @throws Exception
   */
  public function updateCellValue($request) {
    $spreadSheet = Spreadsheet::select('id', 'key_entity', 'owner_id')
      ->where('id', $request->id)
      ->where('company_id', getAuthAdminCompanyId())
      ->first();

    if (empty($spreadSheet)) {
      throw new Exception(config('response.spreadsheet.no_spreadsheet_found'));
    }

    $this->isUserHasAccess($spreadSheet, [self::ADMIN, self::EDITOR, self::OWNER]);

    $customColumn = SpreadsheetColumn::where('id', $request->customColumnId)
      ->where('spreadsheet_id', $request->id)
      ->select('id', 'custom_type')->first();

    if (empty($customColumn)) {
      throw new Exception(config('response.spreadsheet.column_not_editable'));
    }

    $updateArray = [];
    if ($customColumn->custom_type == 2) {
      // I have to make this change because FE is sending string...
      $updateArray['double_value'] = $request->value;
    } else if ($customColumn->custom_type == 3) {
      $updateArray['decimal_value'] = $request->value;
    } else {
      $updateArray['value'] = $request->value;
    }

    return SpreadsheetCustomColumnData::updateOrCreate([
      'spreadsheet_id' => $request->id,
      'column_id' => $request->customColumnId,
      'entity_id' => $request->keyId,
    ], $updateArray);
  }

  /**
   * Update Sheet Name of spreadsheet.
   * @param $request
   * @return mixed
   * @throws Exception
   */
  public function modifySheetName($request) {
    return DB::transaction(function () use ($request) {
      $spreadsheet = $this->getSpreadsheetWithSheetId($request->id, $request->sheetId);
      $this->isUserHasAccess($spreadsheet, [self::OWNER, self::ADMIN]);
      return $spreadsheet->sheets->first()->update(['name' => $request->name]);
    });
  }

  /**
   * Get Spreadsheet with sheet where given sheet id satisfied the condition.
   * @param $spreadsheetId
   * @param $sheetId
   * @return mixed
   * @throws Exception
   */
  public function getSpreadsheetWithSheetId($spreadsheetId, $sheetId) {
    $spreadsheet = Spreadsheet::select('id', 'owner_id')
      ->where('id', $spreadsheetId)
      ->where('company_id', getAuthAdminCompanyId())
      ->with([
        'sheets' => function ($innerQuery) use ($sheetId) {
          return $innerQuery->select('id', 'spreadsheet_id', 'name')->where('id', $sheetId);
        },
      ])
      ->first();

    if (empty($spreadsheet)) {
      throw new Exception(config('response.spreadsheet.no_spreadsheet_found'));
    }

    return $spreadsheet;
  }

  /**
   * Add new sheet on specific spreadsheet.
   * @param $request
   * @return bool
   */
  public function addSheet($request): bool {
    return DB::transaction(function () use ($request) {
      $spreadsheet = Spreadsheet::select('id', 'owner_id')
        ->where('id', $request->id)
        ->where('company_id', getAuthAdminCompanyId())
        ->first();

      if (empty($spreadsheet)) {
        throw new Exception(config('response.spreadsheet.no_spreadsheet_found'));
      }

      $this->isUserHasAccess($spreadsheet, [self::OWNER, self::ADMIN]);

      $sheet = $this->createSpreadsheetSheet($request->id, $request->name) ?? null;
      return !empty($sheet);
    });
  }

  /**
   * Update/modify spreadsheet sheet filter.
   * @param $request
   * @return mixed
   */
  public function modifySheetFilter($request) {
    return DB::transaction(function () use ($request) {
      $spreadsheet = $this->getSpreadsheetWithSheetId($request->id, $request->sheetId);
      if (empty($spreadsheet) || $spreadsheet->sheets->isEmpty()) {
        throw new Exception(config('response.spreadsheet.no_spreadsheet_found'));
      }
      $accessLevel = $this->getCurrentUserAccessLevel($spreadsheet->id, Auth::id());
      if (empty($accessLevel) && $spreadsheet->owner_id != Auth::id()) {
        throw new Exception(config('response.spreadsheet.access_denied'));
      }
      return $this->updateSpreadsheetSheetUserSettings(
        $request->sheetId,
        ['filter' => !empty($request->filter) ? json_encode($this->convertAllFilterDateToToday($request->filter)) : null]
      );

      /* Comment out code that is used needed.
      if (!empty($accessLevel) && (config('constant.spreadsheet.accessLevel')[$accessLevel] == config('constant.spreadsheet.accessRole.viewer')
        || config('constant.spreadsheet.accessLevel')[$accessLevel] == config('constant.spreadsheet.accessRole.editor'))) {
        $dbStoredFilter = !empty($sheet->filter) ? $this->filterPregMatch(json_encode(json_decode($sheet->filter))) : null;
        $requestFilter = !empty($request->filter) ? $this->filterPregMatch(json_encode($request->filter)) : null;
        if ($dbStoredFilter != $requestFilter) {
          throw new Exception(config('response.spreadsheet.invalid_filter'));
        }
      }

      // converting each and every filter date to "today"
      $filter = $this->convertAllFilterDateToToday($request->filter);

      return $sheet->update(['filter' => !empty($filter) ? $filter : null]);
      */
    });
  }

  /**
   * Convert All Filter Date To "Today".
   * @param $filter
   * @return array
   */
  private function convertAllFilterDateToToday($filter): array {
    if (!empty($filter)) {
      $requestFilter = (object)$filter ?? null;
      if (!empty($requestFilter)) {
        $filter['op'] = $requestFilter->op;
        $filter['conditions'] = collect($requestFilter->conditions)->map(function ($condition) {
          if ($condition['column'] == 'loadShipDate' || $condition['column'] == 'loadDeliveryDate') {
            $condition['value'] = 'today';
          }
          return $condition;
        })->toArray();
        return $filter;
      }
    }
    return [];
  }
  /*
  private function filterPregMatch($filter) {
    return preg_replace(
      [
        '{"cmp":"is","value":"\d{4}-\d{2}-\d{2}","column":"loadShipDate"}',
        '{"cmp":"is","value":"\d{4}-\d{2}-\d{2}","column":"loadDeliveryDate"}'
      ],
      [
        '"cmp":"is","value":"yyyy-mm-dd","column":"loadShipDate"',
        '"cmp":"is","value":"yyyy-mm-dd","column":"loadDeliveryDate"'
      ],
      $filter
    );
  }
  */

  /**
   * Get all users list with access level.
   * @param $request
   * @return array
   * @throws Exception
   */
  public function accessDetails($request): array {
    $spreadsheet = Spreadsheet::select('id', 'owner_id')
      ->where('id', $request->id)
      ->where('company_id', getAuthAdminCompanyId())
      ->with([
        'sharedUsers:id,spreadsheet_id,user_id,access_level'
      ])
      ->first();

    if (empty($spreadsheet)) {
      throw new Exception(config('response.spreadsheet.no_shared_user_found'));
    }

    $currentUserId = Auth::id();
    $adminLevel = array_search('admin', config('constant.spreadsheet.accessLevel'));
    $sharedUsers = $spreadsheet->sharedUsers;
    $sharedUser = $sharedUsers->where('user_id', $currentUserId)->first();
    if (
      ($spreadsheet->owner_id == $currentUserId)
      || ($sharedUser && $sharedUser->access_level == $adminLevel)
    ) {
      // Has permission to update shared details.
    } else {
      throw new Exception(config('response.spreadsheet.access_denied'));
    }

    $companyUsers = (new CompanyUserService)->getAllUsersV2Helper(
      [auth()->id(), $spreadsheet->owner_id], // Do not let admin see and update owner's permission.
      [config('constant.roles.driver')]
    );

    return [
      'id' => $spreadsheet->id,
      'companyUsers' => empty($companyUsers) ? [] : $companyUsers->map(function ($item) use ($sharedUsers) {
        $accessLevel = $sharedUsers->where('user_id', $item['id'])->pluck('access_level')->first();
        return [
          'userId' => $item['id'],
          'name' => $item['fullName'],
          'accessLevel' => !empty($accessLevel) ? config('constant.spreadsheet.accessLevel')[$accessLevel] : null
        ];
      })
    ];
  }

  /**
   * Update User access level of spreadsheet.
   * @param $request
   * @return mixed
   */
  public function updateAccessLevel($request) {
    return DB::transaction(function () use ($request) {
      $adminLevel = array_search('admin', config('constant.spreadsheet.accessLevel'));
      $loginId = Auth::id();
      $spreadsheet = Spreadsheet::select('id', 'owner_id')->where('id', $request->id)
        ->where('company_id', getAuthAdminCompanyId())
        ->where(function ($query) use ($loginId, $adminLevel) {
          $query->where('owner_id', $loginId)
            ->orWhereHas('sharedUsers', function ($subQuery) use ($loginId, $adminLevel) {
              $subQuery->where('user_id', $loginId)
                ->where('access_level', $adminLevel);
            });
        })
        ->first();

      if (empty($spreadsheet)) {
        throw new Exception(config('response.spreadsheet.no_spreadsheet_found'));
      }

      if ($spreadsheet->owner_id == $request->userId) {
        throw new Exception("Cannot change owner's permission.");
      }

      $spreadsheetSharedUser = $spreadsheet->sharedUsers()
        ->where('user_id', $request->userId)
        ->first();

      $accessLevel = !empty($request->accessLevel) ? array_search($request->accessLevel, config('constant.spreadsheet.accessLevel')) : null;

      if (!empty($spreadsheetSharedUser)) {
        return $spreadsheetSharedUser->update([
          'access_level' => $accessLevel
        ]);
      }

      if (empty($accessLevel)) {
        /* access level is null and user not exists. do not need to update or create. */
        return true;
      }

      return $spreadsheet->sharedUsers()->create([
        'user_id' => $request->userId,
        'access_level' => $accessLevel
      ]);
    });
  }

  /**
   *  Get Spreadsheet already created column list.
   * @param $request
   * @return mixed
   * @throws Exception
   */
  public function getCreatedCustomColumns($request) {
    $authUserId = Auth::id();
    $spreadSheet = Spreadsheet::query()->select('id', 'owner_id')
      ->where('id', $request->id)
      ->where('company_id', getAuthAdminCompanyId())
      ->with([
        'columns:id,spreadsheet_id,name'
      ])->first();

    if (empty($spreadSheet)) {
      throw new Exception(config('response.spreadsheet.no_spreadsheet_found'));
    }

    $currentUserAccessRole = $this->getCurrentUserAccessLevel($request->id, $authUserId);

    if ($spreadSheet->owner_id != $authUserId && config('constant.spreadsheet.accessLevel')[$currentUserAccessRole] != config('constant.spreadsheet.accessRole.admin')) {
      throw new Exception(config('response.spreadsheet.access_denied'));
    }

    $columns = $spreadSheet->columns;

    if (empty($columns)) {
      return [];
    }

    return $columns->map(function ($column) {
      return [
        'columnId' => $column->id,
        'name' => $column->name ?? ''
      ];
    });
  }

  private function formatDateAndTimeHelper($date, $startTime, $endTime): string {
    if (!empty($startTime) || !empty($endTime)) {
      $date = $date . ' ';
    }
    if (!empty($startTime)) {
      $date = $date . ' ' . Carbon::parse($startTime)->format('H:i');
    }
    if (!empty($endTime)) {
      $date = $date . "-" . Carbon::parse($endTime)->format('H:i');
    }
    return !empty($date) ? $date : '';
  }

  /**
   * Add Multiple columns.
   * @param $request
   * @return mixed
   */
  public function addMultipleColumns($request) {
    return DB::transaction(function () use ($request) {
      $spreadSheet = Spreadsheet::select('id', 'key_entity', 'owner_id')
        ->where('id', $request->id)
        ->where('company_id', getAuthAdminCompanyId())
        ->with([
          'sheets:id,spreadsheet_id',
        ])
        ->first();

      if (empty($spreadSheet)) {
        throw new Exception(config('response.spreadsheet.no_spreadsheet_found'));
      }

      $this->isUserHasAccess($spreadSheet, [self::OWNER, self::ADMIN]);

      $sheet = $spreadSheet->sheets()->where('id', $request->sheetId)->first();
      $newOrderNumber = SpreadsheetSheetColumn::where('sheet_id', $request->sheetId)->count() + 1;
      $columns = [];
      foreach ($request->columns as $column) {
        $customColumnId = null;
        $predefinedColumn = null;

        if (!empty($column['customType'])) {
          $customType = config('constant.spreadsheet.customType')[$column['customType']];
          $newCustomColumn = SpreadsheetColumn::create([
            'spreadsheet_id' => $request->id,
            'name' => $column['name'],
            'custom_type' => $customType,
          ]);
          $customColumnId = $newCustomColumn->id;
        }

        if (!empty($column['predefinedColumn'])) {
          if ($spreadSheet->key_entity == config('constant.spreadsheet.keyEntity.load')) {
            $predefinedColumn = array_search($column['predefinedColumn'], config('constant.spreadsheet.predefinedColumns.load'));
          }
        }

        $columns[] = [
          'sheet_id' => $request->sheetId,
          'order' => $newOrderNumber,
          'predefined_column' => $predefinedColumn ?? null,
          'custom_column_id' => $column['existingCustomColumnId'] ?? $customColumnId,
        ];
        $newOrderNumber++;
      }
      return $sheet->sheetColumns()->createMany($columns);
    });
  }

  /**
   * Delete Spreadsheet.
   * @param $request
   * @return mixed
   */
  public function deleteSpreadsheet($request) {
    return DB::transaction(function () use ($request) {
      $spreadsheet = Spreadsheet::where('id', $request->id)
        ->where('company_id', getAuthAdminCompanyId())
        ->first();

      if (empty($spreadsheet)) {
        throw new Exception(config('response.spreadsheet.no_spreadsheet_found'));
      }

      $this->isUserHasAccess($spreadsheet, [self::OWNER, self::ADMIN]);

      return $spreadsheet->delete();
    });
  }

  /**
   * Delete Sheet.
   * @param $request
   * @return mixed
   */
  public function deleteSheet($request) {
    return DB::transaction(function () use ($request) {
      $spreadsheet = Spreadsheet::where('id', $request->id)
        ->where('company_id', getAuthAdminCompanyId())
        ->with(['sheets' => function ($query) use ($request) {
          return $query->where('id', $request->sheetId)->first();
        }])
        ->first();

      if (empty($spreadsheet)) {
        throw new Exception(config('response.spreadsheet.no_spreadsheet_found'));
      }

      $this->isUserHasAccess($spreadsheet, [self::OWNER, self::ADMIN]);

      return SpreadsheetSheet::where('spreadsheet_id', $request->id)
        ->where('id', $request->sheetId)
        ->delete();
    });
  }

  /**
   * Delete Column from sheet.
   * @param $request
   * @return mixed
   */
  public function deleteColumn($request) {
    return DB::transaction(function () use ($request) {
      $spreadsheet = Spreadsheet::select('id', 'owner_id')->where('id', $request->id)
        ->where('company_id', getAuthAdminCompanyId())
        ->whereHas('sheets', function ($query) use ($request) {
          return $query->where('id', $request->sheetId);
        })
        ->first();

      if (empty($spreadsheet)) {
        throw new Exception(config('response.spreadsheet.no_spreadsheet_found'));
      }

      $this->isUserHasAccess($spreadsheet, [self::OWNER, self::ADMIN]);

      $isDeleted = SpreadsheetSheetColumn::where('sheet_id', $request->sheetId)
        ->where('id', $request->columnId)
        ->delete();

      if (!$isDeleted) {
        throw new Exception('Column Not Found: Selected column already deleted or not exists.');
      }

      $spreadsheetColumns = SpreadsheetSheetColumn::select('id', 'order')
        ->where('sheet_id', $request->sheetId)
        ->orderBy('order', 'asc')
        ->get();

      foreach ($spreadsheetColumns as $key => $column) {
        SpreadsheetSheetColumn::where('id', $column->id)->update(['order' => ($key + 1)]);
      }
    });
  }

  public function changeColumnOrder($request) {
    return DB::transaction(function () use ($request) {
      $spreadsheet = Spreadsheet::select('id', 'owner_id')->where('id', $request->id)
        ->where('company_id', getAuthAdminCompanyId())
        ->whereHas('sheets', function ($query) use ($request) {
          return $query->where('id', $request->sheetId);
        })
        ->first();

      if (empty($spreadsheet)) {
        throw new Exception(config('response.spreadsheet.no_spreadsheet_found'));
      }

      $this->isUserHasAccess($spreadsheet, [self::OWNER, self::ADMIN]);

      $newOrder = $request->newOrder;

      $spreadsheetColumns = SpreadsheetSheetColumn::select('id', 'order')
        ->where('sheet_id', $request->sheetId)
        ->where('order', '>=', $newOrder)
        ->where('id', '<>', $request->columnId)
        ->orderBy('order', 'asc')
        ->get();

      foreach ($spreadsheetColumns as $spreadsheetColumn) {
        SpreadsheetSheetColumn::where('id', $spreadsheetColumn->id)->update(['order' => ++$newOrder]);
      }

      return SpreadsheetSheetColumn::where('id', $request->columnId)->update(['order' => $request->newOrder]);
    });
  }

  /**
   * Update Row Height of a sheet.
   * Anyone can access this api, No role access restriction.
   * @param $request
   * @return mixed
   */
  public function updateRowHeight($request) {
    return DB::transaction(function () use ($request) {
      if (!$this->isSpreadsheetExists($request->id, $request->sheetId)) {
        throw new Exception(config('response.spreadsheet.no_spreadsheet_found'));
      }

      return $this->updateSpreadsheetSheetUserSettings($request->sheetId, [
        'row_height' => config('constant.spreadsheet.rowHeight')[$request->rowHeight]
      ]);
    });
  }

  public function updateColumnWidth($request) {
    return DB::transaction(function () use ($request) {
      $spreadsheet = Spreadsheet::select('id', 'owner_id')->where('id', $request->id)
        ->where('company_id', getAuthAdminCompanyId())
        ->whereHas('sheets', function ($query) use ($request) {
          return $query->where('id', $request->sheetId);
        })
        ->first();

      if (empty($spreadsheet)) {
        throw new Exception(config('response.spreadsheet.no_spreadsheet_found'));
      }

      $this->isUserHasAccess($spreadsheet, [self::OWNER, self::ADMIN]);

      return SpreadsheetSheetColumn::where('id', $request->columnId)
        ->where('sheet_id', $request->sheetId)
        ->update(['width' => $request->columnWidth]);
    });
  }

  /**
   * Update Sort Schema of a sheet.
   * @param $request
   * @return mixed
   */
  public function updateSortSchema($request) {
    return DB::transaction(function () use ($request) {
      if (!$this->isSpreadsheetExists($request->id, $request->sheetId)) {
        throw new Exception(config('response.spreadsheet.no_spreadsheet_found'));
      }

      return $this->updateSpreadsheetSheetUserSettings($request->sheetId, [
        'sort_schema' => !empty($request->sortSchema) ? $request->sortSchema : null
      ]);
    });
  }

  /**
   * Update color schema of a sheet.
   * @param $request
   * @return mixed
   */
  public function updateColorSchema($request) {
    return DB::transaction(function () use ($request) {
      if (!$this->isSpreadsheetExists($request->id, $request->sheetId)) {
        throw new Exception(config('response.spreadsheet.no_spreadsheet_found'));
      }
      return $this->updateSpreadsheetSheetUserSettings($request->sheetId, [
        'color_schema' => !empty($request->colorSchema) ? $request->colorSchema : null
      ]);
    });
  }

  /**
   * Check spreadsheet id and sheet id exists in this spreadsheet.
   * @return mixed
   * @throws Exception
   */
  private function isSpreadsheetExists($spreadsheetId, $sheetId) {
    return Spreadsheet::select('id', 'owner_id')->where('id', $spreadsheetId)
      ->where('company_id', getAuthAdminCompanyId())
      ->whereHas('sheets', function ($query) use ($sheetId) {
        return $query->where('id', $sheetId);
      })
      ->exists();
  }

  /**
   * Update Spreadsheet Sheet User settings.
   * @param $sheetId
   * @param $data
   * @return mixed
   */
  private function updateSpreadsheetSheetUserSettings($sheetId, $data) {
    return SpreadsheetSheetUserSettings::updateOrCreate(
      [
        'sheet_id' => $sheetId,
        'user_id' => Auth::id()
      ],
      $data
    );
  }

  /**
   * Create/Update multiple row of format for a sheet.
   * @param $request
   * @return mixed
   */
  public function updateSheetMultipleRowFormat($request) {
    return DB::transaction(function () use ($request) {
      $spreadsheet = Spreadsheet::select('id', 'owner_id')->where('id', $request->id)
        ->where('company_id', getAuthAdminCompanyId())
        ->whereHas('sheets', function ($query) use ($request) {
          return $query->where('id', $request->sheetId);
        })
        ->first();

      if (empty($spreadsheet)) {
        throw new Exception(config('response.spreadsheet.no_spreadsheet_found'));
      }

      $this->isUserHasAccess($spreadsheet, [self::OWNER, self::ADMIN, self::EDITOR]);

      foreach ($request->rows as $row) {
        SpreadsheetSheetRowMetaData::updateOrCreate([
          'sheet_id' => $request->sheetId,
          'entity_id' => $row['keyId'],
        ], [
          'format' => json_encode($row['format'])
        ]);
      }
    });
  }

  /**
   * Cron to generate loads weekly report fo each company.
   * Get all loads where last receiver delivery date lies in last week Sunday to Saturday.
   * Generating Loads excel report of each company.
   * Send email to specific users emails with generated excel report.
   * @return void
   */
  public function cronToGenerateLoadWeeklyReport() {
    try {
      $timezone = getCompanyTimezone(config('user_customization.GE.companyId'));

      // Calculate the current time in the specified timezone
      $nowInTimezone = Carbon::now($timezone);

      $startDayOfLastWeekUtc = $nowInTimezone->copy()->subWeek()->startOfWeek(Carbon::SUNDAY)
        ->startOfDay()->setTimezone('UTC')->toDateTimeString();
      $endDayOfLastWeekUtc = $nowInTimezone->copy()->subWeek()->endOfWeek(Carbon::SATURDAY)
        ->endOfDay()->setTimezone('UTC')->toDateTimeString();
      // Only used in naming.
      $startDayOfLastWeek = Carbon::parse($startDayOfLastWeekUtc)->toDateString();
      $endDayOfLastWeek = Carbon::parse($endDayOfLastWeekUtc)->toDateString();

      $adminCompanyDetails = AdminCompanyDetail::select('id', 'timezone')
        ->where('id', config('user_customization.GE.companyId'))
        ->with([
          'loads' => function ($innerQuery) use ($startDayOfLastWeekUtc, $endDayOfLastWeekUtc) {
            $innerQuery->whereBetween('invoice_generated_at', [$startDayOfLastWeekUtc, $endDayOfLastWeekUtc])->select(
              'id',
              'admin_company_detail_id',
              'customer_id',
              'tag_id',
              'refrence_id',
              'company_internal_reference',
              'load_unique_id',
              'total_amount',
              'status',
              'total_miles',
              'invoice_generated_at',
              'bill_to_code',
              'lane_code'
            )
              /*->whereIn('status', [
                config('constant.status.load.delivered'),
                config('constant.status.load.invoice_created'),
                config('constant.status.load.invoice_sent'),
                config('constant.status.load.invoice_paid')
              ])*/;
          },
          // shipping_end_date,delivery_end_date not queried because not used in format.
          'loads.loadShippers:id,load_id,shipper_name,address,city,state,zip_code,shipping_date,shipping_time,shipping_end_time,freight_weight,order',
          'loads.loadReceivers:id,load_id,receiver_name,address,city,state,zip_code,delivery_date,delivery_time,delivery_end_time,order',
          'loads.customer:id,company_name',
          'loads.loadDrivers:id,load_id,truck_id,trailer_id', // should not need driver_ids
          'loads.loadDrivers.truck:id,number',
          'loads.loadDrivers.trailer:id,number',
          'loads.tag:id,business_name'
        ])
        ->get();

      $toAddresses = config('user_customization.GE.weeklyLoadReportToAddresses');
      foreach ($adminCompanyDetails as $adminCompanyDetail) {
        $fileName = "{$adminCompanyDetail->id}-Load-Weekly-Report-From-{$startDayOfLastWeek}-To-{$endDayOfLastWeek}.xlsx";
        $directory = config('constant.export_path');
        $path = $directory . $fileName;
        $data = $this->modifyLoadsDataToGenerateWeeklyReport(
          $adminCompanyDetail->loads,
          $adminCompanyDetail->timezone
        );
        try {
          Excel::store(new LoadWeeklyExcelReport($data), $path, 's3');
          Mail::queue(new LoadWeeklyReport(
            $adminCompanyDetail,
            $toAddresses,
            $directory,
            $fileName,
            $startDayOfLastWeek,
            $endDayOfLastWeek
          ));
        } catch (Exception $exception) {
          Log::error($exception);
        }
      }
    } catch (Exception $exception) {
      Log::channel('slack')->emergency('Having error while generating report of last week delivered loads: ' . $exception->getMessage());
      Log::error($exception);
    }
  }

  /**
   * Modified and calculation of loads data here.
   * @param $loads
   * @param $adminCompanyTimezone
   * @return array
   */
  private function modifyLoadsDataToGenerateWeeklyReport($loads, $adminCompanyTimezone): array {
    $modifiedData = [];
    foreach ($loads as $load) {
      $shipper = $load->loadShippers->first();
      $receiver = $load->loadReceivers->last();

      $totalWeight = $load->loadShippers->sum('freight_weight');
      $totalWeight = ($totalWeight > 0) ? strval($totalWeight) : '';

      $trucks = $load->loadDrivers->pluck('truck')->pluck('number')->filter()->toArray();
      $truckNumbers = implode(', ', $trucks) ?? '';

      $trailers = $load->loadDrivers->pluck('trailer')->pluck('number')->filter()->toArray();
      $trailerNumbers = implode(', ', $trailers) ?? '';

      $modifiedData[] = [
        'status' => config('constant.status.loadStatusFrontEnd')[$load->status],
        'loadUniqueId' => $load->load_unique_id,
        'sequence' => '',
        'billToCode' => $load->bill_to_code ?? '',
        'totalAmount' => !empty($load->total_amount) ? $load->total_amount : 0,
        'shippingDate' => $shipper->shipping_date,
        'deliveryDate' => $receiver->delivery_date,
        'weight' => $totalWeight,
        'totalMiles' => !empty($load->total_miles) ? $load->total_miles : 0,
        'invoiceGeneratedAt' => !empty($load->invoice_generated_at) ?
          convertUtcTimestampToLocalCarbonObject(
            $load->invoice_generated_at,
            $adminCompanyTimezone
          )->toDateString() : '',
        'truck' => $truckNumbers,
        'trailer' => $trailerNumbers,
        'referenceId' => $load->refrence_id ?? '',
        'internalReference' => $load->company_internal_reference ?? '',
        'item' => 'Freight',
        'description' => 'Freight',
        'quantity' => 1,
        'rate' => !empty($load->total_amount) ? $load->total_amount : 0,
        'charge' => !empty($load->total_amount) ? $load->total_amount : 0,
        'rateUnit' => '',
        'customer' => $load->customer->company_name ?? '',
        'shipperName' => $shipper->shipper_name,
        'shipperAddress1' => $shipper->address,
        'shipperAddress2' => '',
        'shipperCity' => $shipper->city,
        'shipperState' => $shipper->state,
        'shipperZip' => $shipper->zip_code,
        'receiverName' => $receiver->receiver_name,
        'receiverAddress1' => $receiver->address,
        'receiverAddress2' => '',
        'receiverCity' => $receiver->city,
        'receiverState' => $receiver->state,
        'receiverZip' => $receiver->zip_code,
        'laneCode' => $load->lane_code ?? '',
      ];
    }
    return $modifiedData;
  }
}
