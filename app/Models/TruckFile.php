<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class TruckFile extends Model {
  use SoftDeletes;
  protected $guarded = [];

  public function truck() {
    return $this->belongsTo(Truck::class, 'truck_id', 'id');
  }

  public function truckFolder() {
    return $this->belongsTo(TruckFolder::class, 'folder_id', 'id');
  }
}
