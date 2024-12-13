<?php

namespace App\Services;

use AdminCompanyDetails;
use App\Exports\DispatchLoadListReport;
use App\Http\Resources\Load\LoadReceiverResource;
use App\Http\Resources\Load\LoadShipperResource;
use App\Http\Resources\Load\ThirdPartyCarrierChargeResource;
use App\Http\Resources\Load\ThirdPartyCarrierDriverAssetAssignment;
use App\Mail\Load\CancelLoadMail;
use App\Mail\LoadCollaborator\AddEmailCollaboratorNotification;
use App\Mail\ThirdPartyCarrier\SendRateConfirmationToCarrier;
use App\Mail\Load\EmailToDriversForLoadUpdate;
use App\Models\AdminCompanyDetail;
use App\Models\Chat\Chat;
use App\Models\Chat\ChatUser;
use App\Models\DispacherDetail;
use App\Models\Load;
use App\Models\LoadDriver;
use App\Models\LoadDriverUser;
use App\Models\loadImage;
use App\Models\LoadLeg;
use App\Models\LoadReceiver;
use App\Models\LoadShipper;
use App\Models\LoadMultiPurposeStop;
use App\Models\Tag;
use App\Models\User;
use App\Services\Logs\LoadLogService;
use App\Services\Logs\VehicleLogService;
use App\Services\OpenAi\OpenAiService;
use App\Traits\LoadTrait;
use Barryvdh\DomPDF\Facade as PDF;
use Carbon\CarbonImmutable;
use Carbon\Carbon;
use Exception;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Arr;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\URL;
use Illuminate\Support\HigherOrderTapProxy;
use Maatwebsite\Excel\Facades\Excel;
use Illuminate\Support\Facades\Log;
use App\Services\Truckpedia\TruckReserved\TruckReservedService;
use App\Services\LoadReviewService;
use App\Models\Automation;
use App\Models\MelioAccount;
use GuzzleHttp\Client;

class LoadService {
  use LoadTrait;

  public function getAllLoad() {
    return $this->getAllLoadEagerLoading();
  }

  // Dispatch -> List page
  public function getAllLoadEagerLoading() {
    $perPage = request('rows') ?? config('response.per_page');
    $companyId = Auth::user()->admin_company_detail_id;
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
    $query = Load::query()
      //->withTrashed()
      ->where('admin_company_detail_id', '=', $companyId)
      ->with([
        'adminCompanyDetail:id,timezone',
        'loadShippers:id,load_id,city,state,shipping_date,shipping_end_date,shipping_time,shipping_end_time,order,shipper_reference',
        'loadReceivers:id,load_id,city,state,delivery_date,delivery_end_date,delivery_time,delivery_end_time,order,receiver_reference',
        'customer:id,company_name,billing_email,no_factoring',
        'loadDrivers:id,load_id,truck_id,trailer_id,external_trailer_number', // should not need driver_ids
        'loadDrivers.truck:id,number',
        'loadDrivers.trailer:id,number',
        'loadDrivers.driverAsUsers:id',
        'loadDrivers.driverAsUsers.driverDetail:user_id,name',
        'adminLoadImages:id,load_id,purpose',
        'dispatcher:id,first_name,last_name',
      ]);

    $customization = AdminCompanyDetail::select('show_qbd_invoice_sync_status_on_list')->find($companyId);
    if ($customization->show_qbd_invoice_sync_status_on_list) {
      $query->with([
        'qbdInvoices:id,load_id,quickbooks_txnid',
        'qbdInvoiceLoads:qbd_invoice_id,load_id',
        'qbdInvoiceLoads.qbdInvoice:id,mass_invoice_number,quickbooks_txnid',
      ]);
    }

    $result = $query
      ->when(request()->has('loadStatusWith') && request('loadStatusWith') != config('constant.all'), function ($query) {
        if (request('loadStatusWith') == 'deleted') {
          return $query->onlyTrashed()
            // We don't support previously deleted loads due to how we handle deleting loads in the latest commit.
            ->where('deleted_at', '>=', '2022-11-05 06:00:00');
        } else {
          return $query->where('status', request('loadStatusWith'));
        }
      })
      ->when(request('startDate') && request('endDate'), function ($query) {
        $query->whereBetween('i_end_date', [request('startDate'), request('endDate')]);
        /*->whereHas('loadShippers', function ($innerQuery) {
            $innerQuery->whereBetween(
              'shipping_date',
              [request('startDate'), request('endDate')]
            );
          })->orWhereHas*/
        /*
        $query->where(function ($query2) {
          $query2->whereHas('loadReceivers', function ($innerQuery) {
            $innerQuery->whereBetween(
              'delivery_date',
              [request('startDate'), request('endDate')]
            );
          });
        });
        */
      })
      ->when(request()->has('load_unique_id'), function ($query) {
        return $query->where('load_unique_id', 'like', '%' . request('load_unique_id') . '%');
      })
      ->when(request()->has('refrence_id'), function ($query) {
        return $query->where('refrence_id', 'like', '%' . request('refrence_id') . '%');
      })
      ->when(request('shipping_date'), function ($query, $search) {
        return $query->whereHas('loadShippers', function (Builder $query) use ($search) {

          $query->whereDate('shipping_date', $search)->take(1);
        });
      })
      ->when(request('delivery_date'), function ($query, $search) {
        return $query->whereHas('loadReceivers', function (Builder $query) use ($search) {

          $query->whereDate('delivery_date', $search)->take(1);
        });
      })
      ->when(request('customer'), function ($query, $globalSearch) {
        $search = '%' . $globalSearch . '%';
        return $query->whereHas('customer', function (Builder $query) use ($search) {
          $query->where('company_name', 'like', $search);
        });
      })
      ->when(request('pickupNumber'), function ($query, $globalSearch) {
        $search = '%' . $globalSearch . '%';
        return $query->whereHas('loadShippers', function (Builder $query) use ($search) {
          $query->where('shipper_reference', 'like', $search);
        });
      })
      ->when(request('deliveryNumber'), function ($query, $globalSearch) {
        $search = '%' . $globalSearch . '%';
        return $query->whereHas('loadReceivers', function (Builder $query) use ($search) {
          $query->where('receiver_reference', 'like', $search);
        });
      })
      ->when(request('pick_up'), function ($query, $globalSearch) {
        $search = '%' . $globalSearch . '%';
        return $query->whereHas('loadShippers', function (Builder $query) use ($search) {
          $query->where('city', 'like', $search)
            ->orWhere('state', 'like', $search);
        });
      })
      /*
            This is to demonstrate that when() and whereHas() and orWhereHas()
            could cause bugs. The solution is to add an extra where().
            See my comments in CalendarService.php.
            ->when(request('pick_up'), function ($query, $globalSearch) {
              $search = '%' . $globalSearch . '%';
              // $query->where(function($query) use ($search) {
              return $query->whereHas('loadShippers', function (Builder $query) use ($search) {
                $query->where('state', 'like', $search);
              })->orWhereHas('loadShippers', function (Builder $query) use ($search) {
                $query->where('city', 'like', $search);
              });
              // });
            })*/
      ->when(request('delivery'), function ($query, $globalSearch) {
        $search = '%' . $globalSearch . '%';
        return $query->whereHas('loadReceivers', function (Builder $query) use ($search) {
          $query->where('city', 'like', $search)
            ->orWhere('state', 'like', $search);
        });
      })
      ->when(request()->has('status'), function ($query) {
        return $query->where('status', 'like', '%' . request('status') . '%');
      })
      ->when(!empty(request('driver_name')), function ($query) {
        $searchName = '%' . request('driver_name') . '%';
        return $query->whereHas('loadDrivers.driverAsUsers.driverDetail', function (Builder $query) use ($searchName) {
          $query->where('name', 'like', $searchName);
        });
      })
      ->when(!empty(request('dispatcherUserId')), function ($query) {
        return $query->where('dispatcher_id', request('dispatcherUserId'));
      })
      ->when(!empty(request('dispatcherName')), function ($query) {
        $dispatcherName = request('dispatcherName');
        return $query->whereHas('dispatcher', function (Builder $query) use ($dispatcherName) {
          return $query->whereRaw(
            "concat(COALESCE(`first_name`,''), ' ', COALESCE(`last_name`,'')) like '%$dispatcherName%' "
          );
        });
      })
      ->when(
        $currentUserRole != config('constant.roles.tag_operator'),
        function ($query) use ($currentUserTags, $onlyAccessToTagLoads) {
          $query->where(function ($query2) use ($currentUserTags, $onlyAccessToTagLoads) {
            if (empty(request('tag_id')) && !empty($currentUserTags)) {
              $query2->whereIn('loads.tag_id', $currentUserTags);
              if ($onlyAccessToTagLoads == false) {
                $query2->orWhereNull('loads.tag_id');
              }
            } else if (!empty(request('tag_id'))) {
              if (request('tag_id') == config('constant.parent')) {
                return $query2->whereNull('loads.tag_id');
              } else {
                if (!empty($currentUserTags) && !in_array(request('tag_id'), $currentUserTags)) {
                  throw new Exception("Unauthorized loads access.");
                }
                return $query2->where('loads.tag_id', request('tag_id'));
              }
            }
          });
        }
      )
      ->when(
        $currentUserRole == config('constant.roles.tag_operator'),
        function ($query) use ($currentUserTags) {
          if (empty(request('tag_id'))) {
            return $query->whereIn('loads.tag_id', $currentUserTags);
          } else if (in_array(request('tag_id'), $currentUserTags)) {
            return $query->where('loads.tag_id', request('tag_id'));
          } else {
            throw new Exception("Unauthorized loads access.");
          }
        }
      )
      ->when(!empty(request('direction')), function ($query) {
        $direction = request('direction') == config('constant.load.directions.inbound') ? 1 : 0;
        return $query->where('loads.direction', $direction);
      })
      ->when(request()->has('companyInternalReference'), function ($query) {
        return $query->where('company_internal_reference', 'like', '%' .
          request('companyInternalReference') . '%');
      })
      ->when(
        request()->has(['sortField', 'sortOrder']),
        function ($query) {
          if (request('sortField') === 'shipping_date') {
            return $query->orderBy(function ($query) {
              $query->selectRaw('shipping_date')
                ->from('load_shippers')
                ->whereColumn('load_shippers.load_id', 'loads.id')
                ->orderByDesc('id')
                ->limit(1);
            }, request('sortOrder'));
          }

          if (request('sortField') === 'delivery_date') {
            return $query->orderBy(function ($query) {
              $query->selectRaw('delivery_date')
                ->from('load_receivers')
                ->whereColumn('loads.id', 'load_receivers.load_id')
                ->orderByDesc('id')
                ->limit(1);
            }, request('sortOrder'));
          }

          if (request('sortField') === 'customer') {
            return $query->orderBy(function ($query) {
              $query->selectRaw('company_name')
                ->from('customers')
                ->whereColumn('customers.id', 'loads.customer_id');
            }, request('sortOrder'));
          }

          if (request('sortField') === 'pick_up') {
            return $query->orderBy(function ($query) {
              $query->selectRaw('state')
                ->from('load_shippers')
                ->whereColumn('loads.id', 'load_shippers.load_id')
                ->orderByDesc('city')
                ->limit(1);
            }, request('sortOrder'));
          }

          if (request('sortField') === 'delivery') {
            return $query->orderBy(function ($query) {
              $query->selectRaw('state')
                ->from('load_receivers')
                ->whereColumn('loads.id', 'load_receivers.load_id')
                ->orderByDesc('city')
                ->limit(1);
            }, request('sortOrder'));
          }

          if (request('sortField') === 'companyInternalReference') {
            return $query->orderBy('company_internal_reference', request('sortOrder'));
          }

          return $query->orderBy(request('sortField'), request('sortOrder'));
        },
        function ($query) {
          return $query->orderBy('loads.id', 'desc');
        }
      )
      ->when(request()->has(['to_download']), function ($query) use ($perPage) {
        if (request('to_download') == 1) {
          return $query->get();
        } else {
          return $query->paginate($perPage);
        }
      }, function ($query) use ($perPage) {
        return $query->paginate($perPage);
      });

    // error_log(json_encode($result));
    return $result;
  }

  public function dispatchLoadListExport($loads) {
    $companyId = Auth::user()->admin_company_detail_id;
    $path = config('constant.export_path') . "$companyId-Dispatch-Load-List.xlsx";
    Excel::store(new DispatchLoadListReport($loads), $path, 's3');
    return [
      "download_url" => getExportFile("$companyId-Dispatch-Load-List.xlsx"),
    ];
  }

  /**
   * Create a Load.
   * @throws Exception
   */
  public function create() {
    $this->validateLoadStopsOrder();
    $user = Auth::user();
    $companyId = $user->admin_company_detail_id;
    // check new load-unique-id is not already existing with other load
    // do not allow new load to be created of the same reference
    $this->checkLoadNumberAndReference(
      $companyId,
      request('tag_id') ?? null,
      request('load_unique_id'),
      request('customer_id') ?? null,
      request('refrence_id') ?? null
    );

    $adminCompanyDetail = AdminCompanyDetail::query()->findOrFail($user->admin_company_detail_id);
    $currentDate = CarbonImmutable::now()->toDateString();

    if ($currentDate <= $adminCompanyDetail->trial_valid_till) {
      return $this->loadCreate($user, $adminCompanyDetail);
    }
    // if ($adminCompanyDetail->subscription_status == config('constant.subscription_status.active')) {
    $toDate = $adminCompanyDetail->subscription_to_date;
    if ($toDate && $currentDate <= $toDate) {
      return $this->loadCreate($user, $adminCompanyDetail);
    }

    // TODO: this is not efficient. Another way is to sort load by id and take the 25th,
    // then check it's created_at timestamp. What do you think?
    $getCurrentMonthLoadCount = Load::where(
      'admin_company_detail_id',
      $user->admin_company_detail_id
    )
      ->whereBetween(
        'created_at',
        [
          CarbonImmutable::now()->startOfMonth(),
          CarbonImmutable::now()->endOfMonth()
        ]
      )->count();
    // getPricingPlanV1($adminCompanyDetail) is not needed here.
    if ($getCurrentMonthLoadCount < config('constant.freePlanMonthlyLoadCreateLimit')) {
      return $this->loadCreate($user, $adminCompanyDetail);
    }
    throw new Exception(config('response.load.planLimitReached'));
  }

  /**
   * Validate duplicate load number or customer reference.
   * @param int $companyId
   * @param int|null $tagId
   * @param int $loadUniqueId
   * @param int|null $customerId
   * @param string|null $referenceId
   * @param int|null $id
   * @throws Exception
   */
  private function checkLoadNumberAndReference(
    $companyId,
    $tagId,
    $loadUniqueId,
    $customerId,
    $referenceId,
    $id = null
  ) {
    $load = Load::select('id', 'tag_id', 'load_unique_id', 'customer_id', 'refrence_id')
      ->where('admin_company_detail_id', $companyId)
      ->when(!empty($id), function ($q) use ($id) {
        return $q->where('id', '!=', $id);
      })
      ->where(function ($query) use ($tagId, $loadUniqueId, $customerId, $referenceId) {
        $query->where(function ($query) use ($tagId, $loadUniqueId) {
          $query->where('tag_id', $tagId)
            ->where('load_unique_id', $loadUniqueId);
        });
        // enable condition only if customerId/referenceId not null
        if (!empty($customerId) && !empty($referenceId)) {
          $query->orWhere(function ($query) use ($customerId, $referenceId) {
            $query->where('customer_id', $customerId)
              ->where('refrence_id', $referenceId);
          });
        }
      })->first();
    if (!$load) {
      return;
    }
    if ($load->tag_id == $tagId && $load->load_unique_id == $loadUniqueId) {
      throw new Exception('Load number already exists, please use a different one.');
    }
    if (!empty($customerId) && !empty($referenceId) && $load->customer_id == $customerId && $load->refrence_id == $referenceId) {
      throw new Exception('Another load with the same customer and reference already exists.');
    }
  }

