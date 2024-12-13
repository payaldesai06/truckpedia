<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddOneOnOneUserIdsAndLoadIdsToChatsTable extends Migration {

  public function up() {
    Schema::table('chats', function (Blueprint $table) {
      $table->string('one_on_one_user_ids')->nullable()->unique()->after("owner_id")
        ->comment("Like 177-188, <smaller user_id>-<larger user_id>");
      $table->string('load_ids')->nullable()->unique()->after("one_on_one_user_ids")
        ->comment("Like 222 (when no synced load) or 222,333, <smaller load_id>,<larger load_id>");
    });
  }

  public function down() {
    Schema::table('chats', function (Blueprint $table) {
      $table->dropColumn('one_on_one_user_ids');
      $table->dropColumn('load_ids');
    });
  }
}
