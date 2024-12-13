<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddStartAndEndTimeToRptSchedulesTable extends Migration {
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    Schema::table('truck_aval_rpt_scheds', function (Blueprint $table) {
      $table->time('end_time')->after('d7')->nullable();
      $table->time('start_time')->after('d7')->nullable();
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down() {
    Schema::table('truck_aval_rpt_scheds', function (Blueprint $table) {
      $table->dropColumn(['start_time', 'end_time']);
    });
  }
}
