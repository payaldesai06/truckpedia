<?php

namespace App\Http\Requests\Api\InvoiceV2;

use Exception;
use Illuminate\Foundation\Http\FormRequest;

class MarkPaidInvoiceV2Request extends FormRequest {
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
    return [
      'invoiceId' => 'required|integer|exists:invoices,id,company_id,' . getAuthAdminCompanyId()
    ];
  }
}
