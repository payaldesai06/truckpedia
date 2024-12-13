<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddQuoteValidUntilColumnInTruckAvailRptSchedTable extends Migration {
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    Schema::table('truck_aval_rpt_scheds', function (Blueprint $table) {
      $table->date('quote_valid_until')->after('end_time')->nullable();
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down() {
    Schema::table('truck_aval_rpt_scheds', function (Blueprint $table) {
      $table->dropColumn('quote_valid_until');
    });
  }
}
