<?php

namespace App\Http\Resources\Shipper;

use Illuminate\Http\Resources\Json\JsonResource;

class ShipperResource extends JsonResource
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
            'shipper_id' => $this->id ?? "",
            'user_id' => $this->user_id ?? "",
            'company_id' => $this->company_id ?? "",
            'name' => $this->name ?? "",
            'address' => $this->address ?? "",
            'state' => $this->state ?? "",
            'city' => $this->city ?? "",
            'zip_code' => $this->zip_code ?? "",
            'primary_contact' => $this->primary_contact ?? "",
            'phone_number' => $this->phone_number ?? "",
            'email' => $this->email ?? "",
            'status' => $this->status ?? "",
        ];
    }
}
