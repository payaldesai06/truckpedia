<?php

namespace App\Services;

use App\Http\Requests\Api\Automation\CreateAutomationRequest;
use App\Mail\Automation\AutomationMail;
use App\Mail\Automation\AutomationReminderMail;
use App\Models\AdminCompanyDetail;
use App\Models\Automation;
use App\Models\AutomationSchedule;
use App\Models\AutomationScheduleAction;
use App\Models\AutomationReminder;
use App\Models\AutomationReminderAction;
use App\Models\AutomationReminderAsset;
use App\Models\DriverDetail;
use App\Models\Truck;
use App\Models\Trailer;
use Carbon\Carbon;
use Exception;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;
use App\Models\User;

class AutomationService {
  /**
   * Get All automation using company id.
   * @return mixed
   * @throws Exception
   */
  public function getAllAutomations() {
    return $this->companyAutomationDetails(getAuthAdminCompanyId());
  }

  /**
   * Get current company automation details.
   * @param $companyId
   * @return mixed
   * @throws Exception
   */
  public function companyAutomationDetails($companyId) {
    $automationData = Automation::where('company_id', $companyId)
      ->first();
    if (empty($automationData)) {
      throw new Exception("No data found.");
    }
    return [
      'automation' => $automationData,
      'schedule' => $this->getCompanyAutomationSchedules($companyId) ?? [],
      'reminder' => $this->getCompanyAutomationReminders($companyId) ?? [],
    ];
  }

  private function getCompanyAutomationSchedules($companyId) {
    return AutomationSchedule::with('actions')->where('company_id', $companyId)->get();
  }

  private function getCompanyAutomationReminders($companyId) {
    $assetTypeTruck = array_search('truck', config('constant.automation.reminder.asset.assetType'));
    $assetTypeTrailer = array_search('trailer', config('constant.automation.reminder.asset.assetType'));
    $assetTypeDriver = array_search('driver', config('constant.automation.reminder.asset.assetType'));
    $automationReminders = AutomationReminder::with(['actions', 'assets'])->where('company_id', $companyId)->get();
    $automationAssets = $automationReminders->pluck('assets')->flatten();
    $truckIds = $automationAssets->where('asset_type', $assetTypeTruck)->pluck('asset_original_id')->unique()->toArray();
    $trailerIds = $automationAssets->where('asset_type', $assetTypeTrailer)->pluck('asset_original_id')->unique()->toArray();
    $driverIds = $automationAssets->where('asset_type', $assetTypeDriver)->pluck('asset_original_id')->unique()->toArray();
    $inactiveTrucks = Truck::whereIn('id', $truckIds)->where('status', '!=', config('constant.status.truck.active'))->pluck('id')->toArray();
    $inactiveTrailers = Trailer::whereIn('id', $trailerIds)->where('status', '!=', config('constant.status.trailer.active'))->pluck('id')->toArray();
    $inactiveDrivers = User::whereIn('id', $driverIds)->where('status', '!=', config('constant.status.driver.active'))->pluck('id')->toArray();
    return $automationReminders->map(function ($reminder) use ($inactiveTrucks, $inactiveTrailers, $assetTypeTruck, $assetTypeTrailer, $inactiveDrivers, $assetTypeDriver) {
      $reminder->assets = $reminder->assets->reject(function ($asset) use ($inactiveTrucks, $inactiveTrailers, $assetTypeTruck, $assetTypeTrailer, $inactiveDrivers, $assetTypeDriver) {
        if ($asset->asset_type == $assetTypeTruck) {
          if (in_array($asset->asset_original_id, $inactiveTrucks)) {
            return true;
          }
        } elseif ($asset->asset_type == $assetTypeTrailer) {
          if (in_array($asset->asset_original_id, $inactiveTrailers)) {
            return true;
          }
        } elseif ($asset->asset_type == $assetTypeDriver) {
          if (in_array($asset->asset_original_id, $inactiveDrivers)) {
            return true;
          }
        }
        /* false means we don’t reject this asset. */
        return false;
      });
      return $reminder;
    });
  }

