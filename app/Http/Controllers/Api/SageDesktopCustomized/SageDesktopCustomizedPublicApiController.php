<?php

namespace App\Http\Controllers\Api\SageDesktopCustomized;

use App\Http\Controllers\Controller;
use App\Services\SageDesktopCustomized\SageDesktopCustomizedPublicApiService;
use Exception;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Log;
use App\Http\Requests\Api\SageDesktopCustomized\GetInvoiceSageDesktopCustomizedPublicApiRequest;
use App\Http\Requests\Api\SageDesktopCustomized\ConfirmReceivedInvoiceListSageDesktopCustomizedPublicApiRequest;

class SageDesktopCustomizedPublicApiController extends Controller {
  protected $sageDesktopCustomizedPublicApiService;

  public function __construct(SageDesktopCustomizedPublicApiService $sageDesktopCustomizedPublicApiService) {
    $this->sageDesktopCustomizedPublicApiService = $sageDesktopCustomizedPublicApiService;
  }

  /**
   * Get Invoices.
   * @param GetInvoiceSageDesktopCustomizedPublicApiRequest $request
   * @return mixed
   * @throws Exception
   */
  public function getInvoices(GetInvoiceSageDesktopCustomizedPublicApiRequest $request) {
    try {
      $response = $this->sageDesktopCustomizedPublicApiService->getInvoices();
      if (!is_array($response)) {
        return $this->respondOk();
      } else {
        return $this->respondWithData($response);
      }
    } catch (Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }

  /**
   * Confirm Received Invoices.
   * @param ConfirmReceivedInvoiceListSageDesktopCustomizedPublicApiRequest $request
   * @return JsonResponse|mixed
   */
  public function confirmReceivedInvoices(ConfirmReceivedInvoiceListSageDesktopCustomizedPublicApiRequest $request) {
    try {
      $this->sageDesktopCustomizedPublicApiService->confirmReceivedInvoices();
      return $this->respondOk();
    } catch (Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }
}
