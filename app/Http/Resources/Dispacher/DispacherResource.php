<?php

namespace App\Http\Resources\Dispacher;

use App\Http\Resources\Admin\AdminResource;
use Illuminate\Http\Resources\Json\JsonResource;

// Used in LoadResource and DispacherCollection (used in get all dispatchers API).
class DispacherResource extends JsonResource {
  /**
   * Transform the resource into an array.
   *
   * @param  \Illuminate\Http\Request  $request
   * @return array
   */
  public function toArray($request) {

    return [
      $this->merge(new AdminResource($this)),
      'user_details' => [
        'first_name' => $this->dispacherDetail->first_name ?? "",
        'last_name' => $this->dispacherDetail->last_name ?? "",
        'commission_fractional' => $this->dispacherDetail->commission_fractional ?? '',
        'commission_on' => $this->dispacherDetail->commission_on ?? '',
        'customFormulaPrimary' => $this->dispacherDetail && $this->dispacherDetail->custom_formula_primary ?
          config('constant.commissionCustomFormulaOperand')[$this->dispacherDetail->custom_formula_primary] :
          null,
        'commissionCustomFormulaOperator' => $this->dispacherDetail && $this->dispacherDetail->custom_formula_operator ?
          config('constant.commissionCustomFormulaOperator')[$this->dispacherDetail->custom_formula_operator] :
          null,
        'customFormulaSecondary' => $this->dispacherDetail && $this->dispacherDetail->custom_formula_secondary ?
          config('constant.commissionCustomFormulaOperand')[$this->dispacherDetail->custom_formula_secondary] :
          null,
      ],
    ];
  }
}
