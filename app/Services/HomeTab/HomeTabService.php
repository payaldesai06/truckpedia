<?php

namespace App\Services\HomeTab;

use App\Models\Load;
use Exception;
use Carbon\CarbonPeriod;
use App\Models\Customer;
use App\Models\User;
use App\Models\Truck;
use App\Models\AccessorialFee;
use App\Models\AdminCompanyDetail;
use Illuminate\Support\Facades\DB;

class HomeTabService {

  /**
   * Get Home Tab data list.
   * @return array
   * @throws Exception
   */
  public function getOverview(): array {
    $startDate = request('startDate');
    $endDate = request('endDate');
    $commonData = $this->getLoadListWithTotalValues();
    $loads = $commonData['loads'];
    $totalValues = $commonData['totalValues'];
    $dayValues = [];
    $topValues = [];
    if ($loads->isNotEmpty()) {
      //get loads truck/driver data
      $loadWithTruckTotalMiles = 0;
      $divideByLoadUniqueTruckCount = 0;
      $loadDriverData = [];
      $loadTruckData = [];
      foreach ($loads as $load) {
        $loadDrivers = $load->loadDrivers;
        if ($loadDrivers->isNotEmpty()) {
          $loadRevenueAmount = $load->calculatedRevenue ?? 0;
          //get load drivers data
          // Code review: I think each time you call this function, you are creating a new copy of loadDriverData, this is not efficient.
          // You can pass pointer here. I did that for you.
          $this->getLoadDriverData($loadDrivers, $loadRevenueAmount, $loadDriverData);
          //get load driver trucks data
          // Same here.
          $this->getLoadTruckData($loadDrivers, $loadRevenueAmount, $loadTruckData);
          //get loads by unique truck count like load can have 1/2/3... unique trucks
          $uniqueLoadTruckCount = $loadDrivers->pluck('truck.id')->filter()->unique()->count();
          if ($uniqueLoadTruckCount != 0) {
            $loadWithTruckTotalMiles += $load->total_miles;
            // There is no reason to save load id.
            $divideByLoadUniqueTruckCount += $uniqueLoadTruckCount;
          }
        }
      }
      //only use the loads who have a truck to calculate this value. Suppose 1000 loads are included in the search result, 700 loads have one unique truck, 150 loads have two unique trucks, 50 loads have three unique trucks.  Then use 900 loads’ total miles / (700*1 + 150*2 + 50*3).
      $totalValues['milesPerTruck'] = $divideByLoadUniqueTruckCount > 0 ?
        ($loadWithTruckTotalMiles / $divideByLoadUniqueTruckCount) : 0;
      $dayValues = $this->getLoadDataByDate($loads, $startDate, $endDate);
      $topValues = $this->getTopValuesWithFilter($loadDriverData, $loadTruckData);
    }
    // Get expense values
    $expenseValues = [];
    $this->getExpenseValues($startDate, $endDate, $totalValues, $expenseValues);
    return [
      'totalValues' => $totalValues,
      'expenseValues' => $expenseValues,
      'topValues' => $topValues,
      'dayValues' => $dayValues
    ];
  }

