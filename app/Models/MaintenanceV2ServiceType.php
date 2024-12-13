<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class MaintenanceV2ServiceType extends Model {
  use SoftDeletes;

  protected $guarded = [];

  protected $hidden = ['created_at', 'updated_at', 'deleted_at'];

  public function company() {
    return $this->belongsTo(AdminCompanyDetail::class, 'company_id', 'id');
  }
}
