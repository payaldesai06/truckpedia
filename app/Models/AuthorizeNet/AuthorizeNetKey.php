<?php

namespace app\Models\AuthorizeNet;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class AuthorizeNetKey extends Model {
  use SoftDeletes;

  protected $table = 'authorize_net_keys';
  protected $guarded = [];
}
