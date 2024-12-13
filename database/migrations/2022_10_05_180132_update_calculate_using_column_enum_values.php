<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

class UpdateCalculateUsingColumnEnumValues extends Migration {
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    DB::statement("ALTER TABLE loads MODIFY COLUMN calculate_using ENUM('manual', 'google_maps', 'p')");
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down() {
    //
  }
}
