<?php

namespace App\Http\Requests\Api\Load;

use Illuminate\Foundation\Http\FormRequest;

class UpdateLoadDispatcherNotesRequest extends FormRequest {
  public function authorize(): bool {
    return true;
  }

  public function rules(): array {
    return [
      'dispatcher_notes' => 'nullable|string|max:4000',
    ];
  }
}
