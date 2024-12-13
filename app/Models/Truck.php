<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Database\Eloquent\SoftDeletes;

class Truck extends Model {
  use SoftDeletes;

  protected $guarded = [];

  /**
   * The attributes that should be cast to native types.
   *
   * @var array
   */
  protected $casts = [
    'licence_plate_expiry' => 'datetime',
    'inspection_expiry' => 'datetime',
  ];

  public function user() {
    return $this->belongsTo(User::class);
  }

  public function loadDrivers(): HasMany {
    return $this->hasMany(LoadDriver::class);
  }

  public function loadDriver() {
    return $this->hasOne(LoadDriver::class);
  }

  public function samsaraTruckIds() {
    return $this->hasOne(SamsaraTruckId::class);
  }

  public function reloadStates(): HasMany {
    return $this->hasMany(TruckReloadState::class);
  }

  public function keepTruckinId(): HasOne {
    return $this->hasOne(KeepTruckinTruckId::class);
  }

  public function truckNotes() {
    return $this->hasMany(TruckNote::class);
  }

  public function truckFiles() {
    return $this->hasMany(TruckFile::class);
  }

  public function driverAssignments() {
    return $this->hasMany(DriverTruckAssignment::class);
  }

  public function tags() {
    return $this->belongsToMany(Tag::class, TruckTag::class);
  }

  public function driverDetails() {
    return $this->hasMany(DriverDetail::class, 'assignment_truck_id', 'id');
  }

  public function truckAvalRptScheds(): HasMany {
    return $this->hasMany(TruckAvalRptScheds::class, 'truck_id', 'id');
  }

  public function truckAvalOnceScheds(): HasMany {
    return $this->hasMany(TruckAvalOnceScheds::class, 'truck_id', 'id');
  }

  public function getTruckTypesAttribute() {
    $types  = [];
    foreach (config('constant.truck_types') as $key => $value) {
      if ($this->$key == 1) {
        $types[] = $value;
      }
    }
    return empty($types) ? null : $types;
  }

  public function maintenanceIssues() {
    return $this->hasMany(MaintenanceV2Issue::class);
  }
}
