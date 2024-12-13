<?php

namespace App\Http\Controllers\Api\Stedi;

use App\Http\Controllers\Controller;
use App\Services\Stedi\StediLoadParserService;
use Exception;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Log;

class StediLoadParserController extends Controller {
  protected $stediLoadParserService;

  public function __construct(StediLoadParserService $stediLoadParserService) {
    $this->stediLoadParserService = $stediLoadParserService;
  }

  /**
   * Handle Webhook Response of Stedi EDI to JSON (Inbound).
   * @return JsonResponse|void
   */
  public function handleStediWebhook() {
    try {
      return $this->respondWithData($this->stediLoadParserService->handleStediWebhook());
    } catch (Exception $exception) {
      Log::error($exception);
      Log::channel('slack')->emergency($exception->getMessage() . ' & Payload: ' . json_encode(request()->all()));
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }
}
