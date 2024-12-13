<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateLoadChargesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('load_charges', function (Blueprint $table) {
            $table->id();

            $table->unsignedBigInteger('load_id')->nullable()->comment('load id');

            $table->decimal('hauling_fees', 14, 2)->nullable()->comment('hauling fees amount');
            $table->decimal('fuel_surcharge', 14, 2)->nullable()->comment('fuel surcharge amount');
            $table->json('accessorial_fee')->nullable();
            $table->json('accessorial_deduction')->nullable();
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
        Schema::dropIfExists('load_charges');
    }
}
