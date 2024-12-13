<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\Api\Tag\CreateTagRequest;
use App\Http\Requests\Api\Tag\UpdateTagRequest;
use App\Http\Requests\Api\Tag\GetTagLoadFileUrlRequest;
use App\Http\Resources\Tag\TagCollection;
use App\Http\Resources\Tag\TagMainResource;
use App\Services\TagService;
use Exception;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Log;

class TagController extends Controller {
  protected TagService $tagService;

  public function __construct(TagService $tagService) {
    $this->tagService = $tagService;
  }

  /**
   * @return JsonResponse
   * Get all tag list with details
   */
  public function index(): JsonResponse {
    $tags = $this->tagService->getAllTags();
    return $this->respondWithData(new TagCollection($tags));
  }

  /**
   * @return JsonResponse
   * Get Specific tag details by id
   */
  public function getById(): JsonResponse {
    $tag = $this->tagService->getTagById();
    return $this->respondWithData(new TagMainResource($tag));
  }

  /**
   * @return JsonResponse
   * Get All company related tags
   */
  /* Not needed for now.
    public function getAllCompanyTags(): JsonResponse
    {
        $tags = $this->tagService->getAllCompanyTags();
        return $this->respondWithData(new TagCollection($tags));
    }*/

  /**
   * @param CreateTagRequest $request
   * @return JsonResponse
   * Create a new tag
   */
  public function create(CreateTagRequest $request): JsonResponse {
    try {
      $tagDetails = $this->tagService->createTag();
      return $this->respondOk();
    } catch (Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }

  /**
   * @param UpdateTagRequest $request
   * @return JsonResponse
   * update a tag by id
   */
  public function update(UpdateTagRequest $request): JsonResponse {
    try {
      /*if (empty(request()->all())) {
            return $this->respondWithError(config('response.unprocessable_entity_error'));
        }*/
      $tagDetails = $this->tagService->updateTag();
      return $this->respondOk();
    } catch (Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }

  /*
    Not needed for now.
    public function search(): JsonResponse
    {
        $tags = $this->tagService->searchTag();
        return $this->respondWithData(new TagCollection($tags));
    }*/

  /**
   * @return JsonResponse
   * Delete tag by tag id
   */
  /* To avoid any potential errors (loads also deleted), we do not allow tag deletion for now.
    public function delete(): JsonResponse
    {
        $tagDetails = $this->tagService->delete();

        if (!$tagDetails['status']) {
            return $this->respondWithError($tagDetails['message']);
        }

        return $this->respondOk();
    }
    */

  /**
   * Generate pre-signed tag logo url.
   * @param GetTagLoadFileUrlRequest $request
   * @return JsonResponse
   */
  public function getUploadUrl(GetTagLoadFileUrlRequest $request): JsonResponse {
    try {
      return $this->respondWithMessageAndPayload(
        $this->tagService->getUploadUrl($request)
      );
    } catch (Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }
}
