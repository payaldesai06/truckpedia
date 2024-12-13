<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddColorToFcCustomFieldsSelectOptionsTable extends Migration {
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    Schema::table('fc_custom_fields_select_options', function (Blueprint $table) {
      $table->string('color')->nullable()->after('name');
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down() {
    Schema::table('fc_custom_fields_select_options', function (Blueprint $table) {
      $table->dropColumn('color');
    });
  }
}
