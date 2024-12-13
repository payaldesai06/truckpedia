<?php

namespace App\Services\Truckpedia;

use App\Services\Planning\ScheduleService;
use App\Services\TruckService;
use Exception;
use Carbon\Carbon;
use App\Models\AdminCompanyDetail;
use App\Models\Load;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;
use Illuminate\Support\Facades\DB;


class SearchAvailableTruckService {

  /**
   * Search all available trucks by load id
   * @param $request
   * @return LengthAwarePaginator
   * @throws Exception
   */
  public function searchAvailableTrucksByLoad($request) {
    $load = Load::with([
      'loadShippers:id,load_id,city,state,zip_code,latitude,longitude,shipping_date,' .
        'shipping_end_date,order,freight_weight,additional_freight_details',
      'loadReceivers:id,load_id,city,state,zip_code,latitude,longitude,order',
      // delivery_date,' . 'delivery_end_date,
    ])->find($request->loadId);

    $shipper = $load->loadShippers->first();
    $receiver = $load->loadReceivers->last();

    $origin = [
      'city' => $shipper->city,
      'state' => $shipper->state,
      'zipCode' => $shipper->zip_code,
      'latitude' => $shipper->latitude,
      'longitude' => $shipper->longitude,
      'startDate' => $shipper->shipping_date,
      'endDate' => $shipper->shipping_end_date ?? $shipper->shipping_date,
      // request also has time, but it's not supported yet.
    ];
    $destination = [
      'city' => $receiver->city,
      'state' => $receiver->state,
      'zipCode' => $receiver->zip_code,
      'latitude' => $receiver->latitude,
      'longitude' => $receiver->longitude,
    ];

    $totalWeight = $shipper->freight_weight ?? 0;
    if ($shipper->additional_freight_details) {
      $additionalFreightDetails = json_decode($shipper->additional_freight_details, true);
      if (!empty($additionalFreightDetails['W']) && $additionalFreightDetails['W'] > 0) {
        $totalWeight += $additionalFreightDetails['W'];
      }
    }
    request()->merge([
      'origin' => $origin,
      'destination' => $destination,
      'distance' => $load->total_miles,
      'weightInLbs' => ($totalWeight > 0) ? $totalWeight : null
    ]);
    unset($request['loadId']);
    return $this->searchAvailableTrucks($request);
  }

  /**
   * Get Hard Coded Company
   * @return array
   */
  private function hardCodedCompanyList() {
    return  [
      98 => 'Truckpedia',
      32 => 'LinkUs',
      99 => 'GoldenShore',
      100 => 'Rxb',
      102 => 'Kst',
      103 => 'LuluWestern',
      104 => 'SunExpress'
    ];
  }

