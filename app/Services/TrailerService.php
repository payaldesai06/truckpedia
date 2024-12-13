<?php


namespace App\Services;

use App\Models\AdminCompanyDetail;
use App\Models\Trailer;
use Exception;
use GuzzleHttp\Exception\GuzzleException;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use App\Models\TrailerNote;
use App\Models\User;
use App\Models\TrailerFolder;
use App\Models\TrailerFile;
use App\Services\MaintenanceV2IssueService;
use App\Models\DriverDetail;
use App\Models\TrailerTag;
use Illuminate\Database\Eloquent\Builder;
use App\Services\Logs\VehicleLogService;
use Maatwebsite\Excel\Facades\Excel;
use App\Exports\TrailerListReport;

class TrailerService {
  public function getAllTrailer() {
    $companyId = Auth::user()->admin_company_detail_id;
    return Trailer::where('company_id', '=', $companyId)
      ->where('status', config('constant.status.trailer.active'))
      ->get();
  }

  public function trailerDatatable() {
    $per_page = 100; //request('rows') ?? config('response.per_page');
    $user = Auth::user();
    $companyId = $user->admin_company_detail_id;

    return Trailer::where('company_id', '=', $companyId)
      ->when(request()->has('trailer_number'), function ($query) {
        return $query->where('number', 'like', '%' . request('trailer_number') . '%');
      })->when(request()->has('trailer_type'), function ($query) {
        return $query->where('type', 'like', '%' . request('trailer_type') . '%');
      })->when(request()->has('sortField') && request()->has('sortOrder'), function ($query) {
        $fieldName = str_replace('trailer_', '', request('sortField'));
        return $query->orderBy($fieldName, request('sortOrder'));
      })->paginate($per_page);
  }

  public function createTrailer() {
    $user = Auth::user();
    $adminCompanyDetail = AdminCompanyDetail::select('driver_can_add_new_trailer')
      ->findOrFail($user->admin_company_detail_id);
    if ($user->role == 'driver' && !$adminCompanyDetail->driver_can_add_new_trailer) {
      throw new Exception('Please contact dispatchers to add the new trailer.');
    }

    $status = request('status');
    if (!$status) {
      $status = config('constant.status.trailer.active');
    }
    return Trailer::create([
      'user_id' => auth()->id(),
      'number' => request('trailer_number'),
      'type' => request('trailer_type'),
      'licence_plate' => request('licence_plate'),
      'licence_plate_expiry' => request('licence_plate_expiry'),
      'inspection_expiry' => request('inspection_expiry'),
      'status' => $status,
      'ownership' => request('ownership'),
      'company_id' => auth()->user()->admin_company_detail_id,
      'vin' => request('vin'),
      'make' => request('make'),
      'year' => request('year')
    ]);
  }

  public function updateTrailer() {
    $trailer = Trailer::find(request('trailer'));
    $trailer->update([
      'number' => request('trailer_number'),
      'type' => request('trailer_type'),
      'licence_plate' => request('licence_plate'),
      'licence_plate_expiry' => request('licence_plate_expiry'),
      'inspection_expiry' => request('inspection_expiry'),
      'status' => request('status'),
      'ownership' => request('ownership'),
      'vin' => request('vin'),
      'make' => request('make'),
      'year' => request('year')
    ]);
    return $trailer->refresh();
  }

  public function delete() {
    $id = request()->trailer;
    $trailer = Trailer::where('id', '=', $id);
    return $trailer->delete();
  }

  public function changeStatus() {
    tap(
      Trailer::query()->findOrFail(request('trailer')),
      function ($trailer) {
        $trailer->update(['status' => request('status')]);
      }
    );
  }

  public function search() {
    $companyId = Auth::user()->admin_company_detail_id;
    return Trailer::where('company_id', $companyId)->where('number', 'LIKE', '%' . request('number') . '%')->get();
  }

