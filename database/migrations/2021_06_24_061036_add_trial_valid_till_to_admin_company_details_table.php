<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddTrialValidTillToAdminCompanyDetailsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('admin_company_details', function (Blueprint $table) {
            //
            $table->date('trial_valid_till')->nullable()->comment('company has trial valid till date.');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('admin_company_details', function (Blueprint $table) {
            $table->dropColumn(['trial_valid_till']);
        });
    }
}
