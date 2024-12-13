<?php

namespace App\Http\Resources\Admin;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class AdminResource extends JsonResource {
  /**
   * Transform the resource into an array.
   *
   * @param Request $request
   * @return array
   */
  public function toArray($request): array {
    return [
      'user_id' => $this->id ?? "",
      'email' => $this->email ?? "",
      'role' => $this->role ?? "",
      'multiple_roles' => $this->multiple_roles ?? null,
      'status' => $this->status ?? "",
      'admin_company_detail_id' => $this->admin_company_detail_id ?? "",
      'is_business_profile_setup' => $this->is_business_profile_setup ?? "",
      'firstName' => $this->first_name ?? "",
      'lastName' => $this->last_name ?? "",
      'tagAccess' => $this->tag_access ?? null,
      'createdAt' => optional($this->created_at)->format(config('constant.date_time_format')) ?? "",
      'hashHmac' => hash_hmac('sha256', strval($this->id), env('INTERCOM_SECRET_KEY', 'test')) ?? '',
    ];
  }
}
