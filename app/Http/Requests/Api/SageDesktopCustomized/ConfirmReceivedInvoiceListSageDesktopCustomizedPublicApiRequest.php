<?php

namespace App\Http\Requests\Api\SageDesktopCustomized;

use Illuminate\Foundation\Http\FormRequest;

class ConfirmReceivedInvoiceListSageDesktopCustomizedPublicApiRequest extends FormRequest {

  /**
   * Get the validation rules that apply to the request.
   *
   * @return array
   */
  public function rules(): array {
    return [
      'company' => 'required|string',
      'key' => 'required|string',
      'invoices' => 'required|array',
      'invoices.*.id' => 'required|integer', // exists:trips_v2,id
      // comment off for testing code
      'invoices.*.sageInvoiceNo' => 'required|string',
    ];
  }

  public function messages(): array {
    return [
      'invoices.*.id.required' => 'The invoices id field is required.',
      'invoices.*.id.integer' => 'The invoices id field must be an integer.',
      // 'invoices.*.id.exists' => 'The invoices id field is not valid.',
      'invoices.*.sageInvoiceNo.required' => 'The invoices sageInvoiceNo field is required.',
      'invoices.*.sageInvoiceNo.string' => 'The invoices sageInvoiceNo field must be a string.',
    ];
  }
}
