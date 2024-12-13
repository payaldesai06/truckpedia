<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddCompanyIdColumnToTripsV2SheetsTable extends Migration {
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    Schema::table('trips_v2_sheets', function (Blueprint $table) {
      $table->foreignId('company_id')->nullable()->after('id')
        ->constrained('admin_company_details')->nullOnDelete();
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down() {
    Schema::table('trips_v2_sheets', function (Blueprint $table) {
      $table->dropForeign('trips_v2_sheets_company_id_foreign');
      $table->dropColumn('company_id');
    });
  }
}
