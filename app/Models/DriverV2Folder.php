<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletes;

class DriverV2Folder extends Model {
  use SoftDeletes;
  protected $guarded = [];
  protected $table = 'driver_v2_folders';

  public function company() {
    return $this->belongsTo(AdminCompanyDetail::class, 'company_id', 'id');
  }

  public function files() {
    return $this->hasMany(DriverV2File::class, 'folder_id');
  }
}
