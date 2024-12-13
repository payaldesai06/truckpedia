<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\Api\Spreadsheet\AccessDetailsSpreadsheetRequest;
use App\Http\Requests\Api\Spreadsheet\AddColumnSpreadsheetRequest;
use App\Http\Requests\Api\Spreadsheet\AddMultipleColumnInSheetRequest;
use App\Http\Requests\Api\Spreadsheet\AddNewSheetRequest;
use App\Http\Requests\Api\Spreadsheet\ArrangeColumnOrderRequest;
use App\Http\Requests\Api\Spreadsheet\DeleteColumnRequest;
use App\Http\Requests\Api\Spreadsheet\CreateSpreadsheetRequest;
use App\Http\Requests\Api\Spreadsheet\GetCreatedCustomColumnsRequest;
use App\Http\Requests\Api\Spreadsheet\GetSpreadsheetRequest;
use App\Http\Requests\Api\Spreadsheet\ModifySheetFilterRequest;
use App\Http\Requests\Api\Spreadsheet\ModifySpreadsheetUserAccessRequest;
use App\Http\Requests\Api\Spreadsheet\DeleteSheetRequest;
use App\Http\Requests\Api\Spreadsheet\DeleteSpreadsheetRequest;
use App\Http\Requests\Api\Spreadsheet\UpdateCellValueSpreadsheetRequest;
use App\Http\Requests\Api\Spreadsheet\UpdateColorSchemaRequest;
use App\Http\Requests\Api\Spreadsheet\UpdateColumnWidth;
use App\Http\Requests\Api\Spreadsheet\UpdateRowHeightRequest;
use App\Http\Requests\Api\Spreadsheet\UpdateSheetNameRequest;
use App\Http\Requests\Api\Spreadsheet\UpdateSortSchemaRequest;
use App\Http\Requests\Api\Spreadsheet\UpdateSpreadsheetMultipleRowFormat;
use App\Http\Requests\Api\Spreadsheet\UpdateSpreadsheetNameRequest;
use App\Services\SpreadsheetService;
use Exception;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Log;

class SpreadsheetController extends Controller {
  protected $spreadsheetService;

  public function __construct(SpreadsheetService $spreadsheetService) {
    $this->spreadsheetService = $spreadsheetService;
  }

