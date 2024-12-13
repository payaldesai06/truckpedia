<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddContainerHereColumnInStopsTable extends Migration {
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    Schema::table('load_shippers', function (Blueprint $table) {
      $table->tinyInteger('container_here')->nullable();
    });
    Schema::table('load_receivers', function (Blueprint $table) {
      $table->tinyInteger('container_here')->nullable();
    });
    Schema::table('load_legs', function (Blueprint $table) {
      $table->tinyInteger('container_here')->nullable();
    });
    Schema::table('load_multi_purpose_stops', function (Blueprint $table) {
      $table->tinyInteger('container_here')->nullable();
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down() {
    Schema::table('load_shippers', function (Blueprint $table) {
      $table->dropColumn('container_here');
    });
    Schema::table('load_receivers', function (Blueprint $table) {
      $table->dropColumn('container_here');
    });
    Schema::table('load_legs', function (Blueprint $table) {
      $table->dropColumn('container_here');
    });
    Schema::table('load_multi_purpose_stops', function (Blueprint $table) {
      $table->dropColumn('container_here');
    });
  }
}
