<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class FmcsaCarrier extends Model {
  protected $table = 'fmcsa_carriers';
  protected $guarded = [];

  public function adminCompanyDetail() {
    return $this->belongsTo(AdminCompanyDetail::class, 'company_id');
  }
}
