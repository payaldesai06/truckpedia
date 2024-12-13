<?php

namespace App\Http\Resources\CompanyWebsite;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class BlogResource extends JsonResource {
  /**
   * Transform the resource into an array.
   *
   * @param Request $request
   * @return array
   */
  public function toArray($request): array {
    return [
      'id' => $this->id,
      'title' => $this->title,
      'content' => json_decode($this->content)
    ];
  }
}
