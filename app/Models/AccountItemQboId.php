<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class AccountItemQboId extends Model {

  const UPDATED_AT = null;
  /**
   * The attributes that are mass assignable.
   *
   * @var array
   */
  protected $fillable = [
    'account_item_id', 'quickbooks_auth_id', 'qbo_id'
  ];
}
