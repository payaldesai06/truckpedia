<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddTripStartAndEndTimeColumnInTable extends Migration {
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    Schema::table('trips', function (Blueprint $table) {
      $table->time('trip_start_time')->after('trip_start_date')->nullable();
      $table->time('trip_end_time')->after('trip_end_date')->nullable();
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down() {
    Schema::table('trips', function (Blueprint $table) {
      $table->dropColumn(['trip_start_time', 'trip_end_time']);
    });
  }
}