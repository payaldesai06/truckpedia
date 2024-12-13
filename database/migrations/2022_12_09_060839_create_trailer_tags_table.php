<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTrailerTagsTable extends Migration {
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    Schema::create('trailer_tags', function (Blueprint $table) {
      $table->foreignId('trailer_id')->constrained('trailers')->cascadeOnDelete();
      $table->foreignId('tag_id')->constrained('tags')->cascadeOnDelete();
      $table->primary(['trailer_id', 'tag_id']);
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down() {
    Schema::dropIfExists('trailer_tags');
  }
}
