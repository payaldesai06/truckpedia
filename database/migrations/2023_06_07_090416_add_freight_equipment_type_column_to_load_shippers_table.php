<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddFreightEquipmentTypeColumnToLoadShippersTable extends Migration {
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    Schema::table('load_shippers', function (Blueprint $table) {
      $table->string('freight_equipment_type')->nullable()->after('shipping_end_time');
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down() {
    Schema::table('load_shippers', function (Blueprint $table) {
      $table->dropColumn('freight_equipment_type');
    });
  }
}
