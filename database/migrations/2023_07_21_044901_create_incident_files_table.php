<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateIncidentFilesTable extends Migration {
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    Schema::create('incident_files', function (Blueprint $table) {
      $table->id();
      $table->foreignId('incident_id')->constrained('incidents')->cascadeOnDelete();
      $table->tinyInteger('is_private')->nullable()->comment('null is public, 1 is private');
      $table->string('original_filename')->nullable();
      $table->string('storage_filename')->nullable();
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
    Schema::dropIfExists('incident_files');
  }
}
