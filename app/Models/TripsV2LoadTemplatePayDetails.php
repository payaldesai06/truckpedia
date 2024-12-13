<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\SoftDeletes;

class TripsV2LoadTemplatePayDetails extends Model {
  use SoftDeletes;

  protected $table = 'trips_v2_load_template_pay_details';
  protected $guarded = [];

  public function loadDetail() {
    return $this->belongsTo(Load::class, 'load_id');
  }

  public function user(): BelongsTo {
    return $this->belongsTo(User::class, 'user_id');
  }

  public function driverPayTemplateCustomField() {
    return $this->belongsTo(DriverPayTemplateCustomField::class, 'field_id');
  }
}
