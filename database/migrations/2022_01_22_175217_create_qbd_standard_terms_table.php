<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateQbdStandardTermsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('qbd_standard_terms', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('qbd_connection_id');

            $table->string('name', 255);
            $table->smallInteger('days');
            $table->string('quickbooks_listid', 255)->nullable();
            $table->string('quickbooks_editsequence', 255)->nullable();
            $table->string('quickbooks_errnum', 255)->nullable();
            $table->string('quickbooks_errmsg', 255)->nullable();
            $table->timestamps();

            $table->foreign('qbd_connection_id')->references('id')->on('qbd_connections')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('qbd_standard_terms');
    }
}
