<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class TrailerTag extends Model {
  protected $table = 'trailer_tags';

  protected $fillable = ['trailer_id', 'tag_id'];

  public function tag() {
    return $this->belongsTo(Tag::class);
  }

  public function trailer() {
    return $this->belongsTo(Trailer::class);
  }
}
