<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class
AddHaulingFeeQtyColumnToLoadChargesAndLoadThirdPartyCarrierChargesTable
  extends Migration {
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    Schema::table('load_charges', function (Blueprint $table) {
      $table->decimal('hauling_fee_qty', 6, 2)->nullable()
        ->after('hauling_fees_rate');
    });
    Schema::table('load_third_party_carrier_charges', function (Blueprint $table) {
      $table->decimal('hauling_fee_qty', 6, 2)->nullable()->after('hauling_fee_rate');
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down() {
    Schema::table('load_charges', function (Blueprint $table) {
      $table->dropColumn('hauling_fee_qty');
    });
    Schema::table('load_third_party_carrier_charges', function (Blueprint $table) {
      $table->dropColumn('hauling_fee_qty');
    });
  }
}
