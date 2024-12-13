<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddLegColumnsOnDriverLoadTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('load_drivers', function (Blueprint $table) {
            $table->unsignedTinyInteger('from_leg')->after('trailer_id')->nullable();
            $table->unsignedTinyInteger('to_leg')->after('from_leg')->nullable();
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
            $table->dropcolumn(['to_leg', 'from_leg']);
        });
    }
}
