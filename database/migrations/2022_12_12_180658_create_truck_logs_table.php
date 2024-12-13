<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTruckLogsTable extends Migration {
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    Schema::create('truck_logs', function (Blueprint $table) {
      $table->id();
      $table->foreignId('truck_id')->constrained('trucks')->cascadeOnDelete();
      $table->tinyInteger('type')->comment("1 for maintenance,  2 for load");
      $table->foreignId('load_log_id')->nullable()->constrained('load_logs')->cascadeOnDelete();
      $table->foreignId('maintenance_issue_log_id')->nullable()->constrained('maintenance_v2_issue_logs')->cascadeOnDelete();
      $table->timestamp('created_at')->nullable();
      $table->softDeletes();
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down() {
    Schema::dropIfExists('truck_logs');
  }
}
