<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class WexTransactionLineItem extends Model {
  use SoftDeletes;

  protected $fillable = [
    'wex_transaction_id',
    'line_item_number',
    'amount',
    'quantity',
    'ppu',
    'federal_tax',
    'state_tax',
    'use_type',
  ];

  protected $casts = [
    'amount' => 'double',
    'quantity' => 'double',
    'ppu' => 'double',
    'federal_tax' => 'double',
    'state_tax' => 'double',
  ];

  public function transaction() {
    return $this->belongsTo(WexTransaction::class);
  }
}
