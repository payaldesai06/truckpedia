<?php

namespace App\Services\ExternalRouting;

use App\Models\PcMiler;
use Exception;
use Illuminate\Support\Facades\DB;

class PcMilerService {

  /**
   * Get PC Miler api key
   * @return mixed
   * @throws Exception
   */
  public function getApiKey() {
    return PcMiler::select('api_key', 'data_version')
      ->where('company_id', getAuthAdminCompanyId())
      ->first();
  }

  /**
   * Update or create api key and data version.
   * @param $request
   * @return void
   */
  public function updateOrCreateApiKey($request) {
    DB::transaction(function () use ($request) {
      PcMiler::updateOrCreate([
        'company_id' => getAuthAdminCompanyId()
      ], [
        'api_key' => $request->apiKey,
        'data_version' => $request->dataVersion
      ]);
    });
  }
}
