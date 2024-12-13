<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTrailerLogsTable extends Migration {
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    Schema::create('trailer_logs', function (Blueprint $table) {
      $table->id();
      $table->foreignId('trailer_id')->constrained('trailers')->cascadeOnDelete();
      $table->tinyInteger('type')->comment("1 for maintenance, 2 for load, 3 for drop empty trailer, 4 for drop loaded trailer, 5 for hook empty trailer, 6 for hook loaded trailer");
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
    Schema::dropIfExists('trailer_logs');
  }
}
