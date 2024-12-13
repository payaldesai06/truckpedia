<?php

namespace App\Services\ExternalLoadBoards;

use App\Models\DatSearchCriteria;
use App\Models\DatServiceAccount;
use App\Models\DatUserAccount;
use App\Models\User;
use Carbon\Carbon;
use Exception;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;

class DatService {
  protected $datHelper;

  public function __construct() {
    $this->datHelper = new DatHelper();
  }

  public function getConnectionStatus() {
    $datServiceAccount = DatServiceAccount::select('access_token', 'expires_when')
      ->where('company_id', $this->getAdminCompanyId())->first();
    if (
      !$datServiceAccount || !$datServiceAccount->access_token
      || !$datServiceAccount->expires_when
    ) {
      return 'No valid DAT service account.';
    }

    $datUserAccount = DatUserAccount::select('access_token', 'expires_when')
      ->where('user_id', $this->getAuthUserId())->first();
    if (!$datUserAccount || !$datUserAccount->access_token || !$datUserAccount->expires_when) {
      return 'No valid DAT user account.';
    }

    return 'Connected';
  }

  /**
   * Get the
   * @return array
   * @throws Exception
   */
  public function getDatAccountDetails(): array {
    $result = [];

    $datUserAccount = DatUserAccount::select('username')
      ->where('user_id', $this->getAuthUserId())->first();
    $result['userAccount']['username'] = $datUserAccount->username ?? '';

    if (Auth::user()->role == config('constant.roles.admin')) {
      $datServiceAccount = DatServiceAccount::select('username', 'password')
        ->where('company_id', $this->getAdminCompanyId())->first();
      $result['serviceAccount']['username'] = $datServiceAccount->username ?? '';
      $result['serviceAccount']['password'] = $datServiceAccount->password ?? '';
    }

    return $result;
  }

  /**
   * Create/Update the service account.
   * @param $request
   * @return mixed
   * @throws Exception
   */
  public function updateOrCreateServiceAccount($request) {
    $companyId = $this->getAdminCompanyId();
    $response = $this->datHelper->generateDatServiceAccountToken(
      $request->username,
      $request->password
    ) ?? '';
    if ($response->accessToken && $response->expiresWhen) {
      DatServiceAccount::updateOrCreate(
        ['company_id' => $companyId],
        [
          'username' => $request->username,
          'password' => $request->password,
          'access_token' => $response->accessToken,
          'expires_when' => Carbon::parse($response->expiresWhen)
        ]
      );
    } else {
      throw new Exception('Account username/password not valid.');
    }
  }

  /**
   * Create/Update user account on DAT.
   * @param $request
   * @return mixed
   * @throws Exception
   */
  public function updateOrCreateUserAccount($request) {
    //try {
    $companyId = $this->getAdminCompanyId();
    $response = $this->datHelper->generateDatUserAccountToken(
      $request->username,
      $companyId
    );
    if ($response->accessToken && $response->expiresWhen) {
      DatUserAccount::updateOrCreate(
        ['user_id' => $this->getAuthUserId()],
        [
          'username' => $request->username,
          'access_token' => $response->accessToken,
          'expires_when' => Carbon::parse($response->expiresWhen)
        ]
      );
    } else {
      throw new Exception('Username not valid.');
    }
    /*} catch (Exception $exception) {
      throw new Exception($exception);
    }*/
  }

  /**
   * Remove/Delete Service Account.
   * @return mixed
   * @throws Exception
   */
  public function removeServiceAccount() {
    $companyUserIds = User::select('id')->where(
      'admin_company_detail_id',
      $this->getAdminCompanyId()
    )->pluck('id')->toArray();
    DatSearchCriteria::whereIn('user_id', $companyUserIds)->delete();
    return DatServiceAccount::where('company_id', $this->getAdminCompanyId())->delete();
  }

