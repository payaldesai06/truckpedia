<?php

namespace App\Http\Controllers\Api\FullyCustomized;

use App\Http\Requests\Api\FullyCustomized\UpdateSubmenuSharedPermissionsRequest;
use App\Http\Resources\FullyCustomized\FcSubmenuSharedPermissionResource;
use Exception;
use Illuminate\Support\Facades\Log;
use App\Http\Controllers\Controller;
use App\Services\FullyCustomized\FcSubmenuService;
use App\Http\Resources\FullyCustomized\FcSubmenuResource;
use App\Http\Requests\Api\FullyCustomized\GetFcSubmenuRequest;
use App\Http\Requests\Api\FullyCustomized\CreateFcSubmenuRequest;
use App\Http\Requests\Api\FullyCustomized\UpdateFcSubmenuRequest;

class FcSubmenuController extends Controller {
  protected $fcSubmenuService;

  public function __construct(FcSubmenuService $fcSubmenuService) {
    $this->fcSubmenuService = $fcSubmenuService;
  }

  public function index($menuId) {
    try {
      $subMenus = $this->fcSubmenuService->getSubmenus($menuId);
      return $this->respondWithData(['submenus' => $subMenus]);
    } catch (Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }

  public function store(CreateFcSubmenuRequest $request) {
    try {
      $subMenu = $this->fcSubmenuService->createSubmenu($request);
      return $this->respondWithData(['id' => $subMenu->id]);
    } catch (Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }

  public function update(UpdateFcSubmenuRequest $request) {
    try {
      $this->fcSubmenuService->updateSubmenu($request);
      return $this->respondOk();
    } catch (Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }

  public function getSharedPermissions($submenuId) {
    try {
      $permissions = $this->fcSubmenuService->getSharedPermissions($submenuId);
      return $this->respondWithData([
        'isPrivate' => $permissions['isPrivate'],
        'sharedPermissions' => FcSubmenuSharedPermissionResource::collection($permissions['sharedPermissions']),
      ]);
    } catch (Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }

  public function updateSharedPermissions(UpdateSubmenuSharedPermissionsRequest $request) {
    try {
      $this->fcSubmenuService->updateSharedPermissions($request);
      return $this->respondOk();
    } catch (Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }
}
