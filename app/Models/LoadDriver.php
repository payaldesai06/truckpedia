<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class LoadDriver extends Model {
  use SoftDeletes;

  protected $gps_and_location;
  protected $guarded = [];

  protected $casts = [
    'start_location_distance' => 'double',
    'empty_distance' => 'double',
    'loaded_distance' => 'double',
  ];

  public function loadDetail() {
    return $this->belongsTo(Load::class, 'load_id');
  }

  public function loadImage() {
    return $this->hasMany(loadImage::class);
  }

  public function truck() {
    return $this->belongsTo(Truck::class);
  }

  public function trailer() {
    return $this->belongsTo(Trailer::class);
  }

  public function driverAsUsers() {
    return $this->belongsToMany(User::class, 'load_driver_user', 'load_driver_id', 'user_id');
  }

  public function loadDriverUsers() {
    return $this->hasMany(LoadDriverUser::class, 'load_driver_id');
  }

  public function collaborators() {
    return $this->hasMany(LoadCollaborator::class, 'load_id', 'load_id');
  }
}
