<?php


namespace App\Services\Sync;

use App\Models\Trailer;
use App\Models\Truck;
use Exception;
use Illuminate\Support\Facades\DB;
use App\Models\DriverDetail;
use App\Models\Tag;
use App\Models\User;
use Carbon\Carbon;
use App\Models\AdminCompanyDetail;
use App\Mail\Sync\ImportNewAssetMail;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Log;

class ImportService {
  private $companyId;
  private $userId;
  private $carbonNow;

  public function __construct() {
    if (request()->has('username') && !empty(request('username'))) {
      $emerySappAccountType =  str_replace("apiSync-", "", request('username'));
      $this->companyId = config('user_customization.api.sync.' . $emerySappAccountType . '.companyId');
      $this->userId = config('user_customization.api.sync.' . $emerySappAccountType . '.userId');
    }
    $this->carbonNow = Carbon::now()->toDateTimeString();
  }

  /**
   * import assets.
   * @param $request
   * @return mixed
   * @throws Exception
   */
  public function importAssets($request) {
    /* TODO:
     I know create user is slow due to password hashing.
     Please do a test:
     1. How long it takes to create 100 NEW users on your computer?
     2. How long it takes to create 600 NEW users on your computer?
     3. How long it takes to update 100 users' passwords on your computer, if passwords do not change?
     4. How long it takes to update 100 users' passwords on your computer, if passwords change?
     5. How long it takes to update 100 users' passwords on your computer, if passwords do not change?
     6. How long it takes to update 100 users' passwords on your computer, if passwords change?
    */
    // TODO: put all sanity checking code in the beginning.
    // TODO: then put all the update code into a job. because its run time can be slow.
    // So if sanity checking fails, immediately return errow.
    // If passes, then call a job to do the real update.
    // Also, use one transaction for each truck/trailer/driver's update/create.

    // TODO: As I said in another place, use transaction for each driver/truck/trailer.
    // TODO: if one asset is wrong, skip it, continue to next one.
    // TODO: After all updates, if there are anything wrong, send an email to the company. You can use the importNewAssetMail
    // and importAsset.blade.php to send assets that are wrong. Do not see the specific reason what is wrong now. Just say failed to update due to error.

    // Also, please let me know: does Laravel supports a job that can run for several minutes?

    //unique email 1
    // TODO: use one query to find if any request emails exist for users who
    // do not belong to current company.
    /*
    $existingEmails = User::whereIn('email', <all emails in request here>)
      ->where('admin_company_detail_id', '!=', $this->companyId)
      ->count();
      if ($existingEmails > 0) {
        throw new \Exception(config('response.user.unique_email'));
      }
      */
    // unique email 2
    // Make sure all emails in request are unique as well. (No two emails in request are the same)


    return DB::transaction(function () use ($request) {
      $newAssets = [];
      //sync trucks
      $trucks = $request->trucks ?? [];
      $truckAssets = $this->importTruckAssets($trucks);
      if (!empty($truckAssets)) {
        if (!empty($truckAssets['newTrucks'])) {
          $newAssets['trucks'] = $truckAssets['newTrucks'] ?? [];
        }
      }
      //sync trailers
      $trailers = $request->trailers ?? [];
      $trailerAssets = $this->importTrailerAssets($trailers);
      if (!empty($trailerAssets)) {
        if (!empty($trailerAssets['newTrailers'])) {
          $newAssets['trailers'] = $trailerAssets['newTrailers'] ?? [];
        }
      }
      //sync drivers
      $drivers = $request->drivers ?? [];
      if (!empty($drivers)) {
        // TODO: query columns that can be updated.
        $existingDrivers = DriverDetail::select('id', 'user_id', 'company_employee_id')
          ->with(['user:id,admin_company_detail_id,email'])
          ->whereHas('User', function ($q1) {
            $q1->where('admin_company_detail_id', $this->companyId);
          })
          ->get();

        $existingNonDrivers = User::where('admin_company_detail_id', $this->companyId)
          ->select('id', 'admin_company_detail_id', 'email', 'role')
          ->where('role', '!=', config('constant.roles.driver'))
          ->get();
        $existingNonDriversMap = [];
        foreach ($existingNonDrivers as $oneExistingNonDriver) {
          $existingNonDriversMap[$oneExistingNonDriver->email] = $oneExistingNonDriver->role;
        }
        $existingDriversMap = [];
        foreach ($existingDrivers as $oneExistingDriver) {
          $existingDriversMap[$oneExistingDriver->user->email] = $oneExistingDriver;
        }

        $latestCompanyTrucks = Truck::select('id', 'number')
          ->where('company_id', $this->companyId)->get();
        $latestCompanyTrailers = Trailer::select('id', 'number')
          ->where('company_id', $this->companyId)->get();
        /*
        $companyTags = Tag::select('id', 'business_name')
          ->where('company_id', $this->companyId)->get();
        */

        foreach ($drivers as $driver) {
          $personalInfo = $driver['personalInfo'];
          $password = $personalInfo['password'] ?? null;
          //save user
          $getUserValidatedData = $this->getUserValidatedData($personalInfo);
          //check tags
          /*
          $driverTags = null;
          if (isset($driver['tags'])) {
            $driverTags = [];
            foreach ($driver['tags'] as $tag) {
              $companyTag = $companyTags->where(
                'business_name',
                $tag['tagName']
              )->pluck('id')->first() ?? null;
              if (!empty($companyTag)) {
                $driverTags[] = $companyTag;
              } else {
                throw new Exception($tag['tagName'] . ": " . config('response.tag.notFound'));
              }
            }
          }
          */
          $employeeId = $personalInfo['employeeId'];
          // $existingDriver = $existingDrivers->where('company_employee_id', $employeeId)->first();

          $userEmail = $getUserValidatedData['email'];
          if (empty($userEmail)) {
            throw new Exception("Error create/update driver due to empty email.");
          }
          if (isset($existingNonDriversMap[$userEmail])) {
            throw new Exception($userEmail . " was already created as " .
              $existingNonDriversMap[$userEmail] . ".");
          }

          $existingDriver = isset($existingDriversMap[$userEmail]) ? $existingDriversMap[$userEmail] : null;

          try {
            if (!empty($existingDriver)) {
              // TODO: only do update if some values are different.
              if (!empty($password)) {
                $getUserValidatedData['password'] = $password;
              }
              $existingDriver->user->fill($getUserValidatedData)->save();
              $user = $existingDriver->user;
            } else {
              //new driver user with current company
              $getUserValidatedData['password'] = $password ?? config('constant.defaultPassword');
              $user = User::create($getUserValidatedData);
            }
            //sync user tags
            /*
            if (!is_null($driverTags)) {
              $user->tags()->sync($driverTags);
            }
            */
          } catch (Exception $exception) {
            Log::error($exception);
            throw new Exception("Error create/update driver for email: " . $userEmail . ", employee id: " . $employeeId . ".");
          }

          //save driver details
          $getDriverValidatedData = $this->getDriverValidatedData($driver);
          //driver truck assignments
          // TODO: use if here.
          if (
            false &&
            array_key_exists('driveAssignments', $driver)
            && array_key_exists('trucks', $driver['driveAssignments'])
          ) {
            $truckAssignments = !empty($driver['driveAssignments']) ?
              (!empty($driver['driveAssignments']['trucks']) ?
                $driver['driveAssignments']['trucks'] : []) : [];
            $currentTruckAssignment = $this->createOrUpdateTruckAssignments(
              $user,
              $truckAssignments,
              $latestCompanyTrucks
            );
            if ($currentTruckAssignment) {
              $getDriverValidatedData['assignment_truck_id'] =
                $currentTruckAssignment['assignment_truck_id'];
              $getDriverValidatedData['driver_truck_assignment_id'] =
                $currentTruckAssignment['driver_truck_assignment_id'];
            }
          }

          //driver trailer assignments
          if (
            false &&
            array_key_exists('driveAssignments', $driver)
            && array_key_exists('trailers', $driver['driveAssignments'])
          ) {
            $trailerAssignments = !empty($driver['driveAssignments']) ?
              (!empty($driver['driveAssignments']['trailers']) ?
                $driver['driveAssignments']['trailers'] : []) : [];
            $currentTrailerAssignment = $this->createOrUpdateTrailerAssignments(
              $user,
              $trailerAssignments,
              $latestCompanyTrailers
            );
            if ($currentTrailerAssignment) {
              $getDriverValidatedData['assignment_trailer_id'] =
                $currentTrailerAssignment['assignment_trailer_id'];
              $getDriverValidatedData['driver_trailer_assignment_id'] =
                $currentTrailerAssignment['driver_trailer_assignment_id'];
            }
          }

          // Note: this is only to not return DB error message to outsiders.
          try {
            if (!empty($existingDriver)) {
              //update driver details with current company employee id
              // TODO: only update if values are different.
              $existingDriver->fill($getDriverValidatedData)->save();
            } else {
              //new driver details
              $getDriverValidatedData['user_id'] = $user->id;
              DriverDetail::create($getDriverValidatedData);
              $newAssets['drivers'][] = [
                'name' => $getDriverValidatedData['name'],
                'created_at' => $this->carbonNow
              ];
            }
          } catch (Exception $exception) {
            Log::error($exception);
            throw new Exception("Error create/update driver for email: " . $userEmail . ", employee id: " . $employeeId . ".");
          }
        }
      }
      //send email to company
      if (!empty($newAssets)) {
        $adminCompanyEmail = AdminCompanyDetail::where('id', $this->companyId)->value('email');
        if (!empty($adminCompanyEmail)) {
          // TODO: if more companies use this API, then should decide by company id.
          if (app()->environment('production')) {
            $toEmails = [$adminCompanyEmail, "liz.oller@emerysapp.com", "matt.cowell@emerysapp.com"];
          } else {
            $toEmails = [$adminCompanyEmail];
          }
          Mail::queue(new ImportNewAssetMail($toEmails, $newAssets));
        }
      }
      return [];
    });
  }

