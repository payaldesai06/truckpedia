<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\Api\Driver\CreateDriverFileV2Request;
use App\Http\Requests\Api\Driver\CreateDriverRequest;
use App\Http\Requests\Api\Driver\CreateDriverV2Request;
use App\Http\Requests\Api\Driver\DeleteDriverFileV2Request;
use App\Http\Requests\Api\Driver\DriverChangeStatusRequset;
use App\Http\Requests\Api\Driver\GetDriverFileUploadUrlRequest;
use App\Http\Requests\Api\Driver\GetDriverListV2Request;
use App\Http\Requests\Api\Driver\UpdateDriverLocationRequest;
use App\Http\Requests\Api\Driver\UpdateDriverRequest;
use App\Http\Requests\Api\Driver\DriverCurrentTruckAndTrailerRequest;
use App\Http\Requests\Api\Driver\CreateDriverFolderV2Request;
use App\Http\Requests\Api\Driver\UpdateDriverFolderV2Request;
use App\Http\Resources\Driver\DriverCollectionV2;
use App\Http\Requests\Api\Driver\UpdateDriverV2Request;
use App\Http\Resources\Driver\DriverFolderCollectionV2;
use App\Http\Resources\Driver\DriverCollection;
use App\Http\Resources\Driver\DriverCurrentTruckAndTrailerResource;
use App\Http\Resources\Driver\DriverResource;
use App\Http\Resources\Driver\DriverResourceV2;
use Exception;
use App\Services\DriverService;
use Illuminate\Support\Facades\Log;
use App\Http\Requests\Api\Driver\UpdateDriverAccountingInfoRequest;
use App\Http\Resources\Driver\DriverAccountingInfoV2;
use App\Http\Resources\Driver\DriverWithAssignedVehiclesCollection;
use App\Http\Requests\Api\Driver\ChangeDriverV2FilesFolderRequest;

class DriverController extends Controller {
  protected $driverService;

  public function __construct(DriverService $driverService) {
    $this->driverService = $driverService;
  }

  public function index() {
    $drivers = $this->driverService->getAllDriver();
    return $this->respondWithData(new DriverCollection($drivers));
  }

  public function datatable() {
    $drivers = $this->driverService->datatable();
    return $this->respondWithData(new DriverCollection($drivers));
  }

  public function store(CreateDriverRequest $request) {
    $driver = $this->driverService->create();
    return $this->respondWithMessageAndPayload(new DriverResource($driver), config('response.driver.create'));
  }

  public function update(UpdateDriverRequest $request) {
    $driver = $this->driverService->update();
    return $this->respondWithMessageAndPayload(new DriverResource($driver), config('response.driver.update'));
  }

  public function changeStatus(DriverChangeStatusRequset $request) {
    $this->driverService->changeStatus();
    return $this->respondWithMessage(config('response.driver.status'));
  }

  public function locationUpdate(UpdateDriverLocationRequest $request) {
    $driver = $this->driverService->locationUpdate();
    return $this->respondWithMessageAndPayload(new DriverResource($driver), config('response.driver.location'));
  }

  public function currentTruckTrailer() {
    $currentTruckTrailer = $this->driverService->getCurrentTruckTrailer();
    return $this->respondWithData(new DriverCurrentTruckAndTrailerResource($currentTruckTrailer));
  }

  public function updateCurrentTruckTrailer(DriverCurrentTruckAndTrailerRequest $request) {
    $this->driverService->updateCurrentTruckTrailer();
    return $this->respondOk();
  }

