<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class QuickbooksSyncedLoads extends Model
{
    protected $table = 'quickbooks_synced_loads';
    protected $guarded = ['*'];
    protected $primaryKey = 'id';
}
