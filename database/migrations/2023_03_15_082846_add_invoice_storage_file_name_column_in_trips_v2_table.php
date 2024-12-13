<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddInvoiceStorageFileNameColumnInTripsV2Table extends Migration {
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    Schema::table('trips_v2', function (Blueprint $table) {
      $table->string('invoice_storage_file_name')->nullable()->after('paycheck_approved_by_user_id');
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down() {
    Schema::table('trips_v2', function (Blueprint $table) {
      $table->dropColumn('invoice_storage_file_name');
    });
  }
}
