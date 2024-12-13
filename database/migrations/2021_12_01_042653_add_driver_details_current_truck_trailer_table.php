<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddDriverDetailsCurrentTruckTrailerTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('driver_details', function (Blueprint $table) {
            $table->unsignedBigInteger('current_truck_id')->nullable();
            $table->unsignedBigInteger('current_trailer_id')->nullable();
            $table->foreign('current_truck_id')->references('id')->on('trucks')->onDelete('set null');
            $table->foreign('current_trailer_id')->references('id')->on('trailers')->onDelete('set null');
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
            $table->dropColumn(['current_truck_id', 'current_trailer_id']);
        });
    }
}
