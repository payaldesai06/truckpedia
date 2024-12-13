<?php

namespace App\Models;

use App\Models\Planning\CompanyAccessorialFeeRate;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Database\Eloquent\SoftDeletes;

class AdminCompanyDetail extends Model {
  use SoftDeletes;

  protected $guarded = ['id'];

  protected $casts = [
    'auto_send_status_updates_to_collaborators' => 'boolean',
    'auto_send_status_updates_to_dispatcher' => 'boolean',
    'auto_send_pod_to_collaborators' => 'boolean',
    'auto_send_detention_requests_to_collaborators' => 'boolean',
    'show_dispatcher_fee_on_invoice' => 'boolean',
    'show_factoring_fee_on_invoice' => 'boolean',
    'customizations' => 'json',
  ];

  public function user() {
    return $this->belongsTo(User::class, 'user_id', 'id');
  }

  /**
   * Get All Admins
   */
  public function admins() {
    return $this->hasMany(User::class)
      ->where('role', '=', config('constant.roles.admin'));
  }

  /**
   * Get All Dispatchers
   */
  public function dispatchers() {
    return $this->hasMany(User::class, 'admin_company_detail_id')
      ->where('role', '=', config('constant.roles.dispatcher'));
  }

  /**
   * Get All Drivers
   */
  public function drivers() {
    return $this->hasMany(User::class)
      ->where('role', '=', config('constant.roles.driver'));
  }

  /**
   * Get All Trucks
   */
  public function trucks() {
    return $this->hasMany(Truck::class, 'company_id');
  }

  /**
   * Get All Trailers
   */
  public function trailers() {
    return $this->hasMany(Trailer::class, 'company_id');
  }

  /**
   * Get All loads
   */
  public function loads() {
    return $this->hasMany(Load::class, 'admin_company_detail_id');
  }

  public function tags() {
    return $this->hasMany(Tag::class, 'company_id');
  }

  /**
   * Get the QuickbooksAuth info.
   */
  public function quickbooksAuth() {
    return $this->hasOne(QuickbooksAuth::class, 'company_id')->whereNull('tag_id')->latest();
  }

  public function allQuickbooksAuths(): HasMany {
    return $this->hasMany(QuickbooksAuth::class, 'company_id');
  }

  /**
   * @return HasOne
   * Get the Samsara Auth Info
   */
  public function samsaraAuth() {
    return $this->hasOne(Samsara::class, 'company_id');
  }

  public function factoringCompanies() {
    return $this->hasMany(FactoringCompany::class, 'company_id');
  }

  /**
   * Get the KeepTruckin info.
   */
  public function keepTruckinAuth(): HasOne {
    return $this->hasOne(KeepTruckin::class, 'company_id');
  }

  public function pcMilerApiKey(): HasOne {
    return $this->hasOne(PcMiler::class);
  }

  public function carrierWebsite(): HasOne {
    return $this->hasOne(carrierWebsite::class, 'company_id', 'id');
  }

  public function trailerFolders() {
    return $this->hasMany(TrailerFolder::class, 'company_id');
  }

  public function companyFrequentLanes() {
    return $this->hasOne(CompanyFrequentLane::class, 'company_id', 'id');
  }

  public function driverV2Folders() {
    return $this->hasMany(DriverV2Folder::class, 'company_id');
  }

  public function accessorialFees() {
    return $this->hasMany(AccessorialFee::class, 'admin_company_detail_id');
  }

  public function transactions() {
    return $this->hasMany(Transaction::class, 'admin_company_detail_id');
  }

  public function wexAccounts() {
    return $this->hasMany(WexAccount::class, 'company_id', 'id');
  }

  public function wexFuelTransactions() {
    return $this->hasMany(WexTransaction::class, 'company_id', 'id');
  }

  public function fmcsaCarrier(): HasOne {
    return $this->hasOne(FmcsaCarrier::class, 'company_id', 'id');
  }

  public function companyAccessorialFeeRate(): HasOne {
    return $this->hasOne(CompanyAccessorialFeeRate::class, 'company_id', 'id');
  }

  public function accounts() {
    return $this->hasMany(Account::class, 'company_id', 'id');
  }

  public function lovesFuelCardTransactions() {
    return $this->hasMany(LovesFuelCardTransaction::class, 'company_id', 'id');
  }

  public function tripsV2() {
    return $this->hasMany(TripV2::class, 'company_id', 'id');
  }
}
