<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class SamsaraTruckId extends Model
{
    protected $table = "samsara_truck_ids";
    protected $guarded = [];
    protected $primaryKey = 'truck_id';

    public function truck()
    {
        return $this->belongsTo(Truck::class, 'truck_id');
    }

}
