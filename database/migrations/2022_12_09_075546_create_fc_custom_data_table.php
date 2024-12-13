<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateFcCustomDataTable extends Migration {
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    Schema::create('fc_custom_data', function (Blueprint $table) {
      $table->id();
      $table->foreignId('record_id')->nullable()->constrained('fc_custom_records')->nullOnDelete();
      $table->foreignId('load_id')->nullable()->constrained('loads')->nullOnDelete();
      $table->foreignId('field_id')->nullable()->constrained('fc_custom_fields')->nullOnDelete();
      $table->string('text_value', 4000)->nullable();
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
    Schema::dropIfExists('fc_custom_data');
  }
}
