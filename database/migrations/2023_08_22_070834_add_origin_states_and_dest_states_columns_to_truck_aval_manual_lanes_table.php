<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddOriginStatesAndDestStatesColumnsToTruckAvalManualLanesTable
extends Migration {
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    Schema::table('truck_aval_manual_lanes', function (Blueprint $table) {
      $table->string('origin_zip_code')->nullable()->after('origin_state');
      $table->string('dest_zip_code')->nullable()->after('dest_state');
      for ($i = 1; $i <= 51; $i++) {
        $table->tinyInteger("origin_state_$i")->nullable();
        $table->tinyInteger("dest_state_$i")->nullable();
      }
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down() {
    Schema::table('truck_aval_manual_lanes', function (Blueprint $table) {
      $columns = ['origin_zip_code', 'dest_zip_code'];
      for ($i = 1; $i <= 51; $i++) {
        $columns[] = "origin_state_$i";
        $columns[] = "dest_state_$i";
      }
      $table->dropColumn($columns);
    });
  }
}
