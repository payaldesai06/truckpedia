<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddMonthlyFeeColumnInAdminCompanyDetailsTable extends Migration {
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    Schema::table('admin_company_details', function (Blueprint $table) {
      $table->decimal('monthly_fee')->default(null)->nullable();
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down() {
    Schema::table('admin_company_details', function (Blueprint $table) {
      $table->dropColumn(['monthly_fee']);
    });
  }
}