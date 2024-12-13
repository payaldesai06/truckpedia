<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddFilterColumnToUserCustomizationTable extends Migration {
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    Schema::table('user_customizations', function (Blueprint $table) {
      $table->json('filters')->nullable()->after('show');
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down() {
    Schema::table('user_customizations', function (Blueprint $table) {
      $table->dropColumn('filters');
    });
  }
}
