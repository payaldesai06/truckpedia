<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateFcCustomDataTypeUserTable extends Migration {
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    Schema::create('fc_custom_data_type_user', function (Blueprint $table) {
      $table->id();
      $table->foreignId('record_id')->nullable()->constrained('fc_custom_records')->cascadeOnDelete();
      $table->foreignId('field_id')->constrained('fc_custom_fields')->cascadeOnDelete();
      $table->foreignId('user_id')->nullable()->constrained('users')->cascadeOnDelete();
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
    Schema::dropIfExists('fc_custom_data_type_user');
  }
}
