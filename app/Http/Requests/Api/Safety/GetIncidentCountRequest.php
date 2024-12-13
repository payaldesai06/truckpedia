<?php

namespace App\Http\Requests\Api\Safety;

use Illuminate\Foundation\Http\FormRequest;

class GetIncidentCountRequest extends FormRequest {

  /**
   * Get the validation rules that apply to the request.
   *
   * @return array
   */
  public function rules(): array {
    return [
      'tagId' => [
        'nullable', 'integer',
        'exists:tags,id,company_id,' . getAuthAdminCompanyId(),
        function ($attr, $value, $fail) {
          if (!empty(request('tagId')) && !empty(request('parentCompanyOnly'))) {
            $fail('Can not have both tagId and parentCompanyOnly at the same time.');
          }
        }
      ],
      'parentCompanyOnly' => 'nullable|boolean',
      'year' => 'nullable|integer|digits:4',
    ];
  }
}
