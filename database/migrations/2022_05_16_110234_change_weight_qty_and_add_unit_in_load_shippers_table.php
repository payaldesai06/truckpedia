<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class ChangeWeightQtyAndAddUnitInLoadShippersTable extends Migration {
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    Schema::table('load_shippers', function (Blueprint $table) {
      $table->decimal('freight_weight', 12, 4)->change()->nullable();
      $table->tinyInteger('weight_unit')->nullable()->after('freight_weight');
      $table->decimal('freight_qty', 12, 4)->change()->nullable();
      $table->tinyInteger('qty_unit')->nullable()->after('freight_qty');
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down() {
    Schema::table('load_shippers', function (Blueprint $table) {
      $table->dropColumn(['weight_unit', 'qty_unit']);
    });
  }
}
