<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTransactionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('transactions', function (Blueprint $table) {

            $table->id();

            $table->unsignedBigInteger('admin_company_detail_id')->nullable()->comment('admin company detail id');

            $table->string('stripe_payment_method_id');
            $table->string('stripe_transaction_id')->nullable();

            $table->double('amount', 14, 2);
            $table->text('response')->nullable();


            $table->softDeletes();
            $table->timestamps();

            $table->foreign('admin_company_detail_id')->references('id')->on('admin_company_details')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('transactions');
    }
}
