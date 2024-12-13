<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddShowDriverTruckOnPipelineAndShowQbdInvoiceSyncStatusOnListInAdminCompanyDetailsTable extends Migration {
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    Schema::table('admin_company_details', function (Blueprint $table) {
      $table->tinyInteger('show_driver_truck_on_pipeline')->nullable();
      $table->tinyInteger('show_qbd_invoice_sync_status_on_list')->nullable();
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down() {
    Schema::table('admin_company_details', function (Blueprint $table) {
      $table->dropColumn(['show_driver_truck_on_pipeline', 'show_qbd_invoice_sync_status_on_list']);
    });
  }
}
