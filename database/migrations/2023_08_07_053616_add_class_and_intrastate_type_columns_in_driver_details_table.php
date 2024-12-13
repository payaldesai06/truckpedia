<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddClassAndIntrastateTypeColumnsInDriverDetailsTable extends Migration {
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    Schema::table('driver_details', function (Blueprint $table) {
      $table->tinyInteger('driver_license_class')->nullable()
        ->comment('1 for A, 2 for B, 3 for C, 5 for E, 6 for F')
        ->after('original_driver_license_date');
      $table->tinyInteger('excepted_inter_intrastate_type')->nullable()
        ->comment('1 is nonExceptedInterstate to represent Non-excepted Interstate,
          2 is nonExceptedIntrastate to represent Non-excepted Intrastate,
          3 is exceptedInterstate to represent Excepted Interstate,
          4 is exceptedIntrastate to represent Excepted Intrastate')
        ->after('drug_pool');
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down() {
    Schema::table('driver_details', function (Blueprint $table) {
      $table->dropColumn(['driver_license_class', 'excepted_inter_intrastate_type']);
    });
  }
}
