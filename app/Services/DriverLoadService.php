<?php

namespace App\Services;

use App\Http\Requests\Api\Load\PickupLegLoadRequest;
use App\Mail\LoadCollaborator\DetentionRequestNotification;
use App\Mail\LoadCollaborator\LoadStatusChangeNotification;
use App\Models\AdminCompanyDetail;
use App\Models\DriverDetail;
use App\Models\Load;
use App\Models\LoadDriver;
use App\Models\LoadDriverUser;
use App\Models\Automation;
use App\Models\loadImage;
use App\Models\LoadLeg;
use App\Models\LoadMultiPurposeStop;
use App\Models\LoadReceiver;
use App\Models\LoadShipper;
use App\Services\ExternalLoadBoards\TransplaceService;
use App\Services\Logs\VehicleLogService;
use Barryvdh\DomPDF\Facade as PDF;
use Carbon\Carbon;
use Carbon\CarbonImmutable;
use Exception;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Log;
use App\Services\Logs\LoadLogService;
use GuzzleHttp\Client;

class DriverLoadService {
  public function getAllDriverLoad() {
    $per_page = request('rows') ?? config('response.per_page');
    $driverId = Auth::id();
    $adminCompanyDetail = Auth::user()->adminCompanyDetail;
    $companyId = $adminCompanyDetail->id;
    $customizations = $adminCompanyDetail->customizations;
    $showDriverPay = !empty($customizations['dpm']) ? $customizations['dpm'] : false;

    $status = request('status') ?? config('constant.status.driver_load.open');
    $loadOpenStatuses = [
      config('constant.status.load.open'),
      config('constant.status.load.assign'),
      config('constant.status.load.in_transit'),
    ];
    $loadCompletedStatuses = [
      config('constant.status.load.delivered'),
      config('constant.status.load.invoice_created'),
      config('constant.status.load.invoice_sent'),
      config('constant.status.load.invoice_paid'),
    ];

    $loadQuery =  Load::with([
      'adminLoadImages:load_id,image_name,original_file_name,purpose',
      'rateConfirmations'
    ])->where('status', '!=', config('constant.status.load.canceled'))
      ->where('admin_company_detail_id', $companyId);

    $dateFilterMinorDays = 32;
    if ($status == config('constant.status.driver_load.open')) {
      $dateFilterMinorDays = 8;
      // I checked prod db data. There are 4 out of 13k loads that:
      // delivery date <= 2024-05-23 but load_driver.updated_at >= "2024-05-29 00:00:00"
      // and load_driver.status IN driver_open_load.
      // So I think 7 should be OK.
      // There are maybe 32 loads that driver pressed end load or handed over after 05/29.
    }
    $loadQuery->where('i_end_date', '>=', Carbon::now()->subDays($dateFilterMinorDays)->toDateString());
    /*
    $loadQuery->whereHas('loadReceivers', function ($innerQuery) use ($dateFilterMinorDays) {
      $innerQuery->where(
        'delivery_date',
        '>=',
        Carbon::now()->subDays($dateFilterMinorDays)->toDateString()
      );
    });
    */

    if ($status == config('constant.status.driver_load.open')) {
      $loadQuery->whereIn('status', $loadOpenStatuses)
        ->whereHas('loadDrivers', function ($innerQuery) use ($driverId) {
          return $innerQuery->whereHas('LoadDriverUsers', function ($iq2) use ($driverId) {
            $iq2->where('user_id', $driverId);
          })
            ->whereIn('status', config('constant.status.driver_open_load'));
        });
    } else {
      $loadQuery->whereHas('loadDrivers', function ($innerQuery) use ($driverId) {
        return $innerQuery->whereHas('LoadDriverUsers', function ($iq2) use ($driverId) {
          $iq2->where('user_id', $driverId);
        });
      })->whereNotExists(function ($q2) use ($driverId, $loadOpenStatuses) {
        // I have to use NOT EXISTS (which leads to antijoin) because using OR is very slow as it does not utilize index well.
        $q2->select(DB::raw(1))
          ->from('loads AS l2')
          ->whereRaw(
            'l2.id = loads.id AND l2.status IN ("' . implode('","', $loadOpenStatuses) . '") '
              . 'AND EXISTS ('
              .   'SELECT 1 FROM load_drivers ld2 WHERE loads.id = ld2.load_id AND ld2.deleted_at IS NULL '
              .   'AND ld2.status IN ("' . implode('","', config('constant.status.driver_open_load')) . '")'
              .   'AND EXISTS ('
              .     'SELECT 1 FROM load_driver_user ldu2 WHERE ld2.id = ldu2.load_driver_id '
              .     'AND ldu2.user_id = ' . $driverId . ' AND ldu2.deleted_at IS NULL))'
          );
      });
    }

    $result = $loadQuery
      ->when($showDriverPay == true, function ($query) use ($driverId) {
        $query->with([
          'tripLoads:id,load_id,trip_id',
          'tripLoads.trip' => function ($q2) use ($driverId) {
            $q2->select('id', 'user_id')
              // TODO: I only want to query the rows of tripV2TemplatePayDetails
              // whose load_id == current load's id. How to do that? DB::raw to
              // return entire query? I don't want to do that.
              ->with(['tripV2TemplatePayDetails:id,trip_id,load_id,payment'])
              ->where('user_id', $driverId);
          },
          'tripV2LoadTemplatePayDetails' => function ($q2) use ($driverId) {
            $q2->select('id', 'load_id', 'user_id', 'payment')
              ->where('user_id', $driverId);
          }
        ]);
      })
      ->orderBy('id', 'DESC')
      ->paginate($per_page);

    return $result;
  }

  /**
   * Get Load Driver Details.
   * @return mixed
   * @throws Exception
   */
  public function getDriverLoad() {
    $loadDriver = LoadDriver::where('id', request('driverLoad'))
      ->with(['loadDetail', 'loadDetail.customer:id,company_id,email,automation_driver_buttons'])
      ->whereRaw("find_in_set('" . Auth::id() . "',driver_ids)")
      ->first();
    if (empty($loadDriver)) {
      throw new Exception(config('response.driver.assigned_load_changed'));
    }
    return $loadDriver;
  }

  // This is not used anymore.
  public function accepted() {
    return tap($this->getDriverLoad(), function ($driverLoad) {
      DB::transaction(function () use (&$driverLoad) {
        $driverLoad->update([
          'status' => config('constant.status.load_driver.accepted'),
        ]);

        if ($driverLoad->loadDetail->status == config('constant.status.load.assign')) {
          $driverLoad->loadDetail()->update([
            'status' => config('constant.status.load.in_transit'),
          ]);
          /*$this->carrierSyncLoadStatusUpdate(
            $driverLoad->loadDetail,
            config('constant.status.load.in_transit')
          );*/
        }
      });
    });
  }

  /**
   * Update shipment status and provide tracking information to Tansplace.
   * @param $loadboardIntegration
   * @param $loadboardIntegrationData
   * @param $reason
   * @param $dateTime
   * @param $state
   * @param null $lat
   * @param null $lng
   * @param $loadReferenceId
   * @return void
   */
  public function handleDriverUpdateStatusToTransplace(
    $loadReferenceId,
    $loadboardIntegration,
    $loadboardIntegrationData,
    $reason,
    $dateTime,
    $state,
    $lat = null,
    $lng = null,
    $stopSequenceNumber = null
  ) {
    try {
      if (!empty($loadboardIntegration) && !empty($loadboardIntegrationData) && $loadboardIntegration == 1 && !empty($loadReferenceId) && $stopSequenceNumber) {
        (new TransplaceService())->handleDriverUpdate($loadReferenceId, $loadboardIntegrationData, $reason, $dateTime, $state, $lat, $lng, $stopSequenceNumber);
      }
    } catch (Exception $exception) {
      Log::error($exception);
    }
  }

  public function handleDriverUpdateStatusToWalmart(
    $load,
    $loadDriverId,
    $stopId,
    $type,
    $dateTime
  ) {
    try {
      if ($load->loadboard_integration == 2) {
        $carbonDateTime = Carbon::parse($dateTime);
        $event = [
          'stopId' =>  $stopId,
          'type' => $type,
          'date' => $carbonDateTime->toDateString(),
          'time' => $carbonDateTime->toTimeString()
        ];
        if ($loadDriverId) {
          $event['loadDriverId'] = $loadDriverId;
        }
        $payload = ['events' => [$event]];
        $this->send214($payload, $load->id);
      }
    } catch (Exception $exception) {
      Log::error($exception);
      Log::channel('slack')->emergency(
        'handleDriverUpdateStatusToWalmart(' . $load->id . ',' . $loadDriverId  . ',' .  $stopId  . ',' . $type . ') failed. ' . $exception->getMessage()
      );
    }
  }

