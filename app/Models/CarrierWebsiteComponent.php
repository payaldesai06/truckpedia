<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class CarrierWebsiteComponent extends Model {
  use SoftDeletes;

  protected $table = "carrier_website_components";
  protected $guarded = [];
  protected $hidden = ['deleted_at', 'created_at', 'updated_at'];
}