  /**
   * Import truck assets.
   * @param $trucks
   * @return mixed
   * @throws Exception
   */
  public function importTruckAssets($trucks) {
    $truckAssets = [];
    if (!empty($trucks)) {
      // TODO: query existing values that can be updated.
      $existingTrucks = Truck::select('id', 'number', 'company_id')
        ->where('company_id', $this->companyId)->get();
      $trucksToInsert = [];
      try {
        // Note: this is only to not return DB error message to outsiders.
        // Remember to switch to one DB transaction for each asset.
        foreach ($trucks as $truck) {
          $getTruckValidatedData = $this->getTruckValidatedData($truck);
          $getTruckValidatedData['updated_at'] = $this->carbonNow;
          $truckNumber = $truck['truckInfo']['truckNumber'];
          $truck = $existingTrucks->where('number', $truckNumber)->first();
          if (!empty($truck)) {
            // TODO: compare existing value. Only update if different.
            $truck->fill($getTruckValidatedData)->save();
          } else {
            $getTruckValidatedData['created_at'] = $this->carbonNow;
            $trucksToInsert[] = $getTruckValidatedData;
            $truckAssets['newTrucks'][] = [
              'number' => $getTruckValidatedData['number'],
              'created_at' => $this->carbonNow
            ];
          }
        }
        if (!empty($trucksToInsert)) {
          Truck::insert($trucksToInsert);
        }
      } catch (Exception $exception) {
        Log::error($exception);
        throw new Exception("Error create/update truck.");
      }
    }
    return $truckAssets;
  }

