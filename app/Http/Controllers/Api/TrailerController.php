<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\Api\Trailer\CreateTrailerRequest;
use App\Http\Requests\Api\Trailer\UpdateTrailerRequest;
use App\Http\Resources\Trailer\TrailerCollection;
use App\Http\Resources\Trailer\TrailerResource;
use App\Services\TrailerService;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use App\Http\Requests\Api\TrailerV2\CreateTrailerV2Request;
use App\Http\Resources\TrailerV2\TrailerV2Resource;
use App\Http\Requests\Api\TrailerV2\UpdateTrailerV2Request;
use Illuminate\Http\JsonResponse;
use App\Http\Requests\Api\TrailerV2\CreateTrailerV2FolderRequest;
use App\Http\Requests\Api\TrailerV2\UpdateTrailerV2FolderRequest;
use App\Http\Requests\Api\TrailerV2\CreateTrailerV2FileRequest;
use App\Http\Requests\Api\TrailerV2\DeleteTrailerV2FileRequest;
use App\Http\Requests\Api\TrailerV2\GetListTrailerV2Request;
use App\Http\Resources\TrailerV2\GetListTrailerV2Collection;
use App\Http\Requests\Api\TrailerV2\GetTrailerMaintenanceIssueRequest;
use App\Http\Resources\MaintenanceV2Issue\GetVehicleMaintenanceIssueCollection;
use App\Http\Requests\Api\TrailerV2\GetTrailerV2FileUrlRequest;
use App\Http\Requests\Api\TrailerV2\GetLogListTrailerV2Request;
use App\Http\Resources\TrailerV2\GetTrailerLogListCollection;
use App\Http\Requests\Api\TrailerV2\ChangeTrailerV2FilesFolderRequest;

class TrailerController extends Controller {
  protected $trailerService;

  public function __construct(TrailerService $trailerService) {
    $this->trailerService = $trailerService;
  }

  public function index() {
    $trailers = $this->trailerService->getAllTrailer();
    return $this->respondWithData(new TrailerCollection($trailers));
  }

  public function datatable() {
    $trailers = $this->trailerService->trailerDatatable();
    return $this->respondWithData(new TrailerCollection($trailers));
  }

  public function store(CreateTrailerRequest $request) {
    try {
      $trailer = $this->trailerService->createTrailer();
      return $this->respondWithMessageAndPayload(new TrailerResource($trailer), config('response.trailer.create'));
    } catch (Exception $e) {
      Log::error($e);
      return $this->respondInternalError($e->getMessage(), [], $e);
    }
  }

  public function update(UpdateTrailerRequest $request) {
    $trailer = $this->trailerService->updateTrailer();
    return $this->respondWithMessageAndPayload(new TrailerResource($trailer), config('response.trailer.update'));
  }

  public function destroy() {
    $result = $this->trailerService->delete();
    if ($result) {
      return $this->respondDeleted(config('response.trailer.delete'));
    } else {
      return $this->respondBadRequest(config('response.trailer.error'));
    }
  }

  public function search() {
    $trailer = $this->trailerService->search();
    return $this->respondWithData(new TrailerCollection($trailer));
  }

