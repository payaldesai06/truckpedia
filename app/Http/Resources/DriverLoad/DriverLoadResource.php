<?php

namespace App\Http\Resources\DriverLoad;

use App\Http\Resources\Customer\CustomerResource;
use App\Http\Resources\Load\LoadDriverResource;
use App\Http\Resources\Load\LoadImageResource;
use App\Http\Resources\Load\LoadLegResource;
use App\Http\Resources\Load\LoadMainResource;
use App\Http\Resources\Load\LoadMultiPurposeStopsResource;
use App\Http\Resources\Load\LoadReceiverResource;
use App\Http\Resources\Load\LoadShipperResource;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Collection;

class DriverLoadResource extends JsonResource {
  /**
   * Transform the resource into an array.
   *
   * @param Request $request
   * @return array
   */
  public function toArray($request): array {
    list($loadShippers, $loadLegs, $loadReceivers, $loadMultiPurposeStops) =
      $this->generateStopsDetailsWithOrder();

    $shipperResources = LoadShipperResource::collection($loadShippers) ?? "";
    $legResources = LoadLegResource::collection($loadLegs) ?? "";
    $receiverResources = LoadReceiverResource::collection($loadReceivers) ?? "";
    $multiPurposeStopsResources
      = LoadMultiPurposeStopsResource::collection($loadMultiPurposeStops) ?? [];

    // TODO: this is not a good code, but it works for a quick patch as customer is waiting.
    $showRateConToDriver = $this->show_rate_con_to_driver;
    $alwaysShowRateConCompanyIds = [108, 114];
    $companyId = $this->admin_company_detail_id ?? null;
    if (in_array($companyId, $alwaysShowRateConCompanyIds)) {
      $showRateConToDriver = true;
    }
    $customizations = auth()->user()->adminCompanyDetail->customizations;
    $dpm = !empty($customizations['dpm']) ? $customizations['dpm'] : false;
    $ret = [
      $this->merge(new LoadMainResource($this)),
      'customer' => new CustomerResource($this->customer) ?? "",
      'shippers' => $shipperResources,
      'legs' => $legResources,
      'receviers' => $receiverResources,
      // Mobile apps should use stops array, not this array.
      // 'multiPurposeStops' => $multiPurposeStopsResources,
      'driver' => new LoadDriverResource($this->loadDriver) ?? "",
      'load_images' => !empty($this->loadDriver->loadImage) ?
        LoadImageResource::collection($this->loadDriver->loadImage) : "",
      'loadFiles' => $this->generateLoadFiles(
        $this->adminLoadImages,
        $this->rateConfirmations,
        $showRateConToDriver
      ) ?? [],
    ];
    list($loadStops, $showEndLoadButtonForNonSimpleMode) = $this->getAvailableStops(
      $shipperResources,
      $legResources,
      $receiverResources,
      $multiPurposeStopsResources
    );
    $ret['stops'] = $loadStops;
    $ret['showEndLoadButtonForNonSimpleMode'] = $showEndLoadButtonForNonSimpleMode;
    if ($dpm) {
      $ret['driverPay'] = $this->calculateDriverPay(
        $this->tripLoads,
        $this->tripV2LoadTemplatePayDetails
      );
    }
    return $ret;
  }

  /**
   * Calculate Driver Pay
   * @param $tripLoads
   * @param $tripV2LoadTemplatePayDetails
   * @return double|null
   */
  private function calculateDriverPay($tripLoads, $tripV2LoadTemplatePayDetails) {
    $totalPayment = null;
    // user_id filtering is added for double checking, in theory it's not needed.
    if ($tripLoads->isNotEmpty()) {
      // In theory, should be only 1 trip.
      $trip = $tripLoads->pluck('trip')->where('user_id', Auth::id())->first();
      if (!empty($trip)) {
        $loadPayDetails = $trip->tripV2TemplatePayDetails
          ->where('load_id', $this->id)->whereNotNull('payment');
        if ($loadPayDetails->isNotEmpty()) {
          $totalPayment = convertToNumberFormatWithDecimals($loadPayDetails->sum('payment'));
        }
      }
    } else if ($tripV2LoadTemplatePayDetails->isNotEmpty()) {
      $tripLoadPayment = $tripV2LoadTemplatePayDetails
        ->where('user_id', Auth::id())->whereNotNull('payment');
      if ($tripLoadPayment->isNotEmpty()) {
        $totalPayment = convertToNumberFormatWithDecimals($tripLoadPayment->sum('payment'));
      }
    }
    return ['payment' => $totalPayment];
  }

  /**
   * Generate all types of Load files
   * @param $adminLoadImages
   * @param $rateConfirmations
   * @param $showRateConToDriver
   * @return array
   */
  private function generateLoadFiles($adminLoadImages, $rateConfirmations, $showRateConToDriver) {
    $loadFiles = collect();
    if ($adminLoadImages->isNotEmpty()) {
      $loadFiles = $adminLoadImages->map(function ($image) {
        $displayFileName = $this->getDisplayFileName($image);
        return [
          'fileUrl' => getImage(
            $image->image_name,
            config('constant.s3.load_file')
          ) ?? "",
          'displayFileName' => $displayFileName,
          'originalFilename' => $image->original_file_name,
        ];
      });
    }
    if ($showRateConToDriver && $rateConfirmations->isNotEmpty()) {
      $loadFiles = $loadFiles->concat($rateConfirmations->map(function ($image) {
        return [
          'fileUrl' => getImage(
            $image->file_name,
            config('constant.s3.load_file')
          ) ?? "",
          'displayFileName' => empty($image->original_file_name) ? "Rate Con" : $image->original_file_name,
          'originalFilename' => $image->original_file_name,
        ];
      }));
    }
    return $loadFiles;
  }

