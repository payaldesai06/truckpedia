<?php

namespace App\Http\Requests\Api\Automation;

use Illuminate\Foundation\Http\FormRequest;

class DeleteAutomationRequest extends FormRequest {
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
      'schedule' => 'required_without:reminder',
      'schedule.id' => 'required_with:schedule|numeric|exists:automation_schedules,id',
      'reminder' => 'required_without:schedule',
      'reminder.id' => 'required_with:reminder|numeric|exists:automation_reminders,id'
    ];
  }

  /**
   * Get the error messages for the defined validation rules.
   * @return array
   */
  public function messages(): array {
    return [
      'schedule.required' => 'Schedule is required.',
      'schedule.id.required' => 'Schedule id is required.',
      'reminder.required' => 'Reminder is required.',
      'reminder.id.required' => 'Reminder id is required.'
    ];
  }
}
