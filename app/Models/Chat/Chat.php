<?php

namespace App\Models\Chat;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use App\Models\User;

class Chat extends Model {
  use SoftDeletes;

  public $timestamps = false;
  protected $guarded = [];

  public function owner() {
    return $this->belongsTo(User::class, 'owner_id');
  }

  public function chatLoads() {
    return $this->hasMany(ChatLoad::class);
  }

  public function chatUsers() {
    return $this->hasMany(ChatUser::class);
  }

  public function chatMessages() {
    return $this->hasMany(ChatMessage::class);
  }

  public function latestChatMessage() {
    return $this->hasOne(ChatMessage::class)->latest();
  }

  public function chatIntercompanies() {
    return $this->hasMany(ChatIntercompany::class);
  }
}