  /**
   * get display file name
   * @param $image
   * @return string
   */
  private function getDisplayFileName($image) {
    if (!empty($image->original_file_name)) {
      return $image->original_file_name;
    }
    if ($image->purpose == 'load_pod' || $image->purpose == 'load_pod_admin') {
      return 'POD';
    }
    if ($image->purpose == 'bol') {
      return 'BOL';
    }
    if (strcasecmp(substr($image->image_name, -4), ".pdf") === 0) {
      return 'Document';
    }
    return ucwords(str_replace(["_", "admin"], [" ", ""], $image->purpose));
  }

  /**
   * Get available stops in an array with stopType.
   * @param $shipperResources
   * @param $legResources
   * @param $receiverResources
   * @return array
   */
  private function getAvailableStops(
    $shipperResources,
    $legResources,
    $receiverResources,
    $multiPurposeStopsResources
  ): array {
    $temp = collect();

    $shipperResources->each(function ($item) use ($temp) {
      $item->stopType = 'shipper';
      $temp->push($item);
    });
    $legResources->each(function ($item) use ($temp) {
      $item->stopType = 'leg';
      $temp->push($item);
    });
    $receiverResources->each(function ($item) use ($temp) {
      $item->stopType = 'receiver';
      $temp->push($item);
    });
    // This code has to be changed in the future if we have new types.
    $multiPurposeStopsResources->each(function ($item) use ($temp) {
      $item->stopType = 'terminal';
      $temp->push($item);
    });

    $temp = $temp->sortBy('order')->values();

    $ret = collect();
    $finalStops = collect();
    if (!empty($legResources) && $legResources->count()) {
      if ($this->loadDriver->to_leg) {
        $temp->each(function ($stop) use ($ret) {
          $ret->push($stop);
          if ($stop->stopType == 'leg') {
            return false;
          }
          return true;
        });
        $finalStops = $ret->sortBy('order')->values();
      } else if ($this->loadDriver->from_leg) {
        $seenLeg = false;
        foreach ($temp as $stop) {
          if ($stop->stopType == 'leg') {
            $seenLeg = true;
          }
          if ($seenLeg) {
            $ret->push($stop);
          }
        }
        $finalStops = $ret->sortBy('order')->values();
      }
    } else {
      $finalStops = $temp;
    }

    return [
      $finalStops,
      $this->showEndLoadButtonForNonSimpleMode($finalStops, $this->loadDriver)
    ];
  }

  private function showEndLoadButtonForNonSimpleMode($stops, $loadDriver) {
    foreach ($stops as $stop) {
      if ($this->isOneStopSomeButtonNotClicked($stop, $loadDriver)) {
        return false;
      }
    }
    return true;
  }

  private function isOneStopSomeButtonNotClicked($stop, $loadDriver) {
    if ($stop->stopType == 'shipper') {
      return empty($stop->arrived_local_datetime) || empty($stop->loaded_local_datetime);
    } else if ($stop->stopType == 'receiver') {
      return empty($stop->arrived_local_datetime) || empty($stop->unloaded_local_datetime);
    } else if ($stop->stopType == 'leg') {
      if ($loadDriver->to_leg) {
        return empty($stop->to_arrived_local_datetime) || empty($stop->to_departed_local_datetime);
      } else if ($loadDriver->from_leg) {
        return empty($stop->from_arrived_local_datetime) || empty($stop->from_departed_local_datetime);
      }
    }
    // In phase 1, terminal has no buttons.
    return false;
  }


  /**
   * Get all stops with order and assign order number if order is null/not exits.
   * @return array
   */
  private function generateStopsDetailsWithOrder(): array {
    $loadShippers = $this->loadShippers ?? collect();
    $loadLegs = $this->loadLegs ?? collect();
    $loadReceivers = $this->loadReceivers ?? collect();
    $loadMultiPurposeStops = $this->loadMultiPurposeStops ?? collect();

    $totalShippers = $loadShippers->count();
    $totalLegs = $loadLegs->count();
    $totalReceivers =  $loadReceivers->count();

    if ($totalShippers && is_null($loadShippers->first()->order)) {
      $loadShippers = $loadShippers->map(function ($shipper, $key) {
        $shipper->order = $key + 1;
        return $shipper;
      });
      if ($totalLegs) {
        $loadLegs = $loadLegs->map(function ($leg, $key) use ($totalShippers) {
          $leg->order = $totalShippers + $key + 1;
          return $leg;
        });
      }
      if ($loadReceivers->count()) {
        $totalShippersAndLegs = $totalShippers + $totalLegs;
        $loadReceivers = $loadReceivers->map(function ($receiver, $key) use ($totalShippersAndLegs) {
          $receiver->order = $totalShippersAndLegs + $key + 1;
          return $receiver;
        });
      }
      if ($loadMultiPurposeStops->count()) {
        $totalShippersAndLegsAndReceiver = $totalShippers + $totalLegs + $totalReceivers;
        $loadMultiPurposeStops = $loadMultiPurposeStops->map(
          function ($multiPurpose, $key) use ($totalShippersAndLegsAndReceiver) {
            $multiPurpose->order = $totalShippersAndLegsAndReceiver + $key + 1;
            return $multiPurpose;
          }
        );
      }
    }
    return [$loadShippers, $loadLegs, $loadReceivers, $loadMultiPurposeStops];
  }
}
