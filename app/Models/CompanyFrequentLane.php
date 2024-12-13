<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class CompanyFrequentLane extends Model {
  use SoftDeletes;

  protected $table = "company_frequent_lanes";
  protected $guarded = [];

  public function company() {
    return $this->belongsTo(AdminCompanyDetail::class, 'company_id');
  }
}
