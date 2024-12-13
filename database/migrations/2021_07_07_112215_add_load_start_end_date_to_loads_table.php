<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddLoadStartEndDateToLoadsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('loads', function (Blueprint $table) {
            $table->dateTime('load_start_date')->nullable()->comment('driver start this load .');
            $table->dateTime('load_end_date')->nullable()->comment('driver deliver this load .');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('loads', function (Blueprint $table) {
            $table->dropColumn(['load_start_date']);
            $table->dropColumn(['load_end_date']);
        });
    }
}
