<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

/**
 * Class WarehouseOperatorDetail
 * @package App\Models
 * @property int $user_id
 * @property string $first_name
 * @property string $last_name
 * @property string $profile_image
 */
class WarehouseOperatorDetail extends Model {
  use SoftDeletes;

  protected $guarded = [];

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
