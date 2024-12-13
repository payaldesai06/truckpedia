<?php


namespace App\Services;

use App\Models\AccessorialFee;
use Illuminate\Support\Facades\Auth;

class AccessorialFeeService
{

    public function getAllAccessrialFee()
    {
        $user = Auth::user();
        $companyId = $user->admin_company_detail_id;
        return AccessorialFee::where('admin_company_detail_id', '=', $companyId)
            ->get();
    }

    public function createAccessrialFee()
    {
        return AccessorialFee::create([

            'user_id' => Auth::id(),
            'admin_company_detail_id' => Auth::user()->admin_company_detail_id,
            'name' => request('name'),
            'description' => request('description'),

        ]);
    }
}
