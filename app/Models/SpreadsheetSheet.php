<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;

class SpreadsheetSheet extends Model {
  use SoftDeletes;

  protected $guarded = [];

  public function getFilter() {
    return json_decode($this->filter);
  }

  public function spreadsheet(): BelongsTo {
    return $this->belongsTo(Spreadsheet::class);
  }

  public function sheetColumns(): HasMany {
    return $this->hasMany(SpreadsheetSheetColumn::class, 'sheet_id', 'id');
  }

  public function sheetUserSettings(): HasMany {
    return $this->hasMany(SpreadsheetSheetUserSettings::class, 'sheet_id', 'id');
  }

  public function sheetRowMetaData(): HasMany {
    return $this->hasMany(SpreadsheetSheetRowMetaData::class, 'sheet_id', 'id');
  }
}
