<?php

namespace App\Services;

use App\Models\FactoringCompany;
use Illuminate\Support\Facades\Auth;

class FactoringCompanyService {
  /**
   * Display a listing of the resource.
   */
  public function index() {
    return FactoringCompany::where('company_id', Auth::user()->admin_company_detail_id)->get();
  }

  /**
   * Store a newly created resource in storage.
   *
   * @param  \Illuminate\Http\Request  $request
   * @return \Illuminate\Http\Response
   */
  public function store($request) {
    $data = $this->prepareData($request);
    $data['company_id'] = getAuthAdminCompanyId();
    return FactoringCompany::create($data);
  }

  /**
   * Prepare Data for insert/update factoring
   * @param $request
   * @return array
   */
  protected function prepareData($request) {
    return [
      'name' => $request->name,
      'billing_email' => $request->billing_email,
      'address' => $request->address,
      'city' => $request->city,
      'state' => $request->state,
      'zip_code' => $request->zip_code,
      'phone_number' => $request->phone_number,
      'factoring_fee_fractional' => $request->factoring_fee_fractional ?? null,
      'request_payment_merge_pdfs' => $request->request_payment_merge_pdfs ?? null,
      'integration_partner' => $request->integrationPartner ?
        array_search($request->integrationPartner, config('constant.factoringCompany.integrationPartners')) : null,
    ];
  }

  /**
   * Display the specified resource.
   */
  public function show($id) {
    return FactoringCompany::find($id);
  }

  /**
   * Update the specified resource in storage.
   */
  public function update($request, $id) {
    $factoringCompany = FactoringCompany::find($id);
    $factoringCompany->update($this->prepareData($request));
    return $factoringCompany;
  }

  /**
   * Remove the specified resource from storage.
   */
  public function delete($id) {
    return FactoringCompany::find($id)->delete();
  }
}