  /**
   * Remove/Delete User Account.
   * @return mixed
   * @throws Exception
   */
  public function removeUserAccount() {
    DatSearchCriteria::where('user_id', $this->getAuthUserId())->delete();
    return DatUserAccount::where('user_id', $this->getAuthUserId())->delete();
  }

  /**
   * Get Authenticated User ID.
   * @return int|string|null
   */
  private function getAuthUserId() {
    return Auth::id();
  }

  /**
   * Get current authenticate company id.
   * @throws Exception
   */
  private function getAdminCompanyId() {
    $companyId = Auth::user()->admin_company_detail_id;
    if (empty($companyId)) {
      throw new Exception(config('response.error'));
    }
    return $companyId;
  }

  /**
   *
   * @param $request
   * @return Builder|Model|object
   */
  private function getOrCreateSearchCriteriaFromRequest($request, $currentUserId) {
    $datSearchCriteria = DatSearchCriteria::query();
    $datSearchCriteria->where('user_id', $currentUserId);

    // $equipmentClasses = config('constant.dat_equipment_classes');
    $equipmentTypes = null;
    $capacity = request('capacity') ? request('capacity') : 'BOTH';
    $length = request('length') ? (int) request('length') : null;
    $weight = request('weight') ? (float) request('weight') : null;
    $originCity = null;
    $originState = null;
    $originLat = null;
    $originLng = null;
    $originDeadhead = null;
    $originStates = null;
    $destinationCity = null;
    $destinationState = null;
    $destinationLat = null;
    $destinationLng = null;
    $destinationDeadhead = null;
    $destinationStates = null;

    if (request('ezpapelEquipmentType')) {
      if (config('constant.ezpapel_equipment_type_to_dat')[request('ezpapelEquipmentType')])
        $equipmentTypes = [
          config('constant.ezpapel_equipment_type_to_dat')[request('ezpapelEquipmentType')]
        ];
    } else if (request('manualSearchTypes') && count(request('manualSearchTypes'))) {
      $equipmentTypes = array_map(
        fn ($t) => config('constant.load_matching_manual_search_type_to_dat_type')[$t],
        request('manualSearchTypes')
      );
    }
    /* else if (request('equipmentClasses') && count(request('equipmentClasses'))) {
      $equipmentClasses = request('equipmentClasses');
    }*/
    if ($equipmentTypes && count($equipmentTypes)) {
      sort($equipmentTypes);
      $equipmentTypes = implode(',', $equipmentTypes);
      $datSearchCriteria->where('equipment_types', $equipmentTypes);
    } else {
      // sort($equipmentClasses);
      // $equipmentClasses = implode(',', $equipmentClasses);
      $datSearchCriteria->where('equipment_types', NULL);
    }

    $datSearchCriteria->where('capacity', $capacity);
    $datSearchCriteria->where('max_length_in_feet', $length);
    $datSearchCriteria->where('max_weight_in_pounds', $weight);

    if ($request->has('origin.states') && count($request->origin['states'])) {
      $originStatesArray = $request->origin['states'];
      sort($originStatesArray);
      $originStates = implode(',', $originStatesArray);
      $datSearchCriteria->where('origin_states', $originStates);
    } else {
      $originCity = $request->origin['city'];
      $originState = $request->origin['state'];
      $originLat = $request->origin['latitude'];
      $originLng = $request->origin['longitude'];
      if (request('origin.deadhead')) {
        $originDeadhead = $request->origin['deadhead'];
      }
      $datSearchCriteria
        ->where('origin_city', $originCity)
        ->where('origin_state', $originState)
        ->where('origin_latitude', $originLat)
        ->where('origin_longitude', $originLng)
        ->where('origin_deadhead_miles', $originDeadhead);
    }

    if ($request->has('destination.states') && count($request->destination['states'])) {
      $destinationStatesArray = $request->destination['states'];
      sort($destinationStatesArray);
      $destinationStates = implode(',', $destinationStatesArray);
      $datSearchCriteria->where('destination_states', $destinationStates);
    } else {
      $destinationCity = $request->destination['city'];
      $destinationState = $request->destination['state'];
      $destinationLat = $request->destination['latitude'];
      $destinationLng = $request->destination['longitude'];
      if (request('destination.deadhead')) {
        $destinationDeadhead = $request->destination['deadhead'];
      }
      $datSearchCriteria
        ->where('destination_city', $destinationCity)
        ->where('destination_state', $destinationState)
        ->where('destination_latitude', $destinationLat)
        ->where('destination_longitude', $destinationLng)
        ->where('destination_deadhead_miles', $destinationDeadhead);
    }

    $availabilityEarliest = $this->convertStartDate(request('startDate'));
    if (request('endDate')) {
      $availabilityLatest = $this->convertEndDate(request('endDate'));
    } else {
      $availabilityLatest = $this->convertEndDate(request('startDate'));
    }
    $datSearchCriteria
      ->where('availability_earliest', $availabilityEarliest)
      ->where('availability_latest', $availabilityLatest);

    $result = $datSearchCriteria->latest('id')->first();

    if (
      $result && (!$result->expires_when ||
        Carbon::parse($result->expires_when) > Carbon::now()->addMinutes(10))
    ) {
      return $result;
    }

    return DatSearchCriteria::create([
      'user_id' => $currentUserId,
      // 'equipment_classes' => $equipmentClasses,
      'equipment_types' => $equipmentTypes,
      'capacity' => $capacity,
      'max_length_in_feet' => $length,
      'max_weight_in_pounds' => $weight,
      'origin_city' => $originCity,
      'origin_state' => $originState,
      'origin_latitude' => $originLat,
      'origin_longitude' => $originLng,
      'origin_deadhead_miles' => $originDeadhead,
      'origin_states' => $originStates,
      'destination_city' => $destinationCity,
      'destination_state' => $destinationState,
      'destination_latitude' => $destinationLat,
      'destination_longitude' => $destinationLng,
      'destination_deadhead_miles' => $destinationDeadhead,
      'destination_states' => $destinationStates,
      'availability_earliest' => $availabilityEarliest,
      'availability_latest' => $availabilityLatest,
    ]);
  }

