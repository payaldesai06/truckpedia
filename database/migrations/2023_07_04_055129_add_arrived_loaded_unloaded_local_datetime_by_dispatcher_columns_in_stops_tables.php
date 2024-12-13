<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddArrivedLoadedUnloadedLocalDatetimeByDispatcherColumnsInStopsTables extends Migration {
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    Schema::table('load_shippers', function (Blueprint $table) {
      $table->dateTime('arrived_local_datetime_by_dispatcher')
        ->after('arrived_local_datetime')->nullable();
      $table->dateTime('loaded_local_datetime_by_dispatcher')
        ->after('loaded_local_datetime')->nullable();
    });
    Schema::table('load_receivers', function (Blueprint $table) {
      $table->dateTime('arrived_local_datetime_by_dispatcher')
        ->after('arrived_local_datetime')->nullable();
      $table->dateTime('unloaded_local_datetime_by_dispatcher')
        ->after('unloaded_local_datetime')->nullable();
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down() {
    Schema::table('load_shippers', function (Blueprint $table) {
      $table->dropColumn([
        'arrived_local_datetime_by_dispatcher',
        'loaded_local_datetime_by_dispatcher'
      ]);
    });
    Schema::table('load_receivers', function (Blueprint $table) {
      $table->dropColumn([
        'arrived_local_datetime_by_dispatcher',
        'unloaded_local_datetime_by_dispatcher'
      ]);
    });
  }
}
