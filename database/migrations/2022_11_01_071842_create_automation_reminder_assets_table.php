<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAutomationReminderAssetsTable extends Migration {
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    Schema::create('automation_reminder_assets', function (Blueprint $table) {
      $table->id();
      $table->unsignedBigInteger('automation_reminder_id');
      $table->foreign('automation_reminder_id')->references('id')->on('automation_reminders')->onDelete('cascade');
      $table->tinyInteger('asset_type');
      $table->unsignedBigInteger('asset_original_id');
      $table->date('due_date')->nullable();
      $table->date('original_input_due_date')->nullable();
      $table->softDeletes();
      $table->timestamps();
      $table->index(['automation_reminder_id', 'due_date']);
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down() {
    Schema::dropIfExists('automation_reminder_assets');
  }
}
