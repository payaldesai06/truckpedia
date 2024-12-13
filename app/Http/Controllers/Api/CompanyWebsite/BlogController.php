<?php

namespace App\Http\Controllers\Api\CompanyWebsite;

use App\Http\Controllers\Controller;
use App\Services\CompanyWebsite\BlogService;
use App\Http\Resources\CompanyWebsite\BlogCollection;
use App\Http\Resources\CompanyWebsite\BlogResource;
use App\Http\Requests\Api\CompanyWebsite\CreateUpdateCompanyWebsiteBlog;
use App\Http\Requests\Api\CompanyWebsite\GetCompanyWebsiteBlogList;
use Exception;
use Illuminate\Support\Facades\Log;

class BlogController extends Controller {
  protected $blogService;

  public function __construct(BlogService $blogService) {
    $this->blogService = $blogService;
  }

  /**
   * Get Blog List
   * @param GetCompanyWebsiteBlogList $request
   * @return JsonResponse|mixed
   * @throws Exception
   */
  public function getBlogs(GetCompanyWebsiteBlogList $request) {
    try {
      return $this->respondWithData(
        new BlogCollection($this->blogService->getBlogs($request))
      );
    } catch (Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }

  /**
   * Get Blog By Id
   * @param {integer} $id
   * @return JsonResponse|mixed
   * @throws Exception
   */
  public function show($id) {
    try {
      return $this->respondWithData(
        ['blog' => new BlogResource($this->blogService->show($id))]
      );
    } catch (Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }

  /**
   * Create Blog
   * @param CreateUpdateCompanyWebsiteBlog $request
   * @return JsonResponse|mixed
   * @throws Exception
   */
  public function store(CreateUpdateCompanyWebsiteBlog $request) {
    try {
      return $this->respondWithData(
        ['blog' => $this->blogService->create($request)]
      );
    } catch (Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }

  /**
   * Update Blog
   * @param CreateUpdateCompanyWebsiteBlog $request
   * @return JsonResponse|mixed
   * @throws Exception
   */
  public function update(CreateUpdateCompanyWebsiteBlog $request) {
    try {
      $this->blogService->update($request);
      return $this->respondOk();
    } catch (Exception $exception) {
      Log::error($exception);
      return $this->respondInternalError($exception->getMessage(), [], $exception);
    }
  }
}
