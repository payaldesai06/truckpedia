<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCustomersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('customers', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_id')->comment('admin id');
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
            $table->enum('type', [config('constant.customer_type.customer'), config('constant.customer_type.broker'), config('constant.customer_type.factoring_companies')]);
            $table->string('company_name');
            $table->string('address');
            $table->string('state');
            $table->string('city');
            $table->string('zip_code');
            $table->string('primary_contact')->nullable();
            $table->string('phone_number')->nullable();
            $table->string('email')->nullable()->unique();
            $table->string('billing_address');
            $table->string('billing_state');
            $table->string('billing_city');
            $table->string('billing_zip_code');
            $table->string('billing_contact')->nullable();
            $table->string('billing_phone_number')->nullable();
            $table->string('billing_email')->unique();
            $table->integer('payment_terms_day');
            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('customers');
    }
}
