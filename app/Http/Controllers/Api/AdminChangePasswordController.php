<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\Api\Auth\AdminPasswordChangeRequest;
use App\Services\AdminService;
use Illuminate\Http\Request;

class AdminChangePasswordController extends Controller
{
    protected $adminService;

    public function __construct(AdminService $adminService)
    {
        $this->adminService = $adminService;
    }

    public function changePassword(AdminPasswordChangeRequest $request)
    {
        $this->adminService->passwordChange();
        return $this->respondWithMessage('Password changed successfully!');
    }
}
