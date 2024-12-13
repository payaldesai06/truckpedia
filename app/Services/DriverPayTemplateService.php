<?php


namespace App\Services;

use App\Models\DriverPayTemplate;
use App\Models\DriverPayTemplateCustomField;
use App\Models\DriverPayTemplateDetail;
use Carbon\Carbon;
use Exception;
use Illuminate\Support\Facades\DB;

class DriverPayTemplateService {

  /**
   * Create driver pay template
   * @param $request
   * @return mixed
   */
  public function createDriverPayTemplate($request) {

    $driverPayTemplate = $this->createOrUpdateDriverPayTemplate($request);
    return ['id' => $driverPayTemplate->id];
  }

  /**
   * Update driver pay template
   * @return mixed
   * @throws Exception
   */
  public function updateDriverPayTemplate($request) {

    $driverPayTemplate = DriverPayTemplate::where('id', $request->id)->where('company_id', getAuthAdminCompanyId())->first();
    if (empty($driverPayTemplate)) {
      throw new Exception(config('response.driverPayTemplate.not_found'));
    }
    return $this->createOrUpdateDriverPayTemplate($request);
  }

  /**
   * Get the list of driver pay template
   * @return mixed
   * @throws Exception
   */
  public function getTemplates() {
    $perPage = request('perPage') ?? config('constant.pagination.pageSize');
    return DriverPayTemplate::select('id', 'name')
      ->where('company_id', getAuthAdminCompanyId())
      ->orderBy('id', 'desc')
      ->paginate($perPage);
  }

  /**
   * Get the list of all driver pay template
   * @return mixed
   * @throws Exception
   */
  public function getAllTemplates() {
    return DriverPayTemplate::select('id', 'name')
      ->where('company_id', getAuthAdminCompanyId())
      ->orderBy('id', 'desc')
      ->get();
  }

  /**
   * Get the driver pay template by Id
   * @return mixed
   * @throws Exception
   */
  public function getDriverPayTemplateById() {
    $driverPayTemplate = DriverPayTemplate::select('id', 'name')->where('id', request('id'))
      ->where('company_id', getAuthAdminCompanyId())
      ->with([
        'details',
        'details.driverPayTemplateCustomField'
      ])->first();
    if (empty($driverPayTemplate)) {
      throw new Exception(config('response.driverPayTemplate.not_found'));
    }
    $loadDetails = [];
    $tripDetails = [];
    foreach ($driverPayTemplate->details as $detail) {
      $data = [
        'detailId' => $detail->id ?? null,
        'fieldName' => $detail->driverPayTemplateCustomField->name ?? null,
        'fieldTarget' => config('constant.driverPayTemplate.target')[$detail->driverPayTemplateCustomField->target] ?? null,
        'fieldType' => config('constant.driverPayTemplate.type')[$detail->driverPayTemplateCustomField->type] ?? null,
        'fieldId' => $detail->field_id ?? null,
        'rate' => $detail->rate ?? null,
        'percentage' => number_format($detail->percentage_in_fractional * 100, 2, '.', '') ?? null,
        'payStartAfter' => $detail->pay_start_after ?? null,
      ];

      if (
        !empty($detail->driverPayTemplateCustomField->target)
        && config('constant.driverPayTemplate.target')[$detail->driverPayTemplateCustomField->target] == 'load'
      ) {
        $loadDetails[] = $data;
      } else if (
        !empty($detail->driverPayTemplateCustomField->target)
        && config('constant.driverPayTemplate.target')[$detail->driverPayTemplateCustomField->target] == 'trip'
      ) {
        $tripDetails[] = $data;
      }
    }
    return [
      'name' => $driverPayTemplate->name ?? null,
      'loadDetails' => $loadDetails ?? null,
      'tripDetails' => $tripDetails ?? null,
    ];
  }

