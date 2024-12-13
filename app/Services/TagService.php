<?php

namespace App\Services;

// use App\Models\DriverDetail;
use App\Models\Load;
use App\Models\Tag;

// use App\Models\Trailer;
// use App\Models\Truck;
use Exception;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class TagService {
  /**
   * @return mixed
   * Get All Tags
   */
  public function getAllTags() {
    $adminCompnayId = Auth::user()->admin_company_detail_id;
    return Tag::where('company_id', '=', $adminCompnayId)
      ->get();
  }

  /**
   * @return mixed
   * Get Tag Details by id
   * @throws Exception
   */
  public function getTagById() {
    $tag = Tag::where('id', request('tag_id'))
      ->with([
        'driverPayTemplateDetails',
        'driverPayTemplateDetails.driverPayTemplateCustomField'
      ])->first();
    if ($tag->driverPayTemplateDetails->isNotEmpty()) {
      $tag['driverPayTemplateDetails'] = (new DriverPayTemplateService())->getModelTemplateHelper($tag->driverPayTemplateDetails);
    }
    return $tag;
  }

  /**
   * @return mixed
   * Get All Tags detail with pagination by company specific
   */
  /*
    This function is not needed for now.
    public function getAllCompanyTags()
    {
        $per_page = request('rows') ?? config('response.per_page');
        return Tag::where('company_id', Auth::user()->admin_company_detail_id)
            ->when(request()->has('email'), function ($query) {
                return $query->where('email', 'like', '%' . request('email') . '%');
            })->when(request()->has('business_name'), function ($query) {
            return $query->where('business_name', 'like', '%' . request('business_name') . '%');
        })->when(request()->has('phone_number') && request()->has('phone_number'), function ($query) {
            return $query->orderBy(request('phone_number'), request('phone_number'));
        })->when(request()->has('address') && request()->has('address'), function ($query) {
            return $query->orderBy(request('address'), request('address'));
        })->when(request()->has('city') && request()->has('city'), function ($query) {
            return $query->orderBy(request('city'), request('city'));
        })->when(request()->has('state') && request()->has('state'), function ($query) {
            return $query->orderBy(request('state'), request('state'));
        })->when(request()->has('zipcode') && request()->has('zipcode'), function ($query) {
            return $query->orderBy(request('zipcode'), request('zipcode'));
        })->when(request()->has('usdot_number') && request()->has('usdot_number'), function ($query) {
            return $query->orderBy(request('usdot_number'), request('usdot_number'));
        })->when(request()->has('load_unique_id_started_from') && request()->has('load_unique_id_started_from'), function ($query) {
            return $query->orderBy(request('load_unique_id_started_from'), request('load_unique_id_started_from'));
        })
            ->orderBy('created_at', 'desc')
            ->paginate($per_page);
    }
    */

  /**
   * @return array
   * create new tag
   */
  public function createTag(): array {
    return DB::transaction(function () {
      $tag = Tag::create($this->getTagValidatedData());
      if (request('driverPayTemplate')) {
        $templateData = [
          'model' => 'tag',
          'modelId' => $tag->id,
          'loadDetails' => request('driverPayTemplate')['loadDetails'] ?? [],
          'tripDetails' => request('driverPayTemplate')['tripDetails'] ?? [],
        ];
        (new DriverPayTemplateService())->createOrUpdateModelTemplateHelper($templateData);
      }
      return ['status' => true, 'message' => config('response.tag.create_success')];
      /*
      These code are wrong. Trucks/trailers/drivers can have multiple tags.
      if (!empty(request('truck_ids'))) {
          Truck::whereIn('id', request('truck_ids'))->update(['tag_id' => $tagId]);
      }

      if (!empty(request('trailers_id'))) {
          Trailer::whereIn('id', request('trailers_id'))->update(['tag_id' => $tagId]);
      }

      if (!empty(request('drivers_id'))) {
          DriverDetail::whereIn('user_id', request('drivers_id'))->update(['tag_id' => $tagId]);
      }
      */
    });
  }

  /**
   * @return array
   * update tag details
   */
  public function updateTag(): array {
    $tag = Tag::where('id', request('tag_id'))->first();
    $tag->update(($this->getTagValidatedData()));

    if (request('driverPayTemplate')) {
      $templateData = [
        'model' => 'tag',
        'modelId' => $tag->id,
        'loadDetails' => request('driverPayTemplate')['loadDetails'] ?? [],
        'tripDetails' => request('driverPayTemplate')['tripDetails'] ?? [],
      ];
      // What if delete?
      (new DriverPayTemplateService())->createOrUpdateModelTemplateHelper($templateData);
    }
    return ['status' => true, 'message' => config('response.tag.update_success')];
  }

  /*
    Not needed for now.
    public function searchTag()
    {
        $per_page = request('rows') ?? config('response.per_page');
        $searchTerm = request('search');
        return Tag::where('business_name', 'like', '%' . $searchTerm . '%')->orWhere('email', 'like', '%' . $searchTerm . '%')->orderBy('created_at', 'desc')->paginate($per_page);
    }
    */

  /**
   * @return array
   * Delete tag by id
   */
  /*
    To avoid any potential errors (loads also deleted), we do not allow tag deletion for now.
    public function delete(): array
    {
        try {
            Tag::where('id', request('tag_id'))->delete();
            return ['status' => true, 'message' => config('response.tag.delete_success')];
        } catch (Exception $exception) {
            Log::error($exception);
            return ['status' => false, 'message' => $exception->getMessage()];
        }
    }
    */

  /**
   * @return array
   * Tag validated data
   */
  private function getTagValidatedData(): array {
    $billingCcEmails = array_filter(request('billing_cc_emails')) ?? null;
    $billingCcEmails = !empty($billingCcEmails) ? implode(',', $billingCcEmails) : '';
    $data = [
      'company_id' => Auth::user()->admin_company_detail_id,
      'business_name' => request('business_name'),
      'email' => request('email'),
      'address' => request('address'),
      'city' => request('city'),
      'state' => request('state'),
      'zipcode' => request('zipcode'),
      'usdot_number' => request('usdot_number'),
      'phone_number' => request('phone_number'),
      'load_unique_id_started_from' => request('load_unique_id_started_from'),
      'use_tag_for_billing' => request('use_tag_for_billing'),
      'invoice_sync_cascade' => request('invoice_sync_cascade'),
      'billing_cc_emails' => $billingCcEmails,
      'type' => request('type') ? array_search(request('type'), config('constant.tags.type')) : null,
      'pay_to_code' => request('pay_to_code') ?? null,
      'number_prefix' => request('numberPrefix') ?? null,
    ];
    if (request()->has('logoImageStorageFileName')) {
      $data = array_merge($data, [
        'logo_image_storage_file_name' => request('logoImageStorageFileName')
      ]);
    }
    return $data;
  }

  /*
  public function getTagFileUploadUrl($request) {
    if ($request['type'] == config('constant.uploadFileType')['logo']) {
      $fileName = 'logo-' . generateUniqueFileNameWithTagId($companyId, $tagId, $extension);
      return [
        'storageFileName' => $fileName,
        'url' => generatePresignedUrl($fileName, config('constant.s3.admin_company_image'))
      ];
    }
  }*/


  /**
   * Generate pre-signed url of s3 to upload tag logo.
   * @param $request
   * @return array
   * @throws Exception
   */
  public function getUploadUrl($request): array {
    $tagId = $request->has('tagId') ? 't' . $request->tagId : 't';
    $fileName = 'logo-' . generateUniqueFileName(
      getAuthAdminCompanyId(),
      $request->extension,
      $tagId
    );
    return [
      'storageFileName' => $fileName,
      'url' => generatePresignedUrl($fileName, config('constant.s3.admin_company_image'))
    ];
  }
}
