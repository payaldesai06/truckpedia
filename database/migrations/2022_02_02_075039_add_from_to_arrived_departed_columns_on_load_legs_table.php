<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddFromToArrivedDepartedColumnsOnLoadLegsTable extends Migration {
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    Schema::table('load_legs', function (Blueprint $table) {
      $table->dateTime('to_arrived_local_datetime')->nullable();
      $table->decimal('to_arrived_latitude', 10, 8)->nullable();
      $table->decimal('to_arrived_longitude', 11, 8)->nullable();

      $table->dateTime('to_departed_local_datetime')->nullable();
      $table->decimal('to_departed_latitude', 10, 8)->nullable();
      $table->decimal('to_departed_longitude', 11, 8)->nullable();

      $table->dateTime('from_arrived_local_datetime')->nullable();
      $table->decimal('from_arrived_latitude', 10, 8)->nullable();
      $table->decimal('from_arrived_longitude', 11, 8)->nullable();

      $table->dateTime('from_departed_local_datetime')->nullable();
      $table->decimal('from_departed_latitude', 10, 8)->nullable();
      $table->decimal('from_departed_longitude', 11, 8)->nullable();
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down() {
    Schema::table('load_legs', function (Blueprint $table) {
      $table->dropColumn([
        'to_arrived_local_datetime',
        'to_arrived_latitude', 'to_arrived_longitude',
        'to_departed_local_datetime',
        'to_departed_latitude', 'to_departed_longitude',
        'from_arrived_local_datetime',
        'from_arrived_latitude', 'from_arrived_longitude',
        'from_departed_local_datetime',
        'from_departed_latitude', 'from_departed_longitude',
      ]);
    });
  }
}
