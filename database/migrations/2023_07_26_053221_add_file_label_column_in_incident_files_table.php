<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddFileLabelColumnInIncidentFilesTable extends Migration {
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    Schema::table('incident_files', function (Blueprint $table) {
      $table->unsignedTinyInteger('file_label')->nullable()
        ->comment('1 is ncicReport, 2 is jotform')->after('is_private');
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down() {
    Schema::table('incident_files', function (Blueprint $table) {
      $table->dropColumn('file_label');
    });
  }
}
