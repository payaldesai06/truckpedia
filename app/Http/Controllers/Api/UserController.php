<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\AddUserRequest;
use App\Http\Requests\Api\User\UpdateFcmTokenRequest;
use App\Http\Requests\EditUserRequest;
use App\Http\Resources\UserCollection;
use App\Http\Resources\UserResource;
use App\Models\User;
use App\Services\UserService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Exception;
use Illuminate\Support\Facades\Log;

// It seems that this controller is not used at all except updateFcmToken().
class UserController extends Controller {
  private $userService;

  public function __construct(UserService $userService) {
    $this->userService = $userService;
  }

  public function show() {
    //        Hash::make()
    return $this->respondWithData(auth()->user());
  }

  // Buggy code, not used.
  public function logout(Request $request) {
    //        dd($request->bearerToken());
    auth()->user()->token()->revoke();
    return $this->respondWithMessage('User Logged out successfully.');
  }

  // Buggy code, not used.
  public function getUserDatatable() {
    $users = $this->userService->getUserDatatable();
    return $this->respondWithData(new UserCollection($users));
  }

  public function addUser(AddUserRequest $request) {
    $this->userService->addUser();
    return $this->respondWithMessage('User added successfully.');
  }

  // Buggy code, not used.
  public function getUser(Request $request, User $user) {
    return $this->respondWithData(new UserResource($user));
  }

  public function updateUser(EditUserRequest $request, User $user) {
    $this->userService->updateUser($user);
    return $this->respondWithMessage('User updated successfully.');
    //        return $this->respondWithData(new UserResource($user));
  }

  public function destroy(Request $request, User $user) {
    $this->userService->deleteUser($user);
    return $this->respondWithMessage('User deleted successfully.');
  }

  /**
   * Update FCM token to get notification.
   * @param UpdateFcmTokenRequest $request
   * @return JsonResponse
   */
  public function updateFcmToken(UpdateFcmTokenRequest $request): JsonResponse {
    $this->userService->updateFcmToken($request);
    return $this->respondOk();
  }

  /**
   * Temp location.
   * Get App Latest Version.
   * @return JsonResponse|mixed
   * @throws Exception
   */
  public function getAppLatestVersion() {
    try {
      return $this->respondWithData($this->userService->getAppLatestVersion());
    } catch (Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }

  /**
   * Get Production Website Version.
   * @return JsonResponse|mixed
   */
  public function getEzpapelWebsiteVersion() {
    try {
      return $this->respondWithData(['version' => config('constant.ezpapelWebsiteVersion')]);
    } catch (Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }
}
