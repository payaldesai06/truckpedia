<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSpreadsheetSharedUsersTable extends Migration {
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    Schema::create('spreadsheet_shared_users', function (Blueprint $table) {
      $table->id();
      $table->unsignedBigInteger('spreadsheet_id');
      $table->foreign('spreadsheet_id')->references('id')->on('spreadsheets')->onDelete('cascade');
      $table->unsignedBigInteger('user_id');
      $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
      $table->tinyInteger('access_level')->nullable()->comment('1 is admin, 2 is editor, 3 is viewer and null means no access');
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
    Schema::dropIfExists('spreadsheet_shared_users');
  }
}