  /**
   * Search all available trucks
   * @param $request
   * @return LengthAwarePaginator
   * @throws Exception
   */
  public function searchAvailableTrucks($request) {
    $perPage = $request->perPage ?? config('constant.pagination.pageSize');
    // DB::enableQueryLog(); // Enable query log
    $carrierCompanyId = $request->carrierCompanyId ?? null;

    $hardCodedCompanies = collect([]);
    $hardCodedCompanyList = $this->hardCodedCompanyList();

    foreach ($hardCodedCompanyList as $companyId => $companyName) {
      if (!$carrierCompanyId || ($carrierCompanyId == $companyId)) {
        $method = 'calculate' . $companyName;
        $company = $this->$method();
        if ($company) {
          $hardCodedCompanies->push($company);
        }
      }
    }

    $hardCodedCompanyIds = [98, 32, 99, 100, 102, 103, 104];
    if (empty($carrierCompanyId)) {
      $hardCodedCompanyIds[] = 23;
    }
    if (app()->environment('production')) {
      $hardCodedCompanyIds[] = 36; // Your id here for testing purposes.
    }

    $companies = AdminCompanyDetail::select('id', 'business_name', 'company_image')
      ->with(['fmcsaCarrier:id,company_id'])
      ->with('companyAccessorialFeeRate')
      ->whereNotIn('id', $hardCodedCompanyIds)
      ->when(
        $carrierCompanyId && !in_array($carrierCompanyId, $hardCodedCompanyIds),
        function ($q) use ($carrierCompanyId) {
          $q->where('id', $carrierCompanyId);
        }
      )
      // For reference, but it loads all relationships without condition checking.
      // TODO(zbu): However, even though the below code only eager loads needed data that satisfy conditions, will it truly be faster? We need to test after we have more data.
      ->with(['trucks' => function ($query) {
        $query->select(['id', 'company_id', 'type_van', 'type_reefer', 'type_flatbed', 'type_step_deck', 'type_power_only', 'type_conestoga', 'type_box_truck', 'type_sprinter'])
          ->with([
            'truckAvalOnceScheds' => function ($qo) {
              $qo->select(['id', 'truck_id'])
                ->with(['truckAvalManualLanesWithRpm' => function ($qom) {
                  $qom->select(['id', 'truck_aval_once_sched_id', 'target_rpm', 'target_min_rate']);
                  $this->truckAvalManualLanesQueryBuilder($qom);
                  // https://laravel.com/docs/8.x/eloquent-relationships#constraining-eager-loads
                  // The limit and take query builder methods may not be used when constraining eager loads.
                }]);
              $this->truckAvalOnceSchedsQueryBuilder($qo);
            },
            'truckAvalRptScheds' => function ($qr) {
              $qr->select(['id', 'truck_id'])
                ->with(['truckAvalManualLanesWithRpm' => function ($qrm) {
                  $qrm->select(['id', 'truck_aval_rpt_sched_id', 'target_rpm', 'target_min_rate']);
                  $this->truckAvalManualLanesQueryBuilder($qrm);
                }]);
              $this->truckAvalRptSchedsQueryBuilder($qr);
            }
          ])->where(function ($q2) {
            $this->truckAvalSchedsQueryBuilder($q2);
          });
      }])
      ->whereHas('trucks', function ($query) {
        $query->where(function ($q2) {
          //$this->truckTypesAndTimeQueryBuilder($q2);
          $this->truckAvalSchedsQueryBuilder($q2);
        }); // end of grouping to guarantee correctness or orWhereHas is easy to introduce errors, see CalendarService.php.
      }) // end of where has trucks.
      ->get();
    //->paginate($perPage);
    // error_log(json_encode(DB::getQueryLog())); // Show results of log

    // error_log(json_encode($companies));
    $companiesQueryData = $companies->transform(function ($company) use ($request) {
      $truckAvalRptManualLanes = $company->trucks->pluck('truckAvalRptScheds')->flatten()->pluck('truckAvalManualLanes')->flatten();
      $truckAvalOnceManualLanes = $company->trucks->pluck('truckAvalOnceScheds')->flatten()->pluck('truckAvalManualLanes')->flatten();
      $manualLane = $truckAvalRptManualLanes->merge($truckAvalOnceManualLanes)->whereNotNull('target_rpm')->sortBy('target_rpm')->first();
      return [
        'company' => [
          'id' => $company->id ?? '',
          'name' => $company->business_name ?? '',
          'logoUrl' => !empty($company->company_image) ?
            getImage($company->company_image, config('constant.s3.admin_company_image')) : "",
          'fmcsaCarrierId' => $company->fmcsaCarrier->id ?? null,
          'accessorialFees' => !empty($company->companyAccessorialFeeRate)
            ? $this->getCompanyAccessorialFeeRate($company->companyAccessorialFeeRate)
            : null,
        ],
        'maxWeight' => optional($manualLane)->target_weight ?? null,
        'rate' => !is_null(optional($manualLane)->target_rpm) ? max($manualLane->target_rpm * $request->distance, $manualLane->target_min_rate) : 99999
      ];
    });

    // $finalList = $hardCodedCompanies;
    $finalList = $hardCodedCompanies->merge($companiesQueryData);

    $finalList = $finalList->filter();

    return ['availableTrucks' => $finalList];

    // return $finalList;
  }


  /*
  TODO: this code is apparently wrong. trucks table does not have start_time and 
  end_time columns.

  private function truckTypesAndTimeQueryBuilder($q2) {
    $q2->when(request()->filled('truckTypes'), function ($q) {
      // ToDo: Test if array logic inside where works in Laravel 7
      return $q->where($this->getTruckTypes(request('truckTypes')));
    })
    ->when(request()->filled('start_time'), function ($q) {
      return $q->where('start_time', '<=', request('start_time'))
        ->where('end_time', '>=', request('start_time'));
    })
    ->when(request()->filled('end_time'), function ($q) {
      return $q->where('start_time', '<=', request('end_time'))
        ->where('end_time', '>=', request('end_time'));
    });
  }
  */