  /**
   * Get Expense Values
   * @param $startDate
   * @param $endDate
   * @param $totalValues
   * @param $expenseValues
   * @param $needDriver
   * @return mixed
   * @throws Exception
   */
  private function getExpenseValues(
    $startDate,
    $endDate,
    &$totalValues,
    &$expenseValues,
    $needDriver = false
  ) {
    $companyId = getAuthAdminCompanyId();
    $tripStatuses = [
      array_search('approved', config('constant.trip.status')),
      array_search('paid', config('constant.trip.status'))
    ];
    $expenseSelect = ['id', 'account_id', 'amount'];
    $lovesSelect = ['id', 'company_id', 'total'];
    $wexSelect = ['id', 'wex_account_id', 'amount'];
    $tripV2Select = ['id', 'company_id', 'total_payment'];
    if ($needDriver) {
      $expenseSelect[] = 'linked_user_id';
      $lovesSelect[] = DB::raw('LOWER(driver_name) as driver_name');
      $tripV2Select[] = 'user_id';
    }
    $company = AdminCompanyDetail::with([
      'accounts' => function ($query) use ($startDate, $endDate, $expenseSelect) {
        $query->select('id', 'company_id', 'name')
          ->whereHas('expenses')
          ->with([
            'expenses' => function ($innerQuery) use ($startDate, $endDate, $expenseSelect) {
              $innerQuery->select($expenseSelect)
                ->whereBetween('date', [$startDate, $endDate]);
            }
          ]);
      },
      'wexAccounts' => function ($query) {
        $query->select('id', 'company_id');
      },
      'wexAccounts.wexTransactions' => function ($query) use ($startDate, $endDate, $wexSelect) {
        $query->select($wexSelect)
          ->whereBetween('transaction_date', [$startDate, $endDate]);
      },
      'lovesFuelCardTransactions' => function ($query) use ($startDate, $endDate, $lovesSelect) {
        $query->select($lovesSelect)
          ->whereBetween('date', [$startDate, $endDate]);
      },
      'tripsV2' => function ($query) use ($startDate, $endDate, $tripStatuses, $tripV2Select) {
        $query->select($tripV2Select)
          ->whereIn('status', $tripStatuses)
          ->whereBetween('stops_end_date', [$startDate, $endDate]);
      }
    ])
      ->find($companyId);

    // Trip v2's sum of total_payment whose status is approved or paid and whose end date is in the search range
    $tripsTotalPayment = $company->tripsV2->sum('total_payment') ?? 0;

    $fuelAmount = 0;
    if ($company->wexAccounts->isNotEmpty()) {
      foreach ($company->wexAccounts as $account) {
        $fuelAmount += $account->wexTransactions->sum('amount');
      }
    }
    if ($company->lovesFuelCardTransactions->isNotEmpty()) {
      $fuelAmount += $company->lovesFuelCardTransactions->sum('total');
    }

    // Wex and Loves fuel card transactions's sum of the total column of the rows whose date is also in the search range
    $totalFuelCost = $fuelAmount;

    // Get expenses by category
    // It contains “Driver Pay” if sum of trip > 0
    if ($tripsTotalPayment > 0) {
      $expenseValues[] = [
        'category' => config('constant.homeTab.expense.category.driverPay'),
        'value' => number_format($tripsTotalPayment, 2, '.', ''),
      ];
    }

    // It contains “Fuel Expense” if sum of fuel cost > 0
    if ($totalFuelCost > 0) {
      $expenseValues[] = [
        'category' => config('constant.homeTab.expense.category.fuelExpense'),
        'value' => number_format($totalFuelCost, 2, '.', ''),
      ];
    }

    // It contains the sum of the amount value for each expense’s account
    $totalExpense = 0;
    $accounts = $company->accounts ?? collect();
    $expenses = collect();
    if ($accounts->isNotEmpty()) {
      foreach ($accounts as $account) {
        $expenses = $expenses->concat($account->expenses);
        $totalAccountExpense = $account->expenses->sum('amount') ?? 0;
        if ($totalAccountExpense > 0) {
          $expenseValues[] = [
            'category' => $account->name ?? '',
            'value' => number_format($totalAccountExpense, 2, '.', ''),
          ];
        }
        // Expenses's sum of the amount column of the rows whose date is also in the search range
        $totalExpense += $totalAccountExpense;
      }
    }

    // Get total expense values
    $expense = $tripsTotalPayment + $totalFuelCost + $totalExpense;
    $totalValues['expense'] = number_format($expense, 2, '.', '');
    $profit = $totalValues['revenue'] - $expense;
    $totalValues['profit'] = number_format($profit, 2, '.', '');
    $totalMiles = $totalValues['miles'];
    $totalValues['expensePerMile'] = $totalMiles > 0 ? ($expense / $totalMiles) : 0;
    $totalValues['profitPerMile'] = $totalMiles > 0 ? ($profit / $totalMiles) : 0;

    return [
      // 'accounts' => $accounts,
      'expenses' => $expenses,
      'loves' => $company->lovesFuelCardTransactions ?? collect(),
      // TODO: we shall return wex transactions in the future once we pair a driver and a transaction.
      // 'wex' => $fuelAmount,
      'tripsV2' => $company->tripsV2 ?? collect(),
    ];
  }

