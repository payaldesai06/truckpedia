<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddLevelToFcCustomFieldsTable extends Migration {
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    Schema::table('fc_custom_fields', function (Blueprint $table) {
      $table->tinyInteger('level')->nullable()->after('custom_type');
      $table->json('settings')->nullable()->after('record_link_submenu_id');
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down() {
    Schema::table('fc_custom_fields', function (Blueprint $table) {
      $table->dropColumn(['level', 'settings']);
    });
  }
}
