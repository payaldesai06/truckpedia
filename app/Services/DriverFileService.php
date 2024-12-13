<?php


namespace App\Services;

use App\Models\DriverFile;

class DriverFileService
{
    public function delete()
    {
        $id = request('driverfile');
        $truck = DriverFile::where('id', '=', $id);
        return $truck->delete();
    }
}
