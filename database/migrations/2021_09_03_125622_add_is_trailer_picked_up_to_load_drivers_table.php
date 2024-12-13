<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddIsTrailerPickedUpToLoadDriversTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('load_drivers', function (Blueprint $table) {
            $table->tinyInteger('is_trailer_picked_up')
                ->default(0)
                ->comment('checking for is trailer picked up. (only for when drop trailer is true)');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('load_drivers', function (Blueprint $table) {
            $table->dropColumn(['is_trailer_picked_up']);
        });
    }
}
