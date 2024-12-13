<?php

namespace App\Models\FullyCustomized;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class FcSharedPermission extends Model {
  use SoftDeletes;

  protected $guarded = [];
  protected $table = 'fc_shared_permissions';
}