  /**
   * Convert start date into UTC format.
   * @param $startDate
   * @return string
   */
  private function convertStartDate($startDate): string {
    return Carbon::parse($startDate, 'America/Los_Angeles')->utc()->toDateTimeString();
  }

  /**
   * Convert start date into UTC format.
   * @param $endDate
   * @return string
   */
  private function convertEndDate($endDate): string {
    return Carbon::parse($endDate . ' ' . '06:59:59')->addDay()->utc()->toDateTimeString();
  }

  /**
   * Create request body from SearchCriteria model instance.
   * @param $searchCriteria
   * @return array|array[]
   */
  private function generateRequestBodyFromCriteriaModelInstance($searchCriteria): array {
    $criteria = [
      'criteria' =>
      [
        'desiredSpecs' => [
          // 'equipmentClasses' => explode(',', $searchCriteria->equipment_classes),
          // 'equipmentTypes' => ['PO', 'SB'],
        ],
        'maxAgeInMinutes' => 4320, // 72 hours
      ]
    ];

    if ($searchCriteria->equipment_types) {
      $criteria['criteria']['desiredSpecs']['equipmentTypes'] = explode(',', $searchCriteria->equipment_types);
    } else {
      $criteria['criteria']['desiredSpecs']['equipmentClasses'] = config('constant.dat_equipment_classes');
    }

    if ($searchCriteria->capacity) {
      $criteria['criteria']['desiredSpecs']['capacity'] = $searchCriteria->capacity;
    }
    if ($searchCriteria->max_length_in_feet) {
      $criteria['criteria']['desiredSpecs']['maxLengthInFeet'] = $searchCriteria->max_length_in_feet;
    }
    if ($searchCriteria->max_weight_in_pounds) {
      $criteria['criteria']['desiredSpecs']['maxWeightInPounds'] = (float) $searchCriteria->max_weight_in_pounds;
    }

    if ($searchCriteria->origin_states) {
      $criteria['criteria']['origin']['area'] = [
        'states' => explode(',', $searchCriteria->origin_states)
      ];
    } else {
      $criteria['criteria']['origin']['point'] = [
        'city' => $searchCriteria->origin_city,
        'state' => $searchCriteria->origin_state,
        'latitude' => (float) $searchCriteria->origin_latitude,
        'longitude' => (float) $searchCriteria->origin_longitude
      ];
      if ($searchCriteria->origin_deadhead_miles) {
        $criteria['criteria']['origin']['point']['deadhead']['miles']
          = $searchCriteria->origin_deadhead_miles;
      }
    }

    if ($searchCriteria->destination_states) {
      $criteria['criteria']['destination']['area'] = [
        'states' => explode(',', $searchCriteria->destination_states)
      ];
    } else {
      $criteria['criteria']['destination']['point'] = [
        'city' => $searchCriteria->destination_city,
        'state' => $searchCriteria->destination_state,
        'latitude' => (float) $searchCriteria->destination_latitude,
        'longitude' => (float) $searchCriteria->destination_longitude
      ];
      if ($searchCriteria->destination_deadhead_miles) {
        $criteria['criteria']['destination']['point']['deadhead']['miles']
          = $searchCriteria->destination_deadhead_miles;
      }
    }

    $criteria['criteria']['availability']['earliest'] = Carbon::parse($searchCriteria->availability_earliest);
    $criteria['criteria']['availability']['latest'] = Carbon::parse($searchCriteria->availability_latest);
    // error_log(json_encode($criteria));
    return $criteria;
  }

