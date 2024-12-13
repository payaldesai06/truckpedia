<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateIncidentEmailsTable extends Migration {
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    Schema::create('incident_emails', function (Blueprint $table) {
      $table->id();
      $table->foreignId('incident_id')->constrained('incidents')->cascadeOnDelete();
      $table->tinyInteger('type')->nullable()->comment('1 for sendOutFromEzpapel, 2 for recordOnly');
      $table->string('to')->nullable();
      $table->string('cc')->nullable();
      $table->string('bcc')->nullable();
      $table->string('fromName')->nullable();
      $table->string('from')->nullable();
      $table->string('replyTo')->nullable();
      $table->string('subject')->nullable();
      $table->string('content', 10000)->nullable();
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
    Schema::dropIfExists('incident_emails');
  }
}
