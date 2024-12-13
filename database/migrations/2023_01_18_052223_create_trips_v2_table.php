<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTripsV2Table extends Migration {
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    Schema::create('trips_v2', function (Blueprint $table) {
      $table->id();
      $table->foreignId('company_id')->constrained('admin_company_details')->cascadeOnDelete();
      $table->foreignId('user_id')->constrained('users')->cascadeOnDelete();
      $table->bigInteger('trip_number');
      $table->tinyInteger('status')->comment('1->created, 2->approved');
      $table->tinyInteger('driver_pay_type')->nullable()->comment('1->per_mile, 2->hourly, 3->percentage, 4->flat, 5->template');
      $table->decimal('pay_percentage_in_fractional', 5, 4)->nullable();
      $table->tinyInteger('pay_percentage_of')->nullable()->comment('1->hauling_fees, 2->total_income, 3->hauling_plus_fuel_surcharge');
      $table->decimal('pay_percentage_load_amount', 8, 2)->nullable();
      $table->decimal('hourly_rate', 6, 2)->nullable();
      $table->decimal('total_hours', 6, 2)->nullable();
      $table->decimal('loaded_distance_rate', 4, 2)->nullable();
      $table->decimal('total_loaded_distance', 10, 4)->nullable();
      $table->decimal('empty_distance_rate', 4, 2)->nullable();
      $table->decimal('total_empty_distance', 10, 4)->nullable();
      $table->decimal('stop_rate', 6, 2)->nullable();
      $table->smallInteger('stop_count')->nullable();
      $table->smallInteger('stop_pay_start_after')->nullable();
      $table->decimal('stop_payment', 6, 2)->nullable();
      $table->decimal('detention_rate', 6, 2)->nullable();
      $table->decimal('detention_in_hours', 6, 2)->nullable();
      $table->decimal('detention_pay_start_after', 6, 2)->nullable();
      $table->decimal('detention_payment', 6, 2)->nullable();
      $table->decimal('layover_rate', 6, 2)->nullable();
      $table->decimal('layover_in_hours', 6, 2)->nullable();
      $table->decimal('layover_pay_start_after', 6, 2)->nullable();
      $table->decimal('layover_payment', 6, 2)->nullable();
      $table->decimal('load_payment', 8, 2)->nullable();
      $table->decimal('reimbursement', 8, 2)->nullable();
      $table->decimal('total_payment', 8, 2)->nullable();
      $table->string('notes', 4000)->nullable();
      $table->dateTime('paycheck_approved_utc_datetime')->nullable();
      $table->foreignId('paycheck_approved_by_user_id')->nullable()->constrained('users')->cascadeOnDelete();
      $table->timestamps();
      $table->softDeletes();
      $table->index(['company_id', 'trip_number']);
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down() {
    Schema::dropIfExists('trips_v2');
  }
}
