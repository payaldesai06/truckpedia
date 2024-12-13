<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMaintenanceAttachmentsTable extends Migration {
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    Schema::create('maintenance_attachments', function (Blueprint $table) {
      $table->id();
      $table->unsignedBigInteger('maintenance_id');
      $table->foreign('maintenance_id')->references('id')->on('maintenances')->onDelete('cascade');
      $table->string('attachment_name');
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
    Schema::dropIfExists('maintenance_attachments');
  }
}