  /**
   * Update Automation settings.
   * @param $request
   * @return mixed
   * @throws Exception
   */
  public function updateAutomation($request) {
    return DB::transaction(function () use ($request) {
      $companyId = getAuthAdminCompanyId();
      $automationData = [];

      if ($request->has('driver_start_load')) {
        $automationData = array_merge($automationData, [
          'driver_start_load_dispatcher' => $request->driver_start_load['dispatcher'] == 'email' ? 1 : null ?? null,
          'driver_start_load_customer' => !empty($request->driver_start_load['customer']) && $request->driver_start_load['customer'] == 'email' ? 1 : null ?? null,
          'driver_start_load_collaborator' => $request->driver_start_load['collaborator'] == 'email' ? 1 : null ?? null,
          'driver_start_load_emails' => implode(',', $request->driver_start_load['extra_emails']) ?? null
        ]);
      }

      if ($request->has('driver_shipper_loaded')) {
        $automationData = array_merge($automationData, [
          'driver_shipper_loaded_dispatcher' => $request->driver_shipper_loaded['dispatcher'] == 'email' ? 1 : null ?? null,
          'driver_shipper_loaded_customer' => !empty($request->driver_shipper_loaded['customer']) && $request->driver_shipper_loaded['customer'] == 'email' ? 1 : null ?? null,
          'driver_shipper_loaded_collaborator' => $request->driver_shipper_loaded['collaborator'] == 'email' ? 1 : null ?? null,
          'driver_shipper_loaded_emails' => implode(',', $request->driver_shipper_loaded['extra_emails']) ?? null,
        ]);
      }

      if ($request->has('driver_shipper_arrived')) {
        $automationData = array_merge($automationData, [
          'driver_shipper_arrived_dispatcher' => $request->driver_shipper_arrived['dispatcher'] == 'email' ? 1 : null ?? null,
          'driver_shipper_arrived_customer' => !empty($request->driver_shipper_arrived['customer']) && $request->driver_shipper_arrived['customer'] == 'email' ? 1 : null ?? null,
          'driver_shipper_arrived_collaborator' => $request->driver_shipper_arrived['collaborator'] == 'email' ? 1 : null ?? null,
          'driver_shipper_arrived_emails' => implode(',', $request->driver_shipper_arrived['extra_emails']) ?? null,
        ]);
      }

      if ($request->has('driver_receiver_arrived')) {
        $automationData = array_merge($automationData, [
          'driver_receiver_arrived_dispatcher' => $request->driver_receiver_arrived['dispatcher'] == 'email' ? 1 : null ?? null,
          'driver_receiver_arrived_customer' => !empty($request->driver_receiver_arrived['customer']) && $request->driver_receiver_arrived['customer'] == 'email' ? 1 : null ?? null,
          'driver_receiver_arrived_collaborator' => $request->driver_receiver_arrived['collaborator'] == 'email' ? 1 : null ?? null,
          'driver_receiver_arrived_emails' => implode(',', $request->driver_receiver_arrived['extra_emails']) ?? null,
        ]);
      }

      if ($request->has('driver_receiver_unloaded')) {
        $automationData = array_merge($automationData, [
          'driver_receiver_unloaded_dispatcher' => $request->driver_receiver_unloaded['dispatcher'] == 'email' ? 1 : null ?? null,
          'driver_receiver_unloaded_customer' => !empty($request->driver_receiver_unloaded['customer']) && $request->driver_receiver_unloaded['customer'] == 'email' ? 1 : null ?? null,
          'driver_receiver_unloaded_collaborator' => $request->driver_receiver_unloaded['collaborator'] == 'email' ? 1 : null ?? null,
          'driver_receiver_unloaded_emails' => implode(',', $request->driver_receiver_unloaded['extra_emails']) ?? null,
        ]);
      }

      if ($request->has('driver_end_load')) {
        $automationData = array_merge($automationData, [
          'driver_end_load_dispatcher' => $request->driver_end_load['dispatcher'] == 'email' ? 1 : null ?? null,
          'driver_end_load_customer' => !empty($request->driver_end_load['customer']) && $request->driver_end_load['customer'] == 'email' ? 1 : null ?? null,
          'driver_end_load_collaborator' => $request->driver_end_load['collaborator'] == 'email' ? 1 : null ?? null,
          'driver_end_load_emails' => implode(',', $request->driver_end_load['extra_emails']) ?? null,
        ]);
      }

      if ($request->has('driver_upload')) {
        $automationData = array_merge($automationData, [
          'driver_upload_dispatcher' => $request->driver_upload['dispatcher'] == 'email' ? 1 : null ?? null,
          'driver_upload_customer' => !empty($request->driver_upload['customer']) && $request->driver_upload['customer'] == 'email' ? 1 : null ?? null,
          'driver_upload_collaborator' => $request->driver_upload['collaborator'] == 'email' ? 1 : null ?? null,
          'driver_upload_emails' => implode(',', $request->driver_upload['extra_emails']) ?? null,
        ]);
      }

      if (array_key_exists('loadCollaboratorAddedNotification', $request->toArray())) {
        $automationData['load_collaborator_added_notification'] =
          $request->loadCollaboratorAddedNotification == true ? 1 : null;
      }

      if (!empty($automationData)) {
        Automation::where('company_id', $companyId)
          ->update(
            $automationData
          );
      }

      if ($request->has('schedule')) {
        $requestSchedule = json_decode(json_encode($request->schedule));
        $automationSchedule = AutomationSchedule::where('id', $requestSchedule->id)
          ->where('company_id', getAuthAdminCompanyId())
          ->first();
        $freqType = array_search($requestSchedule->freqType, config('constant.automation.schedule.freqType'));
        $selectedDates = !empty($requestSchedule->selectedDates) ? implode(',', $requestSchedule->selectedDates) : null;
        if ($this->isScheduleChanged($automationSchedule, $freqType, $requestSchedule, $selectedDates)) {
          $nextRunUtcTime = $this->calculateFirstRunTime($requestSchedule->startDate, $requestSchedule->startTime, $requestSchedule->selectedDates, $freqType);
          $automationSchedule->update([
            'freq_type' => $freqType,
            'freq_interval' => $requestSchedule->freqInterval ?? null,
            'selected_dates' => $selectedDates,
            'original_start_date' => $requestSchedule->startDate ?? null,
            'original_start_time' => $requestSchedule->startTime ?? null,
            'next_run_utc_time' => $nextRunUtcTime
          ]);
        }
        $updatedActionIds = collect($requestSchedule->actions)->pluck('actionId')->toArray();
        $automationScheduleAction = AutomationScheduleAction::where('automation_schedule_id', $requestSchedule->id)->get();
        if (!empty($automationScheduleAction)) {
          AutomationScheduleAction::whereIn('id', array_diff($automationScheduleAction->pluck('id')->toArray(), $updatedActionIds ?? []))
            ->delete();
        }
        foreach ($requestSchedule->actions as $action) {
          $actionType = $action->actionType ?? null;
          $id = $action->actionId ?? null;
          unset($action->actionType);
          unset($action->actionId);
          AutomationScheduleAction::updateOrCreate([
            'id' => $id,
            'automation_schedule_id' => $requestSchedule->id,
          ], [
            'action' => array_search($actionType, config('constant.automation.action.actionType')),
            'action_details' => json_encode($action)
          ]);
        }
      } else if ($request->has('reminder')) {
        $requestReminder = json_decode(json_encode($request->reminder));
        $automationReminder = AutomationReminder::where('id', $requestReminder->id)
          ->where('company_id', getAuthAdminCompanyId())
          ->first();
        $freqType = array_search($requestReminder->freqType, config('constant.automation.reminder.freqType'));
        $inAdvance = $requestReminder->inAdvance;
        $automationReminder->update([
          'category' => array_search($requestReminder->category, config('constant.automation.reminder.category')),
          'freq_type' => $freqType,
          'freq_interval' => $requestReminder->freqInterval ?? null,
          'in_advance' => !empty($inAdvance) ? implode(',', $inAdvance) : null
        ]);
        $updatedActionIds = collect($requestReminder->actions)->pluck('actionId')->toArray();
        $automationReminderAction = AutomationReminderAction::where('automation_reminder_id', $requestReminder->id)->get();
        if (!empty($automationReminderAction)) {
          AutomationReminderAction::whereIn('id', array_diff($automationReminderAction->pluck('id')->toArray(), $updatedActionIds ?? []))->delete();
        }
        foreach ($requestReminder->actions as $action) {
          $actionType = $action->actionType ?? null;
          $id = $action->actionId ?? null;
          unset($action->actionType);
          unset($action->actionId);
          AutomationReminderAction::updateOrCreate([
            'id' => $id,
            'automation_reminder_id' => $requestReminder->id,
          ], [
            'action' => array_search($actionType, config('constant.automation.action.actionType')),
            'action_details' => json_encode($action)
          ]);
        }
        $updatedAssetIds = collect($requestReminder->assets)->pluck('reminderAssetId')->toArray();
        $automationReminderAsset = AutomationReminderAsset::where('automation_reminder_id', $requestReminder->id)->get();
        if (!empty($automationReminderAsset)) {
          AutomationReminderAsset::whereIn('id', array_diff($automationReminderAsset->pluck('id')->toArray(), $updatedAssetIds ?? []))->delete();
        }
        foreach ($requestReminder->assets as $asset) {
          $fieldsToCheck = null;
          if (!empty($asset->fieldsToCheck)) {
            //replace string values to number values for fieldsToCheck field
            $assetType = $asset->type;
            $fieldsToCheckArray = array_map(function ($element) use ($assetType) {
              return array_search($element, config('constant.automation.reminder.asset.fieldsToCheck.' . $assetType . '.values'));
            }, $asset->fieldsToCheck);
            $fieldsToCheck = implode(',', $fieldsToCheckArray);
          }
          AutomationReminderAsset::updateOrCreate([
            'id' => $asset->reminderAssetId ?? null,
            'automation_reminder_id' => $requestReminder->id,
          ], [
            'asset_type' => array_search($asset->type, config('constant.automation.reminder.asset.assetType')),
            'asset_original_id' => $asset->originalAssetId,
            'due_date' => $asset->nextServiceAt ?? null,
            'original_input_due_date' => $asset->nextServiceAt ?? null,
            'fields_to_check' => $fieldsToCheck
          ]);
        }
      }
    });
  }

