<?php

namespace App\Http\Resources\LoadInvoice;

use Carbon\Carbon;
use Illuminate\Http\Resources\Json\JsonResource;

class LoadInvoiceResource extends JsonResource {
  public function toArray($request): array {
    return [
      'invoice_file_name' => $this->invoice_file_name,
      'invoice_file_url' => getFile(
        config('constant.s3.load_invoice'),
        $this->invoice_file_name,
        $this->invoice_original_file_name
      ) ?? "",
      'invoice_generated_at' => $this->invoice_generated_at ? Carbon::parse($this->invoice_generated_at)
        ->toDateString() : '',
      'originalFileName' => !empty($this->invoice_original_file_name) ? $this->invoice_original_file_name : null,
    ];
  }
}
