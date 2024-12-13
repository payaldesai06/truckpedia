<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateIncidentsTable extends Migration {
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    Schema::create('incidents', function (Blueprint $table) {
      $table->id();
      $table->foreignId('company_id')->constrained('admin_company_details')->cascadeOnDelete();
      $table->foreignId('tag_id')->nullable()->constrained('tags')->nullOnDelete();
      $table->date('incident_date')->nullable();
      $table->time('incident_time')->nullable();
      $table->tinyInteger('status')->nullable()->comment('1 is open, 2 is closed, 3 is denied');
      $table->date('closed_date')->nullable();
      $table->string('incident_claim_number')->nullable();
      $table->string('third_party_incident_claim_number')->nullable();
      $table->tinyInteger('saved_address_affected')->nullable()->comment('1 is yes, 2 is no');
      $table->tinyInteger('charge_back')->nullable()->comment('1 is yes, 2 is no');
      $table->decimal('charge_back_amount', 8, 2)->nullable();
      $table->tinyInteger('estimates')->nullable()->comment('1 is yes, 2 is no');
      $table->tinyInteger('cost_incurred')->nullable()->comment('1 is yes, 2 is no');
      $table->decimal('cost_amount', 8, 2)->nullable();
      $table->tinyInteger('involved_type')->nullable()
        ->comment('1 is employee, 2 is carrier, 3 is vendor');
      $table->tinyInteger('involved_person_type')->nullable()
        ->comment('1 is driver, 2 is yard hostler, 3 is carrier, 4 is vendor, 5 is mechanic');
      $table->foreignId('involved_user_id')->nullable()->constrained('users')->nullOnDelete();
      $table->foreignId('involved_third_party_id')->nullable()->constrained('customers')->nullOnDelete();
      $table->string('involved_third_party_person_name')->nullable();
      $table->tinyInteger('corrective_action_applied')->nullable()->comment('1 is yes, 2 is no');
      $table->tinyInteger('dot_recordable')->nullable()->comment('1 is yes, 2 is no');
      $table->tinyInteger('preventable')->nullable()->comment('1 is yes, 2 is no');
      $table->tinyInteger('at_fault')->nullable()->comment('1 is yes, 2 is no');
      $table->foreignId('truck_id')->nullable()->constrained('trucks')->nullOnDelete();
      $table->foreignId('trailer_id')->nullable()->constrained('trailers')->nullOnDelete();
      $table->tinyInteger('location_type')->nullable()
        ->comment('1 is hwy, 2 is store, 3 is supplier, 4 is vendor, 5 is yard, 6 is shop, 99 is other');
      $table->foreignId('saved_address_id')->nullable()->constrained('saved_addresses')->nullOnDelete();
      $table->tinyInteger('incident_type')->nullable()
        ->comment('1 is collision, 2 is fuel spill, 3 is product damage, 4 is property' .
          ' damage, 5 is bodily injury, 6 is theft, 7 is trailer damage, 8 is truck damage, 99 is other');
      $table->string('description', 4000)->nullable();
      $table->softDeletes();
      $table->timestamps();
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down() {
    Schema::dropIfExists('incidents');
  }
}
