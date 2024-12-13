<?php

namespace App\Http\Resources\Load;

use App\Http\Resources\Company\CompanyDetailResource;
use App\Http\Resources\Customer\CustomerResource;
use Illuminate\Http\Resources\Json\JsonResource;

class LoadwithFirstResiverShipperResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            $this->merge(new LoadMainResource($this)),
            'load_charge' => [
                $this->merge(new LoadChargeResource($this->loadCharge)) ?? "",
            ],
            'shippers' => new LoadShipperResource($this->loadShippers->first()) ?? "",
            'receivers' => new LoadReceiverResource($this->loadReceivers->last()) ?? "",
            'customer' => [
                $this->merge(new CustomerResource($this->customer))
            ],
            'load_images' => LoadImageResource::collection($this->loadImages) ?? "",
            'admin_company_detail' => new CompanyDetailResource($this->adminCompanyDetail) ?? "",
        ];
    }
}
