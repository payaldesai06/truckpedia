<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class DriverDetail extends Model {
  use SoftDeletes;

  protected $guarded = [];

  protected $dates = [
    'original_driver_license_date', 'occupation_expire_date',
    'clearinghouse_expire_date',
    // 'occ_ins_start_date', 'occ_ins_end_date',
    'wc_ins_start_date', 'wc_ins_end_date', 'road_test_completed_date',
    // 'ifta_add_date', 'ifta_remove_date',
    'off_duty_until', 'estimated_return_date', 'date_added', 'date_removed',
    'birth_date', 'medical_expire_date', 'driving_license_expire_date',
  ];

  public function user() {
    return $this->belongsTo(User::class);
  }

  public function owner() {
    return $this->belongsTo(User::class);
  }

  public function currentTruck() {
    return $this->belongsTo(Truck::class, 'current_truck_id', 'id');
  }

  public function currentTrailer() {
    return $this->belongsTo(Trailer::class, 'current_trailer_id', 'id');
  }

  public function getFirstNameAttribute() {
    $name = explode(' ', $this->name, 2);
    return $name[0] ?? '';
  }

  public function getLastNameAttribute() {
    $name = explode(' ', $this->name, 2);
    return $name[1] ?? '';
  }

  public function assignmentTruck() {
    return $this->belongsTo(Truck::class, 'assignment_truck_id');
  }

  public function assignmentTrailer() {
    return $this->belongsTo(Trailer::class, 'assignment_trailer_id');
  }

  public function driverTimeOffCalender() {
    return $this->hasMany(DriverTimeOffCalendar::class, 'user_id', 'user_id');
  }

  public function driverPayTemplateDetails() {
    return $this->hasMany(DriverPayTemplateDetail::class, 'user_id', 'user_id');
  }
}
