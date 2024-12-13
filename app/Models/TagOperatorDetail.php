<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class TagOperatorDetail extends Model {
  use SoftDeletes;

  /**
   * The attributes that are mass assignable.
   *
   * @var array
   */
  protected $fillable = [
    'user_id', 'first_name', 'last_name', 'profile_image'
  ];

  public function user() {
    return $this->belongsTo(User::class);
  }
}
