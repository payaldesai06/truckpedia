<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateFcCustomFieldsSelectOptionsTable extends Migration {
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    Schema::create('fc_custom_fields_select_options', function (Blueprint $table) {
      $table->id();
      $table->foreignId('field_id')->constrained('fc_custom_fields')->cascadeOnDelete();
      $table->string('name')->nullable();
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
    Schema::dropIfExists('fc_custom_fields_select_options');
  }
}
