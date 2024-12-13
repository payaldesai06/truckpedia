<?php

namespace App\Http\Requests\Api\CompanyUser;

use App\Models\Tag;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\Rule;

class CreateCompanyUserRequest extends FormRequest {
  /**
   * Determine if the user is authorized to make this request.
   *
   * @return bool
   */
  public function authorize() {
    return true;
  }

  /**
   * Get the validation rules that apply to the request.
   *
   * @return array
   */
  public function rules() {
    return [
      'first_name' => 'required',
      'last_name' => 'required',
      'email' => 'required|email|unique:users',
      'role' => [
        'required',
        Rule::in([
          config('constant.roles.dispatcher'),
          config('constant.roles.admin'),
          config('constant.roles.warehouse_operator'),
          config('constant.roles.tag_operator'),
          config('constant.roles.maintenance'),
        ])
      ],
      'tags' => [
        Rule::requiredIf(request('role') == config('constant.roles.tag_operator')),
        'array', 'min:1'
      ],
      'adminAlsoBeDispatcher' => 'boolean',
      'commission_fractional' => [
        'required_if:role,=,' . config('constant.roles.dispatcher'),
        Rule::requiredIf(request('adminAlsoBeDispatcher') == true),
        'numeric', 'min:0', 'max:1'
      ],
      'commission_on' => [
        'required_if:role,=,' . config('constant.roles.dispatcher'),
        Rule::requiredIf(request('adminAlsoBeDispatcher') == true),
        "in:" . implode(',', config('constant.commission_on')),
      ],
      'customFormulaPrimary' => [
        'nullable',
        'string',
        'required_if:commission_on,' .
        config('constant.commission_on.custom_formula'),
        "in:" . implode(',', config('constant.commissionCustomFormulaOperand')),
      ],
      'commissionCustomFormulaOperator' => [
        'nullable',
        'string',
        "in:" . implode(',', config('constant.commissionCustomFormulaOperator')),
      ],
      'customFormulaSecondary' => [
        'nullable',
        'string',
        "in:" . implode(',', config('constant.commissionCustomFormulaOperand')),
      ],
      'hideLoadsWithNoTag' => 'nullable|boolean',
    ];
  }

  /**
   * Configure the validator instance.
   *
   * @param \Illuminate\Validation\Validator $validator
   * @return void
   */
  public function withValidator($validator) {
    if ($validator->passes() && $this->role == config('constant.roles.tag_operator')) {
      $companyId = Auth::user()->admin_company_detail_id;
      $allTags = $this->tags;
      $validator->after(function ($validator) use ($companyId, $allTags) {
        $uniqueTags = array_unique($allTags);

        if (count($uniqueTags) !== count($allTags)) {
          $validator->errors()->add('tags', 'Some Tags are duplicated');
        } else {
          $allExistTags = Tag::whereIn('id', $uniqueTags)->where('company_id', $companyId)->count();
          if (count($uniqueTags) !== $allExistTags) {
            $validator->errors()->add('tags', 'Some Tags do not exist');
          }
        }
      });
    }
  }
}
