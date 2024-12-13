<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddOrderColumnOnShipperLegReceiverTable extends Migration {
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    Schema::table('load_shippers', function (Blueprint $table) {
      $table->tinyInteger('order')->after('load_id')->nullable();
    });
    Schema::table('load_receivers', function (Blueprint $table) {
      $table->tinyInteger('order')->after('load_id')->nullable();
    });
    Schema::table('load_legs', function (Blueprint $table) {
      $table->tinyInteger('order')->after('load_id')->nullable();
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down() {
    Schema::table('load_shippers', function (Blueprint $table) {
      $table->dropColumn('order');
    });
    Schema::table('load_receivers', function (Blueprint $table) {
      $table->dropColumn('order');
    });
    Schema::table('load_legs', function (Blueprint $table) {
      $table->dropColumn('order');
    });
  }
}
