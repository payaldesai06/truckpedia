<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Services\QuickbooksAuthService;
use Illuminate\Http\Request;

class QuickbooksAuthController extends Controller {
  private $quickbooksAuthService;

  public function __construct(QuickbooksAuthService $quickbooksAuthService) {
    $this->quickbooksAuthService = $quickbooksAuthService;
  }

  public function connectToQuickbooks() {
    try {
      return $this->respondWithData(['redirect' => $this->quickbooksAuthService->connectToQuickbooks()]);
    } catch (\Exception $e) {
      // return $this->respondWithError($e->getMessage());
      return $this->respondInternalError($e->getMessage(), [], $e);
    }
  }

  public function disconnectToQuickbooks() {
    try {
      $this->quickbooksAuthService->disconnectToQuickbooks();
      return $this->respondWithData(['redirect' => '/account-setting']);
    } catch (\Exception $e) {
      // return $this->respondWithError($e->getMessage());
      return $this->respondInternalError($e->getMessage(), [], $e);
    }
  }

  public function connectionStatus() {
    try {

      $status = $this->quickbooksAuthService->connectionStatus();
      return $this->respondOk($status);
    } catch (\Exception $e) {
      // return $this->respondWithError($e->getMessage());
      return $this->respondInternalError($e->getMessage(), [], $e);
    }
  }

  public function connectionStatusAll() {
    try {
      $status = $this->quickbooksAuthService->connectionStatusAll();
      return $this->respondWithData($status);
    } catch (\Exception $e) {
      return $this->respondInternalError($e->getMessage(), [], $e);
    }
  }

  public function processQuickbooksResponse(Request $request) {
    try {
      $this->quickbooksAuthService->processQuickbooksResponse($request);
      return $this->respondWithData(['redirect' => '/account-setting']);
      //return $this->respondOk();
    } catch (\Exception $e) {
      // return $this->respondWithError($e->getMessage());
      return $this->respondInternalError($e->getMessage(), [], $e);
    }
  }

  public function syncToQuickbooks() {
    try {
      $this->quickbooksAuthService->syncToQuickbooks();
      // $this->respondWithMessage('Success!');
    } catch (\Exception $e) {
      // return $this->respondWithError('Hopes!!!' . $e->getMessage());
      return $this->respondInternalError($e->getMessage(), [], $e);
    }
  }
}
