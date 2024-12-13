<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddTaggedCustomerAndTaggedCustomerBillToCodeColumnsToSavedAddressesTable extends Migration {
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    Schema::table('saved_addresses', function (Blueprint $table) {
      $table->foreignId('tagged_customer_id')->nullable()->constrained('customers')->nullOnDelete();
      $table->string('tagged_customer_bill_to_code')->nullable();
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down() {
    Schema::table('saved_addresses', function (Blueprint $table) {
      $table->dropColumn(['tagged_customer_id', 'tagged_customer_bill_to_code']);
    });
  }
}
