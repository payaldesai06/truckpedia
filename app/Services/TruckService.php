<?php


namespace App\Services;


use App\Models\Truck;
use App\Models\Tag;
use App\Models\TruckNote;
use App\Models\TruckFolder;
use App\Models\TruckFile;
use App\Models\User;
use App\Services\Logs\VehicleLogService;
use Illuminate\Database\Eloquent\Builder;
use App\Models\DriverDetail;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\DB;
use Exception;
use App\Services\MaintenanceV2IssueService;
use App\Models\TruckTag;
use Maatwebsite\Excel\Facades\Excel;
use App\Exports\TruckListReport;

class TruckService {
  public function getAllTruck() {
    $companyId = Auth::user()->admin_company_detail_id;
    return Truck::where('company_id', '=', $companyId)
      ->where('status', config('constant.status.truck.active'))
      ->get();
  }

  public function truckDatatable() {
    $per_page = 100; //request('rows') ?? config('response.per_page');
    $user = Auth::user();
    $companyId = $user->admin_company_detail_id;

    return Truck::where('company_id', '=', $companyId)
      ->when(request()->has('truck_number'), function ($query) {
        return $query->where('number', 'like', '%' . request('truck_number') . '%');
      })
      ->when(request()->has('truck_number'), function ($query) {
        return $query->where('number', 'like', '%' . request('truck_number') . '%');
      })->when(request()->has('truck_type'), function ($query) {
        return $query->where('type', 'like', '%' . request('truck_type') . '%');
      })->when(request()->has('sortField') && request()->has('sortOrder'), function ($query) {
        $fieldName = str_replace('truck_', '', request('sortField'));
        return $query->orderBy($fieldName, request('sortOrder'));
      })->paginate($per_page);
  }

  public function createTruck() {
    $result = Truck::create([
      'user_id' => Auth::id(),
      'number' => request('truck_number'),
      'type' => request('truck_type'),
      'licence_plate' => request('licence_plate'),
      'licence_plate_expiry' => request('licence_plate_expiry'),
      'inspection_expiry' => request('inspection_expiry'),
      'status' => request('status'),
      'ownership' => request('ownership'),
      'company_id' => Auth::user()->admin_company_detail_id,
      'truck_vin' => request('truck_vin'),
      'make' => request('make'),
      'year' => request('year'),
    ]);

    $companyName = Auth::user()->adminCompanyDetail->business_name;
    $activeTruckCount = Truck::where('status', config('constant.status.truck.active'))
      ->where('company_id', Auth::user()->admin_company_detail_id)
      ->count();

    Log::channel('slack_confidential-prod-data')->critical($companyName . ' added a new truck, '
      . 'total active trucks: ' . $activeTruckCount . '.');

    return $result;
  }

  public function updateTruck() {
    $truck = Truck::find(request('truck'));
    $truck->update([
      'number' => request('truck_number'),
      'type' => request('truck_type'),
      'licence_plate' => request('licence_plate'),
      'licence_plate_expiry' => request('licence_plate_expiry'),
      'inspection_expiry' => request('inspection_expiry'),
      'status' => request('status'),
      'ownership' => request('ownership'),
      'truck_vin' => request('truck_vin'),
      'make' => request('make'),
      'year' => request('year'),
    ]);
    return $truck->refresh();
  }

  public function delete() {
    $id = request()->truck;
    $truck = Truck::where('id', '=', $id);
    return $truck->delete();
  }

  public function changeStatus() {
    return tap(
      Truck::query()->findOrFail(request('truck')),
      function ($truck) {
        $truck->update(['status' => request('status')]);
      }
    );
  }

  public function search() {
    $companyId = Auth::user()->admin_company_detail_id;
    return Truck::where('company_id', $companyId)->where('number', 'LIKE', '%' . request('number') . '%')->get();
  }

