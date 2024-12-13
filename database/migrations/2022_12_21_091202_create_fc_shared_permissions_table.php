<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateFcSharedPermissionsTable extends Migration {
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    Schema::create('fc_shared_permissions', function (Blueprint $table) {
      $table->id();
      $table->foreignId('menu_id')->nullable()->constrained('fc_menus')->cascadeOnDelete();
      $table->foreignId('submenu_id')->nullable()->constrained('fc_submenus')->cascadeOnDelete();
      $table->foreignId('user_id')->constrained('users')->cascadeOnDelete();
      $table->tinyInteger('access_level')->nullable()->comment('1 is admin, 2 is editor, 3 is viewer. null means no access.');
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
    Schema::dropIfExists('fc_shared_permissions');
  }
}
