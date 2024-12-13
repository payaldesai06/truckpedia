<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class QbdInvoiceLoad extends Model {
  protected $table = 'qbd_invoice_loads';
  protected $fillable = ['qbd_invoice_id', 'load_id'];
  use SoftDeletes;

  public function qbdInvoice() {
    return $this->belongsTo(QbdInvoice::class);
  }

  public function loadDetail() {
    return $this->belongsTo(Load::class);
  }
}
