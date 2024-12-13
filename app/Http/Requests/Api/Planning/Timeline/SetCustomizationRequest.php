<?php

namespace App\Http\Requests\Api\Planning\Timeline;

use Exception;
use Illuminate\Foundation\Http\FormRequest;

class SetCustomizationRequest extends FormRequest {
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
    $timelineForOptions = implode(',', config('constant.planningCustomization.show.timelineFor'));

    return [
      'show' => 'sometimes|array',
      'show.timelineFor' => 'sometimes|in:' . $timelineForOptions,
      'filters' => 'sometimes|nullable|json',
    ];
  }

  public function messages(): array {
    return [
      'show.timelineFor.in' => 'The timelineFor must be one of the following types: '
        . implode(', ', config('constant.planningCustomization.show.timelineFor')),
    ];
  }
}
