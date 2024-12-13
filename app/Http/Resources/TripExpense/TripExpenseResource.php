<?php

namespace App\Http\Resources\TripExpense;

use Illuminate\Http\Resources\Json\JsonResource;

class TripExpenseResource extends JsonResource
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
            'trip_expense_id' => $this->id ?? '',
            'date' => $this->date ?? '',
            'quantity_description' => $this->quantity_description ?? '',
            'cost' => $this->cost ?? '',
            'vendor_address' => $this->vendor_address ?? '',
            'reimbursed' => $this->reimbursed ?? '',
            'diesel_gallons' => $this->diesel_gallons ?? '',
            'diesel_price' => $this->diesel_price ?? '',
            'def_gallons' => $this->def_gallons ?? '',
            'def_price' => $this->def_price ?? '',
            'state' => $this->state ?? '',
            'zip_code' => $this->zip_code ?? '',
        ];
    }
}
