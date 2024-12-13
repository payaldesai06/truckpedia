<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class DriverTimeOffCalendar extends Model {
  use SoftDeletes;

  protected $table = "driver_time_off_calendar";
  protected $guarded = [];

  public function user() {
    return $this->belongsTo(User::class, 'user_id');
  }

  public function driverDetail() {
    return $this->belongsTo(DriverDetail::class, 'user_id', 'user_id');
  }

}
