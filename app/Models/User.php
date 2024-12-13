<?php

namespace App\Models;

use App\Models\Logs\UserLocationLog;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Facades\Hash;
use Laravel\Passport\HasApiTokens;

class User extends Authenticatable {
  use Notifiable, HasApiTokens, SoftDeletes;

  /**
   * The attributes that are mass assignable.
   *
   * @var array
   */
  protected $fillable = [
    'first_name', 'last_name', 'email', 'password', 'role', 'admin_company_detail_id', 'status',
    'multiple_roles', 'tag_access'
  ];

  protected $appends = ['is_business_profile_setup'];

  /**
   * The attributes that should be hidden for arrays.
   *
   * @var array
   */
  protected $hidden = [
    'password', 'remember_token',
  ];

  /**
   * The attributes that should be cast to native types.
   *
   * @var array
   */
  protected $casts = [
    'email_verified_at' => 'datetime',
  ];

  public function setPasswordAttribute($value) {
    $this->attributes['password'] = Hash::make($value);
  }


  public function dispacherDetail() {
    return $this->hasOne(DispacherDetail::class);
  }

  public function driverDetail() {
    return $this->hasOne(DriverDetail::class);
  }

  public function superAdminDetail() {
    return $this->hasOne(AdminDetail::class);
  }

  public function adminDetail() {
    return $this->hasOne(AdminDetail::class);
  }

  public function adminCompanyDetail() {
    return $this->belongsTo(AdminCompanyDetail::class);
  }

  public function driverFiles() {
    return $this->hasMany(DriverFile::class);
  }

  /*
          admin create multipale trucks
      */
  public function trucks() {
    return $this->hasMany(Truck::class)->latest();
  }

  /*
          admin create multipale trailers
      */
  public function trailers() {
    return $this->hasMany(Trailer::class)->latest();
  }

  /*
          admin create multipale customers
      */
  public function customers() {
    return $this->hasMany(Customer::class)->latest();
  }

  /*
          admin create multipale shippers
      */
  public function shippers() {
    return $this->hasMany(Shipper::class)->latest();
  }

  /*
          admin create multipale receivers
      */
  public function receivers() {
    return $this->hasMany(Receiver::class)->latest();
  }

  /*
          admin create multipale dispachers
      */
  public function dispachers() {
    return $this->hasMany(DispacherDetail::class)->latest();
  }

  /*
        admin create multipale drivers
    */
  public function drivers() {
    return $this->hasMany(User::class);
    // return $this->hasMany(User::class)->whereHas('driverDetail', function ($query) {
    //     $query->where('owner_id', '=', $this->id);
    // });
  }

  // public function userAdminCompanyDetail()
  // {
  //     return $this->hasOne(AdminCompanyDetail::class)->where('admin_company_detail_id');
  // }

  public function loadDetail() {
    return $this->hasMany(Load::class, 'dispatcher_id', 'id');
  }

  /**
   * Check User Setup his Business Profile
   *
   */
  public function getIsBusinessProfileSetupAttribute(): bool {
    if ($this->role == config('constant.roles.super_admin')) {
      return true;
    }

    return !!$this->admin_company_detail_id;
  }

  /**
   * One user with role of Warehouse Operator has a Warehouse Operator detail
   * @return \Illuminate\Database\Eloquent\Relations\HasOne
   */
  public function warehouseOperatorDetail() {
    return $this->hasOne(WarehouseOperatorDetail::class);
  }

  public function tags() {
    return $this->belongsToMany(Tag::class, UserTag::class);
  }

  public function tagOperatorDetail() {
    return $this->hasOne(TagOperatorDetail::class);
  }

  public function roleAuthorized($roles): bool {
    if (is_array($roles)) {
      foreach ($roles as $role) {
        if ($this->isSameRole($role)) {
          return true;
        }
      }
    } else {
      if ($this->isSameRole($roles)) {
        return true;
      }
    }
    return false;
  }

  /**
   * @param  string  $role
   * @return bool
   */
  public function isSameRole(string $role): bool {
    return $this->getAttribute('role') === $role;
  }

  public function driverNotes() {
    return $this->hasMany(DriverNote::class);
  }

  public function driverTrailerAssignments() {
    return $this->hasMany(DriverTrailerAssignment::class);
  }

  public function driverTruckAssignments() {
    return $this->hasMany(DriverTruckAssignment::class);
  }

  public function driverFilesV2() {
    return $this->hasMany(DriverV2File::class);
  }

  public function driverTimeOffCalendar() {
    return $this->hasMany(DriverTimeOffCalendar::class);
  }

  public function driverPayTemplateDetails(): HasMany {
    return $this->hasMany(DriverPayTemplateDetail::class);
  }

  public function userCustomization() {
    return $this->hasMany(UserCustomization::class);
  }

  public function tripsV2() {
    return $this->hasMany(TripV2::class, 'user_id');
  }

  public function userLocationLogs() {
    return $this->hasMany(UserLocationLog::class, 'user_id');
  }
}
