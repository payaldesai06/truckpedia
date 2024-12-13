<?php

use App\Models\AdminCompanyDetail;
use App\Models\Automation;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

class CreateAutomationsTable extends Migration {

  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    Schema::create('automations', function (Blueprint $table) {
      $table->id();
      $table->unsignedBigInteger('company_id');
      $table->foreign('company_id')->references('id')->on('admin_company_details')->onDelete('cascade');

      $table->tinyInteger('driver_start_load_dispatcher')->nullable();
      $table->tinyInteger('driver_start_load_collaborator')->nullable();
      $table->string('driver_start_load_emails', 1000)->nullable()->comment('comma separated email addresses');

      $table->tinyInteger('driver_shipper_arrived_dispatcher')->nullable();
      $table->tinyInteger('driver_shipper_arrived_collaborator')->nullable();
      $table->string('driver_shipper_arrived_emails', 1000)->nullable()->comment('comma separated email addresses');

      $table->tinyInteger('driver_shipper_loaded_dispatcher')->nullable();
      $table->tinyInteger('driver_shipper_loaded_collaborator')->nullable();
      $table->string('driver_shipper_loaded_emails', 1000)->nullable()->comment('comma separated email addresses');

      $table->tinyInteger('driver_receiver_arrived_dispatcher')->nullable();
      $table->tinyInteger('driver_receiver_arrived_collaborator')->nullable();
      $table->string('driver_receiver_arrived_emails', 1000)->nullable()->comment('comma separated email addresses');

      $table->tinyInteger('driver_receiver_unloaded_dispatcher')->nullable();
      $table->tinyInteger('driver_receiver_unloaded_collaborator')->nullable();
      $table->string('driver_receiver_unloaded_emails', 1000)->nullable()->comment('comma separated email addresses');

      $table->tinyInteger('driver_end_load_dispatcher')->nullable();
      $table->tinyInteger('driver_end_load_collaborator')->nullable();
      $table->string('driver_end_load_emails', 1000)->nullable()->comment('comma separated email addresses');

      $table->softDeletes();
      $table->timestamps();
    });

    DB::transaction(function () {
      $rows = AdminCompanyDetail::select(
        'id',
        'auto_send_status_updates_to_dispatcher',
        'auto_send_status_updates_to_collaborators',
        'auto_send_pod_to_collaborators'
      )->get();
      foreach ($rows as $row) {
        $data = [
          'company_id' => $row->id
        ];

        if ($row->auto_send_status_updates_to_dispatcher) {
          $data = array_merge($data, [
            'driver_start_load_dispatcher' => 1,
            'driver_shipper_arrived_dispatcher' => 1,
            'driver_shipper_loaded_dispatcher' => 1,
            'driver_receiver_arrived_dispatcher' => 1,
            'driver_receiver_unloaded_dispatcher' => 1,
          ]);
        }

        if ($row->auto_send_status_updates_to_collaborators) {
          $data = array_merge($data, [
            'driver_start_load_collaborator' => 1,
            'driver_shipper_arrived_collaborator' => 1,
            'driver_shipper_loaded_collaborator' => 1,
            'driver_receiver_arrived_collaborator' => 1,
            'driver_receiver_unloaded_collaborator' => 1,
          ]);
        }

        if ($row->auto_send_pod_to_collaborators) {
          $data = array_merge($data, [
            'driver_end_load_collaborator' => 1
          ]);
        }

        $data = array_merge($data, [
          // By our current setting, we always send POD to dispatcher.
          'driver_end_load_dispatcher' => 1
        ]);

        Automation::create($data);
      }
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down() {
    Schema::dropIfExists('automations');
  }
}
