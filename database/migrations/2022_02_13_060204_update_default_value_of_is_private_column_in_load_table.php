<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class UpdateDefaultValueOfIsPrivateColumnInLoadTable extends Migration {
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    DB::transaction(function () {
      DB::table('loads')->update(['is_private' => false]);
    });

    Schema::table('loads', function (Blueprint $table) {
      $table->boolean('is_private')->default(false)->change();
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down() {
    Schema::table('loads', function (Blueprint $table) {
      $table->boolean('is_private')->default(true)->change();
    });
  }
}
