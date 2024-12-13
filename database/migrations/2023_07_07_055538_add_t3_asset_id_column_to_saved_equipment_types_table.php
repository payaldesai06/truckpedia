<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddT3AssetIdColumnToSavedEquipmentTypesTable extends Migration {
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    Schema::table('saved_equipment_types', function (Blueprint $table) {
      $table->unsignedBigInteger('t3_asset_id')->nullable()
        ->after('height');
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down() {
    Schema::table('saved_equipment_types', function (Blueprint $table) {
      $table->dropColumn('t3_asset_id');
    });
  }
}
