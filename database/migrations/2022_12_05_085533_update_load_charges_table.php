<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class UpdateLoadChargesTable extends Migration {
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    Schema::table('load_charges', function (Blueprint $table) {
      $table->decimal('hauling_fees_rate', 14, 4)->change();
      $table->decimal('fuel_surcharge_rate', 14, 4)->change();
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down() {
    Schema::table('load_charges', function (Blueprint $table) {
      $table->decimal('hauling_fees_rate', 14, 2)->change();
      $table->decimal('fuel_surcharge_rate', 14, 2)->change();
    });
  }
}
