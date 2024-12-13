<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class TripV2TemplatePayDetail extends Model {
  use SoftDeletes;

  protected $table = "trips_v2_template_pay_details";
  protected $guarded = [];

  protected $casts = [
    'v1' => 'double',
    'v2' => 'double',
    'v3' => 'double',
  ];

  public function trip() {
    return $this->belongsTo(Trip::class, 'trip_id');
  }

  public function loadDetail() {
    return $this->belongsTo(Load::class, 'load_id');
  }

  public function driverPayTemplateCustomField() {
    return $this->belongsTo(DriverPayTemplateCustomField::class, 'field_id');
  }
}