  private function truckAvalSchedsQueryBuilder($q2) {
    $q2->whereHas('truckAvalOnceScheds', function ($q3) {
      $this->truckAvalOnceSchedsQueryBuilder($q3);
    }) // end of once schedules
      ->orWhereHas('truckAvalRptScheds', function ($q3) {
        $this->truckAvalRptSchedsQueryBuilder($q3);
      }); // end of repeat schedules
  }

  private function truckAvalOnceSchedsQueryBuilder($query) {
    $query->whereDate('start_date', '<=', request('origin.endDate'))
      ->whereDate('end_date', '>=', request('origin.startDate'))
      ->whereHas('truckAvalManualLanesWithRpm', function ($q4) {
        $this->truckAvalManualLanesQueryBuilder($q4);
      }); // end of manual lanes
    if (!empty(request('equipmentType'))) {
      $this->searchEquipmentType($query);
    }
  }

  /**
   * Search By equipmentTypes
   * @param $query
   *
   */
  private function searchEquipmentType($query) {
    $equipmentTypeColumn = array_search(
      request('equipmentType'),
      config('constant.planning.schedule.equipmentTypes')
    );
    $query->where($equipmentTypeColumn, 1);
  }

  private function truckAvalRptSchedsQueryBuilder($query) {
    $query->where(function ($q3a) {
      $startTime = Carbon::parse(request('origin.startDate'));
      $endTime = Carbon::parse(request('origin.endDate'));
      $key = 0;
      while ($startTime->lte($endTime) && $key < 7) {
        $columnName = array_search(array_search($startTime->dayName, config('constant.planning.schedule.weeklySelectedDays')), config('constant.planning.schedule.weeklyCheck'));
        if (!empty($columnName)) {
          if ($key > 0) {
            $q3a->orWhere($columnName, 1);
          } else {
            $q3a->where($columnName, 1);
          }
        }
        $startTime->addDay();
        $key++;
      } // end of dates calculation
    });
    $query->where(function ($q3b) {
      $q3b->whereNull('quote_valid_until')
        ->orWhere('quote_valid_until', '>=', request('origin.startDate'));
    });
    if (!empty(request('equipmentType'))) {
      $this->searchEquipmentType($query);
    }
    $query->whereHas('truckAvalManualLanesWithRpm', function ($q4) {
      $this->truckAvalManualLanesQueryBuilder($q4);
    }); // end of manual lanes
  }

