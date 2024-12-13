<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddThirdPartyCarrierFourColumnsInLoadsTable extends Migration {
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    Schema::table('loads', function (Blueprint $table) {
      $table->foreignId('third_party_carrier_as_customer_id')->nullable()
        ->constrained('customers')->nullOnDelete();
      $table->decimal('third_party_carrier_sub_total', 8, 2)->nullable();
      $table->decimal('third_party_carrier_discount', 8, 2)->nullable();
      $table->decimal('third_party_carrier_total_amount', 8, 2)->nullable();
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down() {
    Schema::table('loads', function (Blueprint $table) {
      $table->dropColumn([
        'third_party_carrier_as_customer_id',
        'third_party_carrier_sub_total', 'third_party_carrier_discount',
        'third_party_carrier_total_amount'
      ]);
    });
  }
}
