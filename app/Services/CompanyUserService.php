<?php


namespace App\Services;

use App\Models\User;
use App\Models\UserTag;
use App\Notifications\SetNewPassword;
use Exception;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use App\Models\AdminDetail;
use App\Models\DispacherDetail;
use App\Models\WarehouseOperatorDetail;
use App\Models\TagOperatorDetail;
use App\Models\DriverDetail;

class CompanyUserService {
  public function datatable() {
    $per_page = request('rows') ?? config('response.per_page');

    return User::where('role', '!=', config('constant.roles.driver'))
      ->where('id', '!=', Auth::id())
      ->where('admin_company_detail_id', '=', Auth::user()->admin_company_detail_id)
      ->when(request()->filled('name'), function ($query) {
        $name = request('name');
        return $query->whereRaw(
          "concat(COALESCE(`first_name`,''), ' ', COALESCE(`last_name`,'')) like '%$name%' "
        );
      })
      ->when(request()->has('email'), function ($query) {
        return $query->where('email', 'like', '%' . request('email') . '%');
      })->when(request()->has('role'), function ($query) {
        return $query->where('role', 'like', '%' . request('role') . '%');
      })->when(request()->has('sortField') && request()->has('sortOrder'), function ($query) {
        return $query->orderBy(request('sortField'), request('sortOrder'));
      })->paginate($per_page);
  }

  public function create() {
    return DB::transaction(function () {
      $validatedData = $this->getValidatedData();
      $validatedData['admin_company_detail_id'] = Auth::user()->admin_company_detail_id;
      $validatedData['status'] = config('constant.status.user.active');

      $adminAlsoBeDispatcher = request('adminAlsoBeDispatcher') ?? false;
      $validatedData['multiple_roles'] = $adminAlsoBeDispatcher;

      if (request('role') == config('constant.roles.admin') && $adminAlsoBeDispatcher) {
        /* admin is also a dispatcher */
        $validatedData['multiple_roles'] = 1;
      }

      $user = User::create($validatedData);
      $role = $user->role;

      if ($role == config('constant.roles.dispatcher')) {
        $user->dispacherDetail()->create($this->getValidatedDataDispatcher());
      } elseif ($role == config('constant.roles.admin')) {
        if ($adminAlsoBeDispatcher) {
          /* admin is also a dispatcher */
          $user->dispacherDetail()->create($this->getValidatedDataDispatcher());
        }
        $user->adminDetail()->create($this->getValidatedDataAdmin());
      } elseif ($role == config('constant.roles.warehouse_operator')) {
        $user->warehouseOperatorDetail()->create($this->getValidatedDataWarehouseOperator());
      } elseif ($role == config('constant.roles.tag_operator')) {
        $user->tagOperatorDetail()->create($this->getValidatedDataTagOperator());
      }

      //Added multiple tags functionality for every type of users
      if (!empty(request('tags'))) {
        $user->tags()->attach(request('tags'));
      }

      $user->notify(new SetNewPassword());
      return $user;
    });
  }

  public function update() {
    return DB::transaction(function () {
      return tap(
        User::query()->findOrFail(request('user')),
        function ($user) {
          $validatedData = $this->getValidatedData();

          $adminAlsoBeDispatcher = request('adminAlsoBeDispatcher') ?? false;

          $validatedData['multiple_roles'] = null;
          if (request('role') == config('constant.roles.admin') && $adminAlsoBeDispatcher) {
            /* admin is also a dispatcher */
            $validatedData['multiple_roles'] = 1;
          }

          $user->update($validatedData);

          if (request('role') == config('constant.roles.admin')) {
            if ($adminAlsoBeDispatcher) {
              /* admin is also a dispatcher */
              $user->dispacherDetail()->updateOrCreate([
                'user_id' => $user->id
              ], $this->getValidatedDataDispatcher());
            }
            $user->adminDetail()->updateOrCreate([
              'user_id' => $user->id
            ], $this->getValidatedDataAdmin());
          } elseif (request('role') == config('constant.roles.dispatcher')) {
            $user->dispacherDetail()->updateOrCreate([
              'user_id' => $user->id
            ], $this->getValidatedDataDispatcher());
          } elseif (request('role') == config('constant.roles.warehouse_operator')) {
            $user->warehouseOperatorDetail()->updateOrCreate([
              'user_id' => $user->id
            ], $this->getValidatedDataWarehouseOperator());
          } elseif (request('role') == config('constant.roles.tag_operator')) {
            $user->tagOperatorDetail()->updateOrCreate([
              'user_id' => $user->id
            ], $this->getValidatedDataTagOperator());
          }

          //Added multiple tags functionality for every type of users
          if (!empty(request('tags'))) {
            $user->tags()->sync(request('tags'));
          } else if (request('role') != config('constant.roles.driver')) {
            $user->tags()->sync([]);
          }

          return;

          /*if (request('role') == config('constant.roles.admin')) {
                              if (!$user->adminDetail) {
                                  return $user->adminDetail()->create($validatedDataForUserDetail);
                              }

                              return $user->adminDetail()->update($validatedDataForUserDetail);
                          }

                          if (!$user->dispacherDetail) {
                              return $user->dispacherDetail()->create($validatedDataForUserDetail);
                          }

                          return $user->dispacherDetail()->update($validatedDataForUserDetail);
                          */
        }
      );
    });
  }

