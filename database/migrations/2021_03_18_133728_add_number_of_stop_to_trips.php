<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddNumberOfStopToTrips extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('trips', function (Blueprint $table) {
            $table->integer('number_of_stop')->nullable();
            $table->decimal('detention', 14, 2)->nullable();
            $table->decimal('layover', 14, 2)->nullable();
            $table->string('reimbursement')->nullable();
            $table->text('notes')->nullable();
            $table->decimal('total_hours', 14, 2)->nullable();
            $table->decimal('total_miles', 14, 2)->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('trips', function (Blueprint $table) {
            $table->dropcolumn('number_of_stop');
            $table->dropcolumn('detention');
            $table->dropcolumn('layover');
            $table->dropcolumn('reimbursement');
            $table->dropcolumn('notes');
            $table->dropcolumn('total_hours');
            $table->dropcolumn('total_miles');
        });
    }
}
