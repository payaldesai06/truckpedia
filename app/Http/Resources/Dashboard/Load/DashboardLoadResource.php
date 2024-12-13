<?php

namespace App\Http\Resources\Dashboard\Load;

use App\Http\Resources\Customer\CustomerResource;
use App\Http\Resources\Load\LoadMainResource;
use Carbon\Carbon;
use Illuminate\Http\Resources\Json\JsonResource;

class DashboardLoadResource extends JsonResource
{
    public function toArray($request): array
    {
        return [
            $this->merge(new LoadMainResource($this)),
            'invoice_due_date_at' => $this->invoice_due_date_at ?? '',
            'customer' => new CustomerResource($this->customer),
        ];
    }
}
