<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class KeepTruckinTrailerId extends Model {
  protected $table = 'keep_truckin_trailer_ids';
  protected $guarded = [];

  public function trailer(): BelongsTo {
    return $this->belongsTo(Trailer::class, 'trailer_id');
  }
}
