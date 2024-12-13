<?php

namespace App\Http\Resources\LoadDetail;

use App\Http\Resources\Load\LoadResource;
use App\Traits\ApiResourceTrait;
use Illuminate\Http\Resources\Json\ResourceCollection;
use Illuminate\Pagination\AbstractPaginator;

class LoadDetailCollection extends ResourceCollection
{
    use ApiResourceTrait;

    public $collects = LoadDetailResource::class;

    public function toArray($request)
    {
        return $this->collection;
    }
}
