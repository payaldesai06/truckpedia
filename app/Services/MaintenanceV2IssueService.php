<?php


namespace App\Services;

use App\Exports\MaintenanceIssueListReport;
use App\Models\AdminCompanyDetail;
use App\Models\AdminDetail;
use App\Models\DispacherDetail;
use App\Models\MaintenanceV2Issue;
use App\Models\TagOperatorDetail;
use App\Models\WarehouseOperatorDetail;
use Exception;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;
use App\Models\DriverDetail;
use App\Models\MaintenanceV2IssueAttachment;
use App\Models\Truck;
use App\Models\Trailer;
use App\Models\Logs\MaintenanceV2IssueLog;
use App\Models\Logs\TrailerLog;
use App\Models\Logs\TruckLog;
use Illuminate\Support\Facades\Log;
use Maatwebsite\Excel\Facades\Excel;

class MaintenanceV2IssueService {

  /**
   * Create maintenance issue.
   * @param $request
   * @return mixed
   */
  public function createMaintenanceIssue($request) {
    return DB::transaction(function () use ($request) {
      $getValidatedData = $this->getValidatedData();
      $category = 'M';
      $currentYearMonth = Carbon::now()->setTimezone('America/Los_Angeles')->format('ym');
      $prefix = $category . $currentYearMonth;
      $fromDate = Carbon::now()->subDays(33)->format(config('constant.date_time_format'));
      $checkIssueNumber = MaintenanceV2Issue::where('company_id', $request->companyId)
        ->where('issue_number', 'LIKE', $prefix . '-%')
        ->where('created_at', '>', $fromDate)
        ->orderByDesc('id')
        ->withTrashed()
        ->value('issue_number');
      if (!empty($checkIssueNumber)) {
        $numberArray = explode('-', $checkIssueNumber);
        $newNumber = (int)$numberArray[1] + 1;
      } else {
        $newNumber = 1;
      }
      $getValidatedData['issue_number'] = $prefix . '-' . sprintf('%04d', $newNumber);
      $maintenanceIssue = MaintenanceV2Issue::create($getValidatedData);
      if (!empty($request->attachments)) {
        $attachments = [];
        foreach ($request->attachments as $attachment) {
          $attachments[] = ['filename' => $attachment['fileName'], 'original_filename' => $attachment['originalFileName']];
        }
        $maintenanceIssue->attachments()->createMany($attachments);
      }
      $this->logMaintenanceIssue($maintenanceIssue);
      return $maintenanceIssue;
    });
  }

  /**
   * Validated request data to create Maintenance Issue.
   * @return array
   * @throws Exception
   */
  private function getValidatedData(): array {
    return [
      'company_id' => request('companyId'),
      'status' => array_search(request('status'), config('constant.maintenance.issue.status')) ?? null,
      'reported_by_user_id' => request('reportedByUserId') ?? null,
      'truck_id' => request('vehicleType') == 'truck' ? request('vehicleId') : null,
      'trailer_id' => request('vehicleType') == 'trailer' ? request('vehicleId') : null,
      'service_type' => empty(request('serviceTypeId')) ? request('serviceType') : null,
      'service_type_id' => request('serviceTypeId') ?? null,
      'priority' => !empty(request('priority')) ? array_search(request('priority'), config('constant.maintenance.issue.priority')) : null,
      'notes' => request('notes') ?? null,
      'service_location' => request('serviceLocation') ?? null,
      'scheduled_start_time' => request('scheduledStartTime') ?? null,
      'estimated_completion_time' => request('estimatedCompletionTime') ?? null,
      'estimated_cost' => request('estimatedCost') ?? null,
      'arrived_for_service' => request('arrivedForService') ?? null,
      'service_start_time' => request('serviceStartTime') ?? null,
      'updated_estimated_completion_time' => request('updatedEstimatedCompletionTime') ?? null,
      'service_completed_time' => request('serviceCompletedTime') ?? null,
      'time_in_service' => request('timeInService') ?? null,
      'final_cost' => request('finalCost') ?? null,
      'odometer' => request('odometer') ?? null,
      'last_modified_by_user_id' => Auth::id()
    ];
  }


