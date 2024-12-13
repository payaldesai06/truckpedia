<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSpreadsheetSheetColumnsTable extends Migration {
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    Schema::create('spreadsheet_sheet_columns', function (Blueprint $table) {
      $table->id();
      $table->unsignedBigInteger('sheet_id');
      $table->foreign('sheet_id')->references('id')->on('spreadsheet_sheets')->onDelete('cascade');
      $table->tinyInteger('order');
      $table->tinyInteger('predefined_column')->nullable();
      $table->unsignedBigInteger('custom_column_id')->nullable();
      $table->foreign('custom_column_id')->references('id')->on('spreadsheet_columns')->onDelete('cascade');
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
    Schema::dropIfExists('spreadsheet_sheet_columns');
  }
}