  /**
   * Process EDI 214.
   *
   * @param array $payload
   * @param int $loadId
   * @return void
   */
  private function send214($payload, $loadId) {
    $client = new Client();
    $nodeUrl = config('app.env') === 'production'
      ? config('constant.externalSystems.nodeProject.prodUrl')
      : config('constant.externalSystems.nodeProject.devUrl');

    $loadEdiApi = $nodeUrl . 'loads/' . $loadId . '/edi/214';

    $response = $client->request('POST', $loadEdiApi, [
      'headers' => [
        'Content-Type' => 'application/json',
        'Authorization' => 'Bearer ' . request()->bearerToken(),
      ],
      'json' => $payload
    ]);

    $response = json_decode($response->getBody()->getContents(), true);
    if (!$response['result']) {
      throw new Exception($response['message']);
    }
  }

  public function loadStarted() {
    return tap($this->getDriverLoad(), function ($driverLoad) {
      $driverId = Auth::id();
      $companyId = getAuthAdminCompanyId();

      $customizationsBitmask = AdminCompanyDetail::select('customizations_bitmask')
        ->where('id', $companyId)
        ->first()->customizations_bitmask ?? null;
      if (($customizationsBitmask & 2) && $this->hasInProgressLoads($driverId, $companyId)) {
        throw new Exception(config('response.driver.loadStartedError'));
      }

      DB::transaction(function () use (&$driverLoad) {
        $driverLoad->update([
          'status' => config('constant.status.load_driver.load_started'),
        ]);

        if ($driverLoad->loadDetail->status == config('constant.status.load.assign')) {
          $driverLoad->loadDetail()->update([
            'status' => config('constant.status.load.in_transit'),
          ]);
          $this->carrierSyncLoadStatusUpdate(
            $driverLoad->loadDetail,
            config('constant.status.load.in_transit')
          );
        }

        if (is_null($driverLoad->start_load_utc_datetime)) {
          $driverLoad->update(['start_load_utc_datetime' => Carbon::now('UTC')]);
        }

        /*
        $oldTruckId = $driverLoad->truck_id;
        $oldTrailerId = $driverLoad->trailer_id;

        // if (request('updateTruckTrailer')) {
        $driverDetail = DriverDetail::select('current_truck_id', 'current_trailer_id')
          ->where('user_id', Auth::id())->first();
        if ($driverDetail->current_truck_id) {
          $driverLoad->update(['truck_id' => $driverDetail->current_truck_id]);
        }
        if ($driverDetail->current_trailer_id) {
          $driverLoad->update(['trailer_id' => $driverDetail->current_trailer_id]);
        }
        // }

        $newTruckId = $driverDetail->current_truck_id;
        $newTrailerId = $driverDetail->current_trailer_id;
        // Create Logs of Trailer and Truck on Current Truck and Trailer Update.
        $logTruckId = null;
        $logTrailerId = null;

        $logType = array_search('load', config('constant.logs.truckAndTrailerType'));
        $loadLogType = array_search('driverAssignVehicleToLoad', config('constant.logs.load'));

        if ($oldTruckId != $newTruckId) {
          $logTruckId = $newTruckId;
        }
        if ($oldTrailerId != $newTrailerId) {
          $logTrailerId = $newTrailerId;
        }

        $vehicleLogService = new VehicleLogService();
        $vehicleLogService->logAssignVehicleToLoad(
          $driverLoad->load_id,
          $loadLogType,
          $logType,
          $driverLoad->id,
          $logTruckId,
          $logTrailerId
        );
        */

        if (!$driverLoad->loadDetail->load_start_date) {
          $driverLoad->loadDetail()->update([
            'load_start_date' => now(),
          ]);
        }
      });
      if (is_null($driverLoad->from_leg)) {
        $this->sendAutomationEmails(
          $driverLoad,
          config('constant.status.load_driver.load_started')
        );
      }
    });
  }

  /**
   * Check if this driver has any in progress loads.
   *
   * @param int $driverId
   * @param int $companyId
   * @return bool
   */
  protected function hasInProgressLoads($driverId, $companyId) {
    $loadOpenStatuses = [
      config('constant.status.load.open'),
      config('constant.status.load.assign'),
      config('constant.status.load.in_transit'),
    ];
    $loadDriverStatuses = [
      config('constant.status.driver_open_load.load_started'),
      config('constant.status.driver_open_load.from_arrived'),
      config('constant.status.driver_open_load.from_loaded'),
      config('constant.status.driver_open_load.to_arrived'),
      config('constant.status.driver_open_load.to_unloaded'),
    ];

    $loadQuery = Load::whereIn('status', $loadOpenStatuses)
      ->where('admin_company_detail_id', $companyId)
      ->where('i_end_date', '>=', Carbon::now()->subDays(8)->toDateString())
      /*
      ->whereHas('loadReceivers', function ($innerQuery) {
        $innerQuery->where(
          'delivery_date',
          '>=',
          Carbon::now()->subDays(8)->toDateString()
        );
      })
      */
      ->whereHas('loadDrivers', function ($innerQuery) use ($driverId, $loadDriverStatuses) {
        return $innerQuery
          ->whereHas('LoadDriverUsers', function ($iq2) use ($driverId) {
            $iq2->where('user_id', $driverId);
          })->whereIn('status', $loadDriverStatuses);
      });
    return $loadQuery->exists();
  }

  public function fromArrived() {
    try {
      return tap($this->getDriverLoad(), function ($driverLoad) {
        $requestStopType = request('stopType') ?? null;
        // I have to put it here to avoid deadlock (load locked in two transactions.)
        if ($requestStopType == "shipper" || is_null($driverLoad->from_leg)) {
          $load = $driverLoad->loadDetail;
          if ($load->loadboard_integration == 2) {
            $this->handleDriverUpdateStatusToWalmart(
              $load,
              $driverLoad->id,
              request('shipper_id'),
              'arrivedAtPickup',
              request('local_time')
            );
          }
        }

        DB::transaction(function () use (&$driverLoad, $requestStopType) {
          $newStatus = config('constant.status.load_driver.from_arrived');

          if ($requestStopType == "shipper" || is_null($driverLoad->from_leg)) {
            $shipper = $this->getLoadShipper($driverLoad->load_id);

            // To avoid some rare race conditions like both team drivers click buttons.
            if ($shipper->arrived_local_datetime) {
              return $driverLoad;
            }

            $shipper->update([
              'arrived_local_datetime' => request('local_time'),
              // 'arrived_latitude' => request('local_lat'),
              // 'arrived_longitude' => request('local_lng'),
            ]);
            $this->sendAutomationEmails($driverLoad, $newStatus, [], $shipper);

            // TODO: we need to add more details.
            // Log when driver arrive at shipper
            (new LoadLogService())->createLoadLog(
              $driverLoad->load_id,
              array_search('driverArriveAtShipper', config('constant.logs.load'))
            );

            // Turn on after GE onboards.
            $load = $driverLoad->loadDetail;
            if ($load->loadboard_integration == 1) {
              $this->handleDriverUpdateStatusToTransplace(
                $load->refrence_id,
                $load->loadboard_integration,
                $load->loadboard_integration_data,
                $newStatus,
                $shipper->arrived_local_datetime,
                $shipper->state,
                $shipper->latitude,
                $shipper->longitude,
                $shipper->loadboard_stop_sequence_number
              );
            }
          } else {
            // arrive at leg
            $leg = $this->getLoadLeg($driverLoad->load_id, $driverLoad->from_leg);
            if ($leg->from_arrived_local_datetime) {
              return $driverLoad;
            }

            $leg->update([
              'from_arrived_local_datetime' => request('local_time'),
              // 'from_arrived_latitude' => request('local_lat'),
              // 'from_arrived_longitude' => request('local_lng'),
            ]);
          }

          $driverLoad->update([
            'status' => $newStatus,
          ]);
          return $driverLoad;
        });
      });
    } catch (Exception $exception) {
      Log::error($exception);
      throw new Exception($exception);
    }
  }

