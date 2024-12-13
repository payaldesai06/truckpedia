<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddColumnsLoadboardIntegrationAndIntegrationDataColumnsInLoadsTable extends Migration {
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    Schema::table('loads', function (Blueprint $table) {
      $table->tinyInteger('loadboard_integration')->nullable()->comment('1=>transplace');
      $table->json('loadboard_integration_data')->nullable();
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down() {
    Schema::table('loads', function (Blueprint $table) {
      $table->dropColumn(['loadboard_integration', 'loadboard_integration_data']);
    });
  }
}
