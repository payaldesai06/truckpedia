<?php

namespace App\Http\Requests\Api\AuthorizeNet;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class ProcessPaymentRequest extends FormRequest {
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
   */
  public function rules(): array {
    return [
      'invoiceId' => 'required|integer|exists:invoices,id',
      'paymentAmount' => 'required|numeric|between:-999999.99,999999.99',
      'paymentNonce' => 'required',
    ];
  }
}
