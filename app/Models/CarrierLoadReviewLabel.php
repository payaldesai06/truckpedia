<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class CarrierLoadReviewLabel extends Model {
  use SoftDeletes;

  protected $guarded = [];

  public function carrierLoadReview() {
    return $this->belongsTo(CarrierLoadReview::class, 'review_id', 'id');
  }
}
