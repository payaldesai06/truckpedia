<?php

namespace App\Models;

use App\Package\FindInSet\FindInSetRelationTrait;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Trip extends Model
{
    use SoftDeletes, FindInSetRelationTrait;

    protected $guarded = [];

    public function tripExpenses()
    {
        return $this->hasMany(TripExpense::class, 'trip_id', 'id');
    }

    public function loads()
    {
        return $this->belongsToMany(Load::class)
            ->whereNull('load_trip.deleted_at')
            ->withTimestamps();
    }

    public function drivers()
    {
        return $this->FindInSetMany(User::class, 'driver_ids', 'id');
    }

    public function driverOne()
    {
        return $this->hasOne(User::class, 'id', 'driver_one_id');
    }

    public function driverTwo()
    {
        return $this->hasOne(User::class, 'id', 'driver_two_id');
    }

    public function tripPayments()
    {
        return $this->hasMany(TripPayment::class);
    }
}
