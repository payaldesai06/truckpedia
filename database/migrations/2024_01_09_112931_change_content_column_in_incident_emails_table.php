<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class ChangeContentColumnInIncidentEmailsTable extends Migration {
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    Schema::table('incident_emails', function (Blueprint $table) {
      $table->mediumText('content')->nullable()->change();
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down() {
    Schema::table('incident_emails', function (Blueprint $table) {
      $table->string('content', 10000)->nullable()->change();
    });
  }
}
