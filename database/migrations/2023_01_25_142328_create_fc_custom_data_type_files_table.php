<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateFcCustomDataTypeFilesTable extends Migration {
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    Schema::create('fc_custom_data_type_files', function (Blueprint $table) {
      $table->id();
      $table->foreignId('record_id')->nullable()->constrained('fc_custom_records')->nullOnDelete();
      $table->foreignId('field_id')->constrained('fc_custom_fields')->cascadeOnDelete();
      $table->string('original_file_name')->nullable();
      $table->string('storage_file_name')->nullable();
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
    Schema::dropIfExists('fc_custom_data_type_files');
  }
}
