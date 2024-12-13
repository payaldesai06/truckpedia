<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\Api\InvoiceV2\CreateInvoiceV2Request;
use App\Http\Requests\Api\InvoiceV2\GetListInvoiceV2Request;
use App\Http\Requests\Api\InvoiceV2\GetPaymentDetailsFromPublicUrlRequest;
use App\Http\Requests\Api\InvoiceV2\UpdateInvoiceV2Request;
use App\Http\Requests\Api\InvoiceV2\MarkPaidInvoiceV2Request;
use App\Http\Resources\InvoiceV2\InvoiceV2Collection;
use App\Services\InvoiceV2Service;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Http\JsonResponse;
use App\Http\Requests\Api\InvoiceV2\CreateInvoiceV2CustomPaymentFieldRequest;
use App\Http\Requests\Api\InvoiceV2\DeleteInvoiceV2Request;
use App\Http\Requests\Api\InvoiceV2\RequestPaymentInvoiceV2Request;

class InvoiceV2Controller extends Controller {
  protected $invoiceService;

  public function __construct(InvoiceV2Service $invoiceService) {
    $this->invoiceService = $invoiceService;
  }

  /**
   * Get the list of invoices (both load invoices & manually created invoices).
   *  @param GetListInvoiceV2Request $request
   * @return JsonResponse|mixed
   */
  public function getInvoiceList(GetListInvoiceV2Request $request) {
    try {
      $invoices = $this->invoiceService->getInvoiceList($request);
      if (request('filter.toDownload')) {
        return $this->respondWithMessageAndPayload(
          $this->invoiceService->invoiceListExport($invoices)
        );
      }
      return $this->respondWithData(new InvoiceV2Collection($invoices));
    } catch (Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }

  /**
   * Create invoice.
   * @param CreateInvoiceV2Request $request
   * @return JsonResponse|mixed
   */
  public function createInvoice(CreateInvoiceV2Request $request) {
    try {
      return $this->respondWithData($this->invoiceService->createInvoice());
    } catch (Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }

  /**
   * Update invoice.
   * @param UpdateInvoiceV2Request $request
   * @return JsonResponse|mixed
   */
  public function updateInvoice(UpdateInvoiceV2Request $request) {
    try {
      $isUpdated = $this->invoiceService->updateInvoice();
      if (!$isUpdated) {
        return $this->respondInternalError(config('response.error'), [], []);
      }
      return $this->respondOk();
    } catch (Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }

  /**
   * Mark paid invoice.
   * @param MarkPaidInvoiceV2Request $request
   * @return JsonResponse|mixed
   */
  public function markPaid(MarkPaidInvoiceV2Request $request) {
    try {
      $isUpdated = $this->invoiceService->markPaid($request);
      if (!$isUpdated) {
        return $this->respondInternalError(config('response.error'), [], []);
      }
      return $this->respondOk();
    } catch (Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }

  /**
   * Create invoice custom payment field.
   * @param CreateInvoiceV2CustomPaymentFieldRequest $request
   * @return JsonResponse|mixed
   */
  public function createInvoiceV2CustomPaymentField(CreateInvoiceV2CustomPaymentFieldRequest $request) {
    try {
      return $this->respondWithData($this->invoiceService->createInvoiceV2CustomPaymentField($request));
    } catch (Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }

  /**
   * Get invoice custom payment fields.
   * @return JsonResponse|mixed
   */
  public function getInvoiceV2CustomPaymentFields() {
    try {
      return $this->respondWithData($this->invoiceService->getInvoiceV2CustomPaymentFields());
    } catch (Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }

  /**
   * Get invoice by invoiceId
   * @return JsonResponse|mixed
   */
  public function getInvoice() {
    try {
      return $this->respondWithData($this->invoiceService->getInvoice());
    } catch (Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }

  /**
   * To send out email and pdf again if the recipient didn’t receive the previous email
   * @param RequestPaymentInvoiceV2Request $request
   * @return JsonResponse|mixed
   */
  public function requestPayment(RequestPaymentInvoiceV2Request $request) {
    try {
      $this->invoiceService->requestPayment($request);
      return $this->respondOk();
    } catch (Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }

  /**
   * Get the next invoice number
   * @return JsonResponse|mixed
   */
  public function getNextInvoiceNumber() {
    try {
      return $this->respondWithData($this->invoiceService->getNextInvoiceNumber());
    } catch (Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }

  /**
   * delete invoice
   * @return JsonResponse|mixed
   */
  public function deleteInvoice(DeleteInvoiceV2Request $request) {
    try {
      $isDeleted = $this->invoiceService->deleteInvoice($request);
      if (!$isDeleted) {
        return $this->respondInternalError(config('response.error'), [], []);
      }
      return $this->respondOk();
    } catch (Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }

  /**
   * @param  GetPaymentDetailsFromPublicUrlRequest  $request
   * @return JsonResponse|mixed
   */
  public function getPaymentDetailsFromPublicUrl(GetPaymentDetailsFromPublicUrlRequest $request) {
    try {
      return $this->respondWithData($this->invoiceService
        ->getPaymentDetailsFromPublicUrl($request->url));
    } catch (Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }
}
