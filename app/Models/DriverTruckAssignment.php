<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class DriverTruckAssignment extends Model {
  use SoftDeletes;

  protected $guarded = [];

  protected $dates = ['start_date', 'end_date'];

  public function user() {
    return $this->belongsTo(User::class);
  }
}
