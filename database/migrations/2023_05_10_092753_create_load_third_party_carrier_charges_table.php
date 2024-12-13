<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateLoadThirdPartyCarrierChargesTable extends Migration {
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    Schema::create('load_third_party_carrier_charges', function (Blueprint $table) {
      $table->id();
      $table->foreignId('load_id')->constrained('loads')->cascadeOnDelete();
      $table->tinyInteger('hauling_fee_type')->nullable();
      $table->tinyInteger('fuel_surcharge_type')->nullable();
      $table->decimal('hauling_fee', 8, 2)->nullable();
      $table->decimal('fuel_surcharge', 8, 2)->nullable();
      $table->decimal('hauling_fee_rate', 10, 4)->nullable();
      $table->decimal('fuel_surcharge_rate', 10, 4)->nullable();
      $table->json('accessorial_fee')->nullable();
      $table->json('accessorial_deduction')->nullable();
      $table->timestamps();
      $table->softDeletes();
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down() {
    Schema::dropIfExists('load_third_party_carrier_charges');
  }
}
