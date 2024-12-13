<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class TruckTag extends Model {
  protected $table = 'truck_tags';

  protected $fillable = ['truck_id', 'tag_id'];

  public function tag() {
    return $this->belongsTo(Tag::class);
  }

  public function truck() {
    return $this->belongsTo(Truck::class);
  }
}
