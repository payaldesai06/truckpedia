<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddRequestPaymentMergePdfsColumnInFactoringCompaniesTable extends Migration {
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    Schema::table('factoring_companies', function (Blueprint $table) {
      $table->tinyInteger('request_payment_merge_pdfs')->nullable()->after('phone_number');
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down() {
    Schema::table('factoring_companies', function (Blueprint $table) {
      $table->dropColumn(['request_payment_merge_pdfs']);
    });
  }
}