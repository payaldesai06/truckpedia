<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAccessorialDeductionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('accessorial_deductions', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_id')->comment('user_id');
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
            $table->unsignedBigInteger('admin_company_detail_id')->nullable()->comment('admin company details id');
            $table->foreign('admin_company_detail_id')->references('id')->on('admin_company_details')->onDelete('cascade');
            $table->string('name');
            $table->string('description');
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
        Schema::dropIfExists('accessorial_deductions');
    }
}