  /**
   * Get load driver data.
   * @param $loadDrivers
   * @param $loadRevenueAmount
   * @param $loadDriverData
   * @return array
   * @throws Exception
   */
  public function getLoadDriverData($loadDrivers, $loadRevenueAmount, &$loadDriverData) {
    $loadDriverUsers = $loadDrivers->pluck('loadDriverUsers')->flatten();
    foreach ($loadDriverUsers as $loadDriverUser) {
      $userId = $loadDriverUser->user_id;
      if (isset($loadDriverData[$userId])) {
        $loadDriverData[$userId]['revenue'] += $loadRevenueAmount;
      } else {
        $loadDriverData[$userId] = [
          'userId' => $userId,
          'driverName' => userFullName($loadDriverUser->user),
          'revenue' => $loadRevenueAmount,
          'isLocal' => $loadDriverUser->user && $loadDriverUser->user->driverDetail &&
            $loadDriverUser->user->driverDetail->local_driver == 1 ? 1 : 0,
          'isTeam' => $loadDriverUser->user && $loadDriverUser->user->driverDetail &&
            $loadDriverUser->user->driverDetail->team_driver == 1 ? 1 : 0,
        ];
      }
    }
  }

  /**
   * Get load truck data.
   * @param $loadDrivers
   * @param $loadRevenueAmount
   * @param $loadTruckData
   * @return array
   * @throws Exception
   */
  public function getLoadTruckData($loadDrivers, $loadRevenueAmount, &$loadTruckData) {
    $loadTrucks = $loadDrivers->pluck('truck')->flatten()->filter()->unique();
    foreach ($loadTrucks as $loadTruck) {
      $truckId = $loadTruck->id;
      if (isset($loadTruckData[$truckId])) {
        $loadTruckData[$truckId]['revenue'] += $loadRevenueAmount;
      } else {
        $loadTruckData[$truckId] = [
          'truckId' => $truckId,
          'truckNumber' => $loadTruck->number,
          'revenue' => $loadRevenueAmount
        ];
      }
    }
  }

  function compareRevenueForTopValues($a, $b) {
    if ($a['revenue'] == $b['revenue']) {
      return 0;
    }
    return ($a['revenue'] < $b['revenue']) ? 1 : -1;
  }

  /**
   * Get top values(load's driver/truck) data with sorting and limit.
   * @param $loadDriverData
   * @param $loadTruckData
   * @return array
   * @throws Exception
   */
  public function getTopValuesWithFilter($loadDriverData, $loadTruckData): array {
    $limit = 10;
    $cmpFunc = array('App\Services\HomeTab\HomeTabService', 'compareRevenueForTopValues');
    // Apparently you didn't read the doc of https://www.php.net/manual/en/function.uasort.php
    // Returning non-integer values from the comparison function, such as float,
    // will result in an internal cast to int of the callback's return value.
    // So values such as 0.99 and 0.1 will both be cast to an integer value of 0,
    // which will compare such values as equal.
    if (!empty($loadDriverData)) {
      uasort($loadDriverData, $cmpFunc);
      $loadDriverData = array_slice($loadDriverData, 0, $limit);
    }
    if (!empty($loadTruckData)) {
      uasort($loadTruckData, $cmpFunc);
      $loadTruckData = array_slice($loadTruckData, 0, $limit);
    }
    return [
      'driversByRevenue' => $loadDriverData,
      'trucksByRevenue' => $loadTruckData
    ];
  }

  /**
   * Get load data by date.
   * @param $loads
   * @param $startDate
   * @param $endDate
   * @return array
   */
  public function getLoadDataByDate($loads, $startDate, $endDate): array {
    $dates = CarbonPeriod::create($startDate, $endDate);
    $dayValues = [];
    // Seriously??? O(nm) complexity???
    foreach ($dates as $date) {
      $date = $date->format(config('constant.date_format'));
      $dayValues[$date] = [
        'date' => $date,
        'revenue' => 0,
        'miles' => 0,
      ];
    }
    foreach ($loads as $load) {
      $revenue = $load->calculatedRevenue;
      $miles = $load->total_miles;
      $date = $load->delivery_date;
      if (isset($dayValues[$date])) {
        $dayValues[$date]['revenue'] += $revenue;
        $dayValues[$date]['miles'] += $miles;
      }
    }
    return array_values($dayValues);
  }

