<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\Api\LanguageLabel\CreateLanguageLabelRequest;
use App\Http\Requests\Api\LanguageLabel\UpdateLanguageLabelRequest;
use App\Http\Resources\LanguageLabel\LanguageLabelCollection;
use App\Http\Resources\LanguageLabel\LanguageLabelResource;
use App\Services\LanguageLabelService;
use Illuminate\Http\Request;

class LanguageLabelController extends Controller
{
    protected $languageLabelService;

    public function __construct(LanguageLabelService $languageLabelService)
    {
        $this->languageLabelService = $languageLabelService;
    }

    public function index()
    {
        $languageLabels = $this->languageLabelService->getAllLanguageLabel();
        return $this->respondWithData(new LanguageLabelCollection($languageLabels));
    }

    public function datatable()
    {
        $languageLabels = $this->languageLabelService->getAllLanguageLabelDatatable();
        return $this->respondWithData(new LanguageLabelCollection($languageLabels));
    }

    public function store(CreateLanguageLabelRequest $request)
    {

        $languageLabel = $this->languageLabelService->create();
        // return $languageLabel;
        return $this->respondWithMessageAndPayload(new LanguageLabelResource($languageLabel), config('response.language_label.create'));
    }

    public function update(UpdateLanguageLabelRequest $request)
    {

        $languageLabel = $this->languageLabelService->update();
        // return $languageLabel;
        return $this->respondWithMessageAndPayload(new LanguageLabelResource($languageLabel), config('response.language_label.update'));
    }

    public function destroy()
    {
        $this->languageLabelService->delete();
        return $this->respondDeleted(config('response.language_label.delete'));
    }
}