  /*
  Some references:
  https://mysql.rjweb.org/doc.php/find_nearest_in_mysql
  https://stackoverflow.com/questions/5756232/moving-lat-lon-text-columns-into-a-point-type-column
  https://dev.mysql.com/doc/refman/5.7/en/spatial-convenience-functions.html#function_st-distance-sphere
  https://stackoverflow.com/questions/68416319/how-optimize-this-distance-query-based-on-latitude-and-longitude-in-mysql
  https://stackoverflow.com/questions/574691/mysql-great-circle-distance-haversine-formula

  Note here the current implementation is usable but not efficient, it will needs a full table scan.
  Once we have more data, we will need to build index and/or use some spatial column types.
  One triky thing is that each row has a different origin_deadhead and dest_deadhead, 
  so building index on lat and long is not enough.
  One potential solution would be to creating bounding box columns in DB table,
  so we use index on bounding box to filter rows, then use finer function like
  ST_DISTANCE_SPHERE to remove rows should not be returned.
  I think it's better we wait until we have more data then we experiment and
  test which solution is good.
  Google Maps has a "measure distance" tool to get the physical distance between 
  two locations, I used it to test the code here and it's accurate.
  */
  private function truckAvalManualLanesQueryBuilder($query) {
    $originLatitude = request('origin.latitude');
    $originLongitude = request('origin.longitude');
    $oneMileInLatitude = 0.01446;
    $destinationLatitude = request('destination.latitude');
    $destinationLongitude = request('destination.longitude');

    $usStatesIntMapping = config('constant.usStatesIntMapping');
    $originState = !empty(request('origin.state')) ? array_search(
      request('origin.state'),
      $usStatesIntMapping
    ) : null;
    $destinationState = !empty(request('destination.state')) ? array_search(
      request('destination.state'),
      $usStatesIntMapping
    ) : null;

    $query->where(function ($q2) use (
      $originLatitude,
      $originLongitude,
      $originState
    ) {
      $q2->where(function ($q3) use (
        $originLatitude,
        $originLongitude
      ) {
        $q3->whereNotNull('origin_longitude')
          ->whereNotNull('origin_latitude')
          ->whereRaw("(ST_DISTANCE_SPHERE(POINT({$originLongitude}, {$originLatitude}), POINT(origin_longitude, origin_latitude)) / 1609.344) <= origin_deadhead");
      });
      if ($originState) {
        $q2->orWhereNotNull('origin_state_' . $originState);
      }
    })
      ->where(function ($q2) use (
        $destinationLatitude,
        $destinationLongitude,
        $destinationState
      ) {
        $q2->where(function ($q3) use (
          $destinationLatitude,
          $destinationLongitude
        ) {
          $q3->whereNotNull('dest_longitude')
            ->whereNotNull('dest_latitude')
            ->whereRaw("(ST_DISTANCE_SPHERE(POINT({$destinationLongitude}, {$destinationLatitude}), POINT(dest_longitude, dest_latitude)) / 1609.344) <= dest_deadhead");
        });
        if ($destinationState) {
          $q2->orWhereNotNull('dest_state_' . $destinationState);
        }
      })
      /*
      ->whereRaw("origin_latitude >= {$originLatitude} - (origin_deadhead * $oneMileInLatitude)")
      ->whereRaw("origin_latitude <= {$originLatitude} + (origin_deadhead * $oneMileInLatitude)")
      ->whereRaw("origin_longitude >= {$originLongitude} - (origin_deadhead / COS(RADIANS($originLatitude)) / 69.172)")
      ->whereRaw("origin_longitude <= {$originLongitude} + (origin_deadhead / COS(RADIANS($originLatitude)) / 69.172)")
      ->whereRaw("dest_latitude >= {$destinationLatitude} - (dest_deadhead * $oneMileInLatitude)")
      ->whereRaw("dest_latitude <= {$destinationLatitude} + (dest_deadhead * $oneMileInLatitude)")
      ->whereRaw("dest_longitude >= {$destinationLongitude} - (dest_deadhead / COS(RADIANS($destinationLatitude)) / 69.172)")
      ->whereRaw("dest_longitude <= {$destinationLongitude} + (dest_deadhead / COS(RADIANS($destinationLatitude)) / 69.172)")
      */
      // ToDo: Remove comments after testing
      ->when(request()->filled('weightInLbs'), function ($q) {
        return $q->where('target_weight', '>=', request('weightInLbs'));
      });
  }

  /*
  private function getTruckTypes($truckTypes) {
    return (new TruckService())->getTruckTypes($truckTypes);
  }
  */

  // Data sources: https://docs.google.com/document/d/11KxryXyLt6lbkExowxGDP6BDum41Znb5kjMqZMXH-3Y/edit?pli=1
  private function calculateTruckpedia() {
    $company = $this->getCompanyById(98);
    $originLatitude = request('origin.latitude');
    $originLongitude = request('origin.longitude');
    $destinationLatitude = request('destination.latitude');
    $destinationLongitude = request('destination.longitude');
    $laLatitude = 34.0522342; // Los Angeles, CA lat
    $laLongitude = -118.2436849; // Los Angeles, CA lng

    $distanceOriginAndLa = $this->calculateDistance($originLatitude, $originLongitude, $laLatitude, $laLongitude);
    $distanceDestAndLa = $this->calculateDistance($destinationLatitude, $destinationLongitude, $laLatitude, $laLongitude);
    $destinationState = request('destination.state');
    $destinationStates2 = ['NV', 'OR', 'WA', 'MT', 'WY', 'CO', 'NM', 'ND', 'SD', 'ID'];

    $rate = null;
    if ($distanceOriginAndLa <= 200 && $distanceDestAndLa <= 200) {
      $distance = request('distance');
      if ($distance < 41) {
        $rate = $this->calculateRate(6.38, 350);
      } else if ($distance < 51) {
        $rate = $this->calculateRate(6.38, 400);
      } else if ($distance < 61) {
        $rate = $this->calculateRate(6.38, 450);
      } else {
        $rate = $this->calculateRate(6.38, 500);
      }
    } else if ($distanceOriginAndLa <= 150 && in_array($destinationState, $destinationStates2)) {
      $rate = $this->calculateRate(4.25);
    } else if ($distanceOriginAndLa <= 150)
      $rate = $this->calculateRate(3, 350);

    if (is_null($rate)) {
      return null;
    }

    return collect([
      'company' => [
        'id' => $company->id ?? '',
        'name' => $company->business_name ?? '',
        'logoUrl' => !empty($company->company_image)
          ? getImage($company->company_image, config('constant.s3.admin_company_image')) : "",
        'fmcsaCarrierId' => $company->fmcsaCarrier->id ?? null,
        'accessorialFees' => !empty($company->companyAccessorialFeeRate)
          ? $this->getCompanyAccessorialFeeRate($company->companyAccessorialFeeRate)
          : null,
      ],
      'maxWeight' => 42000,
      'rate' => (int)$rate
    ]);
  }

