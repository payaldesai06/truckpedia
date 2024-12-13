<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;

class DriverPayTemplateCustomField extends Model {
  use SoftDeletes;
  protected $table = "driver_pay_template_custom_fields";
  protected $guarded = [];

  protected $casts = [
    'default_v1' => 'double',
    'default_v2' => 'double',
    'default_v3' => 'double',
  ];

  public function company(): BelongsTo {
    return $this->belongsTo(AdminCompanyDetail::class, 'company_id');
  }

  public function details(): HasMany {
    return $this->hasMany(DriverPayTemplateDetail::class, 'field_id');
  }
}
