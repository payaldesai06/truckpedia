<?php

namespace App\Models\FullyCustomized;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class FcCustomFieldsSelectOption extends Model {
  use SoftDeletes;

  protected $table = 'fc_custom_fields_select_options';
  protected $guarded = [];
}
