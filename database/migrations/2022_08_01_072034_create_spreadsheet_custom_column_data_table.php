<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSpreadsheetCustomColumnDataTable extends Migration {
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    Schema::create('spreadsheet_custom_column_data', function (Blueprint $table) {
      $table->id();
      $table->unsignedBigInteger('spreadsheet_id');
      $table->foreign('spreadsheet_id')->references('id')->on('spreadsheets')->onDelete('cascade');
      $table->unsignedBigInteger('column_id');
      $table->foreign('column_id')->references('id')->on('spreadsheet_columns')->onDelete('cascade');
      $table->unsignedBigInteger('entity_id')->comment('load_id when key_entity == 1 (load)');
      $table->string('value', 2000)->nullable();
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
    Schema::dropIfExists('spreadsheet_custom_column_data');
  }
}
