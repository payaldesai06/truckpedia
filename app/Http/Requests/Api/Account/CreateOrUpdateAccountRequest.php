<?php

namespace App\Http\Requests\Api\Account;

use Exception;
use Illuminate\Foundation\Http\FormRequest;

class CreateOrUpdateAccountRequest extends FormRequest {
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
   *
   * @return array
   * @throws Exception
   */
  public function rules(): array {
    $types = array_combine(
      array_keys(config('accounting.type')),
      array_column(config('accounting.type'), 'name')
    );
    $type = array_search(request('type'), $types);
    $subTypes = [];
    if (!empty($type)) {
      $subTypes = config('accounting.type.' . $type . '.subTypes');
    }
    return [
      'name' => 'required|string|max:255',
      'description' => 'nullable|string|max:255',
      'type' => 'required|string|in:' . implode(',', $types),
      'subType' => 'required|string|in:' . implode(',', $subTypes),
      'parentAccountId' => 'nullable|integer|exists:accounts,id,company_id,'
        . getAuthAdminCompanyId() . ',type,' . $type,
    ];
  }

  public function messages(): array {
    return [
      'parentAccountId.exists' => config('response.account.parentError'),
    ];
  }
}
