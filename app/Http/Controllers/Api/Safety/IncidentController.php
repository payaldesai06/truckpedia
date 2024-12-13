<?php

namespace App\Http\Controllers\Api\Safety;

use App\Http\Controllers\Controller;
use App\Http\Requests\Api\Safety\CreateUpdateIncidentRequest;
use App\Http\Requests\Api\Safety\GetListIncidentRequest;
use App\Http\Requests\Api\Safety\DeleteIncidentRequest;
use App\Http\Requests\Api\Safety\GetYearlyComparisonDataForChartsRequest;
use App\Http\Requests\Api\Safety\SetCustomizationRequest;
use App\Http\Resources\Safety\IncidentResource;
use App\Http\Resources\Safety\IncidentCollection;
use App\Services\Safety\IncidentService;
use App\Services\UserCustomization\UserCustomizationService;
use Illuminate\Support\Facades\Log;
use Illuminate\Http\JsonResponse;
use Exception;
use App\Http\Requests\Api\Safety\CreateIncidentFileRequest;
use App\Http\Requests\Api\Safety\DeleteIncidentFileRequest;
use App\Http\Requests\Api\Safety\GetIncidentFileUrlRequest;
use App\Http\Requests\Api\Safety\UpdateIncidentFileRequest;
use App\Http\Requests\Api\Safety\GetIncidentFileListRequest;
use App\Http\Resources\Safety\IncidentFileResource;
use App\Http\Requests\Api\Safety\GetShareLinkRequest;
use App\Http\Requests\Api\Safety\ViewSharePageRequest;
use App\Http\Requests\Api\Safety\CreateIncidentEmailRequest;
use App\Http\Requests\Api\Safety\CreateUpdateIncidentNoteRequest;
use App\Http\Requests\Api\Safety\DeleteIncidentNoteRequest;
use App\Http\Requests\Api\Safety\GetDataForChartRequest;
use App\Http\Requests\Api\Safety\GetIncidentCountRequest;
use App\Http\Requests\Api\Safety\GetIncidentFileLinksRequest;
use App\Http\Requests\Api\Safety\DeleteIncidentEmailRequest;

class IncidentController extends Controller {
  protected $incidentService;

  public function __construct(IncidentService $incidentService) {
    $this->incidentService = $incidentService;
  }

