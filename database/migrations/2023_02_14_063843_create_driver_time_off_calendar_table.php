<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDriverTimeOffCalendarTable extends Migration {
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    Schema::create('driver_time_off_calendar', function (Blueprint $table) {
      $table->id();
      $table->foreignId('user_id')->constrained('users')->cascadeOnDelete();
      $table->date('start_date')->nullable();
      $table->time('start_time')->nullable();
      $table->string('start_timezone')->nullable();
      $table->date('end_date')->nullable();
      $table->time('end_time')->nullable();
      $table->string('end_timezone')->nullable();
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
    Schema::dropIfExists('driver_time_off_calendar');
  }
}
