<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddPayToDriverDetails extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('driver_details', function (Blueprint $table) {
            $table->enum('driver_pay_types', [config('constant.driver_pay_type.per_mile'), config('constant.driver_pay_type.hourly'), config('constant.driver_pay_type.percentage')])->nullable();
            $table->decimal('per_mail_charges', 14, 2)->nullable()->comment('per_mile_charges');
            $table->decimal('pay_per_stop_rate', 14, 2)->nullable()->comment('per stop');
            $table->integer('pay_per_stop_start_after')->nullable()->comment('number of stop');
            $table->decimal('detention_rate', 14, 2)->nullable()->comment('per hours');
            $table->integer('detention_start_after')->nullable()->comment('in hours');
            $table->decimal('layover_rate', 14, 2)->nullable()->comment('per hours');
            $table->integer('layover_start_after')->nullable()->comment('in hours');
            $table->decimal('hourly_rate', 14, 2)->nullable();
            $table->integer('load_pay_percentage')->nullable();
            $table->enum('load_pay_percentage_of', [config('constant.load_pay_percentage_of.hauling_fees'), config('constant.load_pay_percentage_of.total_income'), config('constant.load_pay_percentage_of.hauling_plus_fuel_surcharge')])->nullable();
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
            $table->dropcolumn('driver_pay_types');
            $table->dropcolumn('per_mail_charges');
            $table->dropcolumn('pay_per_stop_rate');
            $table->dropcolumn('pay_per_stop_start_after');
            $table->dropcolumn('detention_rate');
            $table->dropcolumn('detention_start_after');
            $table->dropcolumn('layover_rate');
            $table->dropcolumn('layover_start_after');
            $table->dropcolumn('hourly_rate');
            $table->dropcolumn('load_pay_percentage');
            $table->dropcolumn('load_pay_percentage_of');
        });
    }
}
