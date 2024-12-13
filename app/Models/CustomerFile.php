<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class CustomerFile extends Model {
  use SoftDeletes;

  protected $guarded = [];

  public function customer() {
    return $this->belongsTo(Customer::class, 'customer_id', 'id');
  }

  public function customerFolder() {
    return $this->belongsTo(CustomerFolder::class, 'folder_id', 'id');
  }
}
