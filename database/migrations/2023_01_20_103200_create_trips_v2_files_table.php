<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTripsV2FilesTable extends Migration {
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    Schema::create('trips_v2_files', function (Blueprint $table) {
      $table->id();
      $table->foreignId('trip_id')->constrained('trips_v2')->cascadeOnDelete();
      $table->string('original_file_name')->nullable();
      $table->string('storage_file_name')->nullable()->comment('the name on S3');
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
    Schema::dropIfExists('trips_v2_files');
  }
}
