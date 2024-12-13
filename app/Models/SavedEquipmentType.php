<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class SavedEquipmentType extends Model {
  use SoftDeletes;

  protected $guarded = [];

  protected $casts = [
    'weight' => 'double',
    'qty' => 'double',
  ];
}
