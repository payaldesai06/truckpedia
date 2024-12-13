<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class TripV2Sheet extends Model {
  use SoftDeletes;
  protected $table = 'trips_v2_sheets';

  protected $fillable = [
    'company_id',
    'user_id',
    'trip_id',
    'status',
    'start_date',
    'start_time',
    'end_date',
    'end_time',
    'total_hours',
    'start_odometer',
    'end_odometer',
    'notes',
  ];

  protected $casts = [
    'total_hours' => 'double',
  ];

  public function trip() {
    return $this->belongsTo(TripV2::class, 'trip_id');
  }

  public function user() {
    return $this->belongsTo(User::class, 'user_id');
  }
}