  /**
   * Get Current user spreadsheet list.
   * @return JsonResponse|mixed
   */
  public function getSpreadsheetList() {
    try {
      return $this->respondWithData($this->spreadsheetService->getSpreadsheetList());
    } catch (Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }

  /**
   * Get specific spreadsheet by spreadsheet id.
   * @param GetSpreadsheetRequest $request
   * @return JsonResponse|mixed
   */
  public function getSpreadsheet(GetSpreadsheetRequest $request) {
    try {
      return $this->respondWithData($this->spreadsheetService->getSpreadsheet($request));
    } catch (Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }

  /**
   * Create new spreadsheet.
   * @param CreateSpreadsheetRequest $request
   * @return JsonResponse|mixed
   */
  public function createSpreadsheet(CreateSpreadsheetRequest $request) {
    try {
      $spreadsheetId = $this->spreadsheetService->createSpreadsheet($request);
      if (empty($spreadsheetId)) {
        return $this->respondInternalError(config('response.error'), [], []);
      }
      return $this->respondWithData(['id' => $spreadsheetId]);
    } catch (Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }

  /**
   * Modify spreadsheet.
   * @param UpdateSpreadsheetNameRequest $request
   * @return mixed|void
   */
  public function modifySpreadsheetName(UpdateSpreadsheetNameRequest $request) {
    try {
      $isUpdated = $this->spreadsheetService->modifySpreadsheetName($request);
      if (!$isUpdated) {
        return $this->respondInternalError(config('response.error'), [], []);
      }
      return $this->respondOk();
    } catch (Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }

  /**
   * Add New Column on spreadsheet.
   * @return mixed|void
   */
  public function addColumnOnSpreadsheet(AddColumnSpreadsheetRequest $request) {
    try {
      $isCreated = $this->spreadsheetService->addColumnOnSpreadsheet($request);
      if (!$isCreated) {
        return $this->respondInternalError(config('response.error'), [], []);
      }
      return $this->respondOk();
    } catch (Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }

  /**
   * Update Cell Value of spreadsheet.
   * @param UpdateCellValueSpreadsheetRequest $request
   * @return mixed|void
   */
  public function updateCellValue(UpdateCellValueSpreadsheetRequest $request) {
    try {
      $isUpdated = $this->spreadsheetService->updateCellValue($request);
      if (!$isUpdated) {
        return $this->respondInternalError(config('response.error'), [], []);
      }
      return $this->respondOk();
    } catch (Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }

  /**
   * Update spreadsheet sheet name.
   * @param UpdateSheetNameRequest $request
   * @return JsonResponse|mixed
   */
  public function modifySheetName(UpdateSheetNameRequest $request) {
    try {
      $isUpdated = $this->spreadsheetService->modifySheetName($request);
      if (!$isUpdated) {
        return $this->respondInternalError(config('response.error'), [], []);
      }
      return $this->respondOk();
    } catch (Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }

  /**
   * Add New Sheet on specific spreadsheet.
   * @param AddNewSheetRequest $request
   * @return JsonResponse|mixed
   */
  public function addSheet(AddNewSheetRequest $request) {
    try {
      $isCreated = $this->spreadsheetService->addSheet($request);
      if (!$isCreated) {
        return $this->respondInternalError(config('response.error'), [], []);
      }
      return $this->respondOk();
    } catch (Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }

  /**
   * Modify Sheets filters.
   * @param ModifySheetFilterRequest $request
   * @return JsonResponse|mixed
   */
  public function modifySheetFilter(ModifySheetFilterRequest $request) {
    try {
      $isUpdated = $this->spreadsheetService->modifySheetFilter($request);
      if (!$isUpdated) {
        return $this->respondInternalError(config('response.error'), [], []);
      }
      return $this->respondOk();
    } catch (Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }

  /**
   * Get Users list with access level.
   * @param AccessDetailsSpreadsheetRequest $request
   * @return JsonResponse|mixed
   */
  public function accessDetails(AccessDetailsSpreadsheetRequest $request) {
    try {
      return $this->respondWithData($this->spreadsheetService->accessDetails($request));
    } catch (Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }

  public function updateAccessLevel(ModifySpreadsheetUserAccessRequest $request) {
    try {
      $isUpdated = $this->spreadsheetService->updateAccessLevel($request);
      if (!$isUpdated) {
        return $this->respondInternalError(config('response.error'), [], []);
      }
      return $this->respondOk();
    } catch (Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }

  /**
   * Get Created Custom columns
   * @return JsonResponse|mixed
   */
  public function getCreatedCustomColumns(GetCreatedCustomColumnsRequest $request) {
    try {
      $spreadsheetColumns = $this->spreadsheetService->getCreatedCustomColumns($request);
      return $this->respondWithData($spreadsheetColumns);
    } catch (Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }

  /**
   * Add Multiple columns.
   * @param AddMultipleColumnInSheetRequest $request
   * @return JsonResponse|mixed
   */
  public function addMultipleColumns(AddMultipleColumnInSheetRequest $request) {
    try {
      $isCreated = $this->spreadsheetService->addMultipleColumns($request);
      if (!$isCreated) {
        return $this->respondInternalError(config('response.error'), [], []);
      }
      return $this->respondOk();
    } catch (Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }

  /**
   * Delete Specific spreadsheet using spreadsheet_id.
   * @param DeleteSpreadsheetRequest $request
   * @return JsonResponse|mixed
   */
  public function deleteSpreadsheet(DeleteSpreadsheetRequest $request) {
    try {
      $isDeleted = $this->spreadsheetService->deleteSpreadsheet($request);
      if (!$isDeleted) {
        return $this->respondInternalError(config('response.error'), [], []);
      }
      return $this->respondOk();
    } catch (Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }

  /**
   * Delete Sheet using sheet_id.
   * @param DeleteSheetRequest $request
   * @return JsonResponse|mixed
   */
  public function deleteSheet(DeleteSheetRequest $request) {
    try {
      $isDeleted = $this->spreadsheetService->deleteSheet($request);
      if (!$isDeleted) {
        return $this->respondInternalError(config('response.error'), [], []);
      }
      return $this->respondOk();
    } catch (Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }

  /**
   * Delete a column and rearrange the order.
   * @param DeleteColumnRequest $request
   * @return JsonResponse|mixed
   */
  public function deleteColumn(DeleteColumnRequest $request) {
    try {
      $this->spreadsheetService->deleteColumn($request);
      return $this->respondOk();
    } catch (Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }

  /**
   * Rearrange Column order.
   * @param ArrangeColumnOrderRequest $request
   * @return JsonResponse|mixed
   */
  public function changeColumnOrder(ArrangeColumnOrderRequest $request) {
    try {
      $this->spreadsheetService->changeColumnOrder($request);
      return $this->respondOk();
    } catch (Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }

  /**
   * Update Row Height of a sheet.
   * @param UpdateRowHeightRequest $request
   * @return mixed
   */
  public function updateRowHeight(UpdateRowHeightRequest $request) {
    try {
      $isUpdated = $this->spreadsheetService->updateRowHeight($request);
      if (!$isUpdated) {
        return $this->respondInternalError(config('response.error'), [], []);
      }
      return $this->respondOk();
    } catch (Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }

  public function updateColumnWidth(UpdateColumnWidth $request) {
    try {
      $isUpdated = $this->spreadsheetService->updateColumnWidth($request);
      /*if (!$isUpdated) {
        return $this->respondInternalError(config('response.error'), [], []);
      }*/
      return $this->respondOk();
    } catch (Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }

  public function updateSortSchema(UpdateSortSchemaRequest $request) {
    try {
      $isUpdated = $this->spreadsheetService->updateSortSchema($request);
      return $this->respondOk();
    } catch (Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }

  public function updateColorSchema(UpdateColorSchemaRequest $request) {
    try {
      $isUpdated = $this->spreadsheetService->updateColorSchema($request);
      return $this->respondOk();
    } catch (Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }

  /**
   * Update Sheet Row Format.
   * @param UpdateSpreadsheetMultipleRowFormat $request
   * @return JsonResponse|void
   */
  public function updateSheetMultipleRowFormat(UpdateSpreadsheetMultipleRowFormat $request) {
    try {
      $this->spreadsheetService->updateSheetMultipleRowFormat($request);
      return $this->respondOk();
    } catch (Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }
}