  /**
   * Return the link of maintenance issue list file
   * @param $maintenanceIssues
   * @return array
   * @throws Exception
   */
  function maintenanceIssueListExport($maintenanceIssues): array {
    $url = getAuthAdminCompanyId() . '-Maintenance-Issue-List-Report.xlsx';
    $path = config('constant.export_path') . $url;
    $getReport = new MaintenanceIssueListReport($maintenanceIssues);
    Excel::store($getReport, $path, 's3');
    return [
      "download_url" => getExportFile($url)
    ];
  }

  /**
   * Get Maintenance Issue List.
   * @return mixed
   * @throws Exception
   */
  public function getMaintenanceIssueList() {
    $companyId = getAuthAdminCompanyId();
    $companyTimezone = AdminCompanyDetail::where('id', $companyId)->pluck('timezone')->first();
    $query = MaintenanceV2Issue::where('company_id', $companyId)->with([
      'truck:id,number,year,make,truck_vin',
      'trailer:id,number,year,make,vin',
      'lastModifiedUser:id,first_name,last_name',
      'serviceType:id,service_type'
    ])->orderBy('id', 'desc');
    if (request('toDownload') == 1) {
      $maintenanceV2Issues = $query->with('reportedByUser:id,first_name,last_name')->get();
    } else {
      $maintenanceV2Issues = $query->select(
        'id',
        'issue_number',
        'status',
        'priority',
        'created_at',
        'notes',
        'service_location',
        'scheduled_start_time',
        'estimated_completion_time',
        'arrived_for_service',
        'service_start_time',
        'updated_estimated_completion_time',
        'service_completed_time',
        'truck_id',
        'trailer_id',
        'last_modified_by_user_id'
      )->paginate(request('pageSize') ?? config('pagination.pageSize'));
    }
    foreach ($maintenanceV2Issues as $issue) {
      $issue['dateReported'] = convertUtcTimestampToLocal(
        $issue->created_at,
        $companyTimezone
      );
    }
    return $maintenanceV2Issues;
  }


  /**
   * @param $request
   * @return array
   * @throws Exception
   */
  public function getIssueAttachmentsUploadUrls($request): array {
    $response = [];
    $companyId = getAuthAdminCompanyId();
    foreach ($request->issueAttachments as $index => $issueAttachment) {
      $response[] = $this->generateFileNameAndPresignedUrl($companyId, $issueAttachment['extension'], $index);
    }
    return $response;
  }


  /**
   * Get Carrier Website Upload URL.
   * @param $companyId
   * @param $extension
   * @param $index
   * @return array
   */
  private function generateFileNameAndPresignedUrl($companyId, $extension, $index): array {
    $fileName = 'mi-' . generateUniqueFileName($companyId, $extension, $index);
    return [
      'fileName' => $fileName,
      'url' => generatePresignedUrl($fileName, config('constant.s3.maintenanceV2.issue'))
    ];
  }


  /**
   * Get maintenance issue details.
   * @throws Exception
   */
  public function getMaintenanceDetails() {
    $maintenanceIssue = MaintenanceV2Issue::where('id', request('id'))
      ->where('company_id', getAuthAdminCompanyId())
      ->with([
        'truck:id,number,truck_vin,make,year',
        'trailer:id,number,vin,make,year',
        'reportedByUser:id,role',
        'attachments:id,maintenance_v2_issue_id,original_filename,filename',
        'serviceType:id,service_type'
      ])
      ->first();

    if (empty($maintenanceIssue)) {
      throw new Exception('response.error');
    }

    $maintenanceIssue->reportedByUserFullName = $this->getUserFullName($maintenanceIssue->reportedByUser);
    if (!empty($maintenanceIssue->truck_id)) {
      $maintenanceIssue->vehicleNumber = $maintenanceIssue->truck->number;
      $maintenanceIssue->vin = $maintenanceIssue->truck->truck_vin;
      $maintenanceIssue->make = $maintenanceIssue->truck->make;
      $maintenanceIssue->year = $maintenanceIssue->truck->year;
    } elseif ($maintenanceIssue->trailer_id) {
      $maintenanceIssue->vehicleNumber = $maintenanceIssue->trailer->number;
      $maintenanceIssue->vin = $maintenanceIssue->trailer->vin;
      $maintenanceIssue->make = $maintenanceIssue->trailer->make;
      $maintenanceIssue->year = $maintenanceIssue->trailer->year;
    } else {
      $maintenanceIssue->vehicleNumber = '';
    }
    return $maintenanceIssue;
  }

