<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMaintenanceV2IssueAttachmentsTable extends Migration {
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    Schema::create('maintenance_v2_issue_attachments', function (Blueprint $table) {
      $table->id();
      $table->unsignedBigInteger('maintenance_v2_issue_id');
      $table->foreign('maintenance_v2_issue_id')->references('id')->on('maintenance_v2_issues')->onDelete('cascade');
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
    Schema::dropIfExists('maintenance_v2_issue_attachments');
  }
}
