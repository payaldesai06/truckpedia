<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Automation extends Model {
  use SoftDeletes;

  protected $table = "automations";
  protected $guarded = [];
}