  /**
   * Create Or Update driver pay template using validated request data.
   * @param $request
   * @return mixed
   */
  private function createOrUpdateDriverPayTemplate($request) {
    return DB::transaction(function () use ($request) {
      $requestLoadDetails = $request->loadDetails ?? [];
      $requestTripDetails = $request->tripDetails ?? [];
      $driverPayTemplateId = $request->id;
      $getValidatedData = [
        'name' => $request->name ?? null,
        'company_id' => getAuthAdminCompanyId() ?? null,
        'status' => 1
      ];

      $fieldIds = array_merge(array_column($requestTripDetails, 'fieldId'), array_column($requestLoadDetails, 'fieldId')) ?? [];
      $customFields = !empty($fieldIds) ? DriverPayTemplateCustomField::select('id', 'type')->whereIn('id', $fieldIds)->get() : collect();
      if (!empty($driverPayTemplateId)) {
        $driverPayTemplate = DriverPayTemplate::where('id', $driverPayTemplateId)
          ->with(['details'])
          ->first();
        $driverPayTemplate->fill($getValidatedData)->save();

        $existingDetails = $driverPayTemplate->details->pluck('id')->toArray();
        // array_column() keeps null if the field value is null
        $latestLoadDetailIds = array_filter(array_column($requestLoadDetails, 'detailId')) ?? [];
        $latestTripDetailIds = array_filter(array_column($requestTripDetails, 'detailId')) ?? [];
        $needsToDelete = array_diff($existingDetails, array_merge($latestLoadDetailIds, $latestTripDetailIds));
        if (!empty($needsToDelete)) {
          $driverPayTemplate->details()->whereIn('id', $needsToDelete)->delete();
        }

        $detailsToCreate = [];
        foreach ($requestLoadDetails as $detail) {
          $this->validateCustomFields($customFields, $detail);
          $driverPayTemplateDetail = $this->getDriverPayTemplateDetailData($driverPayTemplate->id, $detail);
          if (!empty($detail['detailId'])) {
            DriverPayTemplateDetail::where('id', $detail['detailId'])->update($driverPayTemplateDetail);
          } else {
            // add new details
            $detailsToCreate[] = $driverPayTemplateDetail;
          }
        }

        foreach ($requestTripDetails as $detail) {
          $this->validateCustomFields($customFields, $detail);
          $driverPayTemplateDetail = $this->getDriverPayTemplateDetailData($driverPayTemplate->id, $detail);
          if (!empty($detail['detailId'])) {
            DriverPayTemplateDetail::where('id', $detail['detailId'])->update($driverPayTemplateDetail);
          } else {
            // add new details
            $detailsToCreate[] = $driverPayTemplateDetail;
          }
        }
        $driverPayTemplate->details()->createMany($detailsToCreate);
      } else {
        $driverPayTemplate = DriverPayTemplate::create($getValidatedData);
        $driverPayTemplateDetails = [];
        foreach ($requestLoadDetails as $detail) {
          $this->validateCustomFields($customFields, $detail);
          $driverPayTemplateDetails[] = $this->getDriverPayTemplateDetailData($driverPayTemplate->id, $detail);
        }

        foreach ($requestTripDetails as $detail) {
          $this->validateCustomFields($customFields, $detail);
          $driverPayTemplateDetails[] = $this->getDriverPayTemplateDetailData($driverPayTemplate->id, $detail);
        }
        $driverPayTemplate->details()->createMany($driverPayTemplateDetails);
      }
      return $driverPayTemplate;
    });
  }

  /**
   * Get Driver Pay Template Detail.
   * @param $id
   * @param $detail
   * @return array
   */
  private function getDriverPayTemplateDetailData($id, $detail): array {
    $percentage = $detail['percentage'] ?? null;
    return [
      'template_id' => $id,
      'field_id' => $detail['fieldId'],
      'rate' => $detail['rate'] ?? null,
      'percentage_in_fractional' => !is_null($percentage) ? $percentage / 100 : null,
      'pay_start_after' => $detail['payStartAfter'] ?? null,
    ];
  }

