<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddLoadCollaboratorAddedNotificationColumnInAutomationsTable extends Migration {
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    Schema::table('automations', function (Blueprint $table) {
      $table->tinyInteger('load_collaborator_added_notification')
        ->after('driver_upload_emails')->nullable();
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down() {
    Schema::table('automations', function (Blueprint $table) {
      $table->dropColumn('load_collaborator_added_notification');
    });
  }
}
