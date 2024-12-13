<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class QuickbooksAuth extends Model
{
    protected $table = 'quickbooks_auth';
    protected $guarded = ['*'];
    protected $primaryKey = 'id';

    public function adminCompanyDetails()
    {
        return $this->belongsTo(AdminCompanyDetail::class, 'company_id');
    }

    public function tag()
    {
        return $this->belongsTo(Tag::class, 'tag_id');
    }
}
