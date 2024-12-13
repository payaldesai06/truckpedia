<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddCompanyIdToQuickbooksSyncedLoadsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('quickbooks_synced_loads', function (Blueprint $table) {
            $table->unsignedBigInteger('company_id');

            $table->foreign('company_id')->references('id')->on('admin_company_details')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('quickbooks_synced_loads', function (Blueprint $table) {
            $table->dropColumn(['company_id']);
        });
    }
}
