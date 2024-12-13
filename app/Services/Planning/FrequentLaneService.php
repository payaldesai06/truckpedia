<?php


namespace App\Services\Planning;

use App\Models\CompanyFrequentLane;
use Exception;
use Illuminate\Support\Facades\DB;

class FrequentLaneService {

  /**
   * Create frequent lane
   * @return array
   * @throws Exception
   */
  public function createFrequentLane(): array {
    $frequentLane = $this->createOrUpdateFrequentLane();
    return ['id' => $frequentLane->id];
  }


  /**
   * Get frequent lane by id
   * @return array
   * @throws Exception
   */
  public function getFrequentLane(): array {
    $frequentLane = CompanyFrequentLane::where('id', request('id'))->where('company_id', getAuthAdminCompanyId())
      ->select('id', 'origin_street_address', 'origin_city', 'origin_state', 'origin_latitude', 'origin_longitude', 'origin_deadhead', 'dest_street_address', 'dest_city', 'dest_state', 'dest_latitude', 'dest_longitude', 'dest_deadhead', 'target_price', 'target_rpm', 'target_weight')->first();
    if (empty($frequentLane)) {
      throw new Exception(config('response.frequentLane.not_found'));
    }
    return [
      'id' => $frequentLane->id ?? null,
      'origin' => [
        'streetAddress' => $frequentLane->origin_street_address,
        'city' => $frequentLane->origin_city,
        'state' => $frequentLane->origin_state,
        'latitude' => $frequentLane->origin_latitude,
        'longitude' => $frequentLane->origin_longitude,
        'deadhead' => $frequentLane->origin_deadhead
      ],
      'destination' => [
        'streetAddress' => $frequentLane->dest_street_address,
        'city' => $frequentLane->dest_city,
        'state' => $frequentLane->dest_state,
        'latitude' => $frequentLane->dest_latitude,
        'longitude' => $frequentLane->dest_longitude,
        'deadhead' => $frequentLane->dest_deadhead
      ],
      'targetPrice' => $frequentLane->target_price ?? null,
      'targetRpm' => $frequentLane->target_rpm ?? null,
      'targetWeight' => $frequentLane->target_weight ?? null,
    ];
  }

  /**
   * Update frequent lane
   * @return mixed
   * @throws Exception
   */
  public function updateFrequentLane() {
    return $this->createOrUpdateFrequentLane();
  }

  /**
   * Get all frequent lane
   * @return mixed
   * @throws Exception
   */
  public function getFrequentLaneAll() {
    return CompanyFrequentLane::select('id', 'origin_street_address', 'origin_city', 'origin_state', 'origin_latitude', 'origin_longitude', 'origin_deadhead', 'dest_street_address', 'dest_city', 'dest_state', 'dest_latitude', 'dest_longitude', 'dest_deadhead', 'target_price', 'target_rpm', 'target_weight')
      ->where('company_id', getAuthAdminCompanyId())
      ->orderBy('id', 'desc')
      ->get();
  }


   /**
   * Get the list of frequent lane
   * @return mixed
   * @throws Exception
   */
  public function getFrequentLaneList() {
    $perPage = request('perPage') ?? config('response.per_page');
    return CompanyFrequentLane::select('id', 'origin_street_address', 'origin_city', 'origin_state', 'origin_latitude', 'origin_longitude', 'origin_deadhead', 'dest_street_address', 'dest_city', 'dest_state', 'dest_latitude', 'dest_longitude', 'dest_deadhead', 'target_price', 'target_rpm', 'target_weight')
      ->where('company_id', getAuthAdminCompanyId())
      ->orderBy('id', 'desc')
      ->paginate($perPage);
  }

  /**
   * Create Or Update frequent lane using validated request data.
   * @return mixed
   */
  private function createOrUpdateFrequentLane() {
    return DB::transaction(function () {
      $getValidatedData = $this->getValidatedData();
      $frequentLaneId = request('id');
      if (!empty($frequentLaneId)) {
        $frequentLane = CompanyFrequentLane::where('id', $frequentLaneId)->select('id')->first();
        $frequentLane->fill($getValidatedData)->save();
      } else {
        $frequentLane = CompanyFrequentLane::create($getValidatedData);
      }
      return $frequentLane;
    });
  }

  /**
   * Validated request data to create frequent lane.
   * @return array
   * @throws Exception
   */
  private function getValidatedData(): array {
    return [
      'company_id' => getAuthAdminCompanyId(),
      'origin_street_address' => request('origin.streetAddress') ?? null,
      'origin_city' => request('origin.city') ?? null,
      'origin_state' => request('origin.state') ?? null,
      'origin_latitude' => request('origin.latitude') ?? null,
      'origin_longitude' => request('origin.longitude') ?? null,
      'origin_deadhead' => request('origin.deadhead') ?? null,
      'dest_street_address' => request('destination.streetAddress') ?? null,
      'dest_city' => request('destination.city') ?? null,
      'dest_state' => request('destination.state') ?? null,
      'dest_latitude' => request('destination.latitude') ?? null,
      'dest_longitude' => request('destination.longitude') ?? null,
      'dest_deadhead' => request('destination.deadhead') ?? null,
      'target_price' => request('targetPrice') ?? null,
      'target_rpm' => request('targetRpm') ?? null,
      'target_weight' => request('targetWeight') ?? null
    ];
  }
}
