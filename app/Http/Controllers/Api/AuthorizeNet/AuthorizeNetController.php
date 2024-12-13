<?php

namespace app\Http\Controllers\Api\AuthorizeNet;

use App\Http\Controllers\Controller;
use App\Http\Requests\Api\AuthorizeNet\AuthorizeNetConnectRequest;
use App\Http\Requests\Api\AuthorizeNet\ProcessPaymentRequest;
use App\Services\AuthorizeNet\AuthorizeNetService;
use Exception;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class AuthorizeNetController extends Controller {
  protected $authorizeNetService;

  public function __construct(AuthorizeNetService $authorizeNetService) {
    $this->authorizeNetService = $authorizeNetService;
  }

  /**
   * Display a listing of the resource.
   *
   * @return \Illuminate\Http\JsonResponse
   */
  public function getClientKeyByInvoice(Request $request) {
    try {
      return $this->respondWithData($this->authorizeNetService->getClientKeyByInvoice(
        $request->invoiceId,
        $request->refreshPublicClientKey
      ));
    } catch (Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }

  /**
   * @param  ProcessPaymentRequest  $request
   * @return JsonResponse|mixed
   */
  public function processPayment(ProcessPaymentRequest $request) {
    try {
      return $this->respondWithData($this->authorizeNetService
        ->processPayment($request));
    } catch (Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }

  /**
   * @param  AuthorizeNetConnectRequest $request
   * @return JsonResponse|mixed
   */
  public function connect(AuthorizeNetConnectRequest $request) {
    try {
      $this->authorizeNetService->createOrUpdateKey(
        $request->loginId,
        $request->transactionKey,
        $request->publicClientKey
      );
      return $this->respondOk();
    } catch (\Exception $e) {
      Log::error($e);
      return $this->respondInternalError($e->getMessage(), [], $e);
    }
  }

  /**
   * Get AuthorizeNet account connection status.
   * @return JsonResponse
   */
  public function getConnectionStatus(): JsonResponse {
    try {
      return $this->respondOK($this->authorizeNetService->getConnectionStatus());
    } catch (Exception $e) {
      Log::error($e);
      return $this->respondInternalError($e->getMessage(), [], $e);
    }
  }

  /**
   * Get AuthorizeNet keys by user’s company id
   * @return JsonResponse|mixed
   */
  public function getKey() {
    try {
      return $this->respondWithData($this->authorizeNetService->getKey());
    } catch (Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }
}
