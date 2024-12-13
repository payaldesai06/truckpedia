<?php

namespace App\Models\Chat;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use App\Models\Load;

class ChatLoad extends Model {
  use SoftDeletes;

  public $timestamps = false;
  protected $guarded = [];

  public function chat() {
    return $this->belongsTo(Chat::class, 'chat_id');
  }

  public function loadDetail() {
    return $this->belongsTo(Load::class, 'load_id');
  }
}
