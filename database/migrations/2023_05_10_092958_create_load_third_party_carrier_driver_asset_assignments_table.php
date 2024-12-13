<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateLoadThirdPartyCarrierDriverAssetAssignmentsTable extends Migration {
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    Schema::create('load_third_party_carrier_driver_asset_assignments', function (Blueprint $table) {
      $table->id();
      $table->unsignedBigInteger('load_id');
      $table->foreign('load_id', 'ltpcdaa_load_id_foreign')->references('id')->on('loads')->onDelete('cascade');
      $table->string('truck_number')->nullable();
      $table->string('trailer_number')->nullable();
      $table->string('driver_name')->nullable();
      $table->string('driver_phone_number')->nullable();
      $table->timestamps();
      $table->softDeletes();
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down() {
    Schema::dropIfExists('load_third_party_carrier_driver_asset_assignments');
  }
}
