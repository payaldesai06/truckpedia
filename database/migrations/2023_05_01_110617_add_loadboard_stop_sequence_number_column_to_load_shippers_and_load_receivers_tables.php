<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddLoadboardStopSequenceNumberColumnToLoadShippersAndLoadReceiversTables extends Migration {
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    Schema::table('load_shippers', function (Blueprint $table) {
      $table->smallInteger('loadboard_stop_sequence_number')->nullable();
    });

    Schema::table('load_receivers', function (Blueprint $table) {
      $table->smallInteger('loadboard_stop_sequence_number')->nullable();
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down() {
    Schema::table('load_shippers', function (Blueprint $table) {
      $table->dropColumn('loadboard_stop_sequence_number');
    });

    Schema::table('load_receivers', function (Blueprint $table) {
      $table->dropColumn('loadboard_stop_sequence_number');
    });
  }
}