  /**
   * Get Users Details by Users role.
   * @param $user
   * @return string
   */
  private function getUserFullName($user): string {
    if (empty($user)) {
      return "";
    }
    switch ($user->role) {
      case config('constant.roles.admin'):
        $user = AdminDetail::select('id', 'user_id', 'first_name', 'last_name')
          ->where('user_id', $user->id)
          ->first();
        $fullName = "{$user->first_name} {$user->last_name}";
        break;
      case config('constant.roles.dispatcher'):
        $user = DispacherDetail::select('id', 'user_id', 'first_name', 'last_name')
          ->where('user_id', $user->id)
          ->first();
        $fullName = "{$user->first_name} {$user->last_name}";
        break;
      case config('constant.roles.warehouse_operator'):
        $user = WarehouseOperatorDetail::select('id', 'user_id', 'first_name', 'last_name')
          ->where('user_id', $user->id)
          ->first();
        $fullName = "{$user->first_name} {$user->last_name}";
        break;
      case  config('constant.roles.tag_operator'):
        $user = TagOperatorDetail::select('id', 'user_id', 'first_name', 'last_name')
          ->where('user_id', $user->id)
          ->first();
        $fullName = "{$user->first_name} {$user->last_name}";
        break;
      case config('constant.roles.driver'):
        $user = DriverDetail::select('id', 'user_id', 'name')
          ->where('user_id', $user->id)
          ->first();
        $fullName = $user->name;
        break;
      default:
        $fullName = '';
    }
    return $fullName;
  }

  /**
   * Delete maintenance issue.
   * @param $request
   * @return bool
   */
  public function deleteMaintenanceIssue($request): bool {
    return DB::transaction(function () {
      $id = request('id');
      $currentDate = Carbon::now();
      return MaintenanceV2Issue::where('id', $id)->where('company_id', getAuthAdminCompanyId())->update(['deleted_at' => $currentDate, 'last_modified_by_user_id' => Auth::id()]);
    });
  }

  /**
   * Update maintenance issue.
   * @param $request
   * @return mixed
   */
  public function updateMaintenanceIssue($request) {
    return DB::transaction(function () use ($request) {
      $maintenanceIssue = MaintenanceV2Issue::with(['attachments'])
        ->where('id', $request->id)
        ->where('company_id', $request->companyId)
        ->first();
      $oldStatus = $maintenanceIssue->status;
      $maintenanceIssue->fill($this->getValidatedData())->save();
      if ($request->has('attachments')) {
        $existingAttachments = $maintenanceIssue->attachments;
        $existingAttachmentIds = $existingAttachments->pluck('id')->toArray() ?? [];
        $newAttachments = $request->attachments;
        $newAttachmentIds = array_column($newAttachments, 'id');
        //delete not present attachments
        $maintenanceIssue->attachments()
          ->whereIn(
            'id',
            array_diff($existingAttachmentIds, $newAttachmentIds ?? [])
          )->delete();
        //add new attachments
        $attachmentsToCreate = [];
        foreach ($newAttachments as $attachment) {
          if (empty($attachment['id'])) {
            $attachmentsToCreate[] = ['filename' => $attachment['fileName'], 'original_filename' => $attachment['originalFileName']];
          }
        }
        if (!empty($attachmentsToCreate)) $maintenanceIssue->attachments()->createMany($attachmentsToCreate);
      }
      $newStatus = array_search(request('status'), config('constant.maintenance.issue.status')) ?? null;
      if ($oldStatus != $newStatus) {
        $this->logMaintenanceIssue($maintenanceIssue);
      }
      return $maintenanceIssue;
    });
  }

  /**
   * Get Vehicle Maintenance Issue List.
   * @param $request
   * @return mixed
   * @throws Exception
   */
  public function getVehicleMaintenanceIssueList($request) {
    $type = $request->type;
    $vehicleId = $request->vehicleId;
    $pageSize = $request->pageSize;
    if ($type == config('constant.maintenance_asset_type.truck')) {
      $truck = Truck::where('id', $vehicleId)->exists();
      if (empty($truck)) {
        throw new Exception(config('response.truck.not_found'));
      }
    }
    if ($type == config('constant.maintenance_asset_type.trailer')) {
      $trailer = Trailer::where('id', $vehicleId)->exists();
      if (empty($trailer)) {
        throw new Exception(config('response.trailer.not_found'));
      }
    }
    return $this->getVehicleMaintenanceIssues($type, $vehicleId, $pageSize);
  }

