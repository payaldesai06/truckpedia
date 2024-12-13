<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Customer;
use App\Models\Trailer;
use App\Models\Truck;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use App\Services\Helpers\CompanyStatisticsHelper;
use App\Services\StripeService;
use App\Models\Invoice;
use App\Models\User;
use App\Models\AdminDetail;
use App\Models\DriverDetail;
use App\Models\AdminCompanyDetail;
use App\Services\AdminCompanyProfileService;
use App\Services\SpreadsheetService;
use App\Models\Load;
use App\Models\AccessorialFee;
use App\Models\PublicWeeklyFuelPrice;
use App\Models\PublicIftaFuelTaxRate;
use App\Models\SavedAddress;
use Maatwebsite\Excel\Facades\Excel;

class ZhaoxingManualImportDataController extends Controller {
  public function test() {
    // (new SpreadsheetService())->cronToGenerateLoadWeeklyReport();
    $companyStatisticsHelper = new CompanyStatisticsHelper();
    $activeDriversAndTrucks = $companyStatisticsHelper
      ->countOneCompanyActiveDriversAndTrucksInPeriod(
        1,
        Carbon::now()->subMonth()->toDateString(),
        Carbon::now()->toDateString()
      );
    error_log(json_encode($activeDriversAndTrucks));
  }

  public function testAddress() {
    $address = '1600 LEXINGTON AVE SUITE 346 ROCHESTER NY 14606';
    $geoData = getLatAndLongUsingGoogleMapByAddress($this->betterAddress($address));
    error_log(json_encode($geoData));
  }

  private function betterAddress($originalAddress) {
    $originalArray = explode(" ", $originalAddress);
    $noEmailArray = array_map(function ($value) {
      if (!preg_match('/@/', $value)) {
        return $value;
      }
    }, $originalArray);
    $noEmailAddress = implode(' ', $noEmailArray);

    $newStringArr2 = preg_split('/[A-Z]{2} [0-9]{5}/', $noEmailAddress); //split string in array with matched pattern like 2 cap char and 5 digits ex. AB 12345
    $removeLastPart = end($newStringArr2); //matched pattern after string part to remove
    if (!empty($removeLastPart)) {
      $noEmailAddress = str_replace($removeLastPart, '', $noEmailAddress);
    }

    return preg_replace('/[^a-z0-9- ]/i', '', $noEmailAddress);;
  }

