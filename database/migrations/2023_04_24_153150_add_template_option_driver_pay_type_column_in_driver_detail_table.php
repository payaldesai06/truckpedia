<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;

class AddTemplateOptionDriverPayTypeColumnInDriverDetailTable extends Migration {
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    //enum type column modify is not supported by laravel now so used db statement
    DB::statement("ALTER TABLE `driver_details` CHANGE `driver_pay_types` `driver_pay_types` ENUM('per_mile','hourly','percentage', 'flat', 'template')");
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down() {
  }
}
