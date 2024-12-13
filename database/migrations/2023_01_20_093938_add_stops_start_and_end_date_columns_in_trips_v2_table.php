<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddStopsStartAndEndDateColumnsInTripsV2Table extends Migration {
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    Schema::table('trips_v2', function (Blueprint $table) {
      $table->date('stops_start_date')->nullable()->after('trip_number');
      $table->date('stops_end_date')->nullable()->after('stops_start_date');
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down() {
    Schema::table('trips_v2', function (Blueprint $table) {
      $table->dropColumn(['stops_end_date', 'stops_start_date']);
    });
  }
}
