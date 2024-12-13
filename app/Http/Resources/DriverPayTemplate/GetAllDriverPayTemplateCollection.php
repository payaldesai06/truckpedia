<?php

namespace App\Http\Resources\DriverPayTemplate;

use App\Http\Resources\DriverPayTemplate\GetDriverPayTemplateResource;
use App\Traits\ApiResourceTrait;
use Illuminate\Http\Resources\Json\ResourceCollection;

class GetAllDriverPayTemplateCollection extends ResourceCollection {

  use ApiResourceTrait;

  public $collects = GetDriverPayTemplateResource::class;

  public function toArray($request): array {
    return ['templates' => $this->collection];
  }
}
