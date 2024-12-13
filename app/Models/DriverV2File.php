<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class DriverV2File extends Model {
  use SoftDeletes;

  protected $guarded = [];
  protected $table = 'driver_v2_files';

  public function user() {
    return $this->belongsTo(User::class);
  }

  public function folder() {
    return $this->belongsTo(DriverV2Folder::class, 'folder_id');
  }
}
