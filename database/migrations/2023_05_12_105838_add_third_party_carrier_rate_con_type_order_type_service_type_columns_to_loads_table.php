<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddThirdPartyCarrierRateConTypeOrdertypeServiceTypeColumnsToLoadsTable extends Migration {
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    Schema::table('loads', function (Blueprint $table) {
      $table->tinyInteger('third_party_carrier_rate_con_type')->nullable()
        ->comment('1: OTR, 2: intermodal');
      $table->string('order_type')->nullable();
      $table->string('service_type')->nullable();
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down() {
    Schema::table('loads', function (Blueprint $table) {
      $table->dropColumn([
        'third_party_carrier_rate_con_type', 'order_type',
        'service_type'
      ]);
    });
  }
}
