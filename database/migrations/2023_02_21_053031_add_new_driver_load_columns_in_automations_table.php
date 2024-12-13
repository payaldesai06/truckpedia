<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddNewDriverLoadColumnsInAutomationsTable extends Migration {
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    Schema::table('automations', function (Blueprint $table) {
      $table->tinyInteger('driver_start_load_customer')->nullable()->after('driver_start_load_collaborator');
      $table->tinyInteger('driver_shipper_arrived_customer')->nullable()->after('driver_shipper_arrived_collaborator');
      $table->tinyInteger('driver_shipper_loaded_customer')->nullable()->after('driver_shipper_loaded_collaborator');
      $table->tinyInteger('driver_receiver_arrived_customer')->nullable()->after('driver_receiver_arrived_collaborator');
      $table->tinyInteger('driver_receiver_unloaded_customer')->nullable()->after('driver_receiver_unloaded_collaborator');
      $table->tinyInteger('driver_end_load_customer')->nullable()->after('driver_end_load_collaborator');
      $table->tinyInteger('driver_upload_dispatcher')->nullable()->after('driver_end_load_emails');
      $table->tinyInteger('driver_upload_collaborator')->nullable()->after('driver_upload_dispatcher');
      $table->tinyInteger('driver_upload_customer')->nullable()->after('driver_upload_collaborator');
      $table->string('driver_upload_emails', 1000)->nullable()->comment('comma separated email addresses')->after('driver_upload_customer');
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down() {
    Schema::table('automations', function (Blueprint $table) {
      $table->dropColumn([
        'driver_start_load_customer', 'driver_shipper_arrived_customer', 'driver_shipper_loaded_customer', 'driver_receiver_arrived_customer', 'driver_receiver_unloaded_customer',
        'driver_end_load_customer', 'driver_upload_dispatcher', 'driver_upload_collaborator', 'driver_upload_customer', 'driver_upload_emails'
      ]);
    });
  }
}
