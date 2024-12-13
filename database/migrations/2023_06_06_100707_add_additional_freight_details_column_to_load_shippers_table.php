<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddAdditionalFreightDetailsColumnToLoadShippersTable extends Migration {
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    Schema::table('load_shippers', function (Blueprint $table) {
      $table->json('additional_freight_details')->nullable();
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down() {
    Schema::table('load_shippers', function (Blueprint $table) {
      $table->dropColumn('additional_freight_details');
    });
  }
}
