<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddDriverIdToTrips extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('trips', function (Blueprint $table) {
            $table->unsignedBigInteger('driver_one_id')->nullable()->comment('driver id');
            $table->unsignedBigInteger('driver_two_id')->nullable()->comment('co-driver id');
            $table->foreign('driver_one_id')->references('id')->on('users')->onDelete('cascade');
            $table->foreign('driver_two_id')->references('id')->on('users')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('trips', function (Blueprint $table) {
            $table->dropcolumn('driver_one_id');
            $table->dropcolumn('driver_two_id');
        });
    }
}