  /**
   * Get List trailer v2.
   * @param $request
   * @return mixed
   * @throws Exception
   */
  public function getListTrailerV2($request) {
    $perPage = $request->pageSize ?? config('constant.pagination.pageSize');
    $ret = Trailer::select('id', 'number', 'vin', 'make', 'year', 'licence_plate', 'status')
      ->with('driverDetails:assignment_trailer_id,id,user_id', 'driverDetails.user:id,first_name,last_name')
      ->with('tags:id,business_name')
      ->where('company_id', getAuthAdminCompanyId())
      ->when($request->has('filter.status'), function ($query) use ($request) {
        return $query->where('status', $request->filter['status']);
      })
      ->when($request->has('filter.trailerNumber'), function ($query) use ($request) {
        return $query->where('number', 'like', '%' . $request->filter['trailerNumber'] . '%');
      })
      ->when($request->has('filter.year'), function ($query) use ($request) {
        return $query->where('year', 'like', '%' . $request->filter['year'] . '%');
      })
      ->when($request->has('filter.make'), function ($query) use ($request) {
        return $query->where('make', 'like', '%' . $request->filter['make'] . '%');
      })
      ->when($request->has('filter.vin'), function ($query) use ($request) {
        return $query->where('vin', 'like', '%' . $request->filter['vin'] . '%');
      })
      ->when($request->has('filter.licensePlate'), function ($query) use ($request) {
        return $query->where('licence_plate', 'like', '%' . $request->filter['licensePlate'] . '%');
      })
      ->when(request()->filled('filter.driverName'), function ($query) {
        $name = request('filter.driverName');
        return $query->whereHas('driverDetails.user', function (Builder $query) use ($name) {
          return $query->whereRaw(
            "concat(COALESCE(`first_name`,''), ' ', COALESCE(`last_name`,'')) like '%$name%' "
          );
        });
      })
      ->when($request->has('filter.tagId'), function ($query) use ($request) {
        return $query->whereHas(
          'tags',
          function (Builder $query) use ($request) {
            $query->where('id', $request->filter['tagId']);
          }
        );
      });

    if (request('filter.toDownload') ?? null) {
      return $ret->with([
        'latestTrailerLog' => function ($query) {
          return $query->select(
            'id',
            'trailer_id',
            'type',
            'load_log_id',
            'maintenance_issue_log_id',
            'created_at'
          )->with([
            'loadLogs:id,load_id,type,trailer_location',
            'loadLogs.loadDetail:id,load_unique_id,refrence_id',
            'loadLogs.loadDetail.loadShippers:id,load_id,shipper_name,city,state,order',
            'loadLogs.loadDetail.loadReceivers:id,load_id,receiver_name,city,state,order',
            //'loadLogs.loadDetail.loadDrivers:id,load_id,driver_ids',
            //'loadLogs.loadDetail.loadDrivers.loadDriverUsers:load_driver_id,user_id',
            //'loadLogs.loadDetail.loadDrivers.loadDriverUsers.user:id,first_name,last_name',
            'maintenanceIssueLog:id,issue_id,new_status,vehicle_location',
            'maintenanceIssueLog.maintenanceIssue:id,service_location'
          ]);
        }
      ])->get();
    }
    return $ret->paginate($perPage);
  }

  /**
   * Create trailer.
   * @param $request
   * @return mixed
   * @throws Exception
   */
  public function createTrailerV2($request) {
    $this->checkDriverPermission();
    return DB::transaction(function () use ($request) {
      $getValidatedData = $this->getValidatedData();
      $trailer = Trailer::create($getValidatedData);
      if (!empty($request->notes)) {
        $notes = [];
        foreach ($request->notes as $note) {
          $notes[] = ['note' => $note['note']];
        }
        $trailer->trailerNotes()->createMany($notes);
      }
      if ($request->filled('driverAssignments')) {
        $this->createOrUpdateDriverAssignments($trailer, $request->driverAssignments);
      }
      //add new tags
      if (!empty(request('tags'))) {
        $trailer->tags()->attach(array_column(request('tags'), 'id'));
      }
      //add new files
      if ($request->has('files')) {
        $trailer->trailerFiles()->createMany($this->addNewFiles(request('files')));
      }
      return $trailer;
    });
  }

