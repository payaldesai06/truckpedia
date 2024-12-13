<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddIdTagToQuickbooksAuthTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('quickbooks_auth', function (Blueprint $table) {
            $table->dropForeign(['company_id']);
            $table->dropPrimary(['company_id']);
            $table->foreign('company_id')->references('id')->on('admin_company_details')->onDelete('cascade');
        });

        Schema::table('quickbooks_auth', function (Blueprint $table) {
            $table->id()->first();
            $table->unsignedBigInteger('tag_id')->after('company_id')->nullable();
            $table->foreign('tag_id')->references('id')->on('tags')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('quickbooks_auth', function (Blueprint $table) {
            $table->dropForeign(['tag_id']);
            $table->dropColumn(['id', 'tag_id']);
        });

        Schema::table('quickbooks_auth', function (Blueprint $table) {
            $table->primary('company_id');
        });
    }
}
