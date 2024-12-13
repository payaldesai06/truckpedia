<?php

namespace App\Models\FullyCustomized;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;

class FcCustomRecord extends Model {
  use SoftDeletes;
  protected $guarded = [];

  public function data() {
    return $this->hasMany(FcCustomData::class, 'record_id');
  }

  /**
   * @return HasMany
   */
  public function users() {
    return $this->hasMany(FcCustomDataTypeUser::class, 'record_id');
  }

  /**
   * @return HasMany
   */
  public function multiSelectOptions() {
    return $this->hasMany(FcCustomDataTypeMultiSelect::class, 'record_id');
  }

  public function submenu() {
    return $this->belongsTo(FcSubmenu::class, 'submenu_id');
  }
}