  public function fromLoaded() {
    try {
      return tap($this->getDriverLoad(), function ($driverLoad) {
        $requestStopType = request('stopType') ?? null;
        if ($requestStopType == "shipper" || is_null($driverLoad->from_leg)) {
          $load = $driverLoad->loadDetail;
          if ($load->loadboard_integration == 2) {
            $this->handleDriverUpdateStatusToWalmart(
              $load,
              $driverLoad->id,
              request('shipper_id'),
              'departedPickup',
              request('local_time')
            );
          }
        }

        DB::transaction(function () use (&$driverLoad, $requestStopType) {
          $newStatus = config('constant.status.load_driver.from_loaded');

          $images = collect(request('item_images'))->map(function ($query) {
            return [
              'image_name' => $query['image_name'],
              'image_alias' => $query['image_alias'] ?? config('constant.load.image.image_alias.load_picked_up'),
              'purpose' => config('constant.load.image.purpose.load_picked_up'),
            ];
          });
          if ($images->isNotEmpty()) {
            $driverLoad->loadImage()->createMany($images);
          }

          if ($requestStopType == "shipper" || is_null($driverLoad->from_leg)) {
            $shipper = $this->getLoadShipper($driverLoad->load_id);
            if ($shipper->loaded_local_datetime) {
              return $driverLoad;
            }

            $shipper->update([
              'loaded_local_datetime' => request('local_time'),
              // 'loaded_latitude' => request('local_lat'),
              // 'loaded_longitude' => request('local_lng'),
            ]);
            $this->sendAutomationEmails($driverLoad, $newStatus, $images, $shipper);

            // Log when driver loaded at shipper
            (new LoadLogService())->createLoadLog(
              $driverLoad->load_id,
              array_search('driverLoadedAtShipper', config('constant.logs.load'))
            );

            // Turn on after GE onboards.
            $load = $driverLoad->loadDetail;
            if ($load->loadboard_integration == 1) {
              $this->handleDriverUpdateStatusToTransplace(
                $load->refrence_id,
                $load->loadboard_integration,
                $load->loadboard_integration_data,
                $newStatus,
                $shipper->loaded_local_datetime,
                $shipper->state,
                $shipper->latitude,
                $shipper->longitude,
                $shipper->loadboard_stop_sequence_number
              );
            }
          } else {
            $leg = $this->getLoadLeg($driverLoad->load_id, $driverLoad->from_leg);
            if ($leg->from_departed_local_datetime) {
              return $driverLoad;
            }

            $leg->update([
              'from_departed_local_datetime' => request('local_time'),
              // 'from_departed_latitude' => request('local_lat'),
              // 'from_departed_longitude' => request('local_lng'),
            ]);
          }

          $driverLoad->update([
            'status' => $newStatus,
          ]);
          return $driverLoad;
        });
      });
    } catch (Exception $exception) {
      Log::error($exception);
      throw new Exception($exception);
    }
  }

  private function getLoadShipper($loadId) {
    $shipperId = request('shipper_id');
    if (is_null($shipperId)) {
      throw new Exception('Missing shipper id.');
    }

    $loadShipper = LoadShipper::where('id', $shipperId)
      ->where('load_id', $loadId)->firstOrFail();
    if (empty($loadShipper)) {
      throw new Exception("Invalid shipper id");
    }
    return $loadShipper;
  }

  private function getLoadLeg($loadId, $legOrder) {
    $loadLeg = LoadLeg::where('load_id', $loadId)
      ->where('leg_order', $legOrder)
      ->first();
    if (empty($loadLeg)) {
      throw new Exception('Load leg not found.');
    }
    return $loadLeg;
  }

  private function getLoadReceiver($loadId) {
    $receiverId = request('receiver_id');
    if (is_null($receiverId)) {
      throw new Exception('Missing receiver id.');
    }

    $loadReceiver = LoadReceiver::where('id', $receiverId)
      ->where('load_id', $loadId)->firstOrFail();
    if (empty($loadReceiver)) {
      throw new Exception("Invalid receiver id");
    }
    return $loadReceiver;
  }

  public function toArrived() {
    try {
      return tap($this->getDriverLoad(), function ($driverLoad) {
        $requestStopType = request('stopType') ?? null;
        if ($requestStopType == "receiver" || is_null($driverLoad->to_leg)) {
          $load = $driverLoad->loadDetail;
          if ($load->loadboard_integration == 2) {
            $this->handleDriverUpdateStatusToWalmart(
              $load,
              $driverLoad->id,
              request('receiver_id'),
              'arrivedAtDelivery',
              request('local_time')
            );
          }
        }

        DB::transaction(function () use (&$driverLoad, $requestStopType) {
          $newStatus = config('constant.status.load_driver.to_arrived');


          if ($requestStopType == "receiver" || is_null($driverLoad->to_leg)) {
            $receiver = $this->getLoadReceiver($driverLoad->load_id);
            if ($receiver->arrived_local_datetime) {
              return $driverLoad;
            }

            $receiver->update([
              'arrived_local_datetime' => request('local_time'),
              // 'arrived_latitude' => request('local_lat'),
              // 'arrived_longitude' => request('local_lng'),
            ]);
            $this->sendAutomationEmails($driverLoad, $newStatus, [], $receiver);

            // Log when driver arrive at receiver
            (new LoadLogService())->createLoadLog(
              $driverLoad->load_id,
              array_search('driverArriveAtReceiver', config('constant.logs.load'))
            );

            // Turn on after GE onboards.
            $load = $driverLoad->loadDetail;
            if ($load->loadboard_integration == 1) {
              $this->handleDriverUpdateStatusToTransplace(
                $load->refrence_id,
                $load->loadboard_integration,
                $load->loadboard_integration_data,
                $newStatus,
                $receiver->arrived_local_datetime,
                $receiver->state,
                $receiver->latitude,
                $receiver->longitude,
                $receiver->loadboard_stop_sequence_number
              );
            }
          } else {
            $leg = $this->getLoadLeg($driverLoad->load_id, $driverLoad->to_leg);
            if ($leg->to_arrived_local_datetime) {
              return $driverLoad;
            }

            $leg->update([
              'to_arrived_local_datetime' => request('local_time'),
              // 'to_arrived_latitude' => request('local_lat'),
              // 'to_arrived_longitude' => request('local_lng'),
            ]);
          }

          $driverLoad->update([
            'status' => $newStatus,
          ]);
          return $driverLoad;
        });
      });
    } catch (Exception $exception) {
      Log::error($exception);
      throw new Exception($exception);
    }
  }