  /**
   * Check schedule changed or not.
   * @param $automationSchedule
   * @param $freqType
   * @param $request
   * @param $selectedDates
   * @return bool
   * @throws Exception
   */
  private function isScheduleChanged($automationSchedule, $freqType, $request, $selectedDates): bool {
    try {
      if (
        $automationSchedule->freq_type != $freqType || $automationSchedule->freq_interval != $request->freqInterval ||
        $automationSchedule->selected_dates != $selectedDates || $automationSchedule->original_start_date != $request->startDate ||
        substr($automationSchedule->original_start_time, 0, 5) != $request->startTime
      ) {
        return $this->isValidStartDateAndTime($request->startDate, $request->startTime);
      }
      return false;
    } catch (Exception $exception) {
      Log::error($exception);
      throw new Exception($exception->getMessage());
    }
  }

  /**Log
   * Check start date and time is valid or not.
   * @param $startDate
   * @param $startTime
   * @return bool
   * @throws Exception
   */
  private function isValidStartDateAndTime($startDate, $startTime): bool {
    try {
      $adminCompanyTimezone = $this->getAdminCompanyTimeZone() ?? 'America/Los_Angeles';
      $startDateAndTime = Carbon::parse($startDate . ' ' . $startTime, $adminCompanyTimezone)->setTimezone('UTC');
      if ($startDateAndTime <= Carbon::now()) {
        throw new Exception("Start date and time has already passed.");
      }
      return true;
    } catch (Exception $exception) {
      Log::error($exception);
      throw new Exception($exception->getMessage());
    }
  }

