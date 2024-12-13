<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class TruckFolder extends Model {
  use SoftDeletes;
  protected $guarded = [];

  public function adminCompanyDetail() {
    return $this->belongsTo(AdminCompanyDetail::class, 'company_id', 'id');
  }

  public function truckFiles() {
    return $this->hasMany(TruckFile::class);
  }
}
