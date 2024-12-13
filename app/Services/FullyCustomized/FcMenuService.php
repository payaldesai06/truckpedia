<?php

namespace App\Services\FullyCustomized;

use App\Models\FullyCustomized\FcSubmenu;
use Exception;
use Illuminate\Support\Facades\DB;
use App\Models\FullyCustomized\FcMenu;
use App\Models\FullyCustomized\FcSharedPermission;

class FcMenuService {

  /**
   * Get Menus with SubMenus.
   * @return array
   * @throws Exception
   */
  public function getMenus() {
    $data = collect([]);
    $userId = auth()->id();

    $permissions = FcSharedPermission::select(['menu_id', 'submenu_id', 'user_id', 'access_level'])
      ->where('user_id', $userId)
      ->get();

    $subMenus = FcSubmenu::select(['id', 'name', 'menu_id', 'is_private'])
      ->with('fcMenu:id')
      ->whereIn('id', $permissions->whereNotNull('submenu_id')->pluck('submenu_id'))
      ->whereNotIn('menu_id', $permissions->whereNotNull('menu_id')->pluck('menu_id'))
      ->get();

    $menuIdsForSubmenu = $subMenus->pluck('menu_id')->toArray();

    $ids = array_merge($permissions->pluck('menu_id')->toArray(), $menuIdsForSubmenu);

    $menus = FcMenu::select(['id', 'name', 'color', 'owner_id'])
      ->with('fcSubmenus')
      ->where(function ($query) use ($ids, $userId) {
        $query->whereIn('id', array_filter($ids));
        $query->orWhere('owner_id', $userId);
      })
      ->get();

    $permissionService = new FcSharedPermissionService;
    // ToDo: Refactor and recheck the access level logic
    foreach ($menus as $menu) {
      $menuAccessLevel = $permissionService->getAccessLevelForMenu($menu, $permissions, $userId);

      $subMenus = $menu->fcSubmenus->map(function ($submenu) use (
        $menu, $permissions, $userId, $permissionService, $menuAccessLevel
      ) {
        $submenuAccessLevel = $permissionService->getAccessLevelForSubmenu(
          $menu, $submenu, $permissions, $userId);
        $data = [
          'id' => $submenu->id ?? '',
          'name' => $submenu->name ?? '',
          'color' => $submenu->color ?? '',
          'isPrivate' => (bool) $submenu->is_private,
          'accessLevel' => $submenuAccessLevel,
        ];
        if($submenu->predefined_data) {
          $data['predefinedData'] = config('constant.fcSubmenus.predefinedData')[$submenu->predefined_data] ?? '';
        }
        return $data;
      });

      $data->push([
        'id' => $menu->id ?? '',
        'name' => $menu->name ?? '',
        'color' => $menu->color ?? '',
        'accessLevel' => $menuAccessLevel,
        'ownerId' => $menu->owner_id,
        'subMenus' => $subMenus,
      ]);
    }

    return $data->toArray();
  }

  /**
   * Create a new menu with submenu and views
   * @param $request
   * @return mixed
   */
  public function createMenu($request) {
    return DB::transaction(function () use ($request) {
      $menu = FcMenu::create([
        'name' => $request->name,
        'color' => $request->color,
        'company_id' => getAuthAdminCompanyId(),
        'owner_id' => auth()->id(),
      ]);
      if ($request->filled('sharedPermissions')) {
        $data = (new FcSharedPermissionService)->prepareSharedPermissions($request->sharedPermissions, $menu->owner_id);
        $menu->fcSharedPermissions()->createMany($data);
      }
      $this->createSubmenus($menu, $request->submenus);
      return $menu;
    });
  }

  /**
   * Creates submenus for a given menu
   * @param $menu
   * @param $submenus
   */
  private function createSubmenus($menu, $submenus) {
    $data = [];
    foreach ($submenus as $submenu) {
      $data['menuId'] = $menu->id;
      $data['name'] = $submenu['name'];
      $data['predefinedData'] = $submenu['predefinedData'] ?? null;

      $data['views'] = $submenu['views'];

      $submenuService = new FcSubmenuService();
      $submenuService->createSubmenu($data);
    }
  }

  /**
   * Checks if the menu exists and if the user has access to it.
   * @param $request
   * @return void
   * @throws Exception
   */
  public function updateMenu($request) {
    // Check if menu belongs to the company
    $menu = FcMenu::select(['id', 'name', 'company_id', 'owner_id', 'color'])
      ->where('id', $request->id)
      ->where('company_id', getAuthAdminCompanyId())
      ->firstOrFail();

    $hasPermission = (new FcSharedPermissionService)->checkAdminAccessForMenu($menu);

    if (!$hasPermission) {
      throw new Exception(config('response.fc.menu.access_denied'));
    }

    if($menu->color != $request->color) {
      $menu->color = $request->color;
    }

    if($request->filled('name') && $menu->name != $request->name) {
      $menu->name = $request->name;
    }
    // Save will be executed only if there is a change in the color or name
    return $menu->save();
  }

  /**
   * @param $menuId
   * @return mixed
   * @throws Exception
   */
  public function getSharedPermissions($menuId) {
    $menu = FcMenu::select(['id', 'company_id', 'owner_id'])
      ->with(['fcSharedPermissions' => function ($query) {
        $query->whereNull('submenu_id'); // No need to display users at the “submenuViewer” level here
      }])
      ->where('company_id', getAuthAdminCompanyId())
      ->where('id', $menuId)
      ->firstOrFail();

    return $menu->fcSharedPermissions->where('user_id', '!=', $menu->owner_id);
  }

  /**
   * @throws Exception
   */
  public function updateSharedPermissions($request) {
    if (!$request->filled('sharedPermissions')) {
      return false;
    }

    $menu = FcMenu::select('id', 'company_id', 'owner_id')
      ->where('company_id', getAuthAdminCompanyId())
      ->where('id', $request->id)
      ->firstOrFail();

    $sharedPermissionService = new FcSharedPermissionService;

    $hasPermission = $sharedPermissionService->checkAdminAccessForMenu($menu);

    if (!$hasPermission) {
      throw new Exception(config('response.fc.menu.access_denied'));
    }

    $data = $sharedPermissionService->prepareSharedPermissions($request->sharedPermissions, $menu->owner_id);

    // Delete all the permissions that are not in the request
    $menu->fcSharedPermissions()
      ->whereNotIn('user_id', array_column($data, 'user_id'))
      ->delete();

    foreach ($data as $item) {
      $menu->fcSharedPermissions()->updateOrCreate([
        'user_id' => $item['user_id'],
        'menu_id' => $menu->id,
      ], [
        'access_level' => $item['access_level'],
      ]);
    }
  }

  public function deleteMenu($menuId) {
    $menu = FcMenu::select('id', 'company_id', 'owner_id')
      ->where('company_id', getAuthAdminCompanyId())
      ->where('id', $menuId)
      ->firstOrFail();

    if($menu->owner_id != auth()->id()) {
      throw new Exception(config('response.fc.menu.access_denied'));
    }

    return $menu->delete();
  }
}
