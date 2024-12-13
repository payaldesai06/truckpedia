<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddPercentageInFractionalColumnInInvoiceAdditionalCustomPayments extends Migration {
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    Schema::table('invoice_additional_custom_payments', function (Blueprint $table) {
      $table->decimal('percentage_in_fractional', 5, 4)->nullable()->after('payment');
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down() {
    Schema::table('invoice_additional_custom_payments', function (Blueprint $table) {
      $table->dropColumn('percentage_in_fractional');
    });
  }
}
