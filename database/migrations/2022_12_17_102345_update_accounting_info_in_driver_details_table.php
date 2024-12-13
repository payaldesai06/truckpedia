<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class UpdateAccountingInfoInDriverDetailsTable extends Migration {
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    Schema::table('driver_details', function (Blueprint $table) {
      $table->tinyInteger('flat_pay_frequency')->nullable()->comment('1-weekly, 2-biweekly, 3-monthly');
      $table->decimal('flat_pay_rate', 8, 2)->nullable();
      $table->tinyInteger('payment_method')->nullable()->comment(' 1-check, 2-directDeposit');
      $table->string('financial_institution_name')->nullable();
      $table->string('account_number')->nullable();
      $table->string('routing_number')->nullable();
      $table->tinyInteger('tax_form')->nullable()->comment('1-w2, 2-1099');
      $table->tinyInteger('filing_status')->nullable()->comment('1-single, 2-marriedFilingJointly, 3-marriedFilingSeparately, 4-headOfHousehold, 5-qualifyingWidow');
      $table->tinyInteger('allowances')->nullable();
      $table->decimal('extra_withholding', 8, 2)->nullable();
      $table->tinyInteger('tax_medicare')->nullable();
      $table->tinyInteger('tax_advance_earned_income_credit')->nullable();
      $table->tinyInteger('tax_social_security')->nullable();
      $table->tinyInteger('tax_federal_unemployment_tax')->nullable();
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down() {
    Schema::table('driver_details', function (Blueprint $table) {
      $table->dropColumn([
        'flat_pay_frequency',
        'flat_pay_rate',
        'payment_method',
        'financial_institution_name',
        'account_number',
        'routing_number',
        'tax_form',
        'filing_status',
        'allowances',
        'extra_withholding',
        'tax_medicare',
        'tax_advance_earned_income_credit',
        'tax_social_security',
        'tax_federal_unemployment_tax',
      ]);
    });
  }
}
