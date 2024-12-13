<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddArrivedByLoadDriverIdAndLoadedByLoadDriverIdInLoadShippersTable extends Migration {
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    Schema::table('load_shippers', function (Blueprint $table) {
      $table->foreignId('arrived_by_load_driver_id')->after('arrived_longitude')->nullable()->constrained('load_drivers')->nullOnDelete();
      $table->foreignId('loaded_by_load_driver_id')->after('loaded_longitude')->nullable()->constrained('load_drivers')->nullOnDelete();
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
        'arrived_by_load_driver_id', 'loaded_by_load_driver_id'
      ]);
    });
  }
}
