<?php

namespace App\Http\Controllers\Api\ExternalLoadParser;

use App\Http\Controllers\Controller;
use App\Services\ExternalLoadParser\EmailLoadParserService;
use App\Http\Requests\Api\ExternalLoadParser\EmailLoadParser\EmailLoadParserRequest;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Log;

class EmailLoadParserController extends Controller {
  protected $emailLoadParserService;

  public function __construct(EmailLoadParserService $emailLoadParserService) {
    $this->emailLoadParserService = $emailLoadParserService;
  }

  /**
   * Add New Tender Load.
   * @param EmailLoadParserRequest $request
   * @return JsonResponse
   */
  public function addTenderLoad(EmailLoadParserRequest $request): JsonResponse {
    try {
      $response = $this->emailLoadParserService->addTenderLoad($request);
      return $this->respondWithMessageAndPayload($response, 'Load is successfully created!');
    } catch (\Exception $exception) {
      // TODO(zbu): need to think if we need to send mail here.
      $this->emailLoadParserService->sendMailForTenderLoadError($exception->getMessage());
      Log::error($exception);
      Log::channel('slack')->emergency('EmailLoadParser: addTenderLoad wrong: ' . $exception->getMessage() . json_encode(request()->all()));
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }
}
