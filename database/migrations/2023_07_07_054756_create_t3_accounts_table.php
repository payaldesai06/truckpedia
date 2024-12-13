<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateT3AccountsTable extends Migration {
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    Schema::create('t3_accounts', function (Blueprint $table) {
      $table->id();
      $table->foreignId('company_id')->constrained('admin_company_details')
        ->cascadeOnDelete();
      $table->unsignedBigInteger('t3_company_id')->nullable();
      $table->string('t3_bearer_token')->nullable();
      $table->timestamps();
      $table->softDeletes();
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down() {
    Schema::dropIfExists('t3_accounts');
  }
}
