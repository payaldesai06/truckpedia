<?php


namespace App\Services;

use App\Exports\DriverListReport;
use App\Models\DriverDetail;
use App\Models\DriverPayTemplateCustomField;
use App\Models\DriverV2File;
use App\Models\DriverV2Folder;
use App\Models\User;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Laravel\Passport\Token;
use Exception;
use Maatwebsite\Excel\Facades\Excel;
use App\Models\Truck;
use App\Models\Trailer;
use Carbon\Carbon;

class DriverService {
  public function getAllDriver() {
    $companyId = Auth::user()->admin_company_detail_id;
    return User::where('role', config('constant.roles.driver'))
      ->where('status', config('constant.status.user.active'))
      ->where('admin_company_detail_id', '=', $companyId)
      ->get();
  }

  public function getAllCoDriver() {
    $companyId = Auth::user()->admin_company_detail_id;
    return User::where('role', config('constant.roles.driver'))
      ->where('status', config('constant.status.user.active'))
      ->where('admin_company_detail_id', '=', $companyId)
      ->where('id', '!=', Auth::id())
      ->get();
  }

  public function datatable() {
    $per_page = request('rows') ?? config('response.per_page');
    $companyId = Auth::user()->admin_company_detail_id;

    return User::where('role', config('constant.roles.driver'))
      ->where('admin_company_detail_id', '=', $companyId)
      ->when(request('name'), function ($query, $globalSearch) {
        $search = '%' . $globalSearch . '%';
        return $query->whereHas('driverDetail', function (Builder $query) use ($search) {
          $query->where('name', 'like', $search);
        });
      })
      ->when(request('type'), function ($query, $globalSearch) {
        $search = '%' . $globalSearch . '%';
        return $query->whereHas('driverDetail', function (Builder $query) use ($search) {
          $query->where('type', 'like', $search);
        });
      })
      ->when(request('phone_number'), function ($query, $globalSearch) {
        $search = '%' . $globalSearch . '%';
        return $query->whereHas('driverDetail', function (Builder $query) use ($search) {
          $query->where('phone_number', 'like', $search);
        });
      })
      ->when(
        request()->has(['sortField', 'sortOrder']),
        function ($query) {
          if (request('sortField') === 'name' or request('sortField') === 'type' or request('sortField') === 'username' or request('sortField') === 'phone_number') {
            return $query->orderBy(function ($query) {
              $query->selectRaw(request('sortField'))
                ->from('driver_details')
                ->whereColumn('driver_details.user_id', 'users.id');
            }, request('sortOrder'));
          } else {
            return $query->orderBy(request('sortField'), request('sortOrder'));
          }
        },
        function ($query) {
          return $query->orderBy('users.created_at', 'desc');
        }
      )
      ->paginate($per_page);
  }

  public function create() {
    $user = '';

    DB::transaction(function () use (&$user) {
      $user = User::create([
        'email' => request('email'),
        'first_name' => request('firstName'),
        'last_name' => request('lastName'),
        'password' => request('password'),
        'role' => config('constant.roles.driver'),
        'status' => request('status'),
        'admin_company_detail_id' => Auth::user()->admin_company_detail_id
      ]);

      $validatedData = $this->getValidatedData();

      $validatedData['owner_id'] = Auth::id();
      $user->driverDetail()->create($validatedData);

      if (!empty(request('document'))) {
        //driver file
        $driverFiles = collect(json_decode(request('document'), true))->toArray();
        $user->driverFiles()->createMany($driverFiles);
      }
    });

    $companyName = Auth::user()->adminCompanyDetail->business_name;
    $activeDriverCount = User::where('role', config('constant.roles.driver'))
      ->where('status', config('constant.status.user.active'))
      ->where('admin_company_detail_id', Auth::user()->admin_company_detail_id)
      ->count();

    Log::channel('slack_confidential-prod-data')->critical($companyName . ' added a new driver, '
      . 'total active drivers: ' . $activeDriverCount . '.');

    return $user;
  }

  public function update() {
    return tap($this->getDriver(), function ($driver) {
      $data = [];

      $data['email'] = request('email');
      $data['status'] = request('status');
      $data['first_name'] = request('firstName');
      $data['last_name'] = request('lastName');

      if (request()->filled('password')) {
        $data['password'] = request('password');
      }

      DB::transaction(function () use (&$driver, &$data) {
        $driver->update($data);

        if (request('status') == config('constant.status.driver.inactive')) {
          $this->removeDriverTokens($driver);
        }

        // Admin or dispatchers change a driver’s password. Suppose this driver is logged in on 3 phones, A, B, and C. We revoke all 3 tokens.
        if (request()->filled('password')) {
          Token::where('user_id', $driver->id)->update(['revoked' => true]);
        }

        $validatedData = $this->getValidatedData();
        $driver->driverDetail()->update($validatedData);

        //driver file
        if (request()->has('document')) {
          $driverFiles = collect(json_decode(request('document'), true))->toArray();
          $driver->driverFiles()->createMany($driverFiles);
        }
      });
    });
  }

