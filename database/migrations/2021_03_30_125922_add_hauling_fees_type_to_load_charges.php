<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddHaulingFeesTypeToLoadCharges extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('load_charges', function (Blueprint $table) {
            $table->string('hauling_fees_type')->nullable()->comment('1.flat fee');
            $table->string('fuel_surcharge_type')->nullable()->comment('1.flat fee,2.percentage,3.per mile');
            $table->decimal('hauling_fees_rate', 14, 2)->nullable()->comment('hauling fees rate');
            $table->decimal('fuel_surcharge_rate', 14, 2)->nullable()->comment('fuel surcharge rate');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('load_charges', function (Blueprint $table) {

            $table->dropcolumn('hauling_fees_type');
            $table->dropcolumn('fuel_surcharge_type');
            $table->dropcolumn('hauling_fees_rate');
            $table->dropcolumn('fuel_surcharge_rate');
        });
    }
}