  /**
   * validation to check type from customFields
   * @param $customFields
   * @param $detail
   * @throws Exception
   */
  private function validateCustomFields($customFields, $detail): void {
    $currField = $customFields->where('id', $detail['fieldId'])->first();
    $type = config('constant.driverPayTemplate.type')[$currField->type];
    if ($type == 'stopPay') {
      if (empty($detail['payStartAfter'])) {
        throw new Exception("The payStartAfter field is required.");
      }
    }
    if (
      $type != 'byPercentageOfHaulingFee' && $type != 'byPercentageOfFuelSurcharge' && $type != 'byPercentageOfTotalIncome'
      && $type != 'formulaLoadedMiles' && $type != 'formulaEmptyMiles'
    ) {
      if (empty($detail['rate'])) {
        throw new Exception("The rate field is required.");
      }
    }
    if ($type == 'byPercentageOfHaulingFee' || $type == 'byPercentageOfFuelSurcharge' || $type == 'byPercentageOfTotalIncome') {
      if (empty($detail['percentage'])) {
        throw new Exception("The percentage field is required.");
      }
    }
  }

  /**
   * Create or update one template details for one driver/tag/truck. To be called by other files.
   * @param $templateData
   * @return mixed
   */
  public function createOrUpdateModelTemplateHelper($templateData) {
    return DB::transaction(function () use ($templateData) {
      $model = $templateData['model'];
      $modelId = $templateData['modelId'];
      $loadDetails = $templateData['loadDetails'] ?? [];
      $tripDetails = $templateData['tripDetails'] ?? [];
      if ($model == 'tag') {
        $columnName = 'tag_id';
      } else if ($model == 'truck') {
        $columnName = 'truck_id';
      } else if ($model == 'user') {
        $columnName = 'user_id';
      } else {
        throw new Exception(config('response.error'));
      }

      $fieldIds = array_merge(array_column($loadDetails, 'fieldId'), array_column($tripDetails, 'fieldId')) ?? [];
      $customFields = DriverPayTemplateCustomField::select('id', 'type')->whereIn('id', $fieldIds)->get();
      $latestDetailIds = array_merge(array_column($loadDetails, 'detailId'), array_column($tripDetails, 'detailId')) ?? [];
      $latestDetailIds = array_filter($latestDetailIds);

      $existingDetailIds = DriverPayTemplateDetail::where($columnName, $modelId)->pluck('id')->toArray();
      $needsToDelete = array_diff($existingDetailIds, $latestDetailIds);
      if (!empty($needsToDelete)) {
        DriverPayTemplateDetail::whereIn('id', $needsToDelete)->delete();
      }

      $loadDetailsData = $this->extractTemplateDetails($loadDetails, $customFields, $modelId, $columnName);
      $tripDetailsData = $this->extractTemplateDetails($tripDetails, $customFields, $modelId, $columnName);
      $detailsToCreate = array_merge($loadDetailsData, $tripDetailsData) ?? [];
      return DriverPayTemplateDetail::insert($detailsToCreate);
    });
  }

  /**
   * Get one template details for one driver/tag/truck. To be called by other files.
   * @param $driverPayTemplateDetails
   * @param bool $includeTripDetails
   * @return array
   * @throws Exception
   */
  public function getModelTemplateHelper(
    $driverPayTemplateDetails,
    bool $includeTripDetails = true
  ): array {
    $loadDetails = [];
    $tripDetails = [];
    foreach ($driverPayTemplateDetails as $detail) {
      $data = [
        'detailId' => $detail->id ?? null,
        'fieldId' => $detail->field_id ?? null,
        'rate' => $detail->rate ?? null,
        'percentage' => is_null($detail->percentage_in_fractional) ? null : round(($detail->percentage_in_fractional * 100), 2),
        'payStartAfter' => is_null($detail->pay_start_after) ? null : (int)$detail->pay_start_after,
        'v2' => $detail->v2 ?? null,
        'v3' => $detail->v3 ?? null,
      ];
      if (!empty($detail->driverPayTemplateCustomField->target) && config('constant.driverPayTemplate.target')[$detail->driverPayTemplateCustomField->target] == 'load') {
        $loadDetails[] = $data;
      } else if (!empty($detail->driverPayTemplateCustomField->target) && config('constant.driverPayTemplate.target')[$detail->driverPayTemplateCustomField->target] == 'trip') {
        $tripDetails[] = $data;
      } else {
        throw new Exception(config('response.error'));
      }
    }
    if (!$includeTripDetails){
      return ['loadDetails' => $loadDetails ?? null];
    }
    return [
      'loadDetails' => $loadDetails ?? null,
      'tripDetails' => $tripDetails ?? null
    ];
  }

