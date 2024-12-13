<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class UpdateTrailersTable extends Migration {
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    Schema::table('trailers', function (Blueprint $table) {
      $table->string('model')->nullable();
      $table->string('ride')->nullable();
      $table->string('width')->nullable();
      $table->string('tire_size')->nullable();
      $table->string('roof')->nullable();
      $table->string('license_state')->nullable();
      $table->tinyInteger('brake_type')->nullable()->comment('1 for Drum Brakes, 2 for Disc Brakes');
      $table->decimal('insurance_value', 11, 2)->nullable();
      $table->decimal('insurance_monthly_cost')->nullable();
      $table->decimal('insurance_total_cost')->nullable();
      $table->tinyInteger('plated_walls')->nullable()->comment('1 for yes, null for no');
      $table->tinyInteger('vented')->nullable()->comment('1 for yes, null for no');
      $table->tinyInteger('skirts')->nullable()->comment('1 for yes, null for no');
      $table->tinyInteger('rented_out')->nullable()->comment('1 for yes, null for no');
      $table->date('insurance_expire_date')->nullable();
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
    Schema::table('trailers', function (Blueprint $table) {
      $table->dropColumn([
        'model',
        'ride',
        'width',
        'tire_size',
        'roof',
        'license_state',
        'brake_type',
        'insurance_value',
        'insurance_monthly_cost',
        'insurance_total_cost',
        'plated_walls',
        'vented',
        'skirts',
        'rented_out',
        'insurance_expire_date',
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
