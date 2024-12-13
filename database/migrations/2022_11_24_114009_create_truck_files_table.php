<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTruckFilesTable extends Migration {
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    Schema::create('truck_files', function (Blueprint $table) {
      $table->id();
      $table->foreignId('folder_id')->constrained('truck_folders')->cascadeOnDelete();
      $table->foreignId('truck_id')->constrained('trucks')->cascadeOnDelete();
      $table->string('original_filename')->nullable();
      $table->string('filename')->nullable();
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
    Schema::dropIfExists('truck_files');
  }
}
