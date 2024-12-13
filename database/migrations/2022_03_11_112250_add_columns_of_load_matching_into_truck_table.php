<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddColumnsOfLoadMatchingIntoTruckTable extends Migration {
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    Schema::table('trucks', function (Blueprint $table) {
      $table->string('reload_city')->nullable();
      $table->string('reload_state', 2)->nullable();
      $table->smallInteger('dh_origin')->nullable();
      $table->smallInteger('dh_destination')->nullable();
      $table->decimal('matching_target_price')->nullable();
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down() {
    Schema::table('trucks', function (Blueprint $table) {
      $table->dropColumn(['reload_city', 'reload_state', 'dh_origin',
        'dh_destination', 'matching_target_price']);
    });
  }
}