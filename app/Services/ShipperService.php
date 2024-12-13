<?php


namespace App\Services;

use App\Models\Shipper;
use Illuminate\Support\Facades\Auth;

class ShipperService
{
    public function shipperDatatable()
    {
        $per_page = request('rows') ?? config('response.per_page');
        $user = Auth::user();
        $companyId = $user->admin_company_detail_id;

        return Shipper::where('company_id', '=', $companyId)
            ->when(request()->has('name'), function ($query) {
                return $query->where('name', 'like', '%' . request('name') . '%');
            })->when(request()->has('primary_contact'), function ($query) {
                return $query->where('primary_contact', 'like', '%' . request('primary_contact') . '%');
            })->when(request()->has('phone_number'), function ($query) {
                return $query->where('phone_number', 'like', '%' . request('phone_number') . '%');
            })->when(request()->has('address'), function ($query) {
                return $query->where('address', 'like', '%' . request('address') . '%');
            })->when(request()->has('city'), function ($query) {
                return $query->where('city', 'like', '%' . request('city') . '%');
            })->when(request()->has('state'), function ($query) {
                return $query->where('state', 'like', '%' . request('state') . '%');
            })->when(request()->has('zip_code'), function ($query) {
                return $query->where('zip_code', 'like', '%' . request('zip_code') . '%');
            })->when(request()->has('sortField') && request()->has('sortOrder'), function ($query) {
                return $query->orderBy(request('sortField'), request('sortOrder'));
            })->paginate($per_page);
    }

    public function createShipper()
    {
        $validateddata = $this->getValidatedData();
        $validateddata['user_id'] = auth()->id();
        $validateddata['company_id'] = auth()->user()->admin_company_detail_id;
        return Shipper::create($validateddata);
    }

    public function updateShipper()
    {
        $validateddata = $this->getValidatedData();
        return tap(Shipper::findOrFail(request('shipper')))->update($validateddata);
    }

    public function delete()
    {
        $id = request('shipper');
        return tap(Shipper::findOrFail($id))->delete();
    }

    private function getValidatedData()
    {
        return [
            'name' => request('name'),
            'address' => request('address'),
            'state' => request('state'),
            'city' => request('city'),
            'zip_code' => request('zip_code'),
            'primary_contact' => request('primary_contact'),
            'phone_number' => request('phone_number'),
            'email' => request('email'),
            'status' => config('constant.status.shipper.active')
        ];
    }
}
