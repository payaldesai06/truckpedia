<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTripsV2TemplatePayDetailsTable extends Migration {
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    Schema::create('trips_v2_template_pay_details', function (Blueprint $table) {
      $table->id();
      $table->foreignId('trip_id')->constrained('trips_v2')->cascadeOnDelete();
      $table->foreignId('load_id')->nullable()->constrained('loads')->nullOnDelete();
      $table->foreignId('field_id')->nullable()->constrained('driver_pay_template_custom_fields')->nullOnDelete();
      $table->string('comment')->nullable();
      $table->decimal('payment', 8, 2)->nullable();
      $table->decimal('rate', 8, 2)->nullable();
      $table->decimal('qty', 10, 4)->nullable();
      $table->decimal('percentage_in_fractional', 5, 4)->nullable();
      $table->decimal('pay_start_after', 6, 2)->nullable();
      $table->softDeletes();
      $table->timestamps();
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down() {
    Schema::dropIfExists('trips_v2_template_pay_details');
  }
}
