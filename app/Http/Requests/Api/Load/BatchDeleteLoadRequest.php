<?php

namespace App\Http\Requests\Api\Load;

use Illuminate\Foundation\Http\FormRequest;

class BatchDeleteLoadRequest extends FormRequest {

  public function authorize(): bool {
    return true;
  }

  public function rules(): array {
    return [
      'loadIds' => 'required|distinct|array|min:1|exists:loads,id,admin_company_detail_id,'.getAuthAdminCompanyId()
    ];
  }
}
