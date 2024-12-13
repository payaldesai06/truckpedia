<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddTaskAutomationColumnsInAdminCompanyDetailsTable extends Migration {
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    Schema::table('admin_company_details', function (Blueprint $table) {
      $table->boolean('auto_send_status_updates_to_collaborators')->default(false);
      $table->boolean('auto_send_status_updates_to_dispatcher')->default(false);
      $table->boolean('auto_send_pod_to_collaborators')->default(false);
      $table->boolean('auto_send_detention_requests_to_collaborators')->default(false);
      $table->unsignedSmallInteger('detention_free_time_in_minutes')->default(120);
      $table->decimal('detention_charge_per_hour')->default(0);
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down() {
    Schema::table('admin_company_details', function (Blueprint $table) {
      $table->dropColumn([
        'auto_send_status_updates_to_collaborators',
        'auto_send_status_updates_to_dispatcher',
        'auto_send_pod_to_collaborators',
        'auto_send_detention_requests_to_collaborators',
        'detention_free_time_in_minutes',
        'detention_charge_per_hour',
      ]);
    });
  }
}