  /**
   * Create search criteria and get the all matched results from DAT.
   * @param $request
   * @return array
   * @throws Exception
   */
  public function searchLoads($request): array {
    if (request('ezpapelEquipmentType')) {
      if (
        config('constant.ezpapel_equipment_type_to_dat')[request('ezpapelEquipmentType')]
        == 'NO_MATCH'
      ) {
        return [];
      }
    }

    //try {
    $currentUserId = $this->getAuthUserId();
    $currentAdminCompanyId = $this->getAdminCompanyId();
    $existingSearchCriteria = $this->getOrCreateSearchCriteriaFromRequest($request, $currentUserId);
    $datSearchId = $existingSearchCriteria->search_id;

    if (empty($datSearchId)) {
      $searchCriteriaBodyRequest = $this->generateRequestBodyFromCriteriaModelInstance($existingSearchCriteria);

      /* create search criteria on DAT. */
      $searchCriteriaResponse = $this->datHelper->createSearchCriteria(
        $searchCriteriaBodyRequest,
        $currentUserId,
        $currentAdminCompanyId
      ) ?? '';

      $datSearchId = $searchCriteriaResponse->id ?? '';

      if (empty($datSearchId)) {
        throw new Exception('Failed to create search criteria for DAT.');
      }

      $existingSearchCriteria->search_id = $datSearchId;
      $existingSearchCriteria->expires_when = Carbon::parse($searchCriteriaResponse->expiresWhen) ?? '';
      $existingSearchCriteria->save();
    }

    $carbonNow = Carbon::Now();
    return collect($this->datHelper->datMatchResultsUsingSearchId(
      $currentUserId,
      $currentAdminCompanyId,
      $datSearchId
    ))
      ->filter(function ($item) use ($carbonNow) {
        if (
          $item->availability->latest &&
          Carbon::parse($item->availability->latest) <= $carbonNow
        ) {
          return false;
        }
        return $item->status == 'ACTIVE';
      })->map(function ($item) use ($datSearchId) {
        if (!empty($item->origin->point)) {
          $origin = [
            'city' => $item->origin->point->city ?? '',
            'state' => $item->origin->point->state ?? '',
            'latitude' => $item->origin->point->latitude ?? null,
            'longitude' => $item->origin->point->longitude ?? null,
            'deadhead' => $item->origin->point->deadhead->miles ?? null,
          ];
        } else {
          $origin = [
            'states' => $item->origin->area->states ?? [],
          ];
        }

        if (!empty($item->destination->point)) {
          $destination = [
            'city' => $item->destination->point->city ?? '',
            'state' => $item->destination->point->state ?? '',
            'latitude' => $item->destination->point->latitude ?? null,
            'longitude' => $item->destination->point->longitude ?? null,
            'deadhead' => $item->destination->point->deadhead->miles ?? null,
          ];
        } else {
          $destination = [
            'states' => $item->destination->area->states ?? [],
          ];
        }

        $bookUrl = '';
        if (in_array($item->bookNow->method ?? null, [
          "REDIRECT", "NONBOOKABLE_OFFER_RATE",
          "BOOKABLE_NEGOTIABLE_DAT_PORTAL", "BOOKABLE_DAT_PORTAL"
        ])) {
          $bookUrl = $item->bookNow->url ?? '';
        }

        $capacity = $item->specs->requiredCapacity ?? '';
        if ($capacity == 'FULL') {
          $capacity = 'Full';
        } else if ($capacity == 'PARTIAL') {
          $capacity = 'Partial';
        }

        $equipmentType = '';
        if ($item->specs->requiredEquipmentType ?? '') {
          $equipmentType = config('constant.dat_equipment_types')[$item
            ->specs->requiredEquipmentType] ?? $item->specs->requiredEquipmentType;
        }

        $factoring = '';
        if ($item->factoring == "TRIUMPH") {
          $factoring = 'Triumph';
        } else if ($item->factoring == "TRIUMPH_PLUS") {
          $factoring = 'Triumph plus';
        }


        $pickupDateWithYear = Carbon::parse($item->availability->earliest)
          ->setTimezone('America/Los_Angeles')->format('Y/m/d') ?? '';
        $pickupDate = substr($pickupDateWithYear, 5);

        if ($item->availability->latest) {
          $pickupLatestWithYear = Carbon::parse($item->availability->latest)
            ->subSeconds(2)->setTimezone('America/Los_Angeles')->format('Y/m/d');
          if ($pickupLatestWithYear > $pickupDateWithYear) {
            $pickupDate = $pickupDate . ' - ' . substr($pickupLatestWithYear, 5);
          }
        }

        /*$posterPhone = $item->poster->contact->phone->number ?? '';
          if (strlen($posterPhone) == 10) {
            $posterPhone = sprintf(
              "%s-%s-%s",
              substr($posterPhone, 0, 3),
              substr($posterPhone, 3, 3),
              substr($posterPhone, 6)
            );
          }
          if ($item->poster->contact->phone->extension ?? '') {
            $posterPhone .= '-' . $item->poster->contact->phone->extension;
          }*/

        return [
          'loadBoard' => "DAT",
          'searchId' => $datSearchId ?? '',
          'matchId' => $item->matchId ?? '',
          'id' => $item->matchId ?? '',
          /*'utcPickupTime' => [
              "earliest" => Carbon::parse($item->availability->earliest) ?? '',
              "latest" => Carbon::parse($item->availability->latest)->subSeconds(2) ?? ''
            ],*/
          'origin' => $origin,
          'destination' => $destination,
          'bookUrl' => $bookUrl,
          'capacity' => $capacity,
          'comments' => collect($item->comments)->pluck('comment')->toArray() ?? [],
          'createdWhen' => $item->createdWhen,
          'creditScore' => $item->credit->score ?? null,
          'daysToPay' => $item->credit->daysToPay ?? null,
          'distance' => $item->tripLength->distanceMiles ?? null,
          'equipmentType' => $equipmentType,
          'factoring' => $factoring,
          'lengthInFeet' => $item->specs->lengthInFeet ?? null,
          'pickupDate' => $pickupDate,
          'poster' => [
            'company' => $item->poster->company ?? '',
            'city' => $item->poster->city ?? '',
            'state' => $item->poster->state ?? '',
            'phone' => $item->poster->contact->phone->number ?? '',
            'extension' => $item->poster->contact->phone->extension ?? '',
            'email' => $item->poster->contact->email ?? '',
          ],
          'rate' => $item->rate->baseRate->amount ?? null,
          'weightInPounds' => $item->specs->weightInPounds ?? null,
        ];
      })->toArray() ?? [];
    /*} catch (Exception $exception) {
      throw new Exception($exception);
    }*/
  }