  public function loadCreate($user, $adminCompanyDetail) {

    $adminCompanyDetailId = $adminCompanyDetail->id;
    $getValidatedData = $this->getValidatedData();
    $getValidatedData['user_id'] = $user->id;
    $getValidatedData['admin_company_detail_id'] = $adminCompanyDetailId;
    if (!empty(request('showRateConToDriver')) && request('showRateConToDriver') == true) {
      $getValidatedData['show_rate_con_to_driver'] = 1;
    }

    $getValidatedData['status'] = config('constant.status.load.open');
    if (request()->has('drivers') && !empty(request()->input('drivers'))) {
      // request()->filled() does not work here.
      foreach (request('drivers') as $row) {
        // This is old rule before allow drop trailer without trailer.
        if (
          !empty($row['driver_ids']) || !empty($row['truck_id'])
          || !empty($row['trailer_id'])
        ) {
          $getValidatedData['status'] = config('constant.status.load.assign');
          break;
        }
      }
    }

    // check only one stop can have containerHere == true
    $shippers = request('shippers');
    $receivers = request('receivers');
    $legs = request('load_legs') ?? [];
    $loadMultiStops = request('multiPurposeStops') ?? [];
    $this->checkOnlyOneStopCanHaveContainerHereTrue(
      $shippers,
      $receivers,
      $legs,
      $loadMultiStops
    );

    return DB::transaction(function () use (
      $getValidatedData,
      $shippers,
      $receivers,
      $legs,
      $loadMultiStops
    ) {
      $load = Load::create($getValidatedData);
      // Log when new load created
      (new LoadLogService())->createLoadLog(
        $load->id,
        array_search('createLoad', config('constant.logs.load'))
      );

      // rate confirmation
      $rateConfirmationFileName = request('rate_confirmation_file');
      if (!empty($rateConfirmationFileName)) {
        $load->rateConfirmations()->create([
          'file_name' => $rateConfirmationFileName,
          'file_name_alias' => $rateConfirmationFileName,
          'original_file_name' => request('rateConOriginalFileName') ?? null,
        ]);
      }
      // add load charge
      $getValidatedDataLoadCharge = $this->getValidatedDataLoadCarge();
      $load->loadCharge()->create($getValidatedDataLoadCharge);
      /*list($shippers, $receivers, $legs) = $this->validateAndModifyStopsByOrder(
        request('shippers'),
        request('receivers'),
        request('load_legs') ?? []
      );*/

      // add load shipper
      if (!empty($shippers)) {
        $shippers = $this->getValidatedShippers($shippers);
        $load->loadShippers()->createMany($shippers);
      }

      // add load receiver
      if (!empty($receivers)) {
        $receivers = $this->getValidatedReceivers($receivers);
        $load->loadReceivers()->createMany($receivers);
      }

      // Add Load Multipurpose Stop
      if (!empty($loadMultiStops)) {
        $loadMultiStops = $this->getValidatedMultiPurposeStopsLoadData($loadMultiStops);
        $load->loadMultiPurposeStops()->createMany($loadMultiStops);
      }

      /* create new load collaborators */
      if (request()->has('collaboratorEmails')) {
        $collaboratorEmails = [];
        foreach (request('collaboratorEmails') as $email) {
          $collaboratorEmails[] = [
            'email' => trim($email)
          ];
        }
        $collaboratorEmails = array_filter($collaboratorEmails);
        if (!empty($collaboratorEmails)) {
          $load->collaborators()->createMany($collaboratorEmails);
          $this->notifyCollaboratorsIfNeeded(request('collaboratorEmails'), $load);
        }
      }

      // add load legs
      if (!empty($legs)) {
        $legs = $this->getValidatedLoadLegs($legs);
        $load->loadLegs()->createMany($legs);
      }

      if (request()->has('thirdPartyCarrier.driverAssetAssignments')) {
        $driverAssetAssignments = $this->getValidateThirdPartyCarrierDriverAssetAssignments();
        $load->carrierDriverAssetAssignments()->createMany($driverAssetAssignments);
      }
      if (request()->has('thirdPartyCarrier.charges')) {
        $carrierCharge = $this->getValidateThirdPartyCarrierCharges();
        $load->thirdPartyCarrierCharge()->create($carrierCharge);
      }

      if (request()->has('drivers')) {
        // add load driver
        $driverUserIdsForPush = [];
        $drivers = request('drivers');
        $vehicleLogService = new VehicleLogService();
        //driver start location
        if (!empty($drivers)) {
          $drivers = $this->getValidatedLoadDriver($drivers);
        }
        $rows = $load->loadDrivers()->createMany($drivers);
        $logType = array_search('load', config('constant.logs.truckAndTrailerType'));
        $loadLogType = array_search('adminDispatcherAssignVehicleToLoad', config('constant.logs.load'));

        foreach ($rows as $row) {
          if (!empty($row->driver_ids)) {
            $userIds = explode(',', $row->driver_ids);
            foreach ($userIds as $userId) {
              LoadDriverUser::create([
                'load_driver_id' => $row->id,
                'user_id' => (int)$userId,
              ]);
              $driverUserIdsForPush[] = (int)$userId;
            }
          }
          /* log details of assign vehicle to load. */
          $vehicleLogService->logAssignVehicleToLoad($load->id, $loadLogType, $logType, $row->id, $row->truck_id, $row->trailer_id);
        }

        if (count($driverUserIdsForPush) > 0) {
          $dispatcherName = $this->getDispatcherName($load);

          /* Send push notification to assigned drivers */
          triggerDriverHasNewLoadPushNotification(
            $driverUserIdsForPush,
            $dispatcherName,
            request('load_unique_id')
          );
        }
      }

      //add or edit load notes
      if (request()->has('notes') && !empty(request('notes'))) {
        $this->createOrUpdateLoadNotes($load, request('notes'));
      }

      $this->checkRequestToSendBol($load);

      // send rate con to carrier
      if (
        request()->input('thirdPartyCarrier.sendRateConToCarrier', false)
        || request()->input('thirdPartyCarrier.sendRateConAndBolToCarrier', false)
      ) {
        $this->sendRateConfirmationToCarrier($load);
      }

      return $load;
    });
  }

  // TODO: I don't like this. You need to list down all fields FE can send for now.
  /**
   * Set Shippers Data
   * @param array $shippers
   * @return Collection
   */
  private function getValidatedShippers($shippers): Collection {
    return collect($shippers)->map(function ($shipper) {
      if (isset($shipper['id'])) {
        $loadShipperData['id'] = $shipper['id'];
      }
      $loadShipperData['order'] = $shipper['order'] ?? null;
      $loadShipperData['shipper_name'] = $shipper['shipper_name'] ?? null;
      $loadShipperData['address'] = $shipper['address'] ?? null;
      $loadShipperData['city'] = $shipper['city'] ?? null;
      $loadShipperData['state'] = $shipper['state'] ?? null;
      $loadShipperData['zip_code'] = $shipper['zip_code'] ?? null;
      $loadShipperData['latitude'] = $shipper['latitude'] ?? null;
      $loadShipperData['longitude'] = $shipper['longitude'] ?? null;
      $loadShipperData['contact_person'] = $shipper['contact_person'] ?? null;
      $loadShipperData['contact_number'] = $shipper['contact_number'] ?? null;
      $loadShipperData['shipper_reference'] = $shipper['shipper_reference'] ?? null;
      $loadShipperData['shipping_date'] = $shipper['shipping_date'] ?? null;
      $loadShipperData['shipping_end_date'] = $shipper['shipping_end_date'] ?? null;
      $loadShipperData['shipping_time'] = $shipper['shipping_time'] ?? null;
      $loadShipperData['shipping_end_time'] = $shipper['shipping_end_time'] ?? null;
      if (array_key_exists('arrivedLocalDatetime', $shipper)) { // Update only if exist
        $loadShipperData['arrived_local_datetime'] = $shipper['arrivedLocalDatetime'];
      }
      if (array_key_exists('loadedLocalDatetime', $shipper)) { // Update only if exist
        $loadShipperData['loaded_local_datetime'] = $shipper['loadedLocalDatetime'];
      }
      $loadShipperData['freight_equipment_type'] = $shipper['freightEquipmentType'] ?? null;
      $loadShipperData['freight_description'] = $shipper['freight_description'] ?? null;
      $loadShipperData['freight_weight'] = $shipper['freight_weight'] ?? null;
      $loadShipperData['weight_unit'] = $shipper['weight_unit'] ?? null;
      $loadShipperData['freight_qty'] = $shipper['freight_qty'] ?? null;
      $loadShipperData['qty_rate'] = $shipper['qtyRate'] ?? null;
      $loadShipperData['qty_unit'] = $shipper['qty_unit'] ?? null;
      $loadShipperData['freight_length'] = $shipper['freight_length'] ?? null;
      $loadShipperData['freight_width'] = $shipper['freight_width'] ?? null;
      $loadShipperData['freight_height'] = $shipper['freight_height'] ?? null;
      $loadShipperData['shipper_note'] = $shipper['shipper_note'] ?? null;
      $loadShipperData['container'] = $shipper['container'] ?? null;
      $loadShipperData['temperature'] = $shipper['temperature'] ?? null;

      if (array_key_exists('dropTrailerType', $shipper)) {
        $loadShipperData['drop_trailer_type'] = getDropHookTrailerType($shipper['dropTrailerType'] ?? null);
      }

      if (array_key_exists('hookTrailerType', $shipper)) {
        $loadShipperData['hook_trailer_type'] = getDropHookTrailerType($shipper['hookTrailerType'] ?? null);
      }

      if (array_key_exists('dropTrailerId', $shipper)) {
        $loadShipperData['drop_trailer_id'] = $shipper['dropTrailerId'] ?? null;
      }

      if (array_key_exists('hookTrailerId', $shipper)) {
        $loadShipperData['hook_trailer_id'] = $shipper['hookTrailerId'] ?? null;
      }

      $loadShipperData['additional_freight_details'] = !empty($shipper['additionalFreightDetails']) ?
        $this->convertAdditionalFreightDetailsToJson($shipper['additionalFreightDetails']) :
        null;

      $loadShipperData['container_here'] = !empty($shipper['containerHere']) ? 1 : null;

      return $loadShipperData;
    });
  }

  /**
   * Convert Additional Freight Details To Json
   * @param $additionalFreightDetails
   * @return false|string
   */
  private function convertAdditionalFreightDetailsToJson($additionalFreightDetails) {
    $W = $additionalFreightDetails['totalWeight'] ?? null;
    $Q = $additionalFreightDetails['totalQty'] ?? null;
    $a = [];
    $details = $additionalFreightDetails['details'] ?? null;
    if (!is_null($details)) {
      foreach ($details as $detail) {
        $a[] = [
          'u' => $detail['equipmentType'] ?? null,
          'd' => $detail['description'] ?? null,
          'e' => $detail['weight'] ?? null,
          'i' => $detail['weightUnit'] ?? null,
          'q' => $detail['qty'] ?? null,
          't' => $detail['qtyUnit'] ?? null,
          'y' => $detail['qtyRate'] ?? null,
          'l' => $detail['length'] ?? null,
          'w' => $detail['width'] ?? null,
          'h' => $detail['height'] ?? null,
        ];
      }
    }
    return json_encode(['W' => $W, 'Q' => $Q, 'a' => $a]);
  }

  /**
   * Set Receivers Data
   * @param array $receivers
   * @return Collection
   */
  private function getValidatedReceivers($receivers): Collection {
    return collect($receivers)->map(function ($receiver) {
      if (isset($receiver['id'])) {
        $loadReceiverData['id'] = $receiver['id'];
      }
      $loadReceiverData['order'] = $receiver['order'] ?? null;
      $loadReceiverData['receiver_name'] = $receiver['receiver_name'] ?? null;
      $loadReceiverData['address'] = $receiver['address'] ?? null;
      $loadReceiverData['city'] = $receiver['city'] ?? null;
      $loadReceiverData['state'] = $receiver['state'] ?? null;
      $loadReceiverData['zip_code'] = $receiver['zip_code'] ?? null;
      $loadReceiverData['latitude'] = $receiver['latitude'] ?? null;
      $loadReceiverData['longitude'] = $receiver['longitude'] ?? null;
      $loadReceiverData['contact_person'] = $receiver['contact_person'] ?? null;
      $loadReceiverData['contact_number'] = $receiver['contact_number'] ?? null;
      $loadReceiverData['receiver_reference'] = $receiver['receiver_reference'] ?? null;
      $loadReceiverData['delivery_date'] = $receiver['delivery_date'] ?? null;
      $loadReceiverData['delivery_end_date'] = $receiver['delivery_end_date'] ?? null;
      $loadReceiverData['delivery_time'] = $receiver['delivery_time'] ?? null;
      $loadReceiverData['delivery_end_time'] = $receiver['delivery_end_time'] ?? null;
      if (array_key_exists('arrivedLocalDatetime', $receiver)) { // Update only if exist
        $loadReceiverData['arrived_local_datetime'] = $receiver['arrivedLocalDatetime'];
      }
      if (array_key_exists('unloadedLocalDatetime', $receiver)) { // Update only if exist
        $loadReceiverData['unloaded_local_datetime'] = $receiver['unloadedLocalDatetime'];
      }
      $loadReceiverData['receiver_note'] = $receiver['receiver_note'] ?? null;

      if (array_key_exists('dropTrailerType', $receiver)) {
        $loadReceiverData['drop_trailer_type'] = getDropHookTrailerType($receiver['dropTrailerType'] ?? null);
      }

      if (array_key_exists('hookTrailerType', $receiver)) {
        $loadReceiverData['hook_trailer_type'] = getDropHookTrailerType($receiver['hookTrailerType'] ?? null);
      }

      if (array_key_exists('dropTrailerId', $receiver)) {
        $loadReceiverData['drop_trailer_id'] = $receiver['dropTrailerId'] ?? null;
      }

      if (array_key_exists('hookTrailerId', $receiver)) {
        $loadReceiverData['hook_trailer_id'] = $receiver['hookTrailerId'] ?? null;
      }

      $loadReceiverData['container_here'] = !empty($receiver['containerHere']) ? 1 : null;

      return $loadReceiverData;
    });
  }

  /**
   * Set Load Leg Data
   * @param array $legs
   * @return Collection
   */
  private function getValidatedLoadLegs($legs): Collection {
    return collect($legs)->map(function ($leg) {
      if (isset($leg['id'])) {
        $loadLegData['id'] = $leg['id'];
      }
      $loadLegData['order'] = $leg['order'] ?? null;
      $loadLegData['location_name'] = $leg['location_name'] ?? null;
      $loadLegData['address'] = $leg['address'] ?? null;
      $loadLegData['city'] = $leg['city'] ?? null;
      $loadLegData['state'] = $leg['state'] ?? null;
      $loadLegData['zip_code'] = $leg['zip_code'] ?? null;
      $loadLegData['latitude'] = $leg['latitude'] ?? null;
      $loadLegData['longitude'] = $leg['longitude'] ?? null;
      $loadLegData['contact_person'] = $leg['contact_person'] ?? null;
      $loadLegData['contact_number'] = $leg['contact_number'] ?? null;
      $loadLegData['leg_order'] = $leg['leg_order'] ?? null;
      $loadLegData['date'] = $leg['date'] ?? null;
      $loadLegData['end_date'] = $leg['end_date'] ?? null;
      $loadLegData['time'] = $leg['time'] ?? null;
      $loadLegData['end_time'] = $leg['end_time'] ?? null;
      $loadLegData['note'] = $leg['note'] ?? null;

      if (array_key_exists('dropTrailerType', $leg)) {
        $loadLegData['drop_trailer_type'] = getDropHookTrailerType($leg['dropTrailerType'] ?? null);
      }

      if (array_key_exists('hookTrailerType', $leg)) {
        $loadLegData['hook_trailer_type'] = getDropHookTrailerType($leg['hookTrailerType'] ?? null);
      }

      if (array_key_exists('dropTrailerId', $leg)) {
        $loadLegData['drop_trailer_id'] = $leg['dropTrailerId'] ?? null;
      }

      if (array_key_exists('hookTrailerId', $leg)) {
        $loadLegData['hook_trailer_id'] = $leg['hookTrailerId'] ?? null;
      }

      $loadLegData['container_here'] = !empty($leg['containerHere']) ? 1 : null;

      return $loadLegData;
    });
  }

  /**
   * Set Load Multi Load Stops Data
   * @param $loadMultiStops
   * @return Collection
   */
  private function getValidatedMultiPurposeStopsLoadData($loadMultiStops): Collection {
    return collect($loadMultiStops)->map(function ($requestedLoadMultiStops) {
      if (isset($requestedLoadMultiStops['multiPurposeStopId'])) {
        $loadMultiStopsData['id'] = $requestedLoadMultiStops['multiPurposeStopId'];
      }
      $loadMultiStopsData['type'] = !empty($requestedLoadMultiStops['type'])
        ? array_search(
          $requestedLoadMultiStops['type'],
          config('constant.load.multiPurposeStopsType')
        ) : null;
      $loadMultiStopsData['order'] = $requestedLoadMultiStops['order'] ?? null;
      $loadMultiStopsData['name'] = $requestedLoadMultiStops['name'] ?? null;
      $loadMultiStopsData['address'] = $requestedLoadMultiStops['address'] ?? null;
      $loadMultiStopsData['city'] = $requestedLoadMultiStops['city'] ?? null;
      $loadMultiStopsData['state'] = $requestedLoadMultiStops['state'] ?? null;
      $loadMultiStopsData['zip_code'] = $requestedLoadMultiStops['zipCode'] ?? null;
      $loadMultiStopsData['latitude'] = $requestedLoadMultiStops['latitude'] ?? null;
      $loadMultiStopsData['longitude'] = $requestedLoadMultiStops['longitude'] ?? null;
      $loadMultiStopsData['date'] = $requestedLoadMultiStops['date'] ?? null;
      $loadMultiStopsData['time'] = $requestedLoadMultiStops['time'] ?? null;
      $loadMultiStopsData['end_date'] = $requestedLoadMultiStops['endDate'] ?? null;
      $loadMultiStopsData['end_time'] = $requestedLoadMultiStops['endTime'] ?? null;
      $loadMultiStopsData['contact_person'] = $requestedLoadMultiStops['contactPerson'] ?? null;
      $loadMultiStopsData['contact_number'] = $requestedLoadMultiStops['contactNumber'] ?? null;
      $loadMultiStopsData['notes'] = $requestedLoadMultiStops['notes'] ?? null;

      if (array_key_exists('dropTrailerType', $requestedLoadMultiStops)) {
        $loadMultiStopsData['drop_trailer_type'] = getDropHookTrailerType($requestedLoadMultiStops['dropTrailerType'] ?? null);
      }

      if (array_key_exists('hookTrailerType', $requestedLoadMultiStops)) {
        $loadMultiStopsData['hook_trailer_type'] = getDropHookTrailerType($requestedLoadMultiStops['hookTrailerType'] ?? null);
      }

      if (array_key_exists('dropTrailerId', $requestedLoadMultiStops)) {
        $loadMultiStopsData['drop_trailer_id'] = $requestedLoadMultiStops['dropTrailerId'] ?? null;
      }

      if (array_key_exists('hookTrailerId', $requestedLoadMultiStops)) {
        $loadMultiStopsData['hook_trailer_id'] = $requestedLoadMultiStops['hookTrailerId'] ?? null;
      }
      $loadMultiStopsData['segment_distance'] = $requestedLoadMultiStops['segmentDistance'] ?? null;

      $loadMultiStopsData['container_here'] = !empty($requestedLoadMultiStops['containerHere']) ? 1 : null;

      return $loadMultiStopsData;
    });
  }

