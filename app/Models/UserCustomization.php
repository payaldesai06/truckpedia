<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class UserCustomization extends Model {
  use SoftDeletes;

  protected $casts = [
    'show' => 'json',
    'filters' => 'json'
  ];

  /**
   * The attributes that are mass assignable.
   *
   * @var array
   */
  protected $fillable = [
    'show', 'user_id', 'applied_module', 'filters'
  ];

  public function user() {
    return $this->belongsTo(User::class);
  }
}
