<?php

namespace App\Services;

use App\Http\Requests\Api\SavedEquipmentTypes\CreateSavedEquipmentTypeRequest;
use App\Http\Requests\Api\SavedEquipmentTypes\UpdateSavedEquipmentTypeRequest;
use App\Models\SavedEquipmentType;
use Exception;

class SavedEquipmentTypeService {

  /**
   * Get list Authenticated Company saved equipment type.
   * @param $request
   * @return mixed
   * @throws Exception
   */
  public function getList($request) {
    $perPage = $request->perPage ?? config('response.per_page');
    $equipmentType = $request->filters['equipmentType'] ?? null;
    return SavedEquipmentType::where('company_id', getAuthAdminCompanyId())
      ->when(isset($equipmentType), function ($query) use($equipmentType) {
        return $query->where('equipment_type', 'like', '%' . $equipmentType . '%');
      })->paginate($perPage);
  }

  /**
   * Create saved equipment type for a company.
   * @param CreateSavedEquipmentTypeRequest $request
   * @return mixed
   * @throws Exception
   */
  public function create(CreateSavedEquipmentTypeRequest $request) {
    $companyId = getAuthAdminCompanyId();
    $getValidatedData = $this->getValidatedData($request);
    $getValidatedData['company_id'] = $companyId;
    return SavedEquipmentType::create($getValidatedData);
  }

  /**
   * Update saved equipment type for a company.
   * @param UpdateSavedEquipmentTypeRequest $request
   * @return mixed
   * @throws Exception
   */
  public function update(UpdateSavedEquipmentTypeRequest $request) {
    $companyId = getAuthAdminCompanyId();
    $savedAddress = SavedEquipmentType::where([
      'id' => $request->id,
      'company_id' => $companyId
    ])->first();

    if (empty($savedAddress)) {
      throw new Exception(config('response.customer.error'));
    }
    $getValidatedData = $this->getValidatedData($request);
    $savedAddress->update($getValidatedData);
    return $savedAddress;
  }

  /**
   * Validated request data to create equipment type.
   * @param $request
   * @return array
   */
  private function getValidatedData($request): array {
    return [
      'equipment_type' => $request->equipmentType ?? null,
      'description' => $request->description ?? null,
      'weight' => $request->weight ?? null,
      'weight_unit' => $request->weightUnit ?
        array_search($request->weightUnit, config('constant.weight_unit')) : null,
      'qty' => $request->qty ?? null,
      'qty_unit' => $request->qtyUnit ?
        array_search($request->qtyUnit, config('constant.quantity_unit')) : null,
      'length' => $request->length ?? null,
      'width' => $request->width ?? null,
      'height' => $request->height ?? null
    ];
  }

  /**
   * Delete saved equipment type using id.
   * @return mixed
   * @throws Exception
   */
  public function delete() {
    $companyId = getAuthAdminCompanyId();
    $address = SavedEquipmentType::where('id', request('id'))
      ->where('company_id', $companyId)
      ->first();
    if (empty($address)) {
      throw new Exception(config('response.customer.error'));
    }
    return $address->delete();
  }
}
