<?php

namespace App\Models\Chat;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use App\Models\User;

class ChatMessage extends Model {
  use SoftDeletes;

  protected $guarded = [];

  public function chat() {
    return $this->belongsTo(Chat::class, 'chat_id');
  }

  public function sender() {
    return $this->belongsTo(User::class, 'sender_user_id');
  }
}
