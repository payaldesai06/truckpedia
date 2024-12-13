<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddSubscriptionRenewFrequencyColumnToAdminCompanyDetailsTable extends Migration {
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    Schema::table('admin_company_details', function (Blueprint $table) {
      $table->tinyInteger('subscription_renew_frequency')->nullable()->after('subscription_status');
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down() {
    Schema::table('admin_company_details', function (Blueprint $table) {
      $table->dropColumn('subscription_renew_frequency');
    });
  }
}