  /**
   * Get customer overview.
   * @return array
   * @throws Exception
   */
  public function customerOverview(): array {
    $companyId = getAuthAdminCompanyId();
    $commonData = $this->getLoadListWithTotalValues();
    $loads = $commonData['loads'];
    $loadDataArray = [];

    foreach ($loads as $load) {
      $customerId = $load->customer_id;
      if (!$customerId) {
        continue;
      }
      $miles = $load->total_miles;
      $revenue = $load->calculatedRevenue;
      if (isset($loadDataArray[$customerId])) {
        $loadDataArray[$customerId]['miles'] += $miles;
        $loadDataArray[$customerId]['revenue'] += $revenue;
        $loadDataArray[$customerId]['numberOfLoads'] += 1;
      } else {
        $loadDataArray[$customerId] = [
          'miles' => $miles ?? 0,
          'revenue' => $revenue ?? 0,
          'numberOfLoads' => 1,
        ];
      }
    }

    $totalValues = $commonData['totalValues'];
    $totalValuesRevenue = $totalValues['revenue'];

    $customerValues = [];
    $customers = Customer::where('company_id', $companyId)
      ->where('status', config('constant.status.customer.active'))
      ->select('id', 'company_name')
      ->get();
    if ($customers->isNotEmpty()) {
      foreach ($customers as $customer) {
        $customerId = $customer->id;
        $revenuePercentage = 0;
        if ($totalValuesRevenue > 0 && isset($loadDataArray[$customerId])) {
          $revenuePercentage = ($loadDataArray[$customerId]['revenue'] / $totalValuesRevenue) * 100;
        }
        $ratePerMile = 0;
        if (isset($loadDataArray[$customerId]) && !empty($loadDataArray[$customerId]['miles'])) {
          $ratePerMile = $loadDataArray[$customerId]['revenue'] / $loadDataArray[$customerId]['miles'];
        }
        $customerValue = [
          'customerid' => $customerId,
          'customerName' => $customer->company_name,
          'revenue' => $loadDataArray[$customerId]['revenue'] ?? 0,
          'numberOfLoads' => $loadDataArray[$customerId]['numberOfLoads'] ?? 0,
          'miles' => $loadDataArray[$customerId]['miles'] ?? 0,
          'ratePerMile' => $ratePerMile,
          'revenuePercentage' => min($revenuePercentage, 100)
        ];

        $customerValues[] = $customerValue;
      }
    }

    return [
      'totalValues' => $totalValues,
      'customerValues' => $customerValues
    ];
  }

