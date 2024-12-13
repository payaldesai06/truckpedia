<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddTypeColumnInTagsTable extends Migration {

  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    Schema::table('tags', function (Blueprint $table) {
      $table->tinyInteger('type')->comment('1 for subsidiary, 2 for terminal, 3 for ownerOperator')->nullable()->after('business_name');
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down() {
    Schema::table('tags', function (Blueprint $table) {
      $table->dropColumn(['type']);
    });
  }
}
