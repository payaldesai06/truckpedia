<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMaintenanceV2IssuesTable extends Migration {
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    Schema::create('maintenance_v2_issues', function (Blueprint $table) {
      $table->id();
      $table->unsignedBigInteger('company_id');
      $table->foreign('company_id')->references('id')->on('admin_company_details')->onDelete('cascade');
      $table->string('issue_number')->nullable();
      $table->tinyInteger('status')->comment('1 = reported, 2 = scheduled, 3 = in_service, 4 = completed')->nullable();
      $table->unsignedBigInteger('reported_by_user_id')->nullable();
      $table->foreign('reported_by_user_id')->references('id')->on('users')->onDelete('cascade');
      $table->unsignedBigInteger('truck_id')->nullable();
      $table->foreign('truck_id')->references('id')->on('trucks')->onDelete('cascade');
      $table->unsignedBigInteger('trailer_id')->nullable();
      $table->foreign('trailer_id')->references('id')->on('trailers')->onDelete('cascade');
      $table->string('service_type')->nullable();
      $table->tinyInteger('priority')->comment('1 = high, 2 = medium, 3 = low')->nullable();
      $table->string('notes', 4000)->nullable();
      $table->string('service_location')->nullable();
      $table->timestamp('scheduled_start_time')->nullable();
      $table->timestamp('estimated_completion_time')->nullable();
      $table->string('estimated_cost')->nullable();
      $table->timestamp('arrived_for_service')->nullable();
      $table->timestamp('service_start_time')->nullable();
      $table->timestamp('updated_estimated_completion_time')->nullable();
      $table->timestamp('service_completed_time')->nullable();
      $table->string('time_in_service')->nullable();
      $table->string('final_cost')->nullable();
      $table->mediumInteger('odometer')->nullable();
      $table->unsignedBigInteger('last_modified_by_user_id')->nullable();
      $table->foreign('last_modified_by_user_id')->references('id')->on('users')->onDelete('cascade');
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
    Schema::dropIfExists('maintenance_v2_issues');
  }
}
