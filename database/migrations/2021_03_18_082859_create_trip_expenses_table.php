<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTripExpensesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('trip_expenses', function (Blueprint $table) {
            $table->id();

            $table->unsignedBigInteger('expense_type_id')->comment('expense type id');
            $table->unsignedBigInteger('trip_id')->comment('trip id');

            $table->date('date');
            $table->string('quantity_description');
            $table->decimal('cost', 14, 2);
            $table->string('vendor_address');
            $table->enum('reimbursed', [0, 1]);

            $table->softDeletes();
            $table->timestamps();

            $table->foreign('expense_type_id')->references('id')->on('expense_types')->onDelete('cascade');
            $table->foreign('trip_id')->references('id')->on('trips')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('trip_expenses');
    }
}
