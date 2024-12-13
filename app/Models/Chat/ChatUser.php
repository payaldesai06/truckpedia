<?php

namespace App\Models\Chat;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use App\Models\User;

class ChatUser extends Model {
  use SoftDeletes;

  public $timestamps = false;
  protected $guarded = [];

  public function chat() {
    return $this->belongsTo(Chat::class, 'chat_id');
  }

  public function user() {
    return $this->belongsTo(User::class, 'user_id');
  }

}
