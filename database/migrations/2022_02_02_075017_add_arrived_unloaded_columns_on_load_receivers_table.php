<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddArrivedUnloadedColumnsOnLoadReceiversTable extends Migration {
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    Schema::table('load_receivers', function (Blueprint $table) {
      $table->dateTime('arrived_local_datetime')->nullable();
      $table->decimal('arrived_latitude', 10, 8)->nullable();
      $table->decimal('arrived_longitude', 11, 8)->nullable();

      $table->dateTime('unloaded_local_datetime')->nullable();
      $table->decimal('unloaded_latitude', 10, 8)->nullable();
      $table->decimal('unloaded_longitude', 11, 8)->nullable();
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down() {
    Schema::table('load_receivers', function (Blueprint $table) {
      $table->dropColumn(['arrived_local_datetime', 'arrived_latitude',
        'arrived_longitude', 'unloaded_local_datetime', 'unloaded_latitude',
        'unloaded_longitude']);
    });
  }
}