  /**
   * Import trailer assets.
   * @param $trailers
   * @return mixed
   * @throws Exception
   */
  public function importTrailerAssets($trailers) {
    $trailerAssets = [];
    if (!empty($trailers)) {
      // TODO: query existing values that can be updated.
      $existingTrailers = Trailer::select('id', 'number', 'company_id')
        ->where('company_id', $this->companyId)->get();
      $trailersToInsert = [];
      try {
        // Note: this is only to not return DB error message to outsiders.
        // Remember to switch to one DB transaction for each asset.
        foreach ($trailers as $trailer) {
          $getTrailerValidatedData = $this->getTrailerValidatedData($trailer);
          $getTrailerValidatedData['updated_at'] = $this->carbonNow;
          $trailerNumber = $trailer['trailerInfo']['trailerNumber'];
          $trailer = $existingTrailers->where('number', $trailerNumber)->first();
          if (!empty($trailer)) {
            // TODO: compare existing value. Only update if different.
            $trailer->fill($getTrailerValidatedData)->save();
          } else {
            $getTrailerValidatedData['created_at'] = $this->carbonNow;
            $trailersToInsert[] = $getTrailerValidatedData;
            $trailerAssets['newTrailers'][] = [
              'number' => $getTrailerValidatedData['number'],
              'created_at' => $this->carbonNow
            ];
          }
        }
        if (!empty($trailersToInsert)) {
          Trailer::insert($trailersToInsert);
        }
      } catch (Exception $exception) {
        Log::error($exception);
        throw new Exception("Error create/update trailer.");
      }
    }
    return $trailerAssets;
  }

