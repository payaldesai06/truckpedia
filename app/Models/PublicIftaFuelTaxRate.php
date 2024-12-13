<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class PublicIftaFuelTaxRate extends Model {

  protected $guarded = [];

  protected $casts = [
    'tax_rate' => 'double',
  ];
}
