<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddTaxFederalToTripsV2Table extends Migration
{
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    Schema::table('trips_v2', function (Blueprint $table) {
      $table->decimal('tax_federal', 6, 2)->after('tax_federal_withholding')->nullable();
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down() {
    Schema::table('trips_v2', function (Blueprint $table) {
      $table->dropColumn('tax_federal');
    });
  }
}
