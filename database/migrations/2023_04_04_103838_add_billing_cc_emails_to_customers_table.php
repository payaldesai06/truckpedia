<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddBillingCcEmailsToCustomersTable extends Migration {
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    Schema::table('customers', function (Blueprint $table) {
      $table->string('billing_cc_emails', 1000)->after('billing_email')->nullable();
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down() {
    Schema::table('customers', function (Blueprint $table) {
      $table->dropColumn('billing_cc_emails');
    });
  }
}
