<?php

namespace App\Services;

use App\Models\AccountItem;
use App\Models\AccountItemQboId;
use App\Models\Account;
use App\Services\QuickbooksAuthService;
use Illuminate\Support\Facades\DB;
use Exception;

class AccountItemService {

  /**
   * Get all account items of current company.
   * @return array
   * @throws Exception
   */
  public function getCompanyItems() {
    $items = AccountItem::where('company_id', getAuthAdminCompanyId())->get();
    $itemType = config('constant.accounting.item.type');
    $ret['items'] = $items->map(function ($item) use ($itemType) {
      return [
        'id' => $item->id,
        'name' => $item->name ?? null,
        'type' => $item->type ? $itemType[$item->type] : null,
        'incomeDescription' => $item->income_description ?? null,
        'expenseDescription' => $item->expense_description ?? null,
        'incomeAccountId' => $item->income_account_id ?? null,
        'expenseAccountId' => $item->expense_account_id ?? null,
      ];
    });
    return $ret;
  }

  /**
   * Create a new account item in the database.
   *
   * @param \App\Http\Requests\Api\Account\CreateOrUpdateAccountItemRequest $request
   * @return \Illuminate\Database\Eloquent\Model
   * @throws Exception
   */
  public function createItem($request) {
    $companyId = $request->companyId;
    $this->checkIfItemExists($request->name, $companyId);
    $getValidatedData = $this->getValidatedData($request, $companyId);
    return AccountItem::create($getValidatedData);
  }

  /**
   * Validate if an item with the same name already exists.
   *
   * @param string $itemName
   * @param int $companyId
   * @param int|null $itemId
   * @throws Exception
   */
  private function checkIfItemExists($itemName, $companyId, $itemId = null) {
    $query = AccountItem::where('name', $itemName)
      ->where('company_id', $companyId);

    if ($itemId) {
      $query->where('id', '!=', $itemId);
    }
    $existingItem  = $query->first();
    if ($existingItem) {
      throw new Exception(config('response.item.duplicateError'));
    }
  }

  /**
   * Validate and get the request data for the item.
   * @param \App\Http\Requests\Api\Account\CreateOrUpdateAccountItemRequest $request
   * @param int $companyId
   * @return array
   */
  private function getValidatedData($request, $companyId): array {
    $item = [
      'name' => $request->name,
      'income_description' => $request->incomeDescription ?? null,
      'expense_description' => $request->expenseDescription ?? null,
      'income_account_id' => $request->incomeAccountId ?? null,
      'expense_account_id' => $request->expenseAccountId ?? null,
    ];

    if ($request->method() == 'POST') {
      $item['company_id'] = $companyId;
      $item['type'] = array_search($request->type, config('constant.accounting.item.type'));
    }
    return $item;
  }

  /**
   * Update an account item in the database.
   *
   * @param \App\Http\Requests\Api\Account\CreateOrUpdateAccountItemRequest $request
   * @param int $id
   * @return bool
   * @throws \Exception
   */
  public function editItem($request, $id) {
    $companyId = $request->companyId;
    $item = AccountItem::where('id', $id)
      ->where('company_id', $companyId)
      ->first();
    if (!$item) {
      throw new Exception('The item does not belong to your company or is an invalid id.');
    }
    $this->checkIfItemExists($request->name, $companyId, $id);
    return $item->update($this->getValidatedData($request, $companyId));
  }

  /**
   * Pull QBO items and synchronize with the local database.
   * @return void
   * @throws Exception
   */
  public function pullQboAccountItems() {
    $companyId = getAuthAdminCompanyId();
    $qbAuthService = new QuickbooksAuthService();
    $getQboAuth = $qbAuthService->getCurrentCompanyQuickbooksAuth($companyId);
    $dataService = $qbAuthService->getDataService($getQboAuth);
    $accountsFromDb = Account::with('accountQboId:account_id,qbo_id')
      ->where('company_id', $companyId)->select('id')->get();
    if ($accountsFromDb->isEmpty()) {
      throw new Exception('Please pull accounts from QBO first.');
    }

    return DB::transaction(function () use (
      $companyId,
      $accountsFromDb,
      $getQboAuth,
      $qbAuthService,
      $dataService
    ) {
      $qboItemsFromApi = $qbAuthService->getQboAccountItems($dataService);
      $dbItems = $this->retrieveDbAccountItems($companyId);
      foreach ($this->validateQboItemsAndMapping($qboItemsFromApi, $accountsFromDb) as $qboItem) {
        $savedItem = $dbItems->where('qboId', $qboItem['qboId'])->first();
        if ($savedItem) {
          $this->updateDbItemIfDifferent($savedItem, $qboItem);
        } else {
          $searchDbItem = $dbItems->where('name', $qboItem['name'])
            ->where('type', $qboItem['type'])
            ->first();
          $itemId = $searchDbItem ? $searchDbItem['id'] : $this->createAccountItem($qboItem, $companyId);
          $this->associateAccountItemWithQboId($itemId, $getQboAuth->id, $qboItem['qboId']);
        }
      }
    });
  }

