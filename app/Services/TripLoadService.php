<?php


namespace App\Services;

use App\Models\Load;
use App\Models\Trip;
use Illuminate\Support\Facades\Auth;

class TripLoadService {
  public function getAllTripLoad() {
    $trip = $this->getTrip();

    $loads = Load::whereHas('loadDrivers', function ($innerQuery) {
      // return $innerQuery->get('driver_ids');
      //            return $innerQuery->where('to_notify_driver', '=', 1)
      return $innerQuery->where('trip_id', '=', null)
        ->whereRaw("find_in_set('" . Auth::id() . "',driver_ids)");
    })->get();

    return $loads->flatMap(function ($load) use ($trip) {
      return $load->loadDrivers->map(function ($loadDriver) use ($trip, $load) {
        $driverIDs = explode(',', $loadDriver->driver_ids);
        $tripDriverIDS = explode(',', $trip->driver_ids);
        sort($driverIDs);
        sort($tripDriverIDS);
        if ($driverIDs == $tripDriverIDS) {
          return $load;
        }
      })->filter();
    });
  }

  public function getTrip() {
    $tripId = request('trip');
    return Trip::findOrFail($tripId);
  }
}
