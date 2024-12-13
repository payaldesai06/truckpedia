<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\Api\TaskAutomation\UpdateTaskAutomationRequest;
use App\Http\Resources\TaskAutomation\TaskAutomationResource;
use App\Services\TaskAutomationService;

class TaskAutomationController extends Controller {
  protected $taskAutomationService;

  public function __construct(TaskAutomationService $taskAutomationService) {
    $this->taskAutomationService = $taskAutomationService;
  }

  public function getTaskAutomation() {
    $taskAutomation = $this->taskAutomationService->getTaskAutomation();
    return $this->respondWithData(new TaskAutomationResource($taskAutomation));
  }

  public function updateTaskAutomation(UpdateTaskAutomationRequest $request) {
    $taskAutomation = $this->taskAutomationService->updateTaskAutomation($request);
    return $this->respondWithData(new TaskAutomationResource($taskAutomation));
  }
}
