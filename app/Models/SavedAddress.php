<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class SavedAddress extends Model {
  protected $table = 'saved_addresses';

  protected $guarded = [];

  public function taggedCustomer() {
    return $this->belongsTo(Customer::class, 'tagged_customer_id');
  }
}
