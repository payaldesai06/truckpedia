<?php

namespace App\Http\Requests\Api\Planning;

use Illuminate\Foundation\Http\FormRequest;
use Exception;

class DestroyScheduleRequest extends FormRequest {
  /**
   * Determine if the user is authorized to make this request.
   *
   * @return bool
   */
  public function authorize() {
    return true;
  }

  /**
   * Get the validation rules that apply to the request.
   *
   * @return array
   * @throws Exception
   */
  public function rules() {
    return [
      'truckAvalRptSchedId' => 'required_without:truckAvalOnceSchedId|integer|exists:truck_aval_rpt_scheds,id',
      'truckAvalOnceSchedId' => 'required_without:truckAvalRptSchedId|integer|exists:truck_aval_once_scheds,id'
    ];
  }
}
