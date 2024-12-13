<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * Class TruckstopIntegrationId
 * @package App\Models
 * @property int $user_id
 * @property int $integration_id
 *
 */
class TruckStopIntegrationId extends Model {
  protected $table = 'truckstop_integration_ids';

  protected $fillable = [
    'user_id', 'integration_id'
  ];

  public function user() {
    return $this->belongsTo(User::class);
  }
}
