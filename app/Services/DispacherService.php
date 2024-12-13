<?php

namespace App\Services;

use App\Models\User;
use Illuminate\Support\Facades\Auth;

class DispacherService {

  public function getAllDispatcher() {
    return User::query()
      ->where('admin_company_detail_id', Auth::user()->admin_company_detail_id)
      ->where(function ($query) {
        return $query->where('role', config('constant.roles.dispatcher'))
          ->orWhere('multiple_roles', 1);
      })
      ->when(
        request()->filled('status_with'),
        function ($query) {
          $status = explode(
            ',',
            request('status_with', config('constant.status.user.active'))
          );

          return $query->whereIn('status', $status);
        },
        function ($query) {
          return $query->where('status', config('constant.status.user.active'));
        }
      )
      ->get();
  }
}
