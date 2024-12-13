<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class AccountQboId extends Model {

  const UPDATED_AT = null;
  /**
   * The attributes that are mass assignable.
   *
   * @var array
   */
  protected $fillable = [
    'account_id', 'quickbooks_auth_id', 'qbo_id'
  ];
}
