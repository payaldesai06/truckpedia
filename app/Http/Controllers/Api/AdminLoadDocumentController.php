<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\Api\AdminLoadDocument\CreateAdminLoadDocumentRequest;
use App\Http\Resources\Load\LoadImageResource;
use App\Services\AdminLoadDocumentService;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use App\Http\Requests\Api\AdminLoadDocument\CreateAdminLoadThirdPartyCarrierInvoiceRequest;
use App\Http\Resources\LoadThirdPartyCarrierInvoice\LoadThirdPartyCarrierInvoiceResource;

class AdminLoadDocumentController extends Controller {
  private $adminLoadDocumentService;

  public function __construct(AdminLoadDocumentService $adminLoadDocumentService) {
    $this->adminLoadDocumentService = $adminLoadDocumentService;
  }

  public function store(CreateAdminLoadDocumentRequest $request) {
    $loadImage = $this->adminLoadDocumentService->createLoadImages();

    return $this->respondCreatedWithPayload(
      new LoadImageResource($loadImage),
      config('response.load_document.create')
    );
  }

  public function destroy() {
    try {
      $this->adminLoadDocumentService->deleteLoadImage();
      return $this->respondDeleted(config('response.load_document.delete'));
    } catch (Exception $e) {
      Log::error($e);
      return $this->respondInternalError($e->getMessage(), [], $e);
    }
  }

  /**
   * Upload load third party carrier invoice
   * @param CreateAdminLoadThirdPartyCarrierInvoiceRequest $request
   * @return mixed
   */
  public function storeThirdPartyCarrierInvoice(CreateAdminLoadThirdPartyCarrierInvoiceRequest $request) {
    return $this->respondCreatedWithPayload(
      $this->adminLoadDocumentService->storeThirdPartyCarrierInvoice(),
      config('response.load_document.create')
    );
  }

  /**
   * Delete load third party carrier invoice
   * @return JsonResponse
   */
  public function destroyThirdPartyCarrierInvoice() {
    try {
      $this->adminLoadDocumentService->destroyThirdPartyCarrierInvoice();
      return $this->respondDeleted(config('response.load_document.delete'));
    } catch (Exception $e) {
      Log::error($e);
      return $this->respondInternalError($e->getMessage(), [], $e);
    }
  }
}
