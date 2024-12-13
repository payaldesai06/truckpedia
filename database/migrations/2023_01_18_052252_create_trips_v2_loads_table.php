<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTripsV2LoadsTable extends Migration {
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    Schema::create('trips_v2_loads', function (Blueprint $table) {
      $table->id();
      $table->foreignId('trip_id')->constrained('trips_v2')->cascadeOnDelete();
      $table->foreignId('load_id')->constrained('loads')->cascadeOnDelete();
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
    Schema::dropIfExists('trips_v2_loads');
  }
}
