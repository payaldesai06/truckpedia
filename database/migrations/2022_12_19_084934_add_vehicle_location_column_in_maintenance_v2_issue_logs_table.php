<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddVehicleLocationColumnInMaintenanceV2IssueLogsTable extends Migration {
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    Schema::table('maintenance_v2_issue_logs', function (Blueprint $table) {
      $table->string('vehicle_location')->nullable();
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down() {
    Schema::table('maintenance_v2_issue_logs', function (Blueprint $table) {
      $table->dropColumn(['vehicle_location']);
    });
  }
}
