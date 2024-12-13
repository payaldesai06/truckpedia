<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class TripPayment extends Model {
  use SoftDeletes;

  protected $guarded = [];

  protected $dates = ['trip_start_time', 'trip_end_time'];

  public function trip() {
    return $this->hasOne(Trip::class, 'id', 'trip_id');
  }

  public function driver() {
    return $this->hasOne(User::class, 'id', 'driver_id');
  }
}
