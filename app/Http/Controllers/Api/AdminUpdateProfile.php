<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\Api\Auth\ChangeProfileRequest;
use App\Http\Requests\Api\Auth\GetUserProfileFileUploadUrlRequest;
use App\Http\Resources\User\UserResource;
use App\Services\AuthService;
use Illuminate\Http\Request;
use Exception;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Auth;

class AdminUpdateProfile extends Controller {
  protected $authService;

  public function __construct(AuthService $authService) {
    $this->authService = $authService;
  }

  public function updateProfile(ChangeProfileRequest $request) {
    $user = $this->authService->updateProfile();

    return $this->respondUpdatedWithPayload(new UserResource(Auth::user()));

    // return $this->respondWithMessage('Your profile update successfully.');
    // return $this->respondWithMessageAndPayload(
    //     new AdminChangeProfileResource($user),
    //     'Your profile update successfully.'
    // );
  }

  /**
   * Generate pre-signed profile url
   * @param GetUserProfileFileUploadUrlRequest $request
   * @return JsonResponse
   */
  public function getUserFileUploadUrl(
    GetUserProfileFileUploadUrlRequest $request
  ): JsonResponse {
    try {
      return $this->respondWithMessageAndPayload(
        $this->authService->getUserFileUploadUrl($request)
      );
    } catch (Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }
}
