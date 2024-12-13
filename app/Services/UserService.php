<?php


namespace App\Services;


use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class UserService {
  public function getUserDatatable() {
    $pageSize = request()->has('rows') ? request()->rows : config('constants.app.pagination_length');
    return User::when(request()->filled('globalSearch'), function ($query) {
      $query->where(function ($q) {
        $globalSearch = request()->globalSearch . '%';
        $q->where('first_name', 'like', $globalSearch)
          ->orWhere('last_name', 'like', $globalSearch)
          ->orWhere('email', 'like', $globalSearch)
          ->orWhere('role', 'like', $globalSearch);
      });
    })
      ->when(request()->has('sortField'), function ($query) {
        //                $query->orderByRaw('? ?',[request()->sortField,request()->sortOrder]);
        $query->orderBy(request()->sortField, request()->sortOrder);
      })
      ->when(!request()->has('sortField'), function ($query) {
        //                $query->orderByRaw('? ?',[request()->sortField,request()->sortOrder]);
        $query->orderBy('created_at', 'desc');
      })
      ->paginate($pageSize);
  }

  public function addUser() {
    User::create([
      'first_name' => request()->first_name,
      'last_name' => request()->last_name,
      'email' => request()->email,
      'role' => request()->role,
      'password' => Hash::make(request()->password),
    ]);
  }

  public function updateUser($user) {
    $user->update([
      'first_name' => request()->first_name,
      'last_name' => request()->last_name,
      'email' => request()->email,
      'role' => request()->role,
      'password' => Hash::make(request()->password),
    ]);
  }

  public function deleteUser($user) {
    $user->delete();
  }

  /**
   * Update FCM user token to send notification.
   * @param $request
   * @return mixed
   */
  public function updateFcmToken($request) {
    $currentDriver = User::find(Auth::user()->id);
    $currentDriver->fcm_token = $request->fcm_token;
    $currentDriver->save();
  }

  /**
   * Get App Latest Version.
   * @return mixed
   */
  public function getAppLatestVersion() {
    return ['version' => config('constant.mobileApps.ezpapel.latestVersion')];
  }
}
