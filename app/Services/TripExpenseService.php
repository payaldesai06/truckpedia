<?php


namespace App\Services;

use App\Models\TripExpense;
use App\Models\TripExpenseImages;

class TripExpenseService
{
    public function getAllTripExpenses()
    {
        return TripExpense::where('trip_id', '=', request('trip'))
            ->orderBy('id', 'DESC')
            ->get();
    }

    public function create()
    {
            $validatedData = $this->getValidatedData();
            $itemImages = request('item_images');
            $trip = TripExpense::create($validatedData);
            $tripId = $trip->id;
            if (!empty($itemImages)) {
                foreach ($itemImages as $item) {
                    if (!empty($item['image_name'])) {
                      TripExpenseImages::create([
                          'trip_expense_id' => $tripId,
                          'image_name' => $item['image_name']
                      ]);
                    }
                }
            }
            return $trip;
    }

    public function update()
    {
        $tripExpenses = $this->getTripExpense();
        $tripExpenses->update($this->getValidatedData());
        $tripExpenseImages = $tripExpenses->tripExpenseImages;
        $itemImages = request('item_images');

        if (!empty($itemImages)) {
            $itemImages = collect($itemImages)->pluck('image_name')->toArray();

            /* delete old expanses image  */
            $oldImagesId = $tripExpenseImages->whereNotIn('image_name', $itemImages)->pluck('id')->toArray();
            TripExpenseImages::destroy($oldImagesId);

            $newImages = array_unique(array_merge($tripExpenseImages->pluck('image_name')->toArray(), $itemImages));

            foreach ($newImages as $imageName) {
                if (!$tripExpenseImages->contains('image_name', $imageName)) {
                    TripExpenseImages::create(['trip_expense_id' => request('tripExpenses'), 'image_name' => $imageName]);
                }
            }
        }

        return $tripExpenses;
    }

    public function delete()
    {
        return tap($this->getTripExpense())->delete();
    }

    private function getTripExpense()
    {
        return TripExpense::where('id', request('tripExpenses'))->with('tripExpenseImages')->first();
    }

    private function getValidatedData()
    {
        return [
            'expense_type_id' => request('expense_type_id'),
            'trip_id' => request('trip_id'),
            'date' => request('date'),
            'quantity_description' => request('quantity_description'),
            'cost' => request('cost'),
            'vendor_address' => request('vendor_address'),
            'reimbursed' => request('reimbursed'),
            'state' => request('state'),
            'zip_code' => request('zip_code'),
            'diesel_gallons' => request('diesel_gallons'),
            'diesel_price' => request('diesel_price'),
            'def_gallons' => request('def_gallons'),
            'def_price' => request('def_price'),
        ];
    }
}
