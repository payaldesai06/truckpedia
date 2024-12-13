<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;

class TripV2 extends Model {
  use SoftDeletes;

  protected $table = "trips_v2";
  protected $guarded = [];

  public function company(): BelongsTo {
    return $this->belongsTo(AdminCompanyDetail::class, 'company_id');
  }

  public function user(): BelongsTo {
    return $this->belongsTo(User::class, 'user_id');
  }

  public function paycheckApprovedUser(): BelongsTo {
    return $this->belongsTo(User::class, 'paycheck_approved_by_user_id');
  }

  public function tripLoads(): HasMany {
    return $this->hasMany(TripV2Load::class, 'trip_id');
  }

  public function tripV2AdditionalCustomPayments(): HasMany {
    return $this->hasMany(TripV2AdditionalCustomPayment::class, 'trip_id');
  }

  public function files(): HasMany {
    return $this->hasMany(TripV2File::class, 'trip_id');
  }

  public function tag(): BelongsTo {
    return $this->belongsTo(Tag::class, 'tag_id');
  }

  public function truck(): BelongsTo {
    return $this->belongsTo(Truck::class, 'truck_id');
  }

  public function tripV2TemplatePayDetails(): HasMany {
    return $this->HasMany(TripV2TemplatePayDetail::class, 'trip_id');
  }

  public function tripV2Sheet(): HasMany {
    return $this->HasMany(TripV2Sheet::class, 'trip_id');
  }
}
