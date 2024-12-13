<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateLoadImagesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('load_images', function (Blueprint $table) {
            $table->id();

            $table->unsignedBigInteger('load_driver_id')->nullable()->comment('load driver id');

            $table->string('image_name');
            $table->string('image_alias');
            $table->string('purpose')->comment('load_start_odometer, load_end_odometer, load_picked_up, load_delivered, load_handover_odometer, load_pod');

            $table->softDeletes();
            $table->timestamps();

            $table->foreign('load_driver_id')->references('id')->on('load_drivers')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('load_images');
    }
}