  /**
   * Retrieve the details of a specific match for a specified search Load Details
   * @param $request
   * @return array
   * @throws Exception
   */
  public function getLoadDetails($request): array {
    // try {
    $response = $this->datHelper->getLoadMatchDetails(
      $this->getAuthUserId(),
      $this->getAdminCompanyId(),
      $request->searchId,
      $request->matchId
    ) ?? null;

    if (empty($response)) {
      throw new Exception('Failed to get match details from DAT.');
    }

    if (!empty($response->origin->point)) {
      $origin = (array)$response->origin->point ?? [];
    } else {
      $origin = (array)$response->origin->area ?? [];
    }

    if (!empty($response->destination->point)) {
      $destination = (array)$response->destination->point ?? [];
    } else {
      $destination = (array)$response->destination->area ?? [];
    }

    return [
      'loadBoard' => 'DAT',
      'searchId' => $request->searchId,
      'matchId' => $response->matchId ?? '',
      'status' => $response->status ?? '',
      'utcPickupTime' => [
        "earliest" => Carbon::parse($response->availability->earliest) ?? '',
        "latest" => Carbon::parse($response->availability->latest)->subSeconds(2) ?? ''
      ],
      'origin' => $origin,
      'destination' => $destination,
      'rate' => $response->rate->baseRate->amount ?? null,
      'distance' => $response->tripLength->distanceMiles ?? null,
      'poster' => [
        'company' => $response->poster->company ?? '',
        'city' => $response->poster->city ?? '',
        'state' => $response->poster->state ?? '',
        'phone' => $response->poster->contact->phone->number ?? '',
        'email' => $response->poster->contact->email ?? ''
      ],
      'bookUrl' => $response->bookNow->url ?? '',
      'equipmentType' => config('constant.dat_equipment_types')[$response->specs->requiredEquipmentType]
        ?? $response->specs->requiredEquipmentType,
      'lengthInFeet' => $response->specs->lengthInFeet ?? null,
      'weightInPounds' => $response->specs->weightInPounds ?? null,
      'capacity' => $response->specs->requiredCapacity ?? null,
      'comments' => collect($response->comments)->pluck('comment')->toArray() ?? [],
      'commodity' => $response->commodity->details ?? '',
      'pickupHours' => $response->pickupHours ?? '',
      'deliveryHours' => $response->dropOffHours ?? ''
    ];
    /*} catch (Exception $exception) {
      throw new Exception($exception);
    }*/
  }

  /**
   * Cron Job to delete expired search criteria.
   * @return void
   * @throws Exception
   */
  public function cronToDeleteExpiredSearchCriteria() {
    Log::channel('cron')->notice(
      'cronToDeleteExpiredSearchCriteria starts at ' .
        Carbon::now()->toDateTimeString()
    );
    try {
      DatSearchCriteria::where('expires_when', '<=', Carbon::now())->delete();
    } catch (Exception $exception) {
      Log::channel('cron')->notice(json_encode($exception->getMessage()));
      // throw new Exception($exception);
    }
  }
}
