<?php

namespace App\Http\Resources\TrailerV2;

use Illuminate\Http\Resources\Json\JsonResource;
use Carbon\Carbon;

class TrailerV2Resource extends JsonResource {
  public function toArray($request): array {
    $tags = [];
    if (!empty($this->tags)) {
      $tags = $this->tags->toArray();
      $tags = array_map(function ($tag) {
        return ['id' => $tag['id']];
      }, $tags);
    }
    return [
      'id' => $this->id ?? null,
      'status' => $this->status ?? null,
      'trailerNumber' => $this->number ?? null,
      'trailerType' => array_keys(config('constant.load.equipment_type'))[$this->trailer_type] ?? null,
      'year' => $this->year ?? null,
      'make' => $this->make ?? null,
      'model' => $this->model ?? null,
      'vin' => $this->vin ?? null,
      'ride' => $this->ride ?? null,
      'width' => $this->width ?? null,
      'licensePlate' => $this->licence_plate ?? null,
      'licenseState' => $this->license_state ?? null,
      'insuranceValue' => $this->insurance_value ?? null,
      'monthlyInsuranceCost' => $this->insurance_monthly_cost ?? null,
      'totalInsuranceCost' => $this->insurance_total_cost ?? null,
      'brakeType' => !is_null($this->brake_type) ? config('constant.brakeType')[$this->brake_type] : null,
      'tireSize' => $this->tire_size ?? null,
      'roof' => $this->roof ?? null,
      'platedWalls' => $this->plated_walls ?? null,
      'vented' => $this->vented ?? null,
      'skirts' => $this->skirts ?? null,
      'rentedOut' => $this->rented_out ?? null,
      'storage' => $this->storage ?? null,
      'annualInspExpireDate' => $this->inspection_expiry ? Carbon::parse($this->inspection_expiry)->format('Y-m-d') : null,
      'insuranceExpireDate' => $this->insurance_expire_date ?? null,
      'registrationExpireDate' => $this->registration_expire_date ?? null,
      'annualPermitExpireDate' => $this->annual_permit_expire_date ?? null,
      'ownershipType' => $this->ownership ?? null,
      'dateAcquired' => $this->date_acquired ?? null,
      'acquireCost' => $this->acquire_cost ?? null,
      'paymentStartDate' => $this->payment_start_date ?? null,
      'paymentEndDate' => $this->payment_end_date ?? null,
      'interestRate' => $this->interest_rate ?? null,
      'lender' => $this->lender ?? null,
      'monthlyPayment' => $this->monthly_payment ?? null,
      'contractNumber' => $this->contract_number ?? null,
      'priceSold' => $this->price_sold ?? null,
      'dateSold' => $this->date_sold ?? null,
      'notes' => !empty($this->trailerNotes) ? TrailerV2NoteResource::collection($this->trailerNotes) : [],
      'tags' => $tags,
      'driverAssignments' => !empty($this->driverAssignments) ? TrailerV2DriverAssignmentResource::collection($this->driverAssignments) : []
    ];
  }
}
