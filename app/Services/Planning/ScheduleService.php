<?php


namespace App\Services\Planning;

use App\Models\TruckAvalManualLanes;
use App\Models\TruckAvalOnceScheds;
use App\Models\TruckAvalRptScheds;
use Exception;
use Illuminate\Support\Facades\DB;

class ScheduleService {

  /**
   * Created Schedule
   * @return mixed
   */
  public function create($request) {
    return DB::transaction(
      function () use ($request) {
        $requestTruckIds = $request->truckIds;
        $resp = null;
        $frequentType = array_search($request->frequentType, config('constant.planning.schedule.frequentType'));
        $statesMapping = config('constant.usStatesIntMapping');
        $requestedEquipmentTypes = [];
        foreach (config('constant.planning.schedule.equipmentTypes') as $key => $value) {
          $requestedEquipmentTypes[$key] = null;
        }
        if (!empty($request->equipmentTypes)) {
          foreach ($request->equipmentTypes as $equipmentType) {
            $equipmentTypeColumn = array_search(
              $equipmentType,
              config('constant.planning.schedule.equipmentTypes')
            );
            $requestedEquipmentTypes[$equipmentTypeColumn] = 1;
          }
        }
        foreach ($requestTruckIds as $truck) {
          if ($frequentType == array_search('once', config('constant.planning.schedule.frequentType'))) {
            $data = [
              'truck_id' => $truck['truckId'],
              'start_date' => $request->onceTimeRange['startDate'] ?? null,
              'end_date' => $request->onceTimeRange['endDate'] ?? null,
              'start_time' => $request->startTime ?? null,
              'end_time' => $request->endTime ?? null
            ];
            $data = array_merge($requestedEquipmentTypes, $data);
            $schedule = $this->updateOrCreateTruckAvalOnceScheds($data);
          } else if ($frequentType == array_search('weekly', config('constant.planning.schedule.frequentType'))) {
            $truckAvalRptScheds = $this->getAvailableRepeatedSchedule($request, $frequentType);
            $truckAvalRptScheds['truck_id'] = $truck['truckId'];
            $truckAvalRptScheds['start_time'] = $request->startTime ?? null;
            $truckAvalRptScheds['end_time'] = $request->endTime ?? null;
            $truckAvalRptScheds['quote_valid_until'] = $request->quoteValidUntil ?? null;
            $truckAvalRptScheds = array_merge($requestedEquipmentTypes, $truckAvalRptScheds);
            $schedule = $this->updateOrCreateTruckAvalRptScheds($truckAvalRptScheds);
          }

          if (empty($schedule)) {
            throw new Exception("Unprocessable Entity: Given Frequent Type is invalid.");
          }

          $currentManualLanes = $request->manualLanes;

          $truckAvalManualLanes = [];
          foreach ($currentManualLanes as $currentManualLane) {
            $truckAvalManualLanes[] = $this->getTruckAvalManualLaneDetails(
              $currentManualLane,
              $statesMapping
            );
          }
          $resp = $schedule->truckAvalManualLanes()->createMany($truckAvalManualLanes);
        }
        return $resp;
      }
    );
  }

  /**
   * get TruckAvalManualLane Detail
   * @param $currentManualLane
   * @param $statesMapping
   * @return array
   */
  private function getTruckAvalManualLaneDetails($currentManualLane, $statesMapping) {
    $truckAvalManualLane = [
      'origin_street_address' => $currentManualLane['origin']['streetAddress'] ?? null,
      'origin_city' => $currentManualLane['origin']['city'] ?? null,
      'origin_state' => $currentManualLane['origin']['state'] ?? null,
      'origin_zip_code' => $currentManualLane['origin']['zipCode'] ?? null,
      'origin_latitude' => $currentManualLane['origin']['latitude'] ?? null,
      'origin_longitude' => $currentManualLane['origin']['longitude'] ?? null,
      'origin_deadhead' => $currentManualLane['origin']['deadhead'] ?? null,
      'dest_street_address' => $currentManualLane['destination']['streetAddress'] ?? null,
      'dest_city' => $currentManualLane['destination']['city'] ?? null,
      'dest_state' => $currentManualLane['destination']['state'] ?? null,
      'dest_zip_code' => $currentManualLane['destination']['zipCode'] ?? null,
      'dest_latitude' => $currentManualLane['destination']['latitude'] ?? null,
      'dest_longitude' => $currentManualLane['destination']['longitude'] ?? null,
      'dest_deadhead' => $currentManualLane['destination']['deadhead'] ?? null,
      // This is in fact not used anymore.
      // 'target_price' => $currentManualLane['targetPrice'] ?? null,
      'target_rpm' => $currentManualLane['targetRpm'] ?? null,
      'target_weight' => $currentManualLane['targetWeight'] ?? null,
      'target_min_rate' => $currentManualLane['targetMinRate'] ?? null,
    ];
    $originStatesArray = $currentManualLane['origin']['statesArray'] ?? [];
    $destinationStatesArray = $currentManualLane['destination']['statesArray'] ?? [];

    $this->addTruckAvalManualLaneStates(
      $truckAvalManualLane,
      $statesMapping,
      $originStatesArray,
      'origin_state_'
    );

    $this->addTruckAvalManualLaneStates(
      $truckAvalManualLane,
      $statesMapping,
      $destinationStatesArray,
      'dest_state_'
    );

    return $truckAvalManualLane;
  }