  private function calculateLinkUs() {
    /*
    1st one:
    Pick up: Los Angeles, CA Deadhead: 50 miles
    Del: TN, AR, KY, GA, IL, AL, MS, IN, OH, NC, SC, PA,
    Rate: $2.2 RPM

    2nd one:
    Pick up:  Los Angeles, CA Deadhead: 100 miles
    Del:   Los Angeles, CA Deadhead: 100 miles
    RPM: $250 minimum, RPM is $5
    */


    /*
    You can get lat & lng of Los Angeles from Google.
    You can use existing algorithm (bounding box) in the query code to check if two locations are within 100 miles. Make this check a helper function in this file.
    if request pickup is within 50 miles of Los Angeles AND request delivery state is in 1st one list (TN to PA):
      calculate rate based on 2.2 rpm, return.
    else if request pickup is within 100 miles of Los Angeles AND request delivery is within 100 miles of Los Angeles:
      calculate rate based on max(250, 5 * distance), return.
    else:
      skip this company.
    */
    $company = $this->getCompanyById(32);
    $originLatitude = request('origin.latitude');
    $originLongitude = request('origin.longitude');
    $destinationLatitude = request('destination.latitude');
    $destinationLongitude = request('destination.longitude');
    $laLatitude = 34.0522342; // Los Angeles, CA lat
    $laLongitude = -118.2436849; // Los Angeles, CA lng

    $distanceOriginAndLa = $this->calculateDistance($originLatitude, $originLongitude, $laLatitude, $laLongitude);
    $distanceDestAndLa = $this->calculateDistance($destinationLatitude, $destinationLongitude, $laLatitude, $laLongitude);
    $destinationState = request('destination.state');
    $destinationStates1 = ['TN', 'AR', 'KY', 'GA', 'IL', 'AL', 'MS', 'IN', 'OH', 'NC', 'SC', 'PA', 'NJ'];

    $rate = null;
    if ($distanceOriginAndLa <= 50 && in_array($destinationState, $destinationStates1)) {
      if (request('distance') <= 2200) {
        $rate = $this->calculateRate(2.15);
      } else {
        $rate = $this->calculateRate(2);
      }
    } else if ($distanceOriginAndLa <= 100 && $distanceDestAndLa <= 100) {
      $distance = request('distance');
      if ($distance < 41) {
        $rate = $this->calculateRate(6.35, 340);
      } else if ($distance < 51) {
        $rate = $this->calculateRate(6.35, 420);
      } else if ($distance < 61) {
        $rate = $this->calculateRate(6.35, 465);
      } else {
        $rate = $this->calculateRate(6.35, 480);
      }
    }

    if (is_null($rate)) {
      return null;
    }

    return collect([
      'company' => [
        'id' => $company->id ?? '',
        'name' => $company->business_name ?? '',
        'logoUrl' => !empty($company->company_image) ?
          getImage($company->company_image, config('constant.s3.admin_company_image')) : "",
        'fmcsaCarrierId' => $company->fmcsaCarrier->id ?? null,
        'accessorialFees' => !empty($company->companyAccessorialFeeRate)
          ? $this->getCompanyAccessorialFeeRate($company->companyAccessorialFeeRate)
          : null,
      ],
      'maxWeight' => 42000,
      'rate' => (int)$rate
    ]);
  }