  /**
   * Check company's automation load collaborator notification.
   * @param $newEmailsData
   * @param $load
   * @return void
   */
  private function notifyCollaboratorsIfNeeded($newEmailsData, $load) {
    $loadCollaboratorAddedNotification = Automation::where(
      'company_id',
      getAuthAdminCompanyId()
    )
      ->value('load_collaborator_added_notification') ?? null;
    if ($loadCollaboratorAddedNotification) {
      $this->sendAddEmailCollaboratorNotification($newEmailsData, $load);
    }
    return;
  }

  /**
   * Send email notification to new added collaborators emails.
   * @param $collaboratorsEmails
   * @param $load
   * @return void
   */
  private function sendAddEmailCollaboratorNotification($collaboratorsEmails, $load) {
    try {
      Mail::to($collaboratorsEmails)
        ->queue(new AddEmailCollaboratorNotification(['load_id' => $load->id], $load));
    } catch (Exception $exception) {
      Log::error($exception);
    }
  }

  /**
   * Update Load Details.
   * @throws Exception
   */
  public function update() {
    $this->validateLoadStopsOrder();
    return tap($this->getLoadForUpdate(), function ($load) {
      $companyId = Auth::user()->admin_company_detail_id;
      // check new load-unique-id is not already existing with other load
      // do not allow new load to be created of the same reference
      if (
        $load->tag_id != request('tag_id')
        || $load->load_unique_id != request('load_unique_id')
        // ONLY check if customer and reference are both set
        || (!empty(request('customer_id')) && !empty(request('refrence_id'))
          && ($load->customer_id != request('customer_id') || $load->refrence_id != request('refrence_id')))
      ) {
        $this->checkLoadNumberAndReference(
          $companyId,
          request('tag_id') ?? null,
          request('load_unique_id'),
          request('customer_id') ?? null,
          request('refrence_id') ?? null,
          $load->id
        );
      }

      // check only one stop can have containerHere == true
      $shippers = request('shippers');
      $receivers = request('receivers');
      $legs = request('load_legs') ?? [];
      $loadMultiStops = request('multiPurposeStops') ?? [];
      $this->checkOnlyOneStopCanHaveContainerHereTrue(
        $shippers,
        $receivers,
        $legs,
        $loadMultiStops
      );

      $shipperEvents = [];
      $receiverEvents = [];

      DB::transaction(function () use (
        &$load,
        $shippers,
        $receivers,
        $legs,
        $loadMultiStops,
        &$shipperEvents,
        &$receiverEvents
      ) {
        $shippers = $this->getValidatedShippers($shippers);
        $receivers = $this->getValidatedReceivers($receivers);
        $loadLegs = $this->getValidatedLoadLegs($legs);
        $loadMultiPurposeStops = $this->getValidatedMultiPurposeStopsLoadData($loadMultiStops);

        if (
          request()->has('status') && !empty(request('status'))
          && request('status') == config('constant.status.load.delivered')
        ) {
          $customizationsBitmask = AdminCompanyDetail::select('customizations_bitmask')
            ->where('id', getAuthAdminCompanyId())
            ->first()->customizations_bitmask ?? null;
          if ($customizationsBitmask && ($customizationsBitmask & 1)) {
            $this->validateDeliveredStatusUpdate($shippers, $receivers);
          }
        }
        // This has to be either out of transaction, or in transaction but before
        // load update. Otherwise we will get deadlock cause Node.js needs the write
        // lock of load.id for FK.
        $shipperEvents = $this->prepareStatusUpdateForEdi('loadShippers', $shippers, $load);
        $receiverEvents = $this->prepareStatusUpdateForEdi('loadReceivers', $receivers, $load);

        // update load
        $getValidatedData = $this->getValidatedData();

        /*if (request('drivers') && $load->status == config('constant.status.load.open')) {
          $getValidatedData['status'] = config('constant.status.load.assign');
        }*/

        $load->update($getValidatedData);

        //add load charge
        $getValidatedDataLoadCharge = $this->getValidatedDataLoadCarge();
        $load->loadCharge()->update($getValidatedDataLoadCharge);
        /*list($shippers, $receivers, $loadLegs) = $this->validateAndModifyStopsByOrder(
          request('shippers'),
          request('receivers'),
          request('load_legs') ?? []
        );*/
        // We support dropTrailerType and hookTrailerType, no drop/hookTrailerId for now.

        //shipper update
        $LoadShipper = new LoadShipper();
        $this->updateLoad('loadShippers', $shippers, $LoadShipper, $load);

        //receiver update
        $loadReceiver = new LoadReceiver();
        $this->updateLoad('loadReceivers', $receivers, $loadReceiver, $load);

        // update load legs
        $oneLeg = new LoadLeg();
        $this->updateLoad('loadLegs', $loadLegs, $oneLeg, $load);

        // Add Load Multipurpose Stop
        $this->updateLoad(
          'loadMultiPurposeStops',
          $loadMultiPurposeStops,
          new LoadMultiPurposeStop(),
          $load
        );

        // No longer needed.
        // $this->validateAllStopsOrderEitherNullOrNotNull($load->id);

        $loadCollaborators = $load->collaborators;
        if (!empty(request('collaboratorEmails'))) {
          $requestCollaborators = array_map('trim', request('collaboratorEmails'));
          $existingEmails = $loadCollaborators->pluck('email')->toArray();
          $newEmails = array_diff($requestCollaborators, $existingEmails);
          $load->collaborators()
            ->whereIn(
              'email',
              array_diff($existingEmails, $requestCollaborators ?? [])
            )->delete();

          $newEmailsData = [];
          foreach ($newEmails as $email) {
            $newEmailsData[] = [
              'email' => $email
            ];
          }
          $newEmailsData = array_filter($newEmailsData);
          if (!empty($newEmailsData)) {
            $load->collaborators()->createMany($newEmailsData);
            $this->notifyCollaboratorsIfNeeded($newEmailsData, $load);
          }
        } else {
          if ($loadCollaborators->isNotEmpty()) {
            $load->collaborators()->delete();
          }
        }

        //driver update
        if (request()->has('drivers')) {
          $hasDriverReassign = false;
          foreach (request('drivers') as $row) {
            if (isset($row['reassign']) && $row['reassign']) {
              $hasDriverReassign = true;
            }
          }

          $oldDriverUserIds = [];
          $rows = LoadDriver::select('driver_ids')->where('load_id', $load->id)->get();
          foreach ($rows as $row) {
            if (!empty($row->driver_ids)) {
              $userIds = explode(',', $row->driver_ids);
              foreach ($userIds as $userId) {
                $oldDriverUserIds[] = (int)$userId;
              }
            }
          }

          $drivers = collect(request('drivers'));
          //driver start location
          if (!empty($drivers)) {
            $drivers = $this->getValidatedLoadDriver($drivers);
          }
          $loadDriver = new LoadDriver();
          $this->updateDriverLoad('loadDrivers', $drivers, $loadDriver, $load);

          // If no reassign, this variable is true.
          // If assign, it is false and should be false.
          $loadStatusShouldBeOpen = !$hasDriverReassign;

          $newDriverUserIds = [];
          $rows = LoadDriver::select(
            'driver_ids',
            'truck_id',
            'trailer_id',
            'status'
          )->where('load_id', $load->id)->get();
          foreach ($rows as $row) {
            if (
              $row->status != config('constant.status.load_driver.handed_over')
              && (!empty($row->driver_ids)) // || !empty($row->truck_id) || !empty($row->trailer_id)
            ) {
              $loadStatusShouldBeOpen = false;
            }
            if (!empty($row->driver_ids)) {
              $userIds = explode(',', $row->driver_ids);
              foreach ($userIds as $userId) {
                $newDriverUserIds[] = (int)$userId;
              }
            }
          }
          // We need to use array_values(), as array_diff actually returns key-value based object.
          $driverUserIdsForPush = array_values(array_diff($newDriverUserIds, $oldDriverUserIds));

          if (count($driverUserIdsForPush) > 0) {
            $dispatcherName = $this->getDispatcherName($load);

            /* Send push notification to newly assigned drivers */
            triggerDriverHasNewLoadPushNotification(
              $driverUserIdsForPush,
              $dispatcherName,
              request('load_unique_id')
            );
          }

          if (!$loadStatusShouldBeOpen) {
            if ($hasDriverReassign) {
              $load->status = config('constant.status.load.in_transit');
              $load->save();
            } else if ($load->status == config('constant.status.load.open')) {
              $load->status = config('constant.status.load.assign');
              $load->save();
            }
          }
        }

        //update load status
        if (request()->has('status') && !empty(request('status'))) {
          $newStatus = request('status');
          /*
          if ($newStatus == config('constant.status.load.invoice_created')) {
            (new LoadInvoiceService())->generateInvoice(request());
          }
          */
          // TODO: we might need to handle request payment later.
          // If so, before request payment, we need to generate invoice.
          $load->status = $newStatus;

          if ($newStatus == config('constant.status.load.delivered')) {
            $load->delivered_at = Carbon::now('UTC');
          }

          $load->save();

          $companyType = getLoggedUserCompanyType();
          if ($companyType === 'carrier') {
            $this->carrierSyncLoadStatusUpdate($load, $newStatus);
          }
        }

        //update thirdPartyCarrier data
        if (request()->has('thirdPartyCarrier.driverAssetAssignments')) {
          $assignments = request('thirdPartyCarrier.driverAssetAssignments');
          $existingAssignments = $load->carrierDriverAssetAssignments
            ->pluck('id')->toArray();
          $newAssignments = collect(request('thirdPartyCarrier.driverAssetAssignments'))
            ->pluck('id')->toArray();
          $needsToDelete = array_diff($existingAssignments, $newAssignments);
          if ($needsToDelete) {
            $load->carrierDriverAssetAssignments()
              ->whereIn('id', $needsToDelete)->delete();
          };
          foreach ($assignments as $assignment) {
            $assignmentData = [
              'truck_number' => $assignment['truckNumber'],
              'trailer_number' => $assignment['trailerNumber'],
              'driver_name' => $assignment['driverName'],
              'driver_phone_number' => $assignment['driverPhoneNumber']
            ];
            if (!empty($assignment['id'])) {
              $loadAssignment = $load->carrierDriverAssetAssignments
                ->where('id', $assignment['id'])->first() ?? null;
              if (!empty($loadAssignment)) {
                $loadAssignment->fill($assignmentData)->save();
              }
            } else {
              /* add new assignments */
              $assignmentsToCreate[] = $assignmentData;
            }
          }
          if (!empty($assignmentsToCreate)) {
            $load->carrierDriverAssetAssignments()->createMany($assignmentsToCreate);
          }
        }
        if (request()->has('thirdPartyCarrier.charges')) {
          $carrierCharge = $this->getValidateThirdPartyCarrierCharges();
          $load->thirdPartyCarrierCharge()->updateOrCreate(
            ['load_id' => $load->id],
            $carrierCharge
          );
        }

        //add or edit load notes
        if (request()->has('notes') && !empty(request('notes'))) {
          $this->createOrUpdateLoadNotes($load, request('notes'));
        }
      });

      // Moved out of transaction to prevent deadlock when generating Melio payment in invoice.
      if (request()->has('status') && !empty(request('status'))) {
        if (request('status') == config('constant.status.load.invoice_created')) {
          (new LoadInvoiceService())->generateInvoice(request());
        }
        if (request('status') == config('constant.status.load.invoice_paid')) {
          $this->melioPaymentStatusUpdate($load->id, $companyId, config('constant.melioPayment.status.markAsPaid'));
        }
      }

      // This has to be either out of transaction, or in transaction but before
      // load update. Otherwise we will get deadlock cause Node.js needs the write
      // lock of load.id for FK.
      if ($load->loadboard_integration == 2) {
        $this->send214OnNeed($load, $shippers, $receivers);
      }
      // TODO: merge all shipper and receiver events into one API request for Node.js.
      foreach ($shipperEvents as $event) {
        $this->send214Update(
          $load,
          $event['stopId'],
          $event['stopSequenceNumber'],
          $event['state'],
          $event['latitude'],
          $event['longitude'],
          $event['dateTime'],
          $event['walmartStatus'],
          $event['transplaceStatus']
        );
      }
      foreach ($receiverEvents as $event) {
        $this->send214Update(
          $load,
          $event['stopId'],
          $event['stopSequenceNumber'],
          $event['state'],
          $event['latitude'],
          $event['longitude'],
          $event['dateTime'],
          $event['walmartStatus'],
          $event['transplaceStatus']
        );
      }

      $this->checkRequestToSendBol($load);

      if (
        request()->input('thirdPartyCarrier.sendRateConToCarrier')
        || request()->input('thirdPartyCarrier.sendRateConAndBolToCarrier', false)
      ) {
        $this->sendRateConfirmationToCarrier($load);
      }
    });
  }

  /**
   * Process EDI 214 load data.
   * @param object $load
   * @param array $shippers
   * @param array $receivers
   * @return void
   */
  private function send214OnNeed($load, $shippers, $receivers) {
    try {
      if ($load->loadboard_integration != 2) {
        return;
      }
      $dbShippers = $load->loadShippers;
      $dbReceivers = $load->loadReceivers;

      $events = [];
      foreach ($dbShippers as $dbShipper) {
        foreach ($shippers as $shipper) {
          if (
            $dbShipper->id == $shipper['id'] && $dbShipper->loadboard_stop_sequence_number &&
            $dbShipper->shipping_time == null && $shipper['shipping_time'] != null
          ) {
            $time = $shipper['shipping_time'];
            if (strlen($time) == 5) {
              $time .= ':00';
            }
            $event = [
              'type' => 'schedulePickup',
              'stopId' => $dbShipper->id,
              'date' => $shipper['shipping_date'],
              'time' => $time,
            ];
            $events[] = $event;
          }
        }
      }

      foreach ($dbReceivers as $dbReceiver) {
        foreach ($receivers as $receiver) {
          if (
            $dbReceiver->id == $receiver['id'] && $dbReceiver->loadboard_stop_sequence_number &&
            $dbReceiver->delivery_time == null && $receiver['delivery_time'] != null
          ) {
            $time = $receiver['delivery_time'];
            if (strlen($time) == 5) {
              $time .= ':00';
            }
            $event = [
              'type' => 'scheduleDelivery',
              'stopId' => $dbReceiver->id,
              'date' => $receiver['delivery_date'],
              'time' => $time,
            ];
            $events[] = $event;
          }
        }
      }
      if (count($events) == 0) {
        return;
      }

      $client = new Client();
      $nodeUrl = config('app.env') === 'production'
        ? config('constant.externalSystems.nodeProject.prodUrl')
        : config('constant.externalSystems.nodeProject.devUrl');
      $loadEdiApi = $nodeUrl . 'loads/' . $load->id . '/edi/214';
      $response = $client->request('POST', $loadEdiApi, [
        'headers' => [
          'Content-Type' => 'application/json',
          'Authorization' => 'Bearer ' . request()->bearerToken(),
        ],
        'json' => ['events' => $events]
      ]);

      $response = json_decode($response->getBody()->getContents(), true);
      if (!$response['result']) { // In case of Node.js error, will not actually come here at all.
        throw new Exception('PHP send214OnNeed() got false response result. ' . $response['message']);
      }
    } catch (Exception $exception) {
      Log::error($exception);
      Log::channel('slack')->emergency(
        'send214OnNeed(' . $load->id . ') failed. ' . $exception->getMessage()
      );
    }
  }

