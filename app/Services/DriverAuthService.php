<?php

namespace App\Services;

use App\Models\User;
use Illuminate\Support\Facades\Auth;

class DriverAuthService
{
    public function login()
    {
        $driver = User::firstWhere([
            'email' => request('email'),
            'role' => config('constant.roles.driver'),
            'status' => config('constant.status.driver.active'),
        ]);

        if (
            $driver &&
            Auth::attempt(
                ['email' => request('email'), 'password' => request('password')],
                request('remember_me')
            )
        ) {
            return Auth::user();
        }

        return null;
    }
}