  /**
   * Create Automation request.
   * @param CreateAutomationRequest $request
   * @return mixed
   */
  public function createAutomation(CreateAutomationRequest $request) {
    return DB::transaction(function () use ($request) {
      if ($request->schedule) {
        $requestSchedule = json_decode(json_encode($request->schedule));
        $freqType = array_search($requestSchedule->freqType, config('constant.automation.schedule.freqType'));
        $this->isValidStartDateAndTime($requestSchedule->startDate, $requestSchedule->startTime);
        $selectedDates = !empty($requestSchedule->selectedDates) ? $requestSchedule->selectedDates : null;
        $nextRunUtcTime = $this->calculateFirstRunTime($requestSchedule->startDate, $requestSchedule->startTime, $selectedDates, $freqType);
        $automation = AutomationSchedule::create([
          'company_id' => getAuthAdminCompanyId(),
          'freq_type' => $freqType,
          'freq_interval' => $requestSchedule->freqInterval,
          'selected_dates' => !empty($requestSchedule->selectedDates) ? implode(',', $requestSchedule->selectedDates) : null,
          'original_start_date' => $requestSchedule->startDate ?? null,
          'original_start_time' => $requestSchedule->startTime ?? null,
          'next_run_utc_time' => $nextRunUtcTime
        ]);

        $actionData = [];
        foreach ($requestSchedule->actions as $action) {
          $actionType = $action->actionType;
          unset($action->actionType);
          $actionData[] = [
            'action' => array_search($actionType, config('constant.automation.action.actionType')),
            'action_details' => json_encode($action)
          ];
        }
        $automation->actions()->createMany($actionData);
      } else if ($request->reminder) {
        $requestReminder = json_decode(json_encode($request->reminder));
        $freqType = array_search($requestReminder->freqType, config('constant.automation.reminder.freqType'));
        $automation = AutomationReminder::create([
          'company_id' => getAuthAdminCompanyId(),
          'category' => array_search($requestReminder->category, config('constant.automation.reminder.category')),
          'freq_type' => $freqType,
          'freq_interval' => $requestReminder->freqInterval ?? null,
          'in_advance' => !empty($requestReminder->inAdvance) ? implode(',', $requestReminder->inAdvance) : null
        ]);
        $actionData = [];
        foreach ($requestReminder->actions as $action) {
          $actionType = $action->actionType;
          unset($action->actionType);
          $actionData[] = [
            'action' => array_search($actionType, config('constant.automation.action.actionType')),
            'action_details' => json_encode($action)
          ];
        }
        $automation->actions()->createMany($actionData);
        $assetData = [];
        foreach ($requestReminder->assets as $asset) {
          $fieldsToCheck = null;
          if (!empty($asset->fieldsToCheck)) {
            //replace string values to number values for fieldsToCheck field
            $assetType = $asset->type;
            $fieldsToCheckArray = array_map(function ($element) use ($assetType) {
              return array_search($element, config('constant.automation.reminder.asset.fieldsToCheck.' . $assetType . '.values'));
            }, $asset->fieldsToCheck);
            $fieldsToCheck = implode(',', $fieldsToCheckArray);
          }
          $assetData[] = [
            'asset_type' => array_search($asset->type, config('constant.automation.reminder.asset.assetType')),
            'asset_original_id' => $asset->originalAssetId,
            'due_date' => $asset->nextServiceAt ?? null,
            'original_input_due_date' => $asset->nextServiceAt ?? null,
            'fields_to_check' => $fieldsToCheck
          ];
        }
        $automation->assets()->createMany($assetData);
      }
      return $automation;
    });
  }


