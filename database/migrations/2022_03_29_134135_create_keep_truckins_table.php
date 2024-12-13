<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateKeepTruckinsTable extends Migration {
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    Schema::create('keep_truckins', function (Blueprint $table) {
      $table->id();
      $table->unsignedBigInteger('company_id');
      $table->char('csrf_state', 40);
      $table->string('access_token', 4096)->nullable();
      $table->string('refresh_token', 512)->nullable();
      $table->timestamp('access_token_expires_at')->nullable();
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
    Schema::dropIfExists('keep_truckins');
  }
}
