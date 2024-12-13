<?php

namespace App\Http\Resources\PaymentHistory;

use App\Http\Resources\Company\CompanyDetailResource;
use App\Http\Resources\Transction\TranscationResource;
use Illuminate\Http\Resources\Json\JsonResource;

class PaymentHistoryResource extends JsonResource
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
            $this->merge(new TranscationResource($this)),
            'admin_company_details' => [
                $this->merge(new CompanyDetailResource($this->adminCompanyDetail)),
            ],

        ];
    }
}
