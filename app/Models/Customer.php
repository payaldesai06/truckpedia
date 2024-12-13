<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Customer extends Model {
  use SoftDeletes;

  protected $guarded = [];

  public function user() {
    return $this->belongsTo(User::class);
  }

  public function loadDetail() {
    return $this->hasMany(Load::class);
  }

  public function customerFiles() {
    return $this->hasMany(CustomerFile::class);
  }
}
