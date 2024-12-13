<?php

namespace App\Http\Requests\Api\InvoiceV2;

use Exception;
use Illuminate\Foundation\Http\FormRequest;

class UpdateInvoiceV2Request extends FormRequest {
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
   * @throws Exception
   */
  public function rules(): array {
    $companyId = getAuthAdminCompanyId();
    $requestedInvoice = config('constant.status.invoice')[2] ?? 'requested';
    $paidInvoice = config('constant.status.invoice')[3] ?? 'paid';
    return [
      'invoiceId' => 'required|integer|exists:invoices,id,company_id,' . $companyId,
      'status' => 'required|string|in:' . implode(',', config('constant.status.invoice')),
      'customerId' => 'required_if:status,' . $requestedInvoice . ',' . $paidInvoice . '|nullable|integer|exists:customers,id,company_id,' . $companyId,
      'invoiceNumber' => 'required_if:status,' . $requestedInvoice . ',' . $paidInvoice . '|nullable|string|min:1|max:255',
      'dueDate' => 'required_if:status,' . $requestedInvoice . ',' . $paidInvoice . '|nullable|date|date_format:' . config('constant.date_format'),
      'shippingAddress' => 'nullable|string|max:255',
      'notes' => 'nullable|string|min:1|max:4000',
      'items' => 'nullable|array',
      'items.*.id' => 'nullable|integer',
      'items.*.name' => 'required|string|max:255',
      'items.*.rate' => 'required|numeric|between:-999999.9999,999999.9999',
      'items.*.qty' => 'required|numeric|between:-999999.9999,999999.9999',
      'items.*.syncToMenu' => ['nullable'],
      'items.*.syncToMenu.singleSelectValue' => 'nullable|integer',
      'items.*.syncToMenu.recordLinkValues' => ['nullable', 'array'],
      'items.*.syncToMenu.recordLinkValues.*.recordId' => [
        'required_with:items.*.syncToMenu.recordLinkValues',
        'integer', 'exists:fc_custom_records,id'
      ],
      'additionalCustomPayments' => 'nullable|array',
      'additionalCustomPayments.*.id' => 'nullable|integer|exists:invoice_additional_custom_payments,id',
      'additionalCustomPayments.*.fieldId' => 'required|integer|exists:invoice_custom_payment_fields,id,company_id,' . $companyId,
      'additionalCustomPayments.*.payment' => 'required|numeric|min:-999999.99|max:999999.99',
      'additionalCustomPayments.*.percentage' => 'nullable|numeric|min:-100|max:100',
    ];
  }

  public function messages(): array {
    return [
      'status.in' => 'The status field must be in ' . implode(',', config('constant.status.invoice')) . '.',
      'items.*.id.integer' => 'The items name field must be a integer.',
      'items.*.name.required' => 'The items name field is required.',
      'items.*.name.string' => 'The items name field must be a string.',
      'items.*.name.max' => 'The items name field maximum length is 255.',
      'items.*.rate.required' => 'The items rate field is required.',
      'items.*.rate.numeric' => 'The items rate field must be an numeric.',
      'items.*.rate.between' => 'The items rate field must be between -999999.9999 and 999999.9999',
      'items.*.qty.required' => 'The items qty field is required.',
      'items.*.qty.numeric' => 'The items qty field must be an numeric.',
      'items.*.qty.between' => 'The items qty field must be between -999999.9999 and 999999.9999',
      'additionalCustomPayments.*.fieldId.required' => 'The additional custom payments field is required.',
      'additionalCustomPayments.*.fieldId.integer' => 'The additional custom payments field must be an integer.',
      'additionalCustomPayments.*.fieldId.exists' => 'The additional custom payments field is invalid.',
      'additionalCustomPayments.*.payment.required' => 'The additional custom payments field is required.',
      'additionalCustomPayments.*.payment.numeric' => 'The additional custom payments field must be a number.',
      'additionalCustomPayments.*.payment.min' => 'The additional custom payments field must be between -999999.99 and 999999.99.',
      'additionalCustomPayments.*.payment.max' => 'The additional custom payments field must be between -999999.99 and 999999.99.',
      'additionalCustomPayments.*.percentage.numeric' => 'The additional custom payments percentage must be a numeric.',
      'additionalCustomPayments.*.percentage.min' => 'The additional custom payments percentage must be between -100 and 100.',
      'additionalCustomPayments.*.percentage.max' => 'The additional custom payments percentage must be between -100 and 100.',
      'items.*.syncToMenu.recordLinkValues.array' => 'The record links record link values field must be an array.',
      'items.*.syncToMenu.recordLinkValues.*.recordId.required_with' => 'The record id field is required.',
      'items.*.syncToMenu.recordLinkValues.*.recordId.integer' => 'The record id field must be an integer.',
      'items.*.syncToMenu.recordLinkValues.*.recordId.exists' => 'The record id field is invalid.',
    ];
  }
}
