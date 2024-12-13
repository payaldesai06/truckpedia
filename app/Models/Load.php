<?php

namespace App\Models;

use App\Models\Chat\ChatLoad;
use App\Models\Logs\LoadLog;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Facades\Auth;

class Load extends Model {
  use SoftDeletes;

  protected $guarded = [];

  protected $casts = [
    'sub_total' => 'double',
    'discount' => 'double',
    'total_amount' => 'double',
    'total_miles' => 'double',
  ];

  //convert string time into date time format
  protected $dates = ['delivered_at', 'review_link_sent_at'];

  public function rateConfirmations() {
    return $this->hasMany(LoadRateConfirmation::class)->latest();
  }

  public function loadCharge() {
    return $this->hasOne(LoadCharge::class);
  }

  public function loadShippers(): HasMany {
    return $this->hasMany(LoadShipper::class)->orderBy('order');
  }

  public function loadReceivers(): HasMany {
    return $this->hasMany(LoadReceiver::class)->orderBy('order');
  }

  public function loadLegs(): HasMany {
    return $this->hasMany(LoadLeg::class)->orderBy('order');
  }

  public function loadDrivers() {
    return $this->hasMany(LoadDriver::class);
  }

  public function thirdPartyCarrier(): BelongsTo {
    return $this->belongsTo(Customer::class, 'third_party_carrier_as_customer_id');
  }

  public function thirdPartyCarrierCharge(): HasOne {
    return $this->hasOne(LoadThirdPartyCarrierCharge::class);
  }

  public function carrierDriverAssetAssignments(): HasMany {
    return $this->hasMany(LoadThirdPartyCarrierDriverAssetAssignment::class);
  }

  public function loadDriver() {
    return $this->hasOne(LoadDriver::class)->whereRaw("find_in_set('" . Auth::id() . "',driver_ids)");
  }

  public function customer() {
    return $this->belongsTo(Customer::class);
  }

  public function dispatcher() {
    return $this->belongsTo(User::class, 'dispatcher_id', 'id');
  }

  public function trips() {
    return $this->belongsToMany(Trip::class)
      ->whereNull('load_trip.deleted_at');
  }

  public function tripLoads() {
    return $this->hasMany(TripV2Load::class);
  }

  /*
   * Load images without admin uploaded images
   */
  public function loadImages() {
    return $this->hasManyThrough(loadImage::class, LoadDriver::class);
  }

  /*
   * Load Images with Amin uploaded images
   */
  public function adminLoadImages() {
    return $this->hasMany(loadImage::class);
  }

  public function adminCompanyDetail() {
    return $this->belongsTo(AdminCompanyDetail::class);
  }

  public function tag() {
    return $this->belongsTo(Tag::class, 'tag_id');
  }

  public function collaborators() {
    return $this->hasMany(LoadCollaborator::class);
  }

  public function qbdInvoices() {
    return $this->hasMany(QbdInvoice::class);
  }

  public function qbdInvoiceLoads() {
    return $this->hasMany(QbdInvoiceLoad::class);
  }

  public function loadMultiPurposeStops(): HasMany {
    return $this->hasMany(LoadMultiPurposeStop::class)->orderBy('order');
  }

  public function loadTerminals(): HasMany {
    return $this->hasMany(LoadMultiPurposeStop::class)
      ->where('type', 1)->orderBy('order');
  }

  /**
   * Previously, the relationship was defined like this:
   * return $this->hasOne(Load::class, 'synced_load_id');
   * Which actually means:
   * return $this->hasOne(Load::class, 'synced_load_id', 'id');
   * Here, the foreignKey was "id", and the local key was "synced_load_id".
   * To understand the issue, consider we have a carrier's load with an id of 1239
   * and a shipperBroker's load with an id of 1238.
   * What this implies is that from the carrier's load (1239),
   * when loading this relationship, to get the brokerShipper's load, this query was executed:
   * Select 'id', 'admin_company_detail_id' from 'loads' where 'loads'.'synced_load_id' in (1239)
   * This means we'd look in another table for a load that has a synced_load_id equal to the carrier's load id.
   * But the correct approach is: We should search in the loads table for an id that is equal to
   * the carrier's synced_load_id (1238), this way:
   * Select 'id', 'admin_company_detail_id' from 'loads' where 'loads'.'id' in (1238)
   * So, a correct relation definition could be:
   * return $this->hasOne(Load::class, 'id', 'synced_load_id');
   * We always need to be cautious when defining a relationship, ensuring the foreign key and local key are correct.
   * This problem was discovered because, using the old relation definition,
   * the following code segment didn't work (syncedLoad would be null):
   * $carrierLoad->loadMissing(
   * 'syncedLoad:id,admin_company_detail_id'
   * );
   * It only worked if the foreign key referencing carrierLoad was loaded like this:
   * $carrierLoad->loadMissing(
   * 'syncedLoad:id,admin_company_detail_id,synced_load_id'
   * );
   * I've explained this in detail so that you can understand the issue.
   * Then we've decided to change the relation to the current one (belongsTo),
   * which works in the same way as the previous correct one (hasOne).
   *
   **/
  public function syncedLoad() {
    return $this->belongsTo(Load::class, 'synced_load_id');
  }

  public function chatLoads() {
    return $this->hasMany(ChatLoad::class);
  }

  public function loadNotes() {
    return $this->hasMany(LoadNote::class, 'load_id');
  }

  public function loadLogs() {
    return $this->hasMany(LoadLog::class);
  }

  public function tripV2LoadTemplatePayDetails() {
    return $this->hasMany(TripsV2LoadTemplatePayDetails::class);
  }
}
