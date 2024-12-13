<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\Api\Shipper\CreateShipperRequest;
use App\Http\Requests\Api\Shipper\UpdateShipperRequest;
use App\Http\Resources\Shipper\ShipperCollection;
use App\Http\Resources\Shipper\ShipperResource;
use App\Services\ShipperService;
use Illuminate\Http\Request;

class ShipperController extends Controller
{
    protected $shipperService;

    public function __construct(ShipperService $shipperService)
    {
        $this->shipperService = $shipperService;
    }

    public function datatable()
    {
        $shippers = $this->shipperService->shipperDatatable();
        return $this->respondWithData(new ShipperCollection($shippers));
    }

    public function store(CreateShipperRequest $request)
    {
        $shipper = $this->shipperService->createShipper();
        return $this->respondWithMessageAndPayload(new ShipperResource($shipper), config('response.shipper.create'));
    }

    public function update(UpdateShipperRequest $request)
    {
        $shipper = $this->shipperService->updateShipper();
        return $this->respondWithMessageAndPayload(new ShipperResource($shipper), config('response.shipper.update'));
    }

    public function destroy()
    {
        $this->shipperService->delete();
        return $this->respondDeleted(config('response.shipper.delete'));
    }
}
