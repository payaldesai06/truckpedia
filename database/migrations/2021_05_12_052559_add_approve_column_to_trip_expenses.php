<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddApproveColumnToTripExpenses extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('trip_expenses', function (Blueprint $table) {
            $table->string('approve_quantity_description')->nullable();
            $table->decimal('approve_cost', 14, 2)->nullable();
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
            $table->dropcolumn('approve_quantity_description');
            $table->dropcolumn('approve_cost');
        });
    }
}