  /**
   * Validated request data to create trailer.
   * @return array
   */
  private function getValidatedData(): array {
    $ret = [
      'user_id' => auth()->id(),
      'company_id' => getAuthAdminCompanyId(),
      'number' => request('trailerNumber') ?? null,
      'trailer_type' => !empty(request('trailerType')) ? array_search(request('trailerType'), array_keys(config('constant.load.equipment_type'))) : null,
      'status' => array_search(request('status'), config('constant.status.trailer')) ?? null,
      'year' => request('year') ?? null,
      'make' => request('make') ?? null,
      'model' => request('model') ?? null,
      'vin' => request('vin') ?? null,
      'ride' => request('ride') ?? null,
      'width' => request('width') ?? null,
      'licence_plate' => request('licensePlate') ?? null,
      'license_state' => request('licenseState') ?? null,
      'insurance_value' => request('insuranceValue') ?? null,
      'insurance_monthly_cost' => request('monthlyInsuranceCost') ?? null,
      'insurance_total_cost' => request('totalInsuranceCost') ?? null,
      'brake_type' => !empty(request('brakeType')) ? array_search(request('brakeType'), config('constant.brakeType')) : null,
      'tire_size' => request('tireSize') ?? null,
      'roof' => request('roof') ?? null,
      'plated_walls' => request('platedWalls') ? 1 : null,
      'vented' => request('vented') ? 1 : null,
      'skirts' => request('skirts') ? 1 : null,
      'rented_out' => request('rentedOut') ? 1 : null,
      'inspection_expiry' => request('annualInspExpireDate') ?? null,
      'insurance_expire_date' => request('insuranceExpireDate') ?? null,
      'registration_expire_date' => request('registrationExpireDate') ?? null,
      'annual_permit_expire_date' => request('annualPermitExpireDate') ?? null,
      'ownership' => !empty(request('ownershipType')) ? array_search(request('ownershipType'), config('constant.ownership.trailer')) : null,
      'date_acquired' => request('dateAcquired') ?? null,
      'acquire_cost' => request('acquireCost') ?? null,
      'payment_start_date' => request('paymentStartDate') ?? null,
      'payment_end_date' => request('paymentEndDate') ?? null,
      'interest_rate' => request('interestRate') ?? null,
      'lender' => request('lender') ?? null,
      'monthly_payment' => request('monthlyPayment') ?? null,
      'contract_number' => request('contractNumber') ?? null,
      'price_sold' => request('priceSold') ?? null,
      'date_sold' => request('dateSold') ?? null
    ];

    if (request()->has('storage')) {
      if (request('storage')) {
        $ret['storage'] = 1;
      } else {
        $ret['storage'] = null;
      }
    }

    return $ret;
  }

  /**
   * Get trailer details.
   * @throws Exception
   * @return array
   */
  public function getTrailerV2() {
    $trailer = Trailer::where('id', request('id'))
      ->where('company_id', getAuthAdminCompanyId())
      ->with([
        'trailerNotes:id,trailer_id,note,updated_at',
        'driverAssignments:id,user_id,trailer_id,start_date,end_date',
        'driverAssignments.user:id,first_name,last_name',
        'driverAssignments.user.driverDetail:id,user_id,driver_trailer_assignment_id'
      ])
      ->first();
    if (empty($trailer)) {
      throw new Exception(config('response.trailer.not_found'));
    }
    return $trailer;
  }