  public function changeStatus() {
    $driver = $this->getDriver();
    return tap(
      $driver,
      function ($driver) {
        DB::transaction(function () use (&$driver) {
          if (request('status') == config('constant.status.driver.inactive')) {
            $this->removeDriverTokens($driver);
          }

          $driver->update(['status' => request('status')]);
        });
      }

    );
  }

  public function locationUpdate() {
    $driver = User::where('role', config('constant.roles.driver'))
      ->findOrFail(Auth::id());
    return tap(
      $driver,
      function ($driver) {
        $currentTime = Carbon::now();
        $driver->driverDetail->update(
          [
            'latitude' => request('latitude'),
            'longitude' => request('longitude'),
            'lat_lng_update_time' => $currentTime
          ]
        );
        $driver->userLocationLogs()->create([
          'latitude' => request('latitude'),
          'longitude' => request('longitude'),
          'local_time' => request('localTime') ?? null,
          'platform' => request('platform') ?
            array_search(request('platform'), config('constant.mobileApps.platform')) : null,
          'created_at' => $currentTime
        ]);
      }
    );
  }

  public function getDriver() {
    $id = request('driver');
    return User::where('role', config('constant.roles.driver'))
      ->where('admin_company_detail_id', Auth::user()->admin_company_detail_id)
      ->findOrFail($id);
  }

  /**
   * When Status is `InActive`
   * Remove Driver's All Token
   */
  private function removeDriverTokens(User $driver): void {
    $driver->tokens->each->delete();
  }

  private function getValidatedData() {
    if (request('driver_pay_types') == config('constant.driver_pay_type.per_mile')) {
      return [
        'type' => request('type'),
        'name' => request('name'),
        'phone_number' => request('phone_number'),
        'mailing_address' => request('mailing_address'),
        'driving_license' => request('driving_license'),
        'issue_state' => request('issue_state'),
        'medical_expire_date' => request('medical_expire_date'),
        'driving_license_expire_date' => request('driving_license_expire_date'),
        'contract_start_date' => request('contract_start_date'),
        'contract_end_date' => request('contract_end_date'),
        'driver_pay_types' => request('driver_pay_types'),
        'per_mail_charges' => request('per_mail_charges'),
        'pay_per_stop_rate' => request('pay_per_stop_rate'),
        'pay_per_stop_start_after' => request('pay_per_stop_start_after'),
        'detention_rate' => request('detention_rate'),
        'detention_start_after' => request('detention_start_after'),
        'layover_rate' => request('layover_rate'),
        'layover_start_after' => request('layover_start_after'),
        // 'reimbursement' => request('reimbursement'),
      ];
    } elseif (request('driver_pay_types') == config('constant.driver_pay_type.hourly')) {

      return [
        'type' => request('type'),
        'name' => request('name'),
        'phone_number' => request('phone_number'),
        'mailing_address' => request('mailing_address'),
        'driving_license' => request('driving_license'),
        'issue_state' => request('issue_state'),
        'medical_expire_date' => request('medical_expire_date'),
        'driving_license_expire_date' => request('driving_license_expire_date'),
        'contract_start_date' => request('contract_start_date'),
        'contract_end_date' => request('contract_end_date'),
        'driver_pay_types' => request('driver_pay_types'),
        'hourly_rate' => request('hourly_rate')
      ];
    } elseif (request('driver_pay_types') == config('constant.driver_pay_type.percentage')) {

      return [
        'type' => request('type'),
        'name' => request('name'),
        'phone_number' => request('phone_number'),
        'mailing_address' => request('mailing_address'),
        'driving_license' => request('driving_license'),
        'issue_state' => request('issue_state'),
        'medical_expire_date' => request('medical_expire_date'),
        'driving_license_expire_date' => request('driving_license_expire_date'),
        'contract_start_date' => request('contract_start_date'),
        'contract_end_date' => request('contract_end_date'),
        'driver_pay_types' => request('driver_pay_types'),
        'load_pay_percentage' => request('load_pay_percentage'),
        'load_pay_percentage_of' => request('load_pay_percentage_of'),
      ];
    } else {
      return [
        'type' => request('type'),
        'name' => request('name'),
        'phone_number' => request('phone_number'),
        'mailing_address' => request('mailing_address'),
        'driving_license' => request('driving_license'),
        'issue_state' => request('issue_state'),
        'medical_expire_date' => request('medical_expire_date'),
        'driving_license_expire_date' => request('driving_license_expire_date'),
        'contract_start_date' => request('contract_start_date'),
        'contract_end_date' => request('contract_end_date'),
      ];
    }
  }

  /**
   * @return mixed
   *
   * Get Driver's Current Truck and Trailer Number Details
   */
  public function getCurrentTruckTrailer() {
    return DriverDetail::where('user_id', request('driver'))->first();
  }

  public function updateCurrentTruckTrailer() {
    return DriverDetail::where('user_id', request('driver'))
      ->update(request()->all());
  }

