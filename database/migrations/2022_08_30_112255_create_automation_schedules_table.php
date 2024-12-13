<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAutomationSchedulesTable extends Migration {
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    Schema::create('automation_schedules', function (Blueprint $table) {
      $table->id();
      $table->unsignedBigInteger('company_id');
      $table->foreign('company_id')->references('id')->on('admin_company_details')->onDelete('cascade');
      $table->tinyInteger('freq_type')->comment(' 0 for once, 1 for day, 2 for week, 3 for month');
      $table->tinyInteger('freq_interval')->nullable();
      $table->string('selected_dates')->nullable()->comment('1 through 7 to represent Monday through Sunday. 1 through 31 to represent each day in a month, and 32 means the last day in a month.');
      $table->dateTime('next_run_utc_time')->nullable();
      $table->index('next_run_utc_time');
      $table->date('original_start_date');
      $table->time('original_start_time');
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
    Schema::dropIfExists('automation_schedules');
  }
}
