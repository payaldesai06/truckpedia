<?php

namespace App\Models\Chat;

use App\Models\AdminCompanyDetail;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class ChatIntercompany extends Model {
  use SoftDeletes;

  public $timestamps = ['created_at'];
  protected $guarded = [];

  public function chat() {
    return $this->belongsTo(Chat::class, 'chat_id');
  }

  public function company() {
    return $this->belongsTo(AdminCompanyDetail::class, 'company_id');
  }
}
