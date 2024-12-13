<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddInvolvedPersonNameTruckNumberTrailerNumberColumnToIncidentsTable
extends Migration {
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    Schema::table('incidents', function (Blueprint $table) {
      $table->string('involved_person_name')->after('involved_user_id')
        ->nullable();
      $table->string('truck_number')->after('truck_id')->nullable();
      $table->string('trailer_number')->after('trailer_id')->nullable();
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down() {
    Schema::table('incidents', function (Blueprint $table) {
      $table->dropColumn(['involved_person_name', 'truck_number', 'trailer_number']);
    });
  }
}
