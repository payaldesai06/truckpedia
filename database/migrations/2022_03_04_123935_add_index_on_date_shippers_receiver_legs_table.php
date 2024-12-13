<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddIndexOnDateShippersReceiverLegsTable extends Migration {
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    Schema::table('load_shippers', function (Blueprint $table) {
      $table->index('shipping_date');
    });

    Schema::table('load_receivers', function (Blueprint $table) {
      $table->index('delivery_date');
    });

    Schema::table('load_legs', function (Blueprint $table) {
      $table->index('date');
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down() {
    Schema::table('load_shippers', function (Blueprint $table) {
      $table->dropIndex('shipping_date');
    });

    Schema::table('load_receivers', function (Blueprint $table) {
      $table->dropIndex('delivery_date');
    });

    Schema::table('load_legs', function (Blueprint $table) {
      $table->dropIndex('date');
    });
  }
}