  /**
   * This function send the status update for EDI
   * @param string $relation
   * @param object $requestStops After convert to DB columns.
   * @param object $load db model
   */
  private function prepareStatusUpdateForEdi($relation, $requestStops, $load) {
    // For PDC's Anheuser Busch loads, we need to add customer id and reference check?
    // We also need to manually calculate stop sequence number...
    if (!$load->loadboard_integration) {
      return [];
    }
    $dbData = $load->$relation;
    $stopType = $relation === 'loadShippers' ? 'shipper' : 'receiver';
    $dbStops = $dbData->whereIn('id', $requestStops->pluck('id'));
    if ($dbStops->isEmpty()) {
      return [];
    }
    $events = [];
    foreach ($dbStops as $dbStop) {
      $requestStop = $requestStops->where('id', $dbStop->id)->first();
      $isLoaded = false;
      $isUnloaded = false;
      $isArrived = !empty($requestStop['arrived_local_datetime']) &&
        $requestStop['arrived_local_datetime'] != $dbStop->arrived_local_datetime;
      if ($stopType == 'shipper') {
        $isLoaded = !empty($requestStop['loaded_local_datetime']) &&
          $requestStop['loaded_local_datetime'] != $dbStop->loaded_local_datetime;
      } else {
        $isUnloaded = !empty($requestStop['unloaded_local_datetime']) &&
          $requestStop['unloaded_local_datetime'] != $dbStop->unloaded_local_datetime;
      }

      if ($dbStop->loadboard_stop_sequence_number && ($isArrived || $isLoaded || $isUnloaded)) {
        $walmartStatus = null;
        $dateTime = null;
        $transplaceStatus = null;

        if ($stopType == 'shipper' && $isArrived) {
          $walmartStatus = 'arrivedAtPickup';
          $dateTime = $requestStop['arrived_local_datetime'];
          $transplaceStatus = config('constant.status.load_driver.from_arrived');
          $events[] = [
            'stopId' => $dbStop->id,
            'stopSequenceNumber' =>  $dbStop->loadboard_stop_sequence_number,
            'state' => $requestStop['state'],
            'latitude' => $requestStop['latitude'],
            'longitude' => $requestStop['longitude'],
            'walmartStatus' => $walmartStatus,
            'dateTime' => $dateTime,
            'transplaceStatus' => $transplaceStatus,
          ];
        } else if ($stopType == 'receiver' && $isArrived) {
          $walmartStatus = 'arrivedAtDelivery';
          $dateTime = $requestStop['arrived_local_datetime'];
          $transplaceStatus = config('constant.status.load_driver.to_arrived');
          $events[] = [
            'stopId' => $dbStop->id,
            'stopSequenceNumber' =>  $dbStop->loadboard_stop_sequence_number,
            'state' => $requestStop['state'],
            'latitude' => $requestStop['latitude'],
            'longitude' => $requestStop['longitude'],
            'walmartStatus' => $walmartStatus,
            'dateTime' => $dateTime,
            'transplaceStatus' => $transplaceStatus,
          ];
        }
        if ($isLoaded) {
          $walmartStatus = 'departedPickup';
          $dateTime = $requestStop['loaded_local_datetime'];
          $transplaceStatus = config('constant.status.load_driver.from_loaded');
          $events[] = [
            'stopId' => $dbStop->id,
            'stopSequenceNumber' =>  $dbStop->loadboard_stop_sequence_number,
            'state' => $requestStop['state'],
            'latitude' => $requestStop['latitude'],
            'longitude' => $requestStop['longitude'],
            'walmartStatus' => $walmartStatus,
            'dateTime' => $dateTime,
            'transplaceStatus' => $transplaceStatus,
          ];
        } else if ($isUnloaded) {
          $walmartStatus = 'completedUnload';
          $dateTime = $requestStop['unloaded_local_datetime'];
          $transplaceStatus = config('constant.status.load_driver.to_unloaded');
          $events[] = [
            'stopId' => $dbStop->id,
            'stopSequenceNumber' =>  $dbStop->loadboard_stop_sequence_number,
            'state' => $requestStop['state'],
            'latitude' => $requestStop['latitude'],
            'longitude' => $requestStop['longitude'],
            'walmartStatus' => $walmartStatus,
            'dateTime' => $dateTime,
            'transplaceStatus' => $transplaceStatus,
          ];
        }
      }
    }
    return $events;
  }

  private function send214Update($load, $stopId, $stopSequenceNumber, $state, $latitude, $longitude, $dateTime, $walmartStatus, $transplaceStatus) {
    if ($load->loadboard_integration === array_search('transplace_stedi', config('constant.load.loadboardIntegration'))) {
      (new DriverLoadService())->handleDriverUpdateStatusToTransplace(
        $load->refrence_id,
        $load->loadboard_integration,
        $load->loadboard_integration_data,
        $transplaceStatus,
        $dateTime,
        $state,
        $latitude,
        $longitude,
        $stopSequenceNumber
      );
    } else if ($load->loadboard_integration === array_search('walmart_orderful', config('constant.load.loadboardIntegration'))) {
      (new DriverLoadService())->handleDriverUpdateStatusToWalmart(
        $load,
        null,
        $stopId,
        $walmartStatus,
        $dateTime
      );
    }
  }

  private function checkRequestToSendBol($load) {
    if (request()->has('drivers') && !empty(request('drivers'))) {
      $drivers = array_filter(request('drivers'), function ($item) {
        return isset($item['sendBolToDriver']) && $item['sendBolToDriver'] === true;
      });
      if (count($drivers) > 0) {
        $driverIdsToSendBol = array_map(function ($item) {
          return $item['driver_ids'] ?? null;
        }, $drivers);
        $this->sendMailToDrivers($load, $driverIdsToSendBol);
      }
    }
  }

  /**
   * Send Load Details To Drivers
   * @param $load
   * @param $driverIdsToSendBol The driver_ids column in load_drivers, it's comma seperated ids.
   * @return void
   */
  private function sendMailToDrivers($load, $driverIdsToSendBol) {
    $load->refresh();
    $load->load([
      'customer:id,company_name',
      // TODO: where are the select columns for 4 stops tables?
      'loadLegs',
      'loadShippers',
      'loadReceivers',
      'loadTerminals',
      'loadDrivers:id,load_id,truck_id,trailer_id,driver_ids,from_leg,to_leg,loaded_distance,empty_distance',
      'loadDrivers.truck:id,number',
      'loadDrivers.trailer:id,number',
      'loadDrivers.loadDriverUsers:load_driver_id,user_id',
      'loadDrivers.loadDriverUsers.user:id,first_name,last_name,email',
    ]);

    $companyDetails = $load->adminCompanyDetail;
    $driverMapping = [];

    foreach ($load->loadDrivers as $loadDriver) {
      if (!in_array($loadDriver->driver_ids, $driverIdsToSendBol)) {
        continue;
      }
      $loadDetail = [
        'driverEmail' => [],
        'truckNumber' => $loadDriver->truck->number ?? null,
        'trailerNumber' => $loadDriver->trailer->number ?? null,
        'loadedMiles' => $loadDriver->loaded_distance ?? null,
        'emptyMiles' => $loadDriver->empty_distance ?? null,
        'loadNumber' => $load->load_unique_id,
        'replyToEmail' => $companyDetails->email,
        'customerName' => $load->customer->company_name ?? null,
        'fromName' => $companyDetails->business_name,
        'loadReference' => $load->refrence_id ?? null,
        'stops' => $this->getLoadStopsByDriver($load, $loadDriver),
      ];
      foreach ($loadDriver->loadDriverUsers as $driverDetail) {
        $loadDetail['driverEmail'][] = $driverDetail->user->email;
      }
      $driverMapping[] = $loadDetail;
    }

    try {
      foreach ($driverMapping as $detail) {
        Mail::queue(new EmailToDriversForLoadUpdate($detail));
      }
    } catch (Exception $exception) {
      Log::error($exception);
    }
  }

  /**
   * @param $load
   * @param $loadDriver
   * @return array
   */
  private function getLoadStopsByDriver($load, $loadDriver) {
    $hasFirstStopToLeg = false;
    $hasLegToLastStop = false;
    if ($load->loadLegs->isNotEmpty()) {
      if ($loadDriver->to_leg) { // 1st stop to leg
        $hasFirstStopToLeg = true;
      } else if ($loadDriver->from_leg) { // leg to last stop
        $hasLegToLastStop = true;
      }
    }
    return $this->getLoadStopsHelper($load, $hasFirstStopToLeg, $hasLegToLastStop);
  }

  /**
   * Get all stops (shipper/receiver/terminal/leg).
   * @param $load
   * @param $hasFirstStopToLeg
   * @param $hasLegToLastStop
   * @return array
   * @throws Exception
   */
  private function getLoadStopsHelper(
    $load,
    $hasFirstStopToLeg = false,
    $hasLegToLastStop = false
  ) {
    $stops = [];
    $stops = $this->setShippersStopData($load->loadShippers, $stops);
    if ($load->loadLegs->isNotEmpty()) {
      $stops = $this->setLegStopData(
        $load->loadLegs,
        $stops
      );
    }
    $stops = $this->setReceiversStopData($load->loadReceivers, $stops);
    if ($load->loadTerminals->isNotEmpty()) {
      $stops = $this->setTerminalStopData($load->loadTerminals, $stops);
    }
    $stops = $this->sortStopsByOrder($stops);

    if ($hasFirstStopToLeg == $hasLegToLastStop) {
      return $stops;
    }

    $filteredStops = [];
    if ($hasFirstStopToLeg && !$hasLegToLastStop) {
      foreach ($stops as $stop) {
        $filteredStops[] = $stop;
        if ($stop['type'] == config('constant.trip.stop.type.leg')) {
          break;
        }
      }
    } else {
      $toStops = false;
      foreach ($stops as $stop) {
        if ($stop['type'] == config('constant.trip.stop.type.leg')) {
          $toStops = true;
        }
        if ($toStops == true) {
          $filteredStops[] = $stop;
        }
      }
    }

    return $filteredStops;
  }

  private function sortStopsByOrder(&$stops) {
    if (!empty($stops) && !empty($stops[0]['order'])) {
      usort($stops, function ($a, $b) {
        return ($a['order'] ?? 0) - ($b['order'] ?? 0);
      });
    }
    return $stops;
  }

  /**
   * Set shipper stops data.
   * @param $loadShippers
   * @param $stops
   * @return array
   * @throws Exception
   */
  private function setShippersStopData($loadShippers, &$stops): array {
    foreach ($loadShippers as $loadShipper) {
      $stops[] = $this->setLoadStopData(config('constant.trip.stop.type.shipper'), $loadShipper);
    }
    return $stops;
  }

  /**
   * Set receiver stops data.
   * @param $loadReceivers
   * @param $stops
   * @return array
   * @throws Exception
   */
  private function setReceiversStopData($loadReceivers, &$stops): array {
    foreach ($loadReceivers as $loadReceiver) {
      $stops[] = $this->setLoadStopData(config('constant.trip.stop.type.receiver'), $loadReceiver);
    }
    return $stops;
  }

  /**
   * Set legs stops data.
   * @param $loadLegs
   * @param $stops
   * @param $hasFirstStopToLeg
   * @param $hasLegToLastStop
   * @return array
   * @throws Exception
   */
  private function setLegStopData(
    $loadLegs,
    &$stops
  ): array {
    foreach ($loadLegs as $loadLeg) {
      $stops[] = $this->setLoadStopData(
        config('constant.trip.stop.type.leg'),
        $loadLeg,
      );
    }
    return $stops;
  }

  /**
   * Set terminal stops data.
   * @param $loadTerminals
   * @param $stops
   * @return array
   * @throws Exception
   */
  private function setTerminalStopData($loadTerminals, &$stops): array {
    foreach ($loadTerminals as $loadTerminal) {
      $stops[] = $this->setLoadStopData(
        config('constant.trip.stop.type.terminal'),
        $loadTerminal
      );
    }
    return $stops;
  }

  /**
   * Set trip stops data.
   * @param $type
   * @param $data
   * @return array
   * @throws Exception
   */
  private function setLoadStopData(
    $type,
    $data
  ): array {
    switch ($type) {
      case config('constant.trip.stop.type.shipper'):
        $name = $data->shipper_name ?? null;
        $startDate = $data->shipping_date ?? null;
        $startTime = $data->shipping_time ? $data->shipping_time->format('H:i') : null;
        $endDate = $data->shipping_end_date ?? null;
        $endTime = $data->shipping_end_time ? $data->shipping_end_time->format('H:i') : null;
        $note = $data->shipper_note ?? null;
        $freightDetails = $this->getFreightDetails($data) ?? [];
        $extraDetails = [
          ['key' => 'Temperature', 'value' => $data->temperature],
          ['key' => 'Pick Up #', 'value' => $data->shipper_reference],
          ['key' => 'Container #', 'value' => $data->container],
          ['key' => 'Freight Details', 'value' => $freightDetails]
        ];
        break;
      case config('constant.trip.stop.type.receiver'):
        $name = $data->receiver_name ?? null;
        $startDate = $data->delivery_date ?? null;
        $startTime = $data->delivery_time ? $data->delivery_time->format('H:i') : null;
        $endDate = $data->delivery_end_date ?? null;
        $endTime = $data->delivery_end_time ? $data->delivery_end_time->format('H:i') : null;
        $note = $data->receiver_note ?? null;
        $extraDetails = [
          ['key' => 'Delivery No. #', 'value' => $data->receiver_reference]
        ];
        break;
      case config('constant.trip.stop.type.leg'):
        $name = $data->location_name ?? null;
        $startDate = $data->date ?? null;
        $startTime = $data->time ? $data->time->format('H:i') : null;
        $endDate = $data->end_date ?? null;
        $endTime = $data->end_time ? $data->end_time->format('H:i') : null;
        $note = $data->note ?? null;
        $extraDetails = [];
        break;
      case config('constant.trip.stop.type.terminal'):
        $name = $data->name ?? null;
        $startDate = $data->date ?? null;
        $startTime = $data->time ? $data->time->format('H:i') : null;
        $endDate = $data->end_date ?? null;
        $endTime = $data->end_time ? $data->end_time->format('H:i') : null;
        $note = $data->notes ?? null;
        $extraDetails = [];
        break;
      default:
        throw new Exception("Wrong stop type.");
    }

    $stop = [
      'type' => $type,
      'stopId' => $data->id,
      'name' => $name,
      'startDate' => $startDate,
      'startTime' => $startTime,
      'endDate' => $endDate,
      'endTime' => $endTime,
      'address' => $data->address ?? null,
      'city' => $data->city ?? null,
      'state' => $data->state ?? null,
      'zipCode' => $data->zip_code ?? null,
      'contactPerson' => $data->contact_person,
      'contactNumber' => $data->contact_number,
      'order' => $data->order ?? null,
      'note' => $note,
      'extraDetails' => $extraDetails,
    ];
    return $stop;
  }

  /**
   * get freight details
   * @param $data
   * @return array
   */
  private function getFreightDetails($data): array {
    $freightDetails = [];
    $freightDetails[] = [
      'equipmentType' => $data->freight_equipment_type,
      'description' => $data->freight_description,
      'weight' => $data->freight_weight,
      'weightUnit' => config('constant.weight_unit')[$data->weight_unit] ??
        null,
      'qty' => $data->freight_qty,
      'qtyRate' => $data->qty_rate ?? null,
      'qtyUnit' => config('constant.quantity_unit')[$data->qty_unit] ??
        null,
      'length' => $data->freight_length,
      'width' => $data->freight_width,
      'height' => $data->freight_height,
    ];

    $additionalFreightDetails = !empty($data['additional_freight_details']) ?
      $this->convertAdditionalFreightDetailsToView(json_decode($data['additional_freight_details'])) :
      null;

    if (!empty($additionalFreightDetails)) {
      $freightDetails[] = array_merge(...$additionalFreightDetails);
    }
    return $freightDetails;
  }

  /**
   * convert additional freight details to view
   * @param $additionalFreightDetails
   * @return array
   */
  private function convertAdditionalFreightDetailsToView($additionalFreightDetails): array {
    $a = [];
    if (!is_null($additionalFreightDetails->a)) {
      foreach ($additionalFreightDetails->a as $detail) {
        $a[] = [
          'equipmentType' => $detail->u ?? null,
          'description' => $detail->d ?? null,
          'weight' => $detail->e ?? null,
          'weightUnit' => config('constant.weight_unit')[$detail->i] ?? null,
          'qty' => $detail->q ?? null,
          'qtyUnit' => config('constant.quantity_unit')[$detail->t] ?? null,
          'length' => $detail->l ?? null,
          'width' => $detail->w ?? null,
          'height' => $detail->h ?? null,
        ];
      }
    }
    return $a;
  }

  /**
   * Update Carrier Sync Load Status
   * @param $carrierLoad
   * @param $status
   * @return void
   */
  private function carrierSyncLoadStatusUpdate($carrierLoad, $newStatus) {
    $getStatuses = [
      config('constant.status.load.open'),
      config('constant.status.load.assign'),
      config('constant.status.load.in_transit'),
      config('constant.status.load.delivered')
    ];
    $syncedLoadId = $carrierLoad->synced_load_id;

    if (!is_null($syncedLoadId) && in_array($newStatus, $getStatuses)) {
      $shipperBrokerLoad = Load::select('id', 'status')
        ->where('id', $syncedLoadId)->first();

      // If shipper/broker deleted this load due to some reason.
      if (empty($shipperBrokerLoad)) {
        return;
      }

      if (in_array($shipperBrokerLoad->status, $getStatuses)) {
        $loadDataToBeUpdated = [];
        $loadDataToBeUpdated['status'] = $newStatus;

        if ($newStatus == config('constant.status.load.delivered')) {
          $loadDataToBeUpdated['delivered_at'] = Carbon::now('UTC');
        }

        $shipperBrokerLoad->update($loadDataToBeUpdated);
      }

      if (
        $newStatus == config('constant.status.load.delivered')
        && is_null($carrierLoad->review_link_sent_at)
      ) {
        $loadReviewService = new LoadReviewService();
        $loadReviewService->sendMailToShipperBrokerForReview($carrierLoad);
      }
    }
  }

