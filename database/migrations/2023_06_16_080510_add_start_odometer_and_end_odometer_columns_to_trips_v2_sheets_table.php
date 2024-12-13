<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddStartOdometerAndEndOdometerColumnsToTripsV2SheetsTable extends Migration {
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    Schema::table('trips_v2_sheets', function (Blueprint $table) {
      $table->decimal('start_odometer', 11, 2)->nullable()->after('total_hours');
      $table->decimal('end_odometer', 11, 2)->nullable()->after('start_odometer');
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down() {
    Schema::table('trips_v2_sheets', function (Blueprint $table) {
      $table->dropColumn(['start_odometer', 'end_odometer']);
    });
  }
}