  public function toUnloaded() {
    try {
      return tap($this->getDriverLoad(), function ($driverLoad) {
        $requestStopType = request('stopType') ?? null;
        if ($requestStopType == "receiver" || is_null($driverLoad->to_leg)) {
          $load = $driverLoad->loadDetail;
          if ($load->loadboard_integration == 2) {
            $this->handleDriverUpdateStatusToWalmart(
              $load,
              $driverLoad->id,
              request('receiver_id'),
              'completedUnload',
              request('local_time')
            );
          }
        }

        DB::transaction(function () use (&$driverLoad, $requestStopType) {
          $newStatus = config('constant.status.load_driver.to_unloaded');

          // To normal receivers.
          if ($requestStopType == "receiver" || is_null($driverLoad->to_leg)) {
            $images = collect(request('item_images'))->map(function ($query) {
              return [
                'image_name' => $query['image_name'],
                'image_alias' => $query['image_alias'] ?? config('constant.load.image.image_alias.load_delivered'),
                'purpose' => config('constant.load.image.purpose.load_delivered'),
              ];
            });
            if (request()->has('pod_images')) {
              // Create pdf file for POD
              $PODImageNames = collect(request('pod_images'))
                ->map(function ($podImage) {
                  return $podImage['image_name'];
                });

              if ($PODImageNames->isNotEmpty()) {
                $PODPDFFileName = $this->generatePDFAndUploadToS3($PODImageNames);
                // Add POD pdf file in Database
                $loadPOD = [
                  'image_name' => $PODPDFFileName,
                  'image_alias' => config('constant.load.image.image_alias.load_pod'),
                  'purpose' => config('constant.load.image.purpose.load_pod'),
                ];
                // Add POD pdf file in Load Images
                $images->push($loadPOD);
              }
            }
          } else { // From shipper to leg.
            $images = collect(request('item_images'))->map(function ($query) {
              return [
                'image_name' => $query['image_name'],
                'image_alias' => config('constant.load.image.image_alias.load_picked_up'),
                'purpose' => config('constant.load.image.purpose.load_picked_up'),
              ];
            });
          }

          if ($images->isNotEmpty()) {
            $driverLoad->loadImage()->createMany($images);
          }

          if ($requestStopType == "receiver" || is_null($driverLoad->to_leg)) {
            $receiver = $this->getLoadReceiver($driverLoad->load_id);
            $needUpdate = false;
            if (!$receiver->unloaded_local_datetime) {
              $receiver->update([
                'unloaded_local_datetime' => request('local_time'),
                // 'unloaded_latitude' => request('local_lat'),
                // 'unloaded_longitude' => request('local_lng'),
              ]);
              $needUpdate = true;
            }

            if (
              $needUpdate
              // && $driverLoad->loadDetail->status !=
              // config('constant.status.load.delivered')
              && in_array($driverLoad->loadDetail->status, [
                config('constant.status.load.open'),
                config('constant.status.load.assign'),
                config('constant.status.load.in_transit'),
              ])
              && sizeof(LoadReceiver::where('load_id', $driverLoad->load_id)
                ->whereNull('unloaded_local_datetime')->get()) == 0
            ) {
              /*$driverLoad->loadDetail()->update([
                'status' => config('constant.status.load.delivered'),
                'is_private' => true,
              ]);*/
              // The above update does not work, below works...
              // Laravel needs to fix this.
              $driverLoad->loadDetail->status = config('constant.status.load.delivered');
              $driverLoad->loadDetail->is_private = true;
              // Should be able to remove this if check later.
              // Discussed with Justin, this timestamp need overhaul later.
              if (!$driverLoad->loadDetail->load_end_date) {
                $driverLoad->loadDetail->load_end_date = now();
              }

              $driverLoad->loadDetail->delivered_at = Carbon::now('UTC');

              $driverLoad->loadDetail->save();
              $this->carrierSyncLoadStatusUpdate(
                $driverLoad->loadDetail,
                config('constant.status.load.delivered')
              );
            }

            if ($needUpdate) {
              $this->sendAutomationEmails(
                $driverLoad,
                $newStatus,
                $images,
                $receiver
              );
              $driverLoad->update([
                'status' => $newStatus,
              ]);

              // Log when driver unloaded at receiver
              (new LoadLogService())->createLoadLog(
                $driverLoad->load_id,
                array_search('driverUnloadedAtReceiver', config('constant.logs.load'))
              );

              // Turn on after GE onboards.
              $load = $driverLoad->loadDetail;
              if ($load->loadboard_integration == 1) {
                $this->handleDriverUpdateStatusToTransplace(
                  $load->refrence_id,
                  $load->loadboard_integration,
                  $load->loadboard_integration_data,
                  $newStatus,
                  $receiver->unloaded_local_datetime,
                  $receiver->state,
                  $receiver->latitude,
                  $receiver->longitude,
                  $receiver->loadboard_stop_sequence_number
                );
              }
            }
          } else {
            $leg = $this->getLoadLeg($driverLoad->load_id, $driverLoad->to_leg);
            if (!$leg->to_departed_local_datetime) {
              $leg->update([
                'to_departed_local_datetime' => request('local_time'),
                // 'to_departed_latitude' => request('local_lat'),
                // 'to_departed_longitude' => request('local_lng'),
              ]);
              $driverLoad->update([
                'status' => $newStatus,
              ]);
            }
          }
          return $driverLoad;
        });
      });
    } catch (Exception $exception) {
      Log::error($exception);
      throw new Exception($exception);
    }
  }

  public function pickUp() {
    $data = collect(request('item_images'))->map(function ($query) {
      return [
        'image_name' => $query['image_name'],
        'image_alias' => $query['image_alias'] ?? config('constant.load.image.image_alias.load_picked_up'),
        'purpose' => config('constant.load.image.purpose.load_picked_up'),
      ];
    });

    return tap($this->getDriverLoad(), function ($driverLoad) use ($data) {
      DB::transaction(function () use (&$driverLoad, $data) {
        $driverLoad->update([
          'status' => config('constant.status.load_driver.picked_up_load'),
        ]);

        if ($data->isNotEmpty()) {
          $driverLoad->loadImage()->createMany($data);
        }
      });
    });
  }

  /*
   * We're saving load pod images in database
   * we created pdf
   */
  public function delivered() {
    $dataItem = collect(request('item_images'))->map(function ($query) {
      return [
        'image_name' => $query['image_name'],
        'image_alias' => $query['image_alias'] ?? config('constant.load.image.image_alias.load_delivered'),
        'purpose' => config('constant.load.image.purpose.load_delivered'),
      ];
    });

    return tap($this->getDriverLoad(), function ($driverLoad) use ($dataItem) {
      DB::transaction(function () use (&$driverLoad, $dataItem) {
        $driverLoad->update([
          'status' => config('constant.status.load_driver.delivered'),
        ]);

        // create pdf file for POD
        if (request()->has('pod_images')) {
          $PODImageNames = collect(request('pod_images'))->map(function ($podImage) {
            return $podImage['image_name'];
          });

          if ($PODImageNames->isNotEmpty()) {
            $PODPDFFileName = $this->generatePDFAndUploadToS3($PODImageNames);

            // Add POD PDF file in Database
            $loadPOD = [
              'image_name' => $PODPDFFileName,
              'image_alias' => config('constant.load.image.image_alias.load_pod'),
              'purpose' => config('constant.load.image.purpose.load_pod'),
            ];

            // Add POD pdf file in Load Images
            $dataItem->push($loadPOD);
          }
        }

        if ($dataItem->isNotEmpty()) {
          $driverLoad->loadImage()->createMany($dataItem);
        }

        if ($driverLoad->loadDetail->status == config('constant.status.load.in_transit')) {
          $driverLoad->loadDetail()->update([
            'status' => config('constant.status.load.delivered'),
            'load_end_date' => now(),
            'is_private' => true,
            'delivered_at' => Carbon::now('UTC')
          ]);

          $this->carrierSyncLoadStatusUpdate(
            $driverLoad->loadDetail,
            config('constant.status.load.delivered')
          );
        }
      });
    });
  }

  public function endLoad() {
    try {
      return tap($this->getDriverLoad(), function ($driverLoad) {
        $driverAppVariation = AdminCompanyDetail::where('id', getAuthAdminCompanyId())->pluck('driver_app_variation')
          ->first();
        $newStatus = config('constant.status.load_driver.end_load');
        DB::transaction(function () use (
          &$driverLoad,
          $newStatus,
          $driverAppVariation
        ) {
          $driverLoad->update([
            'status' => $newStatus,
          ]);

          if ($driverAppVariation) {
            $status = config('constant.status.load.in_transit');
            if (is_null($driverLoad->to_leg)) {
              if (in_array($driverLoad->loadDetail->status, [
                config('constant.status.load.open'),
                config('constant.status.load.assign'),
                config('constant.status.load.in_transit'),
              ])) {
                $status = config('constant.status.load.delivered');
                $driverLoad->loadDetail()->update([
                  'status' => $status,
                  'is_private' => true,
                  'delivered_at' => Carbon::now('UTC')
                ]);
              }
            } else {
              $status = config('constant.status.load.in_transit');
              $driverLoad->loadDetail()->update([
                'status' => $status,
              ]);
            }
            $this->carrierSyncLoadStatusUpdate($driverLoad->loadDetail, $status);
          } else {
            // Can be deleted later.
            if (
              $driverLoad->loadDetail->status == config('constant.status.load.delivered')
              && !$driverLoad->loadDetail->load_end_date
            ) {
              $driverLoad->loadDetail()->update([
                'load_end_date' => now(),
              ]);
            }
          }

          if (is_null($driverLoad->end_load_utc_datetime)) {
            $driverLoad->update(['end_load_utc_datetime' => Carbon::now('UTC')]);
          }
        });
        // Shipper to leg driver can also click the END LOAD button,
        // but we shall not send emails in this case.
        if (is_null($driverLoad->to_leg)) {
          $this->sendAutomationEmails($driverLoad, $newStatus);
        }
      });
    } catch (Exception $exception) {
      Log::error($exception);
      throw new Exception($exception);
    }
  }