  /**
   * Delete a automation schedule.
   * @param $request
   * @return bool
   */
  public function deleteAutomation($request): bool {
    $ret = false;
    if ($request->has('schedule')) {
      $id = $request->schedule['id'];
      $ret = DB::transaction(function () use ($id) {
        $currentDate = Carbon::now();
        AutomationScheduleAction::where('automation_schedule_id', $id)->update(['deleted_at' => $currentDate]);
        return AutomationSchedule::where('id', $id)->update(['deleted_at' => $currentDate]);
      });
    } else if ($request->has('reminder')) {
      $id = $request->reminder['id'];
      $ret = DB::transaction(function () use ($id) {
        $currentDate = Carbon::now();
        AutomationReminderAction::where('automation_reminder_id', $id)->update(['deleted_at' => $currentDate]);
        AutomationReminderAsset::where('automation_reminder_id', $id)->update(['deleted_at' => $currentDate]);
        return AutomationReminder::where('id', $id)->update(['deleted_at' => $currentDate]);
      });
    }
    return $ret;
  }

  public function scheduleCronJob() {
    $currentUtcTime = Carbon::now('UTC');

    $automationSchedules = AutomationSchedule::whereNotNull('next_run_utc_time')
      ->where('next_run_utc_time', '<=', $currentUtcTime)
      ->with(['actions'])
      ->get();

    foreach ($automationSchedules as $schedule) {
      try {
        foreach ($schedule->actions as $action) {
          Mail::queue(new AutomationMail($action));
        }
        /* re-calculate next run utc time */
        $nextRunUtcTime = $this->calculateNextRunUtcTime($schedule);
        $schedule->where('id', $schedule->id)->update(['next_run_utc_time' => $nextRunUtcTime]);
      } catch (Exception $exception) {
        Log::error($exception);
        Log::channel('slack')->critical($exception->getMessage());
      }
    }
  }

  /**
   * Get current company timezone.
   * @return mixed
   * @throws Exception
   */
  private function getAdminCompanyTimeZone($companyId = null) {
    return AdminCompanyDetail::where('id', !is_null($companyId) ? $companyId : getAuthAdminCompanyId())
      ->pluck('timezone')
      ->first();
  }

  /**
   * Calculate first run time using start date and start time.
   * @param $startDate
   * @param $startTime
   * @param $selectedDates
   * @param $freqType
   * @param null $companyId
   * @return Carbon|null
   * @throws Exception
   */
  public function calculateFirstRunTime($startDate, $startTime, $selectedDates, $freqType, $companyId = null): ?Carbon {
    $adminCompanyTimezone = $this->getAdminCompanyTimeZone($companyId) ?? 'America/Los_Angeles';
    $startDateAndTime = Carbon::parse($startDate . ' ' . $startTime, $adminCompanyTimezone);
    if (!is_null($selectedDates) && $freqType == array_search('week', config('constant.automation.schedule.freqType'))) {
      $weekday = $startDateAndTime->locale('en_US')->dayOfWeek;
      if (!in_array($weekday, $selectedDates)) {
        $candidateDates = [];
        foreach ($selectedDates as $date) {
          $candidateDates[] = (clone $startDateAndTime)->next($date)->toDateString();
        }
        if (count($candidateDates) > 0) {
          $finalStartDate = min($candidateDates);
          return Carbon::parse($finalStartDate . ' ' . $startTime, $adminCompanyTimezone)->setTimezone('UTC');
        }
      }
    } elseif (!is_null($selectedDates) && $freqType == array_search('month', config('constant.automation.schedule.freqType'))) {
      $candidateDates = [];
      $endOfCurrentMonth = Carbon::parse($startDate)->endOfMonth()->toDateString();
      // Consider case: today is 02/01 or10/15 or 10/31 or 2/28.
      // Selected Dates: [1,2], [4,15,20],[30,31,32]
      foreach ($selectedDates as $date) {
        if ($date < 32) {
          $candidateDates[] = $this->firstDateOfMonthOnOrAfterTarget($date, $startDate);
        } else {
          /* last day of month */
          $candidateDates[] = $endOfCurrentMonth;
        }
      }
      if (count($candidateDates) > 0) {
        $finalStartDate = min($candidateDates);
        return Carbon::parse($finalStartDate . ' ' . $startTime, $adminCompanyTimezone)->setTimezone('UTC');
      }
    }
    return $startDateAndTime->setTimezone('UTC');
  }

  private function firstDateOfMonthOnOrAfterTarget($day, $targetDateStr) {
    $i = 0;
    $startOfMonth = Carbon::parse($targetDateStr)->startOfMonth()->toDateString();
    $endOfMonth = Carbon::parse($targetDateStr)->endOfMonth()->toDateString();
    for ($i = 0; $i < 12; ++$i) {
      $tempDate = Carbon::parse($startOfMonth)->day($day)->toDateString();
      if ($tempDate >= $targetDateStr && $tempDate <= $endOfMonth) {
        return $tempDate;
      } else {
        $startOfMonth = Carbon::parse($targetDateStr)->startOfMonth()->addMonth()->startOfMonth()->toDateString();
        $endOfMonth = Carbon::parse($targetDateStr)->startOfMonth()->addMonth()->endOfMonth()->toDateString();
      }
    }
    return $targetDateStr;
  }

