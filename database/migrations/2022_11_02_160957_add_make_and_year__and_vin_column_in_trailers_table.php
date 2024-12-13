<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddMakeAndYearAndVinColumnInTrailersTable extends Migration {
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    Schema::table('trailers', function (Blueprint $table) {
      $table->string('vin')->nullable()->after('number');
      $table->string('make')->nullable()->after('vin');
      $table->string('year')->nullable()->after('make');
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down() {
    Schema::table('trailers', function (Blueprint $table) {
      $table->dropColumn(['vin', 'make', 'year']);
    });
  }
}
