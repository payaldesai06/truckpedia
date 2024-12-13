<?php

namespace App\Models;

use App\Models\Trailer;
use Illuminate\Database\Eloquent\Model;

class SamsaraTrailerId extends Model {
  protected $table = "samsara_trailer_ids";
  protected $guarded = [];
  protected $primaryKey = 'trailer_id';

  public function trailers() {
    return $this->belongsTo(Trailer::class, 'trailer_id');
  }
}
