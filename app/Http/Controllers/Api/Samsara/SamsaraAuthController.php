<?php

namespace App\Http\Controllers\Api\Samsara;

use App\Http\Controllers\Controller;
use App\Services\Samsara\SamsaraService;
use App\Services\Samsara\SamsaraAuthService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class SamsaraAuthController extends Controller {
  private $samsaraService;

  public function __construct(SamsaraAuthService $samsaraService) {
    $this->samsaraService = $samsaraService;
  }

  public function connectToSamsara() {
    try {
      return $this->respondWithData(['redirect' => $this->samsaraService->connectToSamsara()]);
    } catch (\Exception $e) {
      return $this->respondInternalError($e->getMessage(), [], $e);
    }
  }

  public function disconnectToSamsara() {
    try {
      $this->samsaraService->disconnectSamsara();
      return $this->respondWithData(['redirect' => '/account-setting']);
    } catch (\Exception $e) {
      return $this->respondInternalError($e->getMessage(), [], $e);
    }
  }

  public function connectionStatus() {
    try {
      $status = $this->samsaraService->connectionStatus();
      return $this->respondOk($status);
    } catch (\Exception $e) {
      return $this->respondInternalError($e->getMessage(), [], $e);
    }
  }

  public function processSamsaraResponse(Request $request) {
    $samsara = new SamsaraService;
    try {
      $this->samsaraService->processSamsaraResponse($request);
      if (app()->environment('production') && getAuthAdminCompanyId() == 76) {
        // Do not pull for PDCM.
        // TODO: Should add an option to Samsara to let users choose to sync or not.
      } else if (app()->environment('production') && getAuthAdminCompanyId() == 286) {
        $samsara->syncTrucks();
      } else {
        $samsara->syncTrucks();
        $samsara->syncTrailers();
      }
      return $this->respondWithData(['redirect' => '/account-setting']);
    } catch (\Exception $e) {
      Log::error($e);
      return $this->respondInternalError($e->getMessage(), [], $e);
    }
  }
}
