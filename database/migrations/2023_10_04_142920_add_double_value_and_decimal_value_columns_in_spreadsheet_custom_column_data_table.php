<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddDoubleValueAndDecimalValueColumnsInSpreadsheetCustomColumnDataTable extends Migration {
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    Schema::table('spreadsheet_custom_column_data', function (Blueprint $table) {
      $table->double('double_value')->nullable()->after('value');
      $table->decimal('decimal_value', 19, 4)->nullable()->after('double_value');
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down() {
    Schema::table('spreadsheet_custom_column_data', function (Blueprint $table) {
      $table->dropColumn(['double_value', 'decimal_value']);
    });
  }
}
