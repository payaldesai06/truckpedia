<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateFcCustomDataTypeMultiSelectTable extends Migration {
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    Schema::create('fc_custom_data_type_multi_select', function (Blueprint $table) {
      $table->id();
      $table->foreignId('record_id')->nullable()->constrained('fc_custom_records')->nullOnDelete();
      $table->foreignId('field_id')->constrained('fc_custom_fields')->cascadeOnDelete();
      $table->foreignId('multi_select_value')->constrained('fc_custom_fields_select_options')->cascadeOnDelete();
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
    Schema::dropIfExists('fc_custom_data_type_multi_select');
  }
}
