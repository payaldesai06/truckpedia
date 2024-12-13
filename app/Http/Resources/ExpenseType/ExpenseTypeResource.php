<?php

namespace App\Http\Resources\ExpenseType;

use Illuminate\Http\Resources\Json\JsonResource;

class ExpenseTypeResource extends JsonResource
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
            'expense_type_id' => $this->id,
            'admin_company_details_id' => $this->company_id,
            'title' => $this->title
        ];
    }
}
