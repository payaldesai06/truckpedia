<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddDirectionColumnToLoadDriversTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('load_drivers', function (Blueprint $table) {
            $table->string('direction')
                ->nullable()
                ->comment('1) value will be inbound or outbound. 2) this field related to is final mile. 3) when is final nile is 1(true) then this field\'s value will be inbound or outbound. 4) this will be used for tracking. 5) this is not related to driver or load status.');
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
            $table->dropColumn('direction');
        });
    }
}
