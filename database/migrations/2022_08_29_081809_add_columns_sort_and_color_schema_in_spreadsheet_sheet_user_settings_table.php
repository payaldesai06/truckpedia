<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddColumnsSortAndColorSchemaInSpreadsheetSheetUserSettingsTable extends Migration {
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    Schema::table('spreadsheet_sheet_user_settings', function (Blueprint $table) {
      $table->json('sort_schema')->after('row_height')->nullable();
      $table->json('color_schema')->after('sort_schema')->nullable();
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down() {
    Schema::table('spreadsheet_sheet_user_settings', function (Blueprint $table) {
      $table->dropColumn(['sort_schema', 'color_schema']);
    });
  }
}