  private function getValidatedDataV2($request) {
    $ccEmails = !empty($request->ccEmails) ? implode(',', $request->ccEmails) : null;
    if (strlen($ccEmails) > 1000) {
      throw new Exception(config('response.driver.ccEmailLimitError'));
    }
    return [
      'name' => trim($request->firstName . ' ' . $request->lastName),
      'type' => $request->driverType,
      'phone_number' => $request->phone,
      'team_driver' => $request->isTeamDriver,
      'local_driver' => $request->isLocalDriver,
      'regional_driver' => $request->isRegionalDriver,
      'company_employee_id' => $request->companyEmployeeId ?? null,
      'mailing_address' => $request->address,
      'ssn' => $request->ssn,
      'birth_date' => $request->birthDate,
      'origin_country' => $request->originCountry,
      'gender' => $request->gender ? array_flip(config('constant.gender'))[$request->gender] : null,
      'marital_status' => $request->maritalStatus,
      'race' => $request->race,
      'shirt_size' => $request->shirtSize,
      'driving_license' => $request->cdlNumber,
      'issue_state' => $request->cdlState,
      'original_driver_license_date' => $request->originalCdlDate,
      'driving_license_expire_date' => $request->cdlExpirationDate,
      'medical_expire_date' => $request->medicalCardExpirationDate,
      'driver_license_class' => $request->cdlClass ?
        array_search($request->cdlClass, config('constant.driver.cdlClass')) : null,
      'endorsements' => $request->filled('endorsements') ? implode('', $request->endorsements) : null,
      'occupation_expire_date' => $request->occupationExpirationDate,
      'clearinghouse_expire_date' => $request->clearinghouseExpirationDate,
      // 'occ_ins_start_date' => $request->occupationalInsuranceStartDate,
      // 'occ_ins_end_date' => $request->occupationalInsuranceEndDate,
      'drug_pool' => $request->drugPool ? array_search($request->drugPool, config('constant.driver.drugPool')) : null,
      'excepted_inter_intrastate_type' => $request->exceptedInterIntrastateType ?
        array_search(
          $request->exceptedInterIntrastateType,
          config('constant.driver.exceptedInterIntrastateType')
        ) : null,
      'wc_ins_start_date' => $request->workersCompensationInsuranceStartDate,
      'wc_ins_end_date' => $request->workersCompensationInsuranceEndDate,
      // 'ifta_add_date' => $request->iftaAddDate,
      // 'ifta_remove_date' => $request->iftaRemoveDate,
      'road_test_completed_date' => $request->roadTestCompletedDate,
      'road_test_completed_examiner' => $request->roadTestCompletedExaminer,
      'off_duty_until' => $request->offDutyUntil,
      'off_duty_comment' => $request->offDutyComment,
      'estimated_return_date' => $request->estimatedReturnDate,
      'date_added' => $request->dateAdded,
      'date_removed' => $request->dateRemoved,
      'termination_reason' => $request->terminationReason,
      'salary_target' => $request->salaryTarget,
      'recruiter' => $request->recruiter,
      'source' => $request->source,
      'referred_by' => $request->referredBy,
      'fuel_card_number' => $request->fuelCardNumber,
      'emgy_contact_name' => $request->emergencyContactName,
      'emgy_contact_phone' => $request->emergencyContactPhone,
      'emgy_contact_relationship' => $request->emergencyContactRelationship,
      'emgy_contact_email' => $request->emergencyContactEmail,
      'emgy_contact_address' => $request->emergencyContactAddress,
      'approval_status' => !empty($request->approvalStatus) ?
        array_search(
          $request->approvalStatus,
          config('constant.driver.approvalStatus')
        ) : null,
      'cc_emails' => $ccEmails,
    ];
  }

  public function getDriverV2($id) {
    return User::whereHas('driverDetail')
      ->with([
        'driverDetail',
        'driverNotes:id,user_id,note,updated_at',
        'driverTrailerAssignments:id,user_id,trailer_id,start_date,end_date',
        'driverTruckAssignments:id,user_id,truck_id,start_date,end_date'
      ])
      ->select([
        'id', 'first_name', 'last_name', 'email', 'role', 'status',
        'admin_company_detail_id'
      ])
      ->where('role', config('constant.roles.driver'))
      ->where('admin_company_detail_id', getAuthAdminCompanyId())
      ->where('id', $id)->first();
  }

