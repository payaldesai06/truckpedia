<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTripsV2AdditionalCustomPaymentsTable extends Migration {
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    Schema::create('trips_v2_additional_custom_payments', function (Blueprint $table) {
      $table->id();
      $table->foreignId('trip_id')->constrained('trips_v2')->cascadeOnDelete();
      $table->foreignId('field_id')->constrained('trips_v2_custom_payment_fields')->cascadeOnDelete();
      $table->decimal('payment', 8, 2)->nullable();
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
    Schema::dropIfExists('trips_v2_additional_custom_payments');
  }
}
