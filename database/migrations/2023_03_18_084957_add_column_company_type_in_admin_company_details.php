<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddColumnCompanyTypeInAdminCompanyDetails extends Migration {
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    Schema::table('admin_company_details', function (Blueprint $table) {
      $table->tinyInteger('company_type')->nullable()->comment("null means carrier, 2 means shipper, 3 means broker");
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down() {
    Schema::table('admin_company_details', function (Blueprint $table) {
      $table->dropColumn('company_type');
    });
  }
}
