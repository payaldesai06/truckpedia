<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddLoadUniqueIdStartFromAndEmailToAdminCompanyDetailsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('admin_company_details', function (Blueprint $table) {
            $table->unsignedBigInteger('load_unique_id_started_from')->nullable()->comment('load unique id stating point');
            $table->string('email')->nullable();
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
            $table->dropColumn(['load_unique_id_started_from', 'email']);
        });
    }
}
