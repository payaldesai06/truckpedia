<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class LoadCollaborator extends Model {
  use SoftDeletes;
  protected $guarded = [];

  public function loadDetail() {
    return $this->belongsTo(Load::class);
  }
}
