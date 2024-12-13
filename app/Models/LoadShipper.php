<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class LoadShipper extends Model {
  use SoftDeletes;

  protected $guarded = [];

  // Do not delete.
  protected $dates = ['shipping_time', 'shipping_end_time'];

  public function loadDetail() {
    return $this->belongsTo(Load::class, 'load_id');
  }
}
