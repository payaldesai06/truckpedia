<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\SoftDeletes;

class PcMiler extends Model {
  use SoftDeletes;
  protected $table = "pc_miler_api_keys";
  protected $guarded = [];

  public function company(): BelongsTo {
    return $this->belongsTo(AdminCompanyDetail::class);
  }
}