  private function getCompanyNotificationSettings() {
    return AdminCompanyDetail::select(
      'id',
      'auto_send_detention_requests_to_collaborators',
      'detention_free_time_in_minutes',
      'detention_charge_per_hour'
    )->find(Auth::user()->admin_company_detail_id);
  }

  private function sendAutomationEmails(
    $driverLoad,
    $status,
    $fileAttachments = [],
    $shipperReceiver = null
  ) {
    try {
      $emailSettings = $this->getCompanyNotificationSettings();
      $load = $driverLoad->loadDetail;

      $this->statusChangeNotification(
        $driverLoad,
        $status,
        $fileAttachments,
        null,
        $shipperReceiver
      );

      if ($status == config('constant.status.load_driver.from_loaded') || $status == config('constant.status.load_driver.to_unloaded')) {
        if ($emailSettings->auto_send_detention_requests_to_collaborators) {
          $this->detentionRequestNotification(
            $emailSettings,
            $load,
            $status,
            $shipperReceiver
          );
        }
      }
    } catch (Exception $exception) {
      Log::error($exception);
    }
  }

  public function statusChangeNotification(
    $driverLoad,
    $status,
    $fileAttachments = [],
    $purpose = null,
    $shipperReceiver = null
  ) {
    try {
      $load = $driverLoad->loadDetail;
      if ($status == config('constant.status.load_driver.end_load')) {
        $fileAttachments = $this->getLoadPod($load);
      }
      $automation = Automation::where('company_id', getAuthAdminCompanyId())->first();
      $sendToEmailList = array_filter(array_unique(array_map('strtolower', $this->getEmailSendToList($automation, $load, $status)))) ?? [];
      if (empty($sendToEmailList)) {
        return;
      }

      if (count($fileAttachments) > 0) {
        $S3Path = config('constant.s3');
        $fileAttachments = $fileAttachments->map(function ($loadImage) use ($S3Path) {
          if (!empty($loadImage['s3_path'])) {
            return $loadImage;
          }
          return [
            'image_name' => $loadImage['image_name'],
            'image_alias' => $loadImage['image_alias'],
            's3_path' => "{$S3Path['load_file']}{$loadImage['image_name']}",
          ];
        });
      }

      Mail::queue(new LoadStatusChangeNotification(
        $load,
        $status,
        $sendToEmailList,
        request('local_time'),
        $fileAttachments,
        $purpose,
        $shipperReceiver,
      ));
    } catch (Exception $exception) {
      Log::error($exception);
    }
  }

  private function getEmailSendToList($automation, $load, $status): array {
    switch ($status) {
      case config('constant.status.load_driver.load_started'):
        return $this->getEmailSendToListHelper(
          $load,
          $automation->driver_start_load_dispatcher,
          $automation->driver_start_load_customer,
          $automation->driver_start_load_collaborator,
          $automation->driver_start_load_emails
        );
      case config('constant.status.load_driver.from_loaded'):
        return $this->getEmailSendToListHelper(
          $load,
          $automation->driver_shipper_loaded_dispatcher,
          $automation->driver_shipper_loaded_customer,
          $automation->driver_shipper_loaded_collaborator,
          $automation->driver_shipper_loaded_emails
        );
      case config('constant.status.load_driver.from_arrived'):
        return $this->getEmailSendToListHelper(
          $load,
          $automation->driver_shipper_arrived_dispatcher,
          $automation->driver_shipper_arrived_customer,
          $automation->driver_shipper_arrived_collaborator,
          $automation->driver_shipper_arrived_emails
        );
      case config('constant.status.load_driver.to_arrived'):
        return $this->getEmailSendToListHelper(
          $load,
          $automation->driver_receiver_arrived_dispatcher,
          $automation->driver_receiver_arrived_customer,
          $automation->driver_receiver_arrived_collaborator,
          $automation->driver_receiver_arrived_emails
        );
        break;
      case config('constant.status.load_driver.to_unloaded'):
        return $this->getEmailSendToListHelper(
          $load,
          $automation->driver_receiver_unloaded_dispatcher,
          $automation->driver_receiver_unloaded_customer,
          $automation->driver_receiver_unloaded_collaborator,
          $automation->driver_receiver_unloaded_emails
        );
      case config('constant.status.load_driver.end_load'):
        return $this->getEmailSendToListHelper(
          $load,
          $automation->driver_end_load_dispatcher,
          $automation->driver_end_load_customer,
          $automation->driver_end_load_collaborator,
          $automation->driver_end_load_emails
        );
      case config('constant.status.load_driver.upload'):
        return $this->getEmailSendToListHelper(
          $load,
          $automation->driver_upload_dispatcher,
          $automation->driver_upload_customer,
          $automation->driver_upload_collaborator,
          $automation->driver_upload_emails
        );
      default:
        return [];
    }
  }

  private function getEmailSendToListHelper(
    $load,
    $sendToDispatcher,
    $sendToCustomer,
    $sendToCollaborator,
    $rawExtraEmails
  ) {
    $sendToList = [];
    if ($sendToDispatcher && $load->dispatcher) {
      $sendToList[] = $load->dispatcher->email;
    }

    if ($load->customer && ($sendToCustomer || $load->customer->automation_driver_buttons)) {
      $sendToList[] = $load->customer->email ?? "";
    }

    if ($sendToCollaborator) {
      $collaboratorEmails = $load->collaborators
        ->pluck('email')->toArray() ?? [];
      if (!empty($collaboratorEmails)) {
        $sendToList = array_merge($sendToList, $collaboratorEmails);
      }
    }

    $extraEmails = explode(',', $rawExtraEmails) ?? [];
    if (!empty($extraEmails)) {
      $sendToList = array_merge($sendToList, $extraEmails);
    }

    return $sendToList;
  }

  private function detentionRequestNotification(
    $emailSettings,
    $load,
    $status,
    $shipperReceiver
  ) {
    try {
      if ($status == config('constant.status.load_driver.from_loaded')) {
        // shipper
        $targetDate = $shipperReceiver->shipping_date;
        $targetTime = $shipperReceiver->shipping_time;
        $targetEndDate = $shipperReceiver->shipping_end_date;
        $targetEndTime = $shipperReceiver->shipping_end_time;
        $targetArrivedDatetime = $shipperReceiver->arrived_local_datetime;
        $targetName = "shipper " . $shipperReceiver->shipper_name;
      } else {
        // receiver
        $targetDate = $shipperReceiver->delivery_date;
        $targetTime = $shipperReceiver->delivery_time;
        $targetEndDate = $shipperReceiver->delivery_end_date;
        $targetEndTime = $shipperReceiver->delivery_end_time;
        $targetArrivedDatetime = $shipperReceiver->arrived_local_datetime;
        $targetName = "receiver " . $shipperReceiver->receiver_name;
      }

      if ($targetDate == null || $targetTime == null) {
        return;
      }
      $targetCarbon = CarbonImmutable::parse($targetDate . ' ' .
        CarbonImmutable::parse($targetTime)->format('H:i:s'));
      $targetEndCarbon = null;
      if ($targetEndTime != null) {
        if ($targetEndDate == null) {
          $targetEndDate = $targetDate;
        }
        $targetEndCarbon = CarbonImmutable::parse($targetEndDate . ' ' .
          CarbonImmutable::parse($targetEndTime)->format('H:i:s'));
        // The order is $targetEndCarbon - $targetCarbon!!!
        if ($targetCarbon->diffInMinutes($targetEndCarbon, false) < 0) {
          // end time is before start time.
          return;
        }
      }
      $arrivedCarbon = CarbonImmutable::parse($targetArrivedDatetime);
      $departedCarbon = CarbonImmutable::parse(request('local_time'));
      $diffInMinutes = 0;
      if ($targetEndCarbon == null) {
        // Only a single appointment point in timeline.
        if ($targetCarbon->diffInMinutes($arrivedCarbon, false) > 0) {
          // Even 1 minute late is considered as late.
          return;
        }
        // arrivedCarbon <= targetCarbon
        $diffInMinutes = $targetCarbon->diffInMinutes($departedCarbon, false);
      } else {
        // Appointment has a time range.
        if ($targetEndCarbon->diffInMinutes($arrivedCarbon, false) > 0) {
          // Even 1 minute late is considered as late.
          return;
        }
        // arrivedCarbon <= targetEndCarbon
        // But arrivedCarbon <=> targetCarbon
        // So we need to take max($arrivedCarbon, $targetCarbon)
        $maxCarbon = $arrivedCarbon->max($targetCarbon);
        $diffInMinutes = $maxCarbon->diffInMinutes($departedCarbon, false);
      }

      $detentionMinutes = $diffInMinutes - $emailSettings->detention_free_time_in_minutes;
      if ($detentionMinutes <= 0) {
        return;
      }
      $detentionHours = $detentionMinutes / 60;
      $detentionHoursFormatted = number_format($detentionHours, 2);
      if ($detentionHoursFormatted == 1) {
        $detentionHoursStr = "1 hour";
      } else {
        $detentionHoursStr = $detentionHoursFormatted . " hours";
      }
      $detentionDetails = [
        'location' => $targetName,
        'hours' => $detentionHoursStr,
        'arrivedTime' => $arrivedCarbon->toDateTimeString(),
        'departedTime' => $departedCarbon->toDateTimeString(),
        'chargePerHour' => $emailSettings->detention_charge_per_hour,
        'amount' => number_format($detentionHours *
          $emailSettings->detention_charge_per_hour, 2),
      ];

      $collaboratorEmails = $load->collaborators->pluck('email')->toArray() ?? [];

      if (!$load->dispatcher && count($collaboratorEmails) == 0) {
        return;
      }

      Mail::queue(new DetentionRequestNotification(
        $load,
        $collaboratorEmails,
        $detentionDetails
      ));
    } catch (Exception $exception) {
      throw new Exception($exception);
    }
  }

