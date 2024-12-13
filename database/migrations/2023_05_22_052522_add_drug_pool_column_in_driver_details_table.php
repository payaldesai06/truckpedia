<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddDrugPoolColumnInDriverDetailsTable extends Migration {
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    Schema::table('driver_details', function (Blueprint $table) {
      $table->tinyInteger('drug_pool')->nullable()->comment('1 is yes, 2 is no')
        ->after('clearinghouse_expire_date');
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down() {
    Schema::table('driver_details', function (Blueprint $table) {
      $table->dropColumn('drug_pool');
    });
  }
}
