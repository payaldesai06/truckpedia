<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class LoadDriverUser extends Model
{
    protected $table = 'load_driver_user';
    protected $fillable = ['load_driver_id', 'user_id'];
    use SoftDeletes;

    public function loadDriver()
    {
        return $this->belongsTo(LoadDriver::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