  /**
   * Get vehicle maintenance issue list.
   * @param $type
   * @param $vehicleId
   * @param null $pageSize
   * @return array
   * @throws Exception
   */
  public function getVehicleMaintenanceIssues($type, $vehicleId, $pageSize = null) {
    $perPage = $pageSize ?? config('constant.pagination.pageSize');
    $maintenanceV2IssueData = MaintenanceV2Issue::select('id', 'issue_number', 'status', 'priority', 'notes', 'service_location', 'service_type', 'service_start_time', 'final_cost', 'service_completed_time', 'truck_id', 'trailer_id', 'last_modified_by_user_id')
      ->where('company_id', getAuthAdminCompanyId())->with(['lastModifiedUser:id,first_name,last_name']);
    if ($type == config('constant.maintenance_asset_type.truck')) {
      $maintenanceV2IssueData->where('truck_id', $vehicleId);
    }
    if ($type == config('constant.maintenance_asset_type.trailer')) {
      $maintenanceV2IssueData->where('trailer_id', $vehicleId);
    }
    $maintenanceV2IssueData->orderByDesc('id');
    return $maintenanceV2IssueData->paginate($perPage);
  }

  /**
   * Change maintenance issue status.
   * @param $request
   * @return mixed
   * @throws Exception
   */
  public function changeMaintenanceIssueStatus($request) {
    $maintenanceIssue = MaintenanceV2Issue::where('id', $request->id)->where('company_id', getAuthAdminCompanyId())->select('id', 'status', 'truck_id', 'trailer_id')->first();
    $oldStatus = $maintenanceIssue->status;
    $newStatus = array_search(request('status'), config('constant.maintenance.issue.status')) ?? null;
    if (empty($maintenanceIssue)) {
      throw new Exception(config('response.maintenance.issue.not_found'));
    }
    $updateData = ['status' => $newStatus, 'last_modified_by_user_id' => Auth::id()];
    $maintenanceIssue->fill($updateData)->save();
    if ($oldStatus != $newStatus) {
      $this->logMaintenanceIssue($maintenanceIssue);
    }
    return $maintenanceIssue;
  }

  /**
   * Add Maintenance issue logs with Truck/Trailer logs.
   * @param $maintenanceIssue
   * @return void
   */
  private function logMaintenanceIssue($maintenanceIssue): void {
    try {
      DB::transaction(function () use ($maintenanceIssue) {
        if (empty($maintenanceIssue)) {
          Log::error("Maintenance Issue: Not found.");
          return;
        }
        $carbonNow = Carbon::now();
        $externalTrackingService = new ExternalTrackingService();
        $vehicleLocation = $externalTrackingService->getTruckTrailerLocation(getAuthAdminCompanyId(), $maintenanceIssue->truck_id, $maintenanceIssue->trailer_id);
        $MaintenanceV2IssueLog = MaintenanceV2IssueLog::create([
          'issue_id' => $maintenanceIssue->id,
          'new_status' => $maintenanceIssue->status,
          'vehicle_location' => $vehicleLocation,
          'modified_by_user_id' => Auth::id(),
          'created_at' => $carbonNow
        ]);
        /* add truck or trailer log based on type */
        $type = array_search('maintenance', config('constant.logs.truckAndTrailerType')) ?? null;
        if (!empty($maintenanceIssue->truck_id)) {
          TruckLog::create([
            'truck_id' => $maintenanceIssue->truck_id,
            'type' => $type,
            'maintenance_issue_log_id' => $MaintenanceV2IssueLog->id,
            'created_at' => $carbonNow
          ]);
        }
        if (!empty($maintenanceIssue->trailer_id)) {
          TrailerLog::create([
            'trailer_id' => $maintenanceIssue->trailer_id,
            'type' => $type,
            'maintenance_issue_log_id' => $MaintenanceV2IssueLog->id,
            'created_at' => $carbonNow
          ]);
        }
      });
      return;
    } catch (Exception $exception) {
      Log::error($exception);
    }
  }
}
