<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSpreadsheetSheetsTable extends Migration {
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    Schema::create('spreadsheet_sheets', function (Blueprint $table) {
      $table->id();
      $table->unsignedBigInteger('spreadsheet_id');
      $table->foreign('spreadsheet_id')->references('id')->on('spreadsheets')->onDelete('cascade');
      $table->string('name')->nullable();
      $table->softDeletes();
      $table->timestamps();
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down() {
    Schema::dropIfExists('spreadsheet_sheets');
  }
}
