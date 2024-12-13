<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddFuelCardNumberToTrucks extends Migration
{
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up()
  {
    Schema::table('trucks', function (Blueprint $table) {
      $table->string('fuel_card_number')->after('date_sold')
        ->nullable();
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down()
  {
    Schema::table('trucks', function (Blueprint $table) {
      $table->dropColumn(['fuel_card_number']);
    });
  }
}
