<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class WexTransactionsSyncedDate extends Model {
  use SoftDeletes;

  protected $fillable = [
    'wex_account_id',
    'year',
    'month',
    'days',
  ];

  public function account() {
    return $this->belongsTo(WexAccount::class, 'wex_account_id', 'id');
  }
}
