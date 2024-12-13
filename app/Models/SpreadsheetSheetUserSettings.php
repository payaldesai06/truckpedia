<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class SpreadsheetSheetUserSettings extends Model {
  use SoftDeletes;

  protected $guarded = [];
}
