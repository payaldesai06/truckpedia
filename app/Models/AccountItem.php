<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class AccountItem extends Model {
  use SoftDeletes;

  /**
   * The attributes that are mass assignable.
   *
   * @var array
   */
  protected $fillable = [
    'company_id', 'name', 'type', 'income_account_id', 'expense_account_id',
    'income_description', 'expense_description'
  ];

  public function accountItemQboId() {
    return $this->hasOne(AccountItemQboId::class);
  }
}
