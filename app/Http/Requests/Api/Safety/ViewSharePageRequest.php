<?php

namespace App\Http\Requests\Api\Safety;

use Illuminate\Foundation\Http\FormRequest;

class ViewSharePageRequest extends FormRequest {

  /**
   * Get the validation rules that apply to the request.
   *
   * @return array
   */
  public function rules(): array {
    return [
      'incidentId' => 'required|integer|exists:incidents,id',
      'type' => 'required|string|in:' . config('constant.incident.share.LinkType'),
      'token' => 'required|string|min:2',
    ];
  }
}
