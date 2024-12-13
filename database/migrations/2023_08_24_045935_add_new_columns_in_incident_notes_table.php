<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddNewColumnsInIncidentNotesTable extends Migration {
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    Schema::table('incident_notes', function (Blueprint $table) {
      $table->tinyInteger('contact_type')->nullable()->after('local_time')
        ->comment('1 is adjuster, 2 is appraiser, 3 is attorney, 4 is tpa');
      $table->string('name')->nullable()->after('contact_type');
      $table->string('phone')->nullable()->after('name');
      $table->string('email')->nullable()->after('phone');
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down() {
    Schema::table('incident_notes', function (Blueprint $table) {
      $table->dropColumn(['contact_type', 'name', 'phone', 'email']);
    });
  }
}