  /*
  This is to handle the case where a load was created with order != null, but
  then this load is modified by a user with old version website so a new stop
  has order == null.
  */
  private function validateAllStopsOrderEitherNullOrNotNull($loadId) {
    $load = Load::select('id')
      ->with([
        'loadShippers:id,load_id,order',
        'loadReceivers:id,load_id,order',
        'loadLegs:id,load_id,order',
      ])
      ->where('id', $loadId)->first();

    $notNullOrderStopsCount = $load->loadShippers->whereNotNull('order')->count()
      + $load->loadReceivers->whereNotNull('order')->count()
      + $load->loadLegs->whereNotNull('order')->count();
    $nullOrderStopsCount = $load->loadShippers->whereNull('order')->count()
      + $load->loadReceivers->whereNull('order')->count()
      + $load->loadLegs->whereNull('order')->count();

    if ($notNullOrderStopsCount > 0 && $nullOrderStopsCount > 0) {
      throw new Exception(config('response.load.invalid_order'));
    }
  }

  /**
   * Check stop order, create if not stop order not present.
   * @param array $reqShippers
   * @param array $reqReceivers
   * @param array $reqLoadLegs
   * @return array
   * @throws Exception
   */
  // I guess we cannot turn this on before everyone uses the new FE.
  // Otherwise if we assign order to a load, then users add a new stop, we got errors from verifyLoadOrderOfStops().
  // This function is not fully reviewed by ZBU. Cannot turn it on before I review it again.
  /*
  public function validateAndModifyStopsByOrder(
    array $reqShippers,
    array $reqReceivers,
    array $reqLoadLegs = []
  ): array {
    $stops = array_merge($reqShippers, $reqLoadLegs, $reqReceivers) ?? [];
    $orders = !empty($stops) ? array_filter(array_column($stops, 'order')) : [];
    if (count($reqLoadLegs) > 0) {
      $legOrders = array_filter(array_column($reqLoadLegs, 'order')) ?? [];
      if (count($legOrders) > 0 && (min($legOrders) == min($orders) || max($legOrders) == max($orders))) {
        throw new Exception(config('response.load.invalid_leg_order'));
      }
    }
    if (!empty($orders) && count($orders) == max(array_unique($orders)) && count($stops) == count(array_unique($orders))) {
      return [$reqShippers, $reqReceivers, $reqLoadLegs];
    }
    // Assign order to stops if order is not exists or null.
    $shippers = $legs = $receivers = [];
    foreach ($stops as $i => $stop) {
      $stop['order'] = $i + 1;
      if (!empty($stop['shipper_name'])) {
        $shippers[] = $stop;
      } else if (!empty($stop['receiver_name'])) {
        $receivers[] = $stop;
      } else if (!empty($stop['location_name'])) {
        $legs[] = $stop;
      }
    }
    return [$shippers, $receivers, $legs];
  }*/

  /**
   * Check order values are unique or not
   * @param array $shippers
   * @param array $receivers
   * @param array $loadLegs
   * @param array $multiPurposeStops
   * @return void
   * @throws Exception
   */
  public function verifyLoadOrderOfStops(
    array $shippers,
    array $receivers,
    array $loadLegs,
    array $multiPurposeStops
  ): void {
    $legOrders = array_filter(array_column($loadLegs, 'order')) ?? [];
    $multiPurposeStops = array_filter(array_column($multiPurposeStops, 'order')) ?? [];
    $orders = array_filter(array_merge(
      array_column($shippers, 'order'),
      array_column($receivers, 'order'),
      $legOrders,
      $multiPurposeStops
    ));
    $stops = array_filter(array_merge($shippers, $loadLegs, $receivers, $multiPurposeStops));
    if (empty($orders)) {
      return;
    } else if (
      count($orders) != count(array_unique($orders)) // duplicate order values
      || count($orders) != count($stops) // some stop has order value, some not.
      || count($orders) != max($orders) // max order value is wrong
      || min($orders) != 1 // min order value is wrong
    ) {
      throw new Exception(config('response.load.invalid_order'));
    } else if (
      count($legOrders) > 0 // has leg
      && (min($legOrders) == min($orders) || max($legOrders) == max($orders))
    ) {
      throw new Exception(config('response.load.invalid_leg_order'));
    }
  }

  private function getDispatcherName($load) {
    $dispatcherName = "";
    if (!request('dispatcher_id')) {
      return $dispatcherName;
    }

    $dispatcher = DispacherDetail::select('first_name', 'last_name')->where('user_id', request('dispatcher_id'))->first();
    if ($dispatcher) {
      $dispatcherName = $dispatcher->first_name ?? "";
      if ($dispatcher->last_name) {
        $dispatcherName = $dispatcherName . " " . $dispatcher->last_name;
      }
    }

    return $dispatcherName;
  }

  /**
   * Get specific load using load id.
   * @return mixed
   * @throws Exception
   */
  public function getLoadForUpdate() {
    $companyId = getAuthAdminCompanyId();
    return Load::where('admin_company_detail_id', $companyId)
      ->with([
        'loadShippers',
        'loadReceivers',
      ])
      ->withTrashed()
      ->findOrFail(request('load'));
  }

  /**
   * Get specific load using load id.
   * @return mixed
   * @throws Exception
   */
  public function getLoad() {
    $companyId = getAuthAdminCompanyId();
    return Load::where('admin_company_detail_id', $companyId)
      ->with([
        'loadLogs:id,load_id,type,truck_id,trailer_id,modified_by_user_id,created_at',
        'loadLogs.modifiedByUser:id,first_name,last_name,role',
        'loadLogs.truck:id,number',
        'loadLogs.trailer:id,number',
      ])
      ->withTrashed()
      ->findOrFail(request('load'));
  }

  public function getLoadEagerLoading() {
    $id = request('load');
    $companyId = Auth::user()->admin_company_detail_id;
    return Load::where('admin_company_detail_id', $companyId)
      ->with([
        'adminCompanyDetail',
        'rateConfirmations',
        'loadCharge',
        'dispatcher',
        'adminLoadImages',
        'loadShippers',
        'loadReceivers',
        'customer',
        'loadDrivers.truck',
        'loadDrivers.trailer'
      ])
      // Further modifications are needed here, for example the exact columns instead of full columns and drivers.
      ->findOrFail($id);
  }

  public function delete() {
    $loadId = request('load');

    /*
    $loadStatus = collect(config('constant.status.load'))
      ->only([
        'open',
        'assign',
        'in_transit',
      ])
      ->values()
      ->toArray();
    */
    $currentCompanyId = getAuthAdminCompanyId();
    $load = Load::where('admin_company_detail_id', $currentCompanyId)
      ->findOrFail($loadId);

    return tap($load, function ($load) use ($currentCompanyId) {
      DB::transaction(function () use (&$load, $currentCompanyId) {
        $currentTime = Carbon::now();

        $this->notifyThirdPartyCarrier($load, $currentCompanyId);

        $load->update(['deleted_at' => $currentTime]);

        $this->melioPaymentStatusUpdate($load->id, $currentCompanyId, config('constant.melioPayment.status.cancel'));
        // TODO: Delete all this company's users from all chats this load is
        // associated to.
        /* keep for record, do not turn on.
        foreach ($load->chatLoads as $chatLoad) {
          $chatLoad->chat->update(['deleted_at' => $currentTime]);
        }
        */
        $chatIds = $load->chatLoads->pluck('chat_id')->toArray();
        $chatUserIds = $this->getLoadChatUsers($chatIds);
        if (!empty($chatIds) && !empty($chatUserIds)) {
          ChatUser::whereIn('chat_id', $chatIds)
            ->whereIn('user_id', $chatUserIds)
            ->update(['deleted_at' => $currentTime]);
        }
        /*$load->loadCharge()->update(['deleted_at' => $load->deleted_at]); //->delete();

        $rows = $load->loadDrivers()->select('id')->get()->pluck('id');
        LoadDriverUser::whereIn('load_driver_id', $rows)->update(['deleted_at' => $load->deleted_at]);

        LoadDriver::query()
          ->where('load_id', '=', $load->id)
          ->update(['deleted_at' => $load->deleted_at]); //->delete();

        loadImage::query()
          ->where('load_id', '=', $load->id)
          ->update(['deleted_at' => $load->deleted_at]); //->delete();

        LoadRateConfirmation::query()
          ->where('load_id', '=', $load->id)
          ->update(['deleted_at' => $load->deleted_at]); //->delete();

        LoadReceiver::query()
          ->where('load_id', '=', $load->id)
          ->update(['deleted_at' => $load->deleted_at]); //->delete();

        LoadShipper::query()
          ->where('load_id', '=', $load->id)
          ->update(['deleted_at' => $load->deleted_at]); //->delete();

        LoadLeg::query()
          ->where('load_id', '=', $load->id)
          ->update(['deleted_at' => $load->deleted_at]); //->delete();

        LoadTrip::query()
          ->where('load_id', '=', $load->id)
          ->update(['deleted_at' => $load->deleted_at]); //->delete();
        */
        // $load->delete();
      });
    });
  }

  /**
   * Batch Delete Load & Chat
   * @throws Exception
   */
  public function batchDelete() {
    $currentCompanyId = getAuthAdminCompanyId();
    $loads = Load::with([
      'chatLoads:load_id,chat_id'
    ])
      ->whereIn('id', request('loadIds'))
      ->where('admin_company_detail_id',  $currentCompanyId)
      ->select('id', 'third_party_carrier_as_customer_id', 'synced_load_id')->get();

    return DB::transaction(function () use ($loads, $currentCompanyId) {
      $currentTime = Carbon::now();

      $loads->map(function ($load) use ($currentCompanyId) {
        return $this->notifyThirdPartyCarrier($load, $currentCompanyId);
      });

      $loads->toQuery()->update(['deleted_at' => $currentTime]);

      $this->melioPaymentStatusUpdate(request('loadIds'), $currentCompanyId, config('constant.melioPayment.status.cancel'));
      $chatIds = $loads->map(function ($load) {
        return $load->chatLoads->pluck('chat_id');
      })->flatten()->toArray();
      $chatUserIds = $this->getLoadChatUsers($chatIds);

      if (!empty($chatIds) && !empty($chatUserIds)) {
        ChatUser::whereIn('chat_id', $chatIds)
          ->whereIn('user_id', $chatUserIds)
          ->update(['deleted_at' => $currentTime]);
      }
    });
  }

  /**
   * Restore deleted load using load id.
   * @return HigherOrderTapProxy|mixed
   * @throws Exception
   */
  public function restore() {
    $load = Load::select('id', 'deleted_at')
      ->where('admin_company_detail_id', getAuthAdminCompanyId())
      ->onlyTrashed()
      ->find(request('load'));
    if (empty($load)) {
      throw new Exception("Unprocessable Entity: Invalid Load id.");
    }
    return DB::transaction(function () use (&$load) {
      $deletedAt = $load->deleted_at;

      // TODO: Restore all this company's users from all chats this load is
      // associated to, by checking deleted_at.
      /* keep for record, do not turn on.
      foreach ($load->chatLoads as $chatLoad) {
        $chat = Chat::where('id', $chatLoad->chat_id)
          ->where('deleted_at', $deletedAt)
          ->onlyTrashed()->first();
        if ($chat) {
          $chat->restore();
        }
      }
      */

      $chatIds = $load->chatLoads->pluck('chat_id')->toArray();
      $chatUserIds = $this->getLoadChatUsers($chatIds, true);
      if (!empty($chatIds) && !empty($chatUserIds)) {
        ChatUser::whereIn('chat_id', $chatIds)
          ->whereIn('user_id', $chatUserIds)
          ->where('deleted_at', $deletedAt)
          ->restore();
      }
      return $load->restore();
    });
  }

  /**
   * Get Load Chat Users Id
   * @param $chatIds
   * @param $onlyTrashed
   * @return array|null
   */
  public function getLoadChatUsers($chatIds, $onlyTrashed = false) {
    if (empty($chatIds)) {
      return null;
    }
    $chatUserQuery = ChatUser::whereIn('chat_id', $chatIds)
      ->whereHas('user', function (Builder $query) {
        $query->where('admin_company_detail_id', getAuthAdminCompanyId());
      });
    if ($onlyTrashed) {
      $chatUserQuery->onlyTrashed();
    }
    return array_filter(array_unique($chatUserQuery->pluck('user_id')->toArray()));
  }

  public function loadUniqeId() {
    $adminCompanyDetailId = Auth::user()->admin_company_detail_id;
    $tagId = request('tag_id');

    $loadMaxUniqueId = Load::select('load_unique_id')
      //$load = Load::select('load_unique_id')
      ->where('admin_company_detail_id', $adminCompanyDetailId)
      ->withTrashed()
      ->when(!empty($tagId), function ($q) use ($tagId) {
        return $q->where('tag_id', $tagId);
      })
      ->when(empty($tagId), function ($q) {
        return $q->whereNull('tag_id');
      })
      //->latest()
      ->max('load_unique_id');
    //->first();

    $data = array();
    if ($loadMaxUniqueId) {
      // $loadMaxUniqueId
      $data['load_unique_id'] = $loadMaxUniqueId + 1; //$load->load_unique_id + 1;
      // $loadMaxUniqueId + 1;
    } else if (!empty($tagId)) {
      $tag = Tag::query()
        ->select('load_unique_id_started_from')
        ->find($tagId);

      $data['load_unique_id'] = $tag->load_unique_id_started_from ?? config('constant.load_defualt_id');
    } else {
      $adminCompanyDetail = AdminCompanyDetail::query()
        ->select('load_unique_id_started_from')
        ->find($adminCompanyDetailId);

      $data['load_unique_id'] = $adminCompanyDetail->load_unique_id_started_from ?? config('constant.load_defualt_id');
    }

    return $data;
  }

  public function getLoadUniqeIdForEmailParser($companyId, $tagId = null) {
    // $loadMaxUniqueId
    $loadMaxUniqueId = Load::select('load_unique_id')
      ->where('admin_company_detail_id', $companyId)
      ->withTrashed()
      //->whereNull('tag_id')
      ->when(!empty($tagId), function ($q) use ($tagId) {
        return $q->where('tag_id', $tagId);
      })
      ->when(empty($tagId), function ($q) {
        return $q->whereNull('tag_id');
      })
      //->latest()->first()
      ->max('load_unique_id');

    if ($loadMaxUniqueId) {
      return $loadMaxUniqueId + 1;
    } else if (!empty($tagId)) {
      $tag = Tag::query()
        ->select('load_unique_id_started_from')
        ->find($tagId);

      return $tag->load_unique_id_started_from ?? config('constant.load_defualt_id');
    } else {
      $adminCompanyDetail = AdminCompanyDetail::query()
        ->select('load_unique_id_started_from')
        ->find($companyId);

      return $adminCompanyDetail->load_unique_id_started_from ?? config('constant.load_defualt_id');
    }

    return config('constant.load_defualt_id');
  }

  private function getValidatedData() {
    $direction = null;
    if (!empty(request('direction'))) {
      $direction = request('direction') == config('constant.load.directions.inbound') ? 1 : 0;
    }
    $getValidatedData = [
      'customer_id' => request('customer_id'),
      'dispatcher_id' => request('dispatcher_id'),
      'load_unique_id' => request('load_unique_id'),
      'i_start_date' => min(array_column(request('shippers'), 'shipping_date')),
      'i_end_date' => max(array_column(request('receivers'), 'delivery_date')),
      'refrence_id' => request('refrence_id'),
      'sub_total' => request('sub_total'),
      'discount' => request('discount'),
      'total_amount' => request('total_amount'),
      'total_miles' => request('total_miles'),
      'calculate_using' => request('calculate_using'),
      'tag_id' => request('tag_id'),
      'dispatcher_notes' => request('dispatcher_notes'),
      'direction' => $direction,
      'equipment_type' => request('equipment_type'),
      'trailer_type' => request('trailer_type'),
      'bill_to_code' => request('billToCode'),
      'cost_code' => request('costCode') ?? null,
      'order_type' => request('orderType'),
      'service_type' => request('serviceType'),
      'company_internal_reference' => request('companyInternalReference') ?? null,
      'container_status' => !empty(request('containerStatus')) ?
        array_search(
          request('containerStatus'),
          config('constant.load.container.status')
        ) : null,

      'vessel' => request('vessel'),
      'arrival_date' => request('arrivalDate'),
      'last_free_date' => request('lastFreeDate'),
      'bol_number' => request('bolNumber'),
      'picked_up_equipment_number' => request('pickedUpEquipment.number') ?? null,
      'picked_up_equipment_type' => request('pickedUpEquipment.type') ?? null,
      'picked_up_equipment_size' => request('pickedUpEquipment.size') ?? null,
      'dropped_off_equipment_number' => request('droppedOffEquipment.number') ?? null,
      'dropped_off_equipment_type' => request('droppedOffEquipment.type') ?? null,
      'dropped_off_equipment_size' => request('droppedOffEquipment.size') ?? null,
      'third_party_carrier_rate_con_type' => !empty(request('thirdPartyCarrierRateConType')) ? array_search(
        request('thirdPartyCarrierRateConType'),
        config('constant.load.rateConType')
      ) : null,
      /*
          May be needed in the future.
          'dispatcher_paid' => request('dispatcher_paid'),
          'override_commission_fractional' => request('override_commission_fractional'),
          'shared_dispatcher_commission_fractional' => request('shared_dispatcher_commission_fractional'),
          'other_commission_amount' => request('other_commission_amount'),
           */
    ];

    if (request()->has('laneCode')) {
      $getValidatedData['lane_code'] = request('laneCode') ?? null;
    }

    if (request()->filled('parsedBy') && request()->method() == 'POST') {
      $getValidatedData['parsed_by'] =  array_search(
        request('parsedBy'),
        config('constant.load.parsedBy')
      );
    }

    if (request()->has('distanceCache')) {
      $distanceCache = request('distanceCache');
      if (!empty($distanceCache)) {
        $getValidatedData['distance_cache'] = json_encode(
          $this->compressDistanceCache($distanceCache)
        );
      } else {
        $getValidatedData['distance_cache'] = null;
      }
    }

    if (request()->filled('thirdPartyCarrier')) {
      $thirdPartyCarrier = request('thirdPartyCarrier');
      $getValidatedData['third_party_carrier_as_customer_id']
        = $thirdPartyCarrier['carrierAsCustomerId'] ?? null;
      $getValidatedData['third_party_carrier_instructions']
        = $thirdPartyCarrier['instructions'] ?? null;
      $getValidatedData['third_party_carrier_sub_total']
        = $thirdPartyCarrier['subTotal'] ?? null;
      $getValidatedData['third_party_carrier_discount']
        = $thirdPartyCarrier['discount'] ?? null;
      $getValidatedData['third_party_carrier_total_amount']
        = $thirdPartyCarrier['totalAmount'] ?? null;
      // TODO(zbu): turn off this code. /*
      $getValidatedData['third_party_carrier_rate_con_type']
        = !empty($thirdPartyCarrier['rateConType']) ? array_search(
          $thirdPartyCarrier['rateConType'],
          config('constant.load.rateConType')
        ) : null;
      //*/
      $getValidatedData['third_party_carrier_cc_emails']
        = !empty($thirdPartyCarrier['ccEmails']) ?
        implode(',', $thirdPartyCarrier['ccEmails']) : null;
      if (array_key_exists('invoiceStatus', $thirdPartyCarrier)) {
        $getValidatedData['third_party_carrier_invoice_status']
          = !empty($thirdPartyCarrier['invoiceStatus']) ? array_search(
            $thirdPartyCarrier['invoiceStatus'],
            config('constant.load.thirdPartyCarrier.status')
          )
          : null;
      }
    }

    if (request()->filled('quote') && request()->method() == 'POST') { // Add Quote for create load only
      $getValidatedData['quote_id'] = request('quote.id');
      $getValidatedData['quote_response_id'] = request('quote.responseId');
    }
    return $getValidatedData;
  }

