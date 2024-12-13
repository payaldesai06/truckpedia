<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateLoadsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('loads', function (Blueprint $table) {
            $table->id();

            $table->unsignedBigInteger('customer_id')->nullable()->comment('customer id');
            $table->unsignedBigInteger('dispatcher_id')->nullable()->comment('dispatcher id');
            $table->unsignedBigInteger('admin_company_detail_id')->nullable()->comment('admin company detail id');
            $table->unsignedBigInteger('user_id')->nullable()->comment('admin id');

            $table->string('refrence_id')->nullable();
            $table->integer('load_unique_id')->nullable();
            $table->decimal('sub_total', 14, 2)->nullable();
            $table->decimal('discount', 14, 2)->nullable();
            $table->decimal('total_amount', 14, 2)->nullable();
            $table->string('status')->nullable()->comment('1.open : company create new load,2.assign : load assign to driver,3.in_transit : driver accept this load,4.delivery : driver deliver this load,5.invoice_create : load complete and generate invoice,6.payment_requested(invoice_sent) : invoice sent client ,7.paid : client can paid');
            $table->softDeletes();
            $table->timestamps();

            $table->foreign('customer_id')->references('id')->on('customers')->onDelete('cascade');
            $table->foreign('dispatcher_id')->references('id')->on('users')->onDelete('cascade');
            $table->foreign('admin_company_detail_id')->references('id')->on('admin_company_details')->onDelete('cascade');
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('loads');
    }
}
