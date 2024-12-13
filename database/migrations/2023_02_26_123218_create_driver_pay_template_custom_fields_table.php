<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDriverPayTemplateCustomFieldsTable extends Migration {
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    Schema::create('driver_pay_template_custom_fields', function (Blueprint $table) {
      $table->id();
      $table->foreignId('company_id')->constrained('admin_company_details')->cascadeOnDelete();
      $table->tinyInteger('target')->comment('1 for load, 2 for trip')->nullable();
      $table->tinyInteger('type')->nullable();
      $table->string('name')->nullable();
      $table->decimal('default_rate', 8, 2)->nullable();
      $table->decimal('default_percentage_in_fractional', 5, 4)->nullable();
      $table->decimal('default_pay_start_after', 6, 2)->nullable();
      $table->string('default_account')->nullable();
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
    Schema::dropIfExists('driver_pay_template_custom_fields');
  }
}
