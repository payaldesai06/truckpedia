<?php

namespace App\Http\Resources\Customer;

use Illuminate\Http\Resources\Json\JsonResource;

class CustomerResource extends JsonResource {
  /**
   * Transform the resource into an array.
   *
   * @param \Illuminate\Http\Request $request
   * @return array
   */
  public function toArray($request) {
    if (!empty($this->carrier_setup_package_storage_filename)) {
      $carrierSetupPackageStorageFilename = getImage(
        $this->carrier_setup_package_storage_filename,
        config('constant.s3.customerFiles')
      );
    }

    return [
      'customer_id' => $this->id ?? "",
      'user_id' => $this->user_id ?? "",
      'company_id' => $this->company_id ?? "",
      'type' => $this->type ?? "",
      'company_name' => $this->company_name ?? "",
      'mcNumber' => $this->mc_number ?? "",
      'address' => $this->address ?? "",
      'state' => $this->state ?? "",
      'city' => $this->city ?? "",
      'zip_code' => $this->zip_code ?? "",
      'primary_contact' => $this->primary_contact ?? "",
      'phone_number' => $this->phone_number ?? "",
      'email' => $this->email ?? "",
      'ccEmails' => !empty($this->cc_emails) ? explode(',', $this->cc_emails) : [],
      'billing_address' => $this->billing_address ?? "",
      'billing_state' => $this->billing_state ?? "",
      'billing_city' => $this->billing_city ?? "",
      'billing_zip_code' => $this->billing_zip_code ?? "",
      'billing_contact' => $this->billing_contact ?? "",
      'billing_phone_number' => $this->billing_phone_number ?? "",
      'billing_email' => $this->billing_email ?? "",
      'billing_cc_emails' => !empty($this->billing_cc_emails) ? explode(',', $this->billing_cc_emails) : [],
      'payment_terms_day' => $this->payment_terms_day ?? "",
      'status' => $this->status ?? "",
      'inExternal' => !empty($this->internal) ? config('constant.customer.inExternal')[$this->internal] : null,
      'billToCodes' => !empty($this->bill_to_codes) ? explode(',', $this->bill_to_codes) : [],
      'salesRep' => $this->sales_rep ?? "",
      'shippingCarrierAcct' => $this->shipping_carrier_acct ?? "",
      'carrierSetupPackageStorageUrl' => $carrierSetupPackageStorageFilename ?? "",
      'notes' => $this->notes ?? null,
      'syncedCompanyId' => $this->synced_company_id ?? null,
      'noFactoring' => (!empty($this->no_factoring) && $this->no_factoring == 1) ? true : null,
      'automationDriverButtons' => !empty($this->automation_driver_buttons) ? true : false,
      'mergeInvoice' => (!empty($this->merge_invoice) && $this->merge_invoice == 1) ? true : null,
      'massInvoiceUseIndividualInvoices' => (!empty($this->mass_invoice_use_individual_invoices)
        && $this->mass_invoice_use_individual_invoices == 1) ? true : null,
    ];
  }
}
