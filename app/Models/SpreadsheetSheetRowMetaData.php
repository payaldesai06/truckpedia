<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\SoftDeletes;

class SpreadsheetSheetRowMetaData extends Model {
  use SoftDeletes;

  protected $guarded = [];

  public function sheet(): BelongsTo {
    return $this->belongsTo(SpreadsheetSheet::class);
  }
}