  /**
   * Get driver overview.
   * @return array
   * @throws Exception
   */
  public function driverOverview(): array {
    $startDate = request('startDate');
    $endDate = request('endDate');
    $companyId = getAuthAdminCompanyId();
    $commonData = $this->getLoadListWithTotalValues();
    $loads = $commonData['loads'];
    $totalValues = $commonData['totalValues'];
    $loadDataArray = [];
    foreach ($loads as $load) {
      $loadDrivers = $load->loadDrivers;
      $miles = $load->total_miles;
      $revenue = $load->calculatedRevenue;
      if ($loadDrivers->isNotEmpty()) {
        $loadDriverUsers = $loadDrivers->pluck('loadDriverUsers')->flatten()->pluck('user');
        if ($loadDriverUsers->isNotEmpty()) {
          foreach ($loadDriverUsers as $loadDriverUser) {
            $driverId = $loadDriverUser->id ?? null;
            if (!$driverId) {
              continue;
            }
            if (isset($loadDataArray[$driverId])) {
              $loadDataArray[$driverId]['miles'] += $miles;
              $loadDataArray[$driverId]['revenue'] += $revenue;
              $loadDataArray[$driverId]['numberOfLoads'] += 1;
            } else {
              $loadDataArray[$driverId] = [
                'miles' => $miles ?? 0,
                'revenue' => $revenue ?? 0,
                'numberOfLoads' => 1,
              ];
            }
          }
        }
      }
    }

    $driverValues = [];
    $drivers = User::where('admin_company_detail_id', $companyId)
      ->with(['tags:id as tagId'])
      ->where('role', config('constant.roles.driver'))
      ->where('status', config('constant.status.driver.active'))
      ->select('id', 'first_name', 'last_name')
      ->get();

    $expenseValues = [];
    $rawResults = $this->getExpenseValues(
      $startDate,
      $endDate,
      $totalValues,
      $expenseValues,
      true
    );
    if ($drivers->isNotEmpty()) {
      foreach ($drivers as $driver) {
        $driverId = $driver->id;
        $driverName = userFullName($driver);
        $revenue = $loadDataArray[$driverId]['revenue'] ?? 0;
        $driverPay = !empty($rawResults['tripsV2']) ? $rawResults['tripsV2']
          ->where('user_id', $driver->id)->sum('total_payment') : 0;
        // TODO: Add Wex here after we pair driver and transaction.
        $fuelExpense = !empty($rawResults['loves']) ? $rawResults['loves']
          ->where('driver_name', strtolower($driverName))->sum('total') : 0;
        $otherExpenses = !empty($rawResults['expenses']) ? $rawResults['expenses']
          ->where('linked_user_id', $driver->id)->sum('amount') : 0;
        $expense = $driverPay + $fuelExpense + $otherExpenses;
        $driverValue = [
          'driverId' => $driverId,
          'driverName' => $driverName,
          'tags' => $driver->tags ?? [],
          'revenue' => $revenue,
          'loadedMiles' => $loadDataArray[$driverId]['miles'] ?? 0,
          'numberOfLoads' => $loadDataArray[$driverId]['numberOfLoads'] ?? 0,
          'expense' => floatval(number_format($expense, 2, '.', '')),
          'profit' =>  floatval(number_format($revenue - $expense, 2, '.', '')),
          'driverPay' => $driverPay,
          'fuelExpense' =>  floatval(number_format($fuelExpense, 2, '.', '')),
        ];
        $driverValues[] = $driverValue;
      }
    }
    return [
      'totalValues' => $totalValues,
      'driverValues' => $driverValues
    ];
  }

  /**
   * Get truck overview.
   * @return array
   * @throws Exception
   */
  public function truckOverview(): array {
    $companyId = getAuthAdminCompanyId();
    $commonData = $this->getLoadListWithTotalValues();
    $loads = $commonData['loads'];
    $loadDataArray = [];

    foreach ($loads as $load) {
      $loadDrivers = $load->loadDrivers;
      $miles = $load->total_miles;
      $revenue = $load->calculatedRevenue;
      if ($loadDrivers->isNotEmpty()) {
        $trucks = $loadDrivers->pluck('truck');
        if ($trucks->isNotEmpty()) {
          foreach ($trucks as $truck) {
            $truckId = $truck->id ?? null;
            if (!$truckId) {
              continue;
            }
            if (isset($loadDataArray[$truckId])) {
              $loadDataArray[$truckId]['miles'] += $miles;
              $loadDataArray[$truckId]['revenue'] += $revenue;
              $loadDataArray[$truckId]['numberOfLoads'] += 1;
            } else {
              $loadDataArray[$truckId] = [
                'miles' => $miles ?? 0,
                'revenue' => $revenue ?? 0,
                'numberOfLoads' => 1,
              ];
            }
          }
        }
      }
    }

    $totalValues = $commonData['totalValues'];
    $truckValues = [];
    $trucks = Truck::where('company_id', $companyId)
      ->with(['tags:id as tagId'])
      ->where('status', config('constant.status.truck.active'))
      ->select('id', 'number')
      ->get();

    if ($trucks->isNotEmpty()) {
      foreach ($trucks as $truck) {
        $truckId = $truck->id;
        $ratePerMile = 0;
        if (isset($loadDataArray[$truckId]) && $loadDataArray[$truckId]['miles'] > 0) {
          $ratePerMile = $loadDataArray[$truckId]['revenue'] / $loadDataArray[$truckId]['miles'];
        }
        $truckValue = [
          'truckId' => $truckId,
          'truckNumber' => $truck->number,
          'tags' => $truck->tags ?? [],
          'revenue' => $loadDataArray[$truckId]['revenue'] ?? 0,
          'loadedMiles' => $loadDataArray[$truckId]['miles'] ?? 0,
          'numberOfLoads' => $loadDataArray[$truckId]['numberOfLoads'] ?? 0,
          'ratePerMile' => $ratePerMile
        ];
        $truckValues[] = $truckValue;
      }
    }
    return [
      'totalValues' => $totalValues,
      'truckValues' => $truckValues
    ];
  }

