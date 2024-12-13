<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddRollupFieldsToFcCustomFields extends Migration {
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    Schema::table('fc_custom_fields', function (Blueprint $table) {
      $table->tinyInteger('rollup_target_predefined_field')->nullable()->after('record_link_submenu_id');
      $table->foreignId('rollup_target_field_id')->nullable()->after('record_link_submenu_id')->constrained('fc_custom_fields')->nullOnDelete();
      $table->foreignId('rollup_target_submenu_id')->nullable()->after('record_link_submenu_id')->constrained('fc_submenus')->nullOnDelete();
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down() {
    Schema::table('fc_custom_fields', function (Blueprint $table) {
      $table->dropColumn(['rollup_target_predefined_field', 'rollup_target_field_id', 'rollup_target_submenu_id']);
    });
  }
}
