<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddRecordLinkToCustomFields extends Migration {
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    Schema::table('fc_custom_fields', function (Blueprint $table) {
      $table->foreignId('record_link_submenu_id')->nullable()->after('custom_type')->constrained('fc_submenus')->nullOnDelete();
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down() {
    Schema::table('fc_custom_fields', function (Blueprint $table) {
      $table->dropColumn('record_link_submenu_id');
    });
  }
}
