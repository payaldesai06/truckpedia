<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddCompanyEmployeeIdColumnInDriverDetailsTable extends Migration {
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    Schema::table('driver_details', function (Blueprint $table) {
      $table->string('company_employee_id')->nullable()->after('local_driver');
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down() {
    Schema::table('driver_details', function (Blueprint $table) {
      $table->dropColumn('company_employee_id');
    });
  }
}
