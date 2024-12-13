<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateLoadCollaboratorsTable extends Migration {
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    Schema::create('load_collaborators', function (Blueprint $table) {
      $table->id();
      $table->unsignedBigInteger('load_id');
      $table->string('name', 255)->nullable();
      $table->string('email', 255);
      $table->foreign('load_id')->references('id')->on('loads')->onDelete('cascade');
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
    Schema::dropIfExists('load_collaborators');
  }
}
