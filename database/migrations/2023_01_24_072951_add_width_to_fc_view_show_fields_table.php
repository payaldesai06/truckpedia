<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddWidthToFcViewShowFieldsTable extends Migration {
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    Schema::table('fc_view_show_fields', function (Blueprint $table) {
      $table->string('width')->after('field_id')->nullable();
      $table->tinyInteger('predefined_field')->after('field_id')->nullable();
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down() {
    Schema::table('fc_view_show_fields', function (Blueprint $table) {
      $table->dropColumn(['width', 'predefined_field']);
    });
  }
}
