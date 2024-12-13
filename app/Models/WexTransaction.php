<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class WexTransaction extends Model {
  use SoftDeletes;

  protected $fillable = [
    'wex_account_id',
    'transaction_id',
    'location_state',
    'location_city',
    'transaction_date',
    'transaction_time',
    'card_number',
    'amount',
    'tax_value',
  ];

  protected $casts = [
    'amount' => 'double',
    'tax_value' => 'double',
  ];

  public function account() {
    return $this->belongsTo(WexAccount::class, 'wex_account_id', 'id');
  }

  public function lineItems() {
    return $this->hasMany(WexTransactionLineItem::class, 'wex_transaction_id', 'id');
  }
}
