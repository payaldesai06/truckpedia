<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddSegmentDistanceColumnInLoadMultiPurposeStopsTable extends Migration {
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    Schema::table('load_multi_purpose_stops', function (Blueprint $table) {
      $table->decimal('segment_distance', 8, 4)->nullable();
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down() {
    Schema::table('load_multi_purpose_stops', function (Blueprint $table) {
      $table->dropColumn('segment_distance');
    });
  }
}
