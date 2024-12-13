<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class PublicWeeklyFuelPrice extends Model {
  protected $guarded = [];

  protected $casts = [
    'price' => 'double',
  ];
}
