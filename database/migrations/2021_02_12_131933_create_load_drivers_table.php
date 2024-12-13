<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateLoadDriversTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('load_drivers', function (Blueprint $table) {
            $table->id();

            $table->unsignedBigInteger('load_id')->nullable()->comment('load id');
            $table->unsignedBigInteger('truck_id')->nullable()->comment('truck id');
            $table->unsignedBigInteger('trailer_id')->nullable()->comment('trailer id');

            $table->text('notes')->nullable()->comment('driver will specify which driver should get paid how much.');
            $table->boolean('is_final_mile')->default(0)->nullable()->comment('It is only for tracking purpose. It has nothing to do with payment. This truck will only be visible on calender. All of the trucks assigned in the load will get paid.  If driver pay is percentage then there will not be more than one truck in the create load.');
            $table->boolean('drop_trailer')->default(0)->nullable()->comment('When driver leave the trailer at the delivery place then this filed 1 (true) otherwise 0(false)');
            $table->boolean('to_notify_driver')->default(0)->nullable()->comment('If checked then driver will get paid for that load and all checked will get notified and only of them has to click on accept and load will go intranist.');
            $table->string('driver_ids')->nullable();
            $table->string('status')->default(config('constant.status.load_driver.assign'))->nullable()->comment('1.assign : company assign new load,2.accepted : driver accept this load,3.delivered : driver deliver this load,4.handed_over : driver hand over load to other driver,5.load_started : driver has been started load,6.picked_up_load : driver has pick up this load,7.ready_to_handover : admin has change the driver when load driver status has start_load and above,8.end_load : driver has been end load');

            $table->softDeletes();
            $table->timestamps();

            $table->foreign('load_id')->references('id')->on('loads')->onDelete('cascade');
            $table->foreign('truck_id')->references('id')->on('trucks')->onDelete('cascade');
            $table->foreign('trailer_id')->references('id')->on('trailers')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('load_drivers');
    }
}
