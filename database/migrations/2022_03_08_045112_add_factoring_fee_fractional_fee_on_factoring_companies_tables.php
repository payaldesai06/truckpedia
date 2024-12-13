<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddFactoringFeeFractionalFeeOnFactoringCompaniesTables extends Migration {
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    Schema::table('factoring_companies', function (Blueprint $table) {
      $table->decimal('factoring_fee_fractional', 5, 4)->nullable();
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down() {
    Schema::table('factoring_companies', function (Blueprint $table) {
      $table->dropColumn(['factoring_fee_fractional']);
    });
  }
}