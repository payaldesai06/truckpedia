<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddFilterColumnInSpreadsheetSheetTable extends Migration {
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    Schema::table('spreadsheet_sheets', function (Blueprint $table) {
      $table->json('filter')->nullable()->after('name');
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down() {
    Schema::table('spreadsheet_sheets', function (Blueprint $table) {
      $table->dropColumn(['filter']);
    });
  }
}
