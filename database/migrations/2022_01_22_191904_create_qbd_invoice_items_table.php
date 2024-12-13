<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateQbdInvoiceItemsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('qbd_invoice_items', function (Blueprint $table) {
            $table->id();
            // $table->unsignedBigInteger('qbd_connection_id');
            $table->unsignedBigInteger('qbd_invoice_id');
            $table->unsignedBigInteger('qbd_item_id');

            $table->string('description', 255);
            $table->unsignedSmallInteger('quantity')->default(1);
            $table->double('amount');
            $table->string('quickbooks_txnlineid', 255)->nullable();
            $table->timestamps();

            // $table->foreign('qbd_connection_id')->references('id')->on('qbd_connections')->onDelete('cascade');
            $table->foreign('qbd_invoice_id')->references('id')->on('qbd_invoices')->onDelete('cascade');
            $table->foreign('qbd_item_id')->references('id')->on('qbd_items')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('qbd_invoice_items');
    }
}
