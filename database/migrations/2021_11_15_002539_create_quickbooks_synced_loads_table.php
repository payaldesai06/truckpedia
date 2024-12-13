<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateQuickbooksSyncedLoadsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('quickbooks_synced_loads', function (Blueprint $table) {
            $table->primary(['load_id']);
            $table->unsignedBigInteger('load_id');

            $table->string('qb_invoice_id');

            $table->timestamps();

            $table->foreign('load_id')->references('id')->on('loads')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('quickbooks_synced_loads');
    }
}
