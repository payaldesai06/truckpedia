<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTruckReloadStatesTable extends Migration {
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    Schema::create('truck_reload_states', function (Blueprint $table) {
      $table->id();
      $table->unsignedBigInteger('truck_id');
      $table->string('reload_state', 2);
      $table->foreign('truck_id')->references('id')->on('trucks')->onDelete('cascade');
      $table->timestamps();
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down() {
    Schema::dropIfExists('truck_reload_states');
  }
}