<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddShippingAddressColumnInInvoicesTable extends Migration {
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    Schema::table('invoices', function (Blueprint $table) {
      $table->string('shipping_address')->nullable()->after('storage_file_name');
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down() {
    Schema::table('invoices', function (Blueprint $table) {
      $table->dropColumn('shipping_address');
    });
  }
}
