<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddReceiverReferenceToLoadReceivers extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('load_receivers', function (Blueprint $table) {
            $table->string('receiver_reference')->nullable()->comment('lode details display moblie site key delivery no.');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('load_receivers', function (Blueprint $table) {
            $table->dropcolumn('receiver_reference');
        });
    }
}
