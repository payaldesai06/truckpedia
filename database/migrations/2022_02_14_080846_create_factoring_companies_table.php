<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateFactoringCompaniesTable extends Migration {
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    Schema::create('factoring_companies', function (Blueprint $table) {
      $table->id();
      $table->unsignedBigInteger('company_id');
      $table->string('name', 255);
      $table->string('billing_email', 255);
      $table->string('address', 255);
      $table->string('city', 255);
      $table->string('state', 255);
      $table->string('zip_code', 255);
      $table->string('phone_number', 255);
      $table->softDeletes();
      $table->timestamps();
      $table->foreign('company_id')->references('id')->on('admin_company_details')->onDelete('cascade');
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down() {
    Schema::dropIfExists('factoring_companies');
  }
}