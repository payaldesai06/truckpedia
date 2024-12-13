<?php

namespace App\Services;

use App\Mail\TripV2\TripV2Invoice;
use App\Models\DriverDetail;
use App\Models\Load;
use App\Models\TripsV2LoadTemplatePayDetails;
use App\Models\TripV2TemplatePayDetail;
use App\Services\Tax\W2FederalTaxHelper;
use Barryvdh\DomPDF\Facade as PDF;
use Exception;
use Illuminate\Support\Facades\DB;
use App\Models\TripV2;
use App\Models\TripV2Load;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Builder;
use App\Models\DriverPayTemplateCustomField;
use App\Models\TripV2CustomPaymentField;
use App\Models\TripV2Sheet;
use Illuminate\Support\Facades\Mail;
use App\Models\AdminCompanyDetail;
use App\Mail\TripV2\TripV2SummaryReport;
use Illuminate\Support\Facades\Log;
use App\Models\User;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Auth;

class TripV2Service {

  /**
   * Create trip V2.
   * @param $request
   * @return mixed
   * @throws Exception
   */
  public function createTripV2($request) {
    return DB::transaction(function () use ($request) {
      $companyId = getAuthAdminCompanyId();
      $loads = $request->loads;
      $loadIds = array_column($loads, 'loadId') ?? [];
      $userId = $request->driverUserId ?? null;
      $tagId = $request->ownerOperatorTagId ?? null;
      $truckId = $request->truckId ?? null;
      $sheets = $request->sheets ?? null;
      $type = $request->type ?? config('constant.trip.type.companyDriver');
      //check existing trip
      $existingTrip = TripV2::whereHas('tripLoads', function ($q) use ($loadIds) {
        $q->whereIn('load_id', $loadIds);
      })->where('company_id', $companyId);
      if (!empty($userId)) {
        $existingTrip->where('user_id', $userId);
      } else if (!empty($truckId)) {
        $existingTrip->where('truck_id', $truckId);
      } else if (!empty($tagId)) {
        $existingTrip->where('tag_id', $tagId);
      }
      $isExistingTrip = $existingTrip->count();
      if ($isExistingTrip > 0) {
        throw new Exception(config('response.trip.load_occupied'));
      }

      $tripLoadsToCreate = [];
      foreach ($loads as $load) {
        $tripLoadsToCreate[] = [
          'load_id' => $load['loadId'],
          'loaded_distance' => $load['loadedDistance'] ?? null,
          'empty_distance' => $load['emptyDistance'] ?? null,
        ];
      }
      //increment same company trip number with last trip
      $tripNumber = TripV2::where('company_id', $companyId)
        ->orderBy('id', 'desc')
        ->value('trip_number') + 1;

      $tripData = [
        'company_id' => $companyId,
        'trip_number' => $tripNumber,
        'status' => array_search('created', config('constant.trip.status')),
        'stops_start_date' => $request->stopsStartDate,
        'stops_end_date' => $request->stopsEndDate
      ];

      if (!empty($userId)) {
        $tripData['user_id'] = $userId;
      } else if (!empty($tagId)) {
        $tripData['tag_id'] = $tagId;
      } else if (!empty($truckId)) {
        $tripData['truck_id'] = $truckId;
      }

      if (!is_null($request->totalHours)) {
        $tripData = array_merge($tripData, ['total_hours' => $request->totalHours]);
      }

      if (!is_null($request->totalLoadedDistance)) {
        $tripData = array_merge($tripData, ['total_loaded_distance' => $request->totalLoadedDistance]);
      }

      if (!is_null($request->totalEmptyDistance)) {
        $tripData = array_merge($tripData, ['total_empty_distance' => $request->totalEmptyDistance]);
      }

      $trip = TripV2::create($tripData);
      $tripId = $trip->id;

      if ($type == config('constant.trip.type.companyDriver') && !empty($sheets)) {
        $requestSheetIds = array_column($sheets, 'sheetId');
        $sheets = TripV2Sheet::whereIn('id', $requestSheetIds)->whereNull('trip_id')
          ->update(['trip_id' => $tripId]);
      }
      $trip->tripLoads()->createMany($tripLoadsToCreate);

      if (!empty($userId)) {
        $this->copyLoadPayTemplateDetails($tripId, $loadIds, $userId);
      }
      return [
        'tripId' => $tripId,
        'tripNumber' => $trip->trip_number
      ];
    });
  }

  /**
   * copy trip load pay template to trip load pay template and delete trip load pay template
   * @param $tripId
   * @param $loadIds
   * @param $userId
   * @return void
   */
  private function copyLoadPayTemplateDetails($tripId, $loadIds, $userId): void {
    $tripsV2LoadTemplatePayDetails = TripsV2LoadTemplatePayDetails::whereIn('load_id', $loadIds)
      ->where('user_id', $userId)
      ->get();
    if ($tripsV2LoadTemplatePayDetails->isNotEmpty()) {
      $tripPayTemplateDetails = [];
      $carbonNow = Carbon::now()->toDateTimeString();
      foreach ($tripsV2LoadTemplatePayDetails as $detail) {
        $tripPayTemplateDetails[] = [
          'trip_id' => $tripId,
          'load_id' => $detail->load_id ?? null,
          'field_id' => $detail->field_id ?? null,
          'comment' => $detail->comment ?? null,
          'payment' => $detail->payment ?? null,
          'qty' => $detail->qty ?? null,
          'rate' => $detail->rate ?? null,
          'percentage_in_fractional' => $detail->percentage_in_fractional ?? null,
          'pay_start_after' => $detail->pay_start_after ?? null,
          'v1' => $detail->v1 ?? null,
          'v2' => $detail->v2 ?? null,
          'v3' => $detail->v3 ?? null,
          'created_at' => $carbonNow,
          'updated_at' => $carbonNow,
        ];
      }
      TripsV2LoadTemplatePayDetails::whereIn('load_id', $loadIds)
        ->where('user_id', $userId)
        ->delete();
      if (!empty($tripPayTemplateDetails)) {
        TripV2TemplatePayDetail::insert($tripPayTemplateDetails);
      }
    }
  }

