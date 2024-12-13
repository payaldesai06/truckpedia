<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class TruckReloadState extends Model {
  protected $table = "truck_reload_states";
  protected $guarded = [];

  protected $hidden = ['created_at', 'updated_at'];

  public function truck(): BelongsTo {
    return $this->belongsTo(Truck::class);
  }
}