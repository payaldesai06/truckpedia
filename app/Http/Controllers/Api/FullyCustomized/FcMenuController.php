<?php

namespace App\Http\Controllers\Api\FullyCustomized;

use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use App\Http\Controllers\Controller;
use App\Services\FullyCustomized\FcMenuService;
use App\Http\Resources\FullyCustomized\FcMenuResource;
use App\Http\Requests\Api\FullyCustomized\UpdateFcMenuRequest;
use App\Http\Requests\Api\FullyCustomized\CreateFcMenuRequest;
use App\Http\Resources\FullyCustomized\FcMenuSharedPermissionResource;
use App\Http\Requests\Api\FullyCustomized\UpdateMenuSharedPermissionsRequest;

class FcMenuController extends Controller {
  protected $fcMenuService;

  public function __construct(FcMenuService $fcMenuService) {
    $this->fcMenuService = $fcMenuService;
  }

  public function index() {
    try {
      $menus = $this->fcMenuService->getMenus();
      return $this->respondWithData(['menus' => $menus]);
    } catch (Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }

  public function store(CreateFcMenuRequest $request) {
    try {
      $menu = $this->fcMenuService->createMenu($request);
      return $this->respondWithData(['id' => $menu->id]);
    } catch (Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }

  public function update(UpdateFcMenuRequest $request) {
    try {
      $this->fcMenuService->updateMenu($request);
      return $this->respondOk();
    } catch (Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }

  public function getSharedPermissions($menuId) {
    try {
      $permissions = $this->fcMenuService->getSharedPermissions($menuId);
      return $this->respondWithData(['sharedPermissions' => FcMenuSharedPermissionResource::collection($permissions)]);
    } catch (Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }

  public function updateSharedPermissions(UpdateMenuSharedPermissionsRequest $request) {
    try {
      $this->fcMenuService->updateSharedPermissions($request);
      return $this->respondOk();
    } catch (Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }

  public function destroy(Request $request) {
    try {
      $this->fcMenuService->deleteMenu($request->id);
      return $this->respondOk();
    } catch (Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }
}
