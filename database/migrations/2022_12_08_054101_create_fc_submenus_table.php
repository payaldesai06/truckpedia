<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateFcSubmenusTable extends Migration {
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    Schema::create('fc_submenus', function (Blueprint $table) {
      $table->id();
      $table->foreignId('menu_id')->constrained('fc_menus')->cascadeOnDelete();
      $table->string('name')->nullable();
      $table->tinyInteger('predefined_data')->nullable()->comment('1 for load');
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
    Schema::dropIfExists('fc_submenus');
  }
}
