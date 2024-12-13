<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSamsaraTrailerIdsTable extends Migration {
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    Schema::create('samsara_trailer_ids', function (Blueprint $table) {
      $table->primary(['trailer_id']);
      $table->unsignedBigInteger('trailer_id');
      $table->unsignedBigInteger('samsara_id');
      $table->timestamps();
      $table->foreign('trailer_id')->references('id')->on('trailers')->onDelete('cascade');
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down() {
    Schema::dropIfExists('samsara_trailer_ids');
  }
}
