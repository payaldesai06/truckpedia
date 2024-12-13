<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddDriverCanSelectLoadsOnMobileInAdminCompanyDetailsTable extends Migration {
	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up() {
		Schema::table('admin_company_details', function (Blueprint $table) {
			$table->tinyInteger("driver_can_select_loads_on_mobile")->nullable();
		});
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down() {
		Schema::table('admin_company_details', function (Blueprint $table) {
			$table->dropColumn('driver_can_select_loads_on_mobile');
		});
	}
}
