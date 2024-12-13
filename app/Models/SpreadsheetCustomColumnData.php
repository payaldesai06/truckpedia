<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\SoftDeletes;

class SpreadsheetCustomColumnData extends Model {
  use SoftDeletes;

  protected $guarded = [];

  protected $casts = [
    'decimal_value' => 'double',
  ];

  public function spreadsheet(): BelongsTo {
    return $this->belongsTo(Spreadsheet::class);
  }

  public function spreadsheetColumn(): BelongsTo {
    return $this->belongsTo(SpreadsheetColumn::class);
  }
}
