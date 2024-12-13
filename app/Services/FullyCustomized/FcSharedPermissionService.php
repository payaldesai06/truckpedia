<?php

namespace App\Services\FullyCustomized;

use App\Models\FullyCustomized\FcSubmenu;
use App\Models\FullyCustomized\FcSharedPermission;

class FcSharedPermissionService {
  /**
   * @param $userId
   * @param $ownerId
   * @param $menuId
   * @param $submenuId
   * @return bool
   */
  public function checkForAdminAccessToFcView($ownerId, $menuId, $submenuId) {
    $userId = auth()->id();
    // Check if the user is the owner of the view.
    if ($ownerId == $userId) {
      return true;
    }

    $permissions = FcSharedPermission::select(['user_id', 'submenu_id', 'menu_id', 'access_level'])
      ->whereNotNull('access_level') // null means no access
      ->where('user_id', $userId)
      ->where(function ($query) use ($menuId, $submenuId) {
        $query->where('menu_id', $menuId);
        $query->orWhere('submenu_id', $submenuId);
      })
      ->get();

    $adminAccess = array_search('admin', config('constant.fcSharedPermissions.accessLevel'));

    // check if user has explicit admin access to the submenu
    $isAdmin = $permissions->where('access_level', $adminAccess)
      ->where('submenu_id', $submenuId)
      ->first();

    if ($isAdmin) {
      return true;
    }

    // check if the user has explicit viewer or editor access to the submenu
    $viewerOrEditor = $permissions->where('submenu_id', $submenuId)
      ->where('access_level', '!=', $adminAccess)
      ->first();

    if ($viewerOrEditor) {
      return false;
    }

    // At this stage, the user does not have any explicit permissions to this submenu.
    return (bool) $permissions->where('access_level', $adminAccess)
      ->where('menu_id', $menuId)
      ->first();
  }

  /**
   * Check if a user has admin access to a Submenu
   * @param $menu
   * @return bool
   */
  public function checkAdminAccessForSubmenu($submenu): bool {
    $userId = auth()->id();
    $adminAccess = array_search('admin', config('constant.fcSharedPermissions.accessLevel'));

    $permissions = FcSharedPermission::select([
      'user_id', 'menu_id', 'submenu_id', 'access_level'
    ])
      ->where('user_id', $userId)
      ->where(function ($query) use ($submenu) {
        $query->where('menu_id', $submenu->menu_id);
        $query->orWhere('submenu_id', $submenu->id);
      })
      ->get();

    // If submenu / menu does not have any explicit permissions
    if (!$permissions->count()) {
      return $submenu->fcMenu->owner_id == $userId;
    }

    // If submenu does not have any explicit permissions
    if (!$permissions->where('submenu_id', $submenu->id)->count()) {
      return $permissions->where('access_level', $adminAccess)->where('menu_id', $submenu->menu_id)->count() > 0;
    }

    // At this stage, submenu has explicit permission
    return $permissions->where('access_level', $adminAccess)->where('submenu_id', $submenu->id)->count() > 0;
  }

  /**
   * Check if a user has view access to a submenu
   * @param $userId
   * @param $submenuId
   * @return bool
   */
  public function checkForViewAccessToFcView($submenuId) {
    $userId = auth()->id();
    // Check if submenu exists or not
    $fcSubMenu = FcSubmenu::select(['id', 'menu_id'])
      ->wherehas('fcMenu')
      ->with(['fcMenu:id,owner_id'])
      ->where('id', $submenuId)->firstOrFail();

    // check if the user is the owner of the main menu
    $isOwner = optional($fcSubMenu->fcMenu)->owner_id == $userId;

    if ($isOwner) {
      return true;
    }

    // check if the user has view access to this submenu / menu.
    return FcSharedPermission::where('user_id', $userId)
      ->whereNotNull('access_level') // null means no access
      ->where('submenu_id', $submenuId)
      ->orWhere('menu_id',
        $fcSubMenu->fcMenu->id) // if the submenu has no explicit permissions, it'll inherit the permissions of the main menu
      ->exists();
  }

  /**
   * Check if a user has admin access to a Submenu
   * @param $menu
   * @return bool
   */
  public function checkForAccessToSubmenu($submenu, $accessLevels = []): bool {
    $userId = auth()->id();

    $permissions = FcSharedPermission::select([
      'user_id', 'menu_id', 'submenu_id', 'access_level'
    ])
      ->where('user_id', $userId)
      ->where(function ($query) use ($submenu) {
        $query->where('menu_id', $submenu->menu_id);
        $query->orWhere('submenu_id', $submenu->id);
      })
      ->get();

    // If submenu / menu does not have any explicit permissions
    if (!$permissions->count()) {
      return $submenu->fcMenu->owner_id == $userId;
    }

    // If submenu does not have any explicit permissions, check for inherited permissions
    if (!$permissions->where('submenu_id', $submenu->id)->count()) {
      return $permissions->whereIn('access_level', $accessLevels)->where('menu_id', $submenu->menu_id)->count() > 0;
    }

    // At this stage, submenu has explicit permission
    return $permissions->whereIn('access_level', $accessLevels)->where('submenu_id', $submenu->id)->count() > 0;
  }

  /**
   * @param $menu
   * @param $permissions
   * @param $userId
   * @return string
   */
  public function getAccessLevelForMenu($menu, $permissions, $userId): string {
    if ($menu->owner_id == $userId) {
      return 'admin';
    }

    $permission = $permissions->where('menu_id', $menu->id)
      ->whereNull('submenu_id')
      ->first();

    if ($permission) {
      return config('constant.fcSharedPermissions.accessLevel')[$permission->access_level];
    }

    return 'submenuViewer';
  }

  /**
   * @param $menu
   * @param $submenu
   * @param $permissions
   * @param $userId
   * @return string
   */
  public function getAccessLevelForSubmenu($menu, $submenu, $permissions, $userId): string {
    $permission = $permissions->where('submenu_id', $submenu->id)->first();

    if ($permission) {
      return config('constant.fcSharedPermissions.accessLevel')[$permission->access_level];
    }

    $accessLevel = $this->getAccessLevelForMenu($menu, $permissions, $userId);

    return $accessLevel == 'submenuViewer' ? 'viewer' : $accessLevel;
  }

  /*
  * Check if a user has admin access to a menu
  * @param $menu
  * @return bool
  */
  public function checkAdminAccessForMenu($menu): bool {
    if ($menu->owner_id == auth()->id()) {
      return true;
    }

    $adminAccess = array_search('admin', config('constant.fcSharedPermissions.accessLevel'));

    return $menu->fcSharedPermissions()
      ->where('user_id', auth()->id())
      ->where('access_level', $adminAccess)
      ->exists();
  }

  /**
   * Generates an array of shared permissions for a given menu
   * @param $sharedPermissions
   * @return array
   */
  public function prepareSharedPermissions($sharedPermissions, $ownerId): array {
    $data = [];
    // You can only have one role for one menu
    $permissions = collect($sharedPermissions)->unique('userId');
    foreach ($permissions as $sharedPermission) {
      // we won’t allow users to change permission of owner to viewer/editor.
      if ($sharedPermission['userId'] == $ownerId) {
        continue;
      } else {
        $data[] = [
          'user_id' => $sharedPermission['userId'],
          'access_level' => array_search($sharedPermission['accessLevel'],
            config('constant.fcSharedPermissions.accessLevel')),
        ];
      }
    }
    return $data;
  }
}