  public function getDriverById($id) {
    try {
      $driver = $this->driverService->getDriverV2($id);
      if (!$driver) {
        return $this->respondInternalError(config('response.error'), [], []);
      }
      return $this->respondWithData(new DriverResourceV2($driver));
    } catch (Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }

  public function getDriverListV2(GetDriverListV2Request $request) {
    try {
      $drivers = $this->driverService->getDriverListV2ForCompany($request);
      if (!$drivers) {
        return $this->respondInternalError(config('response.error'), [], []);
      }
      if (request('filter.toDownload') ?? null) {
        return $this->respondWithMessageAndPayload(
          $this->driverService->driverListExport($drivers)
        );
      }
      return $this->respondWithData(new DriverCollectionV2($drivers));
    } catch (Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }

  public function createDriverFoldersV2(CreateDriverFolderV2Request $request) {
    try {
      $folder = $this->driverService->createDriverV2Folder($request);
      if (!$folder) {
        return $this->respondInternalError(config('response.error'), [], []);
      }
      return $this->respondOk();
    } catch (Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }

  public function updateDriverFoldersV2(UpdateDriverFolderV2Request $request) {
    try {
      $isUpdated = $this->driverService->updateDriverV2Folder($request);
      if (!$isUpdated) {
        return $this->respondInternalError(config('response.error'), [], []);
      }
      return $this->respondOk();
    } catch (Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }

  public function getDriverFoldersV2() {
    try {
      $folders = $this->driverService->getDriverV2Folders();
      return $this->respondWithMessageAndPayload($folders ?? []);
    } catch (Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }

  public function createDriverV2(CreateDriverV2Request $request) {
    try {
      $isCreated = $this->driverService->createDriverV2($request);
      if (!$isCreated) {
        return $this->respondInternalError(config('response.error'), [], []);
      }
      return $this->respondOk();
    } catch (Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }

  public function updateDriverV2(UpdateDriverV2Request $request) {
    try {
      $isUpdated = $this->driverService->updateDriverV2($request);
      if (!$isUpdated) {
        return $this->respondInternalError(config('response.error'), [], []);
      }
      return $this->respondWithMessage();
    } catch (\Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }

  public function createDriverFilesV2(CreateDriverFileV2Request $request) {
    try {
      $folder = $this->driverService->createDriverFileV2($request);
      if (!$folder) {
        return $this->respondInternalError(config('response.error'), [], []);
      }
      return $this->respondOk();
    } catch (Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }

  public function getDriverFilesV2($userId) {
    try {
      $files = $this->driverService->getDriverFilesV2($userId);
      return $this->respondWithData($files ?? []);
    } catch (Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }

  public function deleteDriverFilesV2(DeleteDriverFileV2Request $request) {
    try {
      $isDeleted = $this->driverService->deleteDriverFilesV2($request);
      if (!$isDeleted) {
        return $this->respondInternalError(config('response.error'), [], []);
      }
      return $this->respondOk();
    } catch (Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }

  public function getDriverFileUploadUrlV2(GetDriverFileUploadUrlRequest $request) {
    try {
      $urls = $this->driverService->generateFileUploadUrlV2($request);
      if (!$urls) {
        return $this->respondInternalError(config('response.error'), [], []);
      }
      return $this->respondWithData($urls);
    } catch (Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }

  /**
   * Update Driver Accounting Info.
   * @param UpdateDriverAccountingInfoRequest $request
   * @return mixed
   * @throws Exception
   */
  public function updateDriverAccountingInfoV2(UpdateDriverAccountingInfoRequest $request) {
    try {
      $isUpdated = $this->driverService->updateDriverAccountingInfoV2($request);
      if (!$isUpdated) {
        return $this->respondInternalError(config('response.error'), [], []);
      }
      return $this->respondWithMessage();
    } catch (\Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }

  /**
   * Get Driver Accounting Info.
   * @return mixed
   * @throws Exception
   */
  public function getDriverAccountingInfoV2() {
    try {
      return $this->respondWithData(new DriverAccountingInfoV2($this->driverService->getDriverAccountingInfoV2()));
    } catch (Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }

  /**
   * Get All Driver With Assigned Vehicles
   * @return DriverWithAssignedVehiclesCollection|mixed
   * @throws Exception
   */
  public function getAllDriverWithAssignedVehicles() {
    try {
      return $this->respondWithData(new DriverWithAssignedVehiclesCollection($this->driverService->getAllDriverWithAssignedVehicles()));
    } catch (Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }

  /**
   * Get All Driver/Truck/Trailer For LoadDriver
   * @return mixed
   * @throws Exception
   */
  public function getAllDriverTruckTrailerForLoadDriver() {
    try {
      return $this->respondWithData($this->driverService->getAllDriverTruckTrailerForLoadDriver());
    } catch (Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }

  /**
   * Change driver files folder.
   * @param ChangeDriverV2FilesFolderRequest $request
   * @return JsonResponse|mixed
   */
  public function changeDriverV2FilesFolder(ChangeDriverV2FilesFolderRequest $request) {
    try {
      $isUpdated = $this->driverService->changeDriverV2FilesFolder($request);
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