  /**
   * Get dispatcher overview.
   * @return array
   * @throws Exception
   */
  public function dispatcherOverview(): array {
    $companyId = getAuthAdminCompanyId();
    $commonData = $this->getLoadListWithTotalValues();
    $loads = $commonData['loads'];
    $loadDataArray = [];

    foreach ($loads as $load) {
      $dispatcherId = $load->dispatcher_id;
      if (!$dispatcherId) {
        continue;
      }
      $miles = $load->total_miles;
      $revenue = $load->calculatedRevenue;
      if (isset($loadDataArray[$dispatcherId])) {
        $loadDataArray[$dispatcherId]['miles'] += $miles;
        $loadDataArray[$dispatcherId]['revenue'] += $revenue;
        $loadDataArray[$dispatcherId]['numberOfLoads'] += 1;
      } else {
        $loadDataArray[$dispatcherId] = [
          'miles' => $miles ?? 0,
          'revenue' => $revenue ?? 0,
          'numberOfLoads' => 1,
        ];
      }
    }

    $totalValues = $commonData['totalValues'];
    $totalValuesRevenue = $totalValues['revenue'];
    $dispatcherValues = [];
    $dispatchers = User::where('admin_company_detail_id', $companyId)
      ->where('role', config('constant.roles.dispatcher'))
      ->where('status', config('constant.status.user.active'))
      ->select('id', 'first_name', 'last_name')
      ->get();

    if ($dispatchers->isNotEmpty()) {
      foreach ($dispatchers as $dispatcher) {
        $dispatcherId = $dispatcher->id;
        $revenuePercentage = 0;
        if (isset($loadDataArray[$dispatcherId]) && $totalValuesRevenue > 0) {
          $revenuePercentage = ($loadDataArray[$dispatcherId]['revenue'] /
            $totalValuesRevenue) * 100;
        }
        $ratePerMile = 0;
        if (isset($loadDataArray[$dispatcherId]) && $loadDataArray[$dispatcherId]['miles'] > 0) {
          $ratePerMile = $loadDataArray[$dispatcherId]['revenue'] /
            $loadDataArray[$dispatcherId]['miles'];
        }
        $dispatcherValue = [
          'dispatcherId' => $dispatcherId,
          'dispatcherName' => userFullName($dispatcher),
          'revenue' => $loadDataArray[$dispatcherId]['revenue'] ?? 0,
          'numberOfLoads' => $loadDataArray[$dispatcherId]['numberOfLoads'] ?? 0,
          'miles' => $loadDataArray[$dispatcherId]['miles'] ?? 0,
          'ratePerMile' =>  $ratePerMile,
          'revenuePercentage' => min($revenuePercentage, 100)
        ];
        $dispatcherValues[] = $dispatcherValue;
      }
    }
    return [
      'totalValues' => $totalValues,
      'dispatcherValues' => $dispatcherValues
    ];
  }

