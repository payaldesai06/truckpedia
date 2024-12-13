<?php

namespace app\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class InvoicePayment extends Model {
  use SoftDeletes;

  protected $table = 'invoice_payments';
  protected $guarded = [];

  protected $casts = [
    'amount_paid' => 'double',
  ];
}
