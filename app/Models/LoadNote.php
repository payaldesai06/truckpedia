<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class LoadNote extends Model {
  use SoftDeletes;

  protected $guarded = [];

  public function loadDetail() {
    return $this->belongsTo(Load::class, 'load_id');
  }

  public function lastModifiedByUser() {
    return $this->belongsTo(User::class, 'last_modified_by_user_id');
  }
}