  /**
   * Get loads for planning.
   * @param $request
   * @return mixed
   * @throws Exception
   */
  public function getLoadsForPlanning($request) {
    return DB::transaction(function () use ($request) {
      $startDate = $request->startDate;
      $endDate = $request->endDate;
      $type = !empty($request->type) ? $request->type : config('constant.trip.type.companyDriver');
      $adminCompanyId = getAuthAdminCompanyId();
      $filterDriverIds = $request->has('filters.driverIds')
        ? $request->filters['driverIds'] : [];
      $filterTagIds = $request->has('filters.tagIds')
        ? $request->filters['tagIds'] : [];
      $filterDispatcherIds = $request->has('filters.dispatcherIds')
        ? $request->filters['dispatcherIds'] : [];
      $filterDriverTagIds = $request->has('filters.driverTagIds')
        ? $request->filters['driverTagIds'] : [];
      $filterTruckIds = $request->has('filters.truckIds')
        ? $request->filters['truckIds'] : [];
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
      $withArrays = [
        'loadShippers:id,load_id,shipping_date,shipper_name,city,state,shipping_time,address,latitude,longitude,order',
        'loadReceivers:id,load_id,delivery_date,receiver_name,city,state,delivery_time,address,latitude,longitude,order',
        'loadLegs:id,load_id,location_name,date,city,state,time,address,latitude,longitude,order',
        'loadTerminals:id,load_id,type,date,name,city,state,time,address,latitude,longitude,order,segment_distance',
        'loadDrivers:id,load_id,status,from_leg,to_leg,truck_id,trailer_id,start_location_distance,empty_distance,loaded_distance',
        'loadDrivers.truck:id,number',
        'loadDrivers.trailer:id,number',
        'loadDrivers.loadDriverUsers:load_driver_id,user_id',
        'loadDrivers.loadDriverUsers.user:id,first_name,last_name',
        'loadDrivers.loadDriverUsers.user.driverDetail:user_id,driver_pay_types',
        // Old code below combined with $loadDriverUsers = $loadDrivers->pluck('loadDriverUsers')->flatten();
        // cause the code loading users and driver_details table each time per dirver.
        // Due to wrong code.
        //'loadDrivers.driverAsUsers:id,first_name,last_name',
        //'loadDrivers.driverAsUsers.driverDetail:user_id,driver_pay_types',
      ];
      if ($type == config('constant.trip.type.companyDriver') && !empty($filterDriverTagIds)) {
        $withArrays[] = 'loadDrivers.loadDriverUsers.user.tags:id';
      }

      $loads = Load::select('id', 'admin_company_detail_id', 'load_unique_id', 'refrence_id', 'status', 'total_amount', 'total_miles')
        ->where('admin_company_detail_id', $adminCompanyId)
        ->with($withArrays)
        // TODO: need to handle stop order.
        ->when($type == array_search('ownerOperator', config('constant.trip.type')), function ($query) {
          $query->whereHas('loadDrivers.driverAsUsers.tags', function ($innerQuery) {
            $innerQuery->select('id', 'business_name')->where('type', array_search('ownerOperator', config('constant.tags.type')));
          })->with(['loadDrivers.driverAsUsers.tags' => function ($query) {
            $query->select('id', 'business_name')->where('type', array_search('ownerOperator', config('constant.tags.type')));
          }]);
        })
        ->when(
          $type == config('constant.trip.type.companyDriver') && !empty($filterDriverTagIds),
          function ($query) use ($filterDriverTagIds) {
            $query->whereHas('loadDrivers.loadDriverUsers.user.tags', function ($innerQuery) use ($filterDriverTagIds) {
              $innerQuery->whereIn('tags.id', $filterDriverTagIds);
            });
          }
        )
        ->when(
          $type == config('constant.trip.type.truck') && !empty($filterTruckIds),
          function ($query) use ($filterTruckIds) {
            $query->whereHas('loadDrivers', function ($innerQuery) use ($filterTruckIds) {
              $innerQuery->whereIn('truck_id', $filterTruckIds);
            });
          }
        )
        ->has('loadDrivers')
        ->when($startDate && $endDate, function ($query) use ($startDate, $endDate) {
          $query->whereBetween('i_end_date', [$startDate, Carbon::parse($endDate)->addDays(7)->toDateString()])
            ->where('i_start_date', '<=', $endDate);
          /*
          $query->where(function ($query2) use ($startDate, $endDate) {
            $query2->whereHas('loadShippers', function ($innerQuery) use ($startDate, $endDate) {
              $innerQuery->where('shipping_date', '<=', $endDate);
            })->whereHas('loadReceivers', function ($innerQuery) use ($startDate, $endDate) {
              $innerQuery->whereBetween(
                'delivery_date',
                [$startDate, Carbon::parse($endDate)->addDays(7)->toDateString()]
              );
            });
          });
          */
        })
        ->when(!empty($filterDriverIds), function ($query) use ($filterDriverIds) {
          $query->whereHas('loadDrivers.driverAsUsers', function ($innerQuery) use ($filterDriverIds) {
            $innerQuery->whereIn('id', $filterDriverIds);
          });
        })
        ->when(!empty($filterTagIds), function ($query) use ($filterTagIds) {
          $query->whereIn('tag_id', $filterTagIds);
        })
        ->when(!empty($filterDispatcherIds), function ($query) use ($filterDispatcherIds) {
          $query->whereIn('dispatcher_id', $filterDispatcherIds);
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
        )->get();

      $availableLoads = [];

      //existing trips
      // Perhaps it's better to change the query main model to trip in the future, but not now.
      $existingTripLoads = TripV2Load::with('trip:id,company_id,user_id,tag_id,truck_id')
        ->select(['id', 'trip_id', 'load_id'])
        ->whereIn('load_id', $loads->pluck('id')->toArray())
        ->when($type == config('constant.trip.type.ownerOperator'), function ($query) {
          $query->whereHas('trip', function ($q) {
            $q->whereNotNull('tag_id');
          });
        })->when($type == config('constant.trip.type.companyDriver'), function ($query) {
          $query->whereHas('trip', function ($q) {
            $q->whereNotNull('user_id');
          });
        })->when($type == config('constant.trip.type.truck'), function ($query) {
          $query->whereHas('trip', function ($q) {
            $q->whereNotNull('truck_id');
          });
        })->get();

      foreach ($loads as $load) {
        $loadDrivers = $load->loadDrivers;
        // Given ->has('loadDrivers'), I think we can remove this if check.
        if ($loadDrivers->isEmpty()) {
          continue;
        }

        // You can have a load with 2 drivers but same truck, or a load with 3 drivers but 2 tags. How do you make sure you remove duplicates?
        /*
        Test cases to consider:
        A: No leg. 1 truck/driver/tag.
        B: No leg. 2+ same trucks or tags (drivers cannot).
        C: No leg. 2+ different trucks or drivers or tags.
        D: B mixed with C.
        E: With leg. shipper to leg segment has A,B,C,D.
        F: With leg. leg to receiver segment has A,B,C,D.
        G: With leg. some trucks or tags show up in both segments (drivers cannot).
        H: With leg. no trucks or tags show up in both segments.
        I: Any other cases?
        */
        if ($type == config('constant.trip.type.companyDriver')) {
          $loadDriverUsers = $loadDrivers->pluck('loadDriverUsers')->flatten();
          foreach ($loadDriverUsers as $driver) {
            $loadDriver = $loadDrivers->where('id', $driver->load_driver_id)->first();
            $driverId = $driver->user_id;
            if (!empty($filterDriverIds) && !in_array($driverId, $filterDriverIds)) {
              continue;
            }
            if (!empty($filterDriverTagIds) && empty(array_intersect($filterDriverTagIds, $driver->user->tags->pluck('id')->toArray()))) {
              continue;
            }
            if (!$existingTripLoads->where('load_id', $load->id)->where('trip.user_id', $driverId)->isEmpty() || (!empty($filterDriverIds) && !in_array($driverId, $filterDriverIds))) {
              continue;
            }
            $stops = $this->getLoadStopsByDriver($load, $driverId, $loadDriver);
            if (empty($stops)) {
              continue;
            }
            $availableLoad = $this->setLoadDataWithStops($load, $stops);
            $availableLoad['driverUserId'] = $driverId;
            $availableLoad['driverName'] = !empty($driver->user) ? userFullName($driver->user) : '';
            $availableLoad['driverIsHandedOver'] = ($loadDriver->status && $loadDriver->status == config('constant.status.load_driver.handed_over')) ? 1 : 0;
            $availableLoad['driverPayType'] = !empty($driver->user->driverDetail->driver_pay_types) ? config('constant.trip.defaultPayType')[$driver->user->driverDetail->driver_pay_types] : null;

            /*
            Using isset() because only loads after my FE code have this.
            The old app driver grab leg to receiver code does not calculate the miles.
            Note that loaded_distance and empty_distance are ALWAYS both set or unset,
            except the old app driver grab load code.

            A driver cannot present at both segments when leg exist. Here segments
            mean 1st stop to leg and leg to last stop.

            Update: with the intro of terminal, the only way to guarantee both loaded
            and empty miles are correct shall be using FE code and read from loadDriver.
            */
            if (isset($loadDriver->loaded_distance)) {
              $availableLoad['totalLoadedDistance'] = $loadDriver->loaded_distance;
              $availableLoad['emptyDistance'] = $loadDriver->empty_distance;
            }

            //get additional Assets Info
            $driverTruck = [];
            if (!empty($loadDriver->truck)) {
              $driverTruck[] = [
                'truckId' => $loadDriver->truck->id,
                'truckNumber' => $loadDriver->truck->number
              ];
            }
            $driverTrailer = [];
            if (!empty($loadDriver->trailer)) {
              $driverTrailer[] = [
                'trailerId' => $loadDriver->trailer->id,
                'trailerNumber' => $loadDriver->trailer->number
              ];
            }
            $availableLoad['additionalAssetsInfo'] = [
              'trucks' => $driverTruck,
              'trailers' => $driverTrailer
            ];
            $availableLoads[] = $availableLoad;
          }
        } else if ($type == config('constant.trip.type.truck')) {
          // Get unique truck ids.
          // One load for each unique truck id.
          // We need filter() here to remove null values.
          $uniqueTruckIds = $loadDrivers->pluck('truck_id')->filter()->unique();
          foreach ($uniqueTruckIds as $truckId) {
            if (!empty($filterTruckIds) && !in_array($truckId, $filterTruckIds)) {
              continue;
            }
            if (!$existingTripLoads->where('load_id', $load->id)->where('trip.truck_id', $truckId)->isEmpty()) {
              continue;
            }
            $stops = $this->getLoadStopsByTruck($load, $truckId);
            if (empty($stops)) {
              continue;
            }
            $availableLoad = $this->setLoadDataWithStops($load, $stops);
            $availableLoad['truckId'] = $truckId;

            $loadDriversOfTruck = $loadDrivers->where('truck_id', $truckId);
            $firstLoadDriverOfTruck = $loadDriversOfTruck->first();
            $availableLoad['truckNumber'] = $firstLoadDriverOfTruck->truck->number;

            $this->setLoadedEmptyDistancesForTruckAndOwnerOperator(
              $loadDriversOfTruck,
              $availableLoad
            );

            $availableLoads[] = $availableLoad;
          }
        } else if ($type == config('constant.trip.type.ownerOperator')) {
          // Get unique tag ids.
          // One load for each unique tag id.
          $tags = $load->loadDrivers->pluck('driverAsUsers')->flatten()->pluck('tags')->flatten()->filter()->unique('id') ?? collect();
          foreach ($tags as $tag) {
            if (!$existingTripLoads->where('load_id', $load->id)->where('trip.tag_id', $tag->id)->isEmpty()) {
              continue;
            }
            $stops = $this->getLoadStopsByOwnerOperatorTag($load, $tag->id);
            if (empty($stops)) {
              continue;
            }
            $availableLoad = $this->setLoadDataWithStops($load, $stops);
            $availableLoad['ownerOperatorTagId'] = $tag->id;
            $availableLoad['ownerOperatorTagName'] = $tag->business_name;
            //the sum(start_location_distance) of load_drivers rows who have one driver that belongs to this owner operator.
            $tagOperatorLoadDrivers = $load->loadDrivers->pluck('driverAsUsers')
              ->flatten()->pluck('tags')->flatten()->where('id', $tag->id)
              ->pluck('pivot')->pluck('user_id')->toArray() ?? collect();
            $loadDriverIds = $load->loadDrivers->pluck('loadDriverUsers')
              ->flatten()->whereIn('user_id', $tagOperatorLoadDrivers)
              ->pluck('load_driver_id')->toArray() ?? collect();

            $loadDriversOfTag = $load->loadDrivers
              ->whereIn('id', $loadDriverIds);

            $this->setLoadedEmptyDistancesForTruckAndOwnerOperator(
              $loadDriversOfTag,
              $availableLoad
            );

            $availableLoads[] = $availableLoad;
          }
        }
      }
      $ret['loads'] = $availableLoads;

      /*
      if ($type == config('constant.trip.type.companyDriver')) {
        $driverUserIds = array_unique(array_column($availableLoads, 'driverUserId'));
        $sheets = TripV2Sheet::whereIn('user_id', $driverUserIds)
          ->select(
            'id',
            'status',
            'user_id',
            'start_date',
            'start_time',
            'end_date',
            'end_time',
            'total_hours',
            'start_odometer',
            'end_odometer',
            'notes'
          )
          ->whereNull('trip_id')
          ->where(function ($query) use ($startDate, $endDate) {
            $query->whereBetween('start_date', [$startDate, $endDate])
              ->orWhereBetween('end_date', [$startDate, $endDate]);
          })->get();
        $ret['sheets'] = $this->mapTripSheet($sheets);
      }
      */
      return $ret;
    });
  }

  /**
   * Set the loaded and empty distance for truck and owner operator cases.
   * A truck can present at both segments when leg exist.
   * With leg: Even if truck present at both segments, loaded != load miles,
   * this is because we shall consider the distance from 1st stop to leg to
   * last stop. While load miles does not consider leg at all.
   * @param collection $loadDrivers
   * @param array &$availableLoad
   * @return void
   */
  private function setLoadedEmptyDistancesForTruckAndOwnerOperator(
    $loadDrivers,
    &$availableLoad
  ) {
    $firstLoadDriver = $loadDrivers->first();

    if (isset($firstLoadDriver->loaded_distance)) {
      $toLegLoadDriver = $loadDrivers->where('to_leg', 1)->first();
      $fromLegLoadDriver = $loadDrivers->where('from_leg', 1)->first();
      if (!empty($toLegLoadDriver) && !empty($fromLegLoadDriver)) {
        // We have to only take 1 from each segment.
        // However, it's possible that they have 2+ rows even for one segment.
        // For terminal's empty distance, of course we cannot take it twice.
        // For driver's start position, we might have to take the sum?
        // I will leave this for future, for example taking the max.
        $availableLoad['totalLoadedDistance'] = round($toLegLoadDriver->loaded_distance + $fromLegLoadDriver->loaded_distance, 4);
        $availableLoad['emptyDistance'] = round($toLegLoadDriver->empty_distance + $fromLegLoadDriver->empty_distance, 4);
      } else if (!empty($toLegLoadDriver)) {
        $availableLoad['totalLoadedDistance'] = $toLegLoadDriver->loaded_distance;
        $availableLoad['emptyDistance'] = $toLegLoadDriver->empty_distance;
      } else if (!empty($fromLegLoadDriver)) {
        $availableLoad['totalLoadedDistance'] = $fromLegLoadDriver->loaded_distance;
        $availableLoad['emptyDistance'] = $fromLegLoadDriver->empty_distance;
      } else { // No leg
        $availableLoad['totalLoadedDistance'] = $firstLoadDriver->loaded_distance;
        $availableLoad['emptyDistance'] = $firstLoadDriver->empty_distance;
      }
    }
  }

  /**
   * @param $load
   * @param $stops
   * @return array
   */
  private function setLoadDataWithStops($load, $stops): array {
    $stopsDateTimes = $this->getStopsDateTimes($stops);
    return [
      'loadId' => $load->id,
      'loadNumber' => $load->load_unique_id ?? null,
      'loadReference' => $load->refrence_id ?? null,
      'loadStatus' => $load->status ? config('constant.status.loadStatusFrontEnd')[$load->status] : null,
      'loadRate' => $load->total_amount ?? null,
      'totalLoadedDistance' => $load->total_miles ?? null,
      'emptyDistance' => 0,
      'stops' => $stops,
      'loadStartDate' => $stopsDateTimes['loadStartDate'] ?? null,
      'loadStartTime' => $stopsDateTimes['loadStartTime'] ?? null,
      'loadEndDate' => $stopsDateTimes['loadEndDate'] ?? null,
      'loadEndTime' => $stopsDateTimes['loadEndTime'] ?? null,
    ];
  }

  /**
   * @param array $stops
   * @return array
   */
  private function getStopsDateTimes(array $stops): array {
    $ret = [];
    if (empty($stops)) {
      return $ret;
    }
    $firstStop = $stops[0];
    $lastStop = $stops[count($stops) - 1];
    $ret['loadStartDate'] = $firstStop['date'];
    $ret['loadStartTime'] = $firstStop['time'];
    $ret['loadEndDate'] = $lastStop['date'];
    $ret['loadEndTime'] = $lastStop['time'];
    return $ret;
  }

  /**
   * Get Load Stop Details.
   * @param $load
   * @param $userId
   * @param $loadDriver
   * @return array
   * @throws Exception
   */
  private function getLoadStopsByDriver($load, $userId, $loadDriver = null): array {
    if (empty($loadDriver)) {
      $loadDriverUsers = $load->loadDrivers->pluck('loadDriverUsers')->flatten();
      $loadDriverUser = $loadDriverUsers->where('user_id', $userId)->first();
      $loadDriver = $load->loadDrivers->where('id', $loadDriverUser->load_driver_id)->first();
    }
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
   * Get load stops by truck.
   * @param $load
   * @param $truckId
   * @return array
   * @throws Exception
   */
  private function getLoadStopsByTruck($load, $truckId): array {
    $hasFirstStopToLeg = false;
    $hasLegToLastStop = false;
    if ($load->loadLegs->isNotEmpty()) {
      //check if load's 1st stop to leg segment’s or leg to last stop segment’s truck belong to truckId.
      $loadDrivers = $load->loadDrivers;
      $hasFirstStopToLeg = !$loadDrivers->where('truck_id', $truckId)
        ->where('to_leg', 1)->isEmpty();
      $hasLegToLastStop = !$loadDrivers->where('truck_id', $truckId)
        ->where('from_leg', 1)->isEmpty();
    }
    return $this->getLoadStopsHelper($load, $hasFirstStopToLeg, $hasLegToLastStop);
  }

  /**
   * Get Load Owner Operator Stop Details.
   * @param $load
   * @param $tagId
   * @return array
   * @throws Exception
   */
  private function getLoadStopsByOwnerOperatorTag($load, $tagId): array {
    $hasFirstStopToLeg = false;
    $hasLegToLastStop = false;
    if ($load->loadLegs->isNotEmpty()) {
      $loadDrivers = $load->loadDrivers->filter(function ($loadDriver) use ($tagId) {
        $loadDriver = $loadDriver->driverAsUsers->filter(function ($driverAsUser) use ($tagId) {
          $driverAsUser = $driverAsUser->tags->filter(function ($tag) use ($tagId) {
            return $tag->id == $tagId;
          });
          return $driverAsUser->isNotEmpty();
        });
        return $loadDriver->isNotEmpty();
      });
      $hasFirstStopToLeg = !$loadDrivers->where('to_leg', 1)->isEmpty();
      $hasLegToLastStop = !$loadDrivers->where('from_leg', 1)->isEmpty();
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
        $stops,
        $hasFirstStopToLeg,
        $hasLegToLastStop
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
    } else { // !$hasFirstStopToLeg && $hasLegToLastStop
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
      $stops[] = $this->setTripStopData(config('constant.trip.stop.type.shipper'), $loadShipper);
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
      $stops[] = $this->setTripStopData(config('constant.trip.stop.type.receiver'), $loadReceiver);
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
    &$stops,
    $hasFirstStopToLeg,
    $hasLegToLastStop
  ): array {
    foreach ($loadLegs as $loadLeg) {
      $stops[] = $this->setTripStopData(
        config('constant.trip.stop.type.leg'),
        $loadLeg,
        $hasFirstStopToLeg,
        $hasLegToLastStop
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
      $stops[] = $this->setTripStopData(
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
   * @param $hasFirstStopToLeg
   * @param $hasLegToLastStop
   * @return array
   * @throws Exception
   */
  private function setTripStopData(
    $type,
    $data,
    $hasFirstStopToLeg = false,
    $hasLegToLastStop = false
  ): array {
    switch ($type) {
      case config('constant.trip.stop.type.shipper'):
        $name = $data->shipper_name ?? null;
        $date = $data->shipping_date ?? null;
        $time = $data->shipping_time ? $data->shipping_time->format('H:i') : "";
        $driverArrivalDateTime = $data->arrived_local_datetime ?? null;
        $driverDepartureDateTime = $data->loaded_local_datetime ?? null;
        break;
      case config('constant.trip.stop.type.receiver'):
        $name = $data->receiver_name ?? null;
        $date = $data->delivery_date ?? null;
        $time = $data->delivery_time ? $data->delivery_time->format('H:i') : "";
        $driverArrivalDateTime = $data->arrived_local_datetime ?? null;
        $driverDepartureDateTime = $data->unloaded_local_datetime ?? null;
        break;
      case config('constant.trip.stop.type.leg'):
        $name = $data->location_name ?? null;
        $date = $data->date ?? null;
        $time = $data->time ? $data->time->format('H:i') : "";
        $driverArrivalDateTime = ($hasFirstStopToLeg ? $data->to_arrived_local_datetime : $data->from_arrived_local_datetime) ?? null;
        $driverDepartureDateTime = ($hasFirstStopToLeg ? $data->to_departed_local_datetime : $data->from_departed_local_datetime) ?? null;
        if ($hasFirstStopToLeg && $hasLegToLastStop) {
          $driverArrivalDateTime2 = $data->from_arrived_local_datetime ?? null;
          $driverDepartureDateTime2 = $data->from_departed_local_datetime ?? null;
        }
        break;
      case config('constant.trip.stop.type.terminal'):
        $name = $data->name ?? null;
        $date = $data->date ?? null;
        $time = $data->time ? $data->time->format('H:i') : "";
        $driverArrivalDateTime = null; // null for now
        $driverDepartureDateTime = null; // null for now
        break;
      default:
        throw new Exception("Wrong stop type.");
    }
    $stop = [
      'type' => $type,
      'stopId' => $data->id,
      'name' => $name,
      'date' => $date,
      'time' => $time,
      'address' => $data->address ?? null,
      'segmentDistance' => $data->segment_distance ?? null,
      'city' => $data->city ?? null,
      'state' => $data->state ?? null,
      'lat' => $data->latitude ?? null,
      'long' => $data->longitude ?? null,
      'driverArrivalDateTime' => $driverArrivalDateTime,
      'driverDepartureDateTime' => $driverDepartureDateTime,
      'order' => $data->order ?? null,
    ];
    if ($hasFirstStopToLeg && $hasLegToLastStop) {
      $stop['driverArrivalDateTime2'] = $driverArrivalDateTime2;
      $stop['driverDepartureDateTime2'] = $driverDepartureDateTime2;
    }
    return $stop;
  }

  /**
   * get trip V2.
   * @param $request
   * @return mixed
   * @throws Exception
   */
  public function getTripsV2($request) {
    $per_page = $request->pageSize ?? config('constant.pagination.pageSize');
    $timezone = getCompanyTimezone();
    return TripV2::select(
      'id',
      'trip_number',
      'user_id',
      'tag_id',
      'truck_id',
      'company_id',
      'status',
      'paycheck_approved_utc_datetime',
      'paycheck_approved_by_user_id',
      'stops_start_date',
      'stops_end_date',
      'created_at',
      'total_payment',
      'total_loaded_distance',
      'invoice_storage_file_name'
    )
      ->with(
        'tripLoads:trip_id,id,load_id',
        'user:id,first_name,last_name',
        'tag:id,business_name',
        'truck:id,number',
        'paycheckApprovedUser:id,first_name,last_name'
      )
      ->addSelect(DB::raw("'{$timezone}' as timezone"))
      ->where('company_id', getAuthAdminCompanyId())
      ->when($request->filled('filters.status'), function ($query) use ($request) {
        return $query->where('status', array_search($request->filters['status'], config('constant.trip.status')));
      })
      ->when(request()->filled('filters.accountPayableName'), function ($query) {
        $name = request('filters.accountPayableName');
        $query->where(function ($q) use ($name) {
          $q->whereHas('user', function ($q2) use ($name) {
            $q2->whereRaw(
              "concat(COALESCE(`first_name`,''), ' ', COALESCE(`last_name`,'')) like '%$name%' "
            );
          })->orWhereHas('tag', function ($q2) use ($name) {
            $q2->where("business_name", "like", "%$name%");
          })->orWhereHas('truck', function ($q2) use ($name) {
            $q2->where("number", "like", "%$name%");
          });
        });
      })
      ->when(request()->filled('filters.approvedByUserName'), function ($query) {
        $name = request('filters.approvedByUserName');
        return $query->whereHas('paycheckApprovedUser', function (Builder $q) use ($name) {
          return $q->whereRaw(
            "concat(COALESCE(`first_name`,''), ' ', COALESCE(`last_name`,'')) like '%$name%' "
          );
        });
      })
      ->when($request->filled('filters.tripNumber'), function ($query) use ($request) {
        return $query->where('trip_number', 'like', '%' . $request->filters['tripNumber'] . '%');
      })
      ->when($request->filled('filters.tripStartDate'), function ($query) use ($request) {
        return $query->where('stops_start_date', $request->filters['tripStartDate']);
      })
      ->when($request->filled('filters.tripEndDate'), function ($query) use ($request) {
        return $query->where('stops_end_date', $request->filters['tripEndDate']);
      })
      ->when($request->filled('filters.createdDate'), function ($query) use ($request, $timezone) {
        /* I showed in a meeting how to do this before in my mind.
        If input is 2023-03-28, then convert 2023-03-28 00:00:00 local time to UTC as a, and 2023-03-29 00:00:00 as b.
        Then find a <= created_at < b.
        */
        $utcStartDate = getLocalDateStartOfDayInUtc($request->filters['createdDate'], $timezone);
        $utcEndDate = getLocalDateEndOfDayInUtc($request->filters['createdDate'], $timezone);
        return $query->whereBetween('created_at', [$utcStartDate->format(config('constant.date_time_format')), $utcEndDate->format(config('constant.date_time_format'))]);
      })
      ->when($request->filled('filters.approvedDate'), function ($query) use ($request, $timezone) {
        $utcStartDate = getLocalDateStartOfDayInUtc($request->filters['approvedDate'], $timezone);
        $utcEndDate = getLocalDateEndOfDayInUtc($request->filters['approvedDate'], $timezone);
        return $query->whereBetween('paycheck_approved_utc_datetime', [$utcStartDate->format(config('constant.date_time_format')), $utcEndDate->format(config('constant.date_time_format'))]);
      })
      ->when(request()->filled('sortBy.field') && request()->filled('sortBy.order'), function ($query) use ($request) {
        if ($request->sortBy['field'] == array_search('approved_user_name', config('constant.trip.sortBy.field'))) {
          return $query->orderBy(function ($query) {
            $query->selectRaw(
              "concat(COALESCE(`first_name`,''), ' ', COALESCE(`last_name`,''))"
            )
              ->from('users')
              ->whereColumn('users.id', 'trips_v2.paycheck_approved_by_user_id');
          }, request('sortBy.order'));
        } else {
          return $query->orderBy(config('constant.trip.sortBy.field')[request('sortBy.field')], request('sortBy.order'));
        }
      }, function ($query) {
        return $query->orderBy('id', 'desc');
      })
      ->paginate($per_page);
  }

  /**
   * get trip by tripId.
   * @return array[]
   * @throws Exception
   */
  public function getTripById(): array {
    $response = [];
    $trip = TripV2::where('id', request('tripId'))
      ->where('company_id', getAuthAdminCompanyId())
      ->with([
        'files:id,trip_id,original_file_name,storage_file_name',
        'tripV2AdditionalCustomPayments:id,trip_id,field_id,payment',
        'tripV2TemplatePayDetails',
        'user:id,first_name,last_name',
        'tag:id,business_name',
        'tag.driverPayTemplateDetails',
        'tag.driverPayTemplateDetails.driverPayTemplateCustomField:id,target',
        'truck:id,number',
        'truck.tags' => function ($query) {
          $query->select('id', 'type')
            ->with([
              'driverPayTemplateDetails',
              'driverPayTemplateDetails.driverPayTemplateCustomField:id,target'
            ])
            ->whereHas('driverPayTemplateDetails')
            ->where('type', array_search('ownerOperator', config('constant.tags.type')));
        },
        'user.driverDetail:user_id,name,driver_pay_types,per_mail_charges,pay_per_stop_rate,pay_per_stop_start_after,detention_rate,detention_start_after,layover_rate,layover_start_after,hourly_rate,load_pay_percentage,load_pay_percentage_of,flat_pay_rate',
        'user.driverDetail.driverPayTemplateDetails',
        'user.driverDetail.driverPayTemplateDetails.driverPayTemplateCustomField',
        'tripLoads:trip_id,id,load_id,loaded_distance,empty_distance',
        'tripLoads.loadDetail:id,total_amount,refrence_id,load_unique_id,status,total_miles',
        'tripLoads.loadDetail.loadShippers:id,load_id,shipping_date,shipper_name,city,state,address,shipping_time,latitude,longitude,arrived_local_datetime,loaded_local_datetime,order',
        'tripLoads.loadDetail.loadReceivers:id,load_id,delivery_date,receiver_name,city,state,address,delivery_time,latitude,longitude,arrived_local_datetime,unloaded_local_datetime,order',
        'tripLoads.loadDetail.loadLegs:id,load_id,location_name,date,city,state,address,time,latitude,longitude,to_arrived_local_datetime,to_departed_local_datetime,from_arrived_local_datetime,from_departed_local_datetime,order',
        'tripLoads.loadDetail.loadTerminals:id,load_id,type,name,date,city,state,address,time,latitude,longitude,order,segment_distance',
        'tripLoads.loadDetail.loadCharge:id,load_id,hauling_fees,fuel_surcharge',
        'tripLoads.loadDetail.loadDrivers:id,load_id,status,from_leg,to_leg,truck_id',
        'tripLoads.loadDetail.loadDrivers.driverAsUsers:id,first_name,last_name',
        'tripV2Sheet:id,status,trip_id,user_id,start_date,start_time,end_date,' .
          'end_time,total_hours,start_odometer,end_odometer,notes',
        'tripLoads.loadDetail.loadDrivers.driverAsUsers.tags' => function ($query) {
          return $query->select('id')->where('type', array_search('ownerOperator', config('constant.tags.type')));
        }
      ])
      ->first();
    // TODO: need to handle stop order.
    if (empty($trip)) {
      throw new Exception(config('response.trip.not_found'));
    }
    if ($trip->status == array_search('created', config('constant.trip.status'))) {
      $driverPayTemplateService = new DriverPayTemplateService();
      if (!empty($trip->user_id)) {
        $driverDetail = $trip->user->driverDetail;
        if (!empty($driverDetail)) {
          $response['driverDefaultPayType'] = [
            "defaultPayType" => config('constant.trip.defaultPayType.' . $driverDetail->driver_pay_types),
            "perMileCharge" => $driverDetail->per_mail_charges,
            "payPerStopRate" => $driverDetail->pay_per_stop_rate,
            "payPerStopStartAfter" => $driverDetail->pay_per_stop_start_after,
            "detentionRate" => $driverDetail->detention_rate,
            "detentionStartAfter" => $driverDetail->detention_start_after,
            "layoverRate" => $driverDetail->layover_rate,
            "layoverStartAfter" => $driverDetail->layover_start_after,
            "hourlyRate" => $driverDetail->hourly_rate,
            "loadPayPercentage" => $driverDetail->load_pay_percentage,
            "loadPayPercentageOf" => $driverDetail->load_pay_percentage_of,
            "flatPayRate" => $driverDetail->flat_pay_rate,
          ];
          if ($driverDetail->driver_pay_types == config('constant.trip.defaultPayType.template')) {
            $driverPayTemplate = $driverPayTemplateService
              ->getModelTemplateHelper($driverDetail->driverPayTemplateDetails);
            $response['driverDefaultPayType']['driverPayTemplate'] = $driverPayTemplate;
          }
        }
      } else if (!empty($trip->tag_id)) {
        $response['driverDefaultPayType'] = [
          "defaultPayType" => config('constant.trip.defaultPayType.template'),
        ];
        $response['driverDefaultPayType']['driverPayTemplate'] =
          $driverPayTemplateService->getModelTemplateHelper(
            $trip->tag->driverPayTemplateDetails ?? []
          );
      } else if (!empty($trip->truck_id)) {
        $response['driverDefaultPayType'] = [
          "defaultPayType" => config('constant.trip.defaultPayType.template'),
        ];
        $response['driverDefaultPayType']['driverPayTemplate'] =
          $driverPayTemplateService->getModelTemplateHelper(
            $trip->truck->tags->first()->driverPayTemplateDetails ?? []
          );
      } else {
        throw new Exception('Trip created with error. Please contact ' . config('app.name') . '.');
      }
    }

    $additionalCustomPayments = $trip->tripV2AdditionalCustomPayments->map(function ($item) {
      return [
        "id" => $item->id,
        "fieldId" => $item->field_id,
        "payment" => $item->payment ?? null,
      ];
    }) ?? collect();

    $files = $trip->files->map(function ($file) {
      return [
        'fileId' => $file->id,
        'originalFileName' => $file->original_file_name,
        'url' => getImage($file->storage_file_name, config('constant.s3.tripFiles')) ?? ""
      ];
    }) ?? collect();

    $type = !empty($trip->tag_id) ? config('constant.trip.type.ownerOperator') : (!empty($trip->truck_id) ? config('constant.trip.type.truck') : config('constant.trip.type.companyDriver'));
    $driverPayType = !empty($trip->driver_pay_type) ? config('constant.trip.driver_pay_type')[$trip->driver_pay_type] : '';
    $response['trip'] = [
      "tripId" => $trip->id,
      "tripNumber" => $trip->trip_number,
      "status" => config('constant.trip.status')[$trip->status],
      "driverPayType" => $driverPayType,
      "payPercentage" => !is_null($trip->pay_percentage_in_fractional) ? 100 * $trip->pay_percentage_in_fractional : null,
      "payPercentageOf" => !is_null($trip->pay_percentage_of) ? config('constant.trip.percentage_type')[$trip->pay_percentage_of] : '',
      "payPercentageLoadAmount" => $trip->pay_percentage_load_amount,
      "hourlyRate" => $trip->hourly_rate,
      "totalHours" => $trip->total_hours,
      "loadedDistanceRate" => $trip->loaded_distance_rate,
      "totalLoadedDistance" => $trip->total_loaded_distance,
      "emptyDistanceRate" => $trip->empty_distance_rate,
      "totalEmptyDistance" => $trip->total_empty_distance,
      "stopRate" => $trip->stop_rate,
      "stopCount" => $trip->stop_count,
      "stopPayStartAfter" => $trip->stop_pay_start_after,
      "stopPayment" => $trip->stop_payment,
      "detentionRate" => $trip->detention_rate,
      "detentionInHours" => $trip->detention_in_hours,
      "detentionPayStartAfter" => $trip->detention_pay_start_after,
      "detentionPayment" => $trip->detention_payment,
      "layoverRate" => $trip->layover_rate,
      "layoverInHours" => $trip->layover_in_hours,
      "layoverPayStartAfter" => $trip->layover_pay_start_after,
      "layoverPayment" => $trip->layover_payment,
      "loadPayment" => $trip->load_payment,
      "reimbursement" => $trip->reimbursement,
      "additionalCustomPayments" => $additionalCustomPayments->isNotEmpty() ? $additionalCustomPayments : [],
      "totalPayment" => $trip->total_payment,
      "notes" => $trip->notes ?? '',
      "loads" => $this->getTripLoads($trip) ?? [],
      "files" => $files
    ];
    if ($type == config('constant.trip.type.ownerOperator')) {
      $response['trip']["ownerOperatorTagId"] = $trip->tag_id ?? null;
      $response['trip']["ownerOperatorTagName"] = !empty($trip->tag) ? $trip->tag->business_name : '';
    } else if ($type == config('constant.trip.type.truck')) {
      $response['trip']["truckId"] = $trip->truck_id ?? null;
      $response['trip']["truckNumber"] = !empty($trip->truck) ? $trip->truck->number : '';
    } else {
      $response['trip']["driverUserId"] = $trip->user_id ?? null;
      $response['trip']["driverName"] = !empty($trip->user) ? userFullName($trip->user) : '';
      $response['trip']['sheets'] = $this->mapTripSheet($trip->tripV2Sheet);
    }

    // For load details generated in load->billing tab, the trip's driver pay type is still null.
    if (!$driverPayType || $driverPayType == config('constant.trip.driver_pay_type')[5]) {
      $loadDetails = [];
      $tripDetails = [];
      foreach ($trip->tripV2TemplatePayDetails as $detail) {
        if (!empty($detail->load_id)) {
          $loadDetails[] = [
            'tripTemplatePayDetailId' => $detail->id ?? null,
            'loadId' => $detail->load_id ?? null,
            'fieldId' => $detail->field_id ?? null,
            'comment' => $detail->comment ?? null,
            'payment' => $detail->payment ?? null,
            'qty' => $detail->qty ?? null,
            'rate' => $detail->rate ?? null,
            'percentage' => !is_null($detail->percentage_in_fractional) ? number_format($detail->percentage_in_fractional * 100, 2, '.', '') : null,
            'payStartAfter' => (int)$detail->pay_start_after ?? null,
            'v1' => !is_null($detail->v1) ? round($detail->v1, 4) : null,
            'v2' => !is_null($detail->v2) ? round($detail->v2, 4) : null,
            'v3' => !is_null($detail->v3) ? round($detail->v3, 4) : null,
          ];
        } else {
          $tripDetails[] = [
            'tripTemplatePayDetailId' => $detail->id ?? null,
            'fieldId' => $detail->field_id ?? null,
            'comment' => $detail->comment ?? null,
            'payment' => $detail->payment ?? null,
            'qty' => $detail->qty ?? null,
            'rate' => $detail->rate ?? null,
            'percentage' => !is_null($detail->percentage_in_fractional) ? number_format($detail->percentage_in_fractional * 100, 2, '.', '') : null,
            'payStartAfter' => (int)$detail->pay_start_after ?? null,
          ];
        }
      }
      // If approved trip (same as before) or not approved yet but load details configured.
      // If we do not add this block, then loadDetails will always be returned as [] for
      // non-approved trip, causing template auto fill not working.
      if ($driverPayType || count($loadDetails)) {
        $response['trip']['payTemplateDetails'] = [
          'loadDetails' => $loadDetails,
          'tripDetails' => $tripDetails
        ];
      }
    }
    $response['type'] = $type;
    return $response;
  }

  /**
   * get Trip Loads data.
   * @param $trip
   * @return array
   * @throws Exception
   */
  private function getTripLoads($trip): array {
    $loads = $trip->tripLoads->pluck('loadDetail');
    $tripLoads = $trip->tripLoads;
    $getTripLoads = [];
    foreach ($loads as $key => $load) {
      // load is no longer available, like driver is removed from this load.
      if (!$load) {
        continue;
      }
      //check if trip's driver or truck is involved in load or not
      $truckId = $trip->truck_id ?? null;
      $userId = $trip->user_id ?? null;
      $tagId = $trip->tag_id ?? null;
      $loadDrivers = $load->loadDrivers;
      $stops = [];
      if ($truckId) {
        if ($loadDrivers->where('truck_id', $truckId)->count()) {
          $stops = $this->getLoadStopsByTruck($load, $truckId);
        }
      } else if ($userId) {
        $loadDriverUsers = $loadDrivers->pluck('loadDriverUsers')->flatten();
        if ($loadDriverUsers->where('user_id', $userId)->count()) {
          $stops = $this->getLoadStopsByDriver($load, $userId);
        }
      } else if ($tagId) {
        $driverAsUserTags = $loadDrivers->pluck('driverAsUsers')->flatten()->pluck('tags')->flatten()->unique('id') ?? collect();
        if ($driverAsUserTags->where('id', $tagId)->count()) {
          $stops = $this->getLoadStopsByOwnerOperatorTag($load, $tagId);
        }
      }
      if (empty($stops)) {
        continue;
      }

      // $stops = $this->sortStopsByOrder($stops);

      $stopsDateTimes = $this->getStopsDateTimes($stops);
      $getTripLoads[] = [
        'loadId' => $load->id,
        'loadNumber' => $load->load_unique_id,
        'loadReference' => $load->refrence_id ?? null,
        // TODO: we have loaded distance and empty distance below to distinguish
        // betweem them and for calculate miles. We might have to remove this
        // and switch to them later.
        'loadMiles' => $load->total_miles ?? null,
        'loadStatus' => $load->status ? config('constant.status.loadStatusFrontEnd')[$load->status] : '',
        'loadHaulingFees' => !is_null($load->loadCharge->hauling_fees) ? $load->loadCharge->hauling_fees : null,
        'loadFuelSurcharge' => !is_null($load->loadCharge->fuel_surcharge) ? $load->loadCharge->fuel_surcharge : null,
        'loadTotalRate' => $load->total_amount ?? null,
        'loadedDistance' => $tripLoads[$key]['loaded_distance'] ?? null,
        'emptyDistance' => $tripLoads[$key]['empty_distance'] ?? null,
        'stops' => $stops,
        'loadStartDate' => $stopsDateTimes['loadStartDate'] ?? null,
        'loadStartTime' => $stopsDateTimes['loadStartTime'] ?? null,
        'loadEndDate' => $stopsDateTimes['loadEndDate'] ?? null,
        'loadEndTime' => $stopsDateTimes['loadEndTime'] ?? null,
      ];
    }
    return $getTripLoads;
  }


  /**
   * Approve trip.
   * @param $request
   * @return mixed
   * @throws Exception
   */
  public function approveTripV2($request) {
    return DB::transaction(function () use ($request) {
      $tripId = $request->tripId;
      $companyId = getAuthAdminCompanyId();
      $trip = TripV2::where('id', $tripId)
        ->where('company_id', $companyId)
        ->with([
          // do not delete
          'tripV2AdditionalCustomPayments:id,trip_id,field_id,payment',
          'tripV2AdditionalCustomPayments.field:id,name',
          'tripV2TemplatePayDetails:id,trip_id',
          'user:id,first_name,last_name,email',
          'user.driverDetail' => function ($query) {
            $query->select(
              'id',
              'user_id',
              'tax_form',
              'tax_social_security',
              'tax_medicare',
              'pay_frequency',
              'filing_status',
              'withholding',
              'tax_federal_credits', // old code forgot this...
              'tax_federal_tax',
              'cc_emails'
            )->where('tax_form', 1);
          },
          'tag:id,email,business_name',
          'truck:id,number',
          'truck.tags' => function ($query) {
            $query->select('id', 'email', 'business_name')->where('type', array_search('ownerOperator', config('constant.tags.type')));
          },
          'company:id,email,phone_number,business_name,company_image,address,city,state,zipcode,timezone', // ,billing_cc_emails
          'tripLoads:trip_id,id,load_id', // ,loaded_distance,empty_distance
          'tripLoads.loadDetail:id,refrence_id,load_unique_id,total_miles',
          'tripLoads.loadDetail.loadShippers:id,load_id,shipping_date,city,state,order',
          'tripLoads.loadDetail.loadReceivers:id,load_id,delivery_date,city,state,order',
          'tripLoads.loadDetail.loadTerminals:id,load_id,type,date,city,state,order',
          'tripLoads.loadDetail.loadLegs:id,load_id,date,city,state,order',
          'tripLoads.loadDetail.loadDrivers:id,load_id,from_leg,to_leg,truck_id',
          'tripLoads.loadDetail.loadDrivers.driverAsUsers:id,first_name,last_name',
          'tripLoads.loadDetail.loadDrivers.driverAsUsers.tags' => function ($query) {
            return $query->select('id')->where('type', array_search('ownerOperator', config('constant.tags.type')));
          }
        ])
        ->first();

      $loadDriversNames = [];
      if (!empty($trip->tag_id) || !empty($trip->truck_id)) {
        foreach ($trip->tripLoads as $tripLoad) {
          foreach ($tripLoad->loadDetail->loadDrivers as $loadDrivers) {
            if (!empty($trip->truck_id) && $loadDrivers->truck_id == $trip->truck_id) {
              foreach ($loadDrivers->driverAsUsers as $driverDetail) {
                $loadDriversNames[$tripLoad->load_id][] = $driverDetail->first_name . ' ' . $driverDetail->last_name;
              }
            }
            if (!empty($trip->tag_id)) {
              foreach ($loadDrivers->driverAsUsers as $driverDetail) {
                $tags = $driverDetail->tags->pluck('id')->toArray();
                if (in_array($trip->tag_id, $tags)) {
                  $loadDriversNames[$tripLoad->load_id][] = $driverDetail->first_name . ' ' . $driverDetail->last_name;
                }
              }
            }
          }
        }
      }
      // TODO: need to handle stop order.
      if (empty($trip)) {
        throw new Exception(config('response.trip.not_found'));
      }
      $getValidatedData = $this->getValidatedData($request);
      $getValidatedData['status'] = array_search('approved', config('constant.trip.status'));
      $getValidatedData['paycheck_approved_utc_datetime'] = Carbon::now();
      $getValidatedData['paycheck_approved_by_user_id'] = auth()->id();

      //add additional payments
      $this->createOrUpdateAdditionalCustomPayments(
        $trip,
        $request->additionalCustomPayments ?? []
      );
      $loadDetails = [];
      $tripDetails = [];
      // It will only be saved for driver, so declaring it here is fine.
      $totalPaymentForTaxable = request('totalPayment') ?? null;
      if (
        $request['driverPayType'] == config('constant.trip.driver_pay_type')[5]
        && !empty($request->payTemplateDetails)
      ) {
        $existingDetails = $trip->tripV2TemplatePayDetails->pluck('id')->toArray();
        $driverPayTemplateFields = DriverPayTemplateCustomField::select(
          'id',
          'name',
          'type',
          'taxable'
        )->where('company_id', $companyId)->get();
        $driverPayTemplateTaxableFields = $driverPayTemplateFields->whereNull('taxable')->keyBy('id');

        $loadDetails = $request->payTemplateDetails['loadDetails'] ?? [];
        $tripDetails = $request->payTemplateDetails['tripDetails'] ?? [];

        $taxableDetails = array_merge(
          array_filter($loadDetails, fn ($fee) => $driverPayTemplateTaxableFields->has($fee['fieldId'])),
          array_filter($tripDetails, fn ($fee) => $driverPayTemplateTaxableFields->has($fee['fieldId']))
        );

        $totalPaymentForTaxable = array_sum(array_column($taxableDetails ?? [], 'payment'));

        $requestLoadIds = array_filter(array_column($loadDetails, 'tripTemplatePayDetailId')) ?? [];
        $requestTripIds = array_filter(array_column($tripDetails, 'tripTemplatePayDetailId')) ?? [];
        $needsToDelete = array_diff(
          $existingDetails,
          array_merge($requestLoadIds, $requestTripIds)
        );
        if (!empty($needsToDelete)) {
          $trip->tripV2TemplatePayDetails()->whereIn('id', $needsToDelete)->delete();
        }
        $detailsToCreate = [];
        if (!empty($loadDetails)) {
          (new DriverPayTemplateService())->checkLoadDetailsValidation(
            $loadDetails,
            $driverPayTemplateFields,
            true
          );
          $loadDetails = array_map(function ($detail) use ($driverPayTemplateFields, $trip) {
            $detail['fieldName'] = $driverPayTemplateFields
              ->where('id', $detail['fieldId'])->pluck('name')->first() ?? " ";
            $detail['loadNumber'] = $trip->tripLoads
              ->pluck('loadDetail')->where('id', $detail['loadId'])
              ->pluck('load_unique_id')->first() ?? ' ';
            return $detail;
          }, $loadDetails);
          $detailsToCreate = $this->getTemplateDetails(
            $trip,
            $loadDetails,
            $detailsToCreate
          );
        }
        if (!empty($tripDetails)) {
          $tripDetails = array_map(function ($detail) use ($driverPayTemplateFields) {
            $detail['fieldName'] = $driverPayTemplateFields
              ->where('id', $detail['fieldId'])->pluck('name')->first() ?? " ";
            return $detail;
          }, $tripDetails);
          $detailsToCreate = $this->getTemplateDetails(
            $trip,
            $tripDetails,
            $detailsToCreate
          );
        }
        if (!empty($detailsToCreate)) {
          $trip->tripV2TemplatePayDetails()->createMany($detailsToCreate);
        }
      }

      //Driver Trip V2 Tax
      if (!empty($trip->user) && !empty($trip->user->driverDetail)) {
        $getValidatedData = $this->getDriverTripV2Tax(
          $trip->user->driverDetail,
          $getValidatedData,
          $totalPaymentForTaxable
        );
      }
      $trip->fill($getValidatedData)->save();

      $trip = $trip->refresh();
      $descriptions = $this->getTripDescriptions($trip);
      $templateLoadDetails = $this->getTemplateLoadDetails($loadDetails) ?? [];
      $templateTripDetails = $this->getTemplateLoadDetails($tripDetails) ?? [];
      $filteredTripLoads = $this->getTripLoads($trip);
      // array_column() keeps null if the field value is null
      TripV2Load::where('trip_id', $trip->id)->whereNotIn('load_id', array_column($filteredTripLoads, 'loadId'))->delete();
      $tripLoadDetails = $this->getTripLoadsDetailsForPdf($filteredTripLoads);
      // For ownerOperator, send to tag's email && For truck, see if this truck has any tags who are owner operators, if so, send to all of them. If no, send email to admin company's email address.
      $toEmails = $ccEmails = [];
      $truckNumber = '';
      if (!empty($trip->tag_id)) {
        // This is owner operator
        $toEmails[] = $trip->tag->email ?? '';
        $toBusinessName = $trip->tag->business_name;
      } else if (!empty($trip->truck_id)) {
        $truckNumber = $trip->truck->number ?? '';
        // TODO: need more testing for truck and ownerOperator.
        $truckTags = $trip->truck->tags ?? collect();
        if ($truckTags->isNotEmpty()) {
          $ownerOperatorType = array_search('ownerOperator', config('constant.tags.type'));
          $truckOwnerOperatorTags = $truckTags->where('type', $ownerOperatorType);;
          if (count($truckOwnerOperatorTags) > 0) {
            $toEmails = $truckOwnerOperatorTags->pluck('email')->unique()->toArray() ?? [];
            $toBusinessName = implode(', ', $truckOwnerOperatorTags->pluck('business_name')->unique()->toArray()) ?? '';
          } else {
            $toEmails = $truckTags->pluck('email')->unique()->toArray() ?? [];
            $toBusinessName = implode(', ', $truckTags->pluck('business_name')->unique()->toArray()) ?? '';
          }
        }
        if (empty($toEmails)) {
          $toEmails[] = $trip->company->email ?? '';
        }
        if (empty($toBusinessName)) {
          $toBusinessName = $trip->truck->number ?? '';
        }
      } else {
        $toEmails[] = $trip->user->email ?? '';
        $ccEmails = $trip->user->driverDetail->cc_emails ?
          explode(',', $trip->user->driverDetail->cc_emails) : [];
        $toBusinessName = "{$trip->user->first_name} {$trip->user->last_name}";
      }

      $pdfUrl = $this->createTripInvoicePdf(
        $tripId,
        $companyId,
        $trip,
        $descriptions,
        $tripLoadDetails,
        $toBusinessName,
        $truckNumber,
        $toEmails,
        $templateLoadDetails,
        $templateTripDetails,
        $loadDriversNames
      );
      $trip->fill(['invoice_storage_file_name' => $pdfUrl])->save();
      $this->sendEmailOnTripApproveInvoiceRequested(
        $trip,
        array_filter($toEmails),
        $descriptions,
        $toBusinessName,
        $templateLoadDetails,
        $templateTripDetails,
        $ccEmails
      );
      return $trip;
    });
  }

  /**
   * Change trip v2 status.
   * @param $request
   * @return mixed
   * @throws Exception
   */
  public function changeTripV2Status($request) {
    return DB::transaction(function () use ($request) {
      $trip = TripV2::where('id', $request->tripId)
        ->where('company_id', getAuthAdminCompanyId())
        ->first();
      if (empty($trip)) {
        throw new Exception(config('response.trip.not_found'));
      }
      return $trip->fill([
        'status' => array_search($request->status, config('constant.trip.status'))
      ])->save();
    });
  }

  /**
   * Delete trip v2
   * @param $request
   * @return bool
   * @throws Exception
   */
  public function deleteTripV2($request): bool {
    $tripV2 = TripV2::where('id', $request->tripId)
      ->where('company_id', getAuthAdminCompanyId())
      ->first();
    if (!$tripV2) {
      throw new Exception(config('response.trip.not_found'));
    }
    DB::transaction(function () use ($tripV2) {
      $carbonNow = Carbon::now()->toDateTimeString();
      $tripV2->tripLoads()->update(['deleted_at' => $carbonNow]);
      $tripV2->update(['deleted_at' => $carbonNow]);
    });
    return true;
  }

  /**
   * Template Details to create
   * @param $trip
   * @param $details
   * @param $detailsToCreate
   * @return array
   */
  private function getTemplateDetails($trip, $details, &$detailsToCreate): array {
    foreach ($details as $detail) {
      $templateDetail = [
        'field_id' => $detail['fieldId'],
        'comment' => $detail['comment'] ?? null,
        'payment' => $detail['payment'],
        'qty' => $detail['qty'] ?? null,
        'rate' => $detail['rate'] ?? null,
        'percentage_in_fractional' => !is_null($detail['percentage'] ?? null) ?
          round($detail['percentage'] / 100, 4) : null,
        'pay_start_after' => $detail['payStartAfter'] ?? null,
        'v1' => $detail['v1'] ?? null,
        'v2' => $detail['v2'] ?? null,
        'v3' => $detail['v3'] ?? null,
      ];
      // This if is needed because trip detail does not have load_id.
      if (!empty($detail['loadId'])) {
        $templateDetail['load_id'] = $detail['loadId'];
      }
      if (!empty($detail['tripTemplatePayDetailId'])) {
        $trip->tripV2TemplatePayDetails()->where(
          'id',
          $detail['tripTemplatePayDetailId']
        )->update($templateDetail);
      } else {
        $detailsToCreate[] = $templateDetail;
      }
    }
    return $detailsToCreate;
  }

  /**
   * @param $loads
   * @return array
   */
  private function getTripLoadsDetailsForPdf($loads): array {
    $loadDetails = [];
    $dateFormat = config('constant.shortDateFormat');
    foreach ($loads as $load) {
      $loadShipper = current($load['stops']);
      $loadReceiver = last($load['stops']);
      $loadDetails[] = [
        'loadId' => $load['loadId'],
        'loadReference' => $load['loadReference'],
        'loadNumber' => $load['loadNumber'],
        'loadMiles' => $load['loadMiles'],
        'pickupCity' => $loadShipper['city'],
        'pickupState' => $loadShipper['state'],
        'pickupDate' => Carbon::parse($loadShipper['date'])->format($dateFormat),
        'deliveryCity' => $loadReceiver['city'],
        'deliveryState' => $loadReceiver['state'],
        'deliveryDate' => Carbon::parse($loadReceiver['date'])->format($dateFormat),
      ];
    }
    return $loadDetails;
  }

  /**
   * @param $trip
   * @return array
   */
  private function getTripDescriptions($trip): array {
    $descriptions = [];
    $loadPayment = convertToNumberFormat($trip->load_payment);
    switch ($trip->driver_pay_type) {
        // TODO not for 0330: we may need to add rate and load info in the next version.
      case array_search('hourly', config('constant.trip.driver_pay_type')):
        // add rate and hours in case needed.
        $key = 'Base Payment (' . $trip->total_hours . ' hours * $' . convertToNumberFormat($trip->hourly_rate) . ' per hour)';
        $descriptions[$key] = $loadPayment;
        break;
      case array_search('perMile', config('constant.trip.driver_pay_type')):
        // add rate and miles in case needed.
        $key = 'Base Payment (' . $trip->total_loaded_distance . ' miles * $' . convertToNumberFormat($trip->loaded_distance_rate) . ' per mile)';

        $calculatedStopCount = !empty($trip->stop_payment) ? $trip->stop_count - $trip->stop_pay_start_after : 0;
        $stopKey = ($calculatedStopCount > 0 && !empty($trip->stop_rate)) ? 'Stop Pay (' . $calculatedStopCount . ' stops * $' . convertToNumberFormat($trip->stop_rate) . ' pay rate)' : 'Stop Pay';

        $calculatedDetentionCount = !empty($trip->detention_payment) ? $trip->detention_in_hours - $trip->detention_pay_start_after : 0;
        $detentionKey = ($calculatedDetentionCount > 0 && !empty($trip->detention_rate)) ? 'Detention (' . $calculatedDetentionCount . ' hours * $' . convertToNumberFormat($trip->detention_rate) . ' pay rate)' : 'Detention';

        $calculatedLayoverCount = !empty($trip->layover_payment) ? $trip->layover_in_hours - $trip->layover_pay_start_after : 0;
        $layoverKey = ($calculatedLayoverCount > 0 && !empty($trip->layover_rate)) ? 'Layover (' . $calculatedLayoverCount . ' hours * $' . convertToNumberFormat($trip->layover_rate) . ' pay rate)' : 'Layover';

        $descriptions = [
          $key => $loadPayment,
          $stopKey => convertToNumberFormat($trip->stop_payment),
          $detentionKey => convertToNumberFormat($trip->detention_payment),
          $layoverKey => convertToNumberFormat($trip->layover_payment),
        ];
        break;
      case array_search('percentage', config('constant.trip.driver_pay_type')):
        // add % in case needed.
        $key = 'Base Payment (' . convertToNumberFormat($trip->pay_percentage_in_fractional * 100) . '% of $' . convertToNumberFormat($trip->pay_percentage_load_amount) . ')';
        $descriptions[$key] = $loadPayment;
        break;
      case array_search('template', config('constant.trip.driver_pay_type')):
        break;
      default:
        // for flat pay.
        $key = 'Base Payment (flat pay $' . $loadPayment . ')';
        $descriptions[$key] = $loadPayment;
        break;
    }
    $descriptions["Reimbursement"] = convertToNumberFormat($trip->reimbursement);

    if (!empty($trip->tripV2AdditionalCustomPayments)) {
      foreach ($trip->tripV2AdditionalCustomPayments as $payment) {
        $descriptions[$payment->field->name] = convertToNumberFormat($payment->payment);
      }
    }
    return array_filter($descriptions, function ($value) {
      return $value != 0;
    });
  }

  /**
   * @param $loadDetails
   * @return array
   */
  private function getTemplateLoadDetails($loadDetails): array {
    $loadTemplateDetails = [];
    foreach ($loadDetails as $row) {
      $loadId = $row['loadId'] ?? null;
      $description = $row['fieldName'];
      if (!empty($row['comment'])) {
        $description = $description . ' (' . $row['comment'] . ')';
      }
      if (!empty($loadId)) {
        $loadTemplateDetails[$loadId][] = [
          'loadNumber' => $row['loadNumber'],
          'description' => $description,
          'payment' => $row['payment'],
        ];
      } else {
        $loadTemplateDetails[] = [
          'description' => $description,
          'payment' => $row['payment'],
        ];
      }
    }
    return $loadTemplateDetails;
  }

  /**
   * @param $trip
   * @param $emails
   * @param $descriptions
   * @param $toBusinessName
   * @param $templateLoadDetails
   * @param $templateTripDetails
   * @return void
   */
  private function sendEmailOnTripApproveInvoiceRequested(
    $trip,
    $emails,
    $descriptions,
    $toBusinessName,
    $templateLoadDetails,
    $templateTripDetails,
    $ccEmails
  ) {
    Mail::queue(new TripV2Invoice(
      $trip,
      $emails,
      $descriptions,
      $toBusinessName,
      $templateLoadDetails,
      $templateTripDetails,
      $ccEmails
    ));
  }

  /**
   * Make pdf file save in AWS s3 and return pdf file name
   * @param $tripId
   * @param $companyId
   * @param $trip
   * @param $descriptions
   * @param $tripLoadDetails
   * @param $toBusinessName
   * @param $toEmails
   * @param $templateLoadDetails
   * @param $templateTripDetails
   * @param $loadDriversNames
   * @return string
   * @throws Exception
   */
  private function createTripInvoicePdf(
    $tripId,
    $companyId,
    $trip,
    $descriptions,
    $tripLoadDetails,
    $toBusinessName,
    $truckNumber,
    $toEmails,
    $templateLoadDetails,
    $templateTripDetails,
    $loadDriversNames
  ) {
    $toEmails = $toEmails ? implode(', ', $toEmails) : '';
    $S3Folder = config('constant.s3.tripInvoices');
    $PDFFileName = 'tripInvoice-' . generateUniqueFileName($companyId, 'pdf', $tripId);
    $invoiceFilePath = "{$S3Folder}{$PDFFileName}";
    $totalMiles = array_sum(array_column($tripLoadDetails, "loadMiles")) ?? 0;
    /*
    TODO: change driverYTD to accountPayableYTD, change function name and variable name.
    */
    $driverYTD = $this->getDriverYTD($trip);

    if (!empty($tripLoadDetails)) {
      foreach ($tripLoadDetails as $key => $details) {
        $title = implode(', ', [
          '#' . $details['loadReference'], $details['pickupCity'],
          $details['pickupState'] . ' @ ' . substr($details['pickupDate'], 0, 5), $details['deliveryCity'],
          $details['deliveryState'] . ' @ ' . substr($details['deliveryDate'], 0, 5)
        ]);

        if (!empty($loadDriversNames) && !empty($loadDriversNames[$details['loadId']])) {
          $title .=  ', ' . implode(', ', $loadDriversNames[$details['loadId']]);
        }
        $details['loadTitle'] = $title;
        $tripLoadDetails[$details['loadId']] = $details;
        unset($tripLoadDetails[$key]);
      }
    }
    $pdf = PDF::loadView('TripV2.tripPdfInvoice', [
      'trip' => $trip,
      'descriptions' => $descriptions, 'loadDetails' => $tripLoadDetails,
      'totalMiles' => $totalMiles,
      'toBusinessName' => $toBusinessName,
      'truckNumber' => $truckNumber,
      'toEmails' => $toEmails,
      'templateLoadDetails' => $templateLoadDetails,
      'templateTripDetails' => $templateTripDetails,
      'driverYTD' => $driverYTD,
      'loadDriversNames' => $loadDriversNames,
    ])->setPaper('letter', 'portrait');
    uploadFileToS3($invoiceFilePath, $pdf->output());
    return $PDFFileName;
  }

  /**
   * Validated request data to create trailer.
   * @param $request
   * @return array
   */
  private function getValidatedData($request): array {
    $ret = [
      'driver_pay_type' => request('driverPayType') ? array_search(request('driverPayType'), config('constant.trip.driver_pay_type')) : null,
      'pay_percentage_in_fractional' => request('payPercentageDetails.payPercentage') ? (request('payPercentageDetails.payPercentage') / 100) : null,
      'pay_percentage_of' => request('payPercentageDetails.payPercentageOf') ? array_search(request('payPercentageDetails.payPercentageOf'), config('constant.trip.percentage_type')) : null,
      'pay_percentage_load_amount' => request('payPercentageDetails.payPercentageLoadAmount') ?? null,
      'hourly_rate' => request('payHourlyDetails.hourlyRate') ?? null,
      'loaded_distance_rate' => request('payMileDetails.loadedDistanceRate') ?? null,
      'empty_distance_rate' => request('payMileDetails.emptyDistanceRate') ?? null,
      'stop_rate' => request('payMileDetails.stopRate') ?? null,
      'stop_count' => request('payMileDetails.stopCount') ?? null,
      'stop_pay_start_after' => request('payMileDetails.stopPayStartAfter') ?? null,
      'stop_payment' => request('payMileDetails.stopPayment') ?? null,
      'detention_rate' => request('payMileDetails.detentionRate') ?? null,
      'detention_in_hours' => request('payMileDetails.detentionInHours') ?? null,
      'detention_pay_start_after' => request('payMileDetails.detentionPayStartAfter') ?? null,
      'detention_payment' => request('payMileDetails.detentionPayment') ?? null,
      'layover_rate' => request('payMileDetails.layoverRate') ?? null,
      'layover_in_hours' => request('payMileDetails.layoverInHours') ?? null,
      'layover_pay_start_after' => request('payMileDetails.layoverPayStartAfter') ?? null,
      'layover_payment' => request('payMileDetails.layoverPayment') ?? null,
      'load_payment' => request('loadPayment') ?? null,
      'reimbursement' => request('reimbursement') ?? null,
      'total_payment' => request('totalPayment') ?? null,
      'net_payment' => request('totalPayment') ?? null,
      'notes' => request('notes') ?? null
    ];
    if ($request->has('payHourlyDetails.totalHours')) {
      $ret['total_hours'] = request('payHourlyDetails.totalHours') ?? null;
    }
    if ($request->has('payMileDetails.totalLoadedDistance')) {
      $ret['total_loaded_distance'] = request('payMileDetails.totalLoadedDistance') ?? null;
    }
    if ($request->has('payMileDetails.totalEmptyDistance')) {
      $ret['total_empty_distance'] = request('payMileDetails.totalEmptyDistance') ?? null;
    }
    return $ret;
  }


  /**
   * Create trip custom payment field.
   * @param $request
   * @return array
   * @throws Exception
   */
  public function createTripV2CustomPaymentField($request): array {
    $fieldData = ['company_id' => getAuthAdminCompanyId(), 'name' => $request->name, 'description' => $request->description ?? null];
    $field = TripV2CustomPaymentField::create($fieldData);
    return [
      'fieldId' => $field->id
    ];
  }

  /**
   * Get trip custom payment fields.
   * @return array
   * @throws Exception
   */
  public function getTripV2CustomPaymentFields(): array {
    $fields = TripV2CustomPaymentField::where('company_id', getAuthAdminCompanyId())->select('id as fieldId', 'name', 'description')->get();
    return ['fields' => $fields];
  }

  /**
   * create or update additional custom payments
   * @param $trip
   * @param $requestAdditionalCustomPayments
   * @return void
   */
  private function createOrUpdateAdditionalCustomPayments(
    $trip,
    $requestAdditionalCustomPayments
  ): void {
    $existingIds = $trip->tripV2AdditionalCustomPayments->pluck('id')->toArray() ?? [];
    $requestIds = array_column($requestAdditionalCustomPayments, 'customPaymentId') ?? [];
    $needsToDeleteOptions = array_diff($existingIds, $requestIds);
    if (!empty($needsToDeleteOptions)) {
      $trip->tripV2AdditionalCustomPayments()
        ->whereIn('id', $needsToDeleteOptions)->delete();
    }
    $requestAdditionalCustomPayments = collect($requestAdditionalCustomPayments);
    $createCustomPayments = [];
    foreach ($requestAdditionalCustomPayments as $payment) {
      $data = ['field_id' => $payment['fieldId'], 'payment' => $payment['payment']];
      if (empty($payment['customPaymentId'])) {
        $createCustomPayments[] = $data;
      } else {
        $trip->tripV2AdditionalCustomPayments()->where('id', $payment['customPaymentId'])
          ->update($data);
      }
    }
    $trip->tripV2AdditionalCustomPayments()->createMany($createCustomPayments);
  }

  /**
   * Map Trip Sheet Data
   * @param $sheets
   * @return array
   */
  private function mapTripSheet($sheets) {
    return $sheets->map(function ($sheet) {
      return [
        'sheetId' => $sheet->id,
        'driverUserId' => $sheet->user_id ?? null,
        'startDate' => $sheet->start_date ?? null,
        'startTime' => $sheet->start_time ?? null,
        'endDate' => $sheet->end_date ?? null,
        'endTime' => $sheet->end_time ?? null,
        'totalHours' => $sheet->total_hours ?? null,
        'startOdometer' => $sheet->start_odometer ?? null,
        'endOdometer' => $sheet->end_odometer ?? null,
        'notes' => $sheet->notes ?? null,
        'status' => config('constant.status.trip_sheets')[$sheet->status] ?? null,
      ];
    });
  }

  /**
   * Create Trip Sheet
   * @param $request
   * @return array
   * @throws Exception
   */
  public function createTripSheet($request): array {
    $userId = auth()->id();
    $status = array_search('started', config('constant.status.trip_sheets'));

    if (TripV2Sheet::where('user_id', $userId)->where('status', $status)->exists()) {
      throw new Exception(config('response.trip_sheet.trip_start_exist'));
    }

    $createTripSheet = TripV2Sheet::create([
      'company_id' => getAuthAdminCompanyId(),
      'user_id' => $userId,
      'status' => $status,
      'start_date' => $request->startDate,
      'start_time' => $request->startTime,
      'start_odometer' => $request->startOdometer ?? null,
      'notes' => $request->notes ?? null,
    ]);

    return [
      'id' => $createTripSheet->id
    ];
  }

  /**
   * End Trip Sheet
   * @param $request
   * @return bool
   */
  public function endTripSheet($request): bool {
    return TripV2Sheet::where('id', $request->sheetId)->update([
      'status' => array_search('ended', config('constant.status.trip_sheets')),
      'start_date' => $request->startDate,
      'start_time' => $request->startTime,
      'end_date' => $request->endDate,
      'end_time' => $request->endTime,
      'total_hours' => $request->totalHours,
      'start_odometer' => $request->startOdometer ?? null,
      'end_odometer' => $request->endOdometer ?? null,
      'notes' => $request->notes ?? null
    ]);
  }

  /**
   * Get Trip Sheet Lists
   * @param $request
   * @return mixed
   */
  public function getTripSheetList($request) {
    return TripV2Sheet::where('user_id', auth()->id())
      ->select(
        'id',
        'status',
        'start_date',
        'start_time',
        'end_date',
        'end_time',
        'total_hours',
        'start_odometer',
        'end_odometer',
        'notes'
      )
      ->orderBy('id', 'desc')
      ->paginate($request->pageSize ?? config('constant.pagination.pageSize'));
  }

  /* Get driver trip v2 tax.
   * @param $driver
   * @param $getValidatedData
   * $param $taxableTotalPayment
   * @return array
   * @throws Exception
   */
  private function getDriverTripV2Tax($driver, &$getValidatedData, $taxableTotalPayment) {
    $taxSocialSecurity = $taxMedicare = $taxFederal = 0;
    $driverTaxSocialSecurity = $driver->tax_social_security ?? false;
    if ($driverTaxSocialSecurity) {
      //tax_social_security = round(total_payment * 0.062, 2) (6.2%)
      $taxSocialSecurity = round(($taxableTotalPayment * 0.062), 2);
      $getValidatedData['tax_social_security'] = $taxSocialSecurity;
    }
    $driverTaxMedicare = $driver->tax_medicare ?? false;
    if ($driverTaxMedicare) {
      //tax_medicare = round(total_payment * 0.0145, 2) (1.45%)
      $taxMedicare = round(($taxableTotalPayment * 0.0145), 2);
      $getValidatedData['tax_medicare'] = $taxMedicare;
    }
    $driverFederalTax = $driver->tax_federal_tax ?? false;
    if ($driverFederalTax) {
      $w2FederalTaxHelper = app(W2FederalTaxHelper::class);
      // Be careful!!!
      // We cannot pass trip here, because for a new trip that was not approved before,
      // trip->total_payment is null! For approved trip, the value is also old value!
      $taxFederal = $w2FederalTaxHelper->calculateTripFederalTax(
        $taxableTotalPayment,
        $driver
      );
      $getValidatedData['tax_federal'] = $taxFederal;
    }

    $getValidatedData['net_payment'] = round(request('totalPayment') - $taxFederal - $taxSocialSecurity
      - $taxMedicare, 2);

    return $getValidatedData;
  }

  /**
   * Get driver YTD.
   * @param $trip
   * @return array
   * @throws Exception
   */
  private function getDriverYTD($trip) {
    $data = [];
    $companyId = getAuthAdminCompanyId();
    $toDate = Carbon::now();
    $fromDate = Carbon::now()->setTimezone(getCompanyTimezone())->startOfYear()->setTimezone('utc'); //first date of current year
    $userId = $trip->user_id ?? null;
    $truckId = $trip->truck_id ?? null;
    $tagId = $trip->tag_id ?? null;
    $tripStatuses = [
      array_search('approved', config('constant.trip.status')),
      array_search('paid', config('constant.trip.status'))
    ];
    $trips = TripV2::select([
      'user_id',
      'truck_id',
      'tag_id',
      'company_id',
      'total_payment',
      'tax_social_security',
      'tax_medicare',
      'net_payment',
      'paycheck_approved_utc_datetime',
      'status',
      'tax_federal'
    ])
      ->where('company_id', $companyId)
      ->whereIn('status', $tripStatuses)
      ->whereBetween('paycheck_approved_utc_datetime', [$fromDate, $toDate]);
    //check current trip's driver/truck/owner operator
    if (!empty($userId)) {
      $trips->where('user_id', $userId);
    } else if (!empty($truckId)) {
      $trips->where('truck_id', $truckId);
    } else if (!empty($tagId)) {
      $trips->where('tag_id', $tagId);
    }
    $trips = $trips->get();
    $data['total_payment'] = $trips->sum('total_payment');
    if (!empty($userId)) {
      $data['tax_social_security'] = $trips->sum('tax_social_security');
      $data['tax_medicare'] = $trips->sum('tax_medicare');
      $data['tax_federal'] = $trips->sum('tax_federal');
    }
    $data['net_payment'] = $trips->sum('net_payment');
    return $data;
  }

  /**
   * Check the summary report
   * @param $companyId
   * @param $startDate in Y-m-d format.
   * @param $endDate in Y-m-d format.
   * @return string
   * @throws Exception
   */
  private function createSummaryReportPdf($companyId, $startDate, $endDate) {
    try {
      $adminCompany = AdminCompanyDetail::where('id', $companyId)
        ->select('business_name', 'email')->first();
      $toEmails = [$adminCompany->email];
      $timezone = getCompanyTimezone($companyId);
      $companyName = $adminCompany->business_name;
      $S3Folder = config('constant.s3.tripInvoices');
      $PDFFileName = 'tripSummaryReport-' . generateUniqueFileName($companyId, 'pdf');
      $reportFilePath = "{$S3Folder}{$PDFFileName}";
      $tripStatuses = [
        array_search('approved', config('constant.trip.status')),
        array_search('paid', config('constant.trip.status'))
      ];
      $trips = TripV2::where('company_id', $companyId)
        // TODO: query all trip types, driver, truck, tag.
        // include all types in the report.
        ->with('user:id,first_name,last_name')
        ->whereHas('user')
        ->whereIn('status', $tripStatuses)
        ->whereBetween('paycheck_approved_utc_datetime', [
          getLocalDateStartOfDayInUtc($startDate, $timezone),
          getLocalDateEndOfDayInUtc($endDate, $timezone)
        ])
        ->select(
          'user_id',
          'paycheck_approved_utc_datetime',
          'total_payment',
          'tax_social_security',
          'tax_medicare',
          'net_payment',
          'tax_federal',
        )
        ->get()
        ->toArray();
      $pdf = PDF::loadView('TripV2.tripSummaryReport', [
        "trips" => $trips,
        'startDate' => $startDate,
        'endDate' => $endDate,
        'toBusinessName' => $companyName,
        'toEmails' => $toEmails,
        'timezone' => $timezone,
      ])->setPaper('letter', 'portrait');
      uploadFileToS3($reportFilePath, $pdf->output());
      Mail::queue(new TripV2SummaryReport(
        $PDFFileName,
        $companyName,
        $toEmails
      ));
      return $PDFFileName;
    } catch (Exception $exception) {
      Log::error($exception);
      throw new Exception($exception->getMessage());
    }
  }

  /**
   * Update Trip Driver Payment
   * @param $request
   * @return array
   * @throws Exception
   */
  public function updatePreTripDriverPay($request) {
    $driverDetails = DB::transaction(function () use ($request) {
      $loadId = $request->loadId;
      $drivers = $request->drivers;
      $userIds = collect($request->drivers)->pluck('userId')->flatten();
      $companyId = getAuthAdminCompanyId();
      $driverPayTemplateService = new DriverPayTemplateService();

      // TODO: improve by where id in request's unique fieldIds.
      $driverPayTemplateFields = DriverPayTemplateCustomField::select(
        'id',
        'name',
        'type'
      )->where('company_id', $companyId)->get();

      $existingPayDetails = TripsV2LoadTemplatePayDetails::where('load_id', $loadId)->get();

      foreach ($drivers as $driver) {
        $userId = $driver['userId'];
        $preTripPayTemplateLoadDetails = $driver['preTripPayTemplateDetails']['loadDetails'] ?? [];

        $driverPayTemplateService->checkLoadDetailsValidation(
          $preTripPayTemplateLoadDetails,
          $driverPayTemplateFields,
          true
        );

        $requestLoadTemplatePayDetailIds = array_filter(
          array_column($preTripPayTemplateLoadDetails, 'loadTemplatePayDetailId')
        ) ?? [];
        // We have to keep where user_id here cause the API may only update partial drivers.
        $existingLoadTemplatePayDetailIds = $existingPayDetails->where('user_id', $userId)
          ->pluck('id')->toArray();

        $needsToDelete = array_diff(
          $existingLoadTemplatePayDetailIds,
          $requestLoadTemplatePayDetailIds
        );

        if (!empty($needsToDelete)) {
          TripsV2LoadTemplatePayDetails::whereIn('id', $needsToDelete)->delete();
        }
        $this->upsertLoadTemplateDetail(
          $loadId,
          $userId,
          $preTripPayTemplateLoadDetails
        );
      }

      $preTripPayTemplateDetails = $this->getPreTripPayTemplateDetails($userIds, $loadId);

      $ret = [];
      foreach ($userIds as $userId) {
        $ret[] = [
          'userId' => $userId,
          'preTripPayTemplateDetails' => $preTripPayTemplateDetails[$userId],
        ];
      }
      return $ret;
    });

    return ['drivers' => $driverDetails];
  }

  /**
   * Template Details to upsert
   * @param $loadId
   * @param $userId
   * @param $details
   * @return void
   */
  private function upsertLoadTemplateDetail($loadId, $userId, $details): void {
    $detailsToCreate = [];
    $time = now();
    foreach ($details as $detail) {
      $templateDetail = [
        'load_id' => $loadId,
        'user_id' => $userId,
        'field_id' => $detail['fieldId'],
        'comment' => $detail['comment'] ?? null,
        'payment' => $detail['payment'] ?? null,
        'qty' => $detail['qty'] ?? null,
        'rate' => $detail['rate'] ?? null,
        'percentage_in_fractional' => !is_null($detail['percentage'] ?? null) ?
          round($detail['percentage'] / 100, 4) : null,
        'pay_start_after' => $detail['payStartAfter'] ?? null,
        'v1' => $detail['v1'] ?? null,
        'v2' => $detail['v2'] ?? null,
        'v3' => $detail['v3'] ?? null,
        'updated_at' => $time
      ];

      if (!empty($detail['loadTemplatePayDetailId'])) {
        TripsV2LoadTemplatePayDetails::where(
          'id',
          $detail['loadTemplatePayDetailId']
        )->where('load_id', $loadId)->where('user_id', $userId)
          ->update($templateDetail);
      } else {
        $templateDetail['created_at'] = $time;
        $detailsToCreate[] = $templateDetail;
      }
    }
    if (!empty($detailsToCreate)) {
      TripsV2LoadTemplatePayDetails::insert($detailsToCreate);
    }
  }

  /**
   * Get trip load driver pay
   * @param $request
   * @return array[]
   * @throws Exception
   */
  public function getDriverPay($request): array {
    return DB::transaction(function () use ($request) {
      $companyId = getAuthAdminCompanyId();
      $userIds = collect($request->drivers)->pluck('userId')->flatten();
      $loadId = $request->loadId;
      $driverPayTemplateService = new DriverPayTemplateService();
      $drivers = [];

      if (count($userIds) == 0) {
        return ['drivers' => []];
      }

      $driverDefaultPayTypes = $this->getDriverDefaultPayTypes($userIds, $driverPayTemplateService);
      $tripsForGetDriverPay = $this->getTripsForGetDriverPay($userIds, $loadId, $companyId);
      $preTripPayTemplateDetails = $this->getPreTripPayTemplateDetails($userIds, $loadId);

      foreach ($userIds as $userId) {
        $driver = [
          'userId' => $userId,
          'driverDefaultPayType' => $driverDefaultPayTypes[$userId],
        ];

        if (array_key_exists($userId, $tripsForGetDriverPay)) {
          $driver['trip'] = $tripsForGetDriverPay[$userId];
        } else if (
          ($driverDefaultPayTypes[$userId]['defaultPayType']
            == config('constant.trip.defaultPayType.template'))
          // I had to add this line to fix FE code. This is not what I designed.
          // FE code assumes preTripPayTemplateDetails is not in response at all
          // if no data.
          && (count($preTripPayTemplateDetails[$userId]['loadDetails']) > 0)
        ) {
          $driver['preTripPayTemplateDetails'] = $preTripPayTemplateDetails[$userId];
        }

        $drivers[] = $driver;
      }

      return ['drivers' => $drivers];
    });
  }

  private function getDriverDefaultPayTypes($userIds, $driverPayTemplateService, $includeTripDetails = false) {
    $driverDetails = DriverDetail::select('id', 'user_id', 'driver_pay_types')
      ->whereIn('user_id', $userIds)
      ->with([
        'driverPayTemplateDetails',
        'driverPayTemplateDetails.driverPayTemplateCustomField',
      ])
      ->get();

    $ret = [];
    foreach ($userIds as $userId) {
      $driverDetail = $driverDetails->where('user_id', $userId)->first();
      $ret[$userId] = [
        'defaultPayType' => null,
      ];
      // It can be null.
      if (
        $driverDetail->driver_pay_types
      ) {
        $ret[$userId]['defaultPayType'] = config('constant.trip.defaultPayType.' .
          $driverDetail->driver_pay_types);
      }
      // TODO: add code for non template pay types later.
      if (
        $driverDetail->driver_pay_types ==
        config('constant.trip.defaultPayType.template')
      ) {
        $driverPayTemplate = $driverPayTemplateService->getModelTemplateHelper(
          $driverDetail->driverPayTemplateDetails,
          $includeTripDetails
        );
        $ret[$userId]['driverPayTemplate'] = $driverPayTemplate;
      }
    }
    return $ret;
  }

  private function getTripsForGetDriverPay($userIds, $loadId, $companyId) {
    $trips = TripV2::select('id', 'trip_number', 'user_id')
      ->whereIn('user_id', $userIds)
      ->where('company_id', $companyId)
      ->whereHas('tripLoads', function ($q) use ($loadId) {
        $q->where('load_id', $loadId);
      })->with([
        'tripV2TemplatePayDetails' => function ($q2) use ($loadId) {
          $q2->where('load_id', $loadId);
        }
      ])
      ->get();
    $ret = [];

    foreach ($trips as $trip) {
      $loadDetails = [];
      foreach ($trip->tripV2TemplatePayDetails as $detail) {
        // I think this check is not needed cause I only query this load's details above.
        if ($detail->load_id == $loadId) {
          $loadDetails[] = $this->getTripTemplatePayDetail($detail, 'tripTemplatePayDetailId');
        }
      }
      $ret[$trip->user_id] = [
        'id' => $trip->id,
        'tripNumber' => $trip->trip_number,
        'payTemplateDetails' => [
          'loadDetails' => $loadDetails,
        ],
      ];
    }

    return $ret;
  }

  /**
   * @param $userIds
   * @param $loadId
   * @param $driverPayTemplateService
   */
  private function getPreTripPayTemplateDetails($userIds, $loadId) {
    $tripsV2LoadTemplatePayDetails = TripsV2LoadTemplatePayDetails::where('load_id', $loadId)
      ->whereIn('user_id', $userIds)
      ->get();
    $ret = [];

    foreach ($userIds as $userId) {
      $loadDetails = [];
      $userDetails = $tripsV2LoadTemplatePayDetails->where('user_id', $userId);
      foreach ($userDetails as $detail) {
        $loadDetails[] = $this->getTripTemplatePayDetail($detail, 'loadTemplatePayDetailId');
      }
      $ret[$userId] = [
        'loadDetails' => $loadDetails,
      ];
    }

    return $ret;
  }

  /**
   * get Trip or pre trip pay template detail
   * @param $detail
   * @param $idFieldName
   * @return array
   */
  private function getTripTemplatePayDetail($detail, $idFieldName): array {
    $tripPayTemplateDetail = [
      'loadId' => $detail->load_id ?? null,
      'fieldId' => $detail->field_id ?? null,
      'comment' => $detail->comment ?? null,
      'payment' => $detail->payment ?? null,
      'qty' => $detail->qty ?? null,
      'rate' => $detail->rate ?? null,
      'percentage' => !is_null($detail->percentage_in_fractional)
        ? number_format(
          $detail->percentage_in_fractional * 100,
          2,
          '.',
          ''
        )
        : null,
      'payStartAfter' => (int)$detail->pay_start_after ?? null,
      'v1' => !is_null($detail->v1) ? round($detail->v1, 4) : null,
      'v2' => !is_null($detail->v2) ? round($detail->v2, 4) : null,
      'v3' => !is_null($detail->v3) ? round($detail->v3, 4) : null,
    ];
    $tripPayTemplateDetail[$idFieldName] = $detail->id ?? null;

    return $tripPayTemplateDetail;
  }
}
