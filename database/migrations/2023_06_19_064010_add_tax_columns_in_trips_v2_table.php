<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddTaxColumnsInTripsV2Table extends Migration {
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    Schema::table('trips_v2', function (Blueprint $table) {
      $table->decimal('tax_federal_withholding', 6, 2)->nullable()->after('total_payment');
      $table->decimal('tax_social_security', 6, 2)->nullable()->after('tax_federal_withholding');
      $table->decimal('tax_medicare', 6, 2)->nullable()->after('tax_social_security');
      $table->decimal('net_payment', 8, 2)->nullable()->after('tax_medicare');
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down() {
    Schema::table('trips_v2', function (Blueprint $table) {
      $table->dropColumn(['tax_federal_withholding', 'tax_social_security', 'tax_medicare', 'net_payment']);
    });
  }
}
