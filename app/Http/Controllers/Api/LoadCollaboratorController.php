<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\Api\LoadCollaborator\CreateLoadCollaboratorRequest;
use App\Http\Resources\LoadCollaborator\LoadCollaboratorMainResource;
use App\Services\LoadCollaboratorService;

class LoadCollaboratorController extends Controller {
  private $loadCollaboratorService;

  public function __construct(LoadCollaboratorService $loadCollaboratorService) {
    $this->loadCollaboratorService = $loadCollaboratorService;
  }

  public function create(CreateLoadCollaboratorRequest $request) {
    $loadCollaborator = $this->loadCollaboratorService->create();
    return $this->respondWithMessageAndPayload(
      new LoadCollaboratorMainResource($loadCollaborator),
      config('response.load_collaborator.create'));
  }

  public function update() {
    $loadCollaborator = $this->loadCollaboratorService->update();
    return $this->respondWithMessageAndPayload(
      new LoadCollaboratorMainResource($loadCollaborator),
      config('response.load_collaborator.update'));
  }

  public function delete() {
    $this->loadCollaboratorService->delete();
    return $this->respondOk();
  }

  public function getByLoadId() {
    $loadCollaborators = $this->loadCollaboratorService->getByLoadId();
    return $this->respondWithData(LoadCollaboratorMainResource::collection($loadCollaborators));
  }
}
