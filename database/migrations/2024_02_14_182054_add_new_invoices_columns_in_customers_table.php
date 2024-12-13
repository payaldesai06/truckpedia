<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddNewInvoicesColumnsInCustomersTable extends Migration {
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    Schema::table('customers', function (Blueprint $table) {
      $table->tinyInteger('merge_invoice')->nullable();
      $table->tinyInteger('mass_invoice_use_individual_invoices')->nullable();
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down() {
    Schema::table('customers', function (Blueprint $table) {
      $table->dropColumn(['merge_invoice', 'mass_invoice_use_individual_invoices']);
    });
  }
}
