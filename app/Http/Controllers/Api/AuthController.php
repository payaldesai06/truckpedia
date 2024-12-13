<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\Api\Auth\ForgetPasswordRequest;
use App\Http\Requests\Api\Auth\LoginRequest;
use App\Http\Requests\Api\Auth\RegistrationRequest;
use App\Http\Requests\Api\Auth\OneStepUserRegistrationRequest;
use App\Http\Resources\Admin\AdminWithTokenResource;
use App\Http\Resources\User\UserResource;
use App\Services\AuthService;
use Exception;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class AuthController extends Controller {
  protected $authService;

  public function __construct(AuthService $authService) {
    $this->authService = $authService;
  }

  public function login(LoginRequest $request) {
    if ($user = $this->authService->login()) {
      $accessToken = $user->createToken('authToken')->accessToken;
      return $this->respondWithMessageAndPayload(
        new UserResource($user, $accessToken),
        'Congratulations! You have logged in successfully.'
      );
    }

    return $this->respondBadRequest('Email/Password is wrong.');
  }

  public function register(RegistrationRequest $request) {
    if ($user = $this->authService->register()) {
      $accessToken = $user->createToken('authToken')->accessToken;
      return $this->respondWithMessageAndPayload(
        new AdminWithTokenResource($user, $accessToken),
        'Congratulations! You have registered successfully.'
      );
    }

    return $this->respondBadRequest('Something went wrong.');
  }

  /**
   * Truckpedia One-Step User registration (User Registration and Business Profile Setup).
   * @param OneStepUserRegistrationRequest $request
   * @return JsonResponse|mixed
   */
  public function truckpediaOneStepUserRegistration(OneStepUserRegistrationRequest $request) {
    try {
      DB::transaction(function () use ($request) {
        $businessUrl = strtolower($request->business_url) ?? null;
        if (
          !empty($businessUrl)
          && !isValidBusinessUrlAndNotExist($businessUrl)
        ) {
          throw new Exception(config('response.url.format_invalid'));
        }

        /* validate Custom domain. */
        $customDomain = strtolower($request->customDomain) ?? null;
        if (
          !empty($customDomain)
          && !isValidCustomDomainAndNotExist($customDomain)
        ) {
          throw new Exception(config('response.customDomain.not_available'));
        }

        $user = $this->authService->register();
        if (empty($user) || empty($user->id)) {
          throw new Exception(config('response.error'));
        }
        Auth::loginUsingId($user->id);
        app('App\Http\Controllers\Api\AdminCompanyProfileSetupController')->setupCompanyProfile();
      });

      return $this->respondWithMessageAndPayload(
        new AdminWithTokenResource(Auth::user(), $this->authService->getAuthUserWithToken()->access_token),
        'Congratulations! Your company profile setup successfully.'
      );
    } catch (Exception $e) {
      Log::error($e);
      return $this->respondInternalError($e->getMessage(), [], $e);
    }
  }

  public function logout() {
    $this->authService->logout();

    return $this->respondWithMessage('You logout successfully.');
  }

  public function authUser() {
    return $this->respondWithData(new UserResource(auth()->user()));
  }

  public function forgetPassword(ForgetPasswordRequest $request) {
    $this->authService->forgetPassword();
    return $this->respondWithMessage('An Email has been sent to set new password.');
  }
}
