<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddT3GeofenceIdColumnToSavedAddressesTable extends Migration {
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    Schema::table('saved_addresses', function (Blueprint $table) {
      $table->bigInteger('t3_geofence_id')->unsigned()->nullable();
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down() {
    Schema::table('saved_addresses', function (Blueprint $table) {
      $table->dropColumn('t3_geofence_id');
    });
  }
}
