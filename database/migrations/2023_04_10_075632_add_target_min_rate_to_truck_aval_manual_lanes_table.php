<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddTargetMinRateToTruckAvalManualLanesTable extends Migration {
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    Schema::table('truck_aval_manual_lanes', function (Blueprint $table) {
      $table->decimal('target_min_rate', 8, 2)->nullable()->after('target_rpm');
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down() {
    Schema::table('truck_aval_manual_lanes', function (Blueprint $table) {
      $table->dropColumn('target_min_rate');
    });
  }
}
