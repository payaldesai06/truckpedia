<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\Api\FactoringCompany\CreateFactoringCompanyRequest;
use App\Http\Requests\Api\FactoringCompany\UpdateFactoringCompanyRequest;
use App\Http\Resources\FactoringCompany\FactoringCompanyResource;
use App\Services\FactoringCompanyService;

class FactoringCompanyController extends Controller {
  protected FactoringCompanyService $factoringCompanyService;

  public function __construct(FactoringCompanyService $factoringCompanyService) {
    $this->factoringCompanyService = $factoringCompanyService;
  }

  /**
   * Display a listing of the resource.
   *
   * @return \Illuminate\Http\Response
   */
  public function index() {
    return $this->respondWithData(FactoringCompanyResource::collection($this->factoringCompanyService->index()));
  }

  /**
   * Store a newly created resource in storage.
   *
   * @param  \Illuminate\Http\Request  $request
   * @return \Illuminate\Http\Response
   */
  public function store(CreateFactoringCompanyRequest $request) {
    return $this->respondWithData(new FactoringCompanyResource($this->factoringCompanyService->store($request)), config('response.factoring_company.create'));
  }

  /**
   * Display the specified resource.
   *
   * @param  int  $id
   * @return \Illuminate\Http\Response
   */
  public function show($id) {
    return $this->respondWithData(new FactoringCompanyResource($this->factoringCompanyService->show($id)));
  }

  /**
   * Update the specified resource in storage.
   *
   * @param  \Illuminate\Http\Request  $request
   * @param  int  $id
   * @return \Illuminate\Http\Response
   */
  public function update(UpdateFactoringCompanyRequest $request, $id) {
    return $this->respondWithData(new FactoringCompanyResource($this->factoringCompanyService->update($request, $id)), config('response.factoring_company.update'));
  }

  /**
   * Remove the specified resource from storage.
   *
   * @param  int  $id
   * @return \Illuminate\Http\Response
   */
  public function delete($id) {
    $this->factoringCompanyService->delete($id);
    return $this->respondOk();
  }
}