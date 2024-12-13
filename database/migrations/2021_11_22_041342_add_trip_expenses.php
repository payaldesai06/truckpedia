<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddTripExpenses extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('trip_expenses', function (Blueprint $table) {
            $table->string('state')->after('vendor_address');
            $table->string('zip_code')->after('state');
            $table->decimal('diesel_gallons')->after('zip_code')->nullable();
            $table->decimal('diesel_price')->after('diesel_gallons')->nullable();
            $table->decimal('def_gallons')->after('diesel_price')->nullable();
            $table->decimal('def_price')->after('def_gallons')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('trip_expenses', function (Blueprint $table) {
            $table->dropColumn(['state', 'zip_code', 'diesel_gallons', 'diesel_price', 'def_gallons', 'def_price']);
        });
    }
}
