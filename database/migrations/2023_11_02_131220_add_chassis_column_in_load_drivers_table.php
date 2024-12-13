<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddChassisColumnInLoadDriversTable extends Migration {
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    Schema::table('load_drivers', function (Blueprint $table) {
      $table->string('chassis')->after('trailer_id')->nullable();
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down() {
    Schema::table('load_drivers', function (Blueprint $table) {
      $table->dropColumn('chassis');
    });
  }
}
