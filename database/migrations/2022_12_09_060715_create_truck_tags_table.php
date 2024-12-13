<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTruckTagsTable extends Migration {
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    Schema::create('truck_tags', function (Blueprint $table) {
      $table->foreignId('truck_id')->constrained('trucks')->cascadeOnDelete();
      $table->foreignId('tag_id')->constrained('tags')->cascadeOnDelete();
      $table->primary(['truck_id', 'tag_id']);
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down() {
    Schema::dropIfExists('truck_tags');
  }
}
