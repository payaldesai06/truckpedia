<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddNewFuelSurchargeColumnsInLoadChargesTable extends Migration {
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    Schema::table('load_charges', function (Blueprint $table) {
      $table->decimal('fuel_surcharge_v1', 6, 4)->nullable();
      $table->decimal('fuel_surcharge_v2', 6, 4)->nullable();
      $table->decimal('fuel_surcharge_v3', 6, 4)->nullable();
      $table->unsignedTinyInteger('fuel_surcharge_formula')->nullable();
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down() {
    Schema::table('load_charges', function (Blueprint $table) {
      $table->dropColumn([
        'fuel_surcharge_v1', 'fuel_surcharge_v2',
        'fuel_surcharge_v3', 'fuel_surcharge_formula',
      ]);
    });
  }
}
