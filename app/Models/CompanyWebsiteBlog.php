<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class CompanyWebsiteBlog extends Model {
  use SoftDeletes;

  protected $table = "company_website_blogs";
  protected $guarded = [];

  protected $casts = [
    'content' => 'array'
  ];

  public function company() {
    return $this->belongsTo(AdminCompanyDetail::class, 'company_id');
  }
}