  /**
   * Get List trailer V2.
   * @param GetListTrailerV2Request $request
   * @return JsonResponse|mixed
   */
  public function getListTrailerV2(GetListTrailerV2Request $request) {
    try {
      $trailers = $this->trailerService->getListTrailerV2($request);
      if (request('filter.toDownload') == 1) {
        return $this->respondWithMessageAndPayload(
          $this->trailerService->trailerListExport($trailers)
        );
      }
      return $this->respondWithData(new GetListTrailerV2Collection($trailers));
    } catch (Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }

  /**
   * Create trailer.
   * @param CreateTrailerV2Request $request
   * @return JsonResponse|mixed
   */
  public function createTrailerV2(CreateTrailerV2Request $request) {
    try {
      $isCreated = $this->trailerService->createTrailerV2($request);
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
   * Update trailer.
   * @param UpdateTrailerV2Request $request
   * @return JsonResponse|mixed
   */
  public function updateTrailerV2(UpdateTrailerV2Request $request) {
    try {
      $isUpdated = $this->trailerService->updateTrailerV2($request);
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
   * Get trailer details.
   * @return JsonResponse|mixed
   */
  public function getTrailerV2(): JsonResponse {
    try {
      return $this->respondWithMessageAndPayload(new TrailerV2Resource($this->trailerService->getTrailerV2()));
    } catch (Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }

  /**
   * Create folder.
   * @param CreateTrailerV2FolderRequest $request
   * @return JsonResponse|mixed
   */
  public function createTrailerV2Folder(CreateTrailerV2FolderRequest $request) {
    try {
      $isCreated = $this->trailerService->createTrailerV2Folder($request);
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
   * Get Trailer Folder by Auth Company Id.
   * @return JsonResponse|mixed
   */
  public function getTrailerV2Folders(): JsonResponse {
    try {
      return $this->respondWithMessageAndPayload($this->trailerService->getTrailerV2Folders());
    } catch (Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }

  /**
   * Update folder.
   * @param UpdateTrailerV2FolderRequest $request
   * @return JsonResponse|mixed
   */
  public function updateTrailerV2Folder(UpdateTrailerV2FolderRequest $request) {
    try {
      $isUpdated = $this->trailerService->updateTrailerV2Folder($request);
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
   * Get trailer files.
   * @return JsonResponse|mixed
   */
  public function getTrailerV2Files(): JsonResponse {
    try {
      return $this->respondWithMessageAndPayload($this->trailerService->getTrailerV2Files());
    } catch (Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }

  /**
   * Create trailer file.
   * @param CreateTrailerV2FileRequest $request
   * @return JsonResponse|mixed
   */
  public function createTrailerV2File(CreateTrailerV2FileRequest $request) {
    try {
      $isCreated = $this->trailerService->createTrailerV2File($request);
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
   * Delete trailer.
   * @param DeleteTrailerV2FileRequest $request
   * @return JsonResponse|mixed
   */
  public function deleteTrailerV2File(DeleteTrailerV2FileRequest $request) {
    try {
      $isDeleted = $this->trailerService->deleteTrailerV2File($request);
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
   * Get Trailer Maintenance Issue List.
   * @param GetTrailerMaintenanceIssueRequest $request
   * @return mixed
   * @throws Exception
   */
  public function getMaintenanceIssueList(GetTrailerMaintenanceIssueRequest $request) {
    try {
      return $this->respondWithData(new GetVehicleMaintenanceIssueCollection($this->trailerService->getMaintenanceIssueList($request)));
    } catch (Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }

  /**
   * Get trailer file urls.
   * @param GetTrailerV2FileUrlRequest $request
   * @return JsonResponse|mixed
   */
  public function getUploadUrls(GetTrailerV2FileUrlRequest $request): JsonResponse {
    try {
      return $this->respondWithMessageAndPayload($this->trailerService->getUploadUrls());
    } catch (Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }

  /**
   * Get Trailer Log List.
   * @param GetLogListTrailerV2Request $request
   * @return JsonResponse|mixed
   * @throws Exception
   */
  public function getTrailerLogList(GetLogListTrailerV2Request $request) {
    try {
      return $this->respondWithData(new GetTrailerLogListCollection($this->trailerService->getTrailerLogList($request)));
    } catch (Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }

  /**
   * Change trailer files folder.
   * @param ChangeTrailerV2FilesFolderRequest $request
   * @return JsonResponse|mixed
   */
  public function changeTrailerV2FilesFolder(ChangeTrailerV2FilesFolderRequest $request) {
    try {
      $isUpdated = $this->trailerService->changeTrailerV2FilesFolder($request);
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
