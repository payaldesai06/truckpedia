<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddReferredByCompanyIdColumnToAdminCompanyDetailsTable extends Migration {
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    Schema::table('admin_company_details', function (Blueprint $table) {
      $table->foreignId('referred_by_company_id')->nullable()->after('referral_code')
        ->constrained('admin_company_details')->nullOnDelete();
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down() {
    Schema::table('admin_company_details', function (Blueprint $table) {
      $table->dropForeign('admin_company_details_referred_by_company_id_foreign');
      $table->dropColumn('referred_by_company_id');
    });
  }
}
