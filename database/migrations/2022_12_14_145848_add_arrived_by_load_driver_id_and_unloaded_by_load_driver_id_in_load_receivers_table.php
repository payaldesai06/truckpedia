<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddArrivedByLoadDriverIdAndUnloadedByLoadDriverIdInLoadReceiversTable extends Migration {
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    Schema::table('load_receivers', function (Blueprint $table) {
      $table->foreignId('arrived_by_load_driver_id')->after('arrived_longitude')->nullable()->constrained('load_drivers')->nullOnDelete();
      $table->foreignId('unloaded_by_load_driver_id')->after('unloaded_longitude')->nullable()->constrained('load_drivers')->nullOnDelete();
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down() {
    Schema::table('load_receivers', function (Blueprint $table) {
      $table->dropColumn([
        'arrived_by_load_driver_id', 'unloaded_by_load_driver_id'
      ]);
    });
  }
}