  /**
   * Validated request data to create truck.
   * @param $truck
   * @return array
   */
  public function getTruckValidatedData($truck): array {
    $truckInfo = $truck['truckInfo'];
    $data = [
      'number' => $truckInfo['truckNumber'],
      'status' => $truckInfo['status'],
      'year' => $truckInfo['year'] ?? null,
      'make' => $truckInfo['make'] ?? null,
      'model' => $truckInfo['model'] ?? null,
      'truck_vin' => $truckInfo['vin'] ?? null,
      'licence_plate' => $truckInfo['licensePlate'] ?? null,
      'license_state' => $truckInfo['state'] ?? null,
      'company_id' => $this->companyId,
      'user_id' => $this->userId,
    ];
    if (!empty($truck['finance'])) {
      $truckOwnerShipTypes = config('constant.syncApi.ownerShipType.truck');
      $data['ownership'] = !empty($truck['finance']['ownershipType']) ?
        array_search($truck['finance']['ownershipType'], $truckOwnerShipTypes) : null;
      $data['date_acquired'] = $truck['finance']['dateAcquired'] ?? null;
    }
    return $data;
  }

  /**
   * Validated request data to create trailer.
   * @param $trailer
   * @return array
   */
  public function getTrailerValidatedData($trailer): array {
    $trailerInfo = $trailer['trailerInfo'];
    $data = [
      'number' =>  $trailerInfo['trailerNumber'],
      'status' =>  $trailerInfo['status'],
      'year' =>  $trailerInfo['year'] ?? null,
      'make' =>  $trailerInfo['make'] ?? null,
      'model' =>  $trailerInfo['model'] ?? null,
      'vin' =>  $trailerInfo['vin'] ?? null,
      'licence_plate' =>  $trailerInfo['licensePlate'] ?? null,
      'license_state' =>  $trailerInfo['state'] ?? null,
      'company_id' => $this->companyId,
      'user_id' => $this->userId,
    ];
    if (!empty($trailer['finance'])) {
      $trailerOwnerShipTypes = config('constant.syncApi.ownerShipType.trailer');
      $data['ownership'] = !empty($trailer['finance']['ownershipType']) ?
        array_search($trailer['finance']['ownershipType'], $trailerOwnerShipTypes) : null;
      $data['date_acquired'] = $trailer['finance']['dateAcquired'] ?? null;
    }
    return $data;
  }

  /**
   * Validated request data to create user.
   * @param $user
   * @return array
   */
  public function getUserValidatedData($user): array {
    $role = config('constant.roles.driver');
    return [
      'email' => $user['email'],
      'first_name' => $user['firstName'],
      'last_name' => $user['lastName'],
      'role' => $role,
      'status' => $user['status'],
      'admin_company_detail_id' => $this->companyId,
    ];
  }

