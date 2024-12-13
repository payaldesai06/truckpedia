<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateKeepTruckinTruckIdsTable extends Migration {
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    Schema::create('keep_truckin_truck_ids', function (Blueprint $table) {
      $table->id();
      $table->unsignedBigInteger('truck_id');
      $table->unsignedBigInteger('keep_truckin_id');
      $table->timestamps();
      $table->foreign('truck_id')->references('id')->on('trucks')->onDelete('cascade');
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down() {
    Schema::dropIfExists('keep_truckin_truck_ids');
  }
}
