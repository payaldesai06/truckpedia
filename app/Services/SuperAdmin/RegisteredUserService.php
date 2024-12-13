<?php

namespace App\Services\SuperAdmin;

use App\Models\User;

class RegisteredUserService
{
    public function datatable()
    {
        $per_page = request('rows') ?? config('response.per_page');
        return User::when(request()->has('email'), function ($query) {
            return $query->where('email', 'like', '%' . request('email') . '%');
        })->when(request()->has('role'), function ($query) {
            return $query->where('role', 'like', '%' . request('role') . '%');
        })->when(request()->has('sortField') && request()->has('sortOrder'), function ($query) {
            return $query->orderBy(request('sortField'), request('sortOrder'));
        })->paginate($per_page);
    }
}