  private function calculateGoldenShore() {
    /*
    1st one:
    Pick up: Los Angeles, CA Deadhead: 50 miles
    Del: TN, AR, KY, GA, IL, AL, MS, IN, OH, NC, SC, PA,
    Rate: $2.4 RPM

    2nd one:
    Pick up: Los Angeles, CA Deadhead: 100 miles
    Del: Los Angeles, CA Deadhead: 100 miles
    RPM: $320 minimum, RPM is $5.2
    */
    $company = $this->getCompanyById(99);

    $originLatitude = request('origin.latitude');
    $originLongitude = request('origin.longitude');
    $destinationLatitude = request('destination.latitude');
    $destinationLongitude = request('destination.longitude');
    $laLatitude = 34.0522342; // Los Angeles, CA lat
    $laLongitude = -118.2436849; // Los Angeles, CA lng

    $distanceOriginAndLa = $this->calculateDistance($originLatitude, $originLongitude, $laLatitude, $laLongitude);
    $distanceDestAndLa = $this->calculateDistance($destinationLatitude, $destinationLongitude, $laLatitude, $laLongitude);
    $destinationState = request('destination.state');
    $destinationStates1 = ['TN', 'AR', 'KY', 'GA', 'IL', 'AL', 'MS', 'IN', 'OH', 'NC', 'SC', 'PA'];

    $rate = null;
    if ($distanceOriginAndLa <= 50 && in_array($destinationState, $destinationStates1)) {
      $rate = $this->calculateRate(2);
    } else if ($distanceOriginAndLa <= 100 && $distanceDestAndLa <= 100) {
      $distance = request('distance');
      if ($distance < 41) {
        $rate = $this->calculateRate(6.4, 358);
      } else if ($distance < 51) {
        $rate = $this->calculateRate(6.4, 415);
      } else if ($distance < 61) {
        $rate = $this->calculateRate(6.4, 450);
      } else {
        $rate = $this->calculateRate(6.4, 520);
      }
    }

    if (is_null($rate)) {
      return null;
    }

    return collect([
      'company' => [
        'id' => $company->id ?? '',
        'name' => $company->business_name ?? '',
        'logoUrl' => !empty($company->company_image)
          ? getImage($company->company_image, config('constant.s3.admin_company_image')) : "",
        'fmcsaCarrierId' => $company->fmcsaCarrier->id ?? null,
        'accessorialFees' => !empty($company->companyAccessorialFeeRate)
          ? $this->getCompanyAccessorialFeeRate($company->companyAccessorialFeeRate)
          : null,
      ],
      'maxWeight' => 42000,
      'rate' => (int)$rate
    ]);
  }

  private function calculateRxb() {
    /*
    1st one:
    Pick up: Los Angeles, CA Deadhead: 50 miles
    Del: TN, AR, KY, GA, IL, AL, MS, IN, OH, NC, SC, PA,
    Rate: $2.25 RPM

    2nd one:
    Pick up:  Los Angeles, CA Deadhead: 100 miles
    Del: Los Angeles, CA Deadhead: 100 miles
    RPM: $280 minimum, RPM is $4.8

    3rd one:
    Pick up:  Los Angeles, CA Deadhead: 150 miles
    Del: TX, OK, KS, MO
    Rate: $2.4 RPM
    */
    $company = $this->getCompanyById(100);

    $originLatitude = request('origin.latitude');
    $originLongitude = request('origin.longitude');
    $destinationLatitude = request('destination.latitude');
    $destinationLongitude = request('destination.longitude');
    $laLatitude = 34.0522342; // Los Angeles, CA lat
    $laLongitude = -118.2436849; // Los Angeles, CA lng

    $distanceOriginAndLa = $this->calculateDistance($originLatitude, $originLongitude, $laLatitude, $laLongitude);
    $distanceDestAndLa = $this->calculateDistance($destinationLatitude, $destinationLongitude, $laLatitude, $laLongitude);
    $destinationState = request('destination.state');
    $destinationStates1 = ['TN', 'AR', 'KY', 'GA', 'IL', 'AL', 'MS', 'IN', 'OH', 'NC', 'SC', 'PA', 'NJ'];
    $destinationStates2 = ['TX', 'MO'];
    $destinationStates3 = ['OK', 'KS'];

    $rate = null;
    if ($distanceOriginAndLa <= 50 && in_array($destinationState, $destinationStates1)) {
      if (request('distance') <= 2200) {
        $rate = $this->calculateRate(2);
      } else {
        $rate = $this->calculateRate(2);
      }
    } else if ($distanceOriginAndLa <= 100 && $distanceDestAndLa <= 100) {
      $distance = request('distance');
      if ($distance < 41) {
        $rate = $this->calculateRate(6.34, 350);
      } else if ($distance < 51) {
        $rate = $this->calculateRate(6.34, 400);
      } else if ($distance < 61) {
        $rate = $this->calculateRate(6.34, 450);
      } else {
        $rate = $this->calculateRate(6.34, 500);
      }
    } else if ($distanceOriginAndLa <= 150 && in_array($destinationState, $destinationStates2)) {
      $rate = $this->calculateRate(2.28);
    } else if ($distanceOriginAndLa <= 150 && in_array($destinationState, $destinationStates3)) {
      $rate = $this->calculateRate(2.40);
    }

    if (is_null($rate)) {
      return null;
    }

    return collect([
      'company' => [
        'id' => $company->id ?? '',
        'name' => $company->business_name ?? '',
        'logoUrl' => !empty($company->company_image)
          ? getImage($company->company_image, config('constant.s3.admin_company_image')) : "",
        'fmcsaCarrierId' => $company->fmcsaCarrier->id ?? null,
        'accessorialFees' => !empty($company->companyAccessorialFeeRate)
          ? $this->getCompanyAccessorialFeeRate($company->companyAccessorialFeeRate)
          : null,
      ],
      'maxWeight' => 42000,
      'rate' => (int)$rate
    ]);
  }