  /*
   * Get the Proof-Of-Delivery (POD) from load.
   */
  private function getLoadPod(Load $load) {
    $S3Path = config('constant.s3');

    return loadImage::where(['load_id' => $load->id])->whereIn('purpose', [config('constant.load.image.purpose.load_pod'), config('constant.load.image.purpose.load_pod_admin')])->get()->map(function ($loadImage) use ($S3Path) {
      return [
        'image_name' => $loadImage->image_name,
        'image_alias' => $loadImage->image_alias,
        's3_path' => "{$S3Path['load_file']}{$loadImage->image_name}",
      ];
    });
  }

  /**
   * Handover from the Mobile App and Dashboard
   *
   * @NOTE:
   * 1) After `Accepting` The Load,
   * driver can request for `Ready to Hand Over`
   *
   * 2) handed over driver's all field add in new Driver
   * except `driver ids`, it'll select by Admin/Dispatcher in Dashboard.
   */
  public function handedOver() {
    return tap($this->getDriverLoad(), function ($driverLoad) {
      /**
       * when  handover happen from the `Dashboard`
       * from the dashboard it changed driver status to `Ready to Handover`
       */
      $driverLoad->update([
        'status' => config('constant.status.load_driver.handed_over'),
      ]);

      // Log when driver hand over
      (new LoadLogService())->createLoadLog(
        $driverLoad->load_id,
        array_search('driverHandedOver', config('constant.logs.load'))
      );

      if ($driverLoad->loadDetail->status == config('constant.status.load.in_transit')) {
        $rows = LoadDriver::select('status')->where('load_id', $driverLoad->load_id)->get();
        $loadStatusShouldBeOpen = true;
        foreach ($rows as $row) {
          if (
            $row->status != config('constant.status.load_driver.handed_over')
          ) {
            $loadStatusShouldBeOpen = false;
          }
        }
        if ($loadStatusShouldBeOpen) {
          $driverLoad->loadDetail()->update([
            'status' => config('constant.status.load.open'),
          ]);
        }
      }

      return $driverLoad;
    });

    //        return tap($this->getDriverLoad(), function ($driverLoad) {
    //            DB::transaction(function () use (&$driverLoad) {
    //                $driverLoad->update([
    //                    'status' => config('constant.status.load_driver.handed_over')
    //                ]);
    //
    ////                    $driverLoad->loadImage()->create([
    ////                        'image_name' => request('image_name'),
    ////                        'image_alias' => request('image_alias', config('constant.load.image.image_alias.load_handover_odometer')),
    ////                        'purpose' => config('constant.load.image.purpose.load_handover_odometer'),
    ////                        'odometer_reading' => request('odometer_reading')
    ////                    ]);
    //            });
    //        });
  }

  /*
   * POD : Proof of Delivery
   *
   * Convert Images into PDF
   * And Upload to the S3
   */
  public function generatePDFAndUploadToS3(Collection $images): string {
    $S3Folder = config('constant.s3.load_file');

    $base64Images = $images
      ->map(function ($image) use ($S3Folder) {
        $path = "{$S3Folder}{$image}";

        return getImageContentS3($path);
      })
      ->map(function ($image) {
        return 'data:image/png;base64,' . base64_encode($image);
      });

    $pdf = PDF::loadView('pdf.proof-of-delivery', ['images' => $base64Images]);

    $PDFFileName = Str::uuid() . ".pdf";
    $PDFFilePath = "{$S3Folder}{$PDFFileName}";

    Storage::disk('s3')->put($PDFFilePath, $pdf->output());

    return $PDFFileName;
  }

  /**
   * POD : Bol
   * @param $images
   * @param $loadId
   * @param $type
   * @return string
   * @throws Exception
   *
   * Convert Images into PDF
   * And Upload to the S3
   */
  public function generateBolAndOtherPdfAndUploadToS3(
    Collection $images,
    $loadId,
    $type
  ): string {
    $S3Folder = config('constant.s3.load_file');
    $base64Images = $images
      ->map(function ($image) use ($S3Folder) {
        $path = "{$S3Folder}{$image}";
        return getImageContentS3($path);
      })
      ->map(function ($image) {
        return 'data:image/png;base64,' . base64_encode($image);
      });
    $pdf = PDF::loadView('pdf.proof-of-delivery', ['images' => $base64Images]);
    $pdfFilename = $this->generateFileName($loadId, 'pdf', $type);
    $pdfFilePath = "{$S3Folder}{$pdfFilename}";
    Storage::disk('s3')->put($pdfFilePath, $pdf->output());
    return $pdfFilename;
  }

  /**
   * Get Load File Name.
   * @param $id
   * @param $extension
   * @param $type
   * @return string
   */
  public function generateFileName($id, $extension, $type) {
    $prefixIds = getAuthAdminCompanyId() . '-' . $id;
    return 'load-' . $type . '-' . generateUniqueFileName($prefixIds, $extension);
  }

  /**
   * Report: Drop Trailer Report
   *
   * 1) Dashboard when Drop Trailer is Selected.
   * 2) Mark Trailer as Picked up
   */
  public function trailerPickedUp() {
    return tap($this->getDriverLoadForTrailerPickedUp(), function ($driverLoad) {
      $driverLoad->update([
        'is_trailer_picked_up' => 1,
      ]);
    });
  }

  private function getDriverLoadForTrailerPickedUp() {
    $companyId = getAuthAdminCompanyId();
    $loadDriver = LoadDriver::where('id', request('driverLoad'))
      ->whereHas('loadDetail', function ($query) use ($companyId) {
        $query->where('admin_company_detail_id', $companyId);
      })
      ->first();
    if (empty($loadDriver)) {
      throw new Exception("Invalid request.");
    }
    return $loadDriver;
  }

  /**
   * Get all available loads where the leg to receiver segment has no driver (but can have truck and trailer).
   * @return object
   * @throws Exception
   */
  public function getAvailableLegLoads(): object {
    $companyId = getAuthAdminCompanyId();

    $adminCompanyDetails = AdminCompanyDetail::select('id', 'driver_can_select_loads_on_mobile')
      ->where('id', $companyId)
      ->first();

    if (!$adminCompanyDetails->driver_can_select_loads_on_mobile) {
      return collect();
    }

    $loads = Load::has('loadLegs')->where('admin_company_detail_id', $companyId)
      ->with([
        'customer',
        'loadDrivers:id,load_id,trailer_id',
        'loadDrivers.trailer:id,number',
        'loadLegs',
        'loadShippers',
        'loadReceivers',
      ])
      ->whereIn('status', [
        config('constant.status.load.open'),
        config('constant.status.load.assign'),
        config('constant.status.load.in_transit')
      ])
      ->whereDoesntHave('loadDrivers', function ($query) {
        $query->whereNotNull('from_leg')->whereNull('to_leg')->whereNotNull('driver_ids');
      })
      ->whereHas('loadShippers', function ($query) {
        $query->whereBetween(
          'shipping_date',
          [
            Carbon::now()->subMonth(1)->toDateString(),
            Carbon::now()->addMonth(1)->toDateString()
          ]
        );
      })
      ->get();
    $uniqueLegNames = $loads->pluck('loadLegs')->flatten()
      ->pluck('location_name')->values()->unique();

    $temp = [];
    foreach ($uniqueLegNames as $legName) {
      $temp[$legName] = [];
    }
    foreach ($loads as $oneLoad) {
      $legName = $oneLoad->loadLegs->first()->location_name;
      $temp[$legName][] = $oneLoad;
    }

    $result = [];
    foreach ($uniqueLegNames as $legName) {
      $result[] = [
        'legName' => $legName,
        'loads' => $temp[$legName],
      ];
    }

    return collect($result);
  }

