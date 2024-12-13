<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddShipperReferenceToLoadShippers extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('load_shippers', function (Blueprint $table) {
            $table->string('shipper_reference')->nullable()->comment('lode details display moblie site key pickup no.');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('load_shippers', function (Blueprint $table) {
            $table->dropcolumn('shipper_reference');
        });
    }
}
