<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\Api\Load\CreateMassInvoicePaymentRequest;
use App\Http\Requests\Api\Load\MultipleLoadsPaymentReceivedRequest;
use App\Http\Requests\Api\Load\PaymentRequest;
use App\Http\Requests\Api\Load\MarkAsPaidRequest;
use App\Services\LoadPaymentService;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Exception;
use Illuminate\Support\Facades\Log;

class LoadPaymentController extends Controller {
  protected $loadPaymentService;

  public function __construct(LoadPaymentService $loadPaymentService) {
    $this->loadPaymentService = $loadPaymentService;
  }

  public function store(PaymentRequest $request): JsonResponse {
    try {
      $this->loadPaymentService->loadPaymentRequest();
      return $this->respondWithMessage(config('response.load_payment.request'));
    } catch (Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }

  public function update(MarkAsPaidRequest $request): JsonResponse {
    try {
      $this->loadPaymentService->loadPaymentReceived($request);
      return $this->respondWithMessage(config('response.load_payment.received'));
    } catch (Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }

  /**
   * Request for mass payment.
   * @param CreateMassInvoicePaymentRequest $request
   * @return JsonResponse
   */
  public function requestMassInvoicePayment(CreateMassInvoicePaymentRequest $request): JsonResponse {
    try {
      $this->loadPaymentService->requestMassInvoicePayment($request);
      return $this->respondWithMessage(config('response.load_payment.request'));
    } catch (Exception $e) {
      return $this->respondInternalError($e->getMessage(), [], $e);
    }
  }

  public function multipleLoadsPaymentReceived(MultipleLoadsPaymentReceivedRequest $request): JsonResponse {
    try {
      $this->loadPaymentService->multipleLoadsPaymentReceived($request);
      return $this->respondWithMessage(config('response.load_payment.received'));
    } catch (Exception $e) {
      return $this->respondInternalError($e->getMessage(), [], $e);
    }
  }
}
