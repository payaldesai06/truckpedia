<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\Api\Receiver\CreateReceiverRequest;
use App\Http\Requests\Api\Receiver\UpdateReceiverRequest;
use App\Http\Resources\Resource\ReceiverCollection;
use App\Http\Resources\Resource\ReceiverResource;
use App\Services\ReceiverService;
use Illuminate\Http\Request;

class ReceiverController extends Controller
{
    protected $receiverService;

    public function __construct(ReceiverService $receiverService)
    {
        $this->receiverService = $receiverService;
    }

    public function datatable()
    {
        $receivers = $this->receiverService->datatable();
        return $this->respondWithData(new ReceiverCollection($receivers));
    }

    public function store(CreateReceiverRequest $request)
    {
        $receiver = $this->receiverService->create();
        return $this->respondWithMessageAndPayload(new ReceiverResource($receiver), config('response.receiver.create'));
    }

    public function update(UpdateReceiverRequest $request)
    {
        $receiver = $this->receiverService->update();
        return $this->respondWithMessageAndPayload(new ReceiverResource($receiver), config('response.receiver.update'));
    }

    public function destroy()
    {
        $this->receiverService->delete();
        return $this->respondDeleted(config('response.receiver.delete'));
    }
}
