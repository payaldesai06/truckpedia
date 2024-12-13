<?php

namespace App\Http\Resources\Truck;

use Carbon\Carbon;
use Illuminate\Http\Resources\Json\JsonResource;

class TruckV2Resource extends JsonResource {

  /**
   * Truck V2 Resource.
   * @param $request
   * @return array
   */
  public function toArray($request): array {
    $tags = [];
    if (!empty($this->tags)) {
      $tags = $this->tags->toArray();
      $tags = array_map(function ($tag) {
        return ['id' => $tag['id']];
      }, $tags);
    }
    return [
      'id' => $this->id ?? '',
      'status' => $this->status ?? '',
      'truckNumber' => $this->number ?? '',
      'year' => $this->year ?? '',
      'make' => $this->make ?? '',
      'model' => $this->model ?? '',
      'color' => $this->color ?? '',
      'vin' => $this->truck_vin ?? '',
      'licensePlate' => $this->licence_plate ?? '',
      'licenseState' => $this->license_state ?? '',
      'hourlyCost' => $this->hourly_cost ?? null,
      'insuranceValue' => $this->insurance_value ?? '',
      'monthlyInsuranceCost' => $this->insurance_monthly_cost ?? '',
      'totalInsuranceCost' => $this->insurance_total_cost ?? '',
      'odometerAtPurchase' => $this->odometer_at_purchase ?? '',
      'brakeTypeFront' => !empty($this->brake_type_front) ? config('constant.brakeType')[$this->brake_type_front] : '',
      'brakeTypeRear' => !empty($this->brake_type_rear) ? config('constant.brakeType')[$this->brake_type_rear] : '',
      'speedLimitPedal' => $this->speed_limit_pedal ?? '',
      'speedLimitCruise' => $this->speed_limit_cruise ?? '',
      'fuelTankCapacity' => $this->fuel_tank_capacity ?? '',
      'apuUnit' => $this->apu_unit ?? '',
      'tireSize' => $this->tire_size ?? '',
      'idleShutoff' => $this->idle_shutoff ?? '',
      'irpExpirationDate' => $this->irp_expire_date ?? '',
      'annualInspExpireDate' => $this->inspection_expiry ? Carbon::parse($this->inspection_expiry)->format('Y-m-d') : '',
      'insuranceExpireDate' => $this->insurance_expire_date ?? '',
      'registrationExpireDate' => $this->registration_expire_date ?? null,
      'annualPermitExpireDate' => $this->annual_permit_expire_date ?? null,
      'iftaDecalNumber' => $this->ifta_decal_number ?? '',
      'ownershipType' => $this->ownership ?? '',
      'dateAcquired' => $this->date_acquired ?? '',
      'acquireCost' => $this->acquire_cost ?? '',
      'paymentStartDate' => $this->payment_start_date ?? '',
      'paymentEndDate' => $this->payment_end_date ?? '',
      'interestRate' => $this->interest_rate ?? '',
      'lender' => $this->lender ?? '',
      'monthlyPayment' => $this->monthly_payment ?? '',
      'contractNumber' => $this->contract_number ?? '',
      'priceSold' => $this->price_sold ?? '',
      'dateSold' => $this->date_sold ?? '',
      'fuelCardNumber' => $this->fuel_card_number ?? null,
      'notes' => !empty($this->truckNotes) ? TruckV2NoteResource::collection($this->truckNotes) : [],
      'tags' => $tags,
      'driverAssignments' => !empty($this->driverAssignments) ?
        TruckV2DriverAssignmentResource::collection($this->driverAssignments) : [],
      'truckTypes' => $this->truck_types,
    ];
  }
}
