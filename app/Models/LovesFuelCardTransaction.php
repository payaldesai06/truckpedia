<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class LovesFuelCardTransaction extends Model {

  protected $table = 'loves_fuel_card_transactions';

  // TODO: Why do we need this?
  protected $dates = ['date'];

  public function company() {
    return $this->belongsTo(AdminCompanyDetail::class);
  }
}
