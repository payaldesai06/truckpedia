<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAccessorialFeesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('accessorial_fees', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_id')->comment('admin id');
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
            $table->unsignedBigInteger('admin_company_detail_id')->comment('admin company details id');
            $table->foreign('admin_company_detail_id')->references('id')->on('admin_company_details')->onDelete('cascade');
            $table->string('name');
            $table->text('description');
            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('accessorial_fees');
    }
}
