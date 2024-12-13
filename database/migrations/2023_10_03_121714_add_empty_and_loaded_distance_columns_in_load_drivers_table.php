<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddEmptyAndLoadedDistanceColumnsInLoadDriversTable extends Migration {
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    Schema::table('load_drivers', function (Blueprint $table) {
      $table->decimal('empty_distance', 8, 4)->nullable();
      $table->decimal('loaded_distance', 8, 4)->nullable();
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down() {
    Schema::table('load_drivers', function (Blueprint $table) {
      $table->dropColumn(['empty_distance', 'loaded_distance']);
    });
  }
}
