<?php

namespace App\Services;

use App\Models\Load;

class AdminLoadInvoiceService
{
    public function uploadInvoice()
    {
        $id = request('load');

        return tap(Load::findOrFail($id), function ($load) {
            $load->update([
                'status' => config('constant.status.load.invoice_created'),
                'invoice_file_name' => request('invoice_file_name'),
                'invoice_original_file_name' => request('originalFileName') ?? null,
            ]);
        });
    }
}
