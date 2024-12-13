<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\SoftDeletes;

class LoadThirdPartyCarrierDriverAssetAssignment extends Model {
  use SoftDeletes;

  protected $guarded = [];

  public function loadDetail(): BelongsTo {
    return $this->belongsTo(Load::class, 'load_id');
  }
}