  public function createDriverV2($request) {
    $user = '';
    $companyID = getAuthAdminCompanyId();

    DB::transaction(function () use (&$user, $request, $companyID) {
      $user = User::create([
        'email' => request('email'),
        'first_name' => request('firstName'),
        'last_name' => request('lastName'),
        'password' => request('password'),
        'role' => config('constant.roles.driver'),
        'status' => request('status'),
        'admin_company_detail_id' => $companyID
      ]);

      //add new tags
      if (!empty(request('tags'))) {
        $user->tags()->attach(array_column(request('tags'), 'id'));
      }

      $driverData = $this->getValidatedDataV2($request);
      $driverAccountsData = $this->getValidatedDriverAccountingInfoData();
      $validatedData = array_merge($driverData, $driverAccountsData);

      $validatedData['owner_id'] = Auth::id();

      if (!empty($request->input('files'))) {
        $folders = collect($request->input('files'))->groupBy('folderId');
        foreach ($folders as $folderId => $files) {
          $this->storeFilesV2($files, $folderId, $user->id, $companyID);
        }
      }

      if ($request->filled('notes')) {
        $this->createOrUpdateDriverNotes($user, $request->notes);
      }

      if ($request->filled('truckAssignments')) {
        $currentTruckAssignment = $this->createOrUpdateTruckAssignments($user, $request->truckAssignments);
        if ($currentTruckAssignment) {
          $validatedData['assignment_truck_id'] = $currentTruckAssignment['assignment_truck_id'];
          $validatedData['driver_truck_assignment_id'] = $currentTruckAssignment['driver_truck_assignment_id'];
        }
      }

      if ($request->filled('trailerAssignments')) {
        $currentTrailerAssignment = $this->createOrUpdateTrailerAssignments($user, $request->trailerAssignments);
        if ($currentTrailerAssignment) {
          $validatedData['assignment_trailer_id'] = $currentTrailerAssignment['assignment_trailer_id'];
          $validatedData['driver_trailer_assignment_id'] = $currentTrailerAssignment['driver_trailer_assignment_id'];
        }
      }
      if (request('driverPayTemplate')) {
        $loadDetails = request('driverPayTemplate')['loadDetails'] ?? [];
        $driverPayTemplateFields = DriverPayTemplateCustomField::select(
          'id',
          'name',
          'type'
        )
          ->where('company_id', $companyID)->get();
        (new DriverPayTemplateService())->checkLoadDetailsValidation(
          $loadDetails,
          $driverPayTemplateFields
        );

        $templateData = [
          'model' => 'user',
          'modelId' => $user->id,
          'loadDetails' => request('driverPayTemplate')['loadDetails'] ?? [],
          'tripDetails' => request('driverPayTemplate')['tripDetails'] ?? [],
        ];
        (new DriverPayTemplateService())->createOrUpdateModelTemplateHelper($templateData);
      }
      $user->driverDetail()->create($validatedData);
    });

    $companyName = optional(Auth::user()->adminCompanyDetail()->select(['user_id', 'business_name'])->first())->business_name;
    $activeDriverCount = User::where('role', config('constant.roles.driver'))
      ->where('status', config('constant.status.user.active'))
      ->where('admin_company_detail_id', $companyID)
      ->count();

    Log::channel('slack_confidential-prod-data')->critical($companyName . ' added a new driver, '
      . 'total active drivers: ' . $activeDriverCount . '.');

    return $user;
  }

  public function updateDriverV2($request) {
    $user = User::with('driverDetail')
      ->select(['id', 'first_name', 'last_name', 'email', 'status', 'password', 'admin_company_detail_id'])
      ->where('role', config('constant.roles.driver'))
      ->where('admin_company_detail_id', getAuthAdminCompanyId())
      ->where('id', $request->id)
      ->firstOrFail();

    return tap($user, function ($user) use ($request) {
      $data = [];

      $data['email'] = request('email');
      $data['status'] = request('status');
      $data['first_name'] = request('firstName');
      $data['last_name'] = request('lastName');

      if (request()->filled('password')) {
        $data['password'] = request('password');
      }

      DB::transaction(function () use ($user, &$data, $request) {
        $user->update($data);

        if (request('status') == config('constant.status.driver.inactive')) {
          $this->removeDriverTokens($user);
        }

        // Admin or dispatchers change a driver’s password. Suppose this driver is logged in on 3 phones, A, B, and C. We revoke all 3 tokens.
        if (request()->filled('password')) {
          Token::where('user_id', $user->id)->update(['revoked' => true]);
        }

        //update tags
        $user->tags()->sync(array_column(request('tags'), 'id'));

        $driver = $user->driverDetail;

        $validatedData = $this->getValidatedDataV2($request);

        $this->createOrUpdateDriverNotes($user, $request->notes ?? []);

        $currentTruckAssignment = $this->createOrUpdateTruckAssignments($user, $request->truckAssignments ?? []);
        if ($currentTruckAssignment) {
          $validatedData['assignment_truck_id'] = $currentTruckAssignment['assignment_truck_id'];
          $validatedData['driver_truck_assignment_id'] = $currentTruckAssignment['driver_truck_assignment_id'];
        } else if ($driver->driver_truck_assignment_id || $driver->assignment_truck_id) {
          $validatedData['assignment_truck_id'] = null;
          $validatedData['driver_truck_assignment_id'] = null;
        }

        $currentTrailerAssignment = $this->createOrUpdateTrailerAssignments($user, $request->trailerAssignments ?? []);
        if ($currentTrailerAssignment) {
          $validatedData['assignment_trailer_id'] = $currentTrailerAssignment['assignment_trailer_id'];
          $validatedData['driver_trailer_assignment_id'] = $currentTrailerAssignment['driver_trailer_assignment_id'];
        } else if ($driver->driver_trailer_assignment_id || $driver->assignment_trailer_id) {
          $validatedData['assignment_trailer_id'] = null;
          $validatedData['driver_trailer_assignment_id'] = null;
        }

        $driver->update($validatedData);
      });
    });
  }

  public function createOrUpdateDriverNotes($user, array $notes) {
    $user->driverNotes()->whereNotIn('id', array_column($notes, 'id'))->delete();

    foreach ($notes as $note) {
      $user->driverNotes()->updateOrCreate([
        'id' => $note['id'] ?? null,
      ], [
        'note' => $note['note'],
      ]);
    }
    return true;
  }

