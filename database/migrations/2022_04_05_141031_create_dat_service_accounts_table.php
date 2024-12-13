<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDatServiceAccountsTable extends Migration {
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    Schema::create('dat_service_accounts', function (Blueprint $table) {
      $table->id();
      $table->unsignedBigInteger('company_id');
      $table->string('username')->nullable();
      $table->string('password')->nullable();
      $table->string('access_token', 4096)->nullable();
      $table->timestamp('expires_when')->nullable();
      $table->foreign('company_id')->references('id')
        ->on('admin_company_details')->onDelete('cascade');
      $table->timestamps();
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down() {
    Schema::dropIfExists('dat_service_accounts');
  }
}