  /**
   * Validate QBO items and map them to local accounts.
   *
   * @param array $qboItemsFromApi
   * @param \Illuminate\Support\Collection $accountsFromDb
   * @return array
   * @throws Exception
   */
  private function validateQboItemsAndMapping($qboItemsFromApi, $accountsFromDb) {
    $itemType = collect(config('constant.accounting.item.type'));
    foreach ($qboItemsFromApi as &$qboItem) {
      // Group & Category are same so if we get Category make it Group.
      $searchTerm = $qboItem['type'] === 'Category' ? 'Group' : $qboItem['type'];
      $searchTypeKey = $itemType->search(function ($type) use ($searchTerm) {
        return strcasecmp($type, $searchTerm) === 0;
      });
      if (!$searchTypeKey) {
        throw new Exception('Invalid QuickBooks Online Item type: ' . $searchTerm);
      }

      $qboItem['type'] = $searchTypeKey;
      if ($qboItem['incomeAccountId'] != null) {
        $incomeAccountFromDb  = $accountsFromDb
          ->where('accountQboId.qbo_id', $qboItem['incomeAccountId'])
          ->first();
        if (!$incomeAccountFromDb) {
          throw new Exception('Cannot find income account '
            . $qboItem['incomeAccountId'] . '. Please pull accounts from QBO first.');
        }
        // Change QBO id to our own DB id for the relationship.
        $qboItem['incomeAccountId'] = $incomeAccountFromDb->id;
      }
      if ($qboItem['expenseAccountId'] != null) {
        $expenseAccountFromDb = $accountsFromDb
          ->where('accountQboId.qbo_id', $qboItem['expenseAccountId'])
          ->first();
        if (!$expenseAccountFromDb) {
          throw new Exception('Cannot find expense account '
            . $qboItem['expenseAccountId'] . '. Please pull accounts from QBO first.');
        }
        // Change QBO id to our own DB id for the relationship.
        $qboItem['expenseAccountId'] = $expenseAccountFromDb->id;
      }
    }
    return $qboItemsFromApi;
  }

  /**
   * Get locally mapped items with their QBO IDs.
   *
   * @param int $companyId
   * @return \Illuminate\Database\Eloquent\Builder[]|\Illuminate\Database\Eloquent\Collection|\Illuminate\Support\Collection
   */
  private function retrieveDbAccountItems($companyId) {
    $items = AccountItem::with('accountItemQboId:id,account_item_id,qbo_id')
      ->where('company_id', $companyId)->get();
    return $items->map(function ($item) {
      return [
        'id' => $item->id,
        'name' => $item->name,
        'type' => $item->type,
        'incomeDescription' => $item->income_description,
        'expenseDescription' => $item->expense_description,
        'incomeAccountId' => $item->income_account_id,
        'expenseAccountId' => $item->expense_account_id,
        'qboId' => $item->accountItemQboId->qbo_id ?? null,
      ];
    });
  }

  /**
   * Create a new local account item based on QuickBooks item data.
   * @param array $qboItem
   * @param int $companyId
   * @return int The ID of the newly created local account item.
   */
  private function createAccountItem($qboItem, $companyId) {
    $itemCreate = [
      'name' => $qboItem['name'],
      'company_id' => $companyId,
      'type' => $qboItem['type'],
      'income_description' => $qboItem['incomeDescription'],
      'expense_description' => $qboItem['expenseDescription'],
      'income_account_id' => $qboItem['incomeAccountId'],
      'expense_account_id' => $qboItem['expenseAccountId'],
    ];

    return AccountItem::create($itemCreate)->id;
  }

  /**
   * Update local account item based on QuickBooks item data.
   * @param array $savedItem
   * @param array $qboItem
   * @return void
   */
  private function updateDbItemIfDifferent($savedItem, $qboItem) {
    if (
      $savedItem['name'] != $qboItem['name'] ||
      $savedItem['type'] != $qboItem['type'] ||
      $savedItem['incomeDescription'] != $qboItem['incomeDescription'] ||
      $savedItem['expenseDescription'] != $qboItem['expenseDescription'] ||
      $savedItem['incomeAccountId'] != $qboItem['incomeAccountId'] ||
      $savedItem['expenseAccountId'] != $qboItem['expenseAccountId']
    ) {
      $updateItem = [
        'name' => $qboItem['name'],
        'type' => $qboItem['type'],
        'income_description' => $qboItem['incomeDescription'],
        'expense_description' => $qboItem['expenseDescription'],
        'income_account_id' => $qboItem['incomeAccountId'],
        'expense_account_id' => $qboItem['expenseAccountId'],
      ];
      AccountItem::where('id', $savedItem['id'])->update($updateItem);
    }
  }

  /**
   * Associate a local account item with its QBO ID.
   * @param int $itemId
   * @param int $qboAuthId
   * @param string $qboId
   * @return void
   */
  private function associateAccountItemWithQboId($itemId, $qboAuthId, $qboId) {
    AccountItemQboId::create([
      'account_item_id' => $itemId,
      'quickbooks_auth_id' => $qboAuthId,
      'qbo_id' => $qboId,
    ]);
  }
}
