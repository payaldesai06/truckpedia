<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddIsPrivateAndColorToFcSubmenus extends Migration {
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    Schema::table('fc_submenus', function (Blueprint $table) {
      $table->string('color')->nullable()->after('predefined_data');
      $table->tinyInteger('is_private')->after('predefined_data')->nullable()->comment('1 for yes, null for no');
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down() {
    Schema::table('fc_submenus', function (Blueprint $table) {
      $table->dropColumn(['is_private','color']);
    });
  }
}
