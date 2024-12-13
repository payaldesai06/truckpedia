<?php

namespace App\Services\Planning;

use App\Models\Load;
use App\Models\Truck;
use App\Models\Trailer;
use App\Models\User;
use Carbon\Carbon;
use Exception;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Auth;

class PlanningService {

  /**
   * Get timeline list.
   * @param $request
   * @return array
   * @throws Exception
   */
  public function getTimeline($request): array {
    $companyId = getAuthAdminCompanyId();
    $startDate = $request->startDate;
    $endDate = $request->endDate;
    $timelineFor = $request->timelineFor ?? 'truck';

    $returnLoads = !empty($request->returnData['loads']);
    $returnSchedules = !empty($request->returnData['schedules']);
    $returnTimeOffCalendars = !empty($request->returnData['timeOffCalendars']);
    $tagIds = $request->filters['tagIds'] ?? [];
    $dispatcherIds = $request->filters['dispatcherIds'] ?? [];
    $loadStatuses = $request->filters['loadStatuses'] ?? [];

    if ($timelineFor == 'truck' || $timelineFor == 'trailer') {
      $query = Truck::where('company_id', $companyId);
      if ($timelineFor == 'trailer') {
        $query = Trailer::where('company_id', $companyId);
        $returnSchedules = false;
      }
      $assets = $query
        ->where('status', config('constant.status.truck.active'))
        ->select('id', 'number')
        ->with([
          'driverDetails:id,assignment_truck_id,assignment_trailer_id,user_id,name',
        ])->when($returnTimeOffCalendars, function ($q) use ($startDate, $endDate) {
          $q->with([
            'driverDetails.driverTimeOffCalender' => function ($innerQuery) use (
              $startDate,
              $endDate
            ) {
              return $innerQuery
                ->where('start_date', '<=', $endDate)
                ->where('end_date', '>=', $startDate);
            },
          ]);
        })
        /*
        ->when($returnSchedules, function ($q) use ($startDate, $endDate) {
          $q->with([
            'truckAvalRptScheds' => function ($innerQuery) use ($startDate, $endDate) {
              $startTime = Carbon::parse($startDate);
              $endTime = Carbon::parse($endDate);
              $key = 0;
              while ($startTime->lte($endTime) && $key < 7) {
                $columnName = array_search(array_search(
                  $startTime->dayName,
                  config('constant.planning.schedule.weeklySelectedDays')
                ), config('constant.planning.schedule.weeklyCheck'));
                if (!empty($columnName)) {
                  if ($key > 0) {
                    $innerQuery->orWhere($columnName, 1);
                  } else {
                    $innerQuery->where($columnName, 1);
                  }
                }
                $startTime->addDay();
                $key++;
              }
              return $innerQuery->with('truckAvalManualLanes');
            },
            'truckAvalOnceScheds' => function ($innerQuery) use ($startDate, $endDate) {
              return $innerQuery->with([
                'truckAvalManualLanes'
              ])->where('start_date', '<=', $endDate)
                ->where('end_date', '>=', $startDate);
            }
          ]);
        })*/
        ->get();
      $assetIds = $assets->pluck('id')->toArray() ?? [];
    } else if ($timelineFor == 'driver') {
      $assets = User::where('admin_company_detail_id', $companyId)
        ->where('status', config('constant.status.user.active'))
        ->where('role', config('constant.roles.driver'))
        ->select('id', 'first_name', 'last_name')
        ->with([
          'driverDetail:id,user_id,assignment_truck_id,assignment_trailer_id,name',
          'driverDetail.assignmentTruck:id,number',
          'driverDetail.assignmentTrailer:id,number'
        ])->when($returnTimeOffCalendars, function ($q) use ($startDate, $endDate) {
          $q->with([
            'driverDetail.driverTimeOffCalender' => function ($innerQuery) use (
              $startDate,
              $endDate
            ) {
              return $innerQuery
                ->where('start_date', '<=', $endDate)
                ->where('end_date', '>=', $startDate);
            },
          ]);
        })
        /*
        ->when($returnSchedules, function ($q) use ($startDate, $endDate) {
          $q->with([
            'driverDetail.assignmentTruck.truckAvalRptScheds' => function (
              $innerQuery
            ) use ($startDate, $endDate) {
              $startTime = Carbon::parse($startDate);
              $endTime = Carbon::parse($endDate);
              $key = 0;
              while ($startTime->lte($endTime) && $key < 7) {
                $columnName = array_search(array_search(
                  $startTime->dayName,
                  config('constant.planning.schedule.weeklySelectedDays')
                ), config('constant.planning.schedule.weeklyCheck'));
                if (!empty($columnName)) {
                  if ($key > 0) {
                    $innerQuery->orWhere($columnName, 1);
                  } else {
                    $innerQuery->where($columnName, 1);
                  }
                }
                $startTime->addDay();
                $key++;
              }
              return $innerQuery->with('truckAvalManualLanes');
            },
            'driverDetail.assignmentTruck.truckAvalOnceScheds' => function ($innerQuery) use ($startDate, $endDate) {
              return $innerQuery->with([
                'truckAvalManualLanes'
              ])->where('start_date', '<=', $endDate)
                ->where('end_date', '>=', $startDate);
            }
          ]);
        })*/
        ->get();
      $assetIds = $assets->pluck('id')->toArray() ?? [];
    }

    $allLoads = collect();
    if ($returnLoads && !empty($assetIds)) {
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
      $allLoads = Load::where('admin_company_detail_id', $companyId)
        ->select('status', 'id', 'load_unique_id', 'customer_id')
        ->when(!empty($tagIds), function ($q) use ($tagIds) {
          return $q->whereIn('tag_id', $tagIds);
        })
        ->when(!empty($dispatcherIds), function ($q) use ($dispatcherIds) {
          return $q->whereIn('dispatcher_id', $dispatcherIds);
        })
        ->when(!empty($loadStatuses), function ($q) use ($loadStatuses) {
          return $q->whereIn('status', $loadStatuses);
        })
        ->where('status', '!=', config('constant.status.load.canceled'))
        ->whereHas('loadDrivers', function ($q1) use ($assetIds, $timelineFor, $loadStatuses) {
          $q1->select('id', 'truck_id', 'trailer_id', 'load_id');
          if (!empty($loadStatuses) && empty(array_diff(
            $loadStatuses,
            ['open', 'assign', 'in_transit']
          ))) {
            $q1->where('status', '!=', config('constant.status.load_driver.handed_over'));
          }
          if ($timelineFor == 'truck') {
            $q1->whereIn('truck_id', $assetIds);
          } else if ($timelineFor == 'trailer') {
            $q1->whereIn('trailer_id', $assetIds);
          } else if ($timelineFor == 'driver') {
            $q1->with([
              'driverAsUsers:id',
            ])->whereHas('driverAsUsers', function ($q2) use ($assetIds) {
              $q2->whereIn('id', $assetIds);
            });
          }
        })
        ->where(function ($innerQuery) use ($startDate, $endDate) {
          $innerQuery->whereHas('loadShippers', function ($innerQuery) use ($startDate, $endDate) {
            $innerQuery->whereBetween(
              'shipping_date',
              [$startDate, $endDate]
            );
          })->orWhereHas('loadReceivers', function ($innerQuery) use ($startDate, $endDate) {
            $innerQuery->whereBetween(
              'delivery_date',
              [$startDate, $endDate]
            );
          });
        })
        ->with([
          'loadShippers:id,load_id,shipping_date,shipping_time,city,state,order',
          'loadReceivers:id,load_id,delivery_date,delivery_time,city,state,order',
          'loadLegs:id,load_id,date,city,state,order',
          'customer:id,company_name',
          // 'loadDrivers:id,load_id,truck_id,trailer_id'
          'loadDrivers' => function ($q2) {
            $q2->select(['id', 'load_id', 'truck_id', 'trailer_id']);
            // TODO: turn this on under special conditions. See doc.
            //  ->where('status', '!=', config('constant.status.load_driver.handed_over'));
          },
        ])
        ->when($timelineFor == 'driver', function ($q1) {
          $q1->with([
            // If I comment out this line, Laravel will load all columns of
            // loadDrivers, I don't know why.
            //'loadDrivers:id,load_id,truck_id,trailer_id',
            //'loadDrivers.driverAsUsers:id',
            'loadDrivers' => function ($q2) {
              $q2->select(['id', 'load_id', 'truck_id', 'trailer_id'])
                ->with([
                  'driverAsUsers:id',
                ]);
              // TODO: turn this on under special conditions. See doc.
              //->where('status', '!=', config('constant.status.load_driver.handed_over'));
            },
          ]);
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
    }

    $allLoadsLoadDrivers = $allLoads->pluck('loadDrivers')->flatten();

    $timelines = $assets->map(function ($asset) use (
      $returnLoads,
      $returnSchedules,
      $returnTimeOffCalendars,
      $allLoads,
      $timelineFor,
      $allLoadsLoadDrivers
    ) {
      $loads = collect();
      $schedules = [];
      $driverTimeOffCalender = collect();

      if ($returnLoads) {
        if ($timelineFor == 'truck') {
          $loadDrivers = $allLoadsLoadDrivers->where('truck_id', $asset->id);
        } else if ($timelineFor == 'trailer') {
          $loadDrivers = $allLoadsLoadDrivers->where('trailer_id', $asset->id);
        } else if ($timelineFor == 'driver') {
          // I tried to use relationship where or whereHas, failed, took me tons of time.
          $loadDrivers = $allLoadsLoadDrivers->map(function ($oneLoadDriver) use ($asset) {
            if ($oneLoadDriver->driverAsUsers->where('id', $asset->id)->isNotEmpty()) {
              return $oneLoadDriver;
            }
          })->filter();
        }

        if ($loadDrivers->isNotEmpty()) {
          $loads = $allLoads
            ->whereIn('id', $loadDrivers->pluck('load_id')->toArray());
        }
      }

      if ($returnTimeOffCalendars) {
        if ($timelineFor == 'truck' || $timelineFor == 'trailer') {
          $driverTimeOffCalender = $asset->driverDetails
            ->pluck('driverTimeOffCalender')->filter()->flatten() ?? collect();
        } else if ($timelineFor == 'driver') {
          $driverTimeOffCalender = $asset->driverDetail->driverTimeOffCalender ?? collect();
        }
      }
      /*
      if ($returnSchedules) {
        $vehicle = $asset;
        if ($timelineFor == 'driver') {
          $vehicle = $asset->driverDetail->assignmentTruck ?? null;
        }

        $repeatedScheduleDetails = $vehicle->truckAvalRptScheds ?? [];
        $onceScheduleDetails = $vehicle->truckAvalOnceScheds ?? [];
        // Repeated Schedule Details
        foreach ($repeatedScheduleDetails as $schedule) {
          if ($schedule->freq_type == 1) {
            $manualLanes = $this->getManualLanes($schedule);
            $weeklySelectedDays = [];
            $weeklySelectedDays[] = !empty($schedule->d1) ? 1 : null;
            $weeklySelectedDays[] = !empty($schedule->d2) ? 2 : null;
            $weeklySelectedDays[] = !empty($schedule->d3) ? 3 : null;
            $weeklySelectedDays[] = !empty($schedule->d4) ? 4 : null;
            $weeklySelectedDays[] = !empty($schedule->d5) ? 5 : null;
            $weeklySelectedDays[] = !empty($schedule->d6) ? 6 : null;
            $weeklySelectedDays[] = !empty($schedule->d7) ? 7 : null;
            $freqType = config('constant.planning.schedule.frequentType')[$schedule->freq_type];
            $currSchedules = [
              'frequentType' => $freqType,
              'manualLanes' => $manualLanes,
              'truckAvalRptSchedId' => $schedule->id,
              'weeklySelectedDays' => array_values(array_filter(
                $weeklySelectedDays,
                fn ($value) => !is_null($value) && $value !== ''
              )),
              'startTime' => $schedule->start_time ?
                Carbon::parse($schedule->start_time)->format(config('constant.time_format')) : null,
              'endTime' => $schedule->end_time ?
                Carbon::parse($schedule->end_time)->format(config('constant.time_format')) : null,
              // 'truckTypes' => $schedule->truck_types
            ];
            $currSchedules['equipmentTypes'] = $this->getEquipmentTypes($schedule);
            if ($freqType == 'weekly') {
              $currSchedules['quoteValidUntil'] = $schedule->quote_valid_until ?? null;
            }
            $schedules[] = $currSchedules;
          }
        }

        // Once Schedule Details
        foreach ($onceScheduleDetails as $schedule) {
          $manualLanes = $this->getManualLanes($schedule);
          $currSchedules = [
            'frequentType' => config('constant.planning.schedule.frequentType')[2] ?? 'once',
            'manualLanes' => $manualLanes,
            'startTime' => $schedule->start_time ?
              Carbon::parse($schedule->start_time)->format(config('constant.time_format')) : null,
            'endTime' => $schedule->end_time ?
              Carbon::parse($schedule->end_time)->format(config('constant.time_format')) : null,
            // 'truckTypes' => $schedule->truck_types
          ];
          $currSchedules['equipmentTypes'] = $this->getEquipmentTypes($schedule);
          $currSchedules['truckAvalOnceSchedId'] = !empty($schedule) ? $schedule->id : null;
          $currSchedules['onceTimeRange'] = [
            'startDate' => $schedule->start_date ?? null,
            'endDate' => $schedule->end_date ?? null
          ];
          $schedules[] = $currSchedules;
        }
      } */


      $timeline = [
        'loads' => $this->getTruckLoads($loads) ?? [],
      ];

      if ($timelineFor == 'truck' || $timelineFor == 'trailer') {
        $timeline['currentAssignedDrivers'] = $this->getCurrentAssignedDrivers(
          $asset->driverDetails ?? null,
          $driverTimeOffCalender
        ) ?? [];
        $timeline['schedules'] = []; //$schedules ?? [];
      } else if ($timelineFor == 'driver') {
        $currentAssignedDrivers = $this->getCurrentAssignedDrivers(
          [$asset->driverDetail],
          $driverTimeOffCalender
        ) ?? [];
        $timeline['timeOffCalendars'] = $currentAssignedDrivers[0]['timeOffCalendars'] ?? [];
        $timeline['currentAssignedTruck'] = null;
        if (!empty($asset->driverDetail->assignmentTruck)) {
          $timeline['currentAssignedTruck'] = [
            'truckId' => $asset->driverDetail->assignmentTruck->id,
            'truckNumber' => $asset->driverDetail->assignmentTruck->number,
            'schedules' => [], //$schedules ?? [],
          ];
        }
        $timeline['currentAssignedTrailer'] = null;
        if (!empty($asset->driverDetail->assignmentTrailer)) {
          $timeline['currentAssignedTrailer'] = [
            'trailerId' => $asset->driverDetail->assignmentTrailer->id,
            'trailerNumber' => $asset->driverDetail->assignmentTrailer->number,
          ];
        }
      }

      if ($timelineFor == 'truck') {
        $timeline['truckId'] = $asset->id;
        $timeline['truckNumber'] = $asset->number;
      } else if ($timelineFor == 'trailer') {
        $timeline['trailerId'] = $asset->id;
        $timeline['trailerNumber'] = $asset->number;
      } else if ($timelineFor == 'driver') {
        $timeline['driverId'] = $asset->id;
        $timeline['driverName'] = userFullName($asset);
      }

      return $timeline;
    })->toArray();

    return [$timelineFor . 'Timeline' => $timelines];
  }

  /**
   * Get all assigned driver details.
   * @param $assignedDriverDetails
   * @param $driverTimeOffCalender
   * @return array
   */
  private function getCurrentAssignedDrivers($assignedDriverDetails, $driverTimeOffCalender): array {
    $currentAssignedDrivers = [];
    foreach ($assignedDriverDetails as $detail) {
      if (empty($detail)) {
        continue;
      }
      $timeOffCalendarFilter = $driverTimeOffCalender->whereIn('user_id', $detail->user_id);
      $timeOffCalendars = [];
      foreach ($timeOffCalendarFilter as $timeOff) {
        $timeOffCalendars[] = [
          'id' => $timeOff->id,
          'start' => [
            'date' => $timeOff->start_date,
            'time' => date("H:i", strtotime($timeOff->start_time)),
            'timezone' => $timeOff->start_timezone,
          ],
          'end' => [
            'date' => $timeOff->end_date,
            'time' => date("H:i", strtotime($timeOff->end_time)),
            'timezone' => $timeOff->end_timezone
          ],
        ];
      }
      $currentAssignedDrivers[] = [
        'userId' => $detail->user_id,
        'driverName' => $detail->name ?? '',
        'timeOffCalendars' => $timeOffCalendars ?? []
      ];
    }
    return $currentAssignedDrivers;
  }

  /**
   * get Truck loads
   * @param $loads
   * @return array
   */
  private function getTruckLoads($loads): array {
    $truckLoads = [];
    foreach ($loads as $load) {
      // TODO (0522): need to handle stop order.
      // First check if shipper/receiver has order != null.
      // If order == null, re-use existing code.
      // If order != null, choose the stop with min order value as the start,
      // max order value as the end.
      // then check if load has leg. I think you can just re-use existing code for
      // leg.
      // TODO: When order != null, the first stop may not be a shipper!!! Similarly,
      // last stop may not be receiver!
      $shipper = $load->loadShippers->first() ?? null;
      $receiver = $load->loadReceivers->last() ?? null;
      $startDate = !empty($shipper->shipping_date) ? $shipper->shipping_date : null;
      $startTime = !empty($shipper->shipping_time) ? $shipper->shipping_time : null;
      $endDate = !empty($receiver->delivery_date) ? $receiver->delivery_date : null;
      $endTime = !empty($receiver->delivery_time) ? $receiver->delivery_time : null;
      $startCity = !empty($shipper->city) ? $shipper->city : null;
      $startState = !empty($shipper->state) ? $shipper->state : null;
      $endCity = !empty($receiver->city) ? $receiver->city : null;
      $endState = !empty($receiver->state) ? $receiver->state : null;
      if ($load->to_leg && $load->loadLegs->isNotEmpty()) {
        $leg = $load->loadLegs->last();
        $endDate = $leg->date;
        $endTime = $leg->time;
        $endCity = $leg->city;
        $endState = $leg->state;
      } else if ($load->from_leg && $load->loadLegs->isNotEmpty()) {
        $leg = $load->loadLeg->first();
        $startDate = $leg->date;
        $startTime = $leg->time;
        $startCity = $leg->city;
        $startState = $leg->state;
      }
      $truckLoads[] = [
        'loadId' => $load->id ?? '',
        'loadNumber' => $load->load_unique_id ?? null,
        'customerName' => $load->customer->company_name ?? null,
        'startDate' => $startDate ?? null,
        'startTime' => !empty($startTime) ? Carbon::parse($startTime)->format(config('constant.time_format')) : null,
        'endDate' => $endDate ?? null,
        'endTime' => !empty($endTime) ? Carbon::parse($endTime)->format(config('constant.time_format')) : null,
        'startCity' => $startCity ?? '',
        'startState' => $startState ?? '',
        'endCity' => $endCity ?? '',
        'endState' => $endState ?? '',
        'loadStatus' => $load->status ?? ''
      ];
    }
    return $truckLoads ?? [];
  }

  /**
   * get lane location
   * @param $lanes
   * @param $prefix
   * @param $states
   * @return array
   */
  private function getLaneLocation($lanes, $prefix, $states) {
    if (!empty($states)) {
      $location = [
        'statesArray' => $states
      ];
    } else {
      $location = [
        'streetAddress' => $lanes->{$prefix . '_street_address'},
        'city' => $lanes->{$prefix . '_city'},
        'state' => $lanes->{$prefix . '_state'},
        'zipCode' => $lanes->{$prefix . '_zip_code'},
        'latitude' => $lanes->{$prefix . '_latitude'},
        'longitude' => $lanes->{$prefix . '_longitude'},
        'deadhead' => $lanes->{$prefix . '_deadhead'},
      ];
    }
    return $location;
  }

  /**
   * Get All Manual Lanes.
   * @param $schedule
   * @return array
   */
  public function getManualLanes($schedule): array {
    $truckAvalManualLanes = $schedule->truckAvalManualLanes;
    $manualLanes = [];
    foreach ($truckAvalManualLanes as $lanes) {
      $originStates = [];
      $destStates = [];
      $states = config('constant.usStatesIntMapping');
      $stateKeys = array_keys($states);

      foreach ($stateKeys as $key) {
        if ($lanes['origin_state_' . $key]) {
          $originStates[] = $states[$key];
        }
        if ($lanes['dest_state_' . $key]) {
          $destStates[] = $states[$key];
        }
      }

      $origin = $this->getLaneLocation($lanes, 'origin', $originStates);
      $destination = $this->getLaneLocation($lanes, 'dest', $destStates);

      $manualLane = [
        'truckAvalManualLaneId' => $lanes->id,
        'origin' => $origin,
        'destination' => $destination,
        'targetWeight' => $lanes->target_weight ?? null,
        'targetMinRate' => $lanes->target_min_rate ?? null,
      ];
      if (empty($lanes->target_price)) {
        $manualLane['targetRpm'] = $lanes->target_rpm ?? null;
      }
      if (empty($lanes->target_rpm)) {
        $manualLane['targetPrice'] = $lanes->target_price ?? null;
      }
      $manualLanes[] = $manualLane;
    }
    return $manualLanes;
  }

  /**
   * get schedule equipmentTypes
   * @param $schedule
   * @return array
   */
  private function getEquipmentTypes($schedule) {
    $equipmentTypes = [];
    $allEquipmentTypes = config('constant.planning.schedule.equipmentTypes');
    foreach ($allEquipmentTypes as $column => $value) {
      if ($schedule->$column == 1) {
        $equipmentTypes[] = $value;
      }
    }
    return $equipmentTypes;
  }
}
