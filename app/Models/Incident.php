<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Incident extends Model {
  use SoftDeletes;

  protected $guarded = [];

  public function tag() {
    return $this->belongsTo(Tag::class);
  }

  public function trailer() {
    return $this->belongsTo(Trailer::class);
  }

  public function truck() {
    return $this->belongsTo(Truck::class);
  }

  public function involvedThirdParty() {
    return $this->belongsTo(Customer::class, 'involved_third_party_id');
  }

  public function involvedUser() {
    return $this->belongsTo(User::class, 'involved_user_id');
  }

  public function savedAddress() {
    return $this->belongsTo(SavedAddress::class, 'saved_address_id');
  }

  public function incidentFiles() {
    return $this->hasMany(IncidentFile::class);
  }

  public function insuranceCompany() {
    return $this->belongsTo(Customer::class, 'deal_with_insurance_company_id');
  }

  public function incidentEmails() {
    return $this->hasMany(IncidentEmail::class)->orderByDesc('id');
  }

  public function incidentNotes() {
    return $this->hasMany(IncidentNote::class);
  }

  public function assigneeUser() {
    return $this->belongsTo(User::class, 'assignee_user_id');
  }

  public function company() {
    return $this->belongsTo(AdminCompanyDetail::class, 'company_id', 'id');
  }
}
