<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSamsarasTruckIdsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('samsara_truck_ids', function (Blueprint $table) {
            $table->primary(['truck_id']);
            $table->unsignedBigInteger('truck_id');
            $table->unsignedBigInteger('samsara_id');
            $table->timestamps();
            $table->foreign('truck_id')->references('id')->on('trucks')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('samsaras_truck_ids');
    }
}
