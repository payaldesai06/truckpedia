<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class TrailerFile extends Model {
  use SoftDeletes;

  protected $guarded = [];

  public function trailer() {
    return $this->belongsTo(Trailer::class, 'trailer_id', 'id');
  }

  public function trailerFolder() {
    return $this->belongsTo(TrailerFolder::class, 'folder_id', 'id');
  }
}