  /**
   * Get Incident List
   * @param $request
   * @return JsonResponse|mixed
   * @throws Exception
   */
  public function getList(GetListIncidentRequest $request) {
    try {
      $incidents = $this->incidentService->getList($request);
      if (request('toDownload')) {
        return $this->respondWithMessageAndPayload(
          $this->incidentService->getListExport($incidents)
        );
      }
      return $this->respondWithData(new IncidentCollection($incidents));
    } catch (Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }

  /**
   * Create Incident
   * @param $request
   * @return JsonResponse|mixed
   * @throws Exception
   */
  public function store(CreateUpdateIncidentRequest $request) {
    try {
      $this->incidentService->create($request);
      return $this->respondWithMessage(config('response.incident.create'));
    } catch (Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }

  /**
   * Update Incident
   * @param $request
   * @return JsonResponse|mixed
   * @throws Exception
   */
  public function update(CreateUpdateIncidentRequest $request) {
    try {
      $this->incidentService->update($request);
      return $this->respondWithMessage(config('response.incident.update'));
    } catch (Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }

  /**
   * Get Incident By Id
   * @param $id
   * @return JsonResponse|mixed
   * @throws Exception
   */
  public function show($id) {
    try {
      return $this->respondWithData(
        ['incident' => new IncidentResource($this->incidentService->show($id))]
      );
    } catch (Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }

  /**
   * Delete incident.
   * @param DeleteIncidentRequest $request
   * @return JsonResponse|mixed
   */
  public function delete(DeleteIncidentRequest $request) {
    try {
      $isDeleted = $this->incidentService->delete($request);
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
   * Create incident file.
   * @param CreateIncidentFileRequest $request
   * @return JsonResponse|mixed
   */
  public function createFile(CreateIncidentFileRequest $request) {
    try {
      return $this->respondWithData($this->incidentService->createFile($request));
    } catch (Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }

  /**
   * Delete incident.
   * @param DeleteIncidentFileRequest $request
   * @return JsonResponse|mixed
   */
  public function deleteFile(DeleteIncidentFileRequest $request) {
    try {
      $isDeleted = $this->incidentService->deleteFile($request);
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
   * Get incident file urls.
   * @param GetIncidentFileUrlRequest $request
   * @return JsonResponse|mixed
   */
  public function getUploadUrls(GetIncidentFileUrlRequest $request) {
    try {
      return $this->respondWithMessageAndPayload($this->incidentService->getUploadUrls($request));
    } catch (Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }

  /**
   * Edit incident file.
   * @param UpdateIncidentFileRequest $request
   * @return JsonResponse|mixed
   */
  public function editFile(UpdateIncidentFileRequest $request) {
    try {
      $isUpdated = $this->incidentService->editFile();
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
   * Get file list.
   * @param GetIncidentFileListRequest $request
   * @return JsonResponse|mixed
   */
  public function getFileList(GetIncidentFileListRequest $request) {
    try {
      return $this->respondWithData(
        ['files' => IncidentFileResource::collection($this->incidentService->getFileList())]
      );
    } catch (Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }

  /**
   * Get share link.
   * @param GetShareLinkRequest $request
   * @return JsonResponse|mixed
   */
  public function getShareLink(GetShareLinkRequest $request) {
    try {
      return $this->respondWithData($this->incidentService->getShareLink());
    } catch (Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }

  /**
   * View share page.
   * @param ViewSharePageRequest $request
   * @return JsonResponse|mixed
   */
  public function viewSharePage(ViewSharePageRequest $request) {
    try {
      return $this->respondWithData(
        ['files' => IncidentFileResource::collection($this->incidentService->viewSharePage())]
      );
    } catch (Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }

  /**
   * User Customization API
   * @param SetCustomizationRequest $request
   * @return JsonResponse|mixed
   * @throws Exception
   */
  public function setCustomization(SetCustomizationRequest $request) {
    try {
      UserCustomizationService::saveOrUpdate($request->all(), "safetyIncidents");
      return $this->respondOK();
    } catch (Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }

  /**
   * Create incident email
   * @param CreateIncidentEmailRequest $request
   * @return JsonResponse|mixed
   * @throws Exception
   */
  public function createEmail(CreateIncidentEmailRequest $request) {
    try {
      return $this->respondWithData($this->incidentService->createEmail($request));
    } catch (Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }

  /**
   * Delete Incident Email
   * @param DeleteIncidentEmailRequest $request
   * @return JsonResponse|mixed
   */
  public function deleteEmail(DeleteIncidentEmailRequest $request) {
    try {
      $isDeleted = $this->incidentService->deleteEmail();
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
   * Get data for charts
   * @param GetDataForChartRequest $request
   * @return JsonResponse|mixed
   * @throws Exception
   */
  public function getDataForCharts(GetDataForChartRequest $request) {
    try {
      return $this->respondWithData($this->incidentService->getDataForCharts($request));
    } catch (Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }

  /**
   * Get data for charts
   * @param GetYearlyComparisonDataForChartsRequest $request
   * @return JsonResponse|mixed
   * @throws Exception
   */
  public function getYearlyComparisonDataForCharts(GetYearlyComparisonDataForChartsRequest $request) {
    try {
      return $this->respondWithData($this->incidentService->getYearlyComparisonDataForCharts($request->startYear, $request->endYear));
    } catch (Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }

  /**
   * Get incident count
   * @param GetIncidentCountRequest $request
   * @return JsonResponse|mixed
   * @throws Exception
   */
  public function getCount(GetIncidentCountRequest $request) {
    try {
      return $this->respondWithData($this->incidentService->getCount());
    } catch (Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }

  /**
   * Create Incident Note
   * @param CreateUpdateIncidentNoteRequest $request
   * @return JsonResponse|mixed
   */
  public function createNote(CreateUpdateIncidentNoteRequest $request) {
    try {
      return $this->respondWithData($this->incidentService->createNote($request));
    } catch (Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }

  /**
   * Update Incident Note
   * @param CreateUpdateIncidentNoteRequest $request
   * @return JsonResponse|mixed
   * @throws Exception
   */
  public function editNote(CreateUpdateIncidentNoteRequest $request) {
    try {
      $this->incidentService->editNote($request);
      return $this->respondWithMessage(config('response.incident.notes.update'));
    } catch (Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }

  /**
   * Delete Incident Note
   * @param DeleteIncidentNoteRequest $request
   * @return JsonResponse|mixed
   */
  public function deleteNote(DeleteIncidentNoteRequest $request) {
    try {
      $isDeleted = $this->incidentService->deleteNote($request);
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
   * Get Links For Files
   * @param GetIncidentFileLinksRequest $request
   * @return JsonResponse|mixed
   */
  public function getLinksForFiles(GetIncidentFileLinksRequest $request) {
    try {
      return $this->respondWithData($this->incidentService->getLinksForFiles());
    } catch (Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }
}
