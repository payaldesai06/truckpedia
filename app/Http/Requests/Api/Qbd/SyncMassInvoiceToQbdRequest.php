<?php

namespace App\Http\Requests\Api\Qbd;

use Illuminate\Foundation\Http\FormRequest;

class SyncMassInvoiceToQbdRequest extends FormRequest {
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
      'invoiceNumber' => 'required|numeric|gt:0',
      'loadIds' => 'required|array|min:2',
      'loadIds.*' => 'numeric|distinct'
    ];
  }
}
