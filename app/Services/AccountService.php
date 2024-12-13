<?php

namespace App\Services;

use App\Models\Account;
use App\Models\AccountQboId;
use App\Services\QuickbooksAuthService;
use Illuminate\Support\Facades\DB;
use Exception;

class AccountService {

  /**
   * Get all accounts of current company
   * @return array
   */
  public function getCompanyAccounts() {
    $accounts = Account::where('company_id', getAuthAdminCompanyId())->get();
    $accountingTypes = config('accounting.type');
    $ret['accounts'] = $accounts->map(function ($account) use ($accountingTypes) {
      return [
        'id' => $account->id,
        'name' => $account->name ?? null,
        'type' => $accountingTypes[$account->type]['name'] ?? null,
        'subType' => $accountingTypes[$account->type]['subTypes'][$account->sub_type] ?? null,
        'parentAccount' => $account->parent_account_id ? ['id' => $account->parent_account_id] : null,
      ];
    });
    return $ret;
  }

  /**
   * Create account
   * @param $request
   * @return mixed
   * @throws Exception
   */
  public function create($request) {
    $companyId = getAuthAdminCompanyId();
    $getValidatedData = $this->getValidatedData($request, $companyId);
    $this->checkIfAccountExist($request, $companyId);
    return Account::create($getValidatedData);
  }

  /**
   * Update account
   * @param $request
   * @param $id
   * @return mixed
   * @throws Exception
   */
  public function edit($request, $id) {
    $companyId = getAuthAdminCompanyId();
    $account = Account::where('id', $id)
      ->where('company_id', $companyId)
      ->first();
    if (empty($account)) {
      throw new Exception(config('response.error'));
    }
    $this->checkAccountTypeValidity($account);
    $getValidatedData = $this->getValidatedData($request, $companyId);
    $this->checkIfAccountExist($request, $companyId, $id);
    return $account->fill($getValidatedData)->save();
  }

  /**
   * Validated request data to account.
   * @param $request
   * @param $companyId
   * @return array
   * @throws Exception
   */
  private function getValidatedData($request, $companyId): array {
    $types = array_combine(
      array_keys(config('accounting.type')),
      array_column(config('accounting.type'), 'name')
    );
    $type = array_search($request->type, $types);
    $subTypes = [];
    if (!empty($type)) {
      $subTypes = config('accounting.type.' . $type . '.subTypes');
    } else {
      // is it even possible for the code to ever come here?  // Ans : it's not possible
      // Even if not, no need to delete, just leave a comment say in theory it's not possible.
      throw new Exception(config('response.account.typeError'));
    }
    $subType = array_search($request->subType, $subTypes);
    return [
      'company_id' => $companyId,
      'name' => $request->name,
      'description' => $request->description ?? null,
      'type' => $type,
      'sub_type' => $subType,
      'parent_account_id' => $request->parentAccountId ?? null,
    ];
  }

  /**
   * Validate duplicate account name
   * @param $request
   * @param $companyId
   * @param $id
   * @throws Exception
   */
  private function checkIfAccountExist($request, $companyId, $id = null) {
    $checkIfAccountExist = Account::where('name', $request->name)
      ->where('parent_account_id', $request->parentAccountId ?? null)
      ->where('company_id', $companyId);

    if ($id) {
      $checkIfAccountExist->where('id', '!=', $id);
    }
    $checkIfAccountExist = $checkIfAccountExist->first();
    if ($checkIfAccountExist) {
      throw new Exception(config('response.account.duplicateError'));
    }
  }

  /**
   * Check account before update
   * @param $account
   * @return mixed
   * @throws Exception
   */
  public function checkAccountTypeValidity($account) {
    $accountTypes = config('accounting.type');
    $type = $accountTypes[$account->type]['name'];
    $newType = request('type');
    $restrictedTypes = config('accounting.restrictedType');
    $accountReceivableType = $restrictedTypes[5];
    $accountPayableType = $restrictedTypes[10];
    if ($type != $newType) {
      if ($account->subAccounts->isNotEmpty()) {
        throw new Exception(config('response.account.changeTypeError'));
      } else if ($type == $accountReceivableType || $newType == $accountReceivableType) {
        throw new Exception(config('response.account.changeArTypeError'));
      } else if ($type == $accountPayableType || $newType == $accountPayableType) {
        throw new Exception(config('response.account.changeApTypeError'));
      }
    }
  }

