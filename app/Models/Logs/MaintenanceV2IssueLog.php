<?php

namespace App\Models\Logs;

use App\Models\MaintenanceV2Issue;
use App\Models\User;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\SoftDeletes;

class MaintenanceV2IssueLog extends Model {
  use SoftDeletes;

  protected $guarded = [];
  public $timestamps = false;

  public function maintenanceIssue(): BelongsTo {
    return $this->belongsTo(MaintenanceV2Issue::class, 'issue_id', 'id');
  }

  public function modifiedByUser(): BelongsTo {
    return $this->belongsTo(User::class, 'modified_by_user_id', 'id');
  }
}
