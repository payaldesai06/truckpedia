<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddInsuranceCompanyNameAndThirdPartyNameColumnsInIncidentsTable extends Migration {
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    Schema::table('incidents', function (Blueprint $table) {
      $table->string('deal_with_insurance_company_name')->after('deal_with_insurance_company_id')->nullable();
      $table->string('involved_third_party_name')->after('involved_third_party_id')->nullable();
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down() {
    Schema::table('incidents', function (Blueprint $table) {
      $table->dropColumn(['deal_with_insurance_company_name', 'involved_third_party_name']);
    });
  }
}
