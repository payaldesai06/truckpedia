<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateIncidentNotesTable extends Migration {
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    Schema::create('incident_notes', function (Blueprint $table) {
      $table->id();
      $table->foreignId('incident_id')->constrained('incidents')->cascadeOnDelete();
      $table->date('local_date')->nullable();
      $table->time('local_time')->nullable();
      $table->string('note', 4000)->nullable();
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
    Schema::dropIfExists('incident_notes');
  }
}
