<?php

namespace App\Services;

use App\Models\Load;
use App\Models\LoadDriver;
use App\Models\loadImage;
use App\Services\DriverLoadService;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Facades\Auth;
use Exception;

class LoadImageService {
  private DriverLoadService $driverLoadService;
  private $loadImagePurpose;
  private $loadImageAlias;

  public function __construct(DriverLoadService $driverLoadService) {
    $this->driverLoadService = $driverLoadService;
    $this->loadImagePurpose = config('constant.load.image.purpose');
    $this->loadImageAlias = config('constant.load.image.image_alias');
  }

  private function getLoadDriver() {
    return LoadDriver::query()->findOrFail(request('driverLoad'));
  }

  private function getLoad() {
    $companyId = getAuthAdminCompanyId();
    return Load::query()->where('admin_company_detail_id', $companyId)->findOrFail(request('load'));
  }

  public function loadPickUpImages() {
    return $this->uploadLoadImages(config('constant.load.image.purpose.load_picked_up'));
  }

  public function loadDeliveredImages() {
    return $this->uploadLoadImages(config('constant.load.image.purpose.load_delivered'));
  }

  public function uploadLoadImages($type) {
    return tap($this->getLoadDriver(), function ($driverLoad) use ($type) {
      $loadImages = collect(request('images'))->map(function ($image) use ($type) {
        return [
          'image_name' => $image['image_name'],
          'image_alias' => $image['image_alias'] ?? $this->loadImageAlias[$type],
          'purpose' => $this->loadImagePurpose[$type],
          'original_file_name' => $image['originalFilename'] ?? null,
        ];
      });

      $driverLoad->loadImage()->createMany($loadImages);
      //send automation emails
      (new DriverLoadService())->statusChangeNotification(
        $driverLoad,
        config('constant.status.load_driver.upload'),
        $loadImages,
        $type
      );
    });
  }

  public function loadProofOfDelivery() {
    return tap($this->getLoadDriver(), function ($driverLoad) {
      $loadPODImages = collect(request('pod_images'))->map(function ($image) {
        return $image['image_name'];
      });

      $PODPDFFileName = $this->driverLoadService->generatePDFAndUploadToS3($loadPODImages);

      $podArray = [
        'image_name' => $PODPDFFileName,
        'image_alias' => $this->loadImageAlias['load_pod'],
        'purpose' => $this->loadImagePurpose['load_pod'],
        'original_file_name' => request('originalFilename') ?? null,
      ];

      $driverLoad->loadImage()->create($podArray);
      //send automation emails
      (new DriverLoadService())->statusChangeNotification(
        $driverLoad,
        config('constant.status.load_driver.upload'),
        collect([$podArray]),
        config('constant.load.image.purpose.load_pod')
      );
    });
  }

  /**
   * Upload load bol document using load driver id
   * @return mixed
   * @throws Exception
   */
  public function loadBol() {
    return tap($this->getLoadDriverV2(), function ($driverLoad) {
      $loadBolImages = collect(request('images'))->map(function ($image) {
        return $image['imageName'];
      });
      $bolPdfFilename = $this->driverLoadService->generateBolAndOtherPdfAndUploadToS3(
        $loadBolImages,
        $driverLoad->load_id,
        'bol'
      );
      $bolArray = [
        'image_name' => $bolPdfFilename,
        'image_alias' => $this->loadImageAlias['bol'],
        'purpose' => $this->loadImagePurpose['bol'],
        'load_id' => $driverLoad->load_id,
        'original_file_name' => request('originalFilename') ?? null,
      ];
      $driverLoad->loadImage()->create($bolArray);
      //send automation emails
      (new DriverLoadService())->statusChangeNotification(
        $driverLoad,
        config('constant.status.load_driver.upload'),
        collect([$bolArray]),
        config('constant.load.image.purpose.bol')
      );
    });
  }

  /**
   * Upload load other document using load driver id
   * @return mixed
   * @throws Exception
   */
  public function loadOther() {
    return tap($this->getLoadDriverV2(), function ($driverLoad) {
      $type = request('type');
      $loadOtherImages = collect(request('images'))->map(function ($image) {
        return $image['imageName'];
      });
      $otherPdfFilename = $this->driverLoadService->generateBolAndOtherPdfAndUploadToS3(
        $loadOtherImages,
        $driverLoad->load_id,
        $type
      );
      $otherArray = [
        'image_name' => $otherPdfFilename,
        'image_alias' => $this->loadImageAlias[$type],
        'purpose' => $this->loadImagePurpose[$type],
        'load_id' => $driverLoad->load_id,
        'original_file_name' => request('originalFilename') ?? null,
      ];
      $driverLoad->loadImage()->create($otherArray);
      //send automation emails
      (new DriverLoadService())->statusChangeNotification(
        $driverLoad,
        config('constant.status.load_driver.upload'),
        collect([$otherArray]),
        config('constant.load.image.purpose')[$type]
      );
    });
  }

  /**
   * Check login user belongs to the load driver
   * @return mixed
   * @throws Exception
   */
  private function getLoadDriverV2() {
    $driverId = Auth::id();
    $loadDriver = LoadDriver::query()
      ->select('id', 'load_id', 'driver_ids')
      ->whereHas('loadDetail', function (Builder $query) {
        $query->where('admin_company_detail_id', getAuthAdminCompanyId());
      })
      ->whereRaw("find_in_set('" . $driverId . "',driver_ids)")
      ->find(request('driverLoad'));
    if (empty($loadDriver)) {
      throw new Exception(config('response.driver.not_found'));
    }
    return $loadDriver;
  }

  /**
   * Delete Load Image
   */
  public function deleteLoadImage() {
    return tap($this->getLoad(), function ($load) {
      tap(
        loadImage::query()
          ->where([
            'load_id' => $load->id,
            'id' => request('loadImage')
          ])
          ->firstOrFail(),
        function ($loadImage) {
          $loadImage->delete();
        }
      );
    });
  }
}
