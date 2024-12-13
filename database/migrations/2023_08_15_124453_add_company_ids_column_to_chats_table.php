<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddCompanyIdsColumnToChatsTable extends Migration {
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    Schema::table('chats', function (Blueprint $table) {
      $table->string('company_ids')->nullable()->unique()
        ->after("one_on_one_user_ids")
        ->comment("Like 177+188, <smaller company_id>+<larger company_id>");
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down() {
    Schema::table('chats', function (Blueprint $table) {
      $table->dropColumn('company_ids');
    });
  }
}
