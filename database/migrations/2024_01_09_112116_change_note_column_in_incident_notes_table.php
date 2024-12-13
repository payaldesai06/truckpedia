<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class ChangeNoteColumnInIncidentNotesTable extends Migration {
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    Schema::table('incident_notes', function (Blueprint $table) {
      $table->mediumText('note')->nullable()->change();
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down() {
    Schema::table('incident_notes', function (Blueprint $table) {
      $table->string('note', 4000)->nullable()->change();
    });
  }
}
