<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePublicIftaFuelTaxRatesTable extends Migration {
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    Schema::create('public_ifta_fuel_tax_rates', function (Blueprint $table) {
      $table->id();
      $table->string('state')->nullable();
      $table->unsignedSmallInteger('year')->nullable();
      $table->unsignedTinyInteger('quarter')->nullable();
      $table->decimal('tax_rate', 6, 4)->nullable();
      $table->timestamp('created_at')->nullable();
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down() {
    Schema::dropIfExists('public_ifta_fuel_tax_rates');
  }
}
