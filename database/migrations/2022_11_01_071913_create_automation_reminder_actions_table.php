<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAutomationReminderActionsTable extends Migration {
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    Schema::create('automation_reminder_actions', function (Blueprint $table) {
      $table->id();
      $table->unsignedBigInteger('automation_reminder_id');
      $table->foreign('automation_reminder_id')->references('id')->on('automation_reminders')->onDelete('cascade');
      $table->tinyInteger('action');
      $table->json('action_details')->nullable();
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
    Schema::dropIfExists('automation_reminder_actions');
  }
}
