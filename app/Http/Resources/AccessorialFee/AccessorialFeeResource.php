<?php

namespace App\Http\Resources\AccessorialFee;

use Illuminate\Http\Resources\Json\JsonResource;

class AccessorialFeeResource extends JsonResource
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
            'accessorial_fee_id' => $this->id ?? "",
            'user_id' => $this->user_id ?? "",
            'admin_company_detail_id' => $this->admin_company_detail_id ?? "",
            'name' => $this->name ?? "",
            'description' => $this->description ?? "",
        ];
    }
}
