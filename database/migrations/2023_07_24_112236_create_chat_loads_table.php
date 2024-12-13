<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateChatLoadsTable extends Migration {
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    Schema::create('chat_loads', function (Blueprint $table) {
      $table->id();
      $table->foreignId('chat_id')->constrained('chats')->cascadeOnDelete();
      $table->foreignId('load_id')->constrained('loads')->cascadeOnDelete();
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
    Schema::dropIfExists('chat_loads');
  }
}
