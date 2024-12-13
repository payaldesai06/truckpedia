<?php

namespace App\Services;

use App\Models\AdminCompanyDetail;
use App\Models\Load;
use App\Models\Truck;
use Carbon\Carbon;
use Exception;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Arr;
use App\Models\User;

class CalendarService {

  public function getLoadsForCalendar() {
    $currentUser = User::select('id', 'role', 'admin_company_detail_id', 'tag_access')
      ->where('id', Auth::id())
      ->with(['tags:id'])
      ->first();
    $currentUserRole = $currentUser->role;
    $onlyAccessToTagLoads = $currentUser->tag_access == 1 ? true : false;
    $adminCompanyId = $currentUser->admin_company_detail_id;
    $currentUserTags = [];
    if (!empty($currentUser->tags)) {
      $currentUserTags = Arr::pluck($currentUser->tags->toArray(), 'id');
    }
    $loads = Load::select(
      'id',
      'admin_company_detail_id',
      'load_unique_id',
      'status',
      'equipment_type',
      'dispatcher_notes'
    )
      ->where('admin_company_detail_id', $adminCompanyId)
      ->when(
        request('direction') && request('direction') != 'all',
        function ($query) {
          $direction =
            request('direction') == config('constant.load.directions.inbound')
            ? 1 : 0;
          $query->where('loads.direction', $direction);
        }
      )
      ->whereIn('status', [
        config('constant.status.load.open'),
        config('constant.status.load.assign'),
        config('constant.status.load.in_transit'),
      ])
      ->with([
        'loadShippers:id,load_id,city,state,shipping_date,shipping_time,shipping_end_time,order',
        'loadReceivers:id,load_id,city,state,delivery_date,delivery_time,delivery_end_time,order',
        'loadDrivers:id,load_id,truck_id,trailer_id,from_leg,to_leg,status',
        'loadDrivers.truck:id,number',
        'loadDrivers.trailer:id,number',
        'loadDrivers.driverAsUsers:id',
        'loadDrivers.driverAsUsers.driverDetail:user_id,name',
        'loadLegs:id,load_id,city,state,date,time,end_time,order',
      ])
      // TODO: need to handle stop order.
      ->when(request('pickupOnly'), function ($query) {
        $query->whereHas('loadShippers', function ($innerQuery) {
          $innerQuery->whereBetween(
            'shipping_date',
            [request('startDate'), request('endDate')]
          );
        });
      })
      ->when(request('deliveryOnly'), function ($query) {
        $query->whereHas('loadReceivers', function ($innerQuery) {
          $innerQuery->whereBetween(
            'delivery_date',
            [request('startDate'), request('endDate')]
          );
        });
      })
      /*
      https://laravel.com/docs/9.x/eloquent-relationships#chaining-orwhere-clauses-after-relationships
      https://stackoverflow.com/questions/21930266/how-to-use-orwhere-in-wherehas-in-laravel
      Without the extra grouping $query->where(function ($query2) {,
      query will return ANY load (no matter it belongs to which company)
      that has date on the specified day.
      In conclusion, where() adds an extra layer of group for whereHas and orWhereHas,
      but when() does not. For example, the group works without when(), but
      does not work with when() but not $query2.

      I also did a test using LoadService.php. It seems that the extra
      $query2 here is still needed even when whereHas and orWhereHas are
      working on the same table. Check my comments there.
      */
      ->when(!request('pickupOnly') && !request('deliveryOnly')
        && request('startDate') == request('endDate'), function ($query) {
        $query->where(function ($query2) {
          $query2->whereHas('loadShippers', function ($innerQuery) {
            $innerQuery->where('shipping_date', request('startDate'));
          })->orWhereHas('loadReceivers', function ($innerQuery) {
            $innerQuery->where('delivery_date', request('startDate'));
          })->orWhereHas('loadLegs', function ($innerQuery) {
            $innerQuery->where('date', request('startDate'));
          });
        });
      })
      ->when(!request('pickupOnly') && !request('deliveryOnly')
        && request('startDate') != request('endDate'), function ($query) {
        $query->whereHas('loadShippers', function ($innerQuery) {
          $innerQuery->where('shipping_date', '<=', request('endDate'));
        })->whereHas('loadReceivers', function ($innerQuery) {
          $innerQuery->where('delivery_date', '>=', request('startDate'));
        });
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
      )
      ->get();

    $startDate = request('startDate');
    $endDate = request('endDate');
    $result = $loads->map(function ($load) use ($startDate, $endDate) {
      $loadShipper = $load->loadShippers->first();
      $loadReceiver = $load->loadReceivers->last();

      $originCity = $loadShipper->city ?? '';
      $originState = $loadShipper->state ?? '';
      $originDate = $loadShipper->shipping_date ?? '';
      $originStartTime = '';
      $originTime = '';

      $destinationCity = $loadReceiver->city ?? '';
      $destinationState = $loadReceiver->state ?? '';
      $destinationDate = $loadReceiver->delivery_date ?? '';
      $destinationStartTime = '';
      $destinationTime = '';

      if ($startDate == $endDate) {
        $this->generateTimes(
          $startDate,
          $originDate,
          $loadShipper->shipping_time,
          $loadShipper->shipping_end_time,
          $originStartTime,
          $originTime
        );

        $this->generateTimes(
          $startDate,
          $destinationDate,
          $loadReceiver->delivery_time,
          $loadReceiver->delivery_end_time,
          $destinationStartTime,
          $destinationTime
        );
      }

      $result = $load->loadDrivers->map(function ($loadDriver) use (
        $load,
        $originCity,
        $originState,
        $originDate,
        $originStartTime,
        $originTime,
        $destinationCity,
        $destinationState,
        $destinationDate,
        $destinationStartTime,
        $destinationTime,
        $startDate,
        $endDate
      ) {
        if (
          $loadDriver->status == config('constant.status.load_driver.handed_over')
        ) {
          return null;
        }

        if (count($load->loadLegs) > 0) {
          $loadLeg = $load->loadLegs->first();
          // shipper to leg
          if ($loadDriver->to_leg && $loadLeg->date < $startDate) {
            return null;
          }
          // leg to receiver
          if ($loadDriver->from_leg && $loadLeg->date > $endDate) {
            return null;
          }

          // origin is leg
          if ($loadDriver->from_leg) {
            $originCity = $loadLeg->city ?? '';
            $originState = $loadLeg->state ?? '';
            $originDate = $loadLeg->date ?? '';
            $originStartTime = '';
            $originTime = '';
            if ($startDate == $endDate) {
              $this->generateTimes(
                $startDate,
                $originDate,
                $loadLeg->time,
                $loadLeg->end_time,
                $originStartTime,
                $originTime
              );
            }
          }
          // destination is leg
          if ($loadDriver->to_leg) {
            $destinationCity = $loadLeg->city ?? '';
            $destinationState = $loadLeg->state ?? '';
            $destinationDate = $loadLeg->date ?? '';
            $destinationStartTime = '';
            $destinationTime = '';
            if ($startDate == $endDate) {
              $this->generateTimes(
                $startDate,
                $destinationDate,
                $loadLeg->time,
                $loadLeg->end_time,
                $destinationStartTime,
                $destinationTime
              );
            }
          }
        }

        return $this->oneLoadForCalendar(
          $load,
          $loadDriver,
          $originCity,
          $originState,
          $originDate,
          $originStartTime,
          $originTime,
          $destinationCity,
          $destinationState,
          $destinationDate,
          $destinationStartTime,
          $destinationTime
        );
      });

      // If users have not yet assigned any driver/truck/trailer,
      // or only driver has handed over.
      if (count($result->filter()) == 0) {
        $result = [$this->oneLoadForCalendar(
          $load,
          null,
          $originCity,
          $originState,
          $originDate,
          $originStartTime,
          $originTime,
          $destinationCity,
          $destinationState,
          $destinationDate,
          $destinationStartTime,
          $destinationTime
        )];
      }

      return $result;
    })->flatten(1)->filter()->sortBy(function ($item) {
      return $item['destination']['date'];
    }, SORT_REGULAR)->values();

    return $result;
  }

  private function oneLoadForCalendar(
    $load,
    $loadDriver,
    $originCity,
    $originState,
    $originDate,
    $originStartTime,
    $originTime,
    $destinationCity,
    $destinationState,
    $destinationDate,
    $destinationStartTime,
    $destinationTime
  ) {
    if ($loadDriver) {
      $driverName = implode(', ', $loadDriver->driverAsUsers
        ->pluck('driverDetail')->pluck('name')->toArray()) ?? '';
    } else {
      $driverName = '';
    }

    return [
      'load_id' => $load->id,
      'load_number' => $load->load_unique_id,
      'load_status' => $load->status,
      'truck_number' => $loadDriver->truck->number ?? '',
      'trailer_number' => $loadDriver->trailer->number ?? '',
      'driver_name' => $driverName,
      'equipment_type' => !empty($load->equipment_type) ? config(
        'constant.load.equipment_type'
      )[$load->equipment_type] : '',
      'dispatcher_notes' => $load->dispatcher_notes ?? '',
      'origin' => [
        'city' => $originCity,
        'state' => $originState,
        'date' => $originDate,
        'startTime' => $originStartTime,
        'time' => $originTime,
      ],
      'destination' => [
        'city' => $destinationCity,
        'state' => $destinationState,
        'date' => $destinationDate,
        'startTime' => $destinationStartTime,
        'time' => $destinationTime,
      ],
    ];
  }

  private function formatTime($time) {
    return $time ? Carbon::parse($time)->format('H:i') : '';
  }

  private function generateTimes(
    $selectedDate,
    $loadDate,
    $originalTime,
    $originalEndTime,
    &$startTime,
    &$time
  ) {
    if ($selectedDate == $loadDate) {
      $startTime = $this->formatTime($originalTime);
      $time = $this->formatTime($originalEndTime);
      if (!$time || $startTime == $time) {
        $time = $startTime;
        $startTime = '';
      }
    }
  }

  public function locateTrucksDrivers(): array {
    $currentUser = User::select('id', 'role', 'admin_company_detail_id', 'tag_access')
      ->where('id', Auth::id())
      ->with(['tags:id'])
      ->first();
    $currentUserRole = $currentUser->role;
    $onlyAccessToTagLoads = $currentUser->tag_access == 1 ? true : false;
    $adminCompanyId = $currentUser->admin_company_detail_id;
    $currentUserTags = [];
    if (!empty($currentUser->tags)) {
      $currentUserTags = Arr::pluck($currentUser->tags->toArray(), 'id');
    }
    $trucks = Truck::query()
      ->select('id', 'number', 'company_id')
      ->where('company_id', $adminCompanyId)
      ->where('status', config('constant.status.truck.active'))
      ->with([
        'loadDrivers' => function ($q) use ($currentUserRole, $currentUserTags, $onlyAccessToTagLoads) {
          return $q->select('id', 'load_id', 'truck_id', 'status')
            ->whereIn('status', [
              config('constant.status.driver_open_load.load_started'),
              config('constant.status.driver_open_load.from_arrived'),
              config('constant.status.driver_open_load.from_loaded'),
              config('constant.status.driver_open_load.to_arrived'),
              config('constant.status.driver_open_load.to_unloaded'),
            ])
            // to handle deleted load.
            ->whereHas('loadDetail', function ($qStatus) {
              $qStatus->whereIn('status', [
                // config('constant.status.load.open'),
                // config('constant.status.load.assign'),
                config('constant.status.load.in_transit'),
              ]);
            })
            ->when(
              !empty($currentUserTags),
              function ($qu) use ($currentUserRole, $currentUserTags, $onlyAccessToTagLoads) {
                $qu->whereHas('loadDetail', function ($query) use ($currentUserRole, $currentUserTags, $onlyAccessToTagLoads) {
                  $query->where(function ($query2) use ($currentUserTags, $currentUserRole, $onlyAccessToTagLoads) {
                    if ($currentUserRole == config('constant.roles.tag_operator')) {
                      $query2->whereIn('tag_id', $currentUserTags);
                    } else {
                      $query2->whereIn('tag_id', $currentUserTags);
                      if ($onlyAccessToTagLoads == false) {
                        $query2->orWhereNull('tag_id');
                      }
                    }
                  });
                });
              }
            )
            ->latest('id')->limit(1)->with([
              'loadDetail:id,load_unique_id',
              'loadDetail.loadShippers' => function ($q) {
                return $q->select('id', 'load_id', 'city', 'state')->first();
              },
              'loadDetail.loadReceivers' => function ($q) {
                return $q->select('id', 'load_id', 'city', 'state')
                  ->orderBy('delivery_date', 'desc')->first();
              },
            ]);
        },
      ])->get();

    $truckIds = $trucks->pluck('id')->toArray();

    $trackingHelper = new ExternalTrackingService();
    $locations = $trackingHelper->getTrucksLocation($adminCompanyId, $truckIds);

    $trucksResult = [];
    foreach ($trucks as $truck) {
      $load = $truck->loadDrivers[0]->loadDetail ?? '';
      $loadShipper = $load->loadShippers[0] ?? '';
      $loadReceiver = $load->loadReceivers[0] ?? '';

      $trucksResult[] = [
        "truck_id" => $truck->id,
        "truck_number" => $truck->number,
        "latitude" => $locations[$truck->id]['latitude'] ?? null,
        "longitude" => $locations[$truck->id]['longitude'] ?? null,
        "formatted_location" => $locations[$truck->id]['formattedLocation'] ?? null,
        "load_id" => $load->id ?? null,
        "load_number" => $load->load_unique_id ?? '',
        "origin" => !empty($loadShipper) ? $loadShipper
          ->city . ", " . $loadShipper->state : '',
        "destination" => !empty($loadReceiver) ? $loadReceiver
          ->city . ", " . $loadReceiver->state : '',
        "error" => $locations[$truck->id]['error'] ?? null,
      ];
    }

    $result = [
      'trucks' => [],
      'drivers' => [],
    ];
    $result['trucks'] = $trucksResult;

    $adminCompanyDetailsQuery = AdminCompanyDetail::select('id', 'show_driver_location_on_calendar_map')
      ->where('id', $adminCompanyId)->first();

    if ($adminCompanyDetailsQuery->show_driver_location_on_calendar_map) {
      $adminCompanyDetails = AdminCompanyDetail::select('id')
        ->where('id', $adminCompanyId)
        ->with([
          'drivers' => function ($query) {
            return $query->select('id', 'admin_company_detail_id')
              ->where('status', config('constant.status.driver.active'))
              ->whereHas('driverDetail', function ($innerQuery) {
                return $innerQuery
                  ->whereNotNull('latitude')
                  ->whereNotNull('longitude')
                  ->where('latitude', '<>', '')
                  ->where('longitude', '<>', '')
                  ->where('latitude', '<>', 0)
                  ->where('longitude', '<>', 0);
              });
          }
        ])->first();

      $driverDetails = $adminCompanyDetails->drivers->pluck('driverDetail') ?? [];
      $driversResult = [];
      foreach ($driverDetails as $oneDriver) {
        $driversResult[] = [
          'userId' => $oneDriver->user_id,
          'name' => $oneDriver->name,
          'latitude' => $oneDriver->latitude,
          'longitude' => $oneDriver->longitude
        ];
      }
      $result['drivers'] = $driversResult;
    }

    return $result;
  }

  public function getLoadDetails() {
    $adminCompanyId = $this->getAdminCompanyId();
    return Load::where('id', request('load_id'))
      ->where('admin_company_detail_id', $adminCompanyId)
      ->get();
  }

  private function getAdminCompanyId(): string {
    $adminCompanyId = Auth::user()->admin_company_detail_id ?? "";
    if (empty($adminCompanyId)) {
      throw new Exception(config('response.error'));
    }
    return $adminCompanyId;
  }

  public function locateTrucks() {
    return $this->locateTrucksDrivers()['trucks'];
  }
}
