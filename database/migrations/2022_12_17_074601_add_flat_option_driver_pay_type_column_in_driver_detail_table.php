<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\DB;

class AddFlatOptionDriverPayTypeColumnInDriverDetailTable extends Migration {
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    DB::statement("ALTER TABLE `driver_details` CHANGE `driver_pay_types` `driver_pay_types` ENUM('per_mile','hourly','percentage', 'flat') CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL;");
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down() {
  }
}
