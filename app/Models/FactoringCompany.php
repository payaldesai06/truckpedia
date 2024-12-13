<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class FactoringCompany extends Model {
  use SoftDeletes;

  protected $fillable = [
    'company_id',
    'name',
    'billing_email',
    'address',
    'city',
    'state',
    'zip_code',
    'phone_number',
    'factoring_fee_fractional',
    'request_payment_merge_pdfs',
    'integration_partner',
  ];

  public function companyDetails() {
    return $this->belongsTo(AdminCompanyDetail::class);
  }
}
