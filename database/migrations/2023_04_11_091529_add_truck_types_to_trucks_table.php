<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddTruckTypesToTrucksTable extends Migration {
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    Schema::table('trucks', function (Blueprint $table) {
      $table->tinyInteger('type_van')->nullable();
      $table->tinyInteger('type_reefer')->nullable();
      $table->tinyInteger('type_flatbed')->nullable();
      $table->tinyInteger('type_step_deck')->nullable();
      $table->tinyInteger('type_power_only')->nullable();
      $table->tinyInteger('type_conestoga')->nullable();
      $table->tinyInteger('type_box_truck')->nullable();
      $table->tinyInteger('type_sprinter')->nullable();
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down() {
    Schema::table('trucks', function (Blueprint $table) {
      $table->dropColumn([
        'type_sprinter', 'type_box_truck', 'type_conestoga', 'type_power_only',
        'type_step_deck', 'type_flatbed', 'type_reefer', 'type_van'
      ]);
    });
  }
}
