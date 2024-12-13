<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Transaction extends Model
{
    use SoftDeletes;

    protected $guarded = [];

    public function adminCompanyDetail()
    {
        return $this->belongsTo(AdminCompanyDetail::class, 'admin_company_detail_id', 'id');
    }
}