  public function delete() {
    $id = request('user');
    $user = User::findOrFail($id);
    $role = $user->role;
    if ($role == config('constant.roles.dispatcher')) {
      $user->dispacherDetail()->delete();
    } elseif ($role == config('constant.roles.admin')) {
      $user->adminDetail()->delete();
    }
    return tap(User::findOrFail($id))->delete();
  }

  public function changeStatus() {
    return tap(User::query()->findOrFail(request('user')), function ($user) {
      $status = request('status');

      if ($status == config('constant.status.user.inactive')) {
        $user->tokens()->delete();
      }

      $user->update(['status' => $status]);
    });
  }

  public function getCurrentUserTagIds() {
    $result = UserTag::select('tag_id')->where('user_id', Auth::user()->id)
      ->pluck('tag_id')->toArray() ?? [];
    return $result;
  }

  private function getValidatedData(): array {
    $data = [
      'email' => request('email'),
      'role' => request('role'),
      'first_name' => request('first_name'),
      'last_name' => request('last_name'),
      'tag_access' => request('hideLoadsWithNoTag') == true ? 1 : null,
    ];
    if (
      !in_array(
        request('role'),
        [config('constant.roles.dispatcher'), config('constant.roles.admin')]
      )
      || empty(request('tags'))
    ) {
      $data['tag_access'] = null;
    }
    return $data;
  }

  private function getValidatedDataAdmin(): array {
    return [
      'first_name' => request('first_name'),
      'last_name' => request('last_name'),
    ];
  }

  private function getValidatedDataDispatcher(): array {
    return [
      'first_name' => request('first_name'),
      'last_name' => request('last_name'),
      'commission_fractional' => request('commission_fractional'),
      'commission_on' => request('commission_on'),
      'custom_formula_primary' => request('customFormulaPrimary') ? array_search(request('customFormulaPrimary'), config('constant.commissionCustomFormulaOperand')) : null,
      'custom_formula_operator' =>  request('commissionCustomFormulaOperator') ? array_search(request('commissionCustomFormulaOperator'), config('constant.commissionCustomFormulaOperator')) : null,
      'custom_formula_secondary' => request('customFormulaSecondary') ? array_search(request('customFormulaSecondary'), config('constant.commissionCustomFormulaOperand')) : null,
    ];
  }

  private function getValidatedDataWarehouseOperator(): array {
    return [
      'first_name' => request('first_name'),
      'last_name' => request('last_name'),
    ];
  }

  private function getValidatedDataTagOperator(): array {
    return [
      'first_name' => request('first_name'),
      'last_name' => request('last_name'),
    ];
  }

  /**
   * Get all users except current user without pagination.
   * @return array|Collection
   * @throws Exception
   */
  public function getAllUsersV2(array $excludeIds = []) {
    return $this->getAllUsersV2Helper($excludeIds, []);
  }

  public function getAllUsersV2Helper(array $excludeIds, array $excludeRoles) {
    $companyUsers = User::where('status', config('constant.status.user.active'))
      ->where('admin_company_detail_id', getAuthAdminCompanyId())
      ->select(['id', 'first_name', 'last_name', 'role'])
      ->whereNotIn('role', $excludeRoles)
      ->whereNotIn('id', $excludeIds)
      ->get();

    if ($companyUsers->isEmpty()) {
      return [];
    }

    return $companyUsers->map(function ($user) {
      return [
        'id' => $user->id,
        'fullName' => $user->first_name . " " . $user->last_name
      ];
    });
  }

  public function getAllDriversV2() {
    $companyUsers = User::where('status', config('constant.status.user.active'))
      ->where('admin_company_detail_id', getAuthAdminCompanyId())
      ->select(['id', 'first_name', 'last_name', 'role'])
      ->where('role', config('constant.roles.driver'))
      ->get();

    if ($companyUsers->isEmpty()) {
      return [];
    }

    return $companyUsers->map(function ($user) {
      return [
        'id' => $user->id,
        'fullName' => $user->first_name . " " . $user->last_name
      ];
    });
  }

  public function getAllWebsiteUsersExceptCurrentUserV2() {
    return $this->getAllUsersV2Helper([Auth::user()->id], [config('constant.roles.driver')]);
  }
}
