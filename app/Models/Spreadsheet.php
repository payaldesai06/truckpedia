<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;

class Spreadsheet extends Model {
  use SoftDeletes;

  protected $guarded = [];

  public function company(): BelongsTo {
    return $this->belongsTo(AdminCompanyDetail::class);
  }

  public function owner(): BelongsTo {
    return $this->belongsTo(User::class);
  }

  public function columns(): HasMany {
    return $this->hasMany(SpreadsheetColumn::class);
  }

  public function sheets(): HasMany {
    return $this->hasMany(SpreadsheetSheet::class);
  }

  public function sharedUsers(): HasMany {
    return $this->hasMany(SpreadsheetSharedUser::class);
  }
}
