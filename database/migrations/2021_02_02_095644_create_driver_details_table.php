<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDriverDetailsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('driver_details', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_id')->comment('user id');
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
            $table->unsignedBigInteger('owner_id')->comment('owner id');
            $table->foreign('owner_id')->references('id')->on('users')->onDelete('cascade');
            $table->enum('type', [config('constant.driver_type.employee'), config('constant.driver_type.contractor')]);
            $table->string('name');
            $table->string('phone_number');
            $table->string('mailing_address');
            $table->string('driving_license');
            $table->string('issue_state');
            $table->string('username')->unique();
            $table->string('medical_expire_date');
            $table->string('driving_license_expire_date');
            $table->string('contract_start_date');
            $table->string('contract_end_date');
            // $table->enum('status', [config('constant.status.driver.active'), config('constant.status.driver.inactive')]);
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
        Schema::dropIfExists('driver_details');
    }
}