  /**
   * Add truckAvalManualLane states mapping
   * @param $truckAvalManualLanes
   * @param $statesMapping
   * @param $requestStatesArray
   * @param $typeStateKey
   * @return void
   */
  private function addTruckAvalManualLaneStates(
    &$truckAvalManualLanes,
    $statesMapping,
    $requestStatesArray,
    $typeStateKey
  ) {
    $requestStatesArray = array_map('strtoupper', $requestStatesArray);
    foreach ($statesMapping as $key => $value) {
      if (in_array($value, $requestStatesArray)) {
        $truckAvalManualLanes[$typeStateKey . $key] = 1;
      } else {
        $truckAvalManualLanes[$typeStateKey . $key] = null;
      }
    }
  }


  /**
   * Create or Update Available Trucks Repeated Schedules.
   * @param $data
   * @param $id
   * @return mixed
   */
  public function updateOrCreateTruckAvalRptScheds($data, $id = null, $companyId = null) {
    if ($id) {
      // Check if the truckAvalRptSchedId belongs to the company
      $schedule = TruckAvalRptScheds::whereHas('truck', function ($query) use ($companyId) {
        return $query->where('company_id', $companyId ?? getAuthAdminCompanyId());
      })->findOrFail($id);
      $schedule->update($data);
      return $schedule;
    }
    return TruckAvalRptScheds::create($data);
  }

  /**
   * Create or Update available once schedules.
   * @param $data
   * @param $id
   * @return mixed
   */
  public function updateOrCreateTruckAvalOnceScheds($data, $id = null, $companyId = null) {
    if ($id) {
      // Check if the truckAvalOnceSchedId belongs to the company
      $schedule = TruckAvalOnceScheds::whereHas('truck', function ($query) use ($companyId) {
        return $query->where('company_id', $companyId ?? getAuthAdminCompanyId());
      })->findOrFail($id);
      $schedule->update($data);
      return $schedule;
    }
    return TruckAvalOnceScheds::create($data);
  }

  /**
   * Update Schedule
   * @return mixed
   */
  public function edit($request) {
    return DB::transaction(function () use ($request) {
      $truckAvalRptSchedId = $request->truckAvalRptSchedId;
      $truckAvalOnceSchedId = $request->truckAvalOnceSchedId;
      $freqType = array_search($request->frequentType, config('constant.planning.schedule.frequentType'));
      if (!empty($truckAvalRptSchedId)) {
        $data = $this->getAvailableRepeatedSchedule($request, $freqType);
        $data['start_time'] = $request->startTime ?? null;
        $data['end_time'] = $request->endTime ?? null;
        $data['quote_valid_until'] = $request->quoteValidUntil ?? null;
        $schedule = $this->updateOrCreateTruckAvalRptScheds($data, $truckAvalRptSchedId);
      } else if (!empty($truckAvalOnceSchedId)) {
        $data = [
          'start_date' => $request->onceTimeRange['startDate'] ?? null,
          'end_date' => $request->onceTimeRange['endDate'] ?? null,
          'start_time' => $request->startTime ?? null,
          'end_time' => $request->endTime ?? null
        ];
        $schedule = $this->updateOrCreateTruckAvalOnceScheds($data, $truckAvalOnceSchedId);
      } else {
        throw new Exception("Unprocessable Entity: Given Frequent Type is invalid.");
      }
      return $this->updateManualLanes($request->manualLanes, $schedule, $freqType);
    });
  }

  /**
   * Update Manual Lanes
   * @param $requestManualLanes
   * @param $truckAvalSched
   * @return mixed
   */
  public function updateManualLanes($requestManualLanes, $truckAvalSched, $freqType) {
    if (empty($requestManualLanes)) {
      return $truckAvalSched->truckAvalManualLanes()->delete();
    }
    $existingManualLaneIds = $truckAvalSched->truckAvalManualLanes()->pluck('id')->toArray() ?? [];
    $requestManualLaneIds = array_column($requestManualLanes, 'truckAvalManualLaneId') ?? [];
    $diffManualLaneIds =  array_diff($existingManualLaneIds, $requestManualLaneIds);
    if (!empty($diffManualLaneIds)) {
      TruckAvalManualLanes::whereIn('id', $diffManualLaneIds)->delete();
    }

    $statesMapping = config('constant.usStatesIntMapping');
    foreach ($requestManualLanes as $manualLanes) {
      $primaryData = [
        'id' => $manualLanes['truckAvalManualLaneId'] ?? null,
      ];

      if ($freqType == array_search('once', config('constant.planning.schedule.frequentType'))) {
        $primaryData['truck_aval_once_sched_id'] = $truckAvalSched->id;
      } elseif ($freqType == array_search('weekly', config('constant.planning.schedule.frequentType'))) {
        $primaryData['truck_aval_rpt_sched_id'] = $truckAvalSched->id;
      }

      $secondaryData = $this->getTruckAvalManualLaneDetails(
        $manualLanes,
        $statesMapping
      );
      TruckAvalManualLanes::updateOrCreate($primaryData, $secondaryData);
    }
    return $truckAvalSched;
  }

