<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddLoadedDistanceAndEmptyDistanceColumnInTripsV2LoadsTable extends Migration {
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    Schema::table('trips_v2_loads', function (Blueprint $table) {
      $table->decimal('loaded_distance', 8, 4)->nullable()->after('load_id');
      $table->decimal('empty_distance', 8, 4)->nullable()->after('loaded_distance');
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down() {
    Schema::table('trips_v2_loads', function (Blueprint $table) {
      $table->dropColumn(['loaded_distance', 'empty_distance']);
    });
  }
}
