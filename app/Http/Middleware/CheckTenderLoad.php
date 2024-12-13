<?php

namespace App\Http\Middleware;

use App\Traits\ApiResponser;
use Closure;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class CheckTenderLoad {
  use ApiResponser;

  /**
   * Handle an incoming request.
   * @param Request $request
   * @param Closure $next
   * @return JsonResponse|mixed|null
   */
  public function handle(Request $request, Closure $next) {
    // TODO: 1. put this code into a service file (so we use controller and service at the same time). 2. put key into .vue and config.services (so we have test key and prod key). Similar to transplace.
    // TODO: above service file and .vue change may already be done in another branch. Need to update this file.
    if (!$request->key || ($request->key != config('services.rateConUploadUrlKey'))) {
      return $this->respondMethodNotAllowed();
    }
    return $next($request);
  }
}
