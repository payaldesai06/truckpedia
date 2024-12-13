<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class CarrierLoadReview extends Model {
  use SoftDeletes;

  protected $guarded = [];

  public function loadDetail() {
    return $this->belongsTo(Load::class);
  }

  public function carrierCompany() {
    return $this->belongsTo(AdminCompanyDetail::class, 'carrier_company_id', 'id');
  }

  public function reviewerCompany() {
    return $this->belongsTo(AdminCompanyDetail::class, 'reviewer_company_id', 'id');
  }

  public function reviewerUser() {
    return $this->belongsTo(User::class, 'reviewer_user_id', 'id');
  }

  public function carrierLoadReviewLabels() {
    return $this->hasMany(CarrierLoadReviewLabel::class, 'review_id');
  }
}
