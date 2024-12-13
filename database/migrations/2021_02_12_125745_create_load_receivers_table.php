<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateLoadReceiversTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('load_receivers', function (Blueprint $table) {
            $table->id();

            $table->unsignedBigInteger('load_id')->nullable()->comment('load id');

            $table->string('receiver_name')->nullable();
            $table->string('address')->nullable();
            $table->double('latitude')->nullable();
            $table->double('longitude')->nullable();
            $table->string('contact_person')->nullable();
            $table->date('delivery_date')->nullable();
            $table->time('delivery_time')->nullable();

            $table->softDeletes();
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
        Schema::dropIfExists('load_receivers');
    }
}
