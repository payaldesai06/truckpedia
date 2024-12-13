<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class TripExpenseImages extends Model
{
    use SoftDeletes;
    protected $table = "trip_expense_images";
    protected $fillable = ['trip_expense_id', 'image_name',];
}
