<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class CustomerFolder extends Model {
  use SoftDeletes;

  protected $guarded = [];

  public function company() {
    return $this->belongsTo(AdminCompanyDetail::class, 'company_id', 'id');
  }

  public function customerFiles() {
    return $this->hasMany(CustomerFile::class);
  }
}
