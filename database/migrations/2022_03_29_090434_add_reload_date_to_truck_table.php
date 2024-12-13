<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddReloadDateToTruckTable extends Migration {
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    Schema::table('trucks', function (Blueprint $table) {
      $table->date('reload_date')->before('reload_city')->nullable();
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down() {
    Schema::table('trucks', function (Blueprint $table) {
      $table->dropColumn(['reload_date']);
    });
  }
}