  private function calculateKst() {
    $company = $this->getCompanyById(102);
    $originLatitude = request('origin.latitude');
    $originLongitude = request('origin.longitude');
    $destinationLatitude = request('destination.latitude');
    $destinationLongitude = request('destination.longitude');
    $laLatitude = 34.0522342; // Los Angeles, CA lat
    $laLongitude = -118.2436849; // Los Angeles, CA lng

    $distanceOriginAndLa = $this->calculateDistance($originLatitude, $originLongitude, $laLatitude, $laLongitude);
    $distanceDestAndLa = $this->calculateDistance($destinationLatitude, $destinationLongitude, $laLatitude, $laLongitude);
    $destinationState = request('destination.state');
    $destinationStates1 = ['TX', 'OK', 'KS', 'MO'];

    $rate = null;
    if ($distanceOriginAndLa <= 150 && in_array($destinationState, $destinationStates1)) {
      $rate = $this->calculateRate(2.25);
    } else if ($distanceOriginAndLa <= 100 && $distanceDestAndLa <= 100) {
      $distance = request('distance');
      if ($distance < 41) {
        $rate = $this->calculateRate(6.42, 360);
      } else if ($distance < 51) {
        $rate = $this->calculateRate(6.42, 425);
      } else if ($distance < 61) {
        $rate = $this->calculateRate(6.42, 440);
      } else {
        $rate = $this->calculateRate(6.42, 520);
      }
    }

    if (is_null($rate)) {
      return null;
    }

    return collect([
      'company' => [
        'id' => $company->id ?? '',
        'name' => $company->business_name ?? '',
        'logoUrl' => !empty($company->company_image)
          ? getImage($company->company_image, config('constant.s3.admin_company_image')) : "",
        'fmcsaCarrierId' => $company->fmcsaCarrier->id ?? null,
        'accessorialFees' => !empty($company->companyAccessorialFeeRate)
          ? $this->getCompanyAccessorialFeeRate($company->companyAccessorialFeeRate)
          : null,
      ],
      'maxWeight' => 42000,
      'rate' => (int)$rate
    ]);
  }

  private function calculateLuluWestern() {
    $company = $this->getCompanyById(103);

    $originLatitude = request('origin.latitude');
    $originLongitude = request('origin.longitude');
    $destinationLatitude = request('destination.latitude');
    $destinationLongitude = request('destination.longitude');
    $laLatitude = 34.0522342; // Los Angeles, CA lat
    $laLongitude = -118.2436849; // Los Angeles, CA lng

    $distanceOriginAndLa = $this->calculateDistance($originLatitude, $originLongitude, $laLatitude, $laLongitude);
    $distanceDestAndLa = $this->calculateDistance($destinationLatitude, $destinationLongitude, $laLatitude, $laLongitude);
    $destinationState = request('destination.state');
    $destinationStates1 = ['TN', 'AR', 'KY', 'GA', 'IL', 'AL', 'MS', 'IN', 'OH', 'NC', 'SC', 'PA'];

    $rate = null;
    if ($distanceOriginAndLa <= 50 && in_array($destinationState, $destinationStates1)) {
      $rate = $this->calculateRate(2.10);
    } else if ($distanceOriginAndLa <= 100 && $distanceDestAndLa <= 100) {
      $rate = $this->calculateRate(6.49, 325);
    }

    if (is_null($rate)) {
      return null;
    }

    return collect([
      'company' => [
        'id' => $company->id ?? '',
        'name' => $company->business_name ?? '',
        'logoUrl' => !empty($company->company_image)
          ? getImage($company->company_image, config('constant.s3.admin_company_image')) : "",
        'fmcsaCarrierId' => $company->fmcsaCarrier->id ?? null,
        'accessorialFees' => !empty($company->companyAccessorialFeeRate)
          ? $this->getCompanyAccessorialFeeRate($company->companyAccessorialFeeRate)
          : null,
      ],
      'maxWeight' => 42000,
      'rate' => (int)$rate
    ]);
  }

