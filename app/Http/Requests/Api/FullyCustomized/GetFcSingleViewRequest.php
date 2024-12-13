<?php

namespace App\Http\Requests\Api\FullyCustomized;

use Illuminate\Foundation\Http\FormRequest;

class GetFcSingleViewRequest extends FormRequest {
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
   */
  public function rules(): array {
    return [
      'viewId' => ['required', 'integer', 'exists:fc_views,id'],
      'loadFilters' => ['nullable'],
      'loadFilters.startDate' => ['required_with:loadFilters', 'date', 'date_format:' . config('constant.date_format')],
      'loadFilters.endDate' => ['required_with:loadFilters', 'date', 'date_format:' . config('constant.date_format')]
    ];
  }

  public function messages(): array {
    return [
      'loadFilters.startDate.required_with' => 'The start date is required.',
      'loadFilters.startDate.date' => 'The start date is invalid.',
      'loadFilters.startDate.date_format' => 'The load start date does not match the format Y-m-d.',

      'loadFilters.endDate.required_with' => 'The endDate date is required.',
      'loadFilters.endDate.date' => 'The endDate date is invalid.',
      'loadFilters.endDate.date_format' => 'The load endDate date does not match the format Y-m-d.',
    ];
  }
}
