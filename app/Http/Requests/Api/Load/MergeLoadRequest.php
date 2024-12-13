<?php

namespace App\Http\Requests\Api\Load;

use Exception;
use Illuminate\Foundation\Http\FormRequest;

class MergeLoadRequest extends FormRequest {
  /**
   * Determine if the user is authorized to make this request.
   *
   * @return bool
   */
  public function authorize(): bool {
    return true;
  }

  /**
   * Get the validation rules that apply to the request.
   * @return array
   * @throws Exception
   */
  public function rules(): array {
    $companyId = getAuthAdminCompanyId();
    return [
      'loads' => 'required_without:byLoadNumber|array|size:2',
      'loads.*.loadId' => 'required|integer|distinct|exists:loads,id,admin_company_detail_id,' .
        $companyId,
      'byLoadNumber' => 'required_without:loads',
      'byLoadNumber.currentLoadId' => 'required_with:byLoadNumber|integer|exists:loads,id,admin_company_detail_id,' .
        $companyId,
      'byLoadNumber.targetLoadNumber' => 'required_with:byLoadNumber|integer|exists:loads,load_unique_id,admin_company_detail_id,' .
        $companyId,
    ];
  }

  public function messages(): array {
    return [
      'loads.*.loadId.required' => 'The loads loadId field is required.',
      'loads.*.loadId.integer' => 'The loads loadId field must be an integer.',
      'loads.*.loadId.distinct' => 'The loads loadId field must be unique',
      'loads.*.loadId.exists' => 'The loads loadId field is invalid',
      'byLoadNumber.currentLoadId.required_with' => 'The currentLoadId field is required.',
      'byLoadNumber.currentLoadId.integer' => 'The currentLoadId field must be an integer.',
      'byLoadNumber.currentLoadId.exists' => 'The currentLoadId field is invalid',
      'byLoadNumber.targetLoadNumber.required_with' => 'The targetLoadNumber field is required.',
      'byLoadNumber.targetLoadNumber.integer' => 'The targetLoadNumber field must be an integer.',
      'byLoadNumber.targetLoadNumber.exists' => 'Cannot find a valid load given the input load number',
    ];
  }
}
