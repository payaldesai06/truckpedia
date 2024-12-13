<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSpreadsheetSheetUserSettingsTable extends Migration {
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    Schema::create('spreadsheet_sheet_user_settings', function (Blueprint $table) {
      $table->id();
      $table->unsignedBigInteger('sheet_id');
      $table->foreign('sheet_id')->references('id')->on('spreadsheet_sheets')->onDelete('cascade');
      $table->unsignedBigInteger('user_id');
      $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
      $table->tinyInteger('row_height')->nullable()->comment('0 for short, 1 for medium, and 2 for tall');
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
    Schema::dropIfExists('spreadsheet_sheet_user_settings');
  }
}
