<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddStartLocationFieldsToLoadDriversTable extends Migration {
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    Schema::table('load_drivers', function (Blueprint $table) {
      $table->string('start_location_address')->nullable();
      $table->string('start_location_city')->nullable();
      $table->string('start_location_state')->nullable();
      $table->string('start_location_zip_code')->nullable();
      $table->decimal('start_location_latitude', 8, 6)->nullable();
      $table->decimal('start_location_longitude', 9, 6)->nullable();
      $table->decimal('start_location_distance', 8, 4)->nullable();
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down() {
    Schema::table('load_drivers', function (Blueprint $table) {
      $table->dropColumn([
        'start_location_address', 'start_location_city',
        'start_location_state', 'start_location_zip_code',
        'start_location_latitude', 'start_location_longitude',
        'start_location_distance'
      ]);
    });
  }
}