  /**
   * Pull Qbo accounts and sync
   * @return void
   * @throws Exception
   */
  public function pullQboAccounts() {
    $companyId = getAuthAdminCompanyId();
    $qbAuthService = new QuickbooksAuthService();
    $getQboAuth = $qbAuthService->getCurrentCompanyQuickbooksAuth($companyId);
    $dataService = $qbAuthService->getDataService($getQboAuth);

    return DB::transaction(function () use ($companyId, $getQboAuth, $qbAuthService, $dataService) {
      $qboAccounts = collect($qbAuthService->getQboAccounts($dataService));
      $accountingTypes = config('accounting.type');
      $qboAuthId = $getQboAuth->id;
      $savedAccounts = $this->getIntMappedAccounts($accountingTypes, $companyId);

      foreach ($qboAccounts as $qboAccount) {
        $savedAccount = $savedAccounts->where('qboId', $qboAccount['qboId'])->first();
        $searchTypeSubType = $this->searchTypeSubTypeInts(
          $accountingTypes,
          $qboAccount['type'],
          $qboAccount['subType']
        );
        if (empty($searchTypeSubType['type']) || empty($searchTypeSubType['subType'])) {
          throw new Exception('Account type(' . $qboAccount['type'] . ') or subType(' . $qboAccount['subType'] . ') is invalid.');
        }
        $type = $searchTypeSubType['type'];
        $subType = $searchTypeSubType['subType'];

        if ($savedAccount) {
          if (
            $savedAccount['name'] != $qboAccount['name'] ||
            $savedAccount['type'] != $qboAccount['type'] ||
            $savedAccount['subType'] != $qboAccount['subType'] ||
            $savedAccount['description'] != $qboAccount['description']
          ) {
            $updateAccount = [
              'name' => $qboAccount['name'],
              'description' => $qboAccount['description'],
              'type' => $type,
              'sub_type' => $subType,
            ];
            Account::where('id', $savedAccount['id'])->update($updateAccount);
          }
        } else {
          $searchAccount = $savedAccounts->where('name', $qboAccount['name'])
            ->where('type', $qboAccount['type'])
            ->where('subType', $qboAccount['subType'])
            ->first();
          if ($searchAccount) {
            $accountId = $searchAccount['id'];
          } else {
            $accountCreate = [
              'name' => $qboAccount['name'],
              'company_id' => $companyId,
              'description' => $qboAccount['description'],
              'type' => $type,
              'sub_type' => $subType,
            ];
            $account = Account::create($accountCreate);
            $accountId = $account->id;
          }
          $this->createAccountQboId($accountId, $qboAuthId, $qboAccount['qboId']);
        }
      }
      $this->updateAccountsParentId($companyId, $qboAccounts);
    });
  }

  /**
   * Update Account Parent Id based on QBO Account parentRef
   * @param $companyId
   * @param $qboAccounts
   * @return void
   */
  protected function updateAccountsParentId($companyId, $qboAccounts) {
    $getAccounts = Account::with('accountQboId:account_id,qbo_id')
      ->whereHas('accountQboId')
      ->select(['id', 'parent_account_id'])
      ->where('company_id', $companyId)
      ->get();

    foreach ($getAccounts as $account) {
      $getQboAccount = $qboAccounts->where(
        'qboId',
        $account->accountQboId->qbo_id
      )->first();

      $parentAccountId = null;
      if (!empty($getQboAccount['parentRef'])) {
        $parentAccount = $getAccounts->where(
          'accountQboId.qbo_id',
          $getQboAccount['parentRef']
        )->first();
        $parentAccountId = $parentAccount->id ?? null;
      }
      if ($account->parent_account_id != $parentAccountId) {
        $account->update(['parent_account_id' => $parentAccountId]);
      }
    }
  }

  /**
   * Account Mapping
   * @param array $accountingTypes
   * @param int $companyId
   * @return object
   */
  protected function getIntMappedAccounts($accountingTypes, $companyId) {
    $accounts = Account::with('accountQboId:id,account_id,qbo_id')
      ->where('company_id', $companyId)->get();
    return $accounts->map(function ($account) use ($accountingTypes) {
      return [
        'id' => $account->id,
        'name' => $account->name ?? null,
        'type' => $accountingTypes[$account->type]['name'] ?? null,
        'subType' => $accountingTypes[$account->type]['subTypes'][$account->sub_type] ?? null,
        'description' => $account->description ?? null,
        'parentAccountId' => $account->parent_account_id ?? null,
        'qboId' => $account->accountQboId->qbo_id ?? null,
      ];
    });
  }

