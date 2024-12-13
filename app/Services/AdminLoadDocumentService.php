<?php

namespace App\Services;

use App\Models\loadImage;
use Exception;
use App\Models\Load;

class AdminLoadDocumentService {
  private $loadService;

  public function __construct(LoadService $loadService) {
    $this->loadService = $loadService;
  }

  /**
   * Create a new load image.
   * @return LoadImage
   * @throws Exception if the load is not found
   */
  public function createLoadImages() {
    $load = Load::select('id')->where('id', request('load'))
      ->where('admin_company_detail_id', getAuthAdminCompanyId())->first();
    if (!$load) {
      throw new Exception('Load not found');
    }
    $imageMetaData = $this->getImageMetaData(request('document_type', 'image'));

    return loadImage::create([
      'load_id' => $load->id,
      'image_name' => request('image_name'),
      'purpose' => $imageMetaData['purpose'],
      'image_alias' => $imageMetaData['image_alias'],
      'original_file_name' => request('originalFileName') ?? null,
    ]);
  }

  /**
   * Delete load image
   * @throws Exception
   */
  public function deleteLoadImage() {
    $loadImage = loadImage::query()
      ->where('load_id', '=', request('load'))
      ->where('id', '=', request('document'))
      ->whereHas('loadDetail', function ($query) {
        $query->where('admin_company_detail_id', getAuthAdminCompanyId());
      })
      ->first();

    if (empty($loadImage)) {
      throw new Exception(config('response.load.accessDenied'));
    }
    return tap($loadImage, function ($loadImage) {
      $loadImage->delete();
    });
  }

  private function getImageMetaData($documentType = 'image'): array {
    $loadImage = config('constant.load.image');
    $loadImagePurpose = $loadImage['purpose'];
    $loadImageAlias = $loadImage['image_alias'];

    return [
      'image' => [
        'purpose' => $loadImagePurpose['load_image_admin'],
        'image_alias' => $loadImageAlias['load_image_admin'],
      ],
      'pod' => [
        'purpose' => $loadImagePurpose['load_pod_admin'],
        'image_alias' => $loadImageAlias['load_pod_admin'],
      ],
      'bol' => [
        'purpose' => $loadImagePurpose['bol'],
        'image_alias' => $loadImageAlias['bol'],
      ],
      'lumper' => [
        'purpose' => $loadImagePurpose['lumper'],
        'image_alias' => $loadImageAlias['lumper'],
      ],
      'scale' => [
        'purpose' => $loadImagePurpose['scale'],
        'image_alias' => $loadImageAlias['scale'],
      ],
      'fuel' => [
        'purpose' => $loadImagePurpose['fuel'],
        'image_alias' => $loadImageAlias['fuel'],
      ],
      'repair' => [
        'purpose' => $loadImagePurpose['repair'],
        'image_alias' => $loadImageAlias['repair'],
      ],
      'others' => [
        'purpose' => $loadImagePurpose['others'],
        'image_alias' => $loadImageAlias['others'],
      ],
    ][$documentType];
  }

  /**
   * Upload load third party carrier invoice
   * @throws Exception
   */
  public function storeThirdPartyCarrierInvoice() {
    $load = $this->getLoadByIdOrFail(request('load'));
    $invoiceOriginalFileName = request('thirdPartyCarrierInvoiceOriginalFileName') ?? null;
    $invoiceStorageFileName = request('thirdPartyCarrierInvoiceStorageFileName');
    $load->update([
      'third_party_carrier_invoice_original_file_name' => $invoiceOriginalFileName,
      'third_party_carrier_invoice_storage_file_name' => $invoiceStorageFileName,
    ]);
    return [
      'invoiceOriginalFileName' => $invoiceOriginalFileName,
      'invoiceStorageFileName' => $invoiceStorageFileName,
      'invoiceUrl' => getImage(
        $invoiceStorageFileName,
        config('constant.s3.load_file')
      ) ?? null,
    ];
  }

  /**
   * Delete load third party carrier invoice
   * @throws Exception
   */
  public function destroyThirdPartyCarrierInvoice() {
    return tap($this->getLoadByIdOrFail(request('load')), function ($load) {
      $load->update([
        'third_party_carrier_invoice_original_file_name' => null,
        'third_party_carrier_invoice_storage_file_name' => null,
      ]);
    });
  }

  /**
   * Get load by id or throw exception.
   * @param int $loadId
   * @return Object
   * @throws Exception
   */
  private function getLoadByIdOrFail($loadId) {
    $load = Load::select('id')->where('id', $loadId)
      ->where('admin_company_detail_id', getAuthAdminCompanyId())
      ->first();
    if (empty($load)) {
      throw new Exception(config('response.load.accessDenied'));
    }
    return $load;
  }
}