  /**
   * Calculate next run of cron in UTC format.
   * @param $schedule
   * @return Carbon|null
   * @throws Exception
   */
  public function calculateNextRunUtcTime($schedule): ?Carbon {
    $freqInterval = $schedule->freq_interval;
    $freqType = $schedule->freq_type;
    $userStartTime = $schedule->original_start_time;
    $adminCompanyTimezone = $this->getAdminCompanyTimeZone($schedule->company_id) ?? 'America/Los_Angeles';
    $lastRunLocalDate = Carbon::parse($schedule->next_run_utc_time)->setTimezone($adminCompanyTimezone)->toDateString();
    $selectedDates = !is_null($schedule->selected_dates) ? array_map('intval', explode(',', $schedule->selected_dates)) : [];

    if ($freqType == array_search('week', config('constant.automation.schedule.freqType'))) {
      $lastRunLocalDateEndOfWeek = Carbon::parse($lastRunLocalDate)->endOfWeek()->toDateString();
      $candidateDates = [];
      foreach ($selectedDates as $date) {
        $next = Carbon::parse($lastRunLocalDate)->next($date)->toDateString();
        if ($next <= $lastRunLocalDateEndOfWeek) {
          $candidateDates[] = $next;
        }
      }

      if (count($candidateDates) > 0) {
        $finalStartDate = min($candidateDates);
        return Carbon::parse($finalStartDate . ' ' . $userStartTime, $adminCompanyTimezone)->setTimezone('UTC');
      } else {
        $lastLocalDateStartOfWeek = Carbon::parse($lastRunLocalDate)->startOfWeek();
        $newLocalDateStartOfWeek = $lastLocalDateStartOfWeek->addWeeks($freqInterval)->toDateString();
        return $this->calculateFirstRunTime($newLocalDateStartOfWeek, $userStartTime, $selectedDates, $freqType, $schedule->company_id);
      }
    } elseif ($freqType == array_search('month', config('constant.automation.schedule.freqType'))) {
      $lastRunLocalDateEndOfMonth = Carbon::parse($lastRunLocalDate)->endOfMonth()->toDateString();
      $candidateDates = [];
      foreach ($selectedDates as $date) {
        $tempDate = null;
        if ($date < 32) {
          $tempDate = $this->firstDateOfMonthOnOrAfterTarget($date, $lastRunLocalDate);
        } else {
          /* last day of month */
          $tempDate = $lastRunLocalDateEndOfMonth;
        }
        if ($tempDate > $lastRunLocalDate && $tempDate <= $lastRunLocalDateEndOfMonth) {
          $candidateDates[] = $tempDate;
        }
      }

      if (count($candidateDates) > 0) {
        $finalStartDate = min($candidateDates);
        return Carbon::parse($finalStartDate . ' ' . $userStartTime, $adminCompanyTimezone)->setTimezone('UTC');
      } else {
        $lastLocalDateStartOfMonth = Carbon::parse($lastRunLocalDate)->startOfMonth();
        $newLocalDateStartOfMonth = $lastLocalDateStartOfMonth->addMonths($freqInterval)->toDateString();

        return $this->calculateFirstRunTime($newLocalDateStartOfMonth, $userStartTime, $selectedDates, $freqType, $schedule->company_id);
      }
    } elseif ($freqType == array_search('day', config('constant.automation.schedule.freqType'))) {
      $nextRunDate = Carbon::parse($lastRunLocalDate)->addDays($freqInterval)->toDateString();
      return Carbon::parse($nextRunDate . ' ' . $userStartTime, $adminCompanyTimezone)->setTimezone('UTC');
    } else {
      /*once*/
      return null;
    }
  }

