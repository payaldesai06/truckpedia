<?php

namespace App\Services\CompanyWebsite;

use Exception;
use App\Models\CompanyWebsiteBlog;

class BlogService {

  /**
   * Show Blog List
   * @param $request
   * @return mix
   * @throws Exception
   */
  public function getBlogs($request) {
    return CompanyWebsiteBlog::select('id', 'title')
      ->where('company_id', $request->companyId)
      ->orderBy('id', 'desc')
      ->paginate($request->pageSize ?? config('constant.pagination.pageSize'));
  }

  /**
   * Show Blog Detail
   * @param $id
   * @return mix
   * @throws Exception
   */
  public function show($id) {
    return CompanyWebsiteBlog::findOrFail($id);
  }

  /**
   * Create Blog
   * @param $request
   * @return mixed|array
   * @throws Exception
   */
  public function create($request) {
    $data = [
      'company_id' => getAuthAdminCompanyId(),
      'title' => $request->title,
      'content' => json_encode($request->content, true),
    ];
    $blog = CompanyWebsiteBlog::create($data);

    return ['id' => $blog->id];
  }

  /**
   * Create Update
   * @param $request
   * @return mixed|array
   * @throws Exception
   */
  public function update($request) {
    $data = [
      'title' => $request->title,
      'content' => json_encode($request->content, true),
    ];

    return CompanyWebsiteBlog::where('id', $request->id)
      ->where('company_id', getAuthAdminCompanyId())
      ->update($data);
  }
}
