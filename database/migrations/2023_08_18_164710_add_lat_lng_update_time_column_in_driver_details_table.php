<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddLatLngUpdateTimeColumnInDriverDetailsTable extends Migration
{
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    Schema::table('driver_details', function (Blueprint $table) {
      $table->timestamp('lat_lng_update_time')->nullable()->after('longitude');
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down() {
    Schema::table('driver_details', function (Blueprint $table) {
      $table->dropColumn('lat_lng_update_time');
    });
  }
}
