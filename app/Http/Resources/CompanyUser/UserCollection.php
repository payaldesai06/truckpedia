<?php

namespace App\Http\Resources\CompanyUser;

use App\Models\User;
use App\Traits\ApiResourceTrait;
use Illuminate\Http\Resources\Json\ResourceCollection;
use Illuminate\Pagination\AbstractPaginator;
use Illuminate\Support\Facades\Auth;

class UserCollection extends ResourceCollection {
  use ApiResourceTrait;

  public $collects = UserResource::class;

  // This is used in the toArray(), which is in turn used in the Manage User's
  // number of active and inactive users.
  private function users() {
    return User::whereIn('role', [
      config('constant.roles.admin'),
      config('constant.roles.dispatcher'),
      config('constant.roles.warehouse_operator'),
      config('constant.roles.tag_operator'),
      config('constant.roles.maintenance'),
    ])
      ->where('id', '!=', Auth::id())
      ->where('admin_company_detail_id', '=', Auth::user()->admin_company_detail_id)
      ->get();
  }

  public function toArray($request) {
    $collection = ['data' => $this->collection];

    if ($this->resource instanceof AbstractPaginator) {
      $paginated = $this->resource->toArray();
      $paginated['active_user'] = $this->counter(config('constant.status.user.active'));
      $paginated['inactive_user'] =  $this->counter(config('constant.status.user.inactive'));
      $collection['links'] = $this->paginationLinks($paginated);
      $collection['meta'] = $this->meta($paginated);
    }

    return $collection;
  }

  public function counter($status) {
    $users = $this->users();
    return $users->filter(function ($value, $key) use ($status) {
      return $value->status == $status;
    })->count();
  }
}
