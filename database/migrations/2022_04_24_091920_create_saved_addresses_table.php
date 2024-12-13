<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSavedAddressesTable extends Migration {
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    Schema::create('saved_addresses', function (Blueprint $table) {
      $table->id();
      $table->unsignedBigInteger('company_id');
      $table->string('name');
      $table->string('address');
      $table->string('state');
      $table->string('city');
      $table->string('zip_code');
      $table->string('contact')->nullable();
      $table->string('phone')->nullable();
      $table->string('email')->nullable();
      $table->foreign('company_id')->references('id')->on('admin_company_details')->onDelete('cascade');
      $table->timestamps();
      $table->index(['name']);
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down() {
    Schema::dropIfExists('saved_addresses');
  }
}
