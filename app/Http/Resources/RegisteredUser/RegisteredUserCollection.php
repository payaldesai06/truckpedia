<?php

namespace App\Http\Resources\RegisteredUser;

use Illuminate\Http\Resources\Json\ResourceCollection;
use Illuminate\Pagination\AbstractPaginator;
use App\Traits\ApiResourceTrait;

class RegisteredUserCollection extends ResourceCollection
{
    use ApiResourceTrait;

    public $collects = RegisteredUserResource::class;

    public function toArray($request): array
    {
        $collection = ['data' => $this->collection];

        if ($this->resource instanceof AbstractPaginator) {
            $paginated = $this->resource->toArray();
            $collection['links'] = $this->paginationLinks($paginated);
            $collection['meta'] = $this->meta($paginated);
        }

        return $collection;
    }
}