  /**
   * Pickup load leg.
   * @param PickupLegLoadRequest $request
   * @return void
   * @throws Exception
   */
  public function pickupLegLoad(PickupLegLoadRequest $request) {
    $companyId = getAuthAdminCompanyId();
    $userId = Auth::id();
    $adminCompanyDetails = AdminCompanyDetail::select('id', 'driver_can_select_loads_on_mobile')
      ->where('id', $companyId)
      ->first();

    if (!$adminCompanyDetails->driver_can_select_loads_on_mobile) {
      // Driver should not even be able to see the loads. But just for security.
      throw new Exception("Not permitted to select loads on mobile.");
    }

    if ($adminCompanyDetails->driver_can_select_loads_on_mobile == 1) {
      /* Check if current driver still has not yet finished some loads. */
      $isActiveLoadFound = Load::where('admin_company_detail_id', $companyId)
        ->with([
          'loadDrivers:id,load_id,status',
          'loadDrivers.loadDriverUsers:user_id',
        ])
        ->whereIn('status', [
          config('constant.status.load.open'),
          config('constant.status.load.assign'),
          config('constant.status.load.in_transit')
        ])
        ->whereHas('loadDrivers', function ($sq1) use ($userId) {
          $sq1->whereNotIn('status', config('constant.status.driver_completed_load'))
            ->whereHas('loadDriverUsers', function ($sq2) use ($userId) {
              $sq2->where('user_id', $userId);
            });
        })
        // TODO: turn on this in the future when we have index or query the shippers table.
        /*->whereBetween('updated_at', [
          Carbon::now()->subMonth(2)->toDateTimeString(),
          Carbon::now()->addMinute()->toDateTimeString()
        ])*/
        ->exists();

      if ($isActiveLoadFound) {
        throw new Exception("Cannot pick up a new load before completing existing loads.");
      }
    }

    DB::transaction(function () use ($companyId, $request, $userId) {
      $load = Load::where('admin_company_detail_id', $companyId)
        ->where('id', $request->loadId)
        ->whereIn('status', [
          config('constant.status.load.open'),
          config('constant.status.load.assign'),
          config('constant.status.load.in_transit')
        ])
        ->with([
          'loadDrivers:id,load_id,from_leg,to_leg,driver_ids'
        ])
        // We may turn on this later if needed.
        // ->lockForUpdate()
        ->first();
      if (!$load) {
        throw new Exception("Invalid loadId.");
      }

      $loadDrivers = $load->loadDrivers;
      if ($loadDrivers->whereNotNull('from_leg')->whereNull('to_leg')->whereNotNull('driver_ids')->first()) {
        throw new Exception("This load already has a driver for the leg to receiver part.");
      }

      $loadDriverLegToReceiver = $loadDrivers->whereNotNull('from_leg')->whereNull('to_leg')->first();
      if (empty($loadDriverLegToReceiver)) {
        /* no row exist */
        $loadDriver = LoadDriver::create([
          'load_id' => $load->id,
          'driver_ids' => $userId,
          'from_leg' => 1,
          'status' => config('constant.status.load_driver.assign'),
        ]);

        LoadDriverUser::create([
          'load_driver_id' => $loadDriver->id,
          'user_id' => $userId
        ]);
      } else {
        /* If leg to receiver has no driver assigned. */
        $loadDriverLegToReceiver->driver_ids = $userId;
        $loadDriverLegToReceiver->status = config('constant.status.load_driver.assign');
        $loadDriverLegToReceiver->save();

        LoadDriverUser::create([
          'load_driver_id' => $loadDriverLegToReceiver->id,
          'user_id' => $userId
        ]);
      }

      if ($load->status == config('constant.status.load.open')) {
        $load->update([
          'status' => config('constant.status.load.assign')
        ]);
        $this->carrierSyncLoadStatusUpdate(
          $load,
          config('constant.status.load.assign')
        );
      }
    });
  }

  /*
  Engineering notes:
  getAvailableLegLoads(): not exist vs whereDoesntHave.
  The 1st version uses not exist, see below.
  ->where(function ($query) {
    $query->doesntHave('loadDrivers')
      ->orWhereHas('loadDrivers', function ($query2) {
        $query2->whereNotExists(
          function ($query3) {
            $query3->whereNotNull('from_leg')->whereNull('to_leg')->whereNotNull('driver_ids');
          }
        );
      });
  })
  However, this code is not correct! It translates into this SQL:
  not exists (
    select
      *
    from
      `load_drivers`
    where
      `loads`.`id` = `load_drivers`.`load_id`
      and `load_drivers`.`deleted_at` is null
  )
  or exists (
    select
      *
    from
      `load_drivers`
    where
      `loads`.`id` = `load_drivers`.`load_id`
      and not exists (
        select
          *
        where
          `from_leg` is not null
          and `to_leg` is null
          and `driver_ids` is not null
      )
      and `load_drivers`.`deleted_at` is null
  )
  The problem here is that it would return load_drivers rows where from_leg is
  null or to_leg is not null or driver_is is null! Therefore, the not exists
  statement inside where for load_drivers table applies only to one row
  instead of all rows. The correct solution is to put load_drivers query
  inside not exists statement by using whereDoesntHave().

  Below is the translated SQL for the correct code.
  select
    *
  from
    `loads`
  where
    exists (
      select
        *
      from
        `load_legs`
      where
        `loads`.`id` = `load_legs`.`load_id`
        and `load_legs`.`deleted_at` is null
    )
    and `admin_company_detail_id` = 36
    and `status` in (open, assign, in_transit)
    and not exists (
      select
        *
      from
        `load_drivers`
      where
        `loads`.`id` = `load_drivers`.`load_id`
        and `from_leg` is not null
        and `to_leg` is null
        and `driver_ids` is not null
        and `load_drivers`.`deleted_at` is null
    )
    and exists (
      select
        *
      from
        `load_shippers`
      where
        `loads`.`id` = `load_shippers`.`load_id`
        and `shipping_date` between 2022 - 05 - 04
        and 2022 - 07 - 04
        and `load_shippers`.`deleted_at` is null
    )
    and `loads`.`deleted_at` is null


  */

  /**
   * Get driver load file urls.
   * @return mixed
   * @throws Exception
   */
  public function getUploadUrls() {
    $response = [];
    $companyId = getAuthAdminCompanyId();
    $files = request('files');
    $loadDriverId = request('driverLoadId');
    $loadId = LoadDriver::where('id', $loadDriverId)
      ->whereHas('loadDetail', function ($query) use ($companyId) {
        $query->where('admin_company_detail_id', $companyId);
      })->value('load_id');
    if (empty($loadId)) {
      throw new Exception(config('response.driver_load.not_found'));
    }
    foreach ($files as $index => $file) {
      $ids = $companyId . '-' . $loadId . '-' . $loadDriverId;
      $index = (count($files) == 1) ? null : $index;
      $response[] = $this->generateFileNameAndPresignedUrl($ids, $file['type'], $file['extension'], $index);
    }
    return ['files' => $response];
  }

  /**
   * Get driver load File Upload URL.
   * @param $ids
   * @param $type
   * @param $extension
   * @param $index
   * @return array
   */
  private function generateFileNameAndPresignedUrl($ids, $type, $extension, $index): array {
    $fileName = 'load-' . $type . '-' . generateUniqueFileName($ids, $extension, $index);
    //pick up image, delivery image, and POD pdfs are being stored in "public/load/" folder and in load_images table
    return [
      'storageFileName' => $fileName,
      'url' => generatePresignedUrl($fileName, config('constant.s3.load_file')),
      'type' => $type
    ];
  }

