<?php

namespace App\Models\Logs;

use App\Models\Truck;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\SoftDeletes;

class TruckLog extends Model {
  use SoftDeletes;

  protected $guarded = [];

  public $timestamps = false;

  public function loadLogs(): BelongsTo {
    return $this->belongsTo(LoadLog::class, 'load_log_id', 'id');
  }

  public function maintenanceIssueLog(): BelongsTo {
    return $this->belongsTo(MaintenanceV2IssueLog::class, 'maintenance_issue_log_id', 'id');
  }

  public function truck(): BelongsTo {
    return $this->belongsTo(Truck::class, 'truck_id', 'id');
  }
}
