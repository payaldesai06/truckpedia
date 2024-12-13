<?php

namespace App\Http\Resources\Tag;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class TagMainResource extends JsonResource {
  /**
   * Transform the resource into an array.
   *
   * @param Request $request
   * @return array
   */
  public function toArray($request): array {
    return [
      'tag_id' => $this->id ?? '',
      'company_id' => $this->company_id ?? '',
      'business_name' => $this->business_name ?? '',
      'email' => $this->email ?? '',
      'address' => $this->address ?? '',
      'city' => $this->city ?? '',
      'state' => $this->state ?? '',
      'zipcode' => $this->zipcode ?? '',
      'usdot_number' => $this->usdot_number ?? '',
      'phone_number' => $this->phone_number ?? '',
      'load_unique_id_started_from' => $this->load_unique_id_started_from ?? '',
      'use_tag_for_billing' => $this->use_tag_for_billing,
      'invoice_sync_cascade' => $this->invoice_sync_cascade,
      'billing_cc_emails' => !empty($this->billing_cc_emails) ? explode(',', $this->billing_cc_emails) : '',
      'type' => !empty($this->type) ? config('constant.tags.type')[$this->type] : null,
      'pay_to_code' => $this->pay_to_code ?? null,
      'driverPayTemplate' => [
        'loadDetails' => !empty($this->driverPayTemplateDetails['loadDetails']) ? $this->driverPayTemplateDetails['loadDetails'] : null,
        'tripDetails' => !empty($this->driverPayTemplateDetails['tripDetails']) ? $this->driverPayTemplateDetails['tripDetails'] : null
      ],
      'logoImageUrl' => !empty($this->logo_image_storage_file_name)
        ? getImage(
          $this->logo_image_storage_file_name,
          config('constant.s3.admin_company_image')
        ) : '',
      'numberPrefix' => $this->number_prefix ?? null,
    ];
  }
}
