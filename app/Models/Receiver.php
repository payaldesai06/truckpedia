<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Receiver extends Model
{
    use SoftDeletes;

    protected $guarded = [];

    protected $casts = [
        'licence_plate_expiry' => 'datetime',
        'inspection_expiry' => 'datetime',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
