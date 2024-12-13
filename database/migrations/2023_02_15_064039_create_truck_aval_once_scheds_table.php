<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTruckAvalOnceSchedsTable extends Migration {
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    Schema::create('truck_aval_once_scheds', function (Blueprint $table) {
      $table->id();
      $table->foreignId('truck_id')->constrained('trucks')->cascadeOnDelete();
      $table->date('start_date')->nullable();
      $table->date('end_date')->nullable();
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
    Schema::dropIfExists('truck_aval_once_scheds');
  }
}
