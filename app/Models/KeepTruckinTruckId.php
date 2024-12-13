<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class KeepTruckinTruckId extends Model {
  protected $table = "keep_truckin_truck_ids";
  protected $guarded = [];

  public function truck(): BelongsTo {
    return $this->belongsTo(Truck::class, 'truck_id');
  }
}