  /**
   * Get market overview.
   * @return array
   * @throws Exception
   */
  public function marketOverview(): array {
    $type = config('constant.homeTab.type.market');
    $commonData = $this->getLoadListWithTotalValues($type);
    $loads = $commonData['loads'];
    $totalValues = $commonData['totalValues'];
    $marketWiseLoads = $mostRunLanes = [];

    foreach ($loads as $load) {
      $loadShippers = $load->loadShippers;
      $loadReceivers = $load->loadReceivers;
      if ($loadShippers->isNotEmpty() && $loadReceivers->isNotEmpty()) {
        $revenue = $load->calculatedRevenue ?? 0;
        $miles = $load->total_miles ?? 0;
        $this->setMarketWiseLoads(
          $loadShippers,
          $loadReceivers,
          $revenue,
          $miles,
          $marketWiseLoads
        );

        $originCity = $loadShippers->first()->city;
        $originState = $loadShippers->first()->state;
        $destinationCity = $loadReceivers->last()->city;
        $destinationState = $loadReceivers->last()->state;
        //set mostRunLanes data by origin to destination
        $key = strtolower($originCity) . '+' . strtolower($originState) .
          '-' . strtolower($destinationCity) . '+' . strtolower($destinationState);
        if (isset($mostRunLanes[$key])) {
          $mostRunLanes[$key]['revenue'] += $revenue;
          $mostRunLanes[$key]['miles'] += $miles;
          $mostRunLanes[$key]['numberOfLoads'] += 1;
        } else {
          $mostRunLanes[$key] = [
            'originCity' => ucwords(strtolower($originCity)),
            'originState' => strtoupper($originState),
            'destinationCity' => ucwords(strtolower($destinationCity)),
            'destinationState' => strtoupper($destinationState),
            'revenue' => $revenue,
            'miles' => $miles,
            'numberOfLoads' => 1,
          ];
        }
      }
    }

    foreach ($marketWiseLoads as &$marketWiseLoad) {
      $marketWiseLoad['ratePerMile'] = ($marketWiseLoad['miles'] > 0 ?
        $marketWiseLoad['revenue'] / $marketWiseLoad['miles'] : 0) ?? 0;
    }
    foreach ($mostRunLanes as &$mostRunLane) {
      $mostRunLane['ratePerMile'] = ($mostRunLane['miles'] > 0 ?
        $mostRunLane['revenue'] / $mostRunLane['miles'] : 0) ?? 0;
    }

    return [
      'totalValues' => $totalValues,
      'marketWiseLoads' => array_values($marketWiseLoads),
      'mostRunLanes' => array_values($mostRunLanes),
    ];
  }

  /**
   * Get market(city/state) vise loads data by load
   * @param $loadShippers
   * @param $loadReceivers
   * @param $revenue
   * @param $miles
   * @param $marketWiseLoads
   * @return null
   */
  private function setMarketWiseLoads(
    $loadShippers,
    $loadReceivers,
    $revenue,
    $miles,
    &$marketWiseLoads
  ) {
    $uniqueMarketCityStates = [];
    foreach ($loadShippers as $shipper) {
      $city = $shipper->city;
      $state = $shipper->state;
      $key = strtolower($city) . '+' . strtolower($state);
      if (!isset($uniqueMarketCityStates[$key])) {
        $uniqueMarketCityStates[$key] = [
          'marketCity' => ucwords(strtolower($city)),
          'marketState' => strtoupper($state),
        ];
      }
    }
    foreach ($loadReceivers as $receiver) {
      $city = $receiver->city;
      $state = $receiver->state;
      $key = strtolower($city) . '+' . strtolower($state);
      if (!isset($uniqueMarketCityStates[$key])) {
        $uniqueMarketCityStates[$key] = [
          'marketCity' => ucwords(strtolower($city)),
          'marketState' => strtoupper($state),
        ];
      }
    }
    foreach ($uniqueMarketCityStates as $key => $uniqueMarket) {
      if (isset($marketWiseLoads[$key])) {
        $marketWiseLoads[$key]['revenue'] += $revenue;
        $marketWiseLoads[$key]['miles'] += $miles;
        $marketWiseLoads[$key]['numberOfLoads'] += 1;
      } else {
        $marketWiseLoads[$key] = [
          'marketCity' => $uniqueMarket['marketCity'],
          'marketState' => $uniqueMarket['marketState'],
          'revenue' => $revenue,
          'miles' => $miles,
          'numberOfLoads' => 1,
        ];
      }
    }
    return $marketWiseLoads;
  }

