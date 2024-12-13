<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddAssigneeUserIdAndFollowUpDateColumnsInIncidentsTable extends Migration {
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    Schema::table('incidents', function (Blueprint $table) {
      $table->foreignId('assignee_user_id')->nullable()->after('closed_date')
        ->constrained('users')->nullOnDelete();
      $table->date('follow_up_date')->after('assignee_user_id')->nullable();
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down() {
    Schema::table('incidents', function (Blueprint $table) {
      $table->dropForeign(['assignee_user_id']);
      $table->dropColumn(['follow_up_date', 'assignee_user_id']);
    });
  }
}
