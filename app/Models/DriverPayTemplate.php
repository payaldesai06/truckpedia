<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;

class DriverPayTemplate extends Model {
  use SoftDeletes;

  protected $table = "driver_pay_templates";
  protected $guarded = [];

  public function company(): BelongsTo {
    return $this->belongsTo(AdminCompanyDetail::class, 'company_id');
  }

  public function details(): HasMany {
    return $this->hasMany(DriverPayTemplateDetail::class, 'template_id');
  }
}
