<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;

class TruckAvalRptScheds extends Model {
  use SoftDeletes;

  protected $guarded = [];

  public function truckAvalManualLanes(): HasMany {
    return $this->hasMany(TruckAvalManualLanes::class, 'truck_aval_rpt_sched_id');
  }

  public function truck() {
    return $this->belongsTo(Truck::class, 'truck_id', 'id');
  }

  public function truckAvalManualLanesWithRpm() {
    return $this->hasMany(TruckAvalManualLanes::class, 'truck_aval_rpt_sched_id')->whereNotNull('target_rpm');
  }
}
