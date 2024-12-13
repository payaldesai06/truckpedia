<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTrailerFilesTable extends Migration {
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    Schema::create('trailer_files', function (Blueprint $table) {
      $table->id();
      $table->foreignId('folder_id')->constrained('trailer_folders')->cascadeOnDelete();
      $table->foreignId('trailer_id')->constrained('trailers')->cascadeOnDelete();
      $table->string('original_filename')->nullable();
      $table->string('filename')->nullable();
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
    Schema::dropIfExists('trailer_files');
  }
}
