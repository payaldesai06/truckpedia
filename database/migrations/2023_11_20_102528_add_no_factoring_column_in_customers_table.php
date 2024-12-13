<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddNoFactoringColumnInCustomersTable extends Migration {
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    Schema::table('customers', function (Blueprint $table) {
      $table->tinyInteger('no_factoring')->comment('1 means yes')->nullable();
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down() {
    Schema::table('customers', function (Blueprint $table) {
      $table->dropColumn('no_factoring');
    });
  }
}
