<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTruckAvalRptSchedsTable extends Migration {
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    Schema::create('truck_aval_rpt_scheds', function (Blueprint $table) {
      $table->id();
      $table->foreignId('truck_id')->nullable()->constrained('trucks')->cascadeOnDelete();
      $table->tinyInteger('freq_type')->nullable()->comment('1=>weekly');
      $table->tinyInteger('d1')->nullable()->comment('1 if truck is available on this day. For weekly, it’s Monday.');
      $table->tinyInteger('d2')->nullable()->comment('1 if truck is available on this day. For weekly, it’s Tuesday.');
      $table->tinyInteger('d3')->nullable()->comment('1 if truck is available on this day. For weekly, it’s Wednesday.');
      $table->tinyInteger('d4')->nullable()->comment('1 if truck is available on this day. For weekly, it’s Thrusday.');
      $table->tinyInteger('d5')->nullable()->comment('1 if truck is available on this day. For weekly, it’s Friday.');
      $table->tinyInteger('d6')->nullable()->comment('1 if truck is available on this day. For weekly, it’s Saturday.');
      $table->tinyInteger('d7')->nullable()->comment('1 if truck is available on this day. For weekly, it’s Sunday.');
      $table->softDeletes();
      $table->timestamps();
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down() {
    Schema::dropIfExists('truck_aval_rpt_scheds');
  }
}
