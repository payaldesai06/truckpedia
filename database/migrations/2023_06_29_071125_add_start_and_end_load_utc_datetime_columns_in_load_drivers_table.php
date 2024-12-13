<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddStartAndEndLoadUtcDatetimeColumnsInLoadDriversTable extends Migration {
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    Schema::table('load_drivers', function (Blueprint $table) {
      $table->dateTime('start_load_utc_datetime')->nullable()->after('status');
      $table->dateTime('end_load_utc_datetime')->nullable()->after('start_load_utc_datetime');
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down() {
    Schema::table('load_drivers', function (Blueprint $table) {
      $table->dropColumn(['start_load_utc_datetime', 'end_load_utc_datetime']);
    });
  }
}
