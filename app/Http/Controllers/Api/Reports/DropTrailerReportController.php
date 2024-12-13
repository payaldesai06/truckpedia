<?php

namespace App\Http\Controllers\Api\Reports;

use App\Http\Controllers\Controller;
use App\Http\Resources\Reports\DropTrailerReport\DropTrailerCollection;
use App\Services\Reports\DropTrailerService;
use Illuminate\Http\JsonResponse;

class DropTrailerReportController extends Controller
{
    private DropTrailerService $dropTrailerService;

    public function __construct(DropTrailerService $dropTrailerService)
    {
        $this->dropTrailerService = $dropTrailerService;
    }

    public function datatable(): JsonResponse
    {
        $dropTrailers = $this->dropTrailerService->getReportDatatable();

        if (request('to_download') == 1) {
            $reportDownloadLink = $this->dropTrailerService->exportReport($dropTrailers);

            return $this->respondWithMessageAndPayload($reportDownloadLink);
        }

        return $this->respondWithData(new DropTrailerCollection($dropTrailers));
    }
}
