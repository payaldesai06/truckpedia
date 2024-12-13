<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class T3Account extends Model {
  use SoftDeletes;
  protected $guarded = [];
}