  /**
   * Get List Truck V2.
   * @param $request
   * @return mixed
   * @throws Exception
   */
  public function getListTruckV2($request) {
    $perPage = $request->pageSize ?? config('constant.pagination.pageSize');
    $ret =  Truck::select(
      'id',
      'number',
      'truck_vin',
      'make',
      'year',
      'licence_plate',
      'status',
      'type_van',
      'type_reefer',
      'type_flatbed',
      'type_step_deck',
      'type_power_only',
      'type_conestoga',
      'type_box_truck',
      'type_sprinter',
      'type_hot_shot'
    )
      ->with('driverDetails:assignment_truck_id,id,user_id', 'driverDetails.user:id,first_name,last_name', 'tags:id,business_name')
      ->where('company_id', getAuthAdminCompanyId())
      ->when($request->has('filter.status'), function ($query) use ($request) {
        return $query->where('status', $request->filter['status']);
      })
      ->when($request->has('filter.truckNumber'), function ($query) use ($request) {
        return $query->where('number', 'like', '%' . $request->filter['truckNumber'] . '%');
      })
      ->when($request->has('filter.year'), function ($query) use ($request) {
        return $query->where('year', 'like', '%' . $request->filter['year'] . '%');
      })
      ->when($request->has('filter.make'), function ($query) use ($request) {
        return $query->where('make', 'like', '%' . $request->filter['make'] . '%');
      })
      ->when($request->has('filter.vin'), function ($query) use ($request) {
        return $query->where('truck_vin', 'like', '%' . $request->filter['vin'] . '%');
      })
      ->when($request->has('filter.licensePlate'), function ($query) use ($request) {
        return $query->where('licence_plate', 'like', '%' . $request->filter['licensePlate'] . '%');
      })
      ->when(
        $request->has('filter.truckType') && !empty($request->filter['truckType']),
        function ($query) use ($request) {
          $truckTypeColumn = array_search(
            $request->filter['truckType'],
            config('constant.truck_types')
          );
          return $query->where($truckTypeColumn, 1);
        }
      )
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
      return $ret->get();
    }
    return $ret->paginate($perPage);
  }

  /**
   * Create Truck V2 API.
   * @param $request
   * @return mixed
   * @throws Exception
   */
  public function createTruckV2($request) {
    $company_id = getAuthAdminCompanyId();
    $getValidatedData = $this->getValidatedTruckV2RequestData($company_id);
    return DB::transaction(function () use ($request, $getValidatedData) {
      $truck = Truck::create($getValidatedData);
      if (!empty($truck) && !empty($request->notes)) {
        $notesData = [];
        foreach ($request->notes as $note) {
          $notesData[] = [
            'truck_id' => $truck->id,
            'note' => $note['note']
          ];
        }
        $truck->truckNotes()->createMany($notesData);
      }
      if ($request->filled('driverAssignments')) {
        $this->createOrUpdateDriverAssignments($truck, $request->driverAssignments);
      }
      //add new tags
      if (!empty(request('tags'))) {
        $truck->tags()->attach(array_column(request('tags'), 'id'));
      }
      //add new files
      if ($request->has('files')) {
        $truck->truckFiles()->createMany($this->addNewFiles(request('files')));
      }
      return $truck;
    });
  }

  /**
   * Get Validate Truck V2 Request Data.
   * @param $company_id
   * @return array
   */
  public function getValidatedTruckV2RequestData($company_id): array {
    $data = [
      'user_id' => Auth::id(),
      'company_id' => $company_id,
      'status' => request('status'),
      'number' => request('truckNumber'),
      'truck_vin' => request('vin'),
      'make' => request('make'),
      'year' => request('year'),
      'color' => request('color'),
      'model' => request('model'),
      'licence_plate' => request('licensePlate'),
      'license_state' => request('licenseState'),
      'hourly_cost' => request('hourlyCost'),
      'insurance_value' => request('insuranceValue'),
      'insurance_monthly_cost' => request('monthlyInsuranceCost'),
      'insurance_total_cost' => request('totalInsuranceCost'),
      'odometer_at_purchase' => request('odometerAtPurchase'),
      'brake_type_front' => !empty(request('brakeTypeFront')) ? array_search(request('brakeTypeFront'), config('constant.brakeType')) : null,
      'brake_type_rear' => !empty(request('brakeTypeRear')) ? array_search(request('brakeTypeRear'), config('constant.brakeType')) : null,
      'speed_limit_pedal' => request('speedLimitPedal'),
      'speed_limit_cruise' => request('speedLimitCruise'),
      'fuel_tank_capacity' => request('fuelTankCapacity'),
      'apu_unit' => request('apuUnit') ?? null,
      'tire_size' => request('tireSize'),
      'idle_shutoff' => request('idleShutoff'),
      'irp_expire_date' => request('irpExpirationDate'),
      'inspection_expiry' => request('annualInspExpireDate'),
      'insurance_expire_date' => request('insuranceExpireDate'),
      'registration_expire_date' => request('registrationExpireDate'),
      'annual_permit_expire_date' => request('annualPermitExpireDate'),
      'ifta_decal_number' => request('iftaDecalNumber'),
      'ownership' => request('ownershipType'),
      'date_acquired' => request('dateAcquired'),
      'acquire_cost' => request('acquireCost'),
      'payment_start_date' => request('paymentStartDate'),
      'payment_end_date' => request('paymentEndDate'),
      'interest_rate' => request('interestRate'),
      'lender' => request('lender'),
      'monthly_payment' => request('monthlyPayment'),
      'contract_number' => request('contractNumber'),
      'price_sold' => request('priceSold'),
      'date_sold' => request('dateSold'),
      'fuel_card_number' => request('fuelCardNumber')
    ];

    return array_merge($data, $this->getTruckTypes(request('truckTypes') ?? []));
  }

  /**
   * Update Truck V2 Details.
   * @param $request
   * @return mixed
   */
  public function updateTruckV2($request) {
    return DB::transaction(function () use ($request) {
      $company_id = getAuthAdminCompanyId();
      $getValidatedData = $this->getValidatedTruckV2RequestData($company_id);

      $truck = Truck::select('id')->where('company_id', $company_id)
        ->where('id', $request->id)
        ->with(['truckNotes:id,truck_id,note'])
        ->first();
      if (empty($truck)) {
        throw new Exception(config('response.error'));
      }
      $truck->update($getValidatedData);

      $existingNotes = $truck->truckNotes->pluck('id')->toArray();
      $newNotes = collect($request->notes)->pluck('id')->toArray();

      $needsToDelete = array_diff($existingNotes, $newNotes);
      if ($needsToDelete) {
        $truck->truckNotes()->whereIn('id', $needsToDelete)->delete();
      };

      $notesToCreate = [];
      if (!empty($request->notes)) {
        foreach ($request->notes as $note) {
          $noteData = ['note' => $note['note']];
          if (!empty($note['id'])) {
            $truckNote = $truck->truckNotes->where('id', $note['id'])->first() ?? null;
            if ($truckNote->note != $note['note']) {
              TruckNote::where('id', $note['id'])->update($noteData);
            }
          } else {
            /* add new notes */
            $notesToCreate[] = $noteData;
          }
        }
      }
      if (!empty($notesToCreate)) {
        $truck->truckNotes()->createMany($notesToCreate);
      }
      $this->createOrUpdateDriverAssignments($truck, $request->driverAssignments ?? []);
      //update tags
      $tags = [];
      if (!empty(request('tags'))) {
        $tags = request('tags');
      }
      $truck->tags()->sync(array_column($tags, 'id'));
      return $truck;
    });
  }

  /**
   * Get All Trucks V2.
   * @return mixed
   * @throws Exception
   */
  public function getTruckV2ById() {
    $truck = Truck::where('company_id', getAuthAdminCompanyId())
      ->where('id', request('id'))
      ->with([
        'truckNotes:id,note,updated_at,truck_id',
        'driverAssignments:id,user_id,truck_id,start_date,end_date',
        'driverAssignments.user:id,first_name,last_name',
        'driverAssignments.user.driverDetail:id,user_id,driver_truck_assignment_id'
      ])
      ->first();
    if (empty($truck)) {
      throw new Exception(config('response.error'));
    }
    return $truck;
  }

  /**
   * Create Truck Folder.
   * @param $request
   * @return mixed
   * @throws Exception
   */
  public function createTruckFolder($request) {
    return TruckFolder::create([
      'company_id' => getAuthAdminCompanyId(),
      'folder_name' => $request->folderName
    ]);
  }

  /*
   * Get truck V2 files.
   * @return mixed
   * @throws Exception
   */
  public function getTruckV2Files() {
    $truck = Truck::where('id', request('id'))
      ->where('company_id', getAuthAdminCompanyId())
      ->with([
        'truckFiles:id,truck_id,folder_id,original_filename,filename',
        'truckFiles.truckFolder:id,folder_name'
      ])
      ->select('id', 'company_id')->first();
    if (empty($truck)) {
      throw new Exception(config('response.error'));
    }
    $files = $truck->truckFiles ?? collect();
    if ($files->isEmpty()) {
      return [];
    }
    return $files->map(function ($file) {
      return [
        'id' => $file->id,
        'folderId' => $file->folder_id ?? '',
        'folderName' => $file->truckFolder->folder_name ?? '',
        'originalFileName' => $file->original_filename ?? '',
        'url' => getImage($file->filename, config('constant.s3.truckFiles')) ?? ""
      ];
    });
  }

  /**
   * Delete truck V2 file.
   * @return mixed
   * @throws Exception
   */
  public function deleteTruckV2Files() {
    $truck = Truck::whereHas('truckFiles', function ($query) {
      $query->select('id', 'truck_id')->where('id', request('id'));
    })
      ->where('company_id', getAuthAdminCompanyId())
      ->select('id', 'company_id')->first();
    if (empty($truck)) {
      throw new Exception(config('response.error'));
    }
    return $truck->truckFiles()->find(request('id'))->delete();
  }

  /**
   * Get Truck Folders by Auth Company Id
   * @return array
   * @throws Exception
   */
  public function getTruckv2Folders() {
    return TruckFolder::select('id', 'folder_name')->where('company_id', getAuthAdminCompanyId())->get();
  }

  /**
   * get Upload Urls for truck files
   * @param $request
   * @return array
   * @throws Exception
   */
  public function getUploadUrls($request): array {
    $response = [];
    $companyId = getAuthAdminCompanyId();
    foreach ($request['files'] as $index => $files) {
      $response[] = $this->generateFileNameAndPresignedUrl($companyId, $files['extension'], $index);
    }
    return $response;
  }

  /**
   * Get Truck File Upload URL.
   * @param $companyId
   * @param $extension
   * @param $index
   * @return array
   */
  private function generateFileNameAndPresignedUrl($companyId, $extension, $index): array {
    $fileName = 'tf-' . generateUniqueFileName($companyId, $extension, $index);
    return [
      'fileName' => $fileName,
      'url' => generatePresignedUrl($fileName, config('constant.s3.truckFiles'))
    ];
  }

  /**
   * create truck file
   * @param $request
   * @return array
   * @throws Exception
   */
  public function createTruckV2File($request) {
    return DB::transaction(function () use ($request) {
      $companyId = getAuthAdminCompanyId();
      $isFolderExists = TruckFolder::where('company_id', $companyId)->where('id', $request->folderId)->exists();
      if (!$isFolderExists) {
        throw new Exception(config('response.error'));
      }
      $truck = Truck::select('id')->where('company_id', $companyId)->where('id', $request->truckId)->first();
      if (empty($truck)) {
        throw new Exception(config('response.error'));
      }
      if (!empty($request['files'])) {
        $notesData = [];
        foreach ($request['files'] as $file) {
          $notesData[] = [
            'folder_id' => $request->folderId,
            'truck_id' => $request->truckId,
            'original_filename' => $file['originalFileName'],
            'filename' => $file['fileName'],
          ];
        }
        $truck->truckFiles()->createMany($notesData);
        return $truck;
      }
    });
  }

  /**
   * Update Truck Folder
   * @param $request
   * @return mixed
   * @throws Exception
   */
  public function updateTruckFolder($request) {
    return TruckFolder::where('id', $request->folderId)
      ->where('company_id', getAuthAdminCompanyId())
      ->update(['folder_name' => $request->folderName]);
  }

  /**
   * Get Truck Maintenance Issue List.
   * @param $request
   * @return mixed
   * @throws Exception
   */
  public function getMaintenanceIssueList($request) {
    return (new MaintenanceV2IssueService)->getVehicleMaintenanceIssues(config('constant.maintenance_asset_type.truck'), $request->id, $request->pageSize);
  }

  /**
   * Create/Update Truck Driver Assignments.
   * @param $truck
   * @param $assignments
   * @return true
   * @throws Exception
   */
  public function createOrUpdateDriverAssignments($truck, array $assignments) {

    //delete existing driver assignments
    $assignmentIdsToNullForDriver = [];
    $existingDriverAssignmentsToDelete = $truck->driverAssignments()->whereNotIn('id', array_column($assignments, 'id'));
    if (!empty($existingDriverAssignmentsToDelete)) {
      $existingAssignments = $existingDriverAssignmentsToDelete->get();
      $assignmentIdsToNullForDriver = collect($existingAssignments)->pluck('id')->toArray();
      $existingDriverAssignmentsToDelete->delete();
    }

    foreach ($assignments as $assignment) {
      $driverAssignment = $truck->driverAssignments()->updateOrCreate(
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
        $driver->fill(['assignment_truck_id' => $truck->id, 'driver_truck_assignment_id' => $driverAssignment->id])->save();
      } else {
        if (!empty($assignment['id'])) {
          $assignmentIdsToNullForDriver[] = $assignment['id'];
        }
      }
    }

    if (!empty($assignmentIdsToNullForDriver)) {
      DriverDetail::whereIn('driver_truck_assignment_id', $assignmentIdsToNullForDriver)->update(['assignment_truck_id' => null, 'driver_truck_assignment_id' => null]);
    }

    return true;
  }

  /**
   * Get Truck Log List.
   * @param $request
   * @return mixed
   */
  public function getTruckLogList($request) {
    $perPage = $request->pageSize ?? config('constant.pagination.pageSize');
    return (new VehicleLogService())->getAssetLogListHelper($request->id, $perPage, true);
  }

  /**
   * Upload Truck files.
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

  public function getTruckTypes($truckTypes = []) {
    $data = [];
    foreach (config('constant.truck_types') as $key => $truckType) {
      $data[$key] = in_array($truckType, $truckTypes) ? 1 : null;
    }
    return $data;
  }

  /**
   * Return the link of Truck list file
   * @param mixed $trucks
   * @return array
   * @throws Exception
   */
  function truckListExport($trucks): array {
    $url = getAuthAdminCompanyId() . '-Truck-List-Report.xlsx';
    $path = config('constant.export_path') . $url;
    $getReport = new TruckListReport($trucks);
    Excel::store($getReport, $path, 's3');
    return [
      "download_url" => getExportFile($url)
    ];
  }

  /**
   * Change truck files folder.
   * @param $request
   * @return mixed
   * @throws Exception
   */
  public function changeTruckV2FilesFolder($request) {
    return DB::transaction(function () use ($request) {
      $files = request('files');
      $fileIds = array_column($files, 'fileId');
      //check if any file ids are not belongs to current user company
      $checkTruckFiles = TruckFile::whereHas('truck', function ($query) {
        $query->where('company_id', '!=', getAuthAdminCompanyId());
      })->whereIn('id', $fileIds)->count();
      if ($checkTruckFiles != 0) {
        throw new Exception(config('response.truck.file.not_found'));
      }
      return TruckFile::whereIn('id', $fileIds)->update(['folder_id' => $request->folderId]);
    });
  }
}
