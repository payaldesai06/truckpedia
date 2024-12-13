<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\DB;

class AddNewBannedStatusInCustomersTable extends Migration {
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    DB::statement("ALTER TABLE customers MODIFY COLUMN `status`
      ENUM('active','inactive','banned')");
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down() {
  }
}