  public function createOrUpdateTruckAssignments($user, array $assignments) {
    $currentAssignmentDetails = [];

    if (collect($assignments)->where('isCurrent', true)->count() > 1) {
      throw new \Exception(config('response.truck.assignments.multiple_current_error'));
    }

    $user->driverTruckAssignments()->whereNotIn('id', array_column($assignments, 'id'))->delete();

    foreach ($assignments as $assignment) {
      $driverAssignment = $user->driverTruckAssignments()->updateOrCreate(
        [
          'id' => $assignment['id'] ?? null,
        ],
        [
          'truck_id' => $assignment['truckId'],
          'start_date' => $assignment['startDate'] ?? null,
          'end_date' => $assignment['endDate'] ?? null
        ]
      );

      if (isset($assignment['isCurrent']) && $assignment['isCurrent']) {
        $currentAssignmentDetails['assignment_truck_id'] = $assignment['truckId'];
        $currentAssignmentDetails['driver_truck_assignment_id'] = $driverAssignment->id;
      }
    }

    return empty($currentAssignmentDetails) ? null : $currentAssignmentDetails;
  }

  public function createOrUpdateTrailerAssignments($user, array $assignments) {
    $currentAssignmentDetails = [];

    if (collect($assignments)->where('isCurrent', true)->count() > 1) {
      throw new \Exception(config('response.trailer.assignments.multiple_current_error'));
    }

    $user->driverTrailerAssignments()->whereNotIn('id', array_column($assignments, 'id'))->delete();

    foreach ($assignments as $assignment) {
      $driverAssignment = $user->driverTrailerAssignments()->updateOrCreate(
        [
          'id' => $assignment['id'] ?? null,
        ],
        [
          'trailer_id' => $assignment['trailerId'],
          'start_date' => $assignment['startDate'] ?? null,
          'end_date' => $assignment['endDate'] ?? null
        ]
      );

      if (isset($assignment['isCurrent']) && $assignment['isCurrent']) {
        $currentAssignmentDetails['assignment_trailer_id'] = $assignment['trailerId'];
        $currentAssignmentDetails['driver_trailer_assignment_id'] = $driverAssignment->id;
      }
    }

    return empty($currentAssignmentDetails) ? null : $currentAssignmentDetails;
  }

  public function getDriverListV2ForCompany($request) {
    $filters = $request->filter;
    $query = User::with([
      'tags:id,business_name',
      'driverDetail:id,user_id,phone_number,assignment_truck_id,assignment_trailer_id,type,company_employee_id',
      'driverDetail.assignmentTruck:id,number',
      'driverDetail.assignmentTrailer:id,number'
    ])->when(isset($filters['toDownload']) && $filters['toDownload'], function ($q) {
      // This will overlap the above one, so we have to put fields here again.
      // Laravel won't automatically merge.
      $q->with([
        'driverDetail:id,user_id,phone_number,assignment_truck_id,assignment_trailer_id,type,'
          . 'approval_status,driving_license,issue_state,driving_license_expire_date,'
          . 'company_employee_id,ssn,birth_date,endorsements,road_test_completed_date,'
          . 'date_added,date_removed,original_driver_license_date,drug_pool,'
          . 'driver_license_class,medical_expire_date,excepted_inter_intrastate_type,'
          . 'team_driver,local_driver,regional_driver',
        'driverFilesV2:id,folder_id,user_id',
        'driverNotes:id,user_id,note'
      ]);
    })
      ->whereHas('driverDetail')
      ->select([
        'id', 'first_name', 'last_name', 'email', 'role', 'status',
        'admin_company_detail_id'
      ])
      ->where('role', config('constant.roles.driver'))
      ->where('admin_company_detail_id', getAuthAdminCompanyId())
      ->when(isset($filters['name']), function ($query) use ($filters) {
        $name = $filters['name'];
        return $query->whereRaw(
          "concat(COALESCE(`first_name`,''), ' ', COALESCE(`last_name`,'')) like '%$name%' "
        );
      })
      ->when(isset($filters['email']), function ($query) use ($filters) {
        return $query->where('email', 'like', '%' . $filters['email'] . '%');
      })
      ->when(isset($filters['status']), function ($query) use ($filters) {
        return $query->where('status', $filters['status']);
      })
      ->when(isset($filters['phone']), function ($query) use ($filters) {
        return $query->whereHas('driverDetail', function (Builder $query) use ($filters) {
          $query->where('phone_number', 'like', '%' . $filters['phone'] . '%');
        });
      })
      ->when(isset($filters['companyEmployeeId']), function ($query) use ($filters) {
        return $query->whereHas('driverDetail', function (Builder $query) use ($filters) {
          $query->where('company_employee_id', 'like', '%' . $filters['companyEmployeeId'] . '%');
        });
      })
      ->when(isset($filters['truckNumber']), function ($query) use ($filters) {
        return $query->whereHas(
          'driverDetail.assignmentTruck',
          function (Builder $query) use ($filters) {
            $query->where('number', 'like', '%' . $filters['truckNumber'] . '%');
          }
        );
      })
      ->when(isset($filters['trailerNumber']), function ($query) use ($filters) {
        return $query->whereHas(
          'driverDetail.assignmentTrailer',
          function (Builder $query) use ($filters) {
            $query->where('number', 'like', '%' . $filters['trailerNumber'] . '%');
          }
        );
      })
      ->when(!empty($filters['driverType']), function ($query) use ($filters) {
        return $query->whereHas(
          'driverDetail',
          function (Builder $query) use ($filters) {
            $query->where('type',  $filters['driverType']);
          }
        );
      })
      ->when(!empty($filters['tagId']), function ($query) use ($filters) {
        return $query->whereHas(
          'tags',
          function (Builder $query) use ($filters) {
            $query->where('id',  $filters['tagId']);
          }
        );
      })
      ->when(
        request()->has(['sortBy.field', 'sortBy.order']),
        function ($query) use ($request) {
          $sortField = $request->sortBy['field'];
          $sortOrder = $request->sortBy['order'];
          if ($sortField == 'name') {
            return $query->orderByRaw("CONCAT(COALESCE(`first_name`, ''), ' ', COALESCE(`last_name`, '')) $sortOrder");
          } else if ($sortField == 'phone') {
            return $query->orderBy(function ($query) {
              $query->selectRaw("phone_number")
                ->from('driver_details')
                ->whereColumn('driver_details.user_id', 'users.id');
            }, $sortOrder);
          } else if ($sortField == 'driverType') {
            return $query->orderBy(function ($query) {
              $query->selectRaw("type")
                ->from('driver_details')
                ->whereColumn('driver_details.user_id', 'users.id');
            }, $sortOrder);
          } else {
            return $query->orderBy($sortField, $sortOrder);
          }
        }
      );

    if (request('filter.toDownload') ?? null) {
      return $query->get();
    }
    return $query->paginate($request->pageSize ?? config('constant.pagination.pageSize'));
  }

