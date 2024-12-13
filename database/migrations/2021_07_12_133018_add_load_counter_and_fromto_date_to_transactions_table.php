<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddLoadCounterAndFromtoDateToTransactionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('transactions', function (Blueprint $table) {
            $table->date('from_date')->nullable()->comment('company subscription from date.');
            $table->date('to_date')->nullable()->comment('company subscription to date.');
            $table->integer('load_counter')->nullable()->comment('subscription from date to subscription to date between load counter');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('transactions', function (Blueprint $table) {
            $table->dropColumn(['from_date']);
            $table->dropColumn(['to_date']);
            $table->dropColumn(['load_counter']);
        });
    }
}
