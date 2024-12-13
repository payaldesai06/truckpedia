<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUserLocationLogsTable extends Migration {
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    Schema::create('user_location_logs', function (Blueprint $table) {
      $table->id();
      $table->foreignId('user_id')->constrained('users')->cascadeOnDelete();
      $table->tinyInteger('platform')->nullable()->comment('1 = iOS, 2 = Android');
      $table->timestamp('local_time')->nullable();
      $table->decimal('latitude', 8, 6)->nullable();
      $table->decimal('longitude', 9, 6)->nullable();
      $table->timestamp('created_at')->nullable();
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down() {
    Schema::dropIfExists('user_location_logs');
  }
}
