<?php


namespace App\Services;

use App\Models\AccessorialDeduction;
use Illuminate\Support\Facades\Auth;

class AccessorialDeductionService
{

    public function getAllAccessrialDeduction()
    {
        $user = Auth::user();
        $companyId = $user->admin_company_detail_id;
        return AccessorialDeduction::where('admin_company_detail_id', '=', $companyId)
            ->get();
    }

    public function createAccessrialDeduction()
    {
        return AccessorialDeduction::create([

            'user_id' => Auth::id(),
            'admin_company_detail_id' => Auth::user()->admin_company_detail_id,
            'name' => request('name'),
            'description' => request('description'),

        ]);
    }
}
