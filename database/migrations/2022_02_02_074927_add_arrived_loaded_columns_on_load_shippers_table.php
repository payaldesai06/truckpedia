<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddArrivedLoadedColumnsOnLoadShippersTable extends Migration {
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    Schema::table('load_shippers', function (Blueprint $table) {
      $table->dateTime('arrived_local_datetime')->nullable();
      $table->decimal('arrived_latitude', 10, 8)->nullable();
      $table->decimal('arrived_longitude', 11, 8)->nullable();

      $table->dateTime('loaded_local_datetime')->nullable();
      $table->decimal('loaded_latitude', 10, 8)->nullable();
      $table->decimal('loaded_longitude', 11, 8)->nullable();
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down() {
    Schema::table('load_shippers', function (Blueprint $table) {
      $table->dropColumn(['arrived_local_datetime', 'arrived_latitude',
        'arrived_longitude', 'loaded_local_datetime', 'loaded_latitude',
        'loaded_longitude']);
    });
  }
}
