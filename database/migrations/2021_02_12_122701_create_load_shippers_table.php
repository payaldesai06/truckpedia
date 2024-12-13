<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateLoadShippersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('load_shippers', function (Blueprint $table) {
            $table->id();

            $table->unsignedBigInteger('load_id')->nullable()->comment('load id');

            $table->string('shipper_name')->nullable();
            $table->string('address')->nullable();
            $table->double('latitude')->nullable();
            $table->double('longitude')->nullable();
            $table->string('contact_person')->nullable();
            $table->string('contact_number')->nullable();
            $table->date('shipping_date')->nullable();
            $table->time('shipping_time')->nullable();

            $table->string('freight_description')->nullable();
            $table->string('freight_weight')->nullable();
            $table->integer('freight_qty')->nullable();
            $table->string('freight_length')->nullable();
            $table->string('freight_width')->nullable();
            $table->string('freight_height')->nullable();
            $table->string('freight_pickup_number')->nullable()
                ->comment('deprecated: we\'re using shipper_reference as pickup no# on mobile app');

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
        Schema::dropIfExists('load_shippers');
    }
}
