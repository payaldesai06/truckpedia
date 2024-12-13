<?php

namespace App\Http\Controllers\Api\FullyCustomized;

use Exception;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Log;
use App\Http\Controllers\Controller;
use App\Services\FullyCustomized\FcViewService;
use App\Http\Resources\FullyCustomized\FcViewsResource;
use App\Http\Requests\Api\FullyCustomized\CreateFcViewRequest;
use App\Http\Requests\Api\FullyCustomized\UpdateFcViewRequest;
use App\Http\Requests\Api\FullyCustomized\GetFcSingleViewRequest;

class FcViewController extends Controller {
  protected $fcViewService;

  public function __construct(FcViewService $fcViewService) {
    $this->fcViewService = $fcViewService;
  }

  /**
   * @param $submenuId
   * @return JsonResponse|mixed
   */
  public function index($submenuId) {
    try {
      $views = $this->fcViewService->getViews($submenuId);
      return $this->respondWithData(['views' => FcViewsResource::collection($views)]);
    } catch (Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }

  /**
   * @param  CreateFcViewRequest  $request
   * @return JsonResponse|mixed
   */
  public function store(CreateFcViewRequest $request) {
    try {
      $view = $this->fcViewService->createView($request);
      return $this->respondWithData(['id' => $view->id]);
    } catch (Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }

  /**
   * @param  UpdateFcViewRequest  $request
   * @return JsonResponse|mixed
   */
  public function update(UpdateFcViewRequest $request) {
    try {
      $this->fcViewService->updateView($request);
      return $this->respondOk();
    } catch (Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }

  public function show(GetFcSingleViewRequest $request) {
    try {
      $view = $this->fcViewService->getSingleView($request);
      return $this->respondWithData($view);
    } catch (Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }
}
