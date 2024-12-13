<?php

namespace App\Http\Resources\User;

use App\Http\Resources\Admin\AdminDetailResource;
use App\Http\Resources\Admin\AdminResource;
use App\Http\Resources\Company\CompanyDetailResource;
use App\Http\Resources\Dispacher\DispacherDetailResource;
use App\Http\Resources\Driver\DriverDetailResource;
use App\Http\Resources\Driver\DriverFileResource;
use App\Models\AdminCompanyDetail;
use Illuminate\Http\Resources\Json\JsonResource;

class UserResource extends JsonResource {
  private $userRoles;
  protected $accessToken;

  public function __construct($user, $accessToken = null) {
    parent::__construct($user);
    $this->accessToken = $accessToken;

    $this->userRoles = config('constant.roles');
  }

  private function CompanyDetailResource() {
    if ($this->role == $this->userRoles['super_admin'] || !$this->is_business_profile_setup) {
      return new AdminCompanyDetail();
    }

    return AdminCompanyDetail::where('id', $this->admin_company_detail_id)->first();
  }

  public function toArray($request): array {
    $isAdminAlsoBeDispatcher = false;
    if ($this->role == $this->userRoles['admin'] && $this->multiple_roles == 1) {
      $isAdminAlsoBeDispatcher = true;
    }

    $resourceData = [
      $this->merge(new AdminResource($this)),

      $this->mergeWhen(
        ($this->role != $this->userRoles['super_admin'] && $this->is_business_profile_setup),
        [
          'admin_company_details' => [
            $this->merge(new CompanyDetailResource($this->CompanyDetailResource())),
          ],
        ]
      ),

      $this->merge([
        'userCustomization' => [
          $this->merge(new UserCustomizationResource($this->userCustomization)),
        ],
      ]),

      $this->mergeWhen(
        $this->role == $this->userRoles['super_admin'],
        ['super_admin_details' => new AdminDetailResource($this->superAdminDetail)]
      ),

      /* when user only admin*/
      $this->mergeWhen(
        $this->role == $this->userRoles['admin'] && !$isAdminAlsoBeDispatcher,
        ['admin_details' => new AdminDetailResource($this->adminDetail)]
      ),

      /* when admin is dispatcher also. */
      $this->mergeWhen(
        $this->role == $this->userRoles['admin'] && $isAdminAlsoBeDispatcher,
        [
          'admin_details' => new AdminDetailResource($this->adminDetail),
          'dispacher_details' => new DispacherDetailResource($this->dispacherDetail)
        ]
      ),

      $this->mergeWhen(
        $this->role == $this->userRoles['driver'],
        [
          'driver_details' => new DriverDetailResource($this->driverDetail),
          'driver_files' => DriverFileResource::collection($this->driverFiles)
        ]
      ),

      $this->mergeWhen(
        $this->role == $this->userRoles['dispatcher'],
        [
          'dispacher_details' => new DispacherDetailResource($this->dispacherDetail)
        ]
      ),
    ];

    if ($this->accessToken) {
      $resourceData['access_token'] = $this->accessToken;
    }

    return $resourceData;

  }
}
