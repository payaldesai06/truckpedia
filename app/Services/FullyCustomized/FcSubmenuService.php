<?php

namespace App\Services\FullyCustomized;

use App\Models\FullyCustomized\FcSharedPermission;
use Exception;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Facades\DB;
use App\Models\FullyCustomized\FcSubmenu;

class FcSubmenuService {

  /**
   * Create a new submenu with views
   * The $predefinedDataKey returns zero when it doesn't exist in the array
   * @param $request
   * @return mixed
   */
  public function createSubmenu($request) {
    return DB::transaction(function () use ($request) {
      $predefinedDataKey = isset($request['predefinedData']) ?
        array_search($request['predefinedData'], config('constant.fcSubmenus.predefinedData')) : null;
      $submenu = FcSubmenu::create([
        'menu_id' => $request['menuId'],
        'name' => $request['name'],
        'predefined_data' => $predefinedDataKey == 0 ? null : $predefinedDataKey,
      ]);

      if($predefinedDataKey !== array_search('load', config('constant.fcSubmenus.predefinedData'))){
        $this->createCustomFields($submenu);
      }

      $this->createViews($submenu, $request['views'], $predefinedDataKey);
      return $submenu;
    });
  }

  /**
   * @param $submenu
   * @param  array  $views
   * @throws Exception
   */
  private function createViews($submenu, array $views, $predefinedDataKey) {
    if (!empty($views)) {
      $data = [];
      $viewService = new FcViewService();
      foreach ($views as $view) {
        $data['submenuId'] = $submenu->id;
        $data['name'] = $view['name'];
        $data['type'] = $view['type'] ?? null;
        $viewService->createView($data, $submenu, true);
      }
    }
  }

  /**
   * Checks if the submenu exists and if the user has access to it.
   * @param $request
   * @return boolean
   * @throws Exception
   */
  public function updateSubmenu($request) {
    $submenu = FcSubmenu::select('id', 'menu_id', 'name')
      ->whereHas('fcMenu', function (Builder $query) {
        $query->where('company_id', getAuthAdminCompanyId());
      })
      ->where('id', $request->id)
      ->firstOrFail();

    $hasPermission = (new FcSharedPermissionService)->checkAdminAccessForSubmenu($submenu);
    if (!$hasPermission) {
      throw new Exception(config('response.fc.submenu.access_denied'));
    }
    return $submenu->update([
      'name' => $request->filled('name') ? $request->name : $submenu->name,
      'color' => $request->has('color') ? $request->color : $submenu->color,
    ]);
  }

  /**
   * @param $menuId
   * @return mixed
   * @throws Exception
   */
  public function getSubmenus($menuId) {
    $data = collect([]);
    $userId = auth()->id();

    // gets all the submenus for a given menu
    $submenus = FcSubmenu::select(['id', 'name', 'color', 'menu_id', 'is_private', 'predefined_data'])
      ->with('fcMenu:id,owner_id')
      ->whereHas('fcMenu', function ($query) {
        $query->where('company_id', getAuthAdminCompanyId());
      })
      ->where('menu_id', $menuId)
      ->get();

    $submenuIds = $submenus->pluck('id')->toArray();

    // gets all the permissions for the given submenus and menus
    $permissions = FcSharedPermission::select(['menu_id', 'submenu_id', 'user_id', 'access_level'])
      ->where('user_id', $userId)
      ->where(function ($query) use ($menuId, $submenuIds) {
        $query->where('menu_id', $menuId);
        $query->orWhereIn('submenu_id', $submenuIds);
      })
      ->get();

    $permissionService = new FcSharedPermissionService;
    // ToDo: Refactor and recheck the access level logic
    foreach ($submenus as $submenu) {
      $submenuPermission = $permissions->where('submenu_id', $submenu->id)->count() > 0;
      $menuPermission = $permissions->where('menu_id', $submenu->menu_id)->count() > 0;
      $menu = $submenu->fcMenu;
      $owner = $menu->owner_id == $userId;

      if ($owner || $submenuPermission || $menuPermission) {
        $accessLevel = $permissionService->getAccessLevelForSubmenu($submenu->fcMenu, $submenu, $permissions, $userId);

        $array = [
          'id' => $submenu->id ?? '',
          'name' => $submenu->name ?? '',
          'color' => $submenu->color ?? '',
          'isPrivate' => (bool) $submenu->is_private,
          'accessLevel' => $accessLevel,
        ];

        if($submenu->predefined_data) {
          $array['predefinedData'] = config('constant.fcSubmenus.predefinedData')[$submenu->predefined_data] ?? '';
        }

        $data->push($array);
      }
    }

    return $data->toArray();
  }

  /**
   * @param $submenu
   * @return mixed|true
   * @throws Exception
   */
  private function createCustomFields($submenu) {
    $fieldService = new FcCustomFieldService();
    return $fieldService->store(['fields' => config('constant.customField.defaults')], $submenu);
  }

  /**
   * @param $submenuId
   * @return array
   * @throws Exception
   */
  public function getSharedPermissions($submenuId) {
    // Check if submenu belongs to the current company
    $submenu = FcSubmenu::select(['id', 'menu_id', 'is_private'])
      ->whereHas('fcMenu', function ($query) {
        $query->where('company_id', getAuthAdminCompanyId());
      })
      ->with('fcMenu:id,owner_id')
      ->where('id', $submenuId)
      ->firstOrFail();

    return [
      'isPrivate' => (bool) $submenu->is_private,
      'sharedPermissions' => FcSharedPermission::where('submenu_id', $submenuId)->where('user_id', '!=', $submenu->fcMenu->owner_id)->get(),
    ];

    // For public submenu, return all users who access the parent menu and this submenu.
    /*return [
      'isPrivate' => false,
      'sharedPermissions' => FcSharedPermission::where('submenu_id', $submenuId)
        ->orWhere('menu_id', $submenu->menu_id)
        ->get(),
    ];*/
  }

  /**
   * @param $request
   * @return false|mixed
   * @throws Exception
   */
  public function updateSharedPermissions($request) {
    if (!$request->filled('sharedPermissions')) {
      return false;
    }

    // Check if submenu belongs to the current company
    $submenu = FcSubmenu::select(['id', 'menu_id'])
      ->with(['fcMenu:id,company_id,owner_id'])
      ->whereHas('fcMenu', function ($query) {
        $query->where('company_id', getAuthAdminCompanyId());
      })
      ->where('id', $request->id)
      ->firstOrFail();

    $sharedPermissionService = new FcSharedPermissionService;

    $hasPermission = $sharedPermissionService->checkAdminAccessForSubmenu($submenu);

    if (!$hasPermission) {
      throw new Exception(config('response.fc.submenu.access_denied'));
    }

    $data = $sharedPermissionService->prepareSharedPermissions($request->sharedPermissions, $submenu->fcMenu->owner_id);

    return DB::transaction(function () use ($request, $submenu, $data) {
      $submenu->update([
        'is_private' => $request->isPrivate,
      ]);

      // Delete all the permissions that are not in the request
      $submenu->fcSharedPermissions()
        ->whereNotIn('user_id', array_column($data, 'user_id'))
        ->delete();

      foreach ($data as $item) {
        $submenu->fcSharedPermissions()->updateOrCreate([
          'user_id' => $item['user_id'],
          'menu_id' => $submenu->menu_id,
        ], [
          'access_level' => $item['access_level'],
        ]);
      }

      return true;
    });
  }
}
