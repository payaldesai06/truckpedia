<?php

namespace App\Http\Controllers\Api\Edi;

use App\Http\Controllers\Controller;
use App\Services\Edi\EdiService;
use Exception;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Log;

class EdiController extends Controller {
  protected $ediService;

  public function __construct(EdiService $ediService) {
    $this->ediService = $ediService;
  }

  /**
   * Handle Webhook Response of EDI to JSON (Inbound).
   * @return JsonResponse|void
   */
  public function upsertLoad() {
    try {
      $this->ediService->upsertLoad();
      return $this->respondOk();
    } catch (Exception $exception) {
      Log::error($exception);
      Log::channel('slack')->emergency($exception->getMessage() . ' & Payload: ' . json_encode(request()->all()));
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }
}
