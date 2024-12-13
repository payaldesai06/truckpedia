<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class UpdateDriverDetailsTable extends Migration {
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    Schema::table('driver_details', function (Blueprint $table) {
      $table->foreignId('assignment_truck_id')->nullable()->constrained('trucks')->nullOnDelete();
      $table->foreignId('driver_truck_assignment_id')->nullable()->constrained('driver_truck_assignments')->nullOnDelete();
      $table->foreignId('assignment_trailer_id')->nullable()->constrained('trailers')->nullOnDelete();
      $table->foreignId('driver_trailer_assignment_id')->nullable()->constrained('driver_trailer_assignments')->nullOnDelete();
      $table->tinyInteger('team_driver')->nullable()->comment('1 if turned on, null if turned off');
      $table->tinyInteger('local_driver')->nullable()->comment('1 if turned on, null if turned off');
      $table->string('ssn')->nullable();
      $table->date('birth_date')->nullable();
      $table->string('origin_country')->nullable();
      $table->tinyInteger('gender')->nullable()->comment('1 for Male, 2 for Female, 3 for Other');
      $table->string('marital_status')->nullable();
      $table->string('race')->nullable();
      $table->string('shirt_size')->nullable();
      $table->date('original_driver_license_date')->nullable();
      $table->string('endorsements')->nullable()->comment('Save one or more characters from ‘N’, ‘H’, ‘X’, and ‘T’. No need to implode by ,');
      $table->date('occupation_expire_date')->nullable();
      $table->date('clearinghouse_expire_date')->nullable();
      $table->date('occ_ins_start_date')->nullable();
      $table->date('occ_ins_end_date')->nullable();
      $table->date('wc_ins_start_date')->nullable();
      $table->date('wc_ins_end_date')->nullable();
      $table->date('ifta_add_date')->nullable();
      $table->date('ifta_remove_date')->nullable();
      $table->date('off_duty_until')->nullable();
      $table->string('off_duty_comment')->nullable();
      $table->date('estimated_return_date')->nullable();
      $table->date('date_added')->nullable();
      $table->date('date_removed')->nullable();
      $table->string('termination_reason')->nullable();
      $table->string('salary_target')->nullable();
      $table->string('recruiter')->nullable();
      $table->string('source')->nullable();
      $table->string('referred_by')->nullable();
      $table->string('fuel_card_number')->nullable();
      $table->string('emgy_contact_name')->nullable();
      $table->string('emgy_contact_phone')->nullable();
      $table->string('emgy_contact_relationship')->nullable();
      $table->string('emgy_contact_email')->nullable();
      $table->string('emgy_contact_address')->nullable();
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down() {
    Schema::table('driver_details', function (Blueprint $table) {
      $table->dropColumn([
        'assignment_truck_id',
        'driver_truck_assignment_id',
        'assignment_trailer_id',
        'driver_trailer_assignment_id',
        'team_driver',
        'local_driver',
        'ssn',
        'birth_date',
        'origin_country',
        'gender',
        'marital_status',
        'race',
        'shirt_size',
        'original_driver_license_date',
        'endorsements',
        'occupation_expire_date',
        'clearinghouse_expire_date',
        'occ_ins_start_date',
        'occ_ins_end_date',
        'wc_ins_start_date',
        'wc_ins_end_date',
        'ifta_add_date',
        'ifta_remove_date',
        'off_duty_until',
        'off_duty_comment',
        'estimated_return_date',
        'date_added',
        'date_removed',
        'termination_reason',
        'salary_target',
        'recruiter',
        'source',
        'referred_by',
        'fuel_card_number',
        'emgy_contact_name',
        'emgy_contact_phone',
        'emgy_contact_relationship',
        'emgy_contact_email',
        'emgy_contact_address',
      ]);
    });
  }
}
