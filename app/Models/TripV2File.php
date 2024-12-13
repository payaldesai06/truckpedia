<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class TripV2File extends Model {
  use SoftDeletes;

  protected $table = 'trips_v2_files';
  protected $guarded = [];
}