  /**
   * Update trailer.
   * @param $request
   * @return mixed
   * @throws Exception
   */
  public function updateTrailerV2($request) {
    return DB::transaction(function () use ($request) {
      $trailer = Trailer::with(['trailerNotes'])->where('id', $request->id)->where('company_id', getAuthAdminCompanyId())->first();
      if (!$trailer) {
        throw new Exception(config('response.trailer.not_found'));
      }
      $trailer->fill($this->getValidatedData())->save();
      $notesToCreate = [];
      if ($request->has('notes')) {
        $existingNotes = $trailer->trailerNotes->pluck('id')->toArray();
        $newNotes = collect($request->notes)->pluck('id')->toArray();
        $needsToDelete = array_diff($existingNotes, $newNotes);
        if ($needsToDelete) {
          $trailer->trailerNotes()->whereIn('id', $needsToDelete)->delete();
        };
        foreach ($request->notes as $note) {
          $noteData = ['note' => $note['note']];
          if (!empty($note['id'])) {
            $trailerNote = $trailer->trailerNotes->where('id', $note['id'])->first() ?? null;
            if ($trailerNote->note != $note['note']) {
              TrailerNote::where('id', $note['id'])->update($noteData);
            }
          } else {
            /* add new notes */
            $notesToCreate[] = $noteData;
          }
        }
      }
      if (!empty($notesToCreate)) {
        $trailer->trailerNotes()->createMany($notesToCreate);
      }
      $this->createOrUpdateDriverAssignments($trailer, $request->driverAssignments ?? []);
      //update tags
      $tags = [];
      if (!empty(request('tags'))) {
        $tags = request('tags');
      }
      $trailer->tags()->sync(array_column($tags, 'id'));
      return $trailer;
    });
  }

  private function checkDriverPermission() {
    $user = User::with(['adminCompanyDetail:id,driver_can_add_new_trailer'])->where('id', auth()->id())
      ->select('id', 'role', 'admin_company_detail_id')->first();
    if ($user->role == config('constant.roles.driver') && !$user->adminCompanyDetail->driver_can_add_new_trailer) {
      throw new Exception(config('response.trailer.driver_error'));
    }
    return;
  }

  /**
   * Create folder.
   * @param $request
   * @return mixed
   * @throws Exception
   */
  public function createTrailerV2Folder($request) {
    return TrailerFolder::create(['company_id' => getAuthAdminCompanyId(), 'folder_name' => $request->folderName]);
  }

  /**
   * Get Folder List.
   * @return mixed
   * @throws Exception
   */
  public function getTrailerV2Folders() {
    return TrailerFolder::select('id', 'folder_name AS folderName')->where('company_id', getAuthAdminCompanyId())->get();
  }

  /**
   * Update Folder.
   * @param $request
   * @return mixed
   * @throws Exception
   */
  public function updateTrailerV2Folder($request) {
    return DB::transaction(function () use ($request) {
      $folder = TrailerFolder::where('id', $request->folderId)->where('company_id', getAuthAdminCompanyId())->first();
      if (!$folder) {
        throw new Exception(config('response.folder.not_found'));
      }
      return $folder->fill(['folder_name' => $request->folderName])->save();
    });
  }

  /**
   * Get trailer file List.
   * @return mixed
   * @throws Exception
   */
  public function getTrailerV2Files() {
    $trailer = Trailer::where('id', request('id'))
      ->where('company_id', getAuthAdminCompanyId())
      ->with([
        'trailerFiles:id,trailer_id,folder_id,original_filename,filename',
        'trailerFiles.trailerFolder:id,folder_name'
      ])
      ->select('id', 'company_id')->first();
    if (empty($trailer)) {
      throw new Exception(config('response.trailer.not_found'));
    }
    $files = $trailer->trailerFiles ?? collect();
    if ($files->isEmpty()) {
      return [];
    }
    return $files->map(function ($file) {
      return [
        'id' => $file->id,
        'folderId' => $file->folder_id ?? '',
        'folderName' => $file->trailerFolder->folder_name ?? '',
        'originalFileName' => $file->original_filename ?? '',
        'url' => getImage($file->filename, config('constant.s3.trailerFiles')) ?? ''
      ];
    });
  }

