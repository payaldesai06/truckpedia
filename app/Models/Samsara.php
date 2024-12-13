<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Samsara extends Model
{
    protected $table = "samsaras";
    protected $guarded = [];
    protected $primaryKey = 'company_id';
    public $incrementing = false;

    public function company()
    {
        return $this->belongsTo(AdminCompanyDetail::class, 'company_id', 'id');
    }

}
