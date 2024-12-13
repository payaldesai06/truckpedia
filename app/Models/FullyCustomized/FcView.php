<?php

namespace App\Models\FullyCustomized;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Facades\DB;

class FcView extends Model {
  use SoftDeletes;
  protected $table = 'fc_views';
  protected $guarded = [];
  protected $casts = [
    'group_by' => 'json',
    'record_dates_for_ui' => 'json'
  ];

  public function fcSubmenu() {
    return $this->belongsTo(FcSubmenu::class, 'submenu_id');
  }

  public function showFields() {
    return $this->hasMany(FcViewShowField::class, 'view_id');
  }
}
