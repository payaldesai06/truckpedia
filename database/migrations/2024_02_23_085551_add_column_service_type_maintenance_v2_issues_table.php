<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddColumnServiceTypeMaintenanceV2IssuesTable extends Migration {
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    Schema::table('maintenance_v2_issues', function (Blueprint $table) {
      $table->foreignId('service_type_id')->nullable()->after('service_type')
        ->constrained('maintenance_v2_service_types')->nullOnDelete();
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down() {
    Schema::table('maintenance_v2_issues', function (Blueprint $table) {
      $table->dropForeign(['service_type_id']);
      $table->dropColumn('service_type_id');
    });
  }
}
