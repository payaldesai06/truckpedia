<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTripPaymentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('trip_payments', function (Blueprint $table) {
            $table->id();

            $table->unsignedBigInteger('trip_id')->comment('trip id');
            $table->unsignedBigInteger('driver_id')->comment('driver id');

            $table->decimal('reimbursement', 14, 2)->default(0);
            $table->decimal('load_payment', 14, 2)->default(0);
            $table->decimal('total_payment', 14, 2)->default(0);

            $table->text('notes')->nullable();

            $table->decimal('stop_charge', 14, 2)->default(0)->nullable();
            $table->decimal('detention_charge', 14, 2)->default(0)->nullable();
            $table->decimal('layover_charge', 14, 2)->default(0)->nullable();

            $table->enum('driver_pay_types', [config('constant.driver_pay_type.per_mile'), config('constant.driver_pay_type.hourly'), config('constant.driver_pay_type.percentage')])->nullable();
            $table->decimal('per_mile_charges', 14, 2)->nullable()->comment('per mile charges');;
            $table->decimal('pay_per_stop_rate', 14, 2)->nullable()->comment('per stop');
            $table->integer('pay_per_stop_start_after')->nullable()->comment('number of stop');
            $table->decimal('detention_rate', 14, 2)->nullable()->comment('per hours');
            $table->integer('detention_start_after')->nullable()->comment('in hours');
            $table->decimal('layover_rate', 14, 2)->nullable()->comment('per hours');
            $table->integer('layover_start_after')->nullable()->comment('in hours');
            $table->decimal('hourly_rate', 14, 2)->nullable();
            $table->integer('load_pay_percentage')->nullable();
            $table->enum('load_pay_percentage_of', [config('constant.load_pay_percentage_of.hauling_fees'), config('constant.load_pay_percentage_of.total_income'), config('constant.load_pay_percentage_of.hauling_plus_fuel_surcharge')])->nullable();

            $table->softDeletes();
            $table->timestamps();

            $table->foreign('trip_id')->references('id')->on('trips')->onDelete('cascade');
            $table->foreign('driver_id')->references('id')->on('users')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('trip_payments');
    }
}
