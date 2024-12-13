<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateChatMessagesTable extends Migration {
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    Schema::create('chat_messages', function (Blueprint $table) {
      $table->id();
      $table->foreignId('chat_id')->constrained('chats')->cascadeOnDelete();
      $table->string('text_message', 4000)->nullable();
      $table->string('storage_filename')->nullable();
      $table->string('original_filename')->nullable();
      $table->foreignId('sender_user_id')->nullable()->constrained('users')->nullOnDelete();
      $table->timestamps();
      $table->softDeletes();
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down() {
    Schema::dropIfExists('chat_messages');
  }
}
