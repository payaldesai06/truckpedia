<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMaintenancesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('maintenances', function (Blueprint $table) {
            $table->id();

            $table->unsignedBigInteger('company_id')->comment('admin company details id');
            $table->unsignedBigInteger('maintenance_type_id')->comment('maintenance types id');
            $table->string('asset_type')->comment('truck,trailer');
            $table->string('number');
            $table->date('date');
            $table->date('next_checkup_date');
            $table->double('cost', 10, 2)->nullable();
            $table->string('remark');

            $table->softDeletes();
            $table->timestamps();

            $table->foreign('company_id')->references('id')->on('admin_company_details')->onDelete('cascade');
            $table->foreign('maintenance_type_id')->references('id')->on('maintenance_types')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('maintenances');
    }
}
