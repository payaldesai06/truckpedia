<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class LoadCharge extends Model {
  use SoftDeletes;

  protected $guarded = [];

  /**
   * The attributes that should be cast to native types.
   *
   * @var array
   */
  protected $casts = [
    'hauling_fees' => 'double',
    'fuel_surcharge' => 'double',
    'hauling_fees_rate' => 'double',
    'fuel_surcharge_rate' => 'double',
    'fuel_surcharge_v1' => 'double',
    'fuel_surcharge_v2' => 'double',
    'fuel_surcharge_v3' => 'double',
  ];


  public function loadDetail() {
    return $this->belongsTo(Load::class);
  }
}
