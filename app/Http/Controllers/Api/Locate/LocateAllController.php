<?php

namespace App\Http\Controllers\Api\Locate;

use App\Http\Controllers\Controller;
use App\Http\Resources\Locate\LocateAllResource;
use App\Models\AdminCompanyDetail;
use Illuminate\Support\Facades\Auth;

class LocateAllController extends Controller {

  public function locateAll() {
    $adminCompanyDetail = AdminCompanyDetail::find(Auth::user()->admin_company_detail_id);
    return $this->respondWithData(new LocateAllResource($adminCompanyDetail));
  }
}