  private function getValidatedDataLoadCarge() {
    $chargeRequestData = [
      'hauling_fees' => request('hauling_fees'),
      'fuel_surcharge' => request('fuel_surcharge'),
      'hauling_fees_rate' => request('hauling_fees_rate'),
      'fuel_surcharge_rate' => request('fuel_surcharge_rate'),
      'hauling_fees_type' => request('hauling_fees_type'),
      'hauling_fee_qty' => request('hauling_fees_type') == config('constant.hauling_fees_type.truck_hour') ?
        request('haulingFeeQty') : null,
      'fuel_surcharge_type' => request('fuel_surcharge_type'),
      'accessorial_fee' => request('accessorial_fee') ? json_encode(request('accessorial_fee')) : null,
      'accessorial_deduction' => request('accessorial_deduction') ? json_encode(request('accessorial_deduction')) : null,
    ];
    if (
      request('fuel_surcharge_type') == config('constant.fuel_surcharge_type.formulaPerMile')
    ) {
      $chargeRequestData['fuel_surcharge_formula'] = 1; // to represent the formula for GE/PDCM
      $chargeRequestData['fuel_surcharge_v1'] = request('fuelSurchargeV1') ?? null;
      $chargeRequestData['fuel_surcharge_v2'] = request('fuelSurchargeV2') ?? null;
      $chargeRequestData['fuel_surcharge_v3'] = request('fuelSurchargeV3') ?? null;
    } else {
      $chargeRequestData['fuel_surcharge_formula'] = null;
      $chargeRequestData['fuel_surcharge_v1'] = null;
      $chargeRequestData['fuel_surcharge_v2'] = null;
      $chargeRequestData['fuel_surcharge_v3'] = null;
    }
    return $chargeRequestData;
  }

  /**
   * Validate Third Party carrier Driver asset assignments.
   * @return array
   */
  private function getValidateThirdPartyCarrierDriverAssetAssignments(): array {
    $driverAssetAssignments = [];
    foreach (request('thirdPartyCarrier.driverAssetAssignments') as $detail) {
      $driverAssetAssignments[] = [
        'truck_number' => $detail['truckNumber'],
        'trailer_number' => $detail['trailerNumber'],
        'driver_name' => $detail['driverName'],
        'driver_phone_number' => $detail['driverPhoneNumber']
      ];
    }
    return $driverAssetAssignments;
  }

  /**
   * Validate Third-Party carrier charges.
   * @return array
   */
  private function getValidateThirdPartyCarrierCharges(): array {
    $charges = request('thirdPartyCarrier.charges');
    return [
      'hauling_fee' => $charges['hauling_fee'] ?? null,
      'fuel_surcharge' => $charges['fuel_surcharge'] ?? null,
      'hauling_fee_rate' => $charges['hauling_fee_rate'] ?? null,
      'fuel_surcharge_rate' => $charges['fuel_surcharge_rate'] ?? null,
      'hauling_fee_type' => !empty($charges['hauling_fee_type']) ?
        array_search(
          $charges['hauling_fee_type'],
          config('constant.haulingFeeType')
        ) : null,
      'hauling_fee_qty' => $charges['hauling_fee_type'] == config('constant.hauling_fees_type.truck_hour') ?
        $charges['haulingFeeQty'] : null,
      'fuel_surcharge_type' => !empty($charges['fuel_surcharge_type']) ?
        array_search(
          $charges['fuel_surcharge_type'],
          config('constant.fuelSurchargeType')
        ) : null,
      'accessorial_fee' => isset($charges['accessorial_fee']) ?
        json_encode($charges['accessorial_fee']) : null,
      'accessorial_deduction' => isset($charges['accessorial_deduction']) ?
        json_encode($charges['accessorial_deduction']) : null,
    ];
  }

  public function updateStatus() {
    if (request('status') == config('constant.status.load.invoice_created')) {
      (new LoadInvoiceService())->generateInvoice(request());
    }

    $checkTimestamps = false;
    $statusDelivered = config('constant.status.load.delivered');
    if (request('status') == $statusDelivered) {
      $customizationsBitmask = AdminCompanyDetail::select('customizations_bitmask')
        ->where('id', getAuthAdminCompanyId())
        ->first()->customizations_bitmask ?? null;
      if ($customizationsBitmask && ($customizationsBitmask & 1)) {
        $checkTimestamps = true;
      }
    }
    $load = Load::where('id', request('load'))
      ->when($checkTimestamps == true, function ($query) {
        $query->with([
          'loadShippers:id,load_id,order,arrived_local_datetime,loaded_local_datetime',
          'loadReceivers:id,load_id,order,arrived_local_datetime,unloaded_local_datetime'
        ]);
      })
      ->first();
    $loadDataToBeUpdated['status'] = request('status');

    if (request('status') == $statusDelivered) {
      if ($checkTimestamps) {
        $this->validateDeliveredStatusUpdate($load->loadShippers, $load->loadReceivers);
      }
      $loadDataToBeUpdated['delivered_at'] = Carbon::now('UTC');
    }

    $load->update($loadDataToBeUpdated);

    $companyType = getLoggedUserCompanyType();

    if ($companyType === 'carrier') {
      $this->carrierSyncLoadStatusUpdate($load, request('status'));
    }
  }

  /**
   * Validate load data at updating the load status to delivered.
   * @param $shippers
   * @param $receivers
   * @return void
   * @throws Exception
   */
  private function validateDeliveredStatusUpdate($shippers, $receivers) {
    foreach ($shippers as $shipper) {
      if (empty($shipper['arrived_local_datetime']) || empty($shipper['loaded_local_datetime'])) {
        throw new Exception(config('response.load.updateToDeliveredError'));
      }
    }
    foreach ($receivers as $receiver) {
      if (empty($receiver['arrived_local_datetime']) || empty($receiver['unloaded_local_datetime'])) {
        throw new Exception(config('response.load.updateToDeliveredError'));
      }
    }
  }

  public function updateDispatcherNotes() {
    return DB::transaction(function () {
      return Load::where('id', request('load'))
        ->where('admin_company_detail_id', getAuthAdminCompanyId())
        ->withTrashed()
        ->update(['dispatcher_notes' => request('dispatcher_notes')]);
    });
  }

  public function updateCommissionDetails() {
    return Load::where('id', request('load'))
      ->where('admin_company_detail_id', Auth::user()->admin_company_detail_id)
      ->update(request()->all());
  }

  /**
   * update the access of load info
   * @return mixed
   * @throws Exception
   */
  public function changeLoadAccess() {
    try {
      $role = Auth::user()->role ?? config('constant.roles.guest');
      if (!in_array($role, [
        config('constant.roles.super_admin'),
        config('constant.roles.admin'),
        config('constant.roles.dispatcher')
      ])) {
        return ['status' => 'error', 'data' => config('response.load.permission_denied')];
      }
      $load = Load::where('id', request('load'))->update(['is_private' => request('is_private')]);
      return ['status' => 'success', 'data' => $load];
    } catch (Exception $exception) {
      throw new Exception($exception);
    }
  }

  /**
   * Create public url to get load details
   * @return string
   */
  public function createPublicUrl(): string {
    return URL::route('public-load-info') . '?' . http_build_query(['load_id' => encrypt(request('load'))]);
  }

  /**
   * Get Load Details
   * @throws Exception
   */
  public function getLoadDetailsByPublicUrl(): array {
    try {
      $loadId = decrypt(request('load_id'));
      $load = Load::where('id', $loadId)->get();
      $isPrivate = $load->pluck('is_private')->first();
      $role = Auth::guard('api')->user()->role ?? config('constant.roles.guest');
      if ($isPrivate && !in_array($role, [
        config('constant.roles.super_admin'),
        config('constant.roles.admin'),
        config('constant.roles.dispatcher')
      ])) {
        return ['status' => 'error', 'data' => config('response.load.permission_denied')];
      }
      return ['status' => 'success', 'data' => $load];
    } catch (Exception $exception) {
      return ['status' => 'error', 'data' => $exception->getMessage()];
    }
  }

  /**
   * Get load POD url.
   * @param $request
   * @return string
   * @throws Exception
   */
  public function getLoadPodUrl($request): string {
    $loadImage = loadImage::select('image_name')
      ->where('id', $request->loadImageId)
      ->where('load_id', $request->loadId)
      ->whereIn('purpose', [config('constant.load.image.purpose.load_pod'), config('constant.load.image.purpose.load_pod_admin')])
      ->first();

    if (empty($loadImage)) {
      throw new Exception(config('response.error'));
    }

    return getImage($loadImage->image_name, config('constant.s3.load_file'));
  }

  /**
   * Restore canceled load to open.
   * @return mixed
   * @throws Exception
   */
  public function restoreCanceledLoad() {
    $load = Load::where('id', request('load_id'))
      ->where('admin_company_detail_id', getAuthAdminCompanyId())
      ->where('status', config('constant.status.load.canceled'))->first();
    if (empty($load)) {
      throw new Exception(config('response.load.accessDenied'));
    }
    return $load->update(['status' => config('constant.status.load.open')]);
  }

  /**
   * Canceled the load.
   * @return mixed
   * @throws Exception
   */
  public function cancelLoad() {
    return DB::transaction(function () {
      $currentCompanyId = getAuthAdminCompanyId();
      $load = Load::select('id', 'third_party_carrier_as_customer_id', 'synced_load_id')
        ->where('id', request('load_id'))
        ->where('admin_company_detail_id', $currentCompanyId)->first();

      if (empty($load)) {
        throw new Exception(config('response.load.accessDenied'));
      }
      $load->update(['status' => config('constant.status.load.canceled')]);

      $this->notifyThirdPartyCarrier($load, $currentCompanyId);
      $this->melioPaymentStatusUpdate($load->id, $currentCompanyId, config('constant.melioPayment.status.cancel'));
    });
  }

  /**
   * Melio Payment Status Update
   * @param $loadId
   * @param $companyId
   * @param $status
   */
  public function melioPaymentStatusUpdate($loadId, $companyId, $status) {
    try {
      $melioAccount = MelioAccount::where('company_id', $companyId)
        ->whereNotNull('onboarded_at')->first();

      if ($melioAccount) {
        $payload = ['change' => $status];
        if (is_array($loadId)) {
          foreach ($loadId as $id) {
            callNodeJsApi('PATCH', 'melio/paymentRequests/loads/' . $id, $payload);
          }
        } else {
          callNodeJsApi('PATCH', 'melio/paymentRequests/loads/' . $loadId, $payload);
        }
      }
    } catch (Exception $e) {
      Log::channel('slack')->emergency('Failed to call Melio API: ' . $e->getMessage());
    }
  }

  /**
   * Notify a third-party carrier when a load is deleted or canceled.
   *
   * @param Object $load
   * @param int $currentCompanyId
   * @return void
   */
  public function notifyThirdPartyCarrier($load, $currentCompanyId) {
    if ($load->third_party_carrier_as_customer_id && $load->synced_load_id) {
      $load = Load::select(
        'id',
        'third_party_carrier_as_customer_id',
        'third_party_carrier_cc_emails',
        'synced_load_id',
        'admin_company_detail_id',
        'tag_id',
        'load_unique_id',
      )
        ->where('id', $load->id)
        ->where('admin_company_detail_id', $currentCompanyId)
        ->with([
          'adminCompanyDetail:id,email,business_name',
          'thirdPartyCarrier:id,email,cc_emails,company_name',
          'tag:id,email,business_name',
          'syncedLoad:id,synced_load_id'
        ])
        ->first();
      if (!empty($load)) {
        $companyDetails = $load->adminCompanyDetail;
        // TODO: we might need to think about whether to show tag at all.
        // HerSol uses tag, so we may need?
        if (!empty($load->tag)) {
          $companyDetails = $load->tag;
        }
        $thirdPartyCarrierLoad = $load->syncedLoad ?? null;
        if ($thirdPartyCarrierLoad) {
          $thirdPartyCarrierLoad->update(['status' => config('constant.status.load.canceled')]);
          $this->cancelThirdPartyCarrierLoadMail(
            $thirdPartyCarrierLoad,
            $load,
            $companyDetails
          );
        }
      }
    }
  }

  /**
   * function for generate mail detail and send mail for cancel load
   * @param {object} $thirdPartyCarrierLoad
   * @param {object} $load
   * @return void
   */
  private function cancelThirdPartyCarrierLoadMail(
    $thirdPartyCarrierLoad,
    $load,
    $companyDetails
  ): void {
    $shipper = $thirdPartyCarrierLoad->loadShippers->first();
    $receiver = $thirdPartyCarrierLoad->loadReceivers->last();
    $toEmail = $load->thirdPartyCarrier->email ?? [];
    $replyTo = $companyDetails->email;

    $ccEmails = [
      $companyDetails->email,
    ];
    if (!empty($load->thirdPartyCarrier->cc_emails)) {
      $ccEmails = array_unique(array_merge(
        $ccEmails,
        explode(',', $load->thirdPartyCarrier->cc_emails)
      ));
    }
    if (!empty($load->third_party_carrier_cc_emails)) {
      $ccEmails = array_unique(array_merge(
        $ccEmails,
        explode(',', $load->third_party_carrier_cc_emails)
      ));
    }

    $mailDetail = [
      'shipperBrokerName' => $companyDetails->business_name ?? '',
      'carrierName' => $load->thirdPartyCarrier->company_name ?? '',
      'loadReference' => $load->load_unique_id ?? '',
      'shipper' => $shipper ?? [],
      'receiver' => $receiver ?? [],
      'toEmail' => $toEmail,
      'ccEmails' => $ccEmails,
      'replyTo' => $replyTo,
    ];
    try {
      Mail::queue(new CancelLoadMail($mailDetail));
    } catch (Exception $exception) {
      Log::error($exception);
    }
  }

