<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class loadImage extends Model {
  use SoftDeletes;

  protected $guarded = [];

  public function loadDriver() {
    return $this->belongsTo(LoadDriver::class);
  }

  public function loadDetail() {
    return $this->belongsTo(Load::class, 'load_id');
  }
}
