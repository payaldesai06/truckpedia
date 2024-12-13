<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddReloadCityLatLngColumnsInTrucksTable extends Migration {
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    Schema::table('trucks', function (Blueprint $table) {
      $table->decimal('reload_city_latitude', 10, 8)->after('reload_state')->nullable();
      $table->decimal('reload_city_longitude', 11, 8)->after('reload_city_latitude')->nullable();
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down() {
    Schema::table('trucks', function (Blueprint $table) {
      $table->dropColumn(['reload_city_latitude', 'reload_city_longitude']);
    });
  }
}
