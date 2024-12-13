<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSpreadsheetColumnsTable extends Migration {
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    Schema::create('spreadsheet_columns', function (Blueprint $table) {
      $table->id();
      $table->unsignedBigInteger('spreadsheet_id');
      $table->foreign('spreadsheet_id')->references('id')->on('spreadsheets')->onDelete('cascade');
      $table->string('name')->nullable();
      $table->tinyInteger('custom_type')->nullable()->comment('1=>text');
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
    Schema::dropIfExists('spreadsheet_columns');
  }
}