  /**
   * Create trailer file.
   * @param $request
   * @return mixed
   * @throws Exception
   */
  public function createTrailerV2File($request) {
    return DB::transaction(function () use ($request) {
      $folderId = $request->folderId;
      $trailerId = $request->trailerId;
      $trailer = Trailer::where('id', $trailerId)->where('company_id', getAuthAdminCompanyId())->select('id')->first();
      if (empty($trailer)) {
        throw new Exception(config('response.trailer.not_found'));
      }
      $folder = TrailerFolder::where('id', $folderId)->where('company_id', getAuthAdminCompanyId())->select('id', 'company_id')->first();
      if (empty($folder)) {
        throw new Exception(config('response.folder.not_found'));
      }
      if ($request->has('files')) {
        $filesToCreate = [];
        $files = request('files');
        foreach ($files as $file) {
          $filesToCreate[] = [
            'folder_id' => $folderId,
            'trailer_id' => $trailerId,
            'original_filename' => !empty($file['originalFileName']) ? $file['originalFileName'] : null,
            'filename' => !empty($file['fileName']) ? $file['fileName'] : null
          ];
        }
        $trailer->trailerFiles()->createMany($filesToCreate);
      }
      return $trailer;
    });
  }

  /**
   * Delete trailer file.
   * @throws Exception
   * @return mixed
   */
  public function deleteTrailerV2File() {
    $trailer = Trailer::whereHas('trailerFiles', function ($query) {
      $query->where('id', request('id'));
    })->where('company_id', getAuthAdminCompanyId())->select('id', 'company_id')->first();
    if (empty($trailer)) {
      throw new Exception(config('response.trailer.file.not_found'));
    }
    return $trailer->trailerFiles()->find(request('id'))->delete();
  }

  /**
   * Get Trailer Maintenance Issue List.
   * @param $request
   * @return mixed
   * @throws Exception
   */
  public function getMaintenanceIssueList($request) {
    return (new MaintenanceV2IssueService)->getVehicleMaintenanceIssues(config('constant.maintenance_asset_type.trailer'), $request->id, $request->pageSize);
  }

  /**
   * Get trailer file urls.
   * @return mixed
   * @throws Exception
   */
  public function getUploadUrls() {
    $response = [];
    $companyId = getAuthAdminCompanyId();
    $files = request('files');
    foreach ($files as $index => $file) {
      $response[] = $this->generateFileNameAndPresignedUrl($companyId, $file['extension'], $index);
    }
    return $response;
  }

  /**
   * Get Trailer File Upload URL.
   * @param $companyId
   * @param $extension
   * @param $index
   * @return array
   */
  private function generateFileNameAndPresignedUrl($companyId, $extension, $index): array {
    $fileName = 'rf-' . generateUniqueFileName($companyId, $extension, $index);
    return [
      'fileName' => $fileName,
      'url' => generatePresignedUrl($fileName, config('constant.s3.trailerFiles'))
    ];
  }

  /**
   * Create/Update Trailer Driver Assignments.
   * @param $trailer
   * @param $assignments
   * @return true
   * @throws Exception
   */
  public function createOrUpdateDriverAssignments($trailer, array $assignments) {

    //delete existing driver assignments
    $assignmentIdsToNullForDriver = [];
    $existingDriverAssignmentsToDelete = $trailer->driverAssignments()->whereNotIn('id', array_column($assignments, 'id'));
    if (!empty($existingDriverAssignmentsToDelete)) {
      $existingAssignments = $existingDriverAssignmentsToDelete->get();
      $assignmentIdsToNullForDriver = collect($existingAssignments)->pluck('id')->toArray();
      $existingDriverAssignmentsToDelete->delete();
    }

    foreach ($assignments as $assignment) {
      $driverAssignment = $trailer->driverAssignments()->updateOrCreate(
        [
          'id' => $assignment['id'] ?? null,
        ],
        [
          'user_id' => $assignment['userId'],
          'start_date' => $assignment['startDate'] ?? null,
          'end_date' => $assignment['endDate'] ?? null
        ]
      );

      if (isset($assignment['isCurrent']) && $assignment['isCurrent']) {
        $driver = DriverDetail::where('user_id', $assignment['userId'])->select('id')->first();
        $driver->fill(['assignment_trailer_id' => $trailer->id, 'driver_trailer_assignment_id' => $driverAssignment->id])->save();
      } else {
        if (!empty($assignment['id'])) {
          $assignmentIdsToNullForDriver[] = $assignment['id'];
        }
      }
    }

    if (!empty($assignmentIdsToNullForDriver)) {
      DriverDetail::whereIn('driver_trailer_assignment_id', $assignmentIdsToNullForDriver)->update(['assignment_trailer_id' => null, 'driver_trailer_assignment_id' => null]);
    }

    return true;
  }

