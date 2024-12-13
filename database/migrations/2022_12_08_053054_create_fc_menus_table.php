<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateFcMenusTable extends Migration {
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    Schema::create('fc_menus', function (Blueprint $table) {
      $table->id();
      $table->foreignId('company_id')->nullable()->constrained('admin_company_details')->nullOnDelete();
      $table->foreignId('owner_id')->nullable()->constrained('users')->nullOnDelete();
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
    Schema::dropIfExists('fc_menus');
  }
}
