<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class TripV2Load extends Model {
  use SoftDeletes;

  protected $table = "trips_v2_loads";
  protected $guarded = [];

  public function trip() {
    return $this->belongsTo(TripV2::class, 'trip_id');
  }

  public function loadDetail() {
    return $this->belongsTo(Load::class, 'load_id');
  }
}
