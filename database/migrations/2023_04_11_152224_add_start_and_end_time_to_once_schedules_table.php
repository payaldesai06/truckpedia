<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddStartAndEndTimeToOnceSchedulesTable extends Migration {
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    Schema::table('truck_aval_once_scheds', function (Blueprint $table) {
      $table->time('end_time')->after('end_date')->nullable();
      $table->time('start_time')->after('end_date')->nullable();
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down() {
    Schema::table('truck_aval_once_scheds', function (Blueprint $table) {
      $table->dropColumn(['start_time', 'end_time']);
    });
  }
}
