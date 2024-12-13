<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class TruckAvalManualLanes extends Model {
  use SoftDeletes;

  protected $guarded = [];

  public function truckAvalReptScheds() {
    return $this->belongsTo(TruckAvalRptScheds::class, 'truck_aval_rpt_sched_id', 'id');
  }

  public function truckAvalOnceSched() {
    return $this->belongsTo(TruckAvalOnceScheds::class, 'truck_aval_once_sched_id', 'id');
  }
}
