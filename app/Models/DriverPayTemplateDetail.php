<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class DriverPayTemplateDetail extends Model {

  use SoftDeletes;

  protected $guarded = [];

  // There should be more columns added. But I do not want to break existing code.
  protected $casts = [
    'v1' => 'double',
    'v2' => 'double',
    'v3' => 'double',
  ];

  public function template() {
    return $this->belongsTo(DriverPayTemplate::class, 'template_id');
  }

  public function driverPayTemplateCustomField() {
    return $this->belongsTo(DriverPayTemplateCustomField::class, 'field_id');
  }

  public function user() {
    return $this->belongsTo(User::class, 'user_id');
  }
}
