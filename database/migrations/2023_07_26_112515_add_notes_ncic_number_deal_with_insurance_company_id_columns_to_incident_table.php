<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddNotesNcicNumberDealWithInsuranceCompanyIdColumnsToIncidentTable extends Migration {
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    Schema::table('incidents', function (Blueprint $table) {
      $table->string('notes', 4000)->nullable()->after('closed_date');
      $table->string('ncic_number')->nullable()->after('third_party_incident_claim_number');
      $table->foreignId('deal_with_insurance_company_id')->nullable()->after('cost_amount')
        ->constrained('customers')->nullOnDelete();
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down() {
    Schema::table('incidents', function (Blueprint $table) {
      $table->dropForeign('incidents_deal_with_insurance_company_id_foreign');
      $table->dropColumn(['notes', 'ncic_number', 'deal_with_insurance_company_id']);
    });
  }
}
