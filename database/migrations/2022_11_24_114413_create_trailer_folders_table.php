<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTrailerFoldersTable extends Migration {
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    Schema::create('trailer_folders', function (Blueprint $table) {
      $table->id();
      $table->foreignId('company_id')->constrained('admin_company_details')->cascadeOnDelete();
      $table->string('folder_name');
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
    Schema::dropIfExists('trailer_folders');
  }
}