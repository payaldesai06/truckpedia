<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\Api\Auth\DriverLoginRequest;
use App\Http\Resources\User\UserResource;
use App\Services\DriverAuthService;

class DriverAuthController extends Controller
{
  private $driverAuthService;

  public function __construct(DriverAuthService $driverAuthService)
  {
    $this->driverAuthService = $driverAuthService;
  }

  public function login(DriverLoginRequest $request)
  {
    if ($user = $this->driverAuthService->login()) {
      $accessToken = $user->createToken('authToken')->accessToken;
      return $this->respondWithMessageAndPayload(
        new UserResource($user, $accessToken),
        'Congratulations! You have logged in successfully.'
      );
    }

    return $this->respondBadRequest('Email/Password is wrong.');
  }
}
