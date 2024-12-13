<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class SupportMassInvoiceForQbdInvoicesTable extends Migration {
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    Schema::table('qbd_invoices', function (Blueprint $table) {
      $table->dropForeign('qbd_invoices_load_id_foreign');
      $table->unsignedBigInteger('load_id')->nullable()->change();
      $table->foreign('load_id')->references('id')->on('loads')->onDelete('cascade');
      $table->unsignedBigInteger('mass_invoice_number')->nullable()->after('load_id');
      $table->string('mass_invoice_load_ids', 4000)->nullable()->after('mass_invoice_number');
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down() {
    Schema::table('qbd_invoices', function (Blueprint $table) {
      $table->dropColumn(['mass_invoice_number', 'mass_invoice_load_ids']);
    });
  }
}
