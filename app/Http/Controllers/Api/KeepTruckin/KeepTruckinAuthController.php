<?php

namespace App\Http\Controllers\Api\KeepTruckin;

use App\Http\Controllers\Controller;
use App\Services\KeepTruckin\KeepTruckinAuthService;
use App\Services\KeepTruckin\KeepTruckinService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class KeepTruckinAuthController extends Controller {
  private $keepTruckinAuthService;

  public function __construct(KeepTruckinAuthService $keepTruckinAuthService) {
    $this->keepTruckinAuthService = $keepTruckinAuthService;
  }

  public function connectToKeepTruckin() {
    try {
      return $this->respondWithData(['redirect' => $this->keepTruckinAuthService->connectToKeepTruckin()]);
    } catch (\Exception $e) {
      return $this->respondInternalError($e->getMessage(), [], $e);
    }
  }

  public function disconnectToKeepTruckin() {
    try {
      $this->keepTruckinAuthService->disconnectKeepTruckin();
      return $this->respondWithData(['redirect' => '/account-setting']);
    } catch (\Exception $e) {
      return $this->respondInternalError($e->getMessage(), [], $e);
    }
  }

  public function connectionStatus() {
    try {
      $status = $this->keepTruckinAuthService->connectionStatus();
      return $this->respondOk($status);
    } catch (\Exception $e) {
      return $this->respondInternalError($e->getMessage(), [], $e);
    }
  }

  public function processKeepTruckinResponse(Request $request) {
    try {
      $this->keepTruckinAuthService->processKeepTruckinResponse($request);

      $keepTruckinService = new KeepTruckinService();
      $keepTruckinService->syncTrucks();
      $keepTruckinService->syncTrailers();
      return $this->respondWithData(['redirect' => '/account-setting']);
    } catch (\Exception $e) {
      Log::error($e);
      return $this->respondInternalError($e->getMessage(), [], $e);
    }
  }
}
