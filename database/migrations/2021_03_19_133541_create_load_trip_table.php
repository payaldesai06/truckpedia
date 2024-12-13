<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateLoadTripTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('load_trip', function (Blueprint $table) {

            $table->primary(['load_id', 'trip_id']);
            $table->unsignedBigInteger('load_id');
            $table->unsignedBigInteger('trip_id');

            $table->softDeletes();
            $table->timestamps();

            $table->foreign('load_id')->references('id')->on('loads')->onDelete('cascade');
            $table->foreign('trip_id')->references('id')->on('trips')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('load_trip');
    }
}