  private function calculateSunExpress() {
    $company = $this->getCompanyById(104);

    $originLatitude = request('origin.latitude');
    $originLongitude = request('origin.longitude');
    $destinationLatitude = request('destination.latitude');
    $destinationLongitude = request('destination.longitude');
    $laLatitude = 34.0522342; // Los Angeles, CA lat
    $laLongitude = -118.2436849; // Los Angeles, CA lng

    $distanceOriginAndLa = $this->calculateDistance($originLatitude, $originLongitude, $laLatitude, $laLongitude);
    // $distanceDestAndLa = $this->calculateDistance($destinationLatitude, $destinationLongitude, $laLatitude, $laLongitude);
    $destinationState = request('destination.state');
    $destinationStates1 = ['TN', 'AR', 'KY', 'GA', 'IL', 'AL', 'MS', 'IN', 'OH', 'NC', 'SC', 'PA'];

    $rate = null;
    if ($distanceOriginAndLa <= 50 && in_array($destinationState, $destinationStates1)) {
      $rate = $this->calculateRate(2.12, 350);
    }

    if (is_null($rate)) {
      return null;
    }

    return collect([
      'company' => [
        'id' => $company->id ?? '',
        'name' => $company->business_name ?? '',
        'logoUrl' => !empty($company->company_image)
          ? getImage($company->company_image, config('constant.s3.admin_company_image')) : "",
        'fmcsaCarrierId' => $company->fmcsaCarrier->id ?? null,
        'accessorialFees' => !empty($company->companyAccessorialFeeRate)
          ? $this->getCompanyAccessorialFeeRate($company->companyAccessorialFeeRate)
          : null,
      ],
      'maxWeight' => 42000,
      'rate' => (int)$rate
    ]);
  }

  private function calculateRate($rpm, $minRate = null) {
    $distance = request('distance');

    if ($minRate) {
      return max($minRate, $rpm * $distance);
    }
    // calculate rate based on rpm
    return $rpm * $distance;
  }

  private function calculateDistance($destinationLatitude, $destinationLongitude, $originLatitude = null, $originLongitude = null) {
    $originLatitude = $originLatitude ?? 34.0522342; // Los Angeles, CA lat
    $originLongitude = $originLongitude ?? -118.2436849; // Los Angeles, CA lng
    // https://stackoverflow.com/a/43908176/973794
    $latFrom = deg2rad($originLatitude);
    $latTo = deg2rad($destinationLatitude);

    $lonDelta = $originLongitude - $destinationLongitude;
    $distance = sin($latFrom) * sin($latTo) + cos($latFrom) * cos($latTo) * cos(deg2rad($lonDelta));
    $distance = acos($distance);
    $distance = rad2deg($distance);
    return $distance * 60 * 1.1515;
  }

  /**
   * get company details by id
   * @param $id
   * @return mixed
   */
  private function getCompanyById($id) {
    return AdminCompanyDetail::select('id', 'business_name', 'company_image')
      ->with('companyAccessorialFeeRate')
      ->with('fmcsaCarrier:id,company_id')
      ->find($id);
  }

  /**
   * Get company accessorial fee rate
   * @param $companyAccessorialFeeRate
   * @return null[]|null
   */
  private function getCompanyAccessorialFeeRate($companyAccessorialFeeRate) {
    if (empty($companyAccessorialFeeRate)) {
      return null;
    }
    return [
      'detentionRate' => $companyAccessorialFeeRate->detention_rate ?? null,
      'layoverRate' => $companyAccessorialFeeRate->layover_rate ?? null,
      'tonuRate' => $companyAccessorialFeeRate->tonu_rate ?? null,
      'extraStopRate' => $companyAccessorialFeeRate->extra_stop_rate ?? null,
      'chassisRentalRate' => $companyAccessorialFeeRate->chassis_rental_rate ?? null,
      'chassisSplitRate' => $companyAccessorialFeeRate->chassis_split_rate ?? null,
      'dryStorageRate' => $companyAccessorialFeeRate->dry_storage_rate ?? null,
      'hazmatRate' => $companyAccessorialFeeRate->hazmat_rate ?? null,
      'prepullRate' => $companyAccessorialFeeRate->prepull_rate ?? null,
    ];
  }
}
