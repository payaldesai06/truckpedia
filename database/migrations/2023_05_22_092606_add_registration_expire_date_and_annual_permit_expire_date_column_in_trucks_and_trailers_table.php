<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddRegistrationExpireDateAndAnnualPermitExpireDateColumnInTrucksAndTrailersTable extends Migration {
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    Schema::table('trucks', function (Blueprint $table) {
      $table->date('registration_expire_date')->nullable()->after('insurance_expire_date');
      $table->date('annual_permit_expire_date')->nullable()->after('registration_expire_date');
    });
    Schema::table('trailers', function (Blueprint $table) {
      $table->date('registration_expire_date')->nullable()->after('insurance_expire_date');
      $table->date('annual_permit_expire_date')->nullable()->after('registration_expire_date');
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down() {
    Schema::table('trucks', function (Blueprint $table) {
      $table->dropColumn(['registration_expire_date', 'annual_permit_expire_date']);
    });
    Schema::table('trailers', function (Blueprint $table) {
      $table->dropColumn(['registration_expire_date', 'annual_permit_expire_date']);
    });
  }
}
