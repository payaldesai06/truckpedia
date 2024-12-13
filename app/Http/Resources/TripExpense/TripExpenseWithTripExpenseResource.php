<?php

namespace App\Http\Resources\TripExpense;

use App\Http\Resources\ExpenseType\ExpenseTypeResource;
use App\Http\Resources\TripExpense\TripImageCollection;
use Illuminate\Http\Resources\Json\JsonResource;

class TripExpenseWithTripExpenseResource extends JsonResource
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
            $this->merge(new TripExpenseResource($this)),
            'expense_type' => [$this->merge(new ExpenseTypeResource($this->expenseType))] ?? "",
            'expense_images' => [$this->merge(new TripImageCollection($this->tripExpenseImages))] ?? ""
        ];
    }
}
