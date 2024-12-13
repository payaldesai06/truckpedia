<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateFcCustomFieldsTable extends Migration {
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    Schema::create('fc_custom_fields', function (Blueprint $table) {
      $table->id();
      $table->foreignId('submenu_id')->nullable()->constrained('fc_submenus')->nullOnDelete();
      $table->string('name')->nullable();
      $table->tinyInteger('custom_type')->comment("1 for text");
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
    Schema::dropIfExists('fc_custom_fields');
  }
}