  // TODO(zbu): every line below this code need to be checked again.
  /**
   * Modifying data to create pdf and send email.
   * @param $load
   * @return void
   * @throws Exception
   */
  private function sendRateConfirmationToCarrier($load) {
    // This is needed. Otherwise, during load update, the pdf will only print
    // old list of shipper and receivers that before the new request payload is
    // applied. Weird.
    $load->refresh();

    $adminCompany = $load->adminCompanyDetail;
    if (!empty($load->tag)) {
      $companyDetails = $load->tag;
      $logoUrl = $companyDetails->logo_image_storage_file_name ?
        getImage(
          $companyDetails->logo_image_storage_file_name,
          config('constant.s3.admin_company_image')
        ) : null;
    } else {
      $companyDetails = $adminCompany;
      $logoUrl = $adminCompany->company_image ?
        getImage(
          $adminCompany->company_image,
          config('constant.s3.admin_company_image')
        ) : null;
    }

    $thirdPartyCarrier = $load->thirdPartyCarrier;
    $charge = $load->thirdPartyCarrierCharge;
    $shippers = $load->loadShippers;
    $receivers = $load->loadReceivers;
    // error_log(count($shippers) . ' ' . count($receivers));

    $cc = [$companyDetails->email];

    if (!empty($thirdPartyCarrier->cc_emails)) {
      $cc = array_unique(array_merge(
        $cc,
        explode(',', $thirdPartyCarrier->cc_emails)
      ));
    }

    if (!empty($load->third_party_carrier_cc_emails)) {
      $cc = array_unique(array_merge(
        $cc,
        explode(',', $load->third_party_carrier_cc_emails)
      ));
    }

    // Yes, we use physical (non-billing) address and email.
    $to = optional($thirdPartyCarrier)->email ?? [];
    $carrierName = optional($thirdPartyCarrier)->company_name;
    $rateConfirmationType = $load->third_party_carrier_rate_con_type ?
      config('constant.load.rateConType')[$load->third_party_carrier_rate_con_type] : null;
    $data = [
      'loadId' => $load->id,
      'date' => convertUtcTimestampToLocalCarbonObject(
        Carbon::now(),
        $adminCompany->timezone
      )->format(config('constant.shortDateFormat')),
      'to' => !empty($to) ? $to : [],
      'cc' => $cc,
      'loadNumber' => $load->load_unique_id,
      'customerLoadNumber' => '',
      'loadReference' => $load->refrence_id,
      'orderType' => $load->order_type,
      'serviceType' => $load->service_type,
      'vessel' => $load->vessel,
      'arrivalDate' => formatDateInAmericanDateFormat($load->arrival_date),
      'lastFreeDate' => formatDateInAmericanDateFormat($load->last_free_date),
      'bolNumber' => $load->bol_number,
      'pickedUpEquipmentNumber' => $load->picked_up_equipment_number,
      'pickedUpEquipmentType' => $load->picked_up_equipment_type,
      'pickedUpEquipmentSize' => $load->picked_up_equipment_size,
      'droppedOffEquipmentNumber' => $load->dropped_off_equipment_number,
      'droppedOffEquipmentType' => $load->dropped_off_equipment_type,
      'droppedOffEquipmentSize' => $load->dropped_off_equipment_size,
      'company' => [
        'name' => $companyDetails->business_name,
        'address' => $companyDetails->address,
        'state' => $companyDetails->state,
        'city' => $companyDetails->city,
        'zip' => $companyDetails->zipcode,
        // TODO(HK&Anky): for admin company, use it's company image. For tag, wait for tag logo is ready.
        // what on earth is ->logo here??? Does not make sense at all!!!
        // You need to treat parent company logo and tag logo differently!!!
        'logo' => $logoUrl ?? null,
        'phone' => $companyDetails->phone_number,
        'email' => $companyDetails->email,
        // TODO later in the end, not now.
        'businessUrl' => "", //$companyDetails->business_url,
      ],
      // Yes, we use physical (non-billing) address and email.
      'carrier' => [
        'name' => $carrierName,
        'address' => optional($thirdPartyCarrier)->address,
        'state' => optional($thirdPartyCarrier)->state,
        'city' => optional($thirdPartyCarrier)->city,
        'zip' => optional($thirdPartyCarrier)->zip_code,
        'phone' => optional($thirdPartyCarrier)->phone_number,
        'email' => optional($thirdPartyCarrier)->email,
      ],
      'shippers' => $shippers ? LoadShipperResource::collection(
        $load->loadShippers
      )->resolve() : [],
      'receivers' => $receivers ? LoadReceiverResource::collection(
        $load->loadReceivers
      )->resolve() : [],
      'charges' => $charge ? (new ThirdPartyCarrierChargeResource($charge))
        ->resolve() : [],
      'specialInstructions' => $load->third_party_carrier_instructions,
      'rateConfirmationType' => $rateConfirmationType,
      'discount' => $load->third_party_carrier_discount,
      'totalAmount' => $load->third_party_carrier_total_amount,
    ];

    $data['pickups'] = implode(
      ', ',
      array_filter(collect($data['shippers'])->pluck('shipper_reference')->toArray())
    );
    $data['weights'] = implode(
      ', ',
      array_filter(array_map(function ($shipper) {
        if (isNullOrEmptyStr($shipper['freight_weight']) && isNullOrEmptyStr($shipper['weight_unit'])) {
          return null;
        }
        return number_format(floatval($shipper['freight_weight'])) . ' ' . $shipper['weight_unit'];
      }, $data['shippers']))
    );
    $data['counts'] = implode(
      ', ',
      array_filter(array_map(function ($shipper) {
        if (isNullOrEmptyStr($shipper['freight_qty']) && isNullOrEmptyStr($shipper['qty_unit'])) {
          return null;
        }
        return number_format(floatval($shipper['freight_qty'])) . ' ' . $shipper['qty_unit'];
      }, $data['shippers']))
    );
    $data['temperatures'] = implode(
      ', ',
      array_filter(collect($data['shippers'])->pluck('temperature')->toArray())
    );
    $data['carrierAddress'] = $data['carrier']['address'];
    $data['carrierAddress1'] = printAddressHelper(
      '',
      $data['carrier']['city'],
      $data['carrier']['state'],
      $data['carrier']['zip']
    );
    $carrierDriverAssetAssignments = ThirdPartyCarrierDriverAssetAssignment::collection(
      $load->carrierDriverAssetAssignments
    );
    if ($carrierDriverAssetAssignments->isNotEmpty()) {
      $data['driverName'] = implode(', ', $carrierDriverAssetAssignments
        ->pluck('driver_name')->toArray() ?? []);
      $data['driverPhone'] = implode(', ', $carrierDriverAssetAssignments
        ->pluck('driver_phone_number')->toArray() ?? []);
      $data['truckNumber'] = implode(', ', $carrierDriverAssetAssignments
        ->pluck('truck_number')->toArray() ?? []);
      $data['trailerNumber'] = implode(', ', $carrierDriverAssetAssignments
        ->pluck('trailer_number')->toArray() ?? []);
    }

    if (array_key_exists($adminCompany->id, config('user_customization.additionalDisclaimer'))) {
      $data['additionalDisclaimer'] = config('user_customization.additionalDisclaimer')[$adminCompany->id];
    }
    if (array_key_exists($adminCompany->id, config('user_customization.additionalServiceNotice'))) {
      $data['additionalServiceNotice'] = config('user_customization.additionalServiceNotice')[$adminCompany->id];
    }
    $data['serviceNotice'] = 'All PODs, invoices, and accessorial charge requests must be submitted';
    if (array_key_exists($adminCompany->id, config('user_customization.serviceNoticeNoPod'))) {
      $data['serviceNotice'] = config('user_customization.serviceNoticeNoPod')[$adminCompany->id];
    }
    if (array_key_exists($adminCompany->id, config('user_customization.disclaimer'))) {
      $data['disclaimer'] = config('user_customization.disclaimer')[$adminCompany->id];
    }

    $S3Folder = config('constant.s3.load_file');
    $pdf = $this->createThirdPartyCarrierRateConPdf($data);
    $bol = null;
    $title = 'rate confirmation';
    if (request()->input('thirdPartyCarrier.sendRateConAndBolToCarrier', false)) {
      $data['isBol'] = true;
      $bol = $this->createThirdPartyCarrierRateConPdf($data);
      $title = $title . ' & bill of lading';
    }
    $load->update([
      'third_party_carrier_rate_con_storage_file_name' => $pdf,
      'third_party_carrier_bol_storage_file_name' => $bol
    ]);

    if (empty($load->synced_load_id) && !empty($thirdPartyCarrier->synced_company_id)) {
      $truckReservedService = new TruckReservedService();
      $truckReservedService->createCarrierLoad($load);
    }

    $pdfFilePath = "{$S3Folder}{$pdf}";
    $bolFilePath = !empty($bol) ? "{$S3Folder}{$bol}" : null;

    try {
      Mail::queue(new SendRateConfirmationToCarrier($pdfFilePath, $data, $title, $bolFilePath));
    } catch (Exception $exception) {
      Log::error($exception);
      Log::channel('slack')->critical($exception->getMessage());
    }
  }

  /**
   * Create PDF of Rate Con.
   * @param $data
   * @return string
   * @throws Exception
   */
  public function createThirdPartyCarrierRateConPdf($data): string {
    $S3Folder = config('constant.s3.load_file');
    $pdfFileName = !empty($data['isBol']) ? 'tpcbol' : 'tpcrc';
    $pdfFileName .= generateUniqueFileName(getAuthAdminCompanyId(), 'pdf', $data['loadId']);
    $filePath = "{$S3Folder}{$pdfFileName}";
    $view = $data['rateConfirmationType'] == 'intermodal' ?
      'Load.carrier-rate-confirmation-intermodal' : 'Load.carrier-rate-confirmation-otr';
    $pdf = PDF::loadView($view, ["data" => $data])->setPaper('letter', 'portrait');
    uploadFileToS3($filePath, $pdf->output());
    return $pdfFileName;
  }

  /**
   * Get validated load drivers start location data.
   * @param $drivers
   * @return mixed
   * @throws Exception
   */
  public function getValidatedLoadDriver($drivers) {
    foreach ($drivers as $index => $driver) {
      $newDriverData = [];
      if (array_key_exists('startLocation', $driver)) {
        $startLocation = $driver['startLocation'];
        $newDriverData = [
          'start_location_address' => $startLocation['address'] ?? null,
          'start_location_city' => $startLocation['city'] ?? null,
          'start_location_state' => $startLocation['state'] ?? null,
          'start_location_zip_code' => $startLocation['zip_code'] ?? null,
          'start_location_latitude' => $startLocation['latitude'] ?? null,
          'start_location_longitude' => $startLocation['longitude'] ?? null,
          'start_location_distance' => $startLocation['distance'] ?? null,
        ];
      }
      // We cannot use array_key_exists because users with old website version
      // may change stops.
      //if (array_key_exists('emptyDistance', $driver)) {
      $newDriverData['empty_distance'] = $driver['emptyDistance'] ?? null;
      //}
      //if (array_key_exists('loadedDistance', $driver)) {
      $newDriverData['loaded_distance'] = $driver['loadedDistance'] ?? null;
      //}
      $driver['external_trailer_number'] = $driver['externalTrailerNumber'] ?? null;
      unset($driver['externalTrailerNumber']);
      unset($driver['startLocation']); //removing startLocation object
      unset($driver['emptyDistance']);
      unset($driver['loadedDistance']);
      unset($driver['sendBolToDriver']);
      $drivers[$index] = array_merge($driver, $newDriverData);
    }
    return $drivers;
  }

  /**
   * Validate Load Stops Order.
   * @return void
   * @throws Exception
   */
  public function validateLoadStopsOrder(): void {
    $this->verifyLoadOrderOfStops(
      request('shippers'),
      request('receivers'),
      request('load_legs') ?? [],
      request('multiPurposeStops') ?? [],
    );

    if (!empty(request('load_legs'))) {
      $toFromLegBothNull = collect(request('drivers'))
        ->where('to_leg', null)->where('from_leg', null)->count();
      if ($toFromLegBothNull > 0) {
        throw new Exception('Unprocessable entity: driver has from and to leg both null.');
      }
    }
  }

  /* Get load file urls.
   * @return mixed
   * @throws Exception
   */
  public function getLoadFileUploadUrls(): array {
    $response = [];
    $files = request('files');
    $loadId = request('loadId');
    $prefixFileUniqueName = getAuthAdminCompanyId();
    if (!empty($loadId)) {
      $prefixFileUniqueName = $prefixFileUniqueName . '-' . $loadId;
    }
    foreach ($files as $i => $file) {
      $index = $i;
      if (count($files) == 1) {
        $index = null;
      } else {
        $index++;
      }
      $response[] = $this->generateFileNameAndPresignedUrl(
        $prefixFileUniqueName,
        $file['extension'],
        $index,
        request('type')
      );
    }
    return $response;
  }

  /**
   * Get Load File Upload URL.
   * @param $prefixFileUniqueName
   * @param $extension
   * @param $index
   * @param $type
   * @return array
   */
  public function generateFileNameAndPresignedUrl($prefixFileUniqueName, $extension, $index, $type): array {
    $fileName = $type . '-' . generateUniqueFileName($prefixFileUniqueName, $extension, $index);
    if ($type == config('constant.uploadFileType.inv')) {
      $directory = config('constant.s3.load_invoice');
    } else {
      $directory = config('constant.s3.load_file');
    }
    return [
      'storageFileName' => $fileName,
      'url' => generatePresignedUrl($fileName, $directory)
    ];
  }

  /*
   *
   * Convert load tender extracted data from txt to json
   * @return array
   * @throws Exception
   */
  public function extractLoadTenderDataFromTxt($request): array {
    $extractedTextFile = $request->rawText;
    $openAiService = app(OpenAiService::class);
    $prompt = $this->preparePromptToConvertLoadTenderData($extractedTextFile);

    $openAiResponseJson = $openAiService->makeCompletionRequest(
      $prompt,
      config('openai.requestConfigurations.loads.convertLoadTenderDataFromTxtToJson')
    );

    $openAiResponseJson = str_replace("dock_hours_start_time", "time", $openAiResponseJson);
    $openAiResponseJson = str_replace("dock_hours_end_time", "end_time", $openAiResponseJson);

    return ['loadData' => $openAiService->convertJsonResponseToArray($openAiResponseJson)];
  }

  /*
   *
   * Create prompt to request a completion for load tender extracted data from txt to json
   * @return string
   */
  public function preparePromptToConvertLoadTenderData(string $extractedTextFile): string {
    $prompt = config('prompts.load.convertLoadTenderDataFromTxtToJson');
    $prompt .= "\"" . $extractedTextFile . "\"";
    return $prompt;
  }

  /**
   * Customization: Merge Load EDI to manual Load
   * @param $request
   * @return mixed
   */
  public function mergeLoad($request) {
    return DB::transaction(function () use ($request) {
      $adminCompanyId = getAuthAdminCompanyId();
      if (!empty($request->loads)) {
        $loadIds = collect($request->loads)->pluck('loadId')->toArray() ?? [];
      } else {
        $currentLoad = Load::where('id', $request->byLoadNumber['currentLoadId'])
          ->where('admin_company_detail_id', $adminCompanyId)
          ->select('id', 'tag_id')
          ->first();

        if (empty($currentLoad)) {
          throw new Exception('Cannot find current load. Is it deleted?');
        }

        $targetLoad = Load::where(
          'load_unique_id',
          $request->byLoadNumber['targetLoadNumber']
        )
          ->where('admin_company_detail_id', $adminCompanyId)
          ->where('tag_id', $currentLoad->tag_id)
          ->select('id')
          ->first();

        if (empty($targetLoad)) {
          throw new Exception('Can not find load #' .
            $request->byLoadNumber['targetLoadNumber'] .
            ' under current load tag. Please make sure the load number is correct and both loads have the same tag.');
        }
        $loadIds = [$currentLoad->id, $targetLoad->id];
      }
      if (empty($loadIds)) {
        throw new Exception('Exactly two different loads shall be provided.');
      }

      $loads = Load::whereIn('id', $loadIds)
        ->where('admin_company_detail_id', $adminCompanyId)
        ->select(
          'id',
          'loadboard_integration',
          'loadboard_integration_data',
          'refrence_id',
          'company_internal_reference',
          'dispatcher_notes',
          'tag_id',
          'load_unique_id',
          'total_amount',
          'discount',
          'sub_total'
        )
        ->with(['loadCharge', 'loadShippers', 'loadReceivers'])
        ->orderByDesc('id')
        ->get();

      $largerIdLoad = $loads->first();
      $smallerIdLoad = $loads->last();

      if (
        empty($largerIdLoad->loadboard_integration) ||
        $largerIdLoad->loadboard_integration != 1
      ) {
        throw new Exception('The latter created load #' .
          $largerIdLoad->load_unique_id . ' must be a Transplace EDI load.');
      }
      if (!empty($smallerIdLoad->loadboard_integration)) {
        throw new Exception('The first created load #' .
          $smallerIdLoad->load_unique_id . ' must be a manually created load.');
      }

      $this->mergeLoadData($smallerIdLoad, $largerIdLoad);
    });
  }

  /**
   * Copy load charge from EDI load
   * @param $smallerIdLoad
   * @param $largerIdLoad
   * @return void
   */
  private function mergeLoadCharges($smallerIdLoad, $largerIdLoad) {
    $chargeAttributes = [
      'hauling_fees',
      'fuel_surcharge',
      'accessorial_fee',
      'accessorial_deduction',
      'hauling_fees_type',
      'fuel_surcharge_type',
      'hauling_fees_rate',
      'fuel_surcharge_rate',
    ];
    $smallerIdLoad->loadCharge->fill($largerIdLoad->loadCharge->only($chargeAttributes));
    $smallerIdLoad->loadCharge->save();
  }

