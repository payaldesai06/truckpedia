<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Account extends Model {
  use SoftDeletes;

  /**
   * The attributes that are mass assignable.
   *
   * @var array
   */
  protected $fillable = [
    'company_id', 'name', 'description', 'type', 'parent_account_id'
  ];

  public function subAccounts() {
    return $this->hasMany(self::class, 'parent_account_id');
  }

  public function expenses() {
    return $this->hasMany(Expense::class);
  }
}
