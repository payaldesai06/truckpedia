<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateLoadLegsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('load_legs', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('load_id');
            $table->unsignedTinyInteger('leg_order');
            $table->string('location_name', 255);
            $table->string('address', 255);
            $table->string('city', 255);
            $table->string('state', 255);
            $table->string('zip_code', 255);
            $table->decimal('latitude', 10, 8);
            $table->decimal('longitude', 11, 8);
            $table->date('date')->nullable();
            $table->date('end_date')->nullable();
            $table->time('time')->nullable();
            $table->time('end_time')->nullable();
            $table->string('contact_person', 255)->nullable();
            $table->string('contact_number', 255)->nullable();
            $table->string('note', 4000)->nullable();
            $table->timestamps();
            $table->foreign('load_id')->references('id')->on('loads')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('load_legs');
    }
}
