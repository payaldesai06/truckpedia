<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAutomationRemindersTable extends Migration {
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    Schema::create('automation_reminders', function (Blueprint $table) {
      $table->id();
      $table->unsignedBigInteger('company_id');
      $table->foreign('company_id')->references('id')->on('admin_company_details')->onDelete('cascade');
      $table->tinyInteger('category');
      $table->tinyInteger('freq_type');
      $table->smallInteger('freq_interval')->nullable();
      $table->string('in_advance')->nullable();
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
    Schema::dropIfExists('automation_reminders');
  }
}
