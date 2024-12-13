<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;

class Add8NewTypesInDriverDetailsTable extends Migration {

  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    //enum type column modify is not supported by laravel now so used db statement
    DB::statement(
      "ALTER TABLE driver_details CHANGE `type` `type` ENUM('employee','contractor','owner','temp', 'lowboy','end_dump','dump_truck','grinding','pneumatic','asphalt','concrete','other')"
    );
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down() {
  }
}
