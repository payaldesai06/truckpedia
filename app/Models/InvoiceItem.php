<?php

namespace App\Models;

use App\Models\FullyCustomized\FcCustomRecord;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class InvoiceItem extends Model {
  use SoftDeletes;

  protected $guarded = [];

  public function invoice() {
    return $this->belongsTo(Invoice::class, 'invoice_id', 'id');
  }

  public function fcCustomRecord() {
    return $this->belongsTo(FcCustomRecord::class, 'fc_custom_record_id', 'id');
  }
}
