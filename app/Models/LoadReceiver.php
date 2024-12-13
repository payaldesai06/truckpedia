<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class LoadReceiver extends Model
{
    use SoftDeletes;

    protected $guarded = [];

    // Do not delete.
    protected $dates = ['delivery_time', 'delivery_end_time'];

    public function loadDetail()
    {
        return $this->belongsTo(Load::class, 'load_id');
    }
}
