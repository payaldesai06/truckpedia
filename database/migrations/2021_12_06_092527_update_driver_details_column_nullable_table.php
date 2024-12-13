<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class UpdateDriverDetailsColumnNullableTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('driver_details', function (Blueprint $table) {
            $table->string('type')->nullable()->change();
            $table->string('phone_number')->nullable()->change();
            $table->string('mailing_address')->nullable()->change();
            $table->string('driving_license')->nullable()->change();
            $table->string('issue_state')->nullable()->change();
            $table->string('medical_expire_date')->nullable()->change();
            $table->string('driving_license_expire_date')->nullable()->change();
            $table->string('contract_start_date')->nullable()->change();
            $table->string('contract_end_date')->nullable()->change();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('driver_details', function (Blueprint $table) {
            $table->string('type')->nullable(false)->change();
            $table->string('phone_number')->nullable(false)->change();
            $table->string('mailing_address')->nullable(false)->change();
            $table->string('driving_license')->nullable(false)->change();
            $table->string('issue_state')->nullable(false)->change();
            $table->string('medical_expire_date')->nullable(false)->change();
            $table->string('driving_license_expire_date')->nullable(false)->change();
            $table->string('contract_start_date')->nullable(false)->change();
            $table->string('contract_end_date')->nullable(false)->change();
        });
    }
}