  /**
   * Reminder mail on daily basis of Maintenance.
   * @return void
   */
  public function reminderDailyCronJob() {
    try {
      $automationReminders = AutomationReminder::whereIn('category', array_keys(config('constant.automation.reminder.category')))
        ->get();
      foreach ($automationReminders as $reminder) {
        try {
          $targetDueDates = [];
          $inAdvance = explode(',', $reminder->in_advance) ?? [];
          foreach ($inAdvance as $day) {
            $targetDueDates[] = Carbon::now()->addDays($day)->format(config('constant.date_format'));
          }
          if ($reminder->category == array_search('expiration', config('constant.automation.reminder.category'))) {
            $assets = $reminder->assets()->whereNotNull('fields_to_check');
          } else {
            //check expiry for maintenance category
            $assets = $reminder->assets()->whereIn('due_date', $targetDueDates);
          }
          $assets = $assets->get();
          //get all type assets
          $truckAssets = $assets->where('asset_type', array_search('truck', config('constant.automation.reminder.asset.assetType')));
          $trailerAssets = $assets->where('asset_type', array_search('trailer', config('constant.automation.reminder.asset.assetType')));
          $driverAssets = $assets->where('asset_type', array_search('driver', config('constant.automation.reminder.asset.assetType')));
          if ($truckAssets->isNotEmpty() || $trailerAssets->isNotEmpty() || $driverAssets->isNotEmpty()) {
            /* get active truck/trailer/driver assets */
            $activeTrucks = $this->getActiveAssets($reminder, $truckAssets, 'truck', $targetDueDates);
            $activeTrailers = $this->getActiveAssets($reminder, $trailerAssets, 'trailer', $targetDueDates);
            $activeDrivers = $this->getActiveAssets($reminder, $driverAssets, 'driver', $targetDueDates);

            $dueDateAssetsDetails = [];
            if ($activeTrucks->isNotEmpty()) {
              $truckAssetDetails = $this->getDueAssetsDetails($reminder, $activeTrucks, $truckAssets, 'truck', $targetDueDates) ?? [];
              $dueDateAssetsDetails = array_merge($dueDateAssetsDetails, $truckAssetDetails);
            }
            if ($activeTrailers->isNotEmpty()) {
              $trailerAssetDetails = $this->getDueAssetsDetails($reminder, $activeTrailers, $trailerAssets, 'trailer', $targetDueDates) ?? [];
              $dueDateAssetsDetails = array_merge($dueDateAssetsDetails, $trailerAssetDetails);
            }
            if ($activeDrivers->isNotEmpty()) {
              $trailerAssetDetails = $this->getDueAssetsDetails($reminder, $activeDrivers, $driverAssets, 'driver', $targetDueDates) ?? [];
              $dueDateAssetsDetails = array_merge($dueDateAssetsDetails, $trailerAssetDetails);
            }

            if (!empty($dueDateAssetsDetails)) {
              foreach ($reminder->actions as $action) {
                Mail::queue(new AutomationReminderMail($action, array_filter($dueDateAssetsDetails)));
              }
            }
          }
          if ($reminder->category == array_search('maintenance', config('constant.automation.reminder.category'))) {
            $nextDueDate = Carbon::now()->addDays($reminder->freq_interval)->format(config('constant.date_format'));
            $todayDueAssets = $reminder->assets()->where('due_date', Carbon::today()->toDateString())->get();
            foreach ($todayDueAssets as $todayDueAsset) {
              $todayDueAsset->due_date = $nextDueDate;
              $todayDueAsset->save();
            }
          }
        } catch (Exception $exception) {
          Log::error($exception);
          Log::channel('slack')->critical($exception->getMessage());
        }
      }
    } catch (Exception $exception) {
      Log::error($exception);
      Log::channel('slack')->critical($exception->getMessage());
    }
  }

  /**
   * Get Active Assets (Trucks, Trailers and Drivers).
   * @param $reminder
   * @param $asset
   * @param $assetType
   * @param $targetDueDates
   * @return Collection
   */
  private function getActiveAssets($reminder, $asset, $assetType, $targetDueDates): Collection {
    //get active truck assets
    $activeAsset = collect();
    $assetIds = $asset->pluck('asset_original_id')->unique()->toArray() ?? [];
    $isExpirationReminderCategory = false;
    if ($reminder->category == array_search('expiration', config('constant.automation.reminder.category'))) {
      $isExpirationReminderCategory = true;
    }
    if (!empty($assetIds)) {
      if ($assetType == 'truck') {
        $query = Truck::query()->whereIn('id', $assetIds)
          ->where('status', config('constant.status.truck.active'));
        if ($isExpirationReminderCategory) {
          $query->select(
            'id',
            'number',
            'inspection_expiry',
            'insurance_expire_date',
            'irp_expire_date',
            'registration_expire_date',
            'annual_permit_expire_date'
          )
            ->where(function ($innerQuery) use ($targetDueDates) {
              return $innerQuery->whereIn('inspection_expiry', $targetDueDates)
                ->orWhereIn('insurance_expire_date', $targetDueDates)
                ->orWhereIn('irp_expire_date', $targetDueDates)
                ->orWhereIn('registration_expire_date', $targetDueDates)
                ->orWhereIn('annual_permit_expire_date', $targetDueDates);
            });
        } else {
          $query->select('id', 'number');
        }
      } elseif ($assetType == 'trailer') {
        $query = Trailer::whereIn('id', $assetIds)
          ->where('status', config('constant.status.trailer.active'));
        //check trailer expiry for expiration category
        if ($isExpirationReminderCategory) {
          $query->select(
            'id',
            'number',
            'inspection_expiry',
            'insurance_expire_date',
            'registration_expire_date',
            'annual_permit_expire_date'
          )
            ->where(function ($innerQuery) use ($targetDueDates) {
              return $innerQuery->whereIn('inspection_expiry', $targetDueDates)
                ->orWhereIn('insurance_expire_date', $targetDueDates)
                ->orWhereIn('registration_expire_date', $targetDueDates)
                ->orWhereIn('annual_permit_expire_date', $targetDueDates);
            });
        } else {
          $query->select('id', 'number');
        }
      } else {
        /* asset type is driver */
        $query = DriverDetail::whereHas('user', function ($innerQuery) use ($assetIds) {
          $innerQuery->whereIn('id', $assetIds)->where('role', config('constant.roles.driver'))
            ->where('status', config('constant.status.driver.active'));
        });
        //check driver expiry for expiration category
        if ($isExpirationReminderCategory) {
          $query->select('id', 'user_id', 'name', 'medical_expire_date', 'driving_license_expire_date', 'occupation_expire_date', 'clearinghouse_expire_date')
            ->where(function ($query) use ($targetDueDates) {
              // This is because the previous out-source team used varchar type in DB...
              $varcharTargetDueDates = [];
              foreach ($targetDueDates as $oneDueDate) {
                $varcharTargetDueDates[] = $oneDueDate . " 00:00:00";
              }
              return $query->whereIn('medical_expire_date', $varcharTargetDueDates)
                ->orWhereIn('driving_license_expire_date', $varcharTargetDueDates)
                ->orWhereIn('occupation_expire_date', $targetDueDates)
                ->orWhereIn('clearinghouse_expire_date', $targetDueDates);
            });
        } else {
          $query->select('id', 'user_id', 'name');
        }
      }
      $activeAsset = $query->get();
    }
    return $activeAsset;
  }

