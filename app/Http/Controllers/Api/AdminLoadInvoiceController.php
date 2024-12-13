<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\Api\AdminLoadInvoice\CreateAdminLoadInvoiceRequest;
use App\Http\Resources\LoadInvoice\LoadInvoiceResource;
use App\Services\AdminLoadInvoiceService;
use Illuminate\Http\Request;

class AdminLoadInvoiceController extends Controller
{
    protected $adminLoadInvoiceService;

    public function __construct(AdminLoadInvoiceService $adminLoadInvoiceService)
    {
        $this->adminLoadInvoiceService = $adminLoadInvoiceService;
    }

    public function store(CreateAdminLoadInvoiceRequest $request)
    {
        $load = $this->adminLoadInvoiceService->uploadInvoice();

        return $this->respondCreatedWithPayload(
            new LoadInvoiceResource ($load),
            config('response.load_invoice.update')
        );
    }
}
