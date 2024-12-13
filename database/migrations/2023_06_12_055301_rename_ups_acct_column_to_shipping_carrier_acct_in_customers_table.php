<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class RenameUpsAcctColumnToShippingCarrierAcctInCustomersTable extends Migration {
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    Schema::table('customers', function (Blueprint $table) {
      $table->renameColumn('ups_acct', 'shipping_carrier_acct');
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down() {
    Schema::table('customers', function (Blueprint $table) {
      $table->renameColumn('shipping_carrier_acct', 'ups_acct');
    });
  }
}
