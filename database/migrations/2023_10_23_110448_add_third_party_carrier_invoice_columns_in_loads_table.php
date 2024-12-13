<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddThirdPartyCarrierInvoiceColumnsInLoadsTable extends Migration {
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    Schema::table('loads', function (Blueprint $table) {
      $table->string('third_party_carrier_invoice_original_file_name')
        ->after('third_party_carrier_bol_storage_file_name')->nullable();
      $table->string('third_party_carrier_invoice_storage_file_name')
        ->after('third_party_carrier_invoice_original_file_name')->nullable();
      $table->tinyInteger('third_party_carrier_invoice_status')->comment('1: paid')
        ->after('third_party_carrier_invoice_storage_file_name')->nullable();
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down() {
    Schema::table('loads', function (Blueprint $table) {
      $table->dropColumn([
        'third_party_carrier_invoice_original_file_name',
        'third_party_carrier_invoice_storage_file_name',
        'third_party_carrier_invoice_status'
      ]);
    });
  }
}
