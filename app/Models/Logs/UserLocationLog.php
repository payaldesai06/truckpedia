<?php

namespace App\Models\Logs;

use App\Models\User;
use Illuminate\Database\Eloquent\Model;

class UserLocationLog extends Model {

  public $timestamps = false;
  protected $guarded = [];

  public function user() {
    return $this->belongsTo(User::class, 'user_id');
  }
}
