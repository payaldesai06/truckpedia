<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class LoadTrip extends Model
{
    protected $table = 'load_trip';

    public function loads()
    {
        return $this->belongsTo(Load::class);
    }

    public function trips()
    {
        return $this->belongsTo(Trip::class);
    }
}
