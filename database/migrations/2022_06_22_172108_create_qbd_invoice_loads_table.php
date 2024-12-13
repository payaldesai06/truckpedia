<?php

use App\Models\QbdInvoice;
use App\Models\QbdInvoiceLoad;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

// This is used for mass invoice.
class CreateQbdInvoiceLoadsTable extends Migration {
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    Schema::create('qbd_invoice_loads', function (Blueprint $table) {
      $table->foreignId('qbd_invoice_id')->references('id')->on('qbd_invoices')->onDelete('cascade');
      $table->foreignId('load_id')->references('id')->on('loads')->onDelete('cascade');

      $table->primary(['qbd_invoice_id', 'load_id']);
      $table->softDeletes();
      $table->timestamps();
    });

    DB::transaction(function () {
      $rows = QbdInvoice::select(['id', 'mass_invoice_number', 'mass_invoice_load_ids'])->whereNotNull('mass_invoice_number')->get();
      foreach ($rows as $row) {
        if (empty($row->mass_invoice_load_ids)) {
          continue;
        }
        $loadIds = explode(',', $row->mass_invoice_load_ids);
        foreach ($loadIds as $loadId) {
          QbdInvoiceLoad::create([
            'qbd_invoice_id' => $row->id,
            'load_id' => (int) $loadId,
          ]);
        }
      }
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down() {
    Schema::dropIfExists('qbd_invoice_loads');
  }
}
