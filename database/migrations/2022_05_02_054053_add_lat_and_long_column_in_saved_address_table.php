<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddLatAndLongColumnInSavedAddressTable extends Migration {
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    Schema::table('saved_addresses', function (Blueprint $table) {
      $table->decimal('latitude', 10, 8)->nullable()->after('zip_code');
      $table->decimal('longitude', 11, 8)->nullable()->after('latitude');
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down() {
    Schema::table('saved_addresses', function (Blueprint $table) {
      $table->dropColumn(['latitude', 'longitude']);
    });
  }
}
