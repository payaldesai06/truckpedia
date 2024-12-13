<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateLoadRateConfirmationsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('load_rate_confirmations', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('load_id');
            $table->string('file_name');
            $table->string('file_name_alias');
            $table->softDeletes();
            $table->timestamps();

            $table->foreign('load_id')->references('id')->on('loads')->cascadeOnDelete();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('load_rate_confirmations');
    }
}
