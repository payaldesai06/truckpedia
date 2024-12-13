<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddCcEmailsColumnsToCustomerTable extends Migration {
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    Schema::table('customers', function (Blueprint $table) {
      $table->string('cc_emails', 1000)->nullable()->after('email');
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down() {
    Schema::table('customers', function (Blueprint $table) {
      $table->dropColumn('cc_emails');
    });
  }
}
