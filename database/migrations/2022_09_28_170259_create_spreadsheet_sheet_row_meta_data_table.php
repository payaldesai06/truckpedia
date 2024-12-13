<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSpreadsheetSheetRowMetaDataTable extends Migration {
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    Schema::create('spreadsheet_sheet_row_meta_data', function (Blueprint $table) {
      $table->id();
      $table->unsignedBigInteger('sheet_id');
      $table->foreign('sheet_id')->references('id')->on('spreadsheet_sheets')->onDelete('cascade');
      $table->unsignedBigInteger('entity_id')->comment('1=load');
      $table->json('format')->nullable();
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
    Schema::dropIfExists('spreadsheet_sheet_row_meta_data');
  }
}
