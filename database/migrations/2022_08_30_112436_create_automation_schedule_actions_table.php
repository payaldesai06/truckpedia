<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAutomationScheduleActionsTable extends Migration {
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    Schema::create('automation_schedule_actions', function (Blueprint $table) {
      $table->id();
      $table->unsignedBigInteger('automation_schedule_id');
      $table->foreign('automation_schedule_id')->references('id')->on('automation_schedules')->onDelete('cascade');
      $table->tinyInteger('action')->comment('1 for send an email, 2 for send available trucks link');
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
    Schema::dropIfExists('automation_schedule_actions');
  }
}
