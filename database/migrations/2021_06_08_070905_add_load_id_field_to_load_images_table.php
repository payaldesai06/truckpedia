<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddLoadIdFieldToLoadImagesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('load_images', function (Blueprint $table) {
            $table->unsignedBigInteger('load_id')->nullable()->comment('load id');

            $table->foreign('load_id')
                ->references('id')
                ->on('loads')
                ->cascadeOnDelete();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('load_images', function (Blueprint $table) {
            $table->dropColumn('load_id');
        });
    }
}
