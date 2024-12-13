<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateFcViewShowFieldsTable extends Migration {
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    Schema::create('fc_view_show_fields', function (Blueprint $table) {
      $table->id();
      $table->foreignId('view_id')->constrained('fc_views')->cascadeOnDelete();
      $table->smallInteger('order')->nullable();
      $table->foreignId('field_id')->nullable()->constrained('fc_custom_fields')->cascadeOnDelete();
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
    Schema::dropIfExists('fc_view_show_fields');
  }
}
