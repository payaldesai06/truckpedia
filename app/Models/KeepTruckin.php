<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class KeepTruckin extends Model {
  protected $table = "keep_truckins";
  protected $guarded = [];

  public function adminCompanyDetails(): BelongsTo {
    return $this->belongsTo(AdminCompanyDetail::class, 'company_id', 'id');
  }
}
