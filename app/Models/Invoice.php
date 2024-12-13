<?php

namespace App\Models;

use App\Models\InvoicePayment;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Invoice extends Model {
  use SoftDeletes;

  protected $guarded = [];

  protected $dates = [
    'due_date',
    'issue_date'
  ];

  public function company() {
    return $this->belongsTo(AdminCompanyDetail::class, 'company_id', 'id');
  }

  public function customer() {
    return $this->belongsTo(Customer::class, 'customer_id', 'id');
  }

  public function invoiceItems() {
    return $this->hasMany(InvoiceItem::class);
  }

  public function invoiceAdditionalCustomPayments() {
    return $this->hasMany(InvoiceAdditionalCustomPayment::class);
  }

  public function invoicePayments() {
    return $this->hasMany(InvoicePayment::class, 'invoice_id');
  }
}
