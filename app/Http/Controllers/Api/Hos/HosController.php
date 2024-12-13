<?php

namespace App\Http\Controllers\Api\Hos;

use App\Http\Controllers\Controller;
use App\Services\Hos\HosService;
use Exception;
use GuzzleHttp\Exception\GuzzleException;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Log;

class HosController extends Controller {
  protected $hosService;

  public function __construct(HosService $hosService) {
    $this->hosService = $hosService;
  }

  /**
   * Get the hours of service data
   * @return JsonResponse|mixed
   * @throws GuzzleException
   */
  public function getHos() {
    try {
      return $this->respondWithData(['hos' => $this->hosService->getHos()]);
    } catch (Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }
}
