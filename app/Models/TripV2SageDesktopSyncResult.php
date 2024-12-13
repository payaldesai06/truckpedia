<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class TripV2SageDesktopSyncResult extends Model {
  use SoftDeletes;

  protected $table = "trips_v2_sage_desktop_sync_results";
  public $timestamps = false;
  protected $guarded = [];

  public function trip() {
    return $this->belongsTo(TripV2::class, 'trip_id');
  }
}
