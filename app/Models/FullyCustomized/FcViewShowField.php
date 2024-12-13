<?php

namespace App\Models\FullyCustomized;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class FcViewShowField extends Model {
  use SoftDeletes;

  protected $guarded = [];
  protected $table = 'fc_view_show_fields';
}
