<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class InvoiceAdditionalCustomPayment extends Model {
  use SoftDeletes;

  protected $guarded = [];

  public function invoice() {
    return $this->belongsTo(Invoice::class, 'invoice_id', 'id');
  }

  public function invoiceCustomPaymentField() {
    return $this->belongsTo(InvoiceCustomPaymentField::class, 'field_id', 'id');
  }
}
