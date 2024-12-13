<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\SoftDeletes;

class LoadMultiPurposeStop extends Model {
  use SoftDeletes;

  protected $guarded = [];

  // convert string time into date time format
  protected $dates = ['time', 'end_time'];

  protected $casts = [
    'segment_distance' => 'double',
  ];

  public function loadDetail(): BelongsTo {
    return $this->belongsTo(Load::class, 'load_id');
  }
}
