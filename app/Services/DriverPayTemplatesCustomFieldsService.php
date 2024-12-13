<?php


namespace App\Services;

use App\Models\DriverPayTemplateCustomField;
use Exception;
use Illuminate\Support\Facades\DB;

class DriverPayTemplatesCustomFieldsService {

  /**
   * Create custom field
   * @return mixed
   * @throws Exception
   */
  public function createCustomFields($request) {
    $driverPayTemplate = $this->createOrUpdateCustomFields($request);
    return ['id' => $driverPayTemplate->id];
  }

  /**
   * Update custom field
   * @return mixed
   * @throws Exception
   */
  public function updateCustomFields($request) {

    $driverPayTemplate = DriverPayTemplateCustomField::where('id', $request->id)->where('company_id', getAuthAdminCompanyId())->first();
    if (empty($driverPayTemplate)) {
      throw new Exception(config('response.driverPayTemplateCustomField.not_found'));
    }
    return $this->createOrUpdateCustomFields($request, $driverPayTemplate);
  }

  /**
   * Get the list of custom field
   * @return mixed
   * @throws Exception
   */
  public function getAllCustomFields() {
    $customFields = DriverPayTemplateCustomField::where('company_id', getAuthAdminCompanyId())
      ->orderBy('id', 'desc')
      ->get();
    $loadFields = [];
    $tripFields = [];
    foreach ($customFields as $field) {
      if (config('constant.driverPayTemplate.target')[$field->target] == 'load') {
        $loadFields[] = [
          'id' =>  $field->id,
          'target' => config('constant.driverPayTemplate.target')[$field->target],
          'type' => config('constant.driverPayTemplate.type')[$field->type],
          'name' => $field->name,
          'defaultAccount' => $field->default_account,
          'defaultRate' => $field->default_rate,
          'defaultPercentage' => $field->default_percentage_in_fractional * 100,
          'defaultPayStartAfter' => round($field->default_pay_start_after),
          'defaultV2' => $field->default_v2,
          'defaultV3' => $field->default_v3,
          'defaultFormula' => $field->default_formula,
          'taxable' => !($field->taxable === 0),
        ];
      } else if (config('constant.driverPayTemplate.target')[$field->target] == 'trip') {
        $tripFields[] = [
          'id' =>  $field->id,
          'target' => config('constant.driverPayTemplate.target')[$field->target],
          'type' => config('constant.driverPayTemplate.type')[$field->type],
          'name' => $field->name,
          'defaultAccount' => $field->default_account,
          'defaultRate' => $field->default_rate,
          'defaultPercentage' => $field->default_percentage_in_fractional * 100,
          'defaultPayStartAfter' => round($field->default_pay_start_after),
          'taxable' => !($field->taxable === 0),
        ];
      }
    }
    return [
      'loadFields' => $loadFields,
      'tripFields' => $tripFields
    ];
  }

  /**
   * Create Or Update custom field using validated request data.
   * @return mixed
   */
  private function createOrUpdateCustomFields($request, $driverPayTemplate = null) {
    return DB::transaction(function () use ($request, $driverPayTemplate) {
      if (!empty($driverPayTemplate)) {
        $getValidatedData = $this->getValidatedData($request, $driverPayTemplate);
        $driverPayTemplate->fill($getValidatedData)->save();
      } else {
        $getValidatedData = $this->getValidatedData($request);
        $driverPayTemplate = DriverPayTemplateCustomField::create($getValidatedData);
      }
      return $driverPayTemplate;
    });
  }

  /**
   * Validated request data to create custom field.
   * @param $request
   * @param null $driverPayTemplate
   * @return array
   * @throws Exception
   */
  private function getValidatedData($request, $driverPayTemplate = null): array {
    $driverPayTemplateType = config('constant.driverPayTemplate.type');
    $valid = [
      'company_id' => getAuthAdminCompanyId() ?? null,
      'target' => !empty($driverPayTemplate) ?  $driverPayTemplate->target : array_search($request->target, config('constant.driverPayTemplate.target')) ?? null,
      'type' =>  !empty($driverPayTemplate) ? $driverPayTemplate->type : array_search($request->type, config('constant.driverPayTemplate.type')) ?? null,
      'name' => $request->name,
      'default_account' => $request->defaultAccount,
      'default_rate' => $request->defaultRate,
      'default_percentage_in_fractional' => !empty($request->defaultPercentage) ? $request->defaultPercentage / 100 : null,
      'default_pay_start_after' => $request->defaultPayStartAfter,
      'default_v2' => $request->defaultV2,
      'default_v3' => $request->defaultV3,
      'taxable' => ($request->taxable === false || $request->taxable === 0) ? 0 : null,
    ];
    // 9 => 'formulaLoadedMiles' and 10 => 'formulaEmptyMiles'
    if (
      $request->type == $driverPayTemplateType[9] || $request->type ==
      $driverPayTemplateType[10]
    ) {
      $valid['default_formula'] = 1;
    }
    return $valid;
  }
}
