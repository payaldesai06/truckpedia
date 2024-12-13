<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class WexAccount extends Model {
  use SoftDeletes;

  protected $fillable = [
    'company_id',
    'user_name',
    'password',
    'client_id'
  ];

  public function company() {
    return $this->belongsTo(AdminCompanyDetail::class, 'company_id', 'id');
  }

  public function wexTransactions() {
    return $this->hasMany(WexTransaction::class, 'wex_account_id', 'id');
  }
}
