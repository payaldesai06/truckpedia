<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddWidthColumnInSpreadsheetSheetColumnTable extends Migration {
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    Schema::table('spreadsheet_sheet_columns', function (Blueprint $table) {
      $table->string('width')->after('order')->nullable();
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down() {
    Schema::table('spreadsheet_sheet_columns', function (Blueprint $table) {
      $table->dropColumn(['width']);
    });
  }
}
