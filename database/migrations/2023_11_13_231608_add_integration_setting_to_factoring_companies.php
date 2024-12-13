<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddIntegrationSettingToFactoringCompanies extends Migration
{
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up()
  {
    Schema::table('factoring_companies', function (Blueprint $table) {
      $table->json('integration_settings')->after('integration_partner')->nullable();
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down()
  {
    Schema::table('factoring_companies', function (Blueprint $table) {
      $table->dropColumn('integration_settings');
    });
  }
}
