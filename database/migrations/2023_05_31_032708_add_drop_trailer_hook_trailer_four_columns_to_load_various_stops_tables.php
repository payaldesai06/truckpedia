<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddDropTrailerHookTrailerFourColumnsToLoadVariousStopsTables extends Migration {
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    // Add columns to load_multi_purpose_stops table
    Schema::table('load_multi_purpose_stops', function (Blueprint $table) {
      $table->tinyInteger('drop_trailer_type')->comment('1 = loaded trailer, 2 = empty trailer')->nullable();
      $table->foreignId('drop_trailer_id')->nullable()->constrained('trailers')->nullOnDelete();
      $table->tinyInteger('hook_trailer_type')->comment('1 = loaded trailer, 2 = empty trailer')->nullable();
      $table->foreignId('hook_trailer_id')->nullable()->constrained('trailers')->nullOnDelete();
    });

    // Add columns to load_shippers table
    Schema::table('load_shippers', function (Blueprint $table) {
      $table->tinyInteger('drop_trailer_type')->comment('1 = loaded trailer, 2 = empty trailer')->nullable();
      $table->foreignId('drop_trailer_id')->nullable()->constrained('trailers')->nullOnDelete();
      $table->tinyInteger('hook_trailer_type')->comment('1 = loaded trailer, 2 = empty trailer')->nullable();
      $table->foreignId('hook_trailer_id')->nullable()->constrained('trailers')->nullOnDelete();
    });

    // Add columns to load_receivers table
    Schema::table('load_receivers', function (Blueprint $table) {
      $table->tinyInteger('drop_trailer_type')->comment('1 = loaded trailer, 2 = empty trailer')->nullable();
      $table->foreignId('drop_trailer_id')->nullable()->constrained('trailers')->nullOnDelete();
      $table->tinyInteger('hook_trailer_type')->comment('1 = loaded trailer, 2 = empty trailer')->nullable();
      $table->foreignId('hook_trailer_id')->nullable()->constrained('trailers')->nullOnDelete();
    });

    // Add columns to load_legs table
    Schema::table('load_legs', function (Blueprint $table) {
      $table->tinyInteger('drop_trailer_type')->comment('1 = loaded trailer, 2 = empty trailer')->nullable();
      $table->foreignId('drop_trailer_id')->nullable()->constrained('trailers')->nullOnDelete();
      $table->tinyInteger('hook_trailer_type')->comment('1 = loaded trailer, 2 = empty trailer')->nullable();
      $table->foreignId('hook_trailer_id')->nullable()->constrained('trailers')->nullOnDelete();
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down() {
    // Remove columns from load_multi_purpose_stops table
    Schema::table('load_multi_purpose_stops', function (Blueprint $table) {
      $table->dropForeign('load_multi_purpose_stops_drop_trailer_id_foreign');
      $table->dropForeign('load_multi_purpose_stops_hook_trailer_id_foreign');
      $table->dropColumn(['drop_trailer_type', 'drop_trailer_id', 'hook_trailer_type', 'hook_trailer_id']);
    });

    // Remove columns from load_shippers table
    Schema::table('load_shippers', function (Blueprint $table) {
      $table->dropForeign('load_shippers_drop_trailer_id_foreign');
      $table->dropForeign('load_shippers_hook_trailer_id_foreign');
      $table->dropColumn(['drop_trailer_type', 'drop_trailer_id', 'hook_trailer_type', 'hook_trailer_id']);
    });

    // Remove columns from load_receivers table
    Schema::table('load_receivers', function (Blueprint $table) {
      $table->dropForeign('load_receivers_drop_trailer_id_foreign');
      $table->dropForeign('load_receivers_hook_trailer_id_foreign');
      $table->dropColumn(['drop_trailer_type', 'drop_trailer_id', 'hook_trailer_type', 'hook_trailer_id']);
    });

    // Remove columns from load_legs table
    Schema::table('load_legs', function (Blueprint $table) {
      $table->dropForeign('load_legs_drop_trailer_id_foreign');
      $table->dropForeign('load_legs_hook_trailer_id_foreign');
      $table->dropColumn(['drop_trailer_type', 'drop_trailer_id', 'hook_trailer_type', 'hook_trailer_id']);
    });
  }
}
