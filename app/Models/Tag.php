<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;

class Tag extends Model {
  use SoftDeletes;

  protected $guarded = [];

  protected $casts = [
    'use_tag_for_billing' => 'boolean',
    'invoice_sync_cascade' => 'boolean',
  ];

  // protected $hidden = ['pivot'];

  public function company(): BelongsTo {
    return $this->belongsTo(AdminCompanyDetail::class);
  }

  public function loads(): HasMany {
    return $this->hasMany(Load::class);
  }

  public function driverPayTemplateDetails(): HasMany {
    return $this->hasMany(DriverPayTemplateDetail::class, 'tag_id');
  }
}