  /**
   * Get Trailer Log List.
   * @param $request
   * @return mixed
   */
  public function getTrailerLogList($request) {
    $perPage = $request->pageSize ?? config('constant.pagination.pageSize');
    return (new VehicleLogService())->getAssetLogListHelper($request->id, $perPage);
  }

  /**
   * Upload Trailer files.
   * @param $files
   * @return mixed
   */
  public function addNewFiles($files) {
    $filesToCreate = [];
    foreach ($files as $file) {
      $filesToCreate[] = [
        'folder_id' => $file['folderId'],
        'original_filename' => !empty($file['originalFileName']) ? $file['originalFileName'] : null,
        'filename' => !empty($file['fileName']) ? $file['fileName'] : null
      ];
    }
    return $filesToCreate;
  }

  /**
   * Return the link of Trailer list file
   * @param mixed $trailers
   * @return array
   * @throws Exception
   */
  function trailerListExport($trailers): array {
    $adminCompanyId = getAuthAdminCompanyId();
    $url = $adminCompanyId . '-Trailer-List-Report.xlsx';
    $timezone = getCompanyTimezone($adminCompanyId);
    $path = config('constant.export_path') . $url;
    $getReport = new TrailerListReport(
      $this->modifyTrailerListToGenerateExcelSheet($trailers, $timezone)
    );
    Excel::store($getReport, $path, 's3');
    return [
      "download_url" => getExportFile($url)
    ];
  }