  /**
   * Get Due Asset Details.
   * @param $reminder
   * @param $activeAssets
   * @param $assets
   * @param $assetType
   * @param $targetDueDates
   * @return array
   */
  private function getDueAssetsDetails($reminder, $activeAssets, $assets, $assetType, $targetDueDates): array {
    $dueDateAssetsDetails = [];
    foreach ($activeAssets as $activeAsset) {
      $dueDateAssetDetails = [];
      $activeAssetId = $assetType == 'driver' ? $activeAsset->user_id : $activeAsset->id;
      $asset = $assets->where('asset_original_id', $activeAssetId)->first();
      if ($reminder->category == array_search('expiration', config('constant.automation.reminder.category'))) {
        // asset for expiration category
        if (!empty($asset->fields_to_check)) {
          $fieldsToCheckArr = explode(",", $asset->fields_to_check);
          //expiry date fields
          foreach ($fieldsToCheckArr as $fieldsToCheck) {
            if ($assetType == 'truck') {
              $fieldsToCheckName = config('constant.automation.reminder.asset.fieldsToCheck.truck.names')[$fieldsToCheck];
              $fieldsToCheckDBColumnName = config('constant.automation.reminder.asset.fieldsToCheck.truck.columns')[$fieldsToCheck];
              $fieldsToCheckValue = config('constant.automation.reminder.asset.fieldsToCheck.truck.values')[$fieldsToCheck];
              $assetNumber = $activeAsset->number ?? null;
            } elseif ($assetType == 'trailer') {
              $fieldsToCheckName = config('constant.automation.reminder.asset.fieldsToCheck.trailer.names')[$fieldsToCheck];
              $fieldsToCheckDBColumnName = config('constant.automation.reminder.asset.fieldsToCheck.trailer.columns')[$fieldsToCheck];
              $fieldsToCheckValue = config('constant.automation.reminder.asset.fieldsToCheck.trailer.values')[$fieldsToCheck];
              $assetNumber = $activeAsset->number ?? null;
            } else {
              /* driver */
              $fieldsToCheckName = config('constant.automation.reminder.asset.fieldsToCheck.driver.names')[$fieldsToCheck];
              $fieldsToCheckDBColumnName = config('constant.automation.reminder.asset.fieldsToCheck.driver.columns')[$fieldsToCheck];
              $fieldsToCheckValue = config('constant.automation.reminder.asset.fieldsToCheck.driver.values')[$fieldsToCheck];
              $assetNumber = $activeAsset->name ?? null;
            }
            $fieldExpiryDate = Carbon::parse($activeAsset->$fieldsToCheckDBColumnName)->format('Y-m-d') ?? null;
            if (in_array($fieldExpiryDate, $targetDueDates)) {
              $dueDateAssetDetails[] = [
                'reminderCategory' => $reminder->category,
                'assetType' => $asset->asset_type,
                'assetNumber' => $assetNumber,
                'fieldName' => $fieldsToCheckName,
                'fieldValue' => $fieldsToCheckValue,
                'nextServiceAt' => $fieldExpiryDate
              ];
            }
          }
        }
      } else {
        // asset for maintenance category
        $dueDateAssetDetails[] = [
          'reminderCategory' => $reminder->category,
          'assetType' => $asset->asset_type,
          'assetNumber' => $activeAsset->number,
          'nextServiceAt' => $asset->due_date
        ];
      }
      $dueDateAssetsDetails = array_merge($dueDateAssetDetails, $dueDateAssetsDetails);
    }
    return $dueDateAssetsDetails;
  }
}
