<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCommonKeyValuePairsTable extends Migration {
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    Schema::create('common_key_value_pairs', function (Blueprint $table) {
      $table->id();
      $table->string('key')->nullable();
      $table->string('value', 4096)->nullable();
      $table->timestamp('expires_when')->nullable();
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
    Schema::dropIfExists('common_key_value_pairs');
  }
}