  /**
   * Convert DB query to final report format.
   * @param $trailers
   * @return array
   * @throws GuzzleException
   * @throws Exception
   */
  public function modifyTrailerListToGenerateExcelSheet($trailers, $timezone): array {
    $trailerList = [];
    // TODO(HK,Anky,SC)
    // For this function we need to merge PR 788
    /*$formattedLocations = (new ExternalTrackingService())
      ->getTrailersLocationFromSamsara(getAuthAdminCompanyId()) ?? [];*/
    $logTypes = config('constant.logs.truckAndTrailerType');
    $maintStatus = config('constant.logs.maintenanceIssueStatus');
    $manintenaceStatusesFeStrings = config('constant.logs.maintenanceIssueFeString');
    $dateFormat = config('constant.shortDateFormat');

    foreach ($trailers as $trailer) {
      $fullName = $this->concatUsersNameByComma($trailer->driverDetails);
      $latestStatus = '';
      $latestLoad = '';
      $latestLoadShipper = '';
      $latestLoadReceiver = '';
      $latestUpdateDate = '';
      // $latestLoadDriver = '';

      $trailerLog = $trailer->latestTrailerLog;
      $latestLocation = '';
      /*$latestLocation = collect($formattedLocations)
        ->firstWhere('trailerId', $trailer->id)['formattedLocation'] ?? '';*/
      if (!empty($trailerLog)) {
        $latestUpdateDate = !empty($trailerLog->created_at)
          ? convertUtcTimestampToLocalCarbonObject(
            $trailerLog->created_at,
            $timezone
          )->format($dateFormat) : '';
        if (!empty($trailerLog->type)) {
          $hookDropTrailerLogType = config('constant.logs.hookDropTrailerLogType');
          if (in_array($trailerLog->type, array_keys($hookDropTrailerLogType))) {
            $latestStatus = preg_replace(
              '/([a-z])([A-Z])/',
              '$1 $2',
              ucfirst($hookDropTrailerLogType[$trailerLog->type])
            ); // Convert string dropEmptyTrailer into Drop Empty Trailer
            if (empty($latestLocation) && !empty($trailerLog->loadLogs)) {
              $latestLocation = $trailerLog->loadLogs->trailer_location;
            }
          } elseif ($trailerLog->type == array_search('load', $logTypes)) {
            $latestStatus = 'In Operation';
            if (empty($latestLocation) && !empty($trailerLog->loadLogs)) {
              $latestLocation = $trailerLog->loadLogs->trailer_location;
            }
          } elseif ($trailerLog->type == array_search('maintenance', $logTypes)) {
            $maintLog = $trailerLog->maintenanceIssueLog;
            // TODO(HK,Anky): fix the status format.
            $latestStatus = !empty($maintLog->new_status)
              ? $manintenaceStatusesFeStrings[$maintStatus[$maintLog->new_status]] : '';
            if (empty($latestLocation)) {
              if ($maintLog->vehicle_location) {
                $latestLocation = $maintLog->vehicle_location;
              } else {
                $latestLocation = $maintLog->maintenanceIssue->service_location;
              }
            }
          }
        }

        $loadDetail = $trailerLog->loadLogs->loadDetail ?? null;
        if (!empty($loadDetail)) {
          $latestLoad = '#' . $loadDetail->load_unique_id;
          $latestLoad .= !empty($loadDetail->refrence_id)
            ? ', Ref: ' . $loadDetail->refrence_id : '';
          $shipper = $loadDetail->loadShippers->first();
          $receiver = $loadDetail->loadReceivers->last();
          $latestLoadShipper = implode(', ', array_filter([
            $shipper->shipper_name,
            $shipper->city, $shipper->state
          ]));
          $latestLoadReceiver = implode(', ', array_filter([
            $receiver->receiver_name,
            $receiver->city, $receiver->state
          ]));
          /*$latestLoadDriver = $this->concatUsersNameByComma(
            $loadDetail->loadDrivers->pluck('loadDriverUsers')->flatten()
          );*/
        }
      }

      $trailerList[] = [
        'trailerNumber' => $trailer->number,
        'driverName' => $fullName,
        'year' => $trailer->year ?? '',
        'make' => $trailer->make ?? '',
        'vin' => $trailer->vin ?? '',
        'tag' => $trailer->tags->pluck('business_name')->implode(', ') ?? '',
        'licensePlate' => $trailer->licence_plate ?? '',
        'latestLocation' => $latestLocation,
        'latestStatus' => $latestStatus,
        'latestLoad' => $latestLoad,
        'latestLoadShipper' => $latestLoadShipper,
        'latestLoadReceiver' => $latestLoadReceiver,
        'latestUpdateDate' => $latestUpdateDate,
        //'latestLoadDriver' => $latestLoadDriver,
        'status' => ucwords($trailer->status)
      ];
    }
    return $trailerList;
  }

  /**
   * Get users name in line separated by comma
   * @param $users
   * @return string
   */
  private function concatUsersNameByComma($users): string {
    return $users->pluck('user')->map(function ($user) {
      return userFullName($user);
    })->filter()->implode(', ') ?? '';
  }

  /**
   * Change trailer files folder.
   * @param $request
   * @return mixed
   * @throws Exception
   */
  public function changeTrailerV2FilesFolder($request) {
    return DB::transaction(function () use ($request) {
      $files = request('files');
      $fileIds = array_column($files, 'fileId');
      //check if any file ids are not belongs to current user company
      $checkTrailerFiles = TrailerFile::whereHas('trailer', function ($query) {
        $query->where('company_id', '!=', getAuthAdminCompanyId());
      })->whereIn('id', $fileIds)->count();
      if ($checkTrailerFiles != 0) {
        throw new Exception(config('response.trailer.file.not_found'));
      }
      return TrailerFile::whereIn('id', $fileIds)->update(['folder_id' => $request->folderId]);
    });
  }
}
