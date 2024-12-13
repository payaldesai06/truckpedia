<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

class AddDriverCanAddNewTrailerColumnInAdminCompanyDetailsTable extends Migration {
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    Schema::table('admin_company_details', function (Blueprint $table) {
      $table->tinyInteger("driver_can_add_new_trailer")->default(1);
    });

    DB::transaction(function () {
      DB::table('admin_company_details')
        ->update(['driver_can_add_new_trailer' => 1]);
    });
  }
  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down() {
    Schema::table('admin_company_details', function (Blueprint $table) {
      $table->dropColumn('driver_can_add_new_trailer');
    });
  }
}
