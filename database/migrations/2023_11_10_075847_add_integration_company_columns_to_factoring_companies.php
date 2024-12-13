<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddIntegrationCompanyColumnsToFactoringCompanies extends Migration {
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    Schema::table('factoring_companies', function (Blueprint $table) {
      $table->tinyInteger('integration_partner')->nullable()->comment('1: RTS');
      $table->string('integration_client_id')->nullable();
      $table->string('integration_username')->nullable();
      $table->string('integration_password')->nullable();
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down() {
    Schema::table('factoring_companies', function (Blueprint $table) {
      $table->dropColumn([
        'integration_partner',
        'integration_client_id',
        'integration_username',
        'integration_password'
      ]);
    });
  }
}
