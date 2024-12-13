<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDriverPayTemplatesTable extends Migration {
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    Schema::create('driver_pay_templates', function (Blueprint $table) {
      $table->id();
      $table->foreignId('company_id')->constrained('admin_company_details')->cascadeOnDelete();
      $table->string('name')->nullable();
      $table->tinyInteger('status')->comment('1 is active, 2 is inactive')->nullable();
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
    Schema::dropIfExists('driver_pay_templates');
  }
}
