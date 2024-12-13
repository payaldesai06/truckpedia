<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddOriginDeadheadDestDeadheadTargetRpmInCompanyFrequentLanesTable extends Migration {
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    Schema::table('company_frequent_lanes', function (Blueprint $table) {
      $table->smallInteger('origin_deadhead')->nullable()->after('origin_longitude');
      $table->smallInteger('dest_deadhead')->nullable()->after('dest_longitude');
      $table->decimal('target_rpm', 6, 4)->nullable()->after('target_price');
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down() {
    Schema::table('company_frequent_lanes', function (Blueprint $table) {
      $table->dropColumn(['origin_deadhead', 'dest_deadhead', 'target_rpm']);
    });
  }
}
