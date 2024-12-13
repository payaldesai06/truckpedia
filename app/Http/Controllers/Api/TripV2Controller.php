<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\Api\TripV2\GetDriverPayRequest;
use App\Services\TripV2Service;
use App\Http\Requests\Api\TripV2\CreateTripV2Request;
use App\Http\Requests\Api\TripV2\GetLoadsPlanningRequest;
use App\Http\Requests\Api\TripV2\GetTripV2Request;
use App\Http\Resources\TripV2\GetTripV2Collection;
use Illuminate\Http\JsonResponse;
use Exception;
use Illuminate\Support\Facades\Log;
use App\Http\Requests\Api\TripV2\ApproveTripV2Request;
use App\Http\Requests\Api\TripV2\ChangeTripV2StatusRequest;
use App\Http\Requests\Api\TripV2\DeleteTripV2Request;
use App\Http\Requests\Api\TripV2\CreateTripV2CustomPaymentFieldRequest;
use App\Http\Requests\Api\TripV2\CreateTripSheetRequest;
use App\Http\Requests\Api\TripV2\EndTripSheetRequest;
use App\Http\Requests\Api\TripV2\UpdatePreTripDriverPay;
use App\Http\Resources\TripV2\GetTripSheetListCollection;
use Illuminate\Http\Request;

class TripV2Controller extends Controller {
  protected $tripV2Service;

  public function __construct(TripV2Service $tripV2Service) {
    $this->tripV2Service = $tripV2Service;
  }

  /**
   * Create trip V2.
   * @param CreateTripV2Request $request
   * @return JsonResponse|mixed
   */
  public function createTripV2(CreateTripV2Request $request) {
    try {
      return $this->respondWithData($this->tripV2Service->createTripV2($request));
    } catch (Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }

  /**
   * Create trip sheet.
   * @param CreateTripSheetRequest $request
   * @return JsonResponse|mixed
   */
  public function createTripSheet(CreateTripSheetRequest $request) {
    try {
      return $this->respondWithMessageAndPayload(
        $this->tripV2Service->createTripSheet($request),
        config('response.trip_sheet.started')
      );
    } catch (Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }

  /**
   * End trip sheet.
   * @param EndTripSheetRequest $request
   * @return JsonResponse|mixed
   */
  public function endTripSheet(EndTripSheetRequest $request) {
    try {
      $this->tripV2Service->endTripSheet($request);
      return $this->respondOk();
    } catch (Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }

  /**
   * Get list trip sheet.
   * @param Request $request
   * @return JsonResponse|mixed
   */
  public function getTripSheetList(Request $request) {
    try {
      return $this->respondWithData(
        new GetTripSheetListCollection($this->tripV2Service->getTripSheetList($request))
      );
    } catch (Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }

  /**
   * get loads for planning.
   * @param GetLoadsPlanningRequest $request
   * @return JsonResponse|mixed
   */
  public function getLoadsForPlanning(GetLoadsPlanningRequest $request) {
    try {
      return $this->respondWithData($this->tripV2Service->getLoadsForPlanning($request));
    } catch (Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }

  /**
   * Get All Trips.
   * @param GetTripV2Request $request
   * @return JsonResponse|mixed
   */
  public function getTripsV2(GetTripV2Request $request) {
    try {
      return $this->respondWithData(new GetTripV2Collection($this->tripV2Service->getTripsV2($request)));
    } catch (Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }

  /**
   * Get trip by tripId.
   * @return JsonResponse|mixed
   */
  public function getTripById() {
    try {
      return $this->respondWithData($this->tripV2Service->getTripById());
    } catch (Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }

  /**
   * Approve trip.
   * @param ApproveTripV2Request $request
   * @return JsonResponse|mixed
   */
  public function approveTripV2(ApproveTripV2Request $request) {
    try {
      $isApproved = $this->tripV2Service->approveTripV2($request);
      if (!$isApproved) {
        return $this->respondInternalError(config('response.error'), [], []);
      }
      return $this->respondOk();
    } catch (Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }

  /**
   * Change trip v2 status.
   * @param ChangeTripV2StatusRequest $request
   * @return JsonResponse|mixed
   */
  public function changeTripV2Status(ChangeTripV2StatusRequest $request) {
    try {
      $isUpdated = $this->tripV2Service->changeTripV2Status($request);
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
   * Delete trip v2
   * @param DeleteTripV2Request $request
   * @return JsonResponse|mixed
   */
  public function deleteTripV2(DeleteTripV2Request $request) {
    try {
      $isDeleted = $this->tripV2Service->deleteTripV2($request);
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
   * Create trip custom payment field.
   * @param CreateTripV2CustomPaymentFieldRequest $request
   * @return JsonResponse|mixed
   */
  public function createTripV2CustomPaymentField(CreateTripV2CustomPaymentFieldRequest $request) {
    try {
      return $this->respondWithData($this->tripV2Service->createTripV2CustomPaymentField($request));
    } catch (Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }

  /**
   * Get trip custom payment fields.
   * @return JsonResponse|mixed
   */
  public function getTripV2CustomPaymentFields() {
    try {
      return $this->respondWithData($this->tripV2Service->getTripV2CustomPaymentFields());
    } catch (Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }

  /**
   * Update Trip Driver Payment Load Detail
   * @param UpdatePreTripDriverPay $request
   * @return JsonResponse|mixed
   */
  public function updatePreTripDriverPay(UpdatePreTripDriverPay $request) {
    try {
      return $this->respondWithData($this->tripV2Service->updatePreTripDriverPay($request));
    } catch (Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }

  /**
   * Get trip load driver pay
   * @param GetDriverPayRequest $request
   * @return JsonResponse|mixed
   */
  public function getDriverPay(GetDriverPayRequest $request) {
    try {
      return $this->respondWithData($this->tripV2Service->getDriverPay($request));
    } catch (Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }
}
