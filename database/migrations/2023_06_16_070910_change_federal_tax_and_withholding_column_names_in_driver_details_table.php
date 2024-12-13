<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class ChangeFederalTaxAndWithholdingColumnNamesInDriverDetailsTable extends Migration {
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    Schema::table('driver_details', function (Blueprint $table) {
      $table->renameColumn('tax_federal_unemployment_tax', 'tax_federal_tax');
      $table->renameColumn('extra_withholding', 'withholding');
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down() {
    Schema::table('driver_details', function (Blueprint $table) {
      $table->renameColumn('tax_federal_tax', 'tax_federal_unemployment_tax');
      $table->renameColumn('withholding', 'extra_withholding');
    });
  }
}