  /**
   * Create Accounts QBO Id
   * @param int $accountId
   * @param int $qboAuthId
   * @param string $qboId
   * @return void
   */
  protected function createAccountQboId($accountId, $qboAuthId, $qboId) {
    AccountQboId::create([
      'account_id' => $accountId,
      'quickbooks_auth_id' => $qboAuthId,
      'qbo_id' => $qboId
    ]);
  }

  /**
   * Search Type & Subtype Id By Name
   * @param array $accountingTypes
   * @param string $searchName
   * @param string $searchSubType
   * @return array
   */
  protected function searchTypeSubTypeInts($accountingTypes, $searchName, $searchSubType) {
    foreach ($accountingTypes as $typeId => $typeData) {
      if ($typeData['name'] === $searchName) {
        return [
          'type' => $typeId,
          'subType' => array_search($searchSubType, $typeData['subTypes'])
        ];
      }
    }
  }

  /**
   * TODO : after customer feedback
   *
   * 1) Only show the pull QBO button to user.
   * 2) Hide the Push button.
   * 3) When users make some changes, we immediately sync it back to QBO, if users connect to QBO.
   *  However, I see another issue. We allow users to connect to multiple QBO account, the parent
   *  company can use one QBO, each tag can also use its own QBO. In this case, everything will be a mess.
   *
   * I don’t want to make a mess of users’ QBO accounts. So let us do this for now.
   * 1 Comment out the push button, leave what I just said as comments.
   * 2 No need to sync change back to QBO.
   * 3 Let our customer tell us what they want.
   * Push Qbo Account
   * @return void
   * @throws Exception
   */
  /*
  public function pushQboAccounts() {
    $companyId = getAuthAdminCompanyId();
    $qbAuthService = new QuickbooksAuthService();
    $getQboAuth = $qbAuthService->getCurrentCompanyQuickbooksAuth($companyId);
    $dataService = $qbAuthService->getDataService($getQboAuth);

    return DB::transaction(function () use ($companyId, $getQboAuth, $qbAuthService, $dataService) {
      // The collect helper method is used for searching within a given array.
      // $qboAccounts->where('qboId', $qboId)->first()
      $qboAccounts = collect($qbAuthService->getQboAccounts($dataService));
      $accountingTypes = config('accounting.type');
      $qboAuthId = $getQboAuth->id;
      $savedAccounts = $this->getIntMappedAccounts($accountingTypes, $companyId);

      foreach ($savedAccounts as $savedAccount) {
        $qboId = $savedAccount['qboId'];
        $qboAccount = $qboAccounts->where('qboId', $qboId)->first();
        if ($qboAccount) {
          if (
            $savedAccount['name'] != $qboAccount['name'] ||
            $savedAccount['type'] != $qboAccount['type'] ||
            $savedAccount['subType'] != $qboAccount['subType'] ||
            $savedAccount['description'] != $qboAccount['description']
          ) {
            $updateAccount = [
              'Name' => $savedAccount['name'],
              'AccountType' => $savedAccount['type'],
              'AccountSubType' => $savedAccount['subType'],
              'Description' => $savedAccount['description'],
            ];
            $qbAuthService->updateAccount($dataService, $updateAccount, $qboId);
          }
        } else {
          $searchQboAccount = $qboAccounts->where('name', $savedAccount['name'])
            ->where('type', $savedAccount['type'])
            ->where('subType', $savedAccount['subType'])
            ->first();
          if ($searchQboAccount) {
            $qboId = $searchQboAccount['qboId'];
          } else {
            $pendingCreate = [
              'Name' => $savedAccount['name'],
              'AccountType' => $savedAccount['type'],
              'AccountSubType' => $savedAccount['subType'],
              'Description' => $savedAccount['description'],
            ];
            $qboAccountCreated = $qbAuthService->createAccount($dataService, $pendingCreate);
            $qboId = $qboAccountCreated->Id;
          }
          $this->createAccountQboId($savedAccount['id'], $qboAuthId, $qboId);
        }
      }
      $this->updateAccountsParentId($companyId, $qboAccounts);
    });
  }
  */
}
