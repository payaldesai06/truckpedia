<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddCustomDomainInAdminCompanyDetails extends Migration {
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    Schema::table('admin_company_details', function (Blueprint $table) {
      $table->string('custom_domain')->index()->nullable();
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down() {
    Schema::table('admin_company_details', function (Blueprint $table) {
      $table->dropColumn('custom_domain');
    });
  }
}