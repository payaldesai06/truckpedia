<?php


namespace App\Services\Planning;

use App\Models\DriverTimeOffCalendar;
use App\Models\User;
use Exception;
use Illuminate\Support\Facades\DB;
use phpDocumentor\Reflection\Types\Integer;

class DriverTimeOffCalendarService {

  /**
   * Create driver time off calendar
   * @return array
   * @throws Exception
   */
  public function createDriverTimeOffCalendar(): array {
    $driverTimeOffCalendar = $this->createOrUpdateDriverTimeOffCalendar();
    return ['id' => $driverTimeOffCalendar->id];
  }

  /**
   * Update driver time off calendar
   * @return mixed
   * @throws Exception
   */
  public function updateDriverTimeOffCalendar() {
    $driverTimeOffCalendar = DriverTimeOffCalendar::where('id', request('id'))
      ->whereHas('user', function ($query) {
        $query->where('admin_company_detail_id', getAuthAdminCompanyId());
      })
      ->select('id')->first();
    if (empty($driverTimeOffCalendar)) {
      throw new Exception(config('response.driverTimeOffCalendar.not_found'));
    }
    return $this->createOrUpdateDriverTimeOffCalendar();
  }

  /**
   * Delete driver time off calendar by id
   * @return int
   * @throws Exception
   */
  public function deleteDriverTimeOffCalendar(): int {
    $driverTimeOffCalendar = DriverTimeOffCalendar::where('id', request('id'))
      ->whereHas('user', function ($query) {
        $query->where('admin_company_detail_id', getAuthAdminCompanyId());
      })
      ->select('id')->first();
    if (empty($driverTimeOffCalendar)) {
      throw new Exception(config('response.driverTimeOffCalendar.not_found'));
    }
    return DriverTimeOffCalendar::where('id', request('id'))->delete();
  }

  /**
   * Get the list of driver time off calendar
   * @return mixed
   * @throws Exception
   */
  public function getDriverTimeOffCalendarList() {
    $perPage = request('perPage') ?? config('constant.pagination.pageSize');
    return DriverTimeOffCalendar::select('id', 'start_date', 'start_time', 'start_timezone', 'end_date', 'end_time', 'end_timezone')
      // TODO: we might need to support userId in request.
      ->where('user_id', auth()->id())
      ->orderBy('id', 'desc')
      ->paginate($perPage);
  }

  /**
   * Create Or Update driver time off calendar using validated request data.
   * @return mixed
   * @throws Exception
   */
  private function createOrUpdateDriverTimeOffCalendar() {
    $getValidatedData = $this->getValidatedData();
    if (!request()->has('id')) {
      $getValidatedData['user_id'] = !empty(request('userId')) ? request('userId') : auth()->id();
    }
    return DriverTimeOffCalendar::updateOrCreate([
      'id' => request('id') ?? null
    ], $getValidatedData);
  }

  /**
   * Validated request data to create driver time off calendar.
   * @return array
   * @throws Exception
   */
  private function getValidatedData(): array {
    if (!is_null(request('userId'))) {
      $companyId = User::where('id', request('userId'))->pluck('admin_company_detail_id')->first();
      if ($companyId != getAuthAdminCompanyId()) {
        throw new Exception(config('response.error'));
      }
    }
    return [
      'start_date' => request('start.date') ?? null,
      'start_time' => request('start.time') ?? null,
      'start_timezone' => request('start.timezone') ?? null,
      'end_date' => request('end.date') ?? null,
      'end_time' => request('end.time') ?? null,
      'end_timezone' => request('end.timezone') ?? null
    ];
  }
}