  /**
   * @param $request
   * @param $freqType
   * @return array
   */
  public function getAvailableRepeatedSchedule($request, $freqType): array {
    return [
      'freq_type' => $freqType,
      'd1' => $request['weeklySelectedDays'] && in_array(config('constant.planning.schedule.weeklyCheck.d1'), $request['weeklySelectedDays']) ? 1 : null,
      'd2' => $request['weeklySelectedDays'] && in_array(config('constant.planning.schedule.weeklyCheck.d2'), $request['weeklySelectedDays']) ? 1 : null,
      'd3' => $request['weeklySelectedDays'] && in_array(config('constant.planning.schedule.weeklyCheck.d3'), $request['weeklySelectedDays']) ? 1 : null,
      'd4' => $request['weeklySelectedDays'] && in_array(config('constant.planning.schedule.weeklyCheck.d4'), $request['weeklySelectedDays']) ? 1 : null,
      'd5' => $request['weeklySelectedDays'] && in_array(config('constant.planning.schedule.weeklyCheck.d5'), $request['weeklySelectedDays']) ? 1 : null,
      'd6' => $request['weeklySelectedDays'] && in_array(config('constant.planning.schedule.weeklyCheck.d6'), $request['weeklySelectedDays']) ? 1 : null,
      'd7' => $request['weeklySelectedDays'] && in_array(config('constant.planning.schedule.weeklyCheck.d7'), $request['weeklySelectedDays']) ? 1 : null
    ];
  }

  /**
   * Delete Schedule
   * @param $request
   * @return mixed
   * @throws Exception
   */
  public function destroy($request) {
    if ($request->has('truckAvalRptSchedId')) {
      $query = TruckAvalRptScheds::query()->where('id', $request->truckAvalRptSchedId);
    } else {
      $query = TruckAvalOnceScheds::query()->where('id', $request->truckAvalOnceSchedId);
    }

    $truckAvalSched = $query->whereHas('truck', function ($query) {
      return $query->where('company_id', getAuthAdminCompanyId());
    })->first();

    if (!$truckAvalSched) {
      throw new Exception("Unprocessable Entity: The given id is wrong.");
    }
    $truckAvalSched->truckAvalManualLanes()->delete();
    return $truckAvalSched->delete();
  }

  public function batchUpdate($request) {
    if (empty($request['updates'])) {
      return true;
    }
    //ToDo: Need to refactor code for bulk update
    $companyId = getAuthAdminCompanyId();
    return DB::transaction(function () use ($request, $companyId) {
      foreach ($request['updates'] as $update) {
        $truckAvalRptSchedId = $update['truckAvalRptSchedId'] ?? null;
        $truckAvalOnceSchedId = $update['truckAvalOnceSchedId'] ?? null;
        $freqType = array_search(
          $update['frequentType'],
          config('constant.planning.schedule.frequentType')
        );
        $requestedEquipmentTypes = [];
        foreach (config('constant.planning.schedule.equipmentTypes') as $key => $value) {
          $requestedEquipmentTypes[$key] = null;
        }
        if (!empty($update['equipmentTypes'])) {
          foreach ($update['equipmentTypes'] as $equipmentType) {
            $equipmentTypeColumn = array_search(
              $equipmentType,
              config('constant.planning.schedule.equipmentTypes')
            );
            $requestedEquipmentTypes[$equipmentTypeColumn] = 1;
          }
        }
        if (!empty($truckAvalRptSchedId)) {
          $data = $this->getAvailableRepeatedSchedule($update, $freqType);
          $data['start_time'] = $update['startTime'] ?? null;
          $data['end_time'] = $update['endTime'] ?? null;
          $data['quote_valid_until'] = $update['quoteValidUntil'] ?? null;
          $data = array_merge($requestedEquipmentTypes, $data);
          $schedule = $this->updateOrCreateTruckAvalRptScheds(
            $data,
            $truckAvalRptSchedId,
            $companyId
          );
          $this->updateManualLanes($update['manualLanes'], $schedule, $freqType);
        } else if (!empty($truckAvalOnceSchedId)) {
          $data = [
            'start_date' => $update['onceTimeRange']['startDate'] ?? null,
            'end_date' => $update['onceTimeRange']['endDate'] ?? null,
            'start_time' => $update['startTime'] ?? null,
            'end_time' => $update['endTime'] ?? null
          ];
          $data = array_merge($requestedEquipmentTypes, $data);
          $schedule = $this->updateOrCreateTruckAvalOnceScheds(
            $data,
            $truckAvalOnceSchedId,
            $companyId
          );
          $this->updateManualLanes($update['manualLanes'], $schedule, $freqType);
        } else {
          throw new Exception("Unprocessable Entity: Given Frequent Type is invalid.");
        }
      }
      return true;
    });
  }
}
