<?php

namespace App\Models\Planning;

use App\Models\AdminCompanyDetail;
use Illuminate\Database\Eloquent\Model;

class CompanyAccessorialFeeRate extends Model {
  protected $table = 'company_accessorial_fee_rates';
  protected $guarded = [];
  protected $casts = [
    'detention_rate' => 'double',
    'layover_rate' => 'double',
    'tonu_rate' => 'double',
    'extra_stop_rate' => 'double',
    'chassis_rental_rate' => 'double',
    'chassis_split_rate' => 'double',
    'dry_storage_rate' => 'double',
    'hazmat_rate' => 'double',
    'prepull_rate' => 'double',
  ];

  public function company() {
    return $this->belongsTo(AdminCompanyDetail::class, 'company_id');
  }
}
