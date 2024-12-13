<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\Api\Load\CreateLoadInvoiceRequest;
use App\Http\Requests\Api\Load\LoadMassInvoiceGenerationRequest;
use App\Services\LoadInvoiceService;
use Illuminate\Http\Request;

class LoadInvoiceController extends Controller {
  private LoadInvoiceService $loadInvoiceService;

  public function __construct(LoadInvoiceService $loadInvoiceService) {
    $this->loadInvoiceService = $loadInvoiceService;
  }

  public function store(CreateLoadInvoiceRequest $request) {
    try {
      $this->loadInvoiceService->generateInvoice($request);
      return $this->respondCreated(config('response.load_invoice.create'));
    } catch (\Exception $e) {
      return $this->respondInternalError($e->getMessage(), [], $e);
      // $this->respondWithError($e->getMessage());
    }
  }

  public function generateMassInvoice(LoadMassInvoiceGenerationRequest $request) {
    try {
      $this->loadInvoiceService->generateMassInvoice($request);
      return $this->respondCreated(config('response.load_invoice.create'));
    } catch (\Exception $e) {
      return $this->respondInternalError($e->getMessage(), [], $e);
    }
  }
}