  /**
   * Get load list with total values.
   * @param $type
   * @return array
   * @throws Exception
   */
  private function getLoadListWithTotalValues($type = null): array {
    $startDate = request('startDate');
    $endDate = request('endDate');
    $tagId = request('tagId') ?? null;
    $parentCompanyOnly = request('parentCompanyOnly') ?? false;
    $companyId = getAuthAdminCompanyId();
    //get company "lumper" Accessorial Fee
    $lumperAccessorialFeeName = config('constant.company.defaultAccessorialFee.Lumper');
    $lumperAccessorialFeeIds = AccessorialFee::where('admin_company_detail_id', $companyId)
      ->where('name', 'like', '%' . $lumperAccessorialFeeName . '%')
      ->pluck('id')
      ->toArray();
    //load query with given date range
    $loads = Load::where('status', '!=', config('constant.status.load.canceled'))
      ->where('admin_company_detail_id', $companyId)
      ->select(
        'total_amount',
        'total_miles',
        'tag_id',
        'load_receivers.delivery_date as delivery_date',
        'loads.id as id',
        'customer_id',
        'dispatcher_id',
      )
      // TODO: Join can be slow. But keep it here to test performance first.
      ->join('load_receivers', 'loads.id', 'load_receivers.load_id')
      ->where('load_receivers.id', function ($query) {
        $query->select('id')
          ->from('load_receivers')
          ->whereColumn('load_id', 'loads.id')
          ->whereNull('deleted_at')
          ->orderByDesc('order')
          ->limit(1);
      })
      ->when(!empty($tagId), function ($query) use ($tagId) {
        $query->where('tag_id', $tagId); //if tag filter is there
      })->when($parentCompanyOnly, function ($query) {
        $query->whereNull('tag_id'); //if parentCompanyOnly filter is true
      })->with([
        'loadDrivers:id,load_id,truck_id',
        'loadDrivers.truck:id,number',
        'loadDrivers.loadDriverUsers:load_driver_id,user_id',
        'loadDrivers.loadDriverUsers.user:id,first_name,last_name',
        'loadDrivers.loadDriverUsers.user.driverDetail:user_id,team_driver,local_driver',
        'loadCharge:id,load_id,accessorial_fee'
      ])->when(!empty($type) && $type == config('constant.homeTab.type.market'), function ($query) {
        $query->with('loadShippers:id,load_id,city,state,order')
          ->with('loadReceivers:id,load_id,city,state,order');
      })
      ->whereDate('load_receivers.delivery_date', '>=', $startDate)
      ->whereDate('load_receivers.delivery_date', '<=', $endDate)
      ->get();

    if ($loads->isNotEmpty()) {
      foreach ($loads as $index => $load) {
        $loads[$index]->calculatedRevenue = $this->getLoadRevenueAmount(
          $load,
          $lumperAccessorialFeeIds
        );
      }
    }

    $totalRevenue = $loads->sum('calculatedRevenue');
    $totalMiles = $loads->sum('total_miles');
    $ratePerMile = $totalMiles > 0 ? ($totalRevenue / $totalMiles) : 0;
    $numberOfLoads = count($loads);
    return [
      'loads' => $loads ?? collect(),
      'totalValues' => [
        'revenue' => $totalRevenue,
        'miles' => $totalMiles,
        'ratePerMile' => $ratePerMile,
        'numberOfLoads' => $numberOfLoads
      ]
    ];
  }

  /**
   * Get Load Revenue Amount
   * @param $load
   * @return mixed
   * @throws Exception
   */
  private function getLoadRevenueAmount($load, $accessorialFeeIds) {
    $loadRevenueAmount = $load->total_amount ?? 0;
    /* Exclude Accessorial Fee From Load Amount (“lumper” for now). */
    if (!empty($load->loadCharge) && !empty($accessorialFeeIds)) {
      $accessorialFeesRateSum = 0;
      if (!empty($load->loadCharge->accessorial_fee)) {
        $loadAccessorialFees = collect(json_decode($load->loadCharge->accessorial_fee));
        $accessorialFeesRateSum = $loadAccessorialFees->whereIn('id', $accessorialFeeIds)->sum('rate');
      }
      $loadRevenueAmount -= $accessorialFeesRateSum;
    }
    return $loadRevenueAmount;
  }
}
