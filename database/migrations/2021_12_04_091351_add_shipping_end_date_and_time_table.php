<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddShippingEndDateAndTimeTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('load_shippers', function (Blueprint $table) {
            $table->date('shipping_end_date')->after('shipping_date')->nullable();
            $table->time('shipping_end_time')->after('shipping_time')->nullable();
        });
        Schema::table('load_receivers', function (Blueprint $table) {
            $table->date('delivery_end_date')->after('delivery_date')->nullable();
            $table->time('delivery_end_time')->after('delivery_time')->nullable();
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
            $table->dropColumn(['shipping_end_date', 'shipping_end_time']);
        });
        Schema::table('load_receivers', function (Blueprint $table) {
            $table->dropColumn(['delivery_end_date', 'delivery_end_time']);
        });
    }
}
