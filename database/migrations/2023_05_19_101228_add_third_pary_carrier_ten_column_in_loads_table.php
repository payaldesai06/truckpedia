<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddThirdParyCarrierTenColumnInLoadsTable extends Migration {
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    Schema::table('loads', function (Blueprint $table) {
      $table->string('vessel')->nullable();
      $table->string('arrival_date')->nullable();
      $table->string('last_free_date')->nullable();
      $table->string('bol_number')->nullable();
      $table->string('picked_up_equipment_number')->nullable();
      $table->string('picked_up_equipment_type')->nullable();
      $table->string('picked_up_equipment_size')->nullable();
      $table->string('dropped_off_equipment_number')->nullable();
      $table->string('dropped_off_equipment_type')->nullable();
      $table->string('dropped_off_equipment_size')->nullable();
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down() {
    Schema::table('loads', function (Blueprint $table) {
      $table->dropColumn([
        'vessel', 'arrival_date', 'last_free_date', 'bol_number',
        'picked_up_equipment_number', 'picked_up_equipment_type', 'picked_up_equipment_size',
        'dropped_off_equipment_number', 'dropped_off_equipment_type', 'dropped_off_equipment_size'
      ]);
    });
  }
}
