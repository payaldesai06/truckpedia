<?php

namespace App\Models\Logs;

use App\Models\Load;
use App\Models\Trailer;
use App\Models\Truck;
use App\Models\User;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\SoftDeletes;

class LoadLog extends Model {
  use SoftDeletes;

  protected $guarded = [];
  public $timestamps = false;

  public function loadDetail(): BelongsTo {
    return $this->belongsTo(Load::class, 'load_id', 'id');
  }

  public function modifiedByUser(): BelongsTo {
    return $this->belongsTo(User::class, 'modified_by_user_id', 'id');
  }

  public function truck(): BelongsTo {
    return $this->belongsTo(Truck::class, 'truck_id', 'id');
  }

  public function trailer(): BelongsTo {
    return $this->belongsTo(Trailer::class, 'trailer_id', 'id');
  }
}
