<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddRecordDatesUiToFcViewsTable extends Migration {
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    Schema::table('fc_views', function (Blueprint $table) {
      $table->json('record_dates_for_ui')->nullable()->after('group_by');
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down() {
    Schema::table('fc_views', function (Blueprint $table) {
      $table->dropColumn('record_dates_for_ui');
    });
  }
}