  /**
   * Copy EDI load’s to manual Load
   * @param $smallerIdLoad
   * @param $largerIdLoad
   * @return void
   * @throws Exception
   */
  private function mergeLoadData($smallerIdLoad, $largerIdLoad) {
    $smallerIdLoad->loadboard_integration = $largerIdLoad->loadboard_integration;
    $smallerIdLoad->loadboard_integration_data
      = $largerIdLoad->loadboard_integration_data;
    $smallerIdLoad->refrence_id = $largerIdLoad->refrence_id;
    if ($largerIdLoad->company_internal_reference) {
      $smallerIdLoad->company_internal_reference = $largerIdLoad->company_internal_reference;
    }
    $smallerIdLoad->dispatcher_notes = substr("Merged from "
      . $largerIdLoad->load_unique_id . ". " . $smallerIdLoad->dispatcher_notes
      . " " . $largerIdLoad->dispatcher_notes, 0, 3999);
    $largerIdLoad->dispatcher_notes = substr("Merged into "
      . $smallerIdLoad->load_unique_id . ". " . $largerIdLoad->dispatcher_notes, 0, 3999);

    if ($smallerIdLoad->total_amount == 0) {
      $smallerIdLoad->total_amount = $largerIdLoad->total_amount;
      $smallerIdLoad->sub_total = $largerIdLoad->sub_total;
      $smallerIdLoad->discount = $largerIdLoad->discount;
      $this->mergeLoadCharges($smallerIdLoad, $largerIdLoad);
    }
    $this->mergeLoadStops($smallerIdLoad, $largerIdLoad);
    $smallerIdLoad->save();
    $largerIdLoad->save();
    $largerIdLoad->delete();
  }

  /**
   * Copy EDI stop’s to manual load’s stop
   * @param $smallerIdLoad
   * @param $largerIdLoad
   * @return void
   * @throws Exception
   */
  private function mergeLoadStops($smallerIdLoad, $largerIdLoad) {
    $ediShippers = $largerIdLoad->loadShippers
      ->where('loadboard_stop_sequence_number', '!=', null);
    $ediReceivers = $largerIdLoad->loadReceivers
      ->where('loadboard_stop_sequence_number', '!=', null);

    foreach ($ediShippers as $key => $ediShipper) {
      $matchedShipper = $this->findMatchingStop(
        $smallerIdLoad->loadShippers,
        $ediShipper,
        'shipper'
      );
      if (empty($matchedShipper)) {
        throw new Exception('EDI Load #' . $largerIdLoad->load_unique_id .
          '’s ' . $this->getStopSequence($key + 1) .
          ' stop ' . $ediShipper->shipper_name .
          ' does not exist in manually created load #' .
          $smallerIdLoad->load_unique_id . '. Do both loads' .
          ' use the same name, address, city, state, and zip code?');
      }
      $update = [
        'shipper_name' => $ediShipper->shipper_name,
        'address' => $ediShipper->address,
        'city' => $ediShipper->city,
        'state' => $ediShipper->state,
        'zip_code' => $ediShipper->zip_code,
        'latitude' => $ediShipper->latitude,
        'longitude' => $ediShipper->longitude,
        'shipping_date' => $ediShipper->shipping_date,
        'shipping_end_date' => $ediShipper->shipping_end_date,
        'shipping_time' => $ediShipper->shipping_time,
        'shipping_end_time' => $ediShipper->shipping_end_time,
        'freight_weight' => $ediShipper->freight_weight,
        'freight_qty' => $ediShipper->freight_qty,
        'qty_unit' => $ediShipper->qty_unit,
        'weight_unit' => $ediShipper->weight_unit,
        'shipper_note' => $ediShipper->shipper_note,
        'loadboard_stop_sequence_number' => $ediShipper->loadboard_stop_sequence_number
      ];
      $smallerIdLoad->loadShippers()
        ->where('id', $matchedShipper->id)
        ->update($update);
    }

    foreach ($ediReceivers as $key => $ediReceiver) {
      $matchedReceiver = $this->findMatchingStop(
        $smallerIdLoad->loadReceivers,
        $ediReceiver,
        'receiver'
      );
      if (empty($matchedReceiver)) {
        throw new Exception('EDI Load #' . $largerIdLoad->load_unique_id .
          '’s ' . $this->getStopSequence($key + 1) .
          ' stop ' . $ediReceiver->receiver_name .
          ' does not exist in manually created load #' .
          $smallerIdLoad->load_unique_id . '. Do both loads' .
          ' use the same name, address, city, state, and zip code?');
      }
      $update = [
        'receiver_name' => $ediReceiver->receiver_name,
        'address' => $ediReceiver->address,
        'city' => $ediReceiver->city,
        'state' => $ediReceiver->state,
        'zip_code' => $ediReceiver->zip_code,
        'latitude' => $ediReceiver->latitude,
        'longitude' => $ediReceiver->longitude,
        'delivery_date' => $ediReceiver->delivery_date,
        'delivery_end_date' => $ediReceiver->delivery_end_date,
        'delivery_time' => $ediReceiver->delivery_time,
        'delivery_end_time' => $ediReceiver->delivery_end_time,
        'receiver_note' => $ediReceiver->receiver_note,
        'loadboard_stop_sequence_number' => $ediReceiver->loadboard_stop_sequence_number
      ];
      $smallerIdLoad->loadReceivers()
        ->where('id', $matchedReceiver->id)
        ->update($update);
    }
  }

  /**
   * get stop sequence
   * @param $number
   * @return string
   */
  private function getStopSequence($number) {
    $suffix = 'th'; // Default to 'th' for numbers other than 1, 2, and 3

    if ($number % 10 === 1 && $number % 100 !== 11) {
      $suffix = 'st';
    } elseif ($number % 10 === 2 && $number % 100 !== 12) {
      $suffix = 'nd';
    } elseif ($number % 10 === 3 && $number % 100 !== 13) {
      $suffix = 'rd';
    }

    return $number . $suffix;
  }

  /**
   * Find matching Stop
   * @param $loadStop
   * @param $stop
   * @param $type
   * @return mixed
   */
  private function findMatchingStop($loadStop, $stop, $type) {
    return $loadStop->filter(function ($item) use ($stop, $type) {
      $name = 0;
      if ($type == "shipper") {
        $name = strcasecmp($item->shipper_name, $stop['shipper_name']);
      } else if ($type == "receiver") {
        $name = strcasecmp($item->receiver_name, $stop['receiver_name']);
      }
      return $name === 0
        && strcasecmp($item->address, $stop['address']) === 0
        && strcasecmp($item->city, $stop['city']) === 0
        && strcasecmp($item->state, $stop['state']) === 0
        && strcasecmp($item->zip_code, $stop['zip_code']) === 0;
    })->sortBy('order')->last();
  }

  /**
   * Load Activities Tab: tracking truck location
   * @param $request
   * @return array
   * @throws Exception
   */
  public function trackLoadTrucks($request): array {
    $loadId = $request->loadId;

    // TODO: should use TruckTrackingService, code is a mess.

    $currentCompany = AdminCompanyDetail::select('company_type')
      ->where('id', getAuthAdminCompanyId())->first();
    if ($currentCompany->company_type == 2 || $currentCompany->company_type == 3) {
      $carrierLoad = Load::select('synced_load_id')->where('id', $loadId)->first();
      if (empty($carrierLoad) || empty($carrierLoad->synced_load_id)) {
        return [
          'trucks' => [],
        ];
      }
      $loadId = $carrierLoad->synced_load_id;
    }

    $load = Load::select('id', 'admin_company_detail_id')
      ->where('id', $loadId)
      ->with([
        'loadDrivers' => function ($q) {
          $q->select('id', 'load_id', 'truck_id')
            ->whereNotIn('status', [
              config('constant.status.driver_completed_load.end_load'),
              config('constant.status.driver_completed_load.handed_over'),
            ])
            ->with([
              'driverAsUsers:id',
              'driverAsUsers.driverDetail:user_id,latitude,longitude,lat_lng_update_time'
            ]);
        }
      ])
      ->first();

    $companyId = $load->admin_company_detail_id;

    if (!empty($load)) {
      $truckIds = $load->loadDrivers->pluck('truck_id')->unique()->toArray() ?? [];

      $locations = [];
      try {
        $locations = (new ExternalTrackingService())->getTrucksLocation(
          $companyId,
          $truckIds
        );
      } catch (Exception $exception) {
        Log::error($exception);
      }

      $trucks = collect($truckIds)->map(function ($truckId) use ($locations, $load) {
        $location = null;
        if (!empty($locations)) {
          $location = [
            'lat' => $locations[$truckId]['latitude'] ?? null,
            'lng' => $locations[$truckId]['longitude'] ?? null,
            'formattedAddress' => $locations[$truckId]['formattedLocation'] ?? null,
            'latLngSource' => config('constant.latLngSource.externalApi'),
          ];
        }

        if (
          is_null($location) ||
          (!empty($location) && is_null($location['lat'])) ||
          (!empty($location) && is_null($location['lng']))
        ) {
          foreach ($load->loadDrivers as $loadDriver) {
            // TODO: we will need to figure out which driver's location to return later.
            if ($loadDriver->truck_id != $truckId) {
              continue;
            }
            $driverUser = $loadDriver->driverAsUsers->pluck('driverDetail')
              ->first(function ($driverDetail) {
                return !is_null($driverDetail['latitude']) &&
                  !is_null($driverDetail['longitude']);
              });

            if (!empty($driverUser)) {
              $location = [
                'lat' => floatval($driverUser['latitude']),
                'lng' => floatval($driverUser['longitude']),
                'formattedAddress' => '',
                'latLngSource' => config('constant.latLngSource.driverMobileApp'),
                'driverMobileAppLatLngUpdateUtcTime' => $driverUser['lat_lng_update_time'] ?? '',
              ];
              break; // Exit the loop if a valid location is found
            }
          }
        }

        return [
          'truckId' => $truckId,
          'location' => $location ?? null
        ];
      }) ?? [];
    }
    return [
      "trucks" => $trucks ?? []
    ];
  }

  /**
   * Update showRateConToDriver for provided loadId
   * @param $request
   * @return void
   * @throws Exception
   */
  public function updateSelectFields($request) {
    if (!is_null($request->showRateConToDriver)) {
      $load = Load::find($request->loadId);
      if (empty($load)) {
        throw new Exception("Unprocessable Entity: Invalid Load id.");
      }
      $load->update([
        'show_rate_con_to_driver' => $request->showRateConToDriver ? 1 : null,
      ]);
    }
  }

  /**
   * Create or update load notes
   * @param $load
   * @param $notes
   * @return void
   * @throws Exception
   */
  public function createOrUpdateLoadNotes($load, array $notes) {
    $load->loadNotes()->whereNotIn('id', array_column($notes, 'id'))->delete();
    $existingNotes = $load->loadNotes()->get();
    foreach ($notes as $note) {
      $noteData = [
        'note' => $note['note'],
        'last_modified_by_user_id' => auth()->id(),
      ];
      if (!empty($note['id'])) {
        $existingNote = $existingNotes->where('id', $note['id'])->first();
        if (!empty($existingNote) && $existingNote->note != $note['note']) {
          $existingNote->fill($noteData)->save();
        }
      } else {
        $load->loadNotes()->create($noteData);
      }
    }
    return true;
  }

  /**
   * Update thirdPartyCarrier invoice status for provided loadId
   * @param $request
   * @return void
   * @throws Exception
   */
  public function updateThirdPartyCarrierInvoiceStatus($request) {
    $load = $this->getLoadByIdOrFail(request('loadId'));
    $load->update([
      'third_party_carrier_invoice_status' => !empty($request->status) ? array_search(
        $request->status,
        config('constant.load.thirdPartyCarrier.status')
      ) : null,
    ]);
  }

  /**
   * Get load by id or throw exception.
   * @param int $loadId
   * @return Object
   * @throws Exception
   */
  private function getLoadByIdOrFail($loadId) {
    $load = Load::select('id')->where('id', $loadId)
      ->where('admin_company_detail_id', getAuthAdminCompanyId())
      ->first();
    if (empty($load)) {
      throw new Exception(config('response.load.accessDenied'));
    }
    return $load;
  }

  /**
   * Check only one stop can have containerHere == true
   * @param $shippers
   * @param $receivers
   * @param $legs
   * @param $terminals
   * @return mixed
   * @throws Exception
   */
  private function checkOnlyOneStopCanHaveContainerHereTrue($shippers, $receivers, $legs, $terminals) {
    $stops = array_merge($shippers, $receivers, $legs, $terminals);
    if (collect($stops)->where('containerHere', true)->count() > 1) {
      throw new \Exception(config('response.load.multipleStopContainerHereError'));
    }
  }

  /**
   * get Distance cache
   * @param $distanceCacheData
   * @return array[]|null
   */
  public function getDistanceCache($distanceCacheData) {
    if ($distanceCacheData) {
      $distanceCache = json_decode($distanceCacheData);
      $distanceCacheResp = [
        'loadDistanceCache' => [
          'loadDistanceCalculatedBy' => config('constant.calculateUsingInt')[$distanceCache->ldc->ldcb] ?? null,
          'loadDistanceCache' => $this->getDistanceCacheStops($distanceCache->ldc->ldc) ?? []
        ],
      ];

      if (!empty($distanceCache->nlc)) {
        $distanceCacheResp['noLegCache'] = [
          'loadedDistanceCalculatedBy' =>
          config('constant.calculateUsingInt')[$distanceCache->nlc->ldcb] ?? null,
          'loadedDistanceCache' => $this->getDistanceCacheStops($distanceCache->nlc->ldc) ?? [],
          'loadedDistance' => $distanceCache->nlc->ld ?? null,
          'emptyDistance' => $distanceCache->nlc->ed ?? null,
          'startEmptyDistanceCalculatedBy' =>
          config('constant.calculateUsingInt')[$distanceCache->nlc->sedcb] ?? null,
          'startEmptyDistanceCache' => $this->getDistanceCacheStops($distanceCache->nlc->sedc) ?? [],
          'startEmptyDistance' => $distanceCache->nlc->sed ?? null,
          'endEmptyDistanceCalculatedBy' =>
          config('constant.calculateUsingInt')[$distanceCache->nlc->eedcb] ?? null,
          'endEmptyDistanceCache' => $this->getDistanceCacheStops($distanceCache->nlc->eedc) ?? [],
          'endEmptyDistance' => $distanceCache->nlc->eed ?? null,
        ];
      }
      if (!empty($distanceCache->tlc)) {
        $distanceCacheResp['toLegCache'] = $this->getDistanceCacheToFromLeg($distanceCache->tlc);
      }
      if (!empty($distanceCache->flc)) {
        $distanceCacheResp['fromLegCache'] = $this->getDistanceCacheToFromLeg($distanceCache->flc);
      }
      return $distanceCacheResp;
    }
    return null;
  }

  /**
   * get loaction cache
   * @param $distanceCache
   * @return array
   */
  private function getDistanceCacheStops($distanceCache): array {
    return array_map(function ($distance) {
      return [
        'lat' => $distance->a,
        'lng' => $distance->n,
      ];
    }, $distanceCache) ?? [];
  }

  /**
   * get leg cache
   * @param $legCache
   * @return array
   */
  private function getDistanceCacheToFromLeg($legCache): array {
    return [
      'loadedDistanceCalculatedBy' =>
      config('constant.calculateUsingInt')[$legCache->ldcb] ?? null,
      'loadedDistanceCache' => $this->getDistanceCacheStops($legCache->ldc) ?? [],
      'loadedDistance' => $legCache->ld ?? null,
      'emptyDistanceCalculatedBy' =>
      config('constant.calculateUsingInt')[$legCache->edcb] ?? null,
      'emptyDistanceCache' => $this->getDistanceCacheStops($legCache->edc) ?? [],
      'emptyDistance' => $legCache->ed ?? null,
    ];
  }

  /**
   * Compression function for distanceCache
   * @param $data
   * @return array
   */
  private function compressDistanceCache($data) {
    $compressedData = [];
    $calculateUsing = config('constant.calculateUsingInt');
    foreach ($data as $originalField => $value) {
      $compressedField = $this->compressDistanceCacheFieldName($originalField);
      if (is_array($value)) {
        $compressedData[$compressedField] = $this->compressDistanceCache($value);
      } else {
        $compressedData[$compressedField] = $this->compressDistanceCacheHelper(
          $value,
          $compressedField,
          $calculateUsing
        );
      }
    }

    return $compressedData;
  }

  /**
   * Check if calculate_using map required
   * @param $value
   * @param $compressedField
   * @param $calculateUsing
   * @return string
   */
  private function compressDistanceCacheHelper($value, $compressedField, $calculateUsing) {
    $distanceCalculatedByFieldNames = ['ldcb', 'sedcb', 'eedcb', 'edcb'];
    if (!empty($value) && in_array($compressedField, $distanceCalculatedByFieldNames)) {
      return array_search($value, $calculateUsing);
    }
    return $value;
  }

  /**
   * Mapping For Load distanceCache
   * @param $fieldName
   * @return string
   */
  private function compressDistanceCacheFieldName($fieldName) {
    $fieldMappings = [
      'loadDistanceCache' => 'ldc',
      'loadDistanceCalculatedBy' => 'ldcb',
      'lat' => 'a',
      'lng' => 'n',
      'noLegCache' => 'nlc',
      'loadedDistanceCalculatedBy' => 'ldcb',
      'loadedDistanceCache' => 'ldc',
      'loadedDistance' => 'ld',
      'emptyDistance' => 'ed',
      'emptyDistanceCalculatedBy' => 'edcb',
      'emptyDistanceCache' => 'edc',
      'startEmptyDistanceCalculatedBy' => 'sedcb',
      'startEmptyDistanceCache' => 'sedc',
      'startEmptyDistance' => 'sed',
      'endEmptyDistanceCalculatedBy' => 'eedcb',
      'endEmptyDistanceCache' => 'eedc',
      'endEmptyDistance' => 'eed',
      'toLegCache' => 'tlc',
      'fromLegCache' => 'flc',
    ];
    return $fieldMappings[$fieldName] ?? $fieldName;
  }
}
