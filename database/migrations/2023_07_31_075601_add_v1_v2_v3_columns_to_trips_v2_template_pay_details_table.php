<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddV1V2V3ColumnsToTripsV2TemplatePayDetailsTable extends Migration {
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    Schema::table('trips_v2_template_pay_details', function (Blueprint $table) {
      $table->decimal('v1', 6, 4)->nullable();
      $table->decimal('v2', 6, 4)->nullable();
      $table->decimal('v3', 6, 4)->nullable();
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down() {
    Schema::table('trips_v2_template_pay_details', function (Blueprint $table) {
      $table->dropColumn(['v1', 'v2', 'v3']);
    });
  }
}
