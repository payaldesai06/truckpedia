<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePublicWeeklyFuelPricesTable extends Migration {
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    Schema::create('public_weekly_fuel_prices', function (Blueprint $table) {
      $table->id();
      $table->date('release_date')->nullable();
      $table->decimal('price', 6, 4)->nullable();
      $table->timestamp('created_at')->nullable();
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down() {
    Schema::dropIfExists('public_weekly_fuel_prices');
  }
}
