<?php

namespace App\Models\FullyCustomized;

use App\Models\User;
use App\Models\AdminCompanyDetail;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class FcMenu extends Model {
  use SoftDeletes;

  protected $table = 'fc_menus';

  protected $guarded = [];

  public function fcSubmenus() {
    return $this->hasMany(FcSubmenu::class, 'menu_id');
  }

  public function owner() {
    return $this->belongsTo(User::class, 'owner_id');
  }

  public function company() {
    return $this->belongsTo(AdminCompanyDetail::class, 'company_id');
  }

  /**
   * @return \Illuminate\Database\Eloquent\Relations\HasMany
   */
  public function fcSharedPermissions() {
    return $this->hasMany(FcSharedPermission::class, 'menu_id');
  }
}
