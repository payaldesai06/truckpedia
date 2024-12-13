<?php

namespace App\Models\FullyCustomized;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class FcCustomDataTypeMultiSelect extends Model {
  use SoftDeletes;

  protected $table = 'fc_custom_data_type_multi_select';
  protected $guarded = [];
}
