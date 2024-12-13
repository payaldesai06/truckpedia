<?php

namespace App\Http\Middleware;

use App\Traits\ApiResponser;
use Closure;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class CheckRole {
  use ApiResponser;

  /**
   * Handle an incoming request.
   * @param Request $request
   * @param Closure $next
   * @param $role
   * @return JsonResponse|mixed|null
   */
  public function handle(Request $request, Closure $next, $role) {
    if (!$request->user()->roleAuthorized(explode('|', $role))) {
      return $this->respondForbidden('Unauthorized action occurred.');
    }
    return $next($request);
  }
}
