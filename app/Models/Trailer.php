<?php

namespace App\Models;

use App\Models\Logs\TrailerLog;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;

class Trailer extends Model {
  use SoftDeletes;

  protected $guarded = [];

  protected $casts = [
    'licence_plate_expiry' => 'datetime',
    'inspection_expiry' => 'datetime',
  ];

  public function user() {
    return $this->belongsTo(User::class);
  }

  public function loadDriver() {
    return $this->hasOne(LoadDriver::class);
  }

  public function trailerNotes() {
    return $this->hasMany(TrailerNote::class);
  }

  public function trailerFiles() {
    return $this->hasMany(TrailerFile::class);
  }

  public function driverAssignments() {
    return $this->hasMany(DriverTrailerAssignment::class);
  }

  public function tags() {
    return $this->belongsToMany(Tag::class, TrailerTag::class);
  }

  public function driverDetails() {
    return $this->hasMany(DriverDetail::class, 'assignment_trailer_id', 'id');
  }

  public function trailerLogs(): HasMany {
    return $this->hasMany(TrailerLog::class);
  }

  public function latestTrailerLog() {
    return $this->hasOne(TrailerLog::class)->latest();
  }

  public function maintenanceIssues() {
    return $this->hasMany(MaintenanceV2Issue::class);
  }
}
