<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\Api\Truck\CreateTruckV2Request;
use App\Http\Requests\Api\Truck\GetTruckLogList;
use App\Http\Requests\Api\Truck\UpdateTruckV2Request;
use App\Http\Requests\Api\Truck\CreateTruckRequest;
use App\Http\Requests\Api\Truck\UpdateTruckRequest;
use App\Http\Requests\Api\Truck\CreateTruckV2FileRequest;
use App\Http\Requests\Api\Truck\GetFileUploadUrlRequest;
use App\Http\Requests\Api\Truck\GetListTruckV2Request;
use App\Http\Requests\Api\Truck\CreateFolderRequest;
use App\Http\Requests\Api\Truck\UpdateFolderRequest;
use App\Http\Resources\Truck\GetTruckLogListCollection;
use App\Http\Resources\Truck\TruckCollection;
use App\Http\Resources\Truck\TruckResource;
use App\Http\Resources\Truck\FolderResource;
use App\Http\Resources\Truck\TruckV2Resource;
use App\Http\Resources\Truck\GetListTruckV2Collection;
use App\Http\Requests\Api\Truck\DeleteTruckFileRequest;
use App\Services\TruckService;
use Illuminate\Support\Facades\Log;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Exception;
use App\Http\Requests\Api\Truck\GetTruckMaintenanceIssueRequest;
use App\Http\Resources\MaintenanceV2Issue\GetVehicleMaintenanceIssueCollection;
use App\Http\Requests\Api\Truck\ChangeTruckV2FilesFolderRequest;

class TrucksController extends Controller {
  protected $truckService;

  public function __construct(TruckService $truckService) {
    $this->truckService = $truckService;
  }

  public function index() {
    $trucks = $this->truckService->getAllTruck();
    return $this->respondWithData(new TruckCollection($trucks));
  }

  public function datatable() {
    $trucks = $this->truckService->truckDatatable();
    return $this->respondWithData(new TruckCollection($trucks));
  }

  public function store(CreateTruckRequest $request) {
    $truck = $this->truckService->createTruck();
    return $this->respondWithMessageAndPayload(new TruckResource($truck), config('response.truck.create'));
  }

  public function update(UpdateTruckRequest $request) {
    $truck = $this->truckService->updateTruck();
    return $this->respondWithMessageAndPayload(new TruckResource($truck), config('response.truck.update'));
  }

  public function destroy() {
    $result = $this->truckService->delete();
    if ($result) {
      return $this->respondDeleted(config('response.truck.delete'));
    } else {
      return $this->respondBadRequest(config('response.truck.error'));
    }
  }

  public function search() {
    $trucks = $this->truckService->search();
    return $this->respondWithData(new TruckCollection($trucks));
  }


  /**
   * Get list Truck V2.
   * @param GetListTruckV2Request $request
   * @return JsonResponse|mixed
   * @throws Exception
   */
  public function getListTruckV2(GetListTruckV2Request $request) {
    try {
      $trucks = $this->truckService->getListTruckV2($request);
      if (request('filter.toDownload') == 1) {
        return $this->respondWithMessageAndPayload(
          $this->truckService->truckListExport($trucks)
        );
      }
      return $this->respondWithData(new GetListTruckV2Collection($trucks));
    } catch (Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }


  /**
   * Create Truck V2.
   * @param CreateTruckV2Request $request
   * @return JsonResponse|mixed
   * @throws Exception
   */
  public function createTruckV2(CreateTruckV2Request $request) {
    try {
      $isCreated = $this->truckService->createTruckV2($request);
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
   * Get Truck V2 by Truck id.
   * @return JsonResponse|mixed
   * @throws Exception
   */
  public function getTruckV2ById() {
    try {
      return $this->respondWithData(new TruckV2Resource($this->truckService->getTruckV2ById()));
    } catch (Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }

  /**
   * Get truck V2 files.
   * @return JsonResponse|mixed
   * @throws Exception
   */
  public function getTruckV2Files(): JsonResponse {
    try {
      return $this->respondWithData($this->truckService->getTruckV2Files());
    } catch (Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }

  /**
   * Create folder.
   * @param CreateFolderRequest $request
   * @return JsonResponse|mixed
   */
  public function createTruckFolder(CreateFolderRequest $request) {
    try {
      $isCreated = $this->truckService->createTruckFolder($request);
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
   * Delete Truck V2 File.
   * @param DeleteTruckFileRequest $request
   * @return mixed
   * @throws Exception
   */
  public function deleteTruckV2Files(DeleteTruckFileRequest $request) {
    try {
      $isDeleted = $this->truckService->deleteTruckV2Files($request);
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
   * Update Truck V2.
   * @param UpdateTruckV2Request $request
   * @return JsonResponse|mixed
   * @throws Exception
   */
  public function updateTruckV2(UpdateTruckV2Request $request) {
    try {
      $isUpdated = $this->truckService->updateTruckV2($request);
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
   * Get Truck Folders by Auth Company Id
   * @return FolderResource|mixed
   * @throws Exception
   */
  public function getTruckv2Folders() {
    try {
      return $this->respondWithData(FolderResource::collection($this->truckService->getTruckv2Folders()));
    } catch (Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }

  /**
   * Truck File upload url.
   * @param GetFileUploadUrlRequest $request
   * @return JsonResponse|mixed
   * @throws Exception
   */
  public function getUploadUrls(GetFileUploadUrlRequest $request) {
    try {
      return $this->respondWithData($this->truckService->getUploadUrls($request));
    } catch (Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }

  /**
   * Create truck v2 file.
   * @param CreateTruckV2FileRequest $request
   * @return JsonResponse|mixed
   * @throws Exception
   */
  public function createTruckV2File(CreateTruckV2FileRequest $request) {
    try {
      $isCreated = $this->truckService->createTruckV2File($request);
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
   * Update Truck Folder.
   * @param UpdateFolderRequest $request
   * @return JsonResponse|mixed
   */
  public function updateTruckFolder(UpdateFolderRequest $request) {
    try {
      $isUpdated = $this->truckService->updateTruckFolder($request);
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
   * Get Truck Maintenance Issue List.
   * @param GetTruckMaintenanceIssueRequest $request
   * @return mixed
   * @throws Exception
   */
  public function getMaintenanceIssueList(GetTruckMaintenanceIssueRequest $request) {
    try {
      return $this->respondWithData(new GetVehicleMaintenanceIssueCollection($this->truckService->getMaintenanceIssueList($request)));
    } catch (Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }

  /**
   * Get Truck Log List.
   * @return JsonResponse|mixed
   */
  public function getTruckLogList(GetTruckLogList $request) {
    try {
      return $this->respondWithData(new GetTruckLogListCollection($this->truckService->getTruckLogList($request)));
    } catch (Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }

  /**
   * Change truck files folder.
   * @param ChangeTruckV2FilesFolderRequest $request
   * @return JsonResponse|mixed
   */
  public function changeTruckV2FilesFolder(ChangeTruckV2FilesFolderRequest $request) {
    try {
      $isUpdated = $this->truckService->changeTruckV2FilesFolder($request);
      if (!$isUpdated) {
        return $this->respondInternalError(config('response.error'), [], []);
      }
      return $this->respondOk();
    } catch (Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }
}
