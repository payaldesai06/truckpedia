<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTrucksTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('trucks', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_id')->comment('admin id');
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
            // $table->foreignId('user_id')->constrained()->cascadeOnDelete();
            $table->string('number');
            $table->string('type')->nullable();
            $table->string('licence_plate')->nullable();
            $table->date('licence_plate_expiry')->nullable();
            $table->date('inspection_expiry')->nullable();
            $table->enum('status', ['active', 'inactive'])->nullable();
            $table->enum('ownership', ['company_truck', 'owner_operator', 'leased'])->nullable();
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
        Schema::dropIfExists('trucks');
    }
}
