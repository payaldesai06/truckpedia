<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddThirdPartyCarrierRateConStorageFileNameAndBolStorageFileNameColumnToLoadsTable
  extends Migration {
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    Schema::table('loads', function (Blueprint $table) {
      $table->string('third_party_carrier_rate_con_storage_file_name')->nullable()
        ->after('third_party_carrier_rate_con_type');
      $table->string('third_party_carrier_bol_storage_file_name')->nullable()
        ->after('third_party_carrier_rate_con_storage_file_name');
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down() {
    Schema::table('loads', function (Blueprint $table) {
      $table->dropColumn(['third_party_carrier_rate_con_storage_file_name',
        'third_party_carrier_bol_storage_file_name'
      ]);
    });
  }
}