  /**
   * Update Drop Trailer
   * @param $request
   * @return void|null
   * @throws Exception
   */
  public function dropTrailer($request) {
    $dropUpdate = [
      'drop_trailer_type' => array_search(
        $request->dropTrailerType,
        config('constant.load.dropHookTrailerType')
      ),
      'drop_trailer_id' => $request->trailerId,
    ];

    if (
      $request->dropTrailerType ==
      array_search('loaded', config('constant.load.dropHookTrailerType'))
    ) {
      $trailerLogType = array_search('dropLoadedTrailer', config('constant.logs.truckAndTrailerType'));
      $loadLogType = array_search('dropLoadedTrailer', config('constant.logs.load'));
    } else {
      $trailerLogType = array_search('dropEmptyTrailer', config('constant.logs.truckAndTrailerType'));
      $loadLogType =  array_search('dropEmptyTrailer', config('constant.logs.load'));
    }
    $this->dropHookTrailerUpdate($request, $dropUpdate, $loadLogType, $trailerLogType);
  }

  /**
   * Update Hook Trailer
   * @param $request
   * @return void|null
   */
  public function hookTrailer($request) {
    $hookUpdate = [
      'hook_trailer_type' => array_search(
        $request->hookTrailerType,
        config('constant.load.dropHookTrailerType')
      ),
      'hook_trailer_id' => $request->trailerId,
    ];

    if (
      $request->hookTrailerType ==
      array_search('loaded', config('constant.load.dropHookTrailerType'))
    ) {
      $trailerLogType = array_search('hookLoadedTrailer', config('constant.logs.truckAndTrailerType'));
      $loadLogType = array_search('hookLoadedTrailer', config('constant.logs.load'));
    } else {
      $trailerLogType = array_search('hookEmptyTrailer', config('constant.logs.truckAndTrailerType'));
      $loadLogType = array_search('hookEmptyTrailer', config('constant.logs.load'));
    }
    $this->dropHookTrailerUpdate($request, $hookUpdate, $loadLogType, $trailerLogType);
  }

  /**
   * Update Drop/Hook Trailer
   * @param $request
   * @param $updatedData
   * @param $loadLogType
   * @param $trailerLogType
   * @return void
   * @throws Exception
   */
  private function dropHookTrailerUpdate(
    $request,
    $updatedData,
    $loadLogType,
    $trailerLogType
  ): void {
    $relationship = '';
    switch ($request->stopType) {
      case config('constant.load.stopType.shipper'):
        $relationship = 'loadShippers';
        break;
      case config('constant.load.stopType.receiver'):
        $relationship = 'loadReceivers';
        break;
      case config('constant.load.stopType.leg'):
        $relationship = 'loadLegs';
        break;
      case config('constant.load.stopType.terminal'):
        $relationship = 'loadTerminals';
        break;
      default:
        throw new Exception(config('response.error'));
    }
    $load = Load::select('id', 'admin_company_detail_id')
      ->where('id', $request->loadId)
      ->where('admin_company_detail_id', getAuthAdminCompanyId())
      ->with([
        "{$relationship}:id,load_id,address,city,state,zip_code"
      ])
      ->whereHas('loadDrivers', function ($q) use ($request) {
        return $q->where('id', $request->loadDriverId)
          ->whereHas('driverAsUsers', function ($q1) {
            return $q1->where('id', Auth::id());
          });
      })
      ->whereHas($relationship, function ($q) use ($request, $relationship) {
        $q->where('id', $request->stopId);
        if ($relationship == 'loadTerminals') {
          $q->where('type', 1);
        }
      })
      ->first();
    if (empty($load)) {
      throw new Exception(config('response.error'));
    }

    $stop = $load->{$relationship}->where('id', $request->stopId)->first();
    $stop->update($updatedData);
    $stopLocation = printAddressHelper($stop->address, $stop->city, $stop->state, $stop->zip_code) ?? null;
    (new VehicleLogService())->logAssignVehicleToLoad(
      $request->loadId,
      $loadLogType,
      $trailerLogType,
      $request->loadDriverId,
      null,
      $request->trailerId,
      $stopLocation
    );
  }

  /**
   * Update load.
   * @param $request
   * @return void
   * @throws Exception
   */
  public function updateLoad($request) {
    DB::transaction(function () use ($request) {
      $companyId = getAuthAdminCompanyId();
      $userId = Auth::id();
      $loadId = $request->loadId;
      /* Check if current driver belongs to load. */
      $isDriverBelongsToLoad = Load::where('admin_company_detail_id', $companyId)
        ->where('id', $loadId)
        ->whereHas('loadDrivers', function ($innerQuery) use ($userId) {
          $innerQuery->where('id', request('loadDriverId'))
            ->whereHas('loadDriverUsers', function ($query) use ($userId) {
              $query->where('user_id', $userId);
            });
        })
        ->exists();
      if (!$isDriverBelongsToLoad) {
        throw new Exception(config('response.load.permission_denied'));
      }
      $loadStopType = $request->loadStopType ?? null;
      $shipperStopType = config('constant.load.stopType')['shipper'];
      if ($loadStopType == $shipperStopType) {
        $shipperId = $request->loadStopId;
        $loadShipper = LoadShipper::where('id', $shipperId)->where('load_id', $loadId)->first();
        if (empty($loadShipper)) {
          throw new Exception(config('response.shipper.notFound'));
        }
        $updateShipperData = [];
        if ($request->has('freightLength')) {
          $updateShipperData['freight_length'] = request('freightLength');
        }
        if ($request->has('freightWidth')) {
          $updateShipperData['freight_width'] = request('freightWidth');
        }
        if ($request->has('freightHeight')) {
          $updateShipperData['freight_height'] = request('freightHeight');
        }
        $loadShipper->fill($updateShipperData)->save();
      }
    });
  }

  /**
   * Driver update truck and/or trailer.
   * @return void
   * @throws Exception
   */
  public function updateTruckTrailer() {
    DB::transaction(function () {
      $userId = Auth::id();
      $loadDriver = LoadDriver::where('id', request('loadDriverId'))
        ->where('load_id', request('loadId'))
        ->whereHas('loadDriverUsers', function ($query) use ($userId) {
          $query->where('user_id', $userId);
        })->first();

      if (empty($loadDriver)) {
        throw new Exception(config('response.load.permission_denied'));
      }

      $newTruckId = request('truckId');
      $newTrailerId = request('trailerId');

      // Create Logs of Trailer and Truck on Current Truck and Trailer Update.
      $logTruckId = $loadDriver->truck_id != $newTruckId ? $newTruckId : null;
      $logTrailerId = $loadDriver->trailer_id != $newTrailerId ? $newTrailerId : null;

      $loadDriver->update([
        'truck_id' => $newTruckId,
        'trailer_id' => $newTrailerId,
        'external_trailer_number' => request('externalTrailerNumber') ?? null,
      ]);

      if ($logTruckId || $logTrailerId) {
        $loadLogType = array_search('driverAssignVehicleToLoad', config('constant.logs.load'));
        $logType = array_search('load', config('constant.logs.truckAndTrailerType'));
        (new VehicleLogService())->logAssignVehicleToLoad(
          $loadDriver->load_id,
          $loadLogType,
          $logType,
          $loadDriver->id,
          $logTruckId,
          $logTrailerId
        );
      }
    });
  }

  /**
   * Update Carrier Sync Load Status
   * @param $carrierLoad
   * @param $newStatus
   * @return void
   */
  private function carrierSyncLoadStatusUpdate($carrierLoad, $newStatus) {
    $getStatuses = [
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

      $syncedLoadCurrentStatus = $shipperBrokerLoad->status;

      $statusTransitions = [
        'assign'     => [config('constant.status.load.open')],
        'in_transit' => [config('constant.status.load.open'),  config('constant.status.load.assign')],
        'delivered'  => [
          config('constant.status.load.open'),
          config('constant.status.load.assign'),
          config('constant.status.load.in_transit')
        ],
      ];

      // This is to make sure we don’t accidentally change the status to a wrong value due
      // to dispatcher/driver wrong operations.
      // Example: We should only change the status to assign if the current status is open.
      if (in_array($syncedLoadCurrentStatus, $statusTransitions[$newStatus])) {
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
}
