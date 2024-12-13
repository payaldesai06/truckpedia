<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddRoadTestCompletedDateAndExaminerColumnsInDriverDetailsTable extends Migration {
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    Schema::table('driver_details', function (Blueprint $table) {
      $table->date('road_test_completed_date')->nullable()->after('wc_ins_end_date');
      $table->string('road_test_completed_examiner')->nullable()->after('road_test_completed_date');
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down() {
    Schema::table('driver_details', function (Blueprint $table) {
      $table->dropColumn(['road_test_completed_date', 'road_test_completed_examiner']);
    });
  }
}
