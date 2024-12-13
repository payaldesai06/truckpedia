<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddOriginDeadheadDestDeadheadTargetRpmInTruckAvalManualLanesTable extends Migration {
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    Schema::table('truck_aval_manual_lanes', function (Blueprint $table) {
      $table->foreignId('truck_aval_once_sched_id')->nullable()->after('truck_aval_rpt_sched_id')->constrained('truck_aval_once_scheds')->cascadeOnDelete();
      $table->smallInteger('origin_deadhead')->nullable()->after('origin_longitude');
      $table->smallInteger('dest_deadhead')->nullable()->after('dest_longitude');
      $table->decimal('target_rpm', 6, 4)->nullable()->after('target_price');
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down() {
    Schema::table('truck_aval_manual_lanes', function (Blueprint $table) {
      $table->dropColumn(['truck_aval_once_sched_id', 'origin_deadhead', 'dest_deadhead', 'target_rpm']);
    });
  }
}
