<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\Api\Customization\CustomizationRequest;
use App\Http\Resources\Customization\CustomizationResource;
use App\Services\CustomizationService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class CustomizationController extends Controller {
  protected $customizationService;

  public function __construct(CustomizationService $customizationService) {
    $this->customizationService = $customizationService;
  }

  /**
   * Get all setting customization
   * @return JsonResponse
   */
  public function getCustomizations(): JsonResponse {
    $customizations = $this->customizationService->getCustomizations();
    return $this->respondWithData(new CustomizationResource($customizations));
  }

  /**
   * Update setting customization.
   * @param CustomizationRequest $request
   * @return JsonResponse
   */
  public function updateCustomizations(CustomizationRequest $request): JsonResponse {
    $customizations = $this->customizationService->updateCustomizations($request);
    return $this->respondWithData(new CustomizationResource($customizations));
  }
}