  /**
   * @param $details
   * @param $customFields
   * @param $modelId
   * @param $columnName
   * @return array
   * @throws Exception
   */
  public function extractTemplateDetails($details, $customFields, $modelId, $columnName): array {
    $detailsToCreate = [];
    $carbonNow = Carbon::now()->toDateTimeString();
    if (!empty($details)) {
      foreach ($details as $detail) {
        $this->validateCustomFields($customFields, $detail);
        $percentage = $detail['percentage'] ?? null;
        $formulaValue = null;
        if ((array_key_exists('v2', $detail) && !is_null($detail['v2']))
          || (array_key_exists('v3', $detail) && !is_null($detail['v3']))
        ) {
          $formulaValue = 1;
        }
        $driverPayTemplateDetail = [
          'field_id' => $detail['fieldId'],
          'rate' => $detail['rate'] ?? null,
          'percentage_in_fractional' => !is_null($percentage) ? $percentage / 100 : null,
          'pay_start_after' => $detail['payStartAfter'] ?? null,
          'v2' => $detail['v2'] ?? null,
          'v3' => $detail['v3'] ?? null,
          'formula' => $formulaValue,
        ];
        $driverPayTemplateDetail[$columnName] = $modelId;
        if (!empty($detail['detailId'])) {
          DriverPayTemplateDetail::where('id', $detail['detailId'])->update($driverPayTemplateDetail);
        } else {
          // add new details 
          $driverPayTemplateDetail["created_at"] = $carbonNow;
          $driverPayTemplateDetail["updated_at"] = $carbonNow;
          $detailsToCreate[] = $driverPayTemplateDetail;
        }
      }
    }
    return $detailsToCreate;
  }

  /**
   * @param $loadDetails
   * @param $driverPayTemplateFields
   * @param bool $isCheckV1
   * @return void
   * @throws Exception
   */
  public function checkLoadDetailsValidation(
    $loadDetails,
    $driverPayTemplateFields, $isCheckV1 = false) {
    $driverPayTemplateTypes = config('constant.driverPayTemplate.type');
    $formulaTypes = [
      array_search('formulaLoadedMiles', $driverPayTemplateTypes),
      array_search('formulaEmptyMiles', $driverPayTemplateTypes)
    ];
    foreach ($loadDetails as $detail) {
      $currentPayTemplate = $driverPayTemplateFields->firstWhere('id',
        $detail['fieldId']);
      if (in_array($currentPayTemplate->type, $formulaTypes)) {
        if ($isCheckV1 && !isset($detail['v1'])) {
          throw new Exception('The payTemplateDetails loadDetails v1 field is required with type ' .
            $driverPayTemplateTypes[$currentPayTemplate->type]);
        }
        if (!isset($detail['v2'])) {
          throw new Exception('The payTemplateDetails loadDetails v2 field is required with type ' .
            $driverPayTemplateTypes[$currentPayTemplate->type]);
        }
        if (!isset($detail['v3'])) {
          throw new Exception('The payTemplateDetails loadDetails v3 field is required with type ' .
            $driverPayTemplateTypes[$currentPayTemplate->type]);
        }
      }
    }
  }
}
