<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddGroupByToFcViewsTable extends Migration {
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    Schema::table('fc_views', function (Blueprint $table) {
      $table->json('group_by')->nullable()->after('ui_type');
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down() {
    Schema::table('fc_views', function (Blueprint $table) {
      $table->dropColumn('group_by');
    });
  }
}
