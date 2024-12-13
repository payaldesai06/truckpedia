<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class IncidentFile extends Model {
  use SoftDeletes;

  protected $guarded = [];

  public function incident() {
    return $this->belongsTo(Incident::class, 'incident_id', 'id');
  }
}
