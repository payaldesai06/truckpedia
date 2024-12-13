<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddTruckTypesInTruckAvalRptSchedsTable extends Migration {
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    Schema::table('truck_aval_rpt_scheds', function (Blueprint $table) {
      $table->tinyInteger('type_van')->after('end_time')->nullable();
      $table->tinyInteger('type_reefer')->after('type_van')->nullable();
      $table->tinyInteger('type_flatbed')->after('type_reefer')->nullable();
      $table->tinyInteger('type_step_deck')->after('type_flatbed')->nullable();
      $table->tinyInteger('type_power_only')->after('type_step_deck')->nullable();
      $table->tinyInteger('type_conestoga')->after('type_power_only')->nullable();
      $table->tinyInteger('type_box_truck')->after('type_conestoga')->nullable();
      $table->tinyInteger('type_sprinter')->after('type_box_truck')->nullable();
      $table->tinyInteger('type_drayage')->after('type_sprinter')->nullable();
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down() {
    Schema::table('truck_aval_rpt_scheds', function (Blueprint $table) {
      $table->dropColumn([
        'type_drayage', 'type_sprinter', 'type_box_truck', 'type_conestoga', 'type_power_only',
        'type_step_deck', 'type_flatbed', 'type_reefer', 'type_van'
      ]);
    });
  }
}
