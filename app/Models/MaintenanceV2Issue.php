<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Relations\HasMany;

class MaintenanceV2Issue extends Model {
  use SoftDeletes;

  protected $guarded = [];

  protected $hidden = ['updated_at', 'deleted_at'];

  public function attachments(): HasMany {
    return $this->hasMany(MaintenanceV2IssueAttachment::class);
  }

  public function truck(): BelongsTo {
    return $this->belongsTo(Truck::class);
  }

  public function trailer(): BelongsTo {
    return $this->belongsTo(Trailer::class);
  }

  public function lastModifiedUser(): BelongsTo {
    return $this->belongsTo(User::class, 'last_modified_by_user_id', 'id');
  }

  public function reportedByUser(): BelongsTo {
    return $this->belongsTo(User::class, 'reported_by_user_id', 'id');
  }

  public function serviceType(): BelongsTo {
    return $this->belongsTo(MaintenanceV2ServiceType::class, 'service_type_id', 'id');
  }
}
