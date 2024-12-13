<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddPercentageOfColumnInInvoiceCustomPaymentFields extends Migration {
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    Schema::table('invoice_custom_payment_fields', function (Blueprint $table) {
      $table->tinyInteger('percentage_of')->nullable()->comment('1->subtotal')->after('description');
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down() {
    Schema::table('invoice_custom_payment_fields', function (Blueprint $table) {
      $table->dropColumn('percentage_of');
    });
  }
}
