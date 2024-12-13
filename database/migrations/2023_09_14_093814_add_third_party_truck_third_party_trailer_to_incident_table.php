<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddThirdPartyTruckThirdPartyTrailerToIncidentTable extends Migration {
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    Schema::table('incidents', function (Blueprint $table) {
      $table->string('third_party_truck')->after('trailer_id')->nullable();
      $table->string('third_party_trailer')->after('third_party_truck')->nullable();
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down() {
    Schema::table('incidents', function (Blueprint $table) {
      $table->dropColumn(['third_party_truck', 'third_party_trailer']);
    });
  }
}
