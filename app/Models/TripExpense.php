<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class TripExpense extends Model
{
    use SoftDeletes;

    protected $guarded = [];

    public function trip()
    {
        return $this->belongsTo(Trip::class);
    }

    public function expenseType()
    {
        return $this->belongsTo(ExpenseType::class);
    }

    public function tripExpenseImages()
    {
        return $this->hasMany(TripExpenseImages::class,'trip_expense_id','id');
    }
}
