<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

/**
 * Class CommonKeyValuePair
 * @package App\Models
 * @property string $key
 * @property string $value
 * @property \DateTime $expired_when
 */
class CommonKeyValuePair extends Model {
  use SoftDeletes;

  /**
   * The attributes that are mass assignable.
   *
   * @var array
   */
  protected $fillable = [
    'key', 'value', 'expires_when'
  ];
}
