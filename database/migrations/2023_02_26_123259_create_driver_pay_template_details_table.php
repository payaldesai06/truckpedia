<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDriverPayTemplateDetailsTable extends Migration {
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    Schema::create('driver_pay_template_details', function (Blueprint $table) {
      $table->id();
      $table->foreignId('template_id')->constrained('driver_pay_templates')->cascadeOnDelete();
      $table->foreignId('field_id')->constrained('driver_pay_template_custom_fields')->cascadeOnDelete();
      $table->decimal('rate', 8, 2)->nullable();
      $table->decimal('percentage_in_fractional', 5, 4)->nullable();
      $table->decimal('pay_start_after', 6, 2)->nullable();
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
    Schema::dropIfExists('driver_pay_template_details');
  }
}