  /**
   * Return the link of Drive list file
   * @param $drivers
   * @return array
   * @throws Exception
   */
  function driverListExport($drivers): array {
    $companyId = getAuthAdminCompanyId();
    $url = getAuthAdminCompanyId() . '-Driver-List-Report.xlsx';
    $path = config('constant.export_path') . $url;
    //company folders
    $folders = DriverV2Folder::where('company_id', $companyId)
      ->select('id', 'folder_name')->get()->toArray();
    Excel::store(new DriverListReport($drivers, $folders), $path, 's3');
    return [
      "download_url" => getExportFile($url)
    ];
  }

  public function generateFileUploadUrlV2($request) {
    $response = [];
    foreach ($request['files'] as $index => $files) {
      $response[] = $this->generateFileNameAndPresignedUrl(getAuthAdminCompanyId(), $files['extension'], $index);
    }
    return $response;
  }

  private function generateFileNameAndPresignedUrl($companyId, $extension, $index): array {
    $fileName = 'df-' . generateUniqueFileName($companyId, $extension, $index);
    return [
      'fileName' => $fileName,
      'url' => generatePresignedUrl($fileName, config('constant.s3.driverFiles'))
    ];
  }

  public function getDriverFilesV2($userId) {
    $driver = User::select(['id', 'admin_company_detail_id'])
      ->where('id', $userId)
      ->where('admin_company_detail_id', getAuthAdminCompanyId())
      ->with([
        'driverFilesV2:id,user_id,folder_id,original_filename,filename',
        'driverFilesV2.folder:id,folder_name'
      ])
      ->firstOrFail();

    $files = $driver->driverFilesV2;

    return $files->count() ? $files->map(function ($file) {
      return [
        'id' => $file->id,
        'folderId' => $file->folder_id ?? '',
        'folderName' => $file->folder->folder_name ?? '',
        'originalFileName' => $file->original_filename ?? '',
        'url' => getImage($file->filename, config('constant.s3.driverFiles')) ?? ''
      ];
    }) : [];
  }

  public function createDriverFileV2($request) {
    $companyId = getAuthAdminCompanyId();
    $folderId = $request->folderId;
    $userId = $request->userId;
    $files = $request->input('files');

    if (!$files) {
      return false;
    }

    $user = User::where('admin_company_detail_id', $companyId)
      ->where('id', $userId)
      ->exists();

    if (!$user) {
      throw new Exception(config('response.driver_file.permission_denied'));
    }

    return $this->storeFilesV2($files, $folderId, $userId, $companyId);
  }

  private function storeFilesV2($files, $folderId, $userId, $companyId) {
    $folder = DriverV2Folder::where('company_id', $companyId)
      ->where('id', $folderId)
      ->firstOrFail();

    $filesData = [];
    foreach ($files as $file) {
      $filesData[] = [
        'user_id' => $userId,
        'original_filename' => $file['originalFileName'],
        'filename' => $file['fileName'],
      ];
    }

    return $folder->files()->createMany($filesData);
  }

  public function deleteDriverFilesV2($request) {
    $file = DriverV2File::select(['id', 'user_id', 'folder_id', 'deleted_at'])
      ->whereHas('folder', function ($query) {
        $query->where('company_id', getAuthAdminCompanyId());
      })
      ->where('id', $request->id)
      ->firstOrFail();

    $user = User::where('admin_company_detail_id', getAuthAdminCompanyId())
      ->where('id', $file->user_id)
      ->exists();

    if (!$user) {
      throw new Exception(config('response.driver_file.permission_denied'));
    }

    return $file->delete();
  }

