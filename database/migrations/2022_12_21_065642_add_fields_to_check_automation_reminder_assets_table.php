<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddFieldsToCheckAutomationReminderAssetsTable extends Migration {
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    Schema::table('automation_reminder_assets', function (Blueprint $table) {
      $table->string('fields_to_check')->nullable()->after('original_input_due_date');
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down() {
    Schema::table('automation_reminder_assets', function (Blueprint $table) {
      $table->dropColumn('fields_to_check');
    });
  }
}
