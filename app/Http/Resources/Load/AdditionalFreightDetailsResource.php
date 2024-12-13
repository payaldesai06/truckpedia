<?php

namespace App\Http\Resources\Load;

use App\Models\AccessorialDeduction;
use App\Models\AccessorialFee;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Collection;

class AdditionalFreightDetailsResource extends JsonResource {
  /**
   * Transform the resource into an array.
   *
   * @param Request $request
   * @return array
   */
  public function toArray($request) {
    return [
      'equipmentType' => strval($this->u) ?? "",
      'description' => strval($this->d) ?? "",
      'weight' => $this->e ?? null,
      'weightUnit' => $this->i ? config('constant.weight_unit')[$this->i] : '',
      'qty' => $this->q ?? null,
      'qtyRate' => $this->y ?? null,
      'qtyUnit' => $this->t ? config('constant.quantity_unit')[$this->t] : '',
      'length' => strval($this->l) ?? null,
      'width' => strval($this->w) ?? null,
      'height' => strval($this->h) ?? null,
    ];
  }
}
