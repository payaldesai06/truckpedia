<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateLoadNotesTable extends Migration {
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    Schema::create('load_notes', function (Blueprint $table) {
      $table->id();
      $table->foreignId('load_id')->constrained('loads')->cascadeOnDelete();
      $table->string('note', 4000)->nullable();
      $table->foreignId('last_modified_by_user_id')->nullable()->constrained('users')->nullOnDelete();
      $table->softDeletes();
      $table->timestamps();
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down() {
    Schema::dropIfExists('load_notes');
  }
}