  public function getDriverV2Folders() {
    return DriverV2Folder::select(['id', 'folder_name as folderName'])
      ->where('company_id', getAuthAdminCompanyId())
      ->get();
  }

  public function createDriverV2Folder($request) {
    return DriverV2Folder::create([
      'folder_name' => $request->folderName,
      'company_id' => getAuthAdminCompanyId(),
    ]);
  }

  public function updateDriverV2Folder($request) {
    $folder = DriverV2Folder::select(['id', 'folder_name'])
      ->where('company_id', getAuthAdminCompanyId())
      ->findOrFail($request->folderId);

    return $folder->update([
      'folder_name' => $request->folderName,
    ]);
  }

  /**
   * Update Driver Accounting Info.
   * @param $request
   * @return mixed
   * @throws Exception
   */
  public function updateDriverAccountingInfoV2($request) {
    return DB::transaction(function () use ($request) {
      $companyId = getAuthAdminCompanyId();
      $driver = DriverDetail::where('user_id', $request->id)
        ->whereHas('user', function ($query) use ($companyId) {
          $query->where('admin_company_detail_id', $companyId);
        })
        ->first();
      if (empty($driver)) {
        throw new Exception(config('response.driver.not_found'));
      }
      $driver->fill($this->getValidatedDriverAccountingInfoData())->save();

      if (
        request('driverPayTemplate')
        &&
        request('driverPayType') == config('constant.driver_pay_type.template')
      ) {
        $loadDetails = request('driverPayTemplate')['loadDetails'] ?? [];
        $driverPayTemplateFields = DriverPayTemplateCustomField::select(
          'id',
          'name',
          'type'
        )
          ->where('company_id', $companyId)->get();
        (new DriverPayTemplateService())->checkLoadDetailsValidation(
          $loadDetails,
          $driverPayTemplateFields
        );
        $templateData = [
          'model' => 'user',
          'modelId' => $request->id,
          'loadDetails' => $loadDetails,
          'tripDetails' => request('driverPayTemplate')['tripDetails'] ?? [],
        ];
        (new DriverPayTemplateService())->createOrUpdateModelTemplateHelper($templateData);
      }
      return $driver;
    });
  }

  /**
   * Validated request data to update driver accounting info.
   * @return array
   * @throws Exception
   */
  private function getValidatedDriverAccountingInfoData() {
    return [
      'driver_pay_types' => request('driverPayType'),
      'per_mail_charges' => request('perMileCharge'),
      'pay_per_stop_rate' => request('payPerStopRate'),
      'pay_per_stop_start_after' => request('payPerStopStartAfter'),
      'detention_rate' => request('detentionRate'),
      'detention_start_after' => request('detentionStartAfter'),
      'layover_rate' => request('layoverRate'),
      'layover_start_after' => request('layoverStartAfter'),
      'hourly_rate' => request('hourlyRate'),
      'load_pay_percentage' => request('loadPayPercentage'),
      'load_pay_percentage_of' => request('loadPayPercentageOf'),
      'flat_pay_frequency' => !empty(request('flatPayFrequency')) ? array_search(request('flatPayFrequency'), config('constant.flat_pay_frequency')) : null,
      'flat_pay_rate' => request('flatPayRate'),
      'payment_method' => !empty(request('paymentMethod')) ? array_search(request('paymentMethod'), config('constant.payment_method')) : null,
      'financial_institution_name' => request('financialInstitutionName'),
      'account_number' => request('accountNumber'),
      'routing_number' => request('routingNumber'),
      'tax_form' => !empty(request('taxForm')) ? array_search(request('taxForm'), config('constant.tax_form')) : null,
      'filing_status' => !empty(request('filingStatus')) ? array_search(request('filingStatus'), config('constant.filing_status')) : null,
      'allowances' => request('allowances'),
      'withholding' => request('withholding'),
      'tax_medicare' => (request('taxMedicare')) ? 1 : null,
      'tax_advance_earned_income_credit' => (request('taxAdvanceEarnedIncomeCredit')) ? 1 : null,
      'tax_social_security' => (request('taxSocialSecurity')) ? 1 : null,
      'tax_federal_tax' => (request('taxFederalTax')) ? 1 : null,
      'pay_frequency' => !empty(request('payFrequency')) ? array_search(request('payFrequency'), config('constant.driver.payFrequency')) : null,
      'tax_federal_credits' => request('taxFederalCredits') ?? null,
    ];
  }

