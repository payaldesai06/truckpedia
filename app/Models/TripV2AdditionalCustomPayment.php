<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class TripV2AdditionalCustomPayment extends Model {
  use SoftDeletes;

  protected $table = "trips_v2_additional_custom_payments";
  protected $guarded = [];

  public function trip() {
    return $this->belongsTo(TripV2::class, 'trip_id');
  }

  public function field() {
    return $this->belongsTo(TripV2CustomPaymentField::class, 'field_id');
  }
}
