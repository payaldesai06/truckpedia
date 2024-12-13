<?php

namespace App\Http\Resources\TripExpense;

use App\Traits\ApiResourceTrait;
use Illuminate\Http\Resources\Json\ResourceCollection;

class TripImageCollection extends ResourceCollection
{
    use ApiResourceTrait;

    public $collects = TripImageResource::class;

    public function toArray($request)
    {
        return $this->collection;
    }
}
