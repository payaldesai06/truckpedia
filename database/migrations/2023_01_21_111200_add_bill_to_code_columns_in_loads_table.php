<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddBillToCodeColumnsInLoadsTable extends Migration {
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    Schema::table('loads', function (Blueprint $table) {
      $table->string('bill_to_code')->nullable();
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down() {
    Schema::table('loads', function (Blueprint $table) {
      $table->dropColumn('bill_to_code');
    });
  }
}
