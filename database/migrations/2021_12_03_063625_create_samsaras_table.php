<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSamsarasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('samsaras', function (Blueprint $table) {
            $table->primary(['company_id']);
            $table->unsignedBigInteger('company_id');
            $table->char('csrf_state', 40);
            $table->string('access_token', 4096)->nullable();
            $table->string('refresh_token', 512)->nullable();
            $table->timestamp('access_token_expires_at', $precision = 0)->nullable();
            $table->timestamps();
            $table->foreign('company_id')->references('id')->on('admin_company_details')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('samsaras');
    }
}