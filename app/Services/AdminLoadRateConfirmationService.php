<?php

namespace App\Services;

use App\Models\Load;
use App\Models\LoadRateConfirmation;
use Exception;

class AdminLoadRateConfirmationService
{
    private $loadService;

    public function __construct(LoadService $loadService)
    {
        $this->loadService = $loadService;
    }

  /**
   * Create a new rate confirmation for a load.
   * @return RateConfirmation
   * @throws Exception if the load is not found
   */
    public function createRateConfirmation()
    {
        $load = Load::select('id')->where('id', request('load'))
          ->where('admin_company_detail_id', getAuthAdminCompanyId())->first();
        if (!$load) {
          throw new Exception('Load not found');
        }
        $rateConfirmationFileName = request('file_name');

        return $load->rateConfirmations()->create([
            'file_name' => $rateConfirmationFileName,
            'file_name_alias' => $rateConfirmationFileName,
            'original_file_name' => request('originalFileName') ?? null,
        ]);
    }

    public function deleteRateConfirmation()
    {
        $rateConfirmation = LoadRateConfirmation::query()
            ->where('load_id', '=', request('load'))
            ->where('id', '=', request('rateConfirmation'))
            ->firstOrFail();

        return tap($rateConfirmation, function ($rateConfirmation) {
            $rateConfirmation->delete();
        });
    }
}
