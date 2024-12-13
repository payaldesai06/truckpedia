<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddCreatedByToCustomRecords extends Migration {
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    Schema::table('fc_custom_records', function (Blueprint $table) {
      $table->foreignId('last_modified_by')->after('submenu_id')->nullable()->constrained('users')->nullOnDelete();
      $table->foreignId('created_by')->after('submenu_id')->nullable()->constrained('users')->nullOnDelete();
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down() {
    Schema::table('fc_custom_records', function (Blueprint $table) {
      $table->dropColumn(['created_by', 'last_modified_by']);
    });
  }
}