  /**
   * Create Or Update Driver's Truck Assignments.
   * @param $user
   * @param $assignments
   * @param $trucks
   * @return array
   * @throws Exception
   */
  public function createOrUpdateTruckAssignments($user, $assignments, $trucks) {
    if (collect($assignments)->where('current', true)->count() > 1) {
      throw new \Exception(config('response.truck.assignments.multiple_current_error'));
    }
    $currentAssignmentDetails = [
      'assignment_truck_id' => null,
      'driver_truck_assignment_id' => null
    ];

    // 1. add to previous driver query existing assignments.
    // 2. here for each existing assignment, you just update its value according to new values in request. Here you also only update if values are different.
    // 3. If |oldAssignments| > |newAssignments|, you delete extra old assignments.
    // 4. If |oldAssignments| < |newAssignments|, you create new assignments.

    if (!empty($assignments)) {
      $existingData = $user->driverTruckAssignments;
      $getNewAssignCount = count($assignments);
      $getOldAssignCount = count($existingData);
      if ($getNewAssignCount < $getOldAssignCount) {
        // Remove Last Records If |oldAssignments| > |newAssignments|, you delete extra old assignments.
        $deleteData = [];
        for ($i = $getOldAssignCount - 1; $i >= $getNewAssignCount; $i--) {
          $deleteData[] = $existingData[$i]->id;
        }
        $user->driverTruckAssignments()->whereIn('id', $deleteData)->delete();
      }
      foreach ($assignments as $key => $assignment) {
        $truckId = $trucks->where('number', $assignment['truckNumber'])->pluck('id')
          ->first() ?? null;
        if (empty($truckId)) {
          throw new \Exception(config('response.truck.assignments.match_with_truck_numbers'));
        }
        $upSert = [
          'truck_id' => $truckId,
          'start_date' => $assignment['startDate'] ?? null,
          'end_date' => $assignment['endDate'] ?? null
        ];
        if (!empty($existingData[$key])) {
          $driverAssignment = $existingData[$key];
          /** If any of values are not matched with existing then update*/
          if (($driverAssignment->truck_id != $truckId) ||
            ($driverAssignment->start_date != $assignment['startDate']) ||
            ($driverAssignment->end_date != $assignment['endDate'])
          ) {
            $driverAssignment->update($upSert);
          }
        } else {
          $driverAssignment = $user->driverTruckAssignments()->create($upSert);
        }
        if (isset($assignment['current']) && $assignment['current']) {
          $currentAssignmentDetails['assignment_truck_id'] = $truckId;
          $currentAssignmentDetails['driver_truck_assignment_id'] = $driverAssignment->id;
        }
      }
    }
    /*
    Turn this on later.
     else {
      $user->driverTruckAssignments()->delete();
    }
    */
    return $currentAssignmentDetails;
  }

