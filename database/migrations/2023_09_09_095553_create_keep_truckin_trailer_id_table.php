<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateKeepTruckinTrailerIdTable extends Migration {
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    Schema::create('keep_truckin_trailer_ids', function (Blueprint $table) {
      $table->id();
      $table->foreignId('trailer_id')->constrained('trailers')->cascadeOnDelete();
      $table->unsignedBigInteger('keep_truckin_id');
      $table->timestamps();
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down() {
    Schema::dropIfExists('keep_truckin_trailer_ids');
  }
}
