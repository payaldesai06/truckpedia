<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\DB;

class AddNewTypeInsuranceCompanyInCustomersTable extends Migration {
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    DB::statement("ALTER TABLE customers MODIFY COLUMN `type`
      ENUM('customer','broker','factoring_companies','carrier','insurance_company')");
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down() {
  }
}
