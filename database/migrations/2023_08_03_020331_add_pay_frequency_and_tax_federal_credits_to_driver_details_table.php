<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddPayFrequencyAndTaxFederalCreditsToDriverDetailsTable extends Migration
{
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up()
  {
    Schema::table('driver_details', function (Blueprint $table) {
      $table->tinyInteger('pay_frequency')->nullable()->comment('1 for "weekly", 2 for "biweekly", 3 for "monthly"');
      $table->decimal('tax_federal_credits', 8, 2)->nullable();
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down()
  {
    Schema::table('driver_details', function (Blueprint $table) {
      $table->dropColumn('pay_frequency');
      $table->dropColumn('tax_federal_credits');
    });
  }
}
