<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class ChangeFreqIntervalFromTinyIntToSmallIntTable extends Migration {
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    Schema::table('automation_schedules', function (Blueprint $table) {
      $table->smallInteger('freq_interval')->nullable()->change();
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down() {
    Schema::table('automation_schedules', function (Blueprint $table) {
      $table->dropColumn('freq_interval');
    });
  }
}
