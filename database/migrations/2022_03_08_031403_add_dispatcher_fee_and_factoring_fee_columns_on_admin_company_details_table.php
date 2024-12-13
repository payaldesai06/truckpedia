<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddDispatcherFeeAndFactoringFeeColumnsOnAdminCompanyDetailsTable extends Migration {
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    Schema::table('admin_company_details', function (Blueprint $table) {
      $table->boolean('show_dispatcher_fee_on_invoice')->default(false);
      $table->boolean('show_factoring_fee_on_invoice')->default(false);
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down() {
    Schema::table('admin_company_details', function (Blueprint $table) {
      $table->dropColumn(['show_dispatcher_fee_on_invoice',
        'show_factoring_fee_on_invoice']);
    });
  }
}