  /**
   * Get driver accounting info.
   * @return array
   * @throws Exception
   */
  public function getDriverAccountingInfoV2() {
    $driver = DriverDetail::where('user_id', request('id'))
      ->whereHas('user', function ($query) {
        $query->where('admin_company_detail_id', getAuthAdminCompanyId());
      })
      ->select(
        'user_id',
        'driver_pay_types',
        'per_mail_charges',
        'pay_per_stop_rate',
        'pay_per_stop_start_after',
        'detention_rate',
        'detention_start_after',
        'layover_rate',
        'layover_start_after',
        'hourly_rate',
        'load_pay_percentage',
        'load_pay_percentage_of',
        'flat_pay_frequency',
        'flat_pay_rate',
        'payment_method',
        'financial_institution_name',
        'account_number',
        'routing_number',
        'tax_form',
        'filing_status',
        'allowances',
        'withholding',
        'tax_medicare',
        'tax_advance_earned_income_credit',
        'tax_social_security',
        'tax_federal_tax',
        'pay_frequency',
        'tax_federal_credits'
      )
      ->with('driverPayTemplateDetails', 'driverPayTemplateDetails.driverPayTemplateCustomField')
      ->first();
    if ($driver->driverPayTemplateDetails->isNotEmpty()) {
      $driver['driverPayTemplateDetails'] = (new DriverPayTemplateService())->getModelTemplateHelper($driver->driverPayTemplateDetails);
    }
    if (empty($driver)) {
      throw new Exception(config('response.driver.not_found'));
    }
    return $driver;
  }

  /**
   * Get All Driver With Assigned Vehicles
   * @return array
   * @throws Exception
   */
  public function getAllDriverWithAssignedVehicles() {
    $drivers = User::select('id', 'first_name', 'last_name', 'admin_company_detail_id', 'role', 'status')
      ->with(['driverDetail:id,user_id,assignment_truck_id,assignment_trailer_id'])
      ->where('role', '=', config('constant.roles.driver'))
      ->where('admin_company_detail_id', getAuthAdminCompanyId())
      ->where('status', 'active')
      ->get();
    return $drivers;
  }

  /**
   * Get All Driver/Truck/Trailer For LoadDriver.
   * @return array
   * @throws Exception
   */
  public function getAllDriverTruckTrailerForLoadDriver(): array {
    $companyId = getAuthAdminCompanyId();
    $activeMaintenanceStatuses = [
      array_search('reported', config('constant.maintenance.issue.status')),
      array_search('scheduled', config('constant.maintenance.issue.status')),
      array_search('in_service', config('constant.maintenance.issue.status'))
    ];
    //get all active drivers
    $drivers = User::whereHas('driverDetail')
      ->with([
        'driverDetail:id,user_id,assignment_truck_id,assignment_trailer_id',
      ])
      ->where('role', config('constant.roles.driver'))
      ->where('status', config('constant.status.user.active'))
      ->where('admin_company_detail_id', $companyId)
      ->select('id', 'first_name', 'last_name')->get();
    //get all active trucks
    $trucks = Truck::where('company_id', $companyId)
      ->with(['maintenanceIssues' => function ($q) use ($activeMaintenanceStatuses) {
        $q->select('id', 'truck_id')->whereIn('status', $activeMaintenanceStatuses);
      }])
      ->where('status', config('constant.status.truck.active'))
      ->select('id', 'number', 'hourly_cost')->get();
    //get all active trailers
    $trailers = Trailer::where('company_id', $companyId)
      ->with(['maintenanceIssues' => function ($q) use ($activeMaintenanceStatuses) {
        $q->select('id', 'trailer_id')->whereIn('status', $activeMaintenanceStatuses);
      }])
      ->where('status', config('constant.status.trailer.active'))
      ->select('id', 'number')->get();
    //manage data
    if ($drivers->isNotEmpty()) {
      $drivers = $drivers->map(function ($driver) {
        return [
          'id' => $driver->id,
          'name' => $driver->first_name . ' ' . $driver->last_name,
          'truckId' => $driver->driverDetail->assignment_truck_id ?? null,
          'trailerId' => $driver->driverDetail->assignment_trailer_id ?? null,
        ];
      });
    } else {
      $drivers = [];
    }
    if ($trucks->isNotEmpty()) {
      $trucks = $trucks->map(function ($truck) {
        return [
          'id' => $truck->id,
          'number' => $truck->number,
          'hourlyCost' => $truck->hourly_cost,
          'isInMaintenance' => $truck->maintenanceIssues->isNotEmpty() ?? false,
        ];
      });
    } else {
      $trucks = [];
    }
    if ($trailers->isNotEmpty()) {
      $trailers = $trailers->map(function ($trailer) {
        return [
          'id' => $trailer->id,
          'number' => $trailer->number,
          'isInMaintenance' => $trailer->maintenanceIssues->isNotEmpty() ?? false,
        ];
      });
    } else {
      $trailers = [];
    }
    return [
      'drivers' => $drivers ?? [],
      'trucks' => $trucks ?? [],
      'trailers' => $trailers ?? []
    ];
  }

  /**
   * Change driver files folder.
   * @param $request
   * @return mixed
   * @throws Exception
   */
  public function changeDriverV2FilesFolder($request) {
    return DB::transaction(function () use ($request) {
      $files = request('files');
      $fileIds = array_column($files, 'fileId');
      //check if any file ids are not belongs to current user company
      $checkDriverFiles = DriverV2File::whereHas('user', function ($query) {
        $query->where('admin_company_detail_id', '!=', getAuthAdminCompanyId());
      })->whereIn('id', $fileIds)->count();
      if ($checkDriverFiles != 0) {
        throw new Exception(config('response.driver_file.not_found'));
      }
      return DriverV2File::whereIn('id', $fileIds)->update(['folder_id' => $request->folderId]);
    });
  }
}
