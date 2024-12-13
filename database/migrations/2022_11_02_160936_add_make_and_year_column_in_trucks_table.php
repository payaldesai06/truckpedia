<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddMakeAndYearColumnInTrucksTable extends Migration {
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    Schema::table('trucks', function (Blueprint $table) {
      $table->string('make')->nullable()->after('truck_vin');
      $table->string('year')->nullable()->after('make');
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down() {
    Schema::table('trucks', function (Blueprint $table) {
      $table->dropColumn(['make', 'year']);
    });
  }
}
