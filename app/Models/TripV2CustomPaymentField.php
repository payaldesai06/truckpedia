<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class TripV2CustomPaymentField extends Model {
  use SoftDeletes;

  protected $table = "trips_v2_custom_payment_fields";
  protected $guarded = [];

  public function company() {
    return $this->belongsTo(AdminCompanyDetail::class, 'company_id');
  }

  public function tripV2AdditionalCustomPayments() {
    return $this->hasMany(TripV2AdditionalCustomPayment::class, 'field_id');
  }
}
