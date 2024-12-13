<?php

namespace App\Services;

use App\Http\Requests\Api\SavedAddresses\CreateSavedAddressesRequest;
use App\Models\SavedAddress;
use Exception;

class SavedAddressesService {
  /**
   * Get All Authenticated Company saved addresses.
   * @return mixed
   * @throws Exception
   */
  public function datatable() {
    $perPage = request('rows', config('response.per_page'));
    $companyId = getAuthAdminCompanyId();
    return SavedAddress::where('company_id', $companyId)
      ->with(['taggedCustomer:id,company_name'])
      ->when(request('name'), function ($query, $name) {
        return $query->where('name', 'like', '%' . $name . '%');
      })->when(request('address'), function ($query, $address) {
        return $query->where('address', 'like', '%' . $address . '%');
      })->when(request('state'), function ($query, $state) {
        return $query->where('state', 'like', '%' . $state . '%');
      })->when(request('city'), function ($query, $city) {
        return $query->where('city', 'like', '%' . $city . '%');
      })->when(request('zip_code'), function ($query, $zipcode) {
        return $query->where('zip_code', 'like', '%' . $zipcode . '%');
      })->when(request('contact'), function ($query, $contact) {
        return $query->where('contact', 'like', '%' . $contact . '%');
      })->when(request('phone'), function ($query, $phone) {
        return $query->where('phone', 'like', '%' . $phone . '%');
      })->when(request('email'), function ($query, $email) {
        return $query->where('email', 'like', '%' . $email . '%');
      })->when(request()->has(['sortField', 'sortOrder']), function ($query) {
        return $query->orderBy(request('sortField'), request('sortOrder'));
      })->paginate($perPage);
  }

  /**
   * Create saved address for a company.
   * @param CreateSavedAddressesRequest $request
   * @return mixed
   * @throws Exception
   */
  public function create(CreateSavedAddressesRequest $request) {
    $companyId = getAuthAdminCompanyId();
    $getValidatedData = $this->getValidatedData();
    $getValidatedData['company_id'] = $companyId;
    return SavedAddress::create($getValidatedData);
  }

  /**
   * Update saved addresses for a company.
   * @param CreateSavedAddressesRequest $request
   * @return mixed
   * @throws Exception
   */
  public function update(CreateSavedAddressesRequest $request) {
    $companyId = getAuthAdminCompanyId();
    $savedAddress = SavedAddress::where([
      'id' => request('id'),
      'company_id' => $companyId
    ])->first();

    if (empty($savedAddress)) {
      throw new Exception(config('response.customer.error'));
    }
    $getValidatedData = $this->getValidatedData();
    $savedAddress->update($getValidatedData);
    return $savedAddress;
  }

  /**
   * Validated request data to create address.
   * @return array
   */
  private function getValidatedData(): array {
    return [
      'name' => request('name') ? trim(request('name')) : null,
      'address' => request('address') ?? null,
      'state' => request('state') ?? null,
      'city' => request('city') ?? null,
      'zip_code' => request('zip_code') ?? null,
      'contact' => request('contact') ?? null,
      'phone' => request('phone') ?? null,
      'email' => request('email') ?? null,
      'latitude' => request('latitude') ?? null,
      'longitude' => request('longitude') ?? null,
      'tagged_customer_id' => request('taggedCustomerId') ?? null,
      'tagged_customer_bill_to_code' => request('taggedCustomerBillToCode') ?? null,
      'zone' => request('zone') ?? null,
      'trailer_recovery_fee' => request('trailerRecoveryFee') ?? null,
    ];
  }

  /**
   * Search Saved Addresses by name.
   * @return mixed
   * @throws Exception
   */
  public function searchByName() {
    $companyId = getAuthAdminCompanyId();
    return SavedAddress::where('company_id', $companyId)
      // We may turn it on later
      // ->with(['taggedCustomer:id,company_name'])
      ->where('name', 'like', '%' . request('name') . '%')
      ->get();
  }

  /**
   * Delete address using address id.
   * @return mixed
   * @throws Exception
   */
  public function delete() {
    $companyId = getAuthAdminCompanyId();
    $address = SavedAddress::where('id', request('id'))->where('company_id', $companyId)->first();
    if (empty($address)) {
      throw new Exception(config('response.customer.error'));
    }
    $address->delete();
    return $address;
  }

  /**
   * Get saved address tagged customer based on (shipper) name.
   * @param $name
   * @param $companyId
   * @return array
   */
  public function getSavedAddressTaggedCustomer($name, $companyId) {
    $billToCode = $customerId = null;
    if (!empty($name)) {
      $savedAddress = SavedAddress::where('company_id', $companyId)
        ->where('name', $name)
        ->whereNotNull('tagged_customer_id')
        ->select('tagged_customer_id', 'tagged_customer_bill_to_code')
        ->first();
      if (!empty($savedAddress)) {
        $customerId = $savedAddress->tagged_customer_id;
        $billToCode = $savedAddress->tagged_customer_bill_to_code;
      }
    }
    return ['customer_id' => $customerId, 'bill_to_code' => $billToCode];
  }
}
