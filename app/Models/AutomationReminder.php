<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;

class AutomationReminder extends Model {
  use SoftDeletes;

  protected $guarded = [];

  protected $hidden = [
    'deleted_at',
    'created_at',
    'updated_at'
  ];

  public function actions(): HasMany {
    return $this->hasMany(AutomationReminderAction::class);
  }

  public function assets(): HasMany {
    return $this->hasMany(AutomationReminderAsset::class);
  }
}
