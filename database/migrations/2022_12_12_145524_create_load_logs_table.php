<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateLoadLogsTable extends Migration {
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    Schema::create('load_logs', function (Blueprint $table) {
      $table->id();
      $table->foreignId('load_id')->constrained('loads')->cascadeOnDelete();
      $table->tinyInteger('type'); /*1 for admin/dispatcher assigns vehicles to a load, 2 for driver assign vehicles to a load, 3 for driver arrive at shipper, 4 for driver loaded at shipper, 5 for driver arrive at receiver, 6 for driver unloaded at receiver.
      7 for driver click handed over button. 8 for sb creates a load, 9 for sb changed the load to generated invoice status, 10 for sb changed the load to payment requested status, 11 for sb changed the load to paid status. 12 for drop empty trailer, 13 for drop loaded trailer,
      14 for hook empty trailer, 15 for hook loaded trailer */
      $table->foreignId('load_driver_id')->nullable()->constrained('load_drivers')->nullOnDelete();
      $table->foreignId('truck_id')->nullable()->constrained('trucks')->cascadeOnDelete();
      $table->foreignId('trailer_id')->nullable()->constrained('trailers')->cascadeOnDelete();
      $table->foreignId('load_shipper_id')->nullable()->constrained('load_shippers')->cascadeOnDelete();
      $table->foreignId('load_receiver_id')->nullable()->constrained('load_receivers')->cascadeOnDelete();
      $table->string('truck_location')->nullable();
      $table->string('trailer_location')->nullable();
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
    Schema::dropIfExists('load_logs');
  }
}
