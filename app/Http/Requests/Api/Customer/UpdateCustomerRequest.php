<?php

namespace App\Http\Requests\Api\Customer;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class UpdateCustomerRequest extends FormRequest {
  public function authorize(): bool {
    return true;
  }

  public function rules(): array {
    return [
      'customer_type' => [
        'required',
        'in:' . implode(',', config('constant.customer_type'))
      ],
      'status' => 'nullable|string|in:' . implode(',', config('constant.status.customer')),
      'company_name' => 'required',
      'mcNumber' => 'nullable|string|max:255',
      'address' => 'nullable',
      'state' => 'nullable',
      'city' => 'nullable',
      'zip_code' => ['nullable'],
      'primary_contact' => 'nullable',
      'phone_number' => ['nullable'],
      'email' => ['nullable', 'email'],
      'ccEmails' => 'nullable|array',
      'ccEmails.*' => 'email|distinct',
      'billing_address' => 'nullable',
      'billing_state' => 'nullable',
      'billing_city' => 'nullable',
      'billing_zip_code' => ['nullable'],
      'billing_contact' => 'nullable',
      'billing_phone_number' => ['nullable'],
      'billing_email' => ['nullable', 'email'],
      'billing_cc_emails' => ['nullable', 'array'],
      'billing_cc_emails.*' => 'email|distinct',
      'payment_terms_day' => ['required', 'integer'],
      'billToCodes' => ['nullable', 'array'],
      'billToCodes.*' => ['required', 'string', 'max:255'],
      'salesRep' => 'nullable|string|max:255',
      'shippingCarrierAcct' => 'nullable|string|max:255',
      'notes' => 'nullable|string|max:4000',
      'noFactoring' => 'nullable|boolean',
      'automationDriverButtons' => 'nullable|boolean',
      'mergeInvoice' => 'nullable|boolean',
      'massInvoiceUseIndividualInvoices' => 'nullable|boolean',
      'inExternal' => 'nullable|string|in:' . implode(',', config('constant.customer.inExternal')),
    ];
  }
  public function messages(): array {
    return [
      'status.in' => 'The status field must be in ' . implode(',', config('constant.status.customer')) . '.',
      'billing_cc_emails.*.email' => 'The billing cc emails must be a valid email address.',
      'billing_cc_emails.*.distinct' => 'The billing cc emails must be unique email address.',
      'ccEmails.*.email' => 'The cc emails must be a valid email address.',
      'ccEmails.*.distinct' => 'The cc emails must be unique email address.',
      'billToCodes.*.required' => 'The billToCodes is required',
      'billToCodes.*.string' => 'The billToCodes must be a string',
      'billToCodes.*.max' => 'The billToCodes maximum length is 255.',
      'salesRep.string' => 'The salesRep field must be a string.',
      'salesRep.max' => 'The salesRep field maximum length is 255.',
      'shippingCarrierAcct.string' => 'The shippingCarrierAcct field must be a string.',
      'shippingCarrierAcct.max' => 'The shippingCarrierAcct field maximum length is 255.',
      'inExternal.in' => 'The inExternal field must be in ' . implode(',', config('constant.customer.inExternal')) . '.',
    ];
  }
}
