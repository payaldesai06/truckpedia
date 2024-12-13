<?php

namespace App\Http\Controllers\Api\ExternalLoadBoards;

use App\Http\Controllers\Controller;
use App\Http\Requests\Api\ExternalLoadBoards\LoadBoardCrawler\SearchLoadsRequest;
use App\Services\ExternalLoadBoards\LoadBoardCrawlerService;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Log;

class LoadBoardCrawlerController extends Controller {
  protected $loadboardCrawlerService;

  public function __construct(LoadBoardCrawlerService $loadboardCrawlerService) {
    $this->loadboardCrawlerService = $loadboardCrawlerService;
  }

  public function searchLoads(SearchLoadsRequest $request): JsonResponse {
    try {
      $response = $this->loadboardCrawlerService->searchLoads($request);
      return $this->respondWithData($response);
    } catch (\Exception $e) {
      Log::channel('slack')->critical($e->getMessage());
      return $this->respondWithData([]);
      // return $this->respondInternalError($e->getMessage(), [], $e);
    }
  }
}
