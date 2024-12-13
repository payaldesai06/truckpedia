<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDatSearchCriteriaTable extends Migration {
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    Schema::create('dat_search_criteria', function (Blueprint $table) {
      $table->id();
      $table->unsignedBigInteger('user_id');
      $table->string('search_id')->nullable();
      $table->string('equipment_classes')->nullable();
      $table->enum('capacity', ['FULL', 'PARTIAL', 'BOTH'])->nullable();
      $table->smallInteger('max_length_in_feet')->nullable();
      $table->decimal('max_weight_in_pounds')->nullable();

      $table->string('origin_city')->nullable();
      $table->string('origin_state')->nullable();
      $table->decimal('origin_latitude', 10, 8)->nullable();
      $table->decimal('origin_longitude', 11, 8)->nullable();
      $table->smallInteger('origin_deadhead_miles')->nullable();

      $table->string('origin_states')->nullable();

      $table->string('destination_city')->nullable();
      $table->string('destination_state')->nullable();
      $table->decimal('destination_latitude', 10, 8)->nullable();
      $table->decimal('destination_longitude', 11, 8)->nullable();
      $table->smallInteger('destination_deadhead_miles')->nullable();

      $table->string('destination_states')->nullable();

      $table->string('availability_earliest')->nullable();
      $table->string('availability_latest')->nullable();
      $table->timestamp('expires_when')->nullable();
      $table->timestamps();

      $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down() {
    Schema::dropIfExists('dat_search_criteria');
  }
}
