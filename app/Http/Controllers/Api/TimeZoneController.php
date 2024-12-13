<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use \Illuminate\Http\JsonResponse;

class TimeZoneController extends Controller
{
    public function index(): JsonResponse
    {
        $timezones = [
            'America/Los_Angeles' => 'Pacific Time - US and Canada',
            'America/Edmonton' => 'Mountain Time - US and Canada',
            'America/Winnipeg' => 'Central Time - US and Canada',
            'America/New_York' => 'Eastern Time - US and Canada',
            'America/Halifax' => 'Atlantic Time',
        ];

        return $this->respondWithData($timezones);
    }
}
