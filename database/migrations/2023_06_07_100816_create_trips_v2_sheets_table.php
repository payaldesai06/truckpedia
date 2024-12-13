<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTripsV2SheetsTable extends Migration {
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    Schema::create('trips_v2_sheets', function (Blueprint $table) {
      $table->id();
      $table->foreignId('user_id')->nullable()->constrained('users')->nullOnDelete();
      $table->foreignId('trip_id')->nullable()->constrained('trips_v2')->nullOnDelete();
      $table->tinyInteger('status')->nullable()->comment('1: started, 2: ended');
      $table->date('start_date')->nullable();
      $table->time('start_time')->nullable();
      $table->date('end_date')->nullable();
      $table->time('end_time')->nullable();
      $table->decimal('total_hours', 6, 2)->nullable();
      $table->string('notes', 2000)->nullable();
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
    Schema::dropIfExists('trips_v2_sheets');
  }
}
