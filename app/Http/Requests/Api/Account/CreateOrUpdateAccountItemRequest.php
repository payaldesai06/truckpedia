<?php

namespace App\Http\Requests\Api\Account;

use Exception;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class CreateOrUpdateAccountItemRequest extends FormRequest {
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
    $itemType = config('constant.accounting.item.type');

    $companyId = getAuthAdminCompanyId();
    request()->merge(['companyId' => $companyId]);
    $rules = [
      'name' => 'required|string|max:255',
      'incomeDescription' => 'nullable|string|max:255',
      'expenseDescription' => 'nullable|string|max:255',
      'incomeAccountId' => [
        'nullable',
        'integer',
        Rule::requiredIf(function () {
          return empty($this->input('expenseAccountId'));
        }),
        'exists:accounts,id,company_id,' . $companyId,
      ],
      'expenseAccountId' => [
        'nullable',
        'integer',
        Rule::requiredIf(function () {
          return empty($this->input('incomeAccountId'));
        }),
        'exists:accounts,id,company_id,' . $companyId,
      ],
    ];

    if ($this->method() == 'POST') {
      $rules['type'] = 'required|string|in:' . implode(',', $itemType);
    }
    return $rules;
  }

  public function messages(): array {
    $itemType = implode(', ', config('constant.accounting.item.type'));
    return [
      'type.in' => 'The type field must be in ' . $itemType . '.'
    ];
  }
}