  /**
   * Create Or Update Driver's Trailer Assignments.
   * @param $user
   * @param $assignments
   * @param $trailers
   * @return array
   * @throws Exception
   */
  public function createOrUpdateTrailerAssignments($user, $assignments, $trailers) {
    if (collect($assignments)->where('current', true)->count() > 1) {
      throw new \Exception(config('response.trailer.assignments.multiple_current_error'));
    }
    $currentAssignmentDetails = [
      'assignment_trailer_id' => null,
      'driver_trailer_assignment_id' => null
    ];

    // 1. add to previous driver query existing assignments.
    // 2. here for each existing assignment, you just update its value according to new values in request. Here you also only update if values are different.
    // 3. If |oldAssignments| > |newAssignments|, you delete extra old assignments.
    // 4. If |oldAssignments| < |newAssignments|, you create new assignments.

    if (!empty($assignments)) {
      $existingData = $user->driverTrailerAssignments;
      $getNewAssignCount = count($assignments);
      $getOldAssignCount = count($existingData);
      if ($getNewAssignCount < $getOldAssignCount) {
        // Remove Last Records If |oldAssignments| > |newAssignments|, you delete extra old assignments.
        $deleteData = [];
        for ($i = $getOldAssignCount - 1; $i >= $getNewAssignCount; $i--) {
          $deleteData[] = $existingData[$i]->id;
        }
        $user->driverTrailerAssignments()->whereIn('id', $deleteData)->delete();
      }
      foreach ($assignments as $key => $assignment) {
        $trailerId = $trailers->where('number', $assignment['trailerNumber'])
          ->pluck('id')->first() ?? null;
        if (empty($trailerId)) {
          throw new \Exception(config('response.trailer.assignments.match_with_trailer_numbers'));
        }
        $upSert = [
          'trailer_id' => $trailerId,
          'start_date' => $assignment['startDate'] ?? null,
          'end_date' => $assignment['endDate'] ?? null
        ];
        if (!empty($existingData[$key])) {
          $driverAssignment = $existingData[$key];
          /** If any of values are not matched with existing then update*/
          if (($driverAssignment->trailer_id != $trailerId) ||
            ($driverAssignment->start_date != $assignment['startDate']) ||
            ($driverAssignment->end_date != $assignment['endDate'])
          ) {
            $driverAssignment->update($upSert);
          }
        } else {
          $driverAssignment = $user->driverTrailerAssignments()->create($upSert);
        }
        if (isset($assignment['current']) && $assignment['current']) {
          $currentAssignmentDetails['assignment_trailer_id'] = $trailerId;
          $currentAssignmentDetails['driver_trailer_assignment_id'] = $driverAssignment->id;
        }
      }
    }
    /*
    Turn this on later.
     else {
      $user->driverTrailerAssignments()->delete();
    }
    */
    return $currentAssignmentDetails;
  }

  /**
   * Validated request data to create driver.
   * @param $driver
   * @return array
   */
  public function getDriverValidatedData($driver): array {
    // $type = config('constant.driver_type.employee');
    $driverPersonalInfor = $driver['personalInfo'];
    $driverEmergencyContact = $driver['emergencyContact'] ?? null;
    $driverCompliance = $driver['compliance'] ?? null;
    $driverJobInfo = $driver['jobInfo'] ?? null;
    $driverFuelCard = $driver['fuelCard'] ?? null;
    $data = [
      'name' => trim($driverPersonalInfor['firstName'] . ' ' .
        $driverPersonalInfor['lastName']),
      // 'type' => $type,
      'owner_id' => $this->userId,
      'company_employee_id' => $driverPersonalInfor['employeeId'],
      'mailing_address' => $driverPersonalInfor['address'] ?? null,
      'ssn' => $driverPersonalInfor['ssn'],
      'birth_date' => $driverPersonalInfor['dob'],
      'gender' => $driverPersonalInfor['gender'] ?
        array_flip(config('constant.gender'))[$driverPersonalInfor['gender']] : null,
    ];
    if (!empty($driverEmergencyContact)) {
      $data['emgy_contact_name'] = $driverEmergencyContact['name'];
      $data['emgy_contact_phone'] = $driverEmergencyContact['phone'];
      $data['emgy_contact_relationship'] = $driverEmergencyContact['relationship'];
      $data['emgy_contact_email'] = $driverEmergencyContact['email'];
      $data['emgy_contact_address'] = $driverEmergencyContact['address'];
    }
    if (!empty($driverCompliance)) {
      $data['driving_license'] = $driverCompliance['cdlNumber'];
      $data['issue_state'] = $driverCompliance['cdlState'];
      $data['driving_license_expire_date'] = $driverCompliance['cdlExpirationDate'];
    }
    if (!empty($driverJobInfo)) {
      $data['date_added'] = $driverJobInfo['dateAdded'];
      $data['date_removed'] = $driverJobInfo['dateRemoved'];
    }
    if (!empty($driverFuelCard)) {
      $data['fuel_card_number'] = $driverFuelCard['fuelCardNumber'];
    }
    return $data;
  }
}
