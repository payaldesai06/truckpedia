<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateQbdInvoicesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('qbd_invoices', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('qbd_connection_id');
            $table->unsignedBigInteger('load_id');
            // $table->unsignedBigInteger('customer_id');

            // $table->string('invoice_number', 255);
            // $table->string('reference_number', 255);
            // $table->string('quickbooks_listid', 255)->nullable();
            $table->string('quickbooks_txnid', 255)->nullable();
            $table->string('quickbooks_editsequence', 255)->nullable();
            $table->string('quickbooks_errnum', 255)->nullable();
            $table->string('quickbooks_errmsg', 255)->nullable();
            $table->timestamps();

            $table->foreign('qbd_connection_id')->references('id')->on('qbd_connections')->onDelete('cascade');
            $table->foreign('load_id')->references('id')->on('loads')->onDelete('cascade');
            // $table->foreign('customer_id')->references('id')->on('customers')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('qbd_invoices');
    }
}
