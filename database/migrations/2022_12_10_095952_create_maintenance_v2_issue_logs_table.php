<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMaintenanceV2IssueLogsTable extends Migration {
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    Schema::create('maintenance_v2_issue_logs', function (Blueprint $table) {
      $table->id();
      $table->foreignId('issue_id')->constrained('maintenance_v2_issues')->cascadeOnDelete();
      $table->tinyInteger('new_status')->nullable()->comment('1 = reported, 2 = scheduled, 3 = in_service, 4 = completed.');
      $table->foreignId('modified_by_user_id')->nullable()->constrained('users')->cascadeOnDelete();
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
    Schema::dropIfExists('maintenance_v2_issue_logs');
  }
}