  public function addNewAdminUser() {
    try {
      $data = array(
        'first_name' => 'Henry',
        'last_name' => 'Ebosh',
      );
      DB::transaction(function () use ($data) {
        $companyId = 36;
        $ownerId = 177;
        $role = config('constant.roles.admin');
        $status = config('constant.status.user.active');
        $carbonNow = Carbon::now()->toDateTimeString();
        $email = 'henry+rmp@ezpapel.com';
        $password = '123456';
        $userData = [
          'first_name' => $data['first_name'],
          'last_name' => $data['last_name'],
          'email' => $email,
          'password' => $password,
          'admin_company_detail_id' => $companyId,
          'role' => $role,
          'status' => $status,
          'created_at' => $carbonNow,
          'updated_at' => $carbonNow
        ];
        $user = User::create($userData);
        if (!empty($user)) {
          $adminData = [
            'first_name' => $data['first_name'],
            'last_name' => $data['last_name'],
            'user_id' =>  $user->id,
            'owner_id' =>  $ownerId,
            'created_at' => $carbonNow,
            'updated_at' => $carbonNow,
          ];
          AdminDetail::create($adminData);
        }
      });
      return $this->respondOk();
    } catch (\Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }

  public function importCustomerData() {
    try {
      $companyId = 36;
      $userId = 177;
      $type = config('constant.customer_type.broker');
      $status = config('constant.status.customer.active');
      $carbonNow = Carbon::now()->toDateTimeString();
      $data =  [
        0 => [
          'company_name' => "PTI Logistics Inc",
          'address' => '',
          'city' => '',
          'state' => '',
          'zip_code' => '',
          'billing_address' => '',
          'billing_city' => '',
          'billing_state' => '',
          'billing_zip_code' => '',
          'billing_phone_number' => '',
          'billing_email' => '',
          'payment_terms_day' => 30,
          'company_id' => $companyId,
          'user_id' => $userId,
          'type' => $type,
          'status' => $status,
          "created_at" => $carbonNow,
          "updated_at" => $carbonNow,
        ],
      ];
      DB::transaction(function () use ($data) {
        Customer::insert($data);
      });
      return $this->respondOk();
    } catch (\Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }

  public function importTruckData() {
    try {
      $companyId = 36;
      $userId = 177;
      $status = config('constant.status.truck.active');
      $carbonNow = Carbon::now()->toDateTimeString();
      $data = array(
        array(
          "user_id" => $userId,
          "company_id" => $companyId,
          "status" => $status,
          "created_at" => $carbonNow,
          "updated_at" => $carbonNow,
          "number" => "1818",
          "year" => "2016",
          "make" => "XCMG",
          "licence_plate" => "111",
          "truck_vin" => "ABCDEFG111",
          "inspection_expiry" => "2023-11-11",
          "licence_plate_expiry" => "2023-12-12"
        ),
      );
      DB::transaction(function () use ($data) {
        Truck::insert($data);
      });
      return $this->respondOk();
    } catch (\Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }

  public function importTrailerData() {
    try {
      $companyId = 0;
      $user_id = 0;
      $status = config('constant.status.trailer.active');
      $carbonNow = Carbon::now()->toDateTimeString();
      $data = array(
        array(
          "user_id" => $user_id,
          "company_id" => $companyId,
          "status" => $status,
          // "ownership" => $ownership,
          "number" => 0,
          "created_at" => $carbonNow,
          "updated_at" => $carbonNow,
        ),
        array(
          "user_id" => $user_id,
          "company_id" => $companyId,
          "status" => $status,
          // "ownership" => $ownership,
          "number" => 0,
          "created_at" => $carbonNow,
          "updated_at" => $carbonNow,
        ),
      );

      DB::transaction(function () use ($data) {
        Trailer::insert($data);
      });
      return $this->respondOk();
    } catch (\Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }

  public function importDriverData() {
    try {
      $data = array(
        array(
          'address' => '500 Landfair Ave, Los Angeles, CA 90024',
          'first_name' => 'Zhaoxing',
          'last_name' => 'Bu',
          'birth_date' => '2022-11-18',
          'license' => 'ABCDEFG',
          'phone_number' => '1234567899',
          'occupation_expire_date' => '2023-12-31',
          'date_added' => '2022-12-31',
          'endorsements' => 'H',
        ),
      );
      DB::transaction(function () use ($data) {
        $companyId = 36;
        $ownerId = 177;
        $role = config('constant.roles.driver');
        $status = config('constant.status.driver.active');
        $carbonNow = Carbon::now()->toDateTimeString();
        foreach ($data as $index => $row) {
          $indexForMail = $index + 1;
          $email = 'driver' . $indexForMail . '@ezpapel.com';
          $password = '123456';
          $userData = [
            'first_name' => $row['first_name'],
            'last_name' => $row['last_name'],
            'email' => $email,
            'password' => $password,
            'admin_company_detail_id' => $companyId,
            'role' => $role,
            'status' => $status,
            'created_at' => $carbonNow,
            'updated_at' => $carbonNow
          ];
          $user = User::create($userData);
          if (!empty($user)) {
            $driverData = [
              'name' =>  $row['first_name'] . ' ' . $row['last_name'],
              'user_id' =>  $user->id,
              'owner_id' =>  $ownerId,
              // 'type' =>  config('constant.driver_type.employee'),
              'driving_license' =>  $row['license'],
              'mailing_address' =>  $row['address'],
              'birth_date' =>  $row['birth_date'],
              'created_at' => $carbonNow,
              'updated_at' => $carbonNow,
              'phone_number' => $row['phone_number'],
              'occupation_expire_date' => $row['occupation_expire_date'],
              'date_added' => $row['date_added'],
              'endorsements' => $row['endorsements'],
            ];
            DriverDetail::create($driverData);
          }
        }
      });
      return $this->respondOk();
    } catch (\Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }

  public function importInvoiceData() {
    try {
      $data = [
        [
          "invoice_number" => "Q7221040",
          "issue_date" => "2023-01-16",
          "amount" => 3150,
        ],
      ];
      DB::transaction(function () use ($data) {
        $companyId = 36;
        $customerId = 3968;
        $status = array_search('paid', config('constant.status.invoice'));
        $dueDate = "2023-03-01"; //1st march
        $qty = 1;
        foreach ($data as $row) {
          $invoiceData = [
            'company_id' => $companyId,
            'customer_id' => $customerId,
            'status' => $status,
            'invoice_number' => $row['invoice_number'],
            'balance_due' => $row['amount'],
            'issue_date' => $row['issue_date'],
            'due_date' => $dueDate
          ];
          $invoice = Invoice::create($invoiceData);
          $invoice->invoiceItems()->create(['name' => $row['invoice_number'], 'qty' => $qty, 'rate' => $row['amount'], 'amount' => $row['amount']]);
        }
      });
      return $this->respondOk();
    } catch (\Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }

  /**
   * Auto Generate fields of load and trip for companies.
   * @return mixed
   */
  public function autoGenerateFieldsForCompanies() {
    try {
      //creating those 9 fields for all existing companies whose company id >= 20
      $companyIds = AdminCompanyDetail::where('id', '>=', 20)->pluck('id')->toArray();
      if (!empty($companyIds)) {
        $adminCompanyProfileService = (new AdminCompanyProfileService());
        foreach ($companyIds as $companyId) {
          $adminCompanyProfileService->autoGenerateFields($companyId);
        }
      }
      return $this->respondOk();
    } catch (\Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }

  /**
   * Export Load Lanes By Company ID
   * @return mixed
   */
  public function exportLoadLanesByCompanyId() {
    try {
      $companyId = 36;
      header('Content-type: text/txt');
      header("Content-Disposition: attachment;filename=exportCustomerLoad" . time() . ".txt");
      $loads = Load::query()->select('id', 'total_amount', 'total_miles', 'customer_id')
        ->with([
          'loadShippers:id,load_id,shipper_name,address,city,state,zip_code,order',
          'loadReceivers:id,load_id,receiver_name,address,city,state,zip_code,order',
          'customer:id,company_name',
          'loadCharge:id,hauling_fees_type,load_id'
        ])
        ->where('admin_company_detail_id', $companyId)
        ->orderBy('id')
        ->get();

      $exportLoads = [];
      $exportLoads['header-columns'] = [
        'customerName' => "Customer Name",
        'shipperName' => "Shipper Name",
        'shipperAddress' => "Shipper Address",
        'shipperCity' => "Shipper City",
        'shipperState' => "Shipper State",
        'shipperZipCode' => "Shipper Zip Code",
        'receiverName' => "Receiver Name",
        'receiverAddress' => "Receiver Address",
        'receiverCity' => "Receiver City",
        'receiverState' => "Receiver State",
        'receiverZipCode' => "Receiver Zip Code",
        'haulingFeeType' => "Hauling Fee Type",
        'totalMiles' => "Total Miles",
        'totalAmount' => "Total Amount",
        'RPM' => "Rate Per Mile"
      ];

      foreach ($loads as $load) {
        $firstLoadShipper = $load->loadShippers->first();
        $lastLoadReceivers = $load->loadReceivers->last();

        $haulingFeeType = $load->loadCharge ?
          config('constant.haulingFeesTypeFeString')[$load->loadCharge->hauling_fees_type] : "";
        $customerName = $load->customer->company_name ?? "";
        $shipperName = $firstLoadShipper->shipper_name ?? "";
        $shipperAddress = $firstLoadShipper->address ?? "";
        $shipperCity = $firstLoadShipper->city ?? "";
        $shipperState = $firstLoadShipper->state ?? "";
        $shipperZipCode = $firstLoadShipper->zip_code ?? "";
        $receiverName = $lastLoadReceivers->receiver_name ?? "";
        $receiverAddress = $lastLoadReceivers->address ?? "";
        $receiverCity = $lastLoadReceivers->city ?? "";
        $receiverState = $lastLoadReceivers->state ?? "";
        $receiverZipCode = $lastLoadReceivers->zip_code ?? "";

        $key = strtolower($customerName) . '+' . strtolower($shipperName) . '+' .
          strtolower($shipperAddress) . '+' . strtolower($shipperCity) . '+' .
          strtolower($shipperState) . '+' . strtolower($shipperZipCode) . '+' .
          strtolower($receiverName) . '+' . strtolower($receiverAddress) . '+' .
          strtolower($receiverCity) . '+' . strtolower($receiverState) . '+' .
          strtolower($receiverZipCode);

        $exportLoads[$key] = [
          'customerName' => $customerName,
          'shipperName' => $shipperName,
          'shipperAddress' => $shipperAddress,
          'shipperCity' => $shipperCity,
          'shipperState' => $shipperState,
          'shipperZipCode' => $shipperZipCode,
          'receiverName' => $receiverName,
          'receiverAddress' => $receiverAddress,
          'receiverCity' => $receiverCity,
          'receiverState' => $receiverState,
          'receiverZipCode' => $receiverZipCode,
          'haulingFeeType' => $haulingFeeType,
          'totalMiles' => !empty($load->total_miles) ? $load->total_miles : "0.00",
          'totalAmount' => !empty($load->total_amount) ? $load->total_amount : "0.00",
          'RPM' => !empty($load->total_amount) && !empty($load->total_miles)
            ? round($load->total_amount / $load->total_miles, 2) : "0.00",
        ];
      }

      $data = "";
      foreach ($exportLoads as $load) {
        $data .=  $load['customerName'] . "\t";
        $data .=  $load['shipperName'] . "\t";
        $data .=  $load['shipperAddress'] . "\t";
        $data .=  $load['shipperCity'] . "\t";
        $data .=  $load['shipperState'] . "\t";
        $data .=  $load['shipperZipCode'] . "\t";
        $data .=  $load['receiverName'] . "\t";
        $data .=  $load['receiverAddress'] . "\t";
        $data .=  $load['receiverCity'] . "\t";
        $data .=  $load['receiverState'] . "\t";
        $data .=  $load['receiverZipCode'] . "\t";
        $data .=  $load['haulingFeeType'] . "\t";
        $data .=  $load['totalMiles'] . "\t";
        $data .=  $load['totalAmount'] . "\t";
        $data .=  $load['RPM'] . "\t";
        $data .= "\n";
      }
      echo $data;
    } catch (\Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }

  /**
   * Add one accessorial fee called “Detention” for existing companies.
   * @return mixed
   */
  public function addDetentionAccessorialFeeForExistingCompanies() {
    try {
      $defaultAccessorialFeeDetention = config('constant.company.defaultAccessorialFeeDetention');
      $carbonNow = now();
      $companies = AdminCompanyDetail::whereDoesntHave(
        'accessorialFees',
        function ($query) use ($defaultAccessorialFeeDetention) {
          return $query->where('name', $defaultAccessorialFeeDetention);
        }
      )
        ->select('id', 'user_id')->get();
      $insertData = $companies->map(function ($company) use ($defaultAccessorialFeeDetention, $carbonNow) {
        return [
          'user_id' => $company->user_id,
          'admin_company_detail_id' => $company->id,
          'name' => $defaultAccessorialFeeDetention,
          'description' => $defaultAccessorialFeeDetention,
          'created_at' => $carbonNow,
          'updated_at' => $carbonNow,
        ];
      });
      if ($insertData->isNotEmpty()) {
        AccessorialFee::insert($insertData->toArray());
      }
      return $this->respondOk();
    } catch (\Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }

  /**
   * Export Company Load
   * @return mixed
   */
  public function exportUniqueCompaniesLanes() {
    try {
      $excludeCompanies = [23, 36];
      $state = 'CA';

      $loads = Load::query()->with([
        'loadShippers:id,load_id,shipper_name,address,city,state,zip_code,order',
        'loadReceivers:id,load_id,receiver_name,address,city,state,zip_code,order',
      ])
        ->whereHas('loadShippers', function ($innerQuery) use ($state) {
          $innerQuery->where('state', $state);
        })
        ->whereNotIn('admin_company_detail_id', $excludeCompanies)
        ->select('id', 'total_amount', 'total_miles')
        ->get();

      $headerColumns = [
        'shipperName' => 'Shipper Name',
        'shipperAddress' => 'Shipper Address',
        'shipperCity' => 'Shipper City',
        'shipperState' => 'Shipper State',
        'shipperZipCode' => 'Shipper Zip Code',
        'receiverName' => 'Receiver Name',
        'receiverAddress' => 'Receiver Address',
        'receiverCity' => 'Receiver City',
        'receiverState' => 'Receiver State',
        'receiverZipCode' => 'Receiver Zip Code',
        'totalAmount' => 'Total Amount',
        'totalMiles' => 'Total Miles'
      ];

      $exportLoads = [];

      foreach ($loads as $load) {
        $firstLoadShipper = $load->loadShippers->first();
        $lastLoadReceivers = $load->loadReceivers->last();

        $shipperName = $firstLoadShipper->shipper_name ?? "";
        $shipperAddress = $firstLoadShipper->address ?? "";
        $shipperCity = $firstLoadShipper->city ?? "";
        $shipperState = $firstLoadShipper->state ?? "";
        $shipperZipCode = $firstLoadShipper->zip_code ?? "";
        $receiverName = $lastLoadReceivers->receiver_name ?? "";
        $receiverAddress = $lastLoadReceivers->address ?? "";
        $receiverCity = $lastLoadReceivers->city ?? "";
        $receiverState = $lastLoadReceivers->state ?? "";
        $receiverZipCode = $lastLoadReceivers->zip_code ?? "";

        $key = strtolower($shipperName) . '+' . strtolower($shipperAddress) . '+' .
          strtolower($shipperCity) . '+' . strtolower($shipperState) . '+' .
          strtolower($shipperZipCode) . '+' . strtolower($receiverName) . '+' .
          strtolower($receiverAddress) . '+' . strtolower($receiverCity) . '+' .
          strtolower($receiverState) . '+' . strtolower($receiverZipCode);

        if (isset($exportLoads[$key])) {
          $exportLoads[$key]['totalAmount'] = max($exportLoads[$key]['totalAmount'], $load->total_amount);
          $exportLoads[$key]['totalMiles'] = max($exportLoads[$key]['totalMiles'], $load->total_miles);
        } else {
          $exportLoads[$key] = [
            'shipperName' => $shipperName,
            'shipperAddress' => $shipperAddress,
            'shipperCity' => $shipperCity,
            'shipperState' => $shipperState,
            'shipperZipCode' => $shipperZipCode,
            'receiverName' => $receiverName,
            'receiverAddress' => $receiverAddress,
            'receiverCity' => $receiverCity,
            'receiverState' => $receiverState,
            'receiverZipCode' => $receiverZipCode,
            'totalAmount' => $load->total_amount,
            'totalMiles' => $load->total_miles,
          ];
        }
      }

      $data = implode("\t", array_values($headerColumns)) . "\n";

      foreach ($exportLoads as $load) {
        $data .= implode("\t", array_values($load)) . "\n";
      }

      $filename = "exportCustomerLoads" . time() . ".txt";

      return response($data)
        ->header("Content-Type", "text/plain")
        ->header("Content-Disposition", "attachment; filename=$filename");
    } catch (\Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }

  /**
   * Import public weekly fuel prices
   * @return mixed
   */
  public function importPublicWeeklyFuelPriceData() {
    try {
      $carbonNow = Carbon::now()->toDateTimeString();
      $data = array(
        array(
          "release_date" => "2023-01-02",
          "price" => 4.583,
          "created_at" => $carbonNow,
        ),
        array(
          "release_date" => "2023-01-09",
          "price" => 4.549,
          "created_at" => $carbonNow,
        ),
        array(
          "release_date" => "2023-01-16",
          "price" => 4.524,
          "created_at" => $carbonNow,
        ),
        array(
          "release_date" => "2023-01-23",
          "price" => 4.604,
          "created_at" => $carbonNow,
        ),
        array(
          "release_date" => "2023-01-30",
          "price" => 4.622,
          "created_at" => $carbonNow,
        ),
        array(
          "release_date" => "2023-02-06",
          "price" => 4.539,
          "created_at" => $carbonNow,
        ),
        array(
          "release_date" => "2023-02-13",
          "price" => 4.444,
          "created_at" => $carbonNow,
        ),
        array(
          "release_date" => "2023-02-20",
          "price" => 4.376,
          "created_at" => $carbonNow,
        ),
        array(
          "release_date" => "2023-02-27",
          "price" => 4.294,
          "created_at" => $carbonNow,
        ),
        array(
          "release_date" => "2023-03-06",
          "price" => 4.282,
          "created_at" => $carbonNow,
        ),
        array(
          "release_date" => "2023-03-13",
          "price" => 4.247,
          "created_at" => $carbonNow,
        ),
        array(
          "release_date" => "2023-03-20",
          "price" => 4.185,
          "created_at" => $carbonNow,
        ),
        array(
          "release_date" => "2023-03-27",
          "price" => 4.128,
          "created_at" => $carbonNow,
        ),
        array(
          "release_date" => "2023-04-03",
          "price" => 4.105,
          "created_at" => $carbonNow,
        ),
        array(
          "release_date" => "2023-04-10",
          "price" => 4.098,
          "created_at" => $carbonNow,
        ),
        array(
          "release_date" => "2023-04-17",
          "price" => 4.116,
          "created_at" => $carbonNow,
        ),
        array(
          "release_date" => "2023-04-24",
          "price" => 4.077,
          "created_at" => $carbonNow,
        ),
        array(
          "release_date" => "2023-05-01",
          "price" => 4.018,
          "created_at" => $carbonNow,
        ),
        array(
          "release_date" => "2023-05-08",
          "price" => 3.922,
          "created_at" => $carbonNow,
        ),
        array(
          "release_date" => "2023-05-15",
          "price" => 3.897,
          "created_at" => $carbonNow,
        ),
        array(
          "release_date" => "2023-05-22",
          "price" => 3.883,
          "created_at" => $carbonNow,
        ),
        array(
          "release_date" => "2023-05-29",
          "price" => 3.855,
          "created_at" => $carbonNow,
        ),
        array(
          "release_date" => "2023-06-05",
          "price" => 3.797,
          "created_at" => $carbonNow,
        ),
        array(
          "release_date" => "2023-06-12",
          "price" => 3.794,
          "created_at" => $carbonNow,
        ),
        array(
          "release_date" => "2023-06-19",
          "price" => 3.815,
          "created_at" => $carbonNow,
        ),
        array(
          "release_date" => "2023-06-26",
          "price" => 3.801,
          "created_at" => $carbonNow,
        ),
        array(
          "release_date" => "2023-07-03",
          "price" => 3.767,
          "created_at" => $carbonNow,
        ),
        array(
          "release_date" => "2023-07-10",
          "price" => 3.806,
          "created_at" => $carbonNow,
        ),
        array(
          "release_date" => "2023-07-17",
          "price" => 3.806,
          "created_at" => $carbonNow,
        )
      );
      DB::transaction(function () use ($data) {
        PublicWeeklyFuelPrice::insert($data);
      });
      return $this->respondOk();
    } catch (\Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }

  /**
   * Import public ifta fuel tax rates
   * @return mixed
   */
  public function importPublicIftaFuelTaxRateData() {
    try {
      $year = 2023;
      $carbonNow = Carbon::now()->toDateTimeString();

      //Quarter 1 data
      $quarter1 = [
        [
          "state" => "AB",
          "year" => $year,
          "quarter" => 1,
          "tax_rate" => 0,
          "created_at" => $carbonNow
        ],
        [
          "state" => "BC",
          "year" => $year,
          "quarter" => 1,
          "tax_rate" => 0.7774,
          "created_at" => $carbonNow
        ],
        [
          "state" => "MB",
          "year" => $year,
          "quarter" => 1,
          "tax_rate" => 0.3885,
          "created_at" => $carbonNow
        ],
        [
          "state" => "NB",
          "year" => $year,
          "quarter" => 1,
          "tax_rate" => 0.8010,
          "created_at" => $carbonNow
        ],
        [
          "state" => "NL",
          "year" => $year,
          "quarter" => 1,
          "tax_rate" => 0.6358,
          "created_at" => $carbonNow
        ],
        [
          "state" => "NS",
          "year" => $year,
          "quarter" => 1,
          "tax_rate" => 0.4274,
          "created_at" => $carbonNow
        ],
        [
          "state" => "ON",
          "year" => $year,
          "quarter" => 1,
          "tax_rate" => 0.2498,
          "created_at" => $carbonNow
        ],
        [
          "state" => "PE",
          "year" => $year,
          "quarter" => 1,
          "tax_rate" => 0.7648,
          "created_at" => $carbonNow
        ],
        [
          "state" => "QC",
          "year" => $year,
          "quarter" => 1,
          "tax_rate" => 0.5606,
          "created_at" => $carbonNow
        ],
        [
          "state" => "SK",
          "year" => $year,
          "quarter" => 1,
          "tax_rate" => 0.4163,
          "created_at" => $carbonNow
        ],
        [
          "state" => "AL",
          "year" => $year,
          "quarter" => 1,
          "tax_rate" => 0.2900,
          "created_at" => $carbonNow
        ],
        [
          "state" => "AZ",
          "year" => $year,
          "quarter" => 1,
          "tax_rate" => 0.2600,
          "created_at" => $carbonNow
        ],
        [
          "state" => "AR",
          "year" => $year,
          "quarter" => 1,
          "tax_rate" => 0.2840,
          "created_at" => $carbonNow
        ],
        [
          "state" => "CA",
          "year" => $year,
          "quarter" => 1,
          "tax_rate" => 0.8530,
          "created_at" => $carbonNow
        ],
        [
          "state" => "CO",
          "year" => $year,
          "quarter" => 1,
          "tax_rate" => 0.2250,
          "created_at" => $carbonNow
        ],
        [
          "state" => "CT",
          "year" => $year,
          "quarter" => 1,
          "tax_rate" => 0.4920,
          "created_at" => $carbonNow
        ],
        [
          "state" => "DE",
          "year" => $year,
          "quarter" => 1,
          "tax_rate" => 0.2200,
          "created_at" => $carbonNow
        ],
        [
          "state" => "FL",
          "year" => $year,
          "quarter" => 1,
          "tax_rate" => 0.3817,
          "created_at" => $carbonNow
        ],
        [
          "state" => "GA",
          "year" => $year,
          "quarter" => 1,
          "tax_rate" => 0.3120,
          "created_at" => $carbonNow
        ],
        [
          "state" => "ID",
          "year" => $year,
          "quarter" => 1,
          "tax_rate" => 0.3200,
          "created_at" => $carbonNow
        ],
        [
          "state" => "IL",
          "year" => $year,
          "quarter" => 1,
          "tax_rate" => 0.7570,
          "created_at" => $carbonNow
        ],
        [
          "state" => "IN",
          "year" => $year,
          "quarter" => 1,
          "tax_rate" => 0.5500,
          "created_at" => $carbonNow
        ],
        [
          "state" => "IA",
          "year" => $year,
          "quarter" => 1,
          "tax_rate" => 0.3250,
          "created_at" => $carbonNow
        ],
        [
          "state" => "KS",
          "year" => $year,
          "quarter" => 1,
          "tax_rate" => 0.2600,
          "created_at" => $carbonNow
        ],
        [
          "state" => "KY",
          "year" => $year,
          "quarter" => 1,
          "tax_rate" => 0.3180,
          "created_at" => $carbonNow
        ],
        [
          "state" => "LA",
          "year" => $year,
          "quarter" => 1,
          "tax_rate" => 0.2000,
          "created_at" => $carbonNow
        ],
        [
          "state" => "ME",
          "year" => $year,
          "quarter" => 1,
          "tax_rate" => 0.3120,
          "created_at" => $carbonNow
        ],
        [
          "state" => "MD",
          "year" => $year,
          "quarter" => 1,
          "tax_rate" => 0.4345,
          "created_at" => $carbonNow
        ],
        [
          "state" => "MA",
          "year" => $year,
          "quarter" => 1,
          "tax_rate" => 0.2400,
          "created_at" => $carbonNow
        ],
        [
          "state" => "MI",
          "year" => $year,
          "quarter" => 1,
          "tax_rate" => 0.5010,
          "created_at" => $carbonNow
        ],
        [
          "state" => "MN",
          "year" => $year,
          "quarter" => 1,
          "tax_rate" => 0.2850,
          "created_at" => $carbonNow
        ],
        [
          "state" => "MS",
          "year" => $year,
          "quarter" => 1,
          "tax_rate" => 0.1800,
          "created_at" => $carbonNow
        ],
        [
          "state" => "MO",
          "year" => $year,
          "quarter" => 1,
          "tax_rate" => 0.2200,
          "created_at" => $carbonNow
        ],
        [
          "state" => "MT",
          "year" => $year,
          "quarter" => 1,
          "tax_rate" => 0.2975,
          "created_at" => $carbonNow
        ],
        [
          "state" => "NE",
          "year" => $year,
          "quarter" => 1,
          "tax_rate" => 0.2900,
          "created_at" => $carbonNow
        ],
        [
          "state" => "NV",
          "year" => $year,
          "quarter" => 1,
          "tax_rate" => 0.2700,
          "created_at" => $carbonNow
        ],
        [
          "state" => "NH",
          "year" => $year,
          "quarter" => 1,
          "tax_rate" => 0.2220,
          "created_at" => $carbonNow
        ],
        [
          "state" => "NJ",
          "year" => $year,
          "quarter" => 1,
          "tax_rate" => 0.4840,
          "created_at" => $carbonNow
        ],
        [
          "state" => "NM",
          "year" => $year,
          "quarter" => 1,
          "tax_rate" => 0.2100,
          "created_at" => $carbonNow
        ],
        [
          "state" => "NY",
          "year" => $year,
          "quarter" => 1,
          "tax_rate" => 0.3835,
          "created_at" => $carbonNow
        ],
        [
          "state" => "NC",
          "year" => $year,
          "quarter" => 1,
          "tax_rate" => 0.4050,
          "created_at" => $carbonNow
        ],
        [
          "state" => "ND",
          "year" => $year,
          "quarter" => 1,
          "tax_rate" => 0.2300,
          "created_at" => $carbonNow
        ],
        [
          "state" => "OH",
          "year" => $year,
          "quarter" => 1,
          "tax_rate" => 0.4700,
          "created_at" => $carbonNow
        ],
        [
          "state" => "OK",
          "year" => $year,
          "quarter" => 1,
          "tax_rate" => 0.1900,
          "created_at" => $carbonNow
        ],
        [
          "state" => "OR",
          "year" => $year,
          "quarter" => 1,
          "tax_rate" => 0,
          "created_at" => $carbonNow
        ],
        [
          "state" => "PA",
          "year" => $year,
          "quarter" => 1,
          "tax_rate" => 0.7850,
          "created_at" => $carbonNow
        ],
        [
          "state" => "RI",
          "year" => $year,
          "quarter" => 1,
          "tax_rate" => 0.3400,
          "created_at" => $carbonNow
        ],
        [
          "state" => "SC",
          "year" => $year,
          "quarter" => 1,
          "tax_rate" => 0.2800,
          "created_at" => $carbonNow
        ],
        [
          "state" => "SD",
          "year" => $year,
          "quarter" => 1,
          "tax_rate" => 0.2800,
          "created_at" => $carbonNow
        ],
        [
          "state" => "TN",
          "year" => $year,
          "quarter" => 1,
          "tax_rate" => 0.2700,
          "created_at" => $carbonNow
        ],
        [
          "state" => "TX",
          "year" => $year,
          "quarter" => 1,
          "tax_rate" => 0.2000,
          "created_at" => $carbonNow
        ],
        [
          "state" => "UT",
          "year" => $year,
          "quarter" => 1,
          "tax_rate" => 0.3640,
          "created_at" => $carbonNow
        ],
        [
          "state" => "VT",
          "year" => $year,
          "quarter" => 1,
          "tax_rate" => 0.3100,
          "created_at" => $carbonNow
        ],
        [
          "state" => "VA",
          "year" => $year,
          "quarter" => 1,
          "tax_rate" => 0.4290,
          "created_at" => $carbonNow
        ],
        [
          "state" => "WA",
          "year" => $year,
          "quarter" => 1,
          "tax_rate" => 0.4940,
          "created_at" => $carbonNow
        ],
        [
          "state" => "WV",
          "year" => $year,
          "quarter" => 1,
          "tax_rate" => 0.3720,
          "created_at" => $carbonNow
        ],
        [
          "state" => "WI",
          "year" => $year,
          "quarter" => 1,
          "tax_rate" => 0.3290,
          "created_at" => $carbonNow
        ],
        [
          "state" => "WY",
          "year" => $year,
          "quarter" => 1,
          "tax_rate" => 0.2400,
          "created_at" => $carbonNow
        ],
      ];

      //Quarter 2 data
      $quarter2 = [
        [
          "state" => "AB",
          "year" => $year,
          "quarter" => 2,
          "tax_rate" => 0,
          "created_at" => $carbonNow
        ],
        [
          "state" => "BC",
          "year" => $year,
          "quarter" => 2,
          "tax_rate" => 0.8808,
          "created_at" => $carbonNow
        ],
        [
          "state" => "MB",
          "year" => $year,
          "quarter" => 2,
          "tax_rate" => 0.3872,
          "created_at" => $carbonNow
        ],
        [
          "state" => "NB",
          "year" => $year,
          "quarter" => 2,
          "tax_rate" => 0.7982,
          "created_at" => $carbonNow
        ],
        [
          "state" => "NL",
          "year" => $year,
          "quarter" => 2,
          "tax_rate" => 0.6336,
          "created_at" => $carbonNow
        ],
        [
          "state" => "NS",
          "year" => $year,
          "quarter" => 2,
          "tax_rate" => 0.4259,
          "created_at" => $carbonNow
        ],
        [
          "state" => "ON",
          "year" => $year,
          "quarter" => 2,
          "tax_rate" => 0.2489,
          "created_at" => $carbonNow
        ],
        [
          "state" => "PE",
          "year" => $year,
          "quarter" => 2,
          "tax_rate" => 0.7622,
          "created_at" => $carbonNow
        ],
        [
          "state" => "QC",
          "year" => $year,
          "quarter" => 2,
          "tax_rate" => 0.5587,
          "created_at" => $carbonNow
        ],
        [
          "state" => "SK",
          "year" => $year,
          "quarter" => 2,
          "tax_rate" => 0.4149,
          "created_at" => $carbonNow
        ],
        [
          "state" => "AL",
          "year" => $year,
          "quarter" => 2,
          "tax_rate" => 0.2900,
          "created_at" => $carbonNow
        ],
        [
          "state" => "AZ",
          "year" => $year,
          "quarter" => 2,
          "tax_rate" => 0.2600,
          "created_at" => $carbonNow
        ],
        [
          "state" => "AR",
          "year" => $year,
          "quarter" => 2,
          "tax_rate" => 0.2840,
          "created_at" => $carbonNow
        ],
        [
          "state" => "CA",
          "year" => $year,
          "quarter" => 2,
          "tax_rate" => 0.8530,
          "created_at" => $carbonNow
        ],
        [
          "state" => "CO",
          "year" => $year,
          "quarter" => 2,
          "tax_rate" => 0.2450,
          "created_at" => $carbonNow
        ],
        [
          "state" => "CT",
          "year" => $year,
          "quarter" => 2,
          "tax_rate" => 0.4920,
          "created_at" => $carbonNow
        ],
        [
          "state" => "DE",
          "year" => $year,
          "quarter" => 2,
          "tax_rate" => 0.2200,
          "created_at" => $carbonNow
        ],
        [
          "state" => "FL",
          "year" => $year,
          "quarter" => 2,
          "tax_rate" => 0.3817,
          "created_at" => $carbonNow
        ],
        [
          "state" => "GA",
          "year" => $year,
          "quarter" => 2,
          "tax_rate" => 0.3500,
          "created_at" => $carbonNow
        ],
        [
          "state" => "ID",
          "year" => $year,
          "quarter" => 2,
          "tax_rate" => 0.3200,
          "created_at" => $carbonNow
        ],
        [
          "state" => "IL",
          "year" => $year,
          "quarter" => 2,
          "tax_rate" => 0.7570,
          "created_at" => $carbonNow
        ],
        [
          "state" => "IN",
          "year" => $year,
          "quarter" => 2,
          "tax_rate" => 0.5500,
          "created_at" => $carbonNow
        ],
        [
          "state" => "IA",
          "year" => $year,
          "quarter" => 2,
          "tax_rate" => 0.3250,
          "created_at" => $carbonNow
        ],
        [
          "state" => "KS",
          "year" => $year,
          "quarter" => 2,
          "tax_rate" => 0.2600,
          "created_at" => $carbonNow
        ],
        [
          "state" => "KY",
          "year" => $year,
          "quarter" => 2,
          "tax_rate" => 0.3180,
          "created_at" => $carbonNow
        ],
        [
          "state" => "LA",
          "year" => $year,
          "quarter" => 2,
          "tax_rate" => 0.2000,
          "created_at" => $carbonNow
        ],
        [
          "state" => "ME",
          "year" => $year,
          "quarter" => 2,
          "tax_rate" => 0.3120,
          "created_at" => $carbonNow
        ],
        [
          "state" => "MD",
          "year" => $year,
          "quarter" => 2,
          "tax_rate" => 0.4345,
          "created_at" => $carbonNow
        ],
        [
          "state" => "MA",
          "year" => $year,
          "quarter" => 2,
          "tax_rate" => 0.2400,
          "created_at" => $carbonNow
        ],
        [
          "state" => "MI",
          "year" => $year,
          "quarter" => 2,
          "tax_rate" => 0.4860,
          "created_at" => $carbonNow
        ],
        [
          "state" => "MN",
          "year" => $year,
          "quarter" => 2,
          "tax_rate" => 0.2850,
          "created_at" => $carbonNow
        ],
        [
          "state" => "MS",
          "year" => $year,
          "quarter" => 2,
          "tax_rate" => 0.1800,
          "created_at" => $carbonNow
        ],
        [
          "state" => "MO",
          "year" => $year,
          "quarter" => 2,
          "tax_rate" => 0.2200,
          "created_at" => $carbonNow
        ],
        [
          "state" => "MT",
          "year" => $year,
          "quarter" => 2,
          "tax_rate" => 0.2975,
          "created_at" => $carbonNow
        ],
        [
          "state" => "NE",
          "year" => $year,
          "quarter" => 2,
          "tax_rate" => 0.2900,
          "created_at" => $carbonNow
        ],
        [
          "state" => "NV",
          "year" => $year,
          "quarter" => 2,
          "tax_rate" => 0.2700,
          "created_at" => $carbonNow
        ],
        [
          "state" => "NH",
          "year" => $year,
          "quarter" => 2,
          "tax_rate" => 0.2220,
          "created_at" => $carbonNow
        ],
        [
          "state" => "NJ",
          "year" => $year,
          "quarter" => 2,
          "tax_rate" => 0.4840,
          "created_at" => $carbonNow
        ],
        [
          "state" => "NM",
          "year" => $year,
          "quarter" => 2,
          "tax_rate" => 0.2100,
          "created_at" => $carbonNow
        ],
        [
          "state" => "NY",
          "year" => $year,
          "quarter" => 2,
          "tax_rate" => 0.4035,
          "created_at" => $carbonNow
        ],
        [
          "state" => "NC",
          "year" => $year,
          "quarter" => 2,
          "tax_rate" => 0.4050,
          "created_at" => $carbonNow
        ],
        [
          "state" => "ND",
          "year" => $year,
          "quarter" => 2,
          "tax_rate" => 0.2300,
          "created_at" => $carbonNow
        ],
        [
          "state" => "OH",
          "year" => $year,
          "quarter" => 2,
          "tax_rate" => 0.4700,
          "created_at" => $carbonNow
        ],
        [
          "state" => "OK",
          "year" => $year,
          "quarter" => 2,
          "tax_rate" => 0.1900,
          "created_at" => $carbonNow
        ],
        [
          "state" => "OR",
          "year" => $year,
          "quarter" => 2,
          "tax_rate" => 0,
          "created_at" => $carbonNow
        ],
        [
          "state" => "PA",
          "year" => $year,
          "quarter" => 2,
          "tax_rate" => 0.7850,
          "created_at" => $carbonNow
        ],
        [
          "state" => "RI",
          "year" => $year,
          "quarter" => 2,
          "tax_rate" => 0.3400,
          "created_at" => $carbonNow
        ],
        [
          "state" => "SC",
          "year" => $year,
          "quarter" => 2,
          "tax_rate" => 0.2800,
          "created_at" => $carbonNow
        ],
        [
          "state" => "SD",
          "year" => $year,
          "quarter" => 2,
          "tax_rate" => 0.2800,
          "created_at" => $carbonNow
        ],
        [
          "state" => "TN",
          "year" => $year,
          "quarter" => 2,
          "tax_rate" => 0.2700,
          "created_at" => $carbonNow
        ],
        [
          "state" => "TX",
          "year" => $year,
          "quarter" => 2,
          "tax_rate" => 0.2000,
          "created_at" => $carbonNow
        ],
        [
          "state" => "UT",
          "year" => $year,
          "quarter" => 2,
          "tax_rate" => 0.3640,
          "created_at" => $carbonNow
        ],
        [
          "state" => "VT",
          "year" => $year,
          "quarter" => 2,
          "tax_rate" => 0.3100,
          "created_at" => $carbonNow
        ],
        [
          "state" => "VA",
          "year" => $year,
          "quarter" => 2,
          "tax_rate" => 0.4290,
          "created_at" => $carbonNow
        ],
        [
          "state" => "WA",
          "year" => $year,
          "quarter" => 2,
          "tax_rate" => 0.4940,
          "created_at" => $carbonNow
        ],
        [
          "state" => "WV",
          "year" => $year,
          "quarter" => 2,
          "tax_rate" => 0.3720,
          "created_at" => $carbonNow
        ],
        [
          "state" => "WI",
          "year" => $year,
          "quarter" => 2,
          "tax_rate" => 0.3290,
          "created_at" => $carbonNow
        ],
        [
          "state" => "WY",
          "year" => $year,
          "quarter" => 2,
          "tax_rate" => 0.2400,
          "created_at" => $carbonNow
        ]
      ];

      //Quarter 3 data
      $quarter3 = [
        [
          "state" => "AB",
          "year" => $year,
          "quarter" => 3,
          "tax_rate" => 0,
          "created_at" => $carbonNow
        ],
        [
          "state" => "BC",
          "year" => $year,
          "quarter" => 3,
          "tax_rate" => 0.9101,
          "created_at" => $carbonNow
        ],
        [
          "state" => "MB",
          "year" => $year,
          "quarter" => 3,
          "tax_rate" => 0.4000,
          "created_at" => $carbonNow
        ],
        [
          "state" => "NB",
          "year" => $year,
          "quarter" => 3,
          "tax_rate" => 0.4415,
          "created_at" => $carbonNow
        ],
        [
          "state" => "NL",
          "year" => $year,
          "quarter" => 3,
          "tax_rate" => 0.2715,
          "created_at" => $carbonNow
        ],
        [
          "state" => "NS",
          "year" => $year,
          "quarter" => 3,
          "tax_rate" => 0.4401,
          "created_at" => $carbonNow
        ],
        [
          "state" => "ON",
          "year" => $year,
          "quarter" => 3,
          "tax_rate" => 0.2572,
          "created_at" => $carbonNow
        ],
        [
          "state" => "PE",
          "year" => $year,
          "quarter" => 3,
          "tax_rate" => 0.4043,
          "created_at" => $carbonNow
        ],
        [
          "state" => "QC",
          "year" => $year,
          "quarter" => 3,
          "tax_rate" => 0.5772,
          "created_at" => $carbonNow
        ],
        [
          "state" => "SK",
          "year" => $year,
          "quarter" => 3,
          "tax_rate" => 0.4287,
          "created_at" => $carbonNow
        ],
        [
          "state" => "AL",
          "year" => $year,
          "quarter" => 3,
          "tax_rate" => 0.2900,
          "created_at" => $carbonNow
        ],
        [
          "state" => "AZ",
          "year" => $year,
          "quarter" => 3,
          "tax_rate" => 0.2600,
          "created_at" => $carbonNow
        ],
        [
          "state" => "AR",
          "year" => $year,
          "quarter" => 3,
          "tax_rate" => 0.2840,
          "created_at" => $carbonNow
        ],
        [
          "state" => "CA",
          "year" => $year,
          "quarter" => 3,
          "tax_rate" => 0.8930,
          "created_at" => $carbonNow
        ],
        [
          "state" => "CO",
          "year" => $year,
          "quarter" => 3,
          "tax_rate" => 0.2650,
          "created_at" => $carbonNow
        ],
        [
          "state" => "CT",
          "year" => $year,
          "quarter" => 3,
          "tax_rate" => 0.4920,
          "created_at" => $carbonNow
        ],
        [
          "state" => "DE",
          "year" => $year,
          "quarter" => 3,
          "tax_rate" => 0.2200,
          "created_at" => $carbonNow
        ],
        [
          "state" => "FL",
          "year" => $year,
          "quarter" => 3,
          "tax_rate" => 0.3817,
          "created_at" => $carbonNow
        ],
        [
          "state" => "GA",
          "year" => $year,
          "quarter" => 3,
          "tax_rate" => 0.3500,
          "created_at" => $carbonNow
        ],
        [
          "state" => "ID",
          "year" => $year,
          "quarter" => 3,
          "tax_rate" => 0.3200,
          "created_at" => $carbonNow
        ],
        [
          "state" => "IL",
          "year" => $year,
          "quarter" => 3,
          "tax_rate" => 0.7880,
          "created_at" => $carbonNow
        ],
        [
          "state" => "IN",
          "year" => $year,
          "quarter" => 3,
          "tax_rate" => 0.5700,
          "created_at" => $carbonNow
        ],
        [
          "state" => "IA",
          "year" => $year,
          "quarter" => 3,
          "tax_rate" => 0.3250,
          "created_at" => $carbonNow
        ],
        [
          "state" => "KS",
          "year" => $year,
          "quarter" => 3,
          "tax_rate" => 0.2600,
          "created_at" => $carbonNow
        ],
        [
          "state" => "KY",
          "year" => $year,
          "quarter" => 3,
          "tax_rate" => 0.3810,
          "created_at" => $carbonNow
        ],
        [
          "state" => "LA",
          "year" => $year,
          "quarter" => 3,
          "tax_rate" => 0.2000,
          "created_at" => $carbonNow
        ],
        [
          "state" => "ME",
          "year" => $year,
          "quarter" => 3,
          "tax_rate" => 0.3120,
          "created_at" => $carbonNow
        ],
        [
          "state" => "MD",
          "year" => $year,
          "quarter" => 3,
          "tax_rate" => 0.4775,
          "created_at" => $carbonNow
        ],
        [
          "state" => "MA",
          "year" => $year,
          "quarter" => 3,
          "tax_rate" => 0.2400,
          "created_at" => $carbonNow
        ],
        [
          "state" => "MI",
          "year" => $year,
          "quarter" => 3,
          "tax_rate" => 0.5020,
          "created_at" => $carbonNow
        ],
        [
          "state" => "MN",
          "year" => $year,
          "quarter" => 3,
          "tax_rate" => 0.2850,
          "created_at" => $carbonNow
        ],
        [
          "state" => "MS",
          "year" => $year,
          "quarter" => 3,
          "tax_rate" => 0.1800,
          "created_at" => $carbonNow
        ],
        [
          "state" => "MO",
          "year" => $year,
          "quarter" => 3,
          "tax_rate" => 0.2450,
          "created_at" => $carbonNow
        ],
        [
          "state" => "MT",
          "year" => $year,
          "quarter" => 3,
          "tax_rate" => 0.2975,
          "created_at" => $carbonNow
        ],
        [
          "state" => "NE",
          "year" => $year,
          "quarter" => 3,
          "tax_rate" => 0.2900,
          "created_at" => $carbonNow
        ],
        [
          "state" => "NV",
          "year" => $year,
          "quarter" => 3,
          "tax_rate" => 0.2700,
          "created_at" => $carbonNow
        ],
        [
          "state" => "NH",
          "year" => $year,
          "quarter" => 3,
          "tax_rate" => 0.2220,
          "created_at" => $carbonNow
        ],
        [
          "state" => "NJ",
          "year" => $year,
          "quarter" => 3,
          "tax_rate" => 0.4840,
          "created_at" => $carbonNow
        ],
        [
          "state" => "NM",
          "year" => $year,
          "quarter" => 3,
          "tax_rate" => 0.2100,
          "created_at" => $carbonNow
        ],
        [
          "state" => "NY",
          "year" => $year,
          "quarter" => 3,
          "tax_rate" => 0.4035,
          "created_at" => $carbonNow
        ],
        [
          "state" => "NC",
          "year" => $year,
          "quarter" => 3,
          "tax_rate" => 0.4050,
          "created_at" => $carbonNow
        ],
        [
          "state" => "ND",
          "year" => $year,
          "quarter" => 3,
          "tax_rate" => 0.2300,
          "created_at" => $carbonNow
        ],
        [
          "state" => "OH",
          "year" => $year,
          "quarter" => 3,
          "tax_rate" => 0.4700,
          "created_at" => $carbonNow
        ],
        [
          "state" => "OK",
          "year" => $year,
          "quarter" => 3,
          "tax_rate" => 0.1900,
          "created_at" => $carbonNow
        ],
        [
          "state" => "OR",
          "year" => $year,
          "quarter" => 3,
          "tax_rate" => 0,
          "created_at" => $carbonNow
        ],
        [
          "state" => "PA",
          "year" => $year,
          "quarter" => 3,
          "tax_rate" => 0.7850,
          "created_at" => $carbonNow
        ],
        [
          "state" => "RI",
          "year" => $year,
          "quarter" => 3,
          "tax_rate" => 0.3700,
          "created_at" => $carbonNow
        ],
        [
          "state" => "SC",
          "year" => $year,
          "quarter" => 3,
          "tax_rate" => 0.2800,
          "created_at" => $carbonNow
        ],
        [
          "state" => "SD",
          "year" => $year,
          "quarter" => 3,
          "tax_rate" => 0.2800,
          "created_at" => $carbonNow
        ],
        [
          "state" => "TN",
          "year" => $year,
          "quarter" => 3,
          "tax_rate" => 0.2700,
          "created_at" => $carbonNow
        ],
        [
          "state" => "TX",
          "year" => $year,
          "quarter" => 3,
          "tax_rate" => 0.2000,
          "created_at" => $carbonNow
        ],
        [
          "state" => "UT",
          "year" => $year,
          "quarter" => 3,
          "tax_rate" => 0.3450,
          "created_at" => $carbonNow
        ],
        [
          "state" => "VT",
          "year" => $year,
          "quarter" => 3,
          "tax_rate" => 0.3100,
          "created_at" => $carbonNow
        ],
        [
          "state" => "VA",
          "year" => $year,
          "quarter" => 3,
          "tax_rate" => 0.4480,
          "created_at" => $carbonNow
        ],
        [
          "state" => "WA",
          "year" => $year,
          "quarter" => 3,
          "tax_rate" => 0.4940,
          "created_at" => $carbonNow
        ],
        [
          "state" => "WV",
          "year" => $year,
          "quarter" => 3,
          "tax_rate" => 0.3720,
          "created_at" => $carbonNow
        ],
        [
          "state" => "WI",
          "year" => $year,
          "quarter" => 3,
          "tax_rate" => 0.3290,
          "created_at" => $carbonNow
        ],
        [
          "state" => "WY",
          "year" => $year,
          "quarter" => 3,
          "tax_rate" => 0.2400,
          "created_at" => $carbonNow
        ]
      ];

      //Quarter 4 data
      $quarter4 = [
        [
          "state" => "AB",
          "year" => $year,
          "quarter" => 4,
          "tax_rate" => 0,
          "created_at" => $carbonNow
        ],
        [
          "state" => "BC",
          "year" => $year,
          "quarter" => 4,
          "tax_rate" => 0.8942,
          "created_at" => $carbonNow
        ],
        [
          "state" => "MB",
          "year" => $year,
          "quarter" => 4,
          "tax_rate" => 0.3930,
          "created_at" => $carbonNow
        ],
        [
          "state" => "NB",
          "year" => $year,
          "quarter" => 4,
          "tax_rate" => 0.4338,
          "created_at" => $carbonNow
        ],
        [
          "state" => "NL",
          "year" => $year,
          "quarter" => 4,
          "tax_rate" => 0.2667,
          "created_at" => $carbonNow
        ],
        [
          "state" => "NS",
          "year" => $year,
          "quarter" => 4,
          "tax_rate" => 0.4324,
          "created_at" => $carbonNow
        ],
        [
          "state" => "ON",
          "year" => $year,
          "quarter" => 4,
          "tax_rate" => 0.2527,
          "created_at" => $carbonNow
        ],
        [
          "state" => "PE",
          "year" => $year,
          "quarter" => 4,
          "tax_rate" => 0.3973,
          "created_at" => $carbonNow
        ],
        [
          "state" => "QC",
          "year" => $year,
          "quarter" => 4,
          "tax_rate" => 0.5671,
          "created_at" => $carbonNow
        ],
        [
          "state" => "SK",
          "year" => $year,
          "quarter" => 4,
          "tax_rate" => 0.4212,
          "created_at" => $carbonNow
        ],
        [
          "state" => "AL",
          "year" => $year,
          "quarter" => 4,
          "tax_rate" => 0.3000,
          "created_at" => $carbonNow
        ],
        [
          "state" => "AZ",
          "year" => $year,
          "quarter" => 4,
          "tax_rate" => 0.2600,
          "created_at" => $carbonNow
        ],
        [
          "state" => "AR",
          "year" => $year,
          "quarter" => 4,
          "tax_rate" => 0.2850,
          "created_at" => $carbonNow
        ],
        [
          "state" => "CA",
          "year" => $year,
          "quarter" => 4,
          "tax_rate" => 1.0890,
          "created_at" => $carbonNow
        ],
        [
          "state" => "CO",
          "year" => $year,
          "quarter" => 4,
          "tax_rate" => 0.2650,
          "created_at" => $carbonNow
        ],
        [
          "state" => "CT",
          "year" => $year,
          "quarter" => 4,
          "tax_rate" => 0.4920,
          "created_at" => $carbonNow
        ],
        [
          "state" => "DE",
          "year" => $year,
          "quarter" => 4,
          "tax_rate" => 0.2200,
          "created_at" => $carbonNow
        ],
        [
          "state" => "FL",
          "year" => $year,
          "quarter" => 4,
          "tax_rate" => 0.3817,
          "created_at" => $carbonNow
        ],
        [
          "state" => "GA",
          "year" => $year,
          "quarter" => 4,
          "tax_rate" => 0.3500,
          "created_at" => $carbonNow
        ],
        [
          "state" => "ID",
          "year" => $year,
          "quarter" => 4,
          "tax_rate" => 0.3200,
          "created_at" => $carbonNow
        ],
        [
          "state" => "IL",
          "year" => $year,
          "quarter" => 4,
          "tax_rate" => 0.7880,
          "created_at" => $carbonNow
        ],
        [
          "state" => "IN",
          "year" => $year,
          "quarter" => 4,
          "tax_rate" => 0.5700,
          "created_at" => $carbonNow
        ],
        [
          "state" => "IA",
          "year" => $year,
          "quarter" => 4,
          "tax_rate" => 0.3250,
          "created_at" => $carbonNow
        ],
        [
          "state" => "KS",
          "year" => $year,
          "quarter" => 4,
          "tax_rate" => 0.2600,
          "created_at" => $carbonNow
        ],
        [
          "state" => "KY",
          "year" => $year,
          "quarter" => 4,
          "tax_rate" => 0.3810,
          "created_at" => $carbonNow
        ],
        [
          "state" => "LA",
          "year" => $year,
          "quarter" => 4,
          "tax_rate" => 0.2000,
          "created_at" => $carbonNow
        ],
        [
          "state" => "ME",
          "year" => $year,
          "quarter" => 4,
          "tax_rate" => 0.3120,
          "created_at" => $carbonNow
        ],
        [
          "state" => "MD",
          "year" => $year,
          "quarter" => 4,
          "tax_rate" => 0.4775,
          "created_at" => $carbonNow
        ],
        [
          "state" => "MA",
          "year" => $year,
          "quarter" => 4,
          "tax_rate" => 0.2400,
          "created_at" => $carbonNow
        ],
        [
          "state" => "MI",
          "year" => $year,
          "quarter" => 4,
          "tax_rate" => 0.5160,
          "created_at" => $carbonNow
        ],
        [
          "state" => "MN",
          "year" => $year,
          "quarter" => 4,
          "tax_rate" => 0.2850,
          "created_at" => $carbonNow
        ],
        [
          "state" => "MS",
          "year" => $year,
          "quarter" => 4,
          "tax_rate" => 0.1800,
          "created_at" => $carbonNow
        ],
        [
          "state" => "MO",
          "year" => $year,
          "quarter" => 4,
          "tax_rate" => 0.2450,
          "created_at" => $carbonNow
        ],
        [
          "state" => "MT",
          "year" => $year,
          "quarter" => 4,
          "tax_rate" => 0.2975,
          "created_at" => $carbonNow
        ],
        [
          "state" => "NE",
          "year" => $year,
          "quarter" => 4,
          "tax_rate" => 0.2900,
          "created_at" => $carbonNow
        ],
        [
          "state" => "NV",
          "year" => $year,
          "quarter" => 4,
          "tax_rate" => 0.2700,
          "created_at" => $carbonNow
        ],
        [
          "state" => "NH",
          "year" => $year,
          "quarter" => 4,
          "tax_rate" => 0.2220,
          "created_at" => $carbonNow
        ],
        [
          "state" => "NJ",
          "year" => $year,
          "quarter" => 4,
          "tax_rate" => 0.4930,
          "created_at" => $carbonNow
        ],
        [
          "state" => "NM",
          "year" => $year,
          "quarter" => 4,
          "tax_rate" => 0.2100,
          "created_at" => $carbonNow
        ],
        [
          "state" => "NY",
          "year" => $year,
          "quarter" => 4,
          "tax_rate" => 0.4035,
          "created_at" => $carbonNow
        ],
        [
          "state" => "NC",
          "year" => $year,
          "quarter" => 4,
          "tax_rate" => 0.4050,
          "created_at" => $carbonNow
        ],
        [
          "state" => "ND",
          "year" => $year,
          "quarter" => 4,
          "tax_rate" => 0.2300,
          "created_at" => $carbonNow
        ],
        [
          "state" => "OH",
          "year" => $year,
          "quarter" => 4,
          "tax_rate" => 0.4700,
          "created_at" => $carbonNow
        ],
        [
          "state" => "OK",
          "year" => $year,
          "quarter" => 4,
          "tax_rate" => 0.1900,
          "created_at" => $carbonNow
        ],
        [
          "state" => "OR",
          "year" => $year,
          "quarter" => 4,
          "tax_rate" => 0,
          "created_at" => $carbonNow
        ],
        [
          "state" => "PA",
          "year" => $year,
          "quarter" => 4,
          "tax_rate" => 0.7850,
          "created_at" => $carbonNow
        ],
        [
          "state" => "RI",
          "year" => $year,
          "quarter" => 4,
          "tax_rate" => 0.3700,
          "created_at" => $carbonNow
        ],
        [
          "state" => "SC",
          "year" => $year,
          "quarter" => 4,
          "tax_rate" => 0.2800,
          "created_at" => $carbonNow
        ],
        [
          "state" => "SD",
          "year" => $year,
          "quarter" => 4,
          "tax_rate" => 0.2800,
          "created_at" => $carbonNow
        ],
        [
          "state" => "TN",
          "year" => $year,
          "quarter" => 4,
          "tax_rate" => 0.2700,
          "created_at" => $carbonNow
        ],
        [
          "state" => "TX",
          "year" => $year,
          "quarter" => 4,
          "tax_rate" => 0.2000,
          "created_at" => $carbonNow
        ],
        [
          "state" => "UT",
          "year" => $year,
          "quarter" => 4,
          "tax_rate" => 0.3450,
          "created_at" => $carbonNow
        ],
        [
          "state" => "VT",
          "year" => $year,
          "quarter" => 4,
          "tax_rate" => 0.3100,
          "created_at" => $carbonNow
        ],
        [
          "state" => "VA",
          "year" => $year,
          "quarter" => 4,
          "tax_rate" => 0.4480,
          "created_at" => $carbonNow
        ],
        [
          "state" => "WA",
          "year" => $year,
          "quarter" => 4,
          "tax_rate" => 0.4940,
          "created_at" => $carbonNow
        ],
        [
          "state" => "WV",
          "year" => $year,
          "quarter" => 4,
          "tax_rate" => 0.3720,
          "created_at" => $carbonNow
        ],
        [
          "state" => "WI",
          "year" => $year,
          "quarter" => 4,
          "tax_rate" => 0.3290,
          "created_at" => $carbonNow
        ],
        [
          "state" => "WY",
          "year" => $year,
          "quarter" => 4,
          "tax_rate" => 0.2400,
          "created_at" => $carbonNow
        ]
      ];

      DB::transaction(function () use ($quarter4) {
        PublicIftaFuelTaxRate::insert($quarter4);
      });
      return $this->respondOk();
    } catch (\Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }

  /**
   * Import customer data from file
   * @return mixed
   */
  public function importCustomerDataFromFile() {
    try {
      $path = 'sample_data/customers.csv';
      $rows = Excel::toArray(collect(), $path);
      if (!empty($rows)) {
        $data = [];
        $rows = $rows[0];
        $companyId = 37;
        $userId = 183;
        $carbonNow = Carbon::now()->toDateTimeString();
        $type = config('constant.customer_type')['carrier'];
        $paymentTermsDay = 30;
        foreach ($rows as $index => $row) {
          if ($index == 0) {
            continue;
          }
          $name = $address = $city = $state = $zipCode = $status = $email = '';
          $phone = $contact = $extraEmail = null;
          if (!empty($row[1])) {
            $status = $row[1];
            $status = ($status == 'Non-Active') ? 'inactive' : strtolower($status);
          }
          if (!empty($row[2])) {
            $name = $row[2];
          }
          if (!empty($row[3])) {
            $address = $row[3];
          }
          if (!empty($row[4])) {
            $city = $row[4];
          }
          if (!empty($row[5])) {
            $state = $row[5];
          }
          if (!empty($row[6])) {
            $zipCode = $row[6];
          }
          if (!empty($row[7])) {
            $contact = $row[7];
          }
          if (!empty($row[8])) {
            $phone = $row[8];
          }
          if (!empty($row[9])) {
            $email = trim($row[9]);
            if ($email == 'N/A') {
              $email = '';
            } else if (strpos($email, ' ') !== false) {
              $emails = explode(' ', $email);
              $email = $emails[0];
              $extraEmail = implode(',', array_slice($emails, 1));
            }
          }
          $row = [
            'company_name' => $name,
            'address' => $address,
            'city' => $city,
            'state' => $state,
            'zip_code' => $zipCode,
            'primary_contact' => $contact,
            'phone_number' => $phone,
            'email' => $email,
            'billing_address' => $address,
            'billing_city' => $city,
            'billing_state' => $state,
            'billing_zip_code' => $zipCode,
            'billing_contact' => $contact,
            'billing_phone_number' => $phone,
            'billing_email' => $email,
            'billing_cc_emails' => $extraEmail,
            'type' => $type,
            'status' => config('constant.status.customer')[$status],
            'company_id' => $companyId,
            'user_id' => $userId,
            'payment_terms_day' => $paymentTermsDay,
            "created_at" => $carbonNow,
            "updated_at" => $carbonNow,
          ];
          $data[] = $row;
        }
        DB::transaction(function () use ($data) {
          Customer::insert($data);
        });
      }
      return $this->respondOk();
    } catch (\Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }

  /**
   * Import driver data from file
   * @return mixed
   */
  public function importDriverDataFromFile() {
    try {
      $path = 'sample_data/DRIVERS-LIST-03-08-2023.csv';
      $rows = Excel::toArray(collect(), $path);
      if (!empty($rows)) {
        $data = [];
        $rows = $rows[0];
        foreach ($rows as $index => $row) {
          if ($index == 0) {
            continue;
          }
          $firstName = $lastName = $email = $phone = '';
          if (!empty($row[1])) {
            $lastName = $row[1];
          }
          if (!empty($row[2])) {
            $firstName = $row[2];
          }
          if (!empty($row[7])) {
            $phone = $row[7];
          }
          if (!empty($row[8])) {
            $email = $row[8];
          }
          $row = [
            'first_name' => $firstName,
            'last_name' => $lastName,
            'phone_number' => $phone,
            'email' => $email,
          ];
          $data[] = $row;
        }
        DB::transaction(function () use ($data) {
          $companyId = 37;
          $ownerId = 177;
          $role = config('constant.roles.driver');
          $status = config('constant.status.driver.active');
          $carbonNow = Carbon::now()->toDateTimeString();
          $tempEmailIndex = 1;
          foreach ($data as $row) {
            if (empty($row['email'])) {
              $row['email'] = 'tempdriver' . $tempEmailIndex . '@blackrock-logistics.net';
              $tempEmailIndex++;
            }
            $password = '123456';
            $userData = [
              'first_name' => $row['first_name'],
              'last_name' => $row['last_name'],
              'email' => $row['email'],
              'password' => $password,
              'admin_company_detail_id' => $companyId,
              'role' => $role,
              'status' => $status,
              'created_at' => $carbonNow,
              'updated_at' => $carbonNow
            ];
            $user = User::create($userData);
            if (!empty($user)) {
              $driverData = [
                'name' =>  $row['first_name'] . ' ' . $row['last_name'],
                'user_id' =>  $user->id,
                'owner_id' =>  $ownerId,
                'phone_number' =>  $row['phone_number'] ?? null,
                'created_at' => $carbonNow,
                'updated_at' => $carbonNow
              ];
              DriverDetail::create($driverData);
            }
          }
        });
      }
      return $this->respondOk();
    } catch (\Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }

  /**
   * Import saved address data
   * @return mixed
   */
  public function importSavedAddressData() {
    try {
      $companyId = 37;
      $carbonNow = Carbon::now()->toDateTimeString();
      $path = 'sample_data/023-INCIDENT-TRACKING-20230510.csv';
      $rows = Excel::toArray(collect(), $path);
      if (!empty($rows)) {
        $data = [];
        $rows = $rows[0];
        foreach ($rows as $index => $row) {
          if ($index == 0) {
            continue;
          }
          $name = $address = $city = $state = $zipCode = $phone = '';
          if (!empty($row[1])) {
            $name = $row[1];
          }
          if (!empty($row[2])) {
            $address = $row[2];
          }
          if (!empty($row[3])) {
            $city = $row[3];
          }
          if (!empty($row[4])) {
            $state = $row[4];
          }
          if (!empty($row[5])) {
            $zipCode = $row[5];
          }
          if (!empty($row[6])) {
            $phone = $row[6];
          }
          $row = [
            'name' => $name,
            'address' => $address,
            'city' => $city,
            'state' => $state,
            'zip_code' => $zipCode,
            'phone' => $phone,
            'company_id' => $companyId,
            "created_at" => $carbonNow,
            "updated_at" => $carbonNow,
          ];
          $data[] = $row;
        }
        DB::transaction(function () use ($data) {
          SavedAddress::insert($data);
        });
      }
      return $this->respondOk();
    } catch (\Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }
}
