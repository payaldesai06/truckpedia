<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddFieldForTruckV2OnTrucksTable extends Migration {
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    Schema::table('trucks', function (Blueprint $table) {
      $table->foreignId('tag_id')->nullable()->constrained('tags')->nullOnDelete();
      $table->string('model')->nullable();
      $table->string('color')->nullable();
      $table->string('license_state')->nullable();
      $table->decimal('insurance_value', 11, 2)->nullable();
      $table->decimal('insurance_monthly_cost')->nullable();
      $table->decimal('insurance_total_cost')->nullable();
      $table->mediumInteger('odometer_at_purchase')->nullable();
      $table->tinyInteger('brake_type_front')->nullable()->comment('1 for Drum Brakes, 2 for Disc Brakes');
      $table->tinyInteger('brake_type_rear')->nullable()->comment('1 for Drum Brakes, 2 for Disc Brakes.');
      $table->string('speed_limit_pedal')->nullable();
      $table->string('speed_limit_cruise')->nullable();
      $table->string('fuel_tank_capacity')->nullable();
      $table->string('tire_size')->nullable();
      $table->tinyInteger('idle_shutoff')->nullable()->comment('1 for yes, null for no');
      $table->date('irp_expire_date')->nullable();
      $table->date('insurance_expire_date')->nullable();
      $table->string('ifta_decal_number')->nullable();
      $table->date('date_acquired')->nullable();
      $table->decimal('acquire_cost')->nullable();
      $table->date('payment_start_date')->nullable();
      $table->date('payment_end_date')->nullable();
      $table->decimal('interest_rate', 7, 6)->nullable();
      $table->string('lender')->nullable();
      $table->decimal('monthly_payment')->nullable();
      $table->string('contract_number')->nullable();
      $table->decimal('price_sold')->nullable();
      $table->date('date_sold')->nullable();
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down() {
    Schema::table('driver_details', function (Blueprint $table) {
      $table->dropColumn([
        'tag_id',
        'model',
        'color',
        'license_state',
        'insurance_value',
        'insurance_monthly_cost',
        'insurance_total_cost',
        'odometer_at_purchase',
        'brake_type_front',
        'brake_type_rear',
        'speed_limit_pedal',
        'speed_limit_cruise',
        'fuel_tank_capacity',
        'tire_size',
        'idle_shutoff',
        'irp_expire_date',
        'insurance_expire_date',
        'ifta_decal_number',
        'date_acquired',
        'acquire_cost',
        'payment_start_date',
        'payment_end_date',
        'interest_rate',
        'lender',
        'monthly_payment',
        'contract_number',
        'price_sold',
        'date_sold'
      ]);
    });
  }
}
