<?php

namespace App\Http\Requests\Api\SageDesktopCustomized;

use Illuminate\Foundation\Http\FormRequest;

class GetInvoiceSageDesktopCustomizedPublicApiRequest extends FormRequest {

  /**
   * Get the validation rules that apply to the request.
   *
   * @return array
   */
  public function rules(): array {
    return [
      'company' => 'required|string',
      'key' => 'required|string'
    ];
  }
}
