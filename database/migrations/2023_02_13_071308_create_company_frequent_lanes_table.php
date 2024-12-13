<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCompanyFrequentLanesTable extends Migration {
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    Schema::create('company_frequent_lanes', function (Blueprint $table) {
      $table->id();
      $table->foreignId('company_id')->nullable()->constrained('admin_company_details')->nullOnDelete();
      $table->string('origin_street_address')->nullable();
      $table->string('origin_city')->nullable();
      $table->string('origin_state')->nullable();
      $table->decimal('origin_latitude', 8, 6)->nullable();
      $table->decimal('origin_longitude', 9, 6)->nullable();
      $table->string('dest_street_address')->nullable();
      $table->string('dest_city')->nullable();
      $table->string('dest_state')->nullable();
      $table->decimal('dest_latitude', 8, 6)->nullable();
      $table->decimal('dest_longitude', 9, 6)->nullable();
      $table->decimal('target_price', 8, 2)->nullable();
      $table->mediumInteger('target_weight')->nullable();
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
    Schema::dropIfExists('company_frequent_lanes');
  }
}
