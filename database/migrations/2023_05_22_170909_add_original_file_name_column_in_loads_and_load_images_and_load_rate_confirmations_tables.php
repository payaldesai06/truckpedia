<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddOriginalFileNameColumnInLoadsAndLoadImagesAndLoadRateConfirmationsTables extends Migration {
  /**
   * Run the migrations.
   * @return void
   */
  public function up() {
    Schema::table('loads', function (Blueprint $table) {
      $table->string('invoice_original_file_name')->after('invoice_file_name')->nullable();
    });
    Schema::table('load_images', function (Blueprint $table) {
      $table->string('original_file_name')->nullable();
    });
    Schema::table('load_rate_confirmations', function (Blueprint $table) {
      $table->string('original_file_name')->nullable();
    });
  }

  /**
   * Reverse the migrations.
   * @return void
   */
  public function down() {
    Schema::table('loads', function (Blueprint $table) {
      $table->dropColumn('invoice_original_file_name');
    });
    Schema::table('load_images', function (Blueprint $table) {
      $table->dropColumn('original_file_name');
    });
    Schema::table('load_rate_confirmations', function (Blueprint $table) {
      $table->dropColumn('original_file_name');
    });
  }
}
