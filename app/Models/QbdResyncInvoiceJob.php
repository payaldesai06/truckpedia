<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class QbdResyncInvoiceJob extends Model {
  use SoftDeletes;
  protected $guarded = [];

  public function qbdConnection() {
    return $this->belongsTo(QbdConnection::class);
  }
}
