<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;

class AddCarrierOptionOnTypeColumnInCustomerTable extends Migration {
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    DB::statement("ALTER TABLE `customers` CHANGE `type` `type` ENUM('customer', 'broker', 'factoring_companies', 'carrier')");
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down() {
  }
}
