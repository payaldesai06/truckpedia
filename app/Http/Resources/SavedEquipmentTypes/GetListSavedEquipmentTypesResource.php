<?php

namespace App\Http\Resources\SavedEquipmentTypes;

use Illuminate\Http\Resources\Json\JsonResource;

class GetListSavedEquipmentTypesResource extends JsonResource {

  /**
   * Transform the resource into an array.
   * @param $request
   * @return array
   */
  public function toArray($request): array {
    return [
      'id' => $this->id ?? null,
      't3AssetId' => $this->t3_asset_id ?? null,
      'equipmentType' => $this->equipment_type ?? "",
      'description' => $this->description ?? "",
      'weight' => $this->weight ?? null,
      'weightUnit' => $this->weight_unit ? config('constant.weight_unit')[$this->weight_unit] : null,
      'qty' => $this->qty ?? null,
      'qtyUnit' => $this->qty_unit ? config('constant.quantity_unit')[$this->qty_unit] : null,
      'length' => $this->length ?? "",
      'width' => $this->width ?? "",
      'height' => $this->height ?? ""
    ];
  }
}
