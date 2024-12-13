<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class UserTag extends Model {
  protected $table = 'user_tags';

  protected $fillable = ['user_id', 'tag_id'];

  public function tag() {
    return $this->belongsTo(Tag::class);
  }

  public function user() {
    return $this->belongsTo(User::class);
  }
}
