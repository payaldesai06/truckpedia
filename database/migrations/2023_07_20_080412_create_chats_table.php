<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateChatsTable extends Migration {
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    Schema::create('chats', function (Blueprint $table) {
      $table->id();
      $table->tinyInteger('type')->nullable()
        ->comment('1 is 1:1 private chat, 2 is group chat, 3 is load chat');
      $table->string('chat_name')->nullable();
      $table->foreignId('owner_id')->nullable()->constrained('users')->nullOnDelete();
      $table->timestamp('last_message_utc')->nullable();
      $table->timestamp('created_at')->nullable();
      $table->softDeletes();
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down() {
    Schema::dropIfExists('chats');
  }
}
