<?php

namespace App\Models\FullyCustomized;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\SoftDeletes;

class FcSubmenu extends Model {
  use SoftDeletes;
  protected $table = 'fc_submenus';
  protected $guarded = [];

  public function fcMenu(): BelongsTo {
    return $this->belongsTo(FcMenu::class, 'menu_id', 'id');
  }

  public function fcViews() {
    return $this->hasMany(FcView::class, 'submenu_id');
  }

  public function fcCustomFields() {
    return $this->hasMany(FcCustomField::class, 'submenu_id');
  }

  public function fcCustomRecords() {
    return $this->hasMany(FcCustomRecord::class, 'submenu_id');
  }

  /**
   * @return \Illuminate\Database\Eloquent\Relations\HasMany
   */
  public function fcSharedPermissions() {
    return $this->hasMany(FcSharedPermission::class, 'submenu_id');
  }

  public function recordLinkFields() {
    return $this->hasManyThrough(FcCustomDataRecordLink::class, FcCustomRecord::class, 'submenu_id', 'linked_record_id');
  }

  public function data() {
    return $this->hasManyThrough(FcCustomData::class, FcCustomRecord::class, 'submenu_id', 'record_id');
  }
}
