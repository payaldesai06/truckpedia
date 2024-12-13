<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\Api\Qbd\SyncMassInvoiceToQbdRequest;
use App\Services\QbdService;
use Illuminate\Support\Facades\Auth;

class QbdController extends Controller {
  private $qbdService;
  public function __construct(QbdService $qbdService) {
    $this->qbdService = $qbdService;
  }

  public function connectionStatus() {
    try {
      $status = $this->qbdService->connectionStatus();
      return $this->respondOk($status);
    } catch (\Exception $e) {
      return $this->respondInternalError($e->getMessage(), [], $e);
    }
  }

  public function connectionStatusAll() {
    try {
      $status = $this->qbdService->connectionStatusAll();
      return $this->respondWithData($status);
    } catch (\Exception $e) {
      return $this->respondInternalError($e->getMessage(), [], $e);
    }
  }

  public function generateQWC() {
    try {
      // ['qbd_username' => 'value', 'qbd_password' => 'value','xml' => 'xml']
      $retArray = $this->qbdService->generateQWC();
      return $this->respondWithData($retArray);
    } catch (\Exception $e) {
      return $this->respondInternalError($e->getMessage(), [], $e);
    }
  }

  public function disconnect() {
    try {
      $this->qbdService->disconnect();
      return $this->respondWithData(['redirect' => '/account-setting']);
    } catch (\Exception $e) {
      return $this->respondInternalError($e->getMessage(), [], $e);
    }
  }

  public function syncToQbd() {
    try {
      $this->qbdService->syncToQbd();
    } catch (\Exception $e) {
      return $this->respondInternalError($e->getMessage(), [], $e);
    }
  }

  public function syncMassInvoiceToQbd(SyncMassInvoiceToQbdRequest $request) {
    try {
      $this->qbdService->syncMassInvoiceToQbd($request);
    } catch (\Exception $e) {
      return $this->respondInternalError($e->getMessage(), [], $e);
    }
  }
}
