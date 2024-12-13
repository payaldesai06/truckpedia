<?php

namespace App\Http\Resources\CompanyUser;

use App\Http\Resources\Admin\AdminResource;
use App\Models\AdminDetail;
use App\Models\DispacherDetail;
use App\Models\TagOperatorDetail;
use App\Models\WarehouseOperatorDetail;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Arr;

class UserResource extends JsonResource {
  /**
   * Transform the resource into an array.
   *
   * @param Request $request
   * @return array
   */
  protected $data;

  private function details() {
    $role = $this->role;
    if ($role == config('constant.roles.dispatcher')) {
      return $this->dispatcherDetails();
    } elseif ($role == config('constant.roles.admin')) {
      return AdminDetail::select('first_name', 'last_name')->where('user_id', $this->id)->first();
    } elseif ($role == config('constant.roles.tag_operator')) {
      return TagOperatorDetail::select('first_name', 'last_name')->where('user_id', $this->id)->first();
    } elseif ($role == config('constant.roles.warehouse_operator')) {
      return WarehouseOperatorDetail::select('first_name', 'last_name')->where('user_id', $this->id)->first();
    }
  }

  private function dispatcherDetails() {
    return DispacherDetail::select(
      'commission_fractional',
      'commission_on',
      'first_name',
      'last_name',
      'custom_formula_primary',
      'custom_formula_operator',
      'custom_formula_secondary'
    )->where('user_id', $this->id)->first();
  }

  public function toArray($request): array {
    $data = $this->details();
    $userDetails = [
      'first_name' => $this->first_name ?? "",
      'last_name' => $this->last_name ?? "",
    ];

    if (!empty($this->multiple_roles) && $this->multiple_roles == 1) {
      $dispatcher = $this->dispatcherDetails();
      $this->addCommissionDetails($userDetails, $dispatcher);
    }

    $tags = [];
    if ($this->role == config('constant.roles.dispatcher')) {
      $this->addCommissionDetails($userDetails, $data);
    }
    if(!empty($this->tags)){
      $tags = Arr::pluck($this->tags->toArray(), 'id');
    }
    return [
      $this->merge(new AdminResource($this)),
      'user_details' => $userDetails,
      'tags' => $tags
    ];
  }

  private function addCommissionDetails(&$userDetails, $data): void {
    $userDetails['commission_fractional'] = $data && $data->commission_fractional ?
      $data->commission_fractional : '';
    $userDetails['commission_on'] = $data && $data->commission_on ?
      $data->commission_on : '';
    $userDetails['customFormulaPrimary'] = $data && $data->custom_formula_primary ?
      config('constant.commissionCustomFormulaOperand')[$data->custom_formula_primary] :
      null;
    $userDetails['commissionCustomFormulaOperator'] = $data && $data->custom_formula_operator ?
      config('constant.commissionCustomFormulaOperator')[$data->custom_formula_operator] :
      null;
    $userDetails['customFormulaSecondary'] = $data && $data->custom_formula_secondary ?
      config('constant.commissionCustomFormulaOperand')[$data->custom_formula_secondary] :
      null;
  }
}
