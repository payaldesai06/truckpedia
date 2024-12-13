<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateFcViewsTable extends Migration {
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    Schema::create('fc_views', function (Blueprint $table) {
      $table->id();
      $table->foreignId('submenu_id')->constrained('fc_submenus')->cascadeOnDelete();
      $table->string('name')->nullable();
      $table->tinyInteger('ui_type')->comment("1 for list, 2 for table, 3 for board, 4 for gantt");
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
    Schema::dropIfExists('fc_views');
  }